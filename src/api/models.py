from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_type = db.Column(db.String(120), nullable=True)
    full_name = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    phone = db.Column(db.String(120), unique=False, nullable=True)
    rating = db.Column(db.String(120), nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=True)
    aboutme = db.Column(db.String(520), unique=False, nullable=True)
    howicanhelp = db.Column(db.String(520), unique=False, nullable=True)
    services = db.Column(db.String(520), unique=False, nullable=True)
    certifications = db.Column(db.String(520), unique=False, nullable=True)
    comments = db.Column(db.String(120), unique=False, nullable=True)
    #Foreign Keys
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=True)
    
    
    def __repr__(self):
        return '<Recipe %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "aboutme": self.aboutme,
            "howicanhelp": self.howicanhelp,
            "services": self.services,
            "certifications": self.certifications,
            "comments": self.comments,
            "user_id": self.user_id,
        }