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
from hashlib import sha256
import cloudinary
import cloudinary.uploader

api = Blueprint('api', __name__)



#create token for normal user authentication
@api.route("/user/signin", methods=["POST"])
def create_token_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password ).first()


    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    print(user.id)
    access_token = create_access_token(identity=user.id)
    
    return jsonify({'access_token':access_token, 'user': user.serialize()})

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

    user = User(email=email, first_name=first_name, last_name=last_name, password=password, phone=phone)

    db.session.add(user)
    db.session.commit()
   
    payload = {
        'msg': 'Your account has been registered successfully.',
        'user': user.serialize()
    }

    return jsonify(payload), 200

@api.route('/user/register/new', methods=['POST'])
def register_user_new():
    body = request.json

    user = User(email=body['email'], password=body['password'] )
    db.session.add(user)
    db.session.commit()

    return jsonify({"message" : "your user has been registered"}), 200

@api.route('/user', methods=['GET'])
def get_user():
    
    user_query = User.query.all()
    all_users = list(map(lambda x: x.serialize(),  user_query))
    
    return jsonify(all_users), 200

#here finisg user routes

#here start doctors route
@api.route('/signin/doctors', methods=['POST'])
def create_token_doctors():

    h = sha256()

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    

    h.update(password.encode('utf-8'))
    hash = h.hexdigest()
    user_doctors = UserDoctors.query.filter_by(email=email, password=hash ).first()


    if user_doctors is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    print(user_doctors.id)
    print(user_doctors)
    access_token = create_access_token(identity=user_doctors.id)
    
    return jsonify({'access_token':access_token, 'user': user_doctors.serialize()})



@api.route('/userdoctors/register', methods=['POST'])
def register_user_doctors():

    h = sha256()

    body = request.json # get the request body content
    email = request.json.get('email')
    full_name = request.json.get('full_name')
    phone = request.json.get('phone')
    password = request.json.get('password')
    specialty = request.json.get('specialty')
    sub_specialty = request.json.get('sub_specialty')
    years_of_experience = request.json.get('years_of_experience')
    aboutme = request.json.get('aboutme')
    howicanhelp = request.json.get('howicanhelp')
    services = request.json.get('services')
    certifications = request.json.get('certifications')
    image_profile = request.json.get('image_profile')

    h.update(password.encode('utf-8'))
    hash = h.hexdigest()
    print("hash!!!!!!!!!!!",hash)
    
    if body is None:
        return "The request body is null", 400
    if not email:
        return 'You need to enter an email',400
    if not  full_name:
        return 'You need to enter an fname',400
    if not phone:
        return 'You need to enter an lname',400
    if not password:
        return 'You need to enter a password', 400
    if not  specialty:
        return 'You need to enter an fname',400
    if not  sub_specialty:
        return 'You need to enter an fname',400
    if not years_of_experience:
        return 'You need to enter a password', 400
    if not aboutme:
         return 'You need to enter an email',400
    if not  howicanhelp:
         return 'You need to enter an fname',400
    if not services:
         return 'You need to enter an lname',400
    if not certifications:
         return 'You need to enter a password', 400

    
    check_user = UserDoctors.query.filter_by(email=email).first()

    if check_user is not None:
        return jsonify({
            'msg': 'The email address already exists. Please login to your account to continue.'
        }),409

    doctor = UserDoctors(email=email, full_name=full_name, password=hash, phone=phone, specialty=specialty, sub_specialty=sub_specialty, years_of_experience=years_of_experience,aboutme=aboutme,howicanhelp=howicanhelp,services=services,certifications=certifications  )

    db.session.add(doctor)
    db.session.commit()
   
    payload = {
        'msg': 'Your account has been registered successfully.',
        'doctor': doctor.serialize()
    }

    return jsonify(payload), 200

#SignUp and Login Methods for doctors ---------------------------------------------------


#User Methods ---------------------------------------------------------------

#Get Userdoctors
@api.route('/userdoctors', methods=['GET'])
def get_userDoctors():
    
    user_query = UserDoctors.query.all()
    all_usersdoctors = list(map(lambda x: x.serialize(),  user_query))
    
    return jsonify(all_usersdoctors), 200

#here you can get all doctors by id

@api.route('/userdoctors/<int:id>', methods=['GET'])
def get_single_user(id):
    single_user = UserDoctors.query.get(id)
    return jsonify(single_user.serialize()), 200

#here we are going to start the put method so we can edit the doctors profile

@api.route('/userdoctors/profile/<int:id>', methods=['PUT'])
def edit_profile(id):

    

    email = request.json.get("email")
    full_name = request.json.get("full_name")
    phone = request.json.get("phone")
    specialty = request.json.get("specialty")
    sub_specialty = request.json.get("sub_specialty")
    years_of_experience = request.json.get("years_of_experience")
    id = request.json.get("id")

    profile_id = UserDoctors.query.filter_by(id=id).one_or_none()
    if profile_id is None:
        raise APIException('Profile no found', status_code=404)

    if email:
        profile_id.email = email
    if full_name:
        profile_id.full_name = full_name
    if phone:
        profile_id.phone = phone
    if specialty:
        profile_id.specialty = specialty
    if sub_specialty:
        profile_id.sub_specialty = sub_specialty
    if years_of_experience:
        profile_id.years_of_experience = years_of_experience

    
    # UserDoctors.query.filter_by(id=id).update(dict(email=body["email"], full_name = body["full_name"], phone = body["phone"], specialty=body["specialty"], sub_specialty=body["sub_specialty"], years_of_experience=body["years_of_experience"]))
    db.session.commit()

    # updatedUsersDoctor = UserDoctors.query.get(id)

    return jsonify( profile_id.serialize())

#here is the second part of the profile 


@api.route('/userdoctors/profiletwo/<int:id>', methods=['PUT'])
def edit_profiletwo(id):

    

    aboutme = request.json.get("aboutme")
    howicanhelp = request.json.get("howicanhelp")
    services = request.json.get("services")
    certifications = request.json.get("certifications")
    id = request.json.get("id")

    profiletwo_id = UserDoctors.query.filter_by(id=id).one_or_none()
    if profiletwo_id is None:
        raise APIException('Profile no found', status_code=404)

    if aboutme:
        profiletwo_id.aboutme = aboutme
    if howicanhelp:
        profiletwo_id.howicanhelp = howicanhelp
    if services:
        profiletwo_id.services = services
    if certifications:
        profiletwo_id.certifications = certifications

    # UserDoctors.query.filter_by(id=id).update(dict(email=body["email"], full_name = body["full_name"], phone = body["phone"], specialty=body["specialty"], sub_specialty=body["sub_specialty"], years_of_experience=body["years_of_experience"]))
    db.session.commit()

    # updatedUsersDoctor = UserDoctors.query.get(id)

    return jsonify( profiletwo_id.serialize())

@api.route('/upload', methods=['POST'])
def send_image():

#    print(request.files)
   result = cloudinary.uploader.upload(request.files["profile_image"])

   return jsonify("successfully"), 200
    

