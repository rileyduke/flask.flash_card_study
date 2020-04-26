import datetime as dt
from flask_jwt_extended import current_user
from flask_sqlalchemy import sqlalchemy, Model

from conduit.database import (Model, SurrogatePK, db, Column,
                              reference_col, relationship)
class AudioClip(Model, SurrogatePK):
    __tablename__ = 'audioclip'
    
    id = db.Column(db.Integer, primary_key=True)
    startTime = db.Column(db.Text)
    endTime = db.Column(db.Text)
    source = db.Column(db.Text)
    sourceType_id = db.Column(db.Text)
    description = db.Column(db.Text, nullable=False)
    blob = db.Column(sqlalchemy.dialects.postgresql.BYTEA)

    def __init__(self, description):
        db.Model.__init__(self, description=description)


class Comment(Model, SurrogatePK):
    __tablename__ = "comment"

    id = db.Column(db.Integer, primary_key=True)
    body = Column(db.Text)
    createdAt = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
    updatedAt = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
    # audioClip_id = reference_col('audioclip', nullable=False)

    def __init__(self, body):
        db.Model.__init__(self, body=body)