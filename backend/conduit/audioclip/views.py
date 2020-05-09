# coding: utf-8

from flask import Blueprint
from flask_apispec import marshal_with
from flask_jwt_extended import current_user, jwt_required, jwt_optional

from conduit.exceptions import InvalidUsage
from conduit.audioclip.models import AudioClip
from .serializers import audioclip_schema

import datetime

blueprint = Blueprint('audioclips', __name__)

@blueprint.route('/api/audioclips/all', methods=('GET',))
@jwt_optional
@marshal_with(audioclip_schema)
def get_all_clips():
    clips = AudioClip.query.all()
    return clips

@blueprint.route('/api/audioclips', methods=('POST',))
@jwt_optional
@marshal_with(audioclip_schema)
def create_clip(username):
    clip = AudioClip("test")
    clip.startTime = "tetttst"
    now = datetime.datetime.now()
    clip.endTime = now
    clip.save()
    return clip