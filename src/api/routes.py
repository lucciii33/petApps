"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Profile
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


#Initial GET method
@api.route('/user', methods=['GET'])
def get_users():

    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))

    return jsonify(
        all_users
    ), 200

#SignUp and Login Methods ---------------------------------------------------

#Sign Up (Adding a new user)
@api.route('/user', methods=['POST'])
def add_new_user():

    body = request.get_json()

    new_user = User(
        user_type=body["user_type"], 
        full_name=body["full_name"], 
        email=body["email"], 
        password=body["password"], 
        phone=body["phone"],
        rating="",
    )

    db.session.add(new_user)
    db.session.commit()

    users_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users_query))
    return jsonify(all_users), 200

#Login (Validating Existing User)
@api.route('/login', methods=['POST'])
def user_login():

    body = request.get_json()

    user = User.query.filter_by(email = body["email"], password = body["password"]).first()

    if user == None:
        return "email or password is incorrect", 400
    return jsonify(
        user.serialize()
    ), 200

#User Methods ---------------------------------------------------------------

#Get User by ID
@api.route('/user/<id>', methods=['GET'])
def get_specific_user(id):

    user_query = User.query.get(id)

    return jsonify(
        user_query.serialize()
    ), 200

#Update UserHelpers Profile
@api.route('/user/helpers/<id>', methods=['PUT'])
def change_helper_profile(id):
    
    my_profile = User.query.get(id)

    body = request.get_json()

    my_profile.full_name = body["full_name"]
    my_profile.email = body["email"]
    my_profile.phone = body["phone"]

    db.session.commit()

    profile_query = User.query.get(id)

    if profile_query.full_name == body["full_name"]:
        return jsonify(profile_query.serialize()), 200
    raise APIException("Update Failed")






#get UserHelpers Profile
@api.route('/profile', methods=['GET'])
def get_profiles():
    profile_query = Profile.query.all()
    all_profiles = list(map(lambda x: x.serialize(), profile_query))
    response_body = {
        "msg": "Hello, this is your GET /user response "
    }

    return jsonify(all_profiles), 200

@api.route('/profile', methods=['POST'])
def post_profiles():
    body = request.get_json()

    profile1 = Profile(title= body['title'], aboutme= body['aboutme'], howicanhelp= body['howicanhelp'], services=body['services'], certifications=body['certifications'], comments=['comments'])
    db.session.add(profile1)
    db.session.commit()
    
    return jsonify(profile1.serialize()), 200

    

@api.route('/profile/<int:id>', methods=['PUT'])
def edit_profiles(id):
    body = request.get_json()

    profile_id = Profile.query.get(id)
    if profile_id is None:
        raise APIException('User not found', status_code=404)

    if "title" in body:
        profile_id.title = body["title"]
    if "aboutme" in body:
        profile_id.aboutme= body["aboutme"]
    if "howicanhelp" in body:
        profile_id.howicanhelp = body["howicanhelp"]
    if "services" in body:
        profile_id.services= body["services"]
    if "certifications" in body:
        profile_id.certifications = body["certifications"]
    if "comments" in body:
        profile_id.comments= body["comments"]


        db.session.commit()

    profile_query = Profile.query.all()
    all_profiles = list(map(lambda x: x.serialize(), profile_query))

    return jsonify(all_profiles), 200

    

@api.route('/profile/<int:id>', methods=['DELETE'])
def delete_todos(id):
    profile_id = Profile.query.get(id)
    if profile_id is None:
        raise APIException('User not found', status_code=404)
   
    db.session.delete(profile_id)
    db.session.commit()

    
    profile_query = Profile.query.all()
    all_profiles = list(map(lambda x: x.serialize(), profile_query))

    return jsonify(all_profiles), 200
