from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserDoctors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    phone = db.Column(db.String(120), unique=False, nullable=True)
    rating = db.Column(db.String(120), nullable=True)
    specialty = db.Column(db.String(120), unique=False, nullable=False)
    sub_specialty = db.Column(db.String(120), unique=False, nullable=True)
    years_of_experience = db.Column(db.Integer, unique=False)
    aboutme = db.Column(db.String(520), unique=False, nullable=True)
    howicanhelp = db.Column(db.String(520), unique=False, nullable=True)
    services = db.Column(db.String(520), unique=False, nullable=True)
    certifications = db.Column(db.String(520), unique=False, nullable=True)

    # profiles = db.relationship('Profile', backref='profiles', lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "full_name": self.full_name,
            "phone": self.phone,
            "is_active": self.is_active,
            "rating": self.rating,
            "specialty": self.specialty,
            "sub_specialty": self.sub_specialty,
            "years_of_experience": self.years_of_experience

            # do not serialize the password, its a security breach
        }
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.String(120), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,


            # do not serialize the password, its a security breach
        }

# class Profile(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(120), unique=False, nullable=True)
#     aboutme = db.Column(db.String(520), unique=False, nullable=True)
#     howicanhelp = db.Column(db.String(520), unique=False, nullable=True)
#     services = db.Column(db.String(520), unique=False, nullable=True)
#     certifications = db.Column(db.String(520), unique=False, nullable=True)
#     comments = db.Column(db.String(120), unique=False, nullable=True)
#     #Foreign Keys
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=True)
    
    
#     def __repr__(self):
#         return '<Recipe %r>' % self.title

#     def serialize(self):
#         return {
#             "id": self.id,
#             "title": self.title,
#             "aboutme": self.aboutme,
#             "howicanhelp": self.howicanhelp,
#             "services": self.services,
#             "certifications": self.certifications,
#             "comments": self.comments,
#             "user_id": self.user_id,
#         }