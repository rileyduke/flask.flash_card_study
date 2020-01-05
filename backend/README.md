# Flask backend

The server uses the python web server package `flask` (http://flask.palletsprojects.com/en/1.1.x/).

## Running 

From the backend directory, launch the flask server with `./bootstrap.sh`.

## Create entity with POST:

Create a POST request with the following payload:
```
{
	"title":"TypeScript Advanced Exam",
	"description": "Tricky Qs"
}
```