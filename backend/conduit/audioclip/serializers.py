from marshmallow import Schema, fields, pre_load, post_dump


class AudioClipSchema(Schema):
    startTime = fields.Str()
    endTime = fields.Str()
    source = fields.Str()
    sourceType_id = fields.Str()
    description = fields.Str()

audioclip_schema = AudioClipSchema()
audioclip_schemas = AudioClipSchema(many=True)