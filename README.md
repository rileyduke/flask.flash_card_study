## Docker Compose Instructions
From the project base folder, the docker applications can be launched with `docker-compose up`. 

### Backend
To get the backend running you will need to install the required dependencies, and then init the database using flask.

#### Install Dependencies
Pip will install all required packages with `pip install -r requirements/dev.txt`.

#### Initialize Database
The following commands will create and initialize your database. 
```
flask db init
flask db migrate
flask db upgrade
```

#### Running
To launch the flask environment, run `flask run --host=0.0.0.0` from the `/home/backend` folder.

#### Smoke Test
Smoke test your flask environment with `curl -X get http://localhost:5000/api/audioclips/all`

### Frontend
To launch the node environment within the frontend container, run `npm start` from the `/home/frontend` folder.
