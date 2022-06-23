"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, UserDoctors
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)



#create token for normal user authentication
@api.route("/signin/user", methods=["POST"])
def create_token_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password ).first()


    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    print(user.id)
    access_token = create_access_token(identity=user.id)
    
    return jsonify({'access_token':access_token,'user': user.serialize()})

@api.route('/user/register', methods=['POST'])
def register_user():
    body = request.json # get the request body content
    email = request.json.get('email')
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    phone = request.json.get('phone')
    password = request.json.get('password')
    
    if body is None:
        return "The request body is null", 400
    if not email:
        return 'You need to enter an email',400
    if not first_name:
        return 'You need to enter an fname',400
    if not last_name:
        return 'You need to enter an lname',400
    if not password:
        return 'You need to enter a password', 400

    
    check_user = User.query.filter_by(email=email).first()

    if check_user is not None:
        return jsonify({
            'msg': 'The email address already exists. Please login to your account to continue.'
        }),409

    user = User(email=email, first_name=fname, last_name=lname, password=password, is_active=True)

    db.session.add(user)
    db.session.commit()
   
    payload = {
        'msg': 'Your account has been registered successfully.',
        'user': user.serialize()
    }

    return jsonify(payload), 200

#here finisg user routes

#here start doctors route
@api.route('/signin/doctors', methods=['POST'])
def create_token_doctors(id):

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user_doctors = User.query.filter_by(email=email, password=password ).first()


    if user_doctors is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    print(user_doctors.id)
    access_token = create_access_token(identity=user.id)
    
    return jsonify({'access_token':access_token, 'user': user_doctors.serialize()})



@api.route('/userdoctors/register', methods=['POST'])
def register_user_doctors():
    body = request.json

    user_doctors = User(email=body['email'], password=body['password'] )
    db.session.add(user_doctors)
    db.session.commit()

    return jsonify({"message" : "your user has been registered"}), 200

#SignUp and Login Methods for doctors ---------------------------------------------------



#User Methods ---------------------------------------------------------------

#Get User by ID
@api.route('/user/<id>', methods=['GET'])
def get_specific_user(id):

    user_query = User.query.get(id)

    return jsonify(
        user_query.serialize()
    ), 200

#Update UserHelpers Profile
# @api.route('/user/helpers/<id>', methods=['PUT'])
# def change_helper_profile(id):
    
#     my_profile = User.query.get(id)

#     body = request.get_json()

#     my_profile.full_name = body["full_name"]
#     my_profile.email = body["email"]
#     my_profile.phone = body["phone"]

#     db.session.commit()

#     profile_query = User.query.get(id)

#     if profile_query.full_name == body["full_name"]:
#         return jsonify(profile_query.serialize()), 200
#     raise APIException("Update Failed")






# #get UserHelpers Profile
# @api.route('/profile', methods=['GET'])
# def get_profiles():
#     profile_query = Profile.query.all()
#     all_profiles = list(map(lambda x: x.serialize(), profile_query))
#     response_body = {
#         "msg": "Hello, this is your GET /user response "
#     }

#     return jsonify(all_profiles), 200

# @api.route('/profile', methods=['POST'])
# def post_profiles():
#     body = request.get_json()

#     profile1 = Profile(title= body['title'], aboutme= body['aboutme'], howicanhelp= body['howicanhelp'], services=body['services'], certifications=body['certifications'], comments=['comments'])
#     db.session.add(profile1)
#     db.session.commit()
    
#     return jsonify(profile1.serialize()), 200

    

# @api.route('/profile/<int:id>', methods=['PUT'])
# def edit_profiles(id):
#     body = request.get_json()

#     profile_id = Profile.query.get(id)
#     if profile_id is None:
#         raise APIException('User not found', status_code=404)

#     if "title" in body:
#         profile_id.title = body["title"]
#     if "aboutme" in body:
#         profile_id.aboutme= body["aboutme"]
#     if "howicanhelp" in body:
#         profile_id.howicanhelp = body["howicanhelp"]
#     if "services" in body:
#         profile_id.services= body["services"]
#     if "certifications" in body:
#         profile_id.certifications = body["certifications"]
#     if "comments" in body:
#         profile_id.comments= body["comments"]


#         db.session.commit()

#     profile_query = Profile.query.all()
#     all_profiles = list(map(lambda x: x.serialize(), profile_query))

#     return jsonify(all_profiles), 200

    

# @api.route('/profile/<int:id>', methods=['DELETE'])
# def delete_todos(id):
#     profile_id = Profile.query.get(id)
#     if profile_id is None:
#         raise APIException('User not found', status_code=404)
   
#     db.session.delete(profile_id)
#     db.session.commit()

    
#     profile_query = Profile.query.all()
#     all_profiles = list(map(lambda x: x.serialize(), profile_query))

#     return jsonify(all_profiles), 200
