from marshmallow import Schema, fields, pre_load, post_dump


class AudioClipSchema(Schema):
    startTime = fields.Str()
    endTime = fields.Str()
    source = fields.Str()
    sourceType_id = fields.Str()
    description = fields.Str()
    
    @pre_load
    def make_user(self, data, **kwargs):
        return data['audioclip']

    @post_dump
    def dump_user(self, data, **kwargs):
        return {'audioclip': data}

    class Meta:
        strict = True

audioclip_schema = AudioClipSchema()
audioclip_schemas = AudioClipSchema(many=True)