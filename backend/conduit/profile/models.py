from flask_jwt_extended import current_user

from conduit.database import (Model, SurrogatePK, db,
                              reference_col, relationship)


class UserProfile(Model, SurrogatePK):
    __tablename__ = 'userprofile'

    # id is needed for primary join, it does work with SurrogatePK class
    id = db.Column(db.Integer, primary_key=True)

    user_id = reference_col('users', nullable=False)
    user = relationship('User', backref=db.backref('profile', uselist=False))

    def __init__(self, user, **kwargs):
        db.Model.__init__(self, user=user, **kwargs)

    @property
    def username(self):
        return self.user.username

    @property
    def bio(self):
        return self.user.bio

    @property
    def image(self):
        return self.user.image

    @property
    def email(self):
        return self.user.email
