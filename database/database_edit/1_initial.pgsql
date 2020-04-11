CREATE TABLE AudioClip
(
    AudioClipId INTEGER PRIMARY KEY,
    StartTime VARCHAR null,
    EndTime VARCHAR null,
    Source VARCHAR null,
    SourceTypeId INTEGER,
    Description VARCHAR null,
    Blob bytea
);

CREATE TABLE SourceType
(
    SourceTypeId INTEGER PRIMARY KEY,
    Description VARCHAR
);

CREATE TABLE Comment
(
    CommentId INTEGER PRIMARY KEY,
    AudioClipId INTEGER,
    Description VARCHAR
);