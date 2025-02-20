from models import db 

class Glaucoma(db.Model):
    __tablename__ = 'Glaucoma'
    ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Patient_name =  db.Column(db.String(50), nullable=False)
    Date =  db.Column(db.String(50), nullable=False)
    