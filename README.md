# GStore ( My Full Stack Project )
## Work In Progess
- login/register system is ready to use.
- profile editing is ready to use.
### Prerequisite
- Your system should have docker installed.
- Your system should have MySQL installed and operating then import "practice_db.sql" to MySQL.

### Building
1. Create dedicate folder for my project.
```console
$ mkdir practiceproject
```
2. Move working directory to create folder
```console
$ cd practiceproject
```
3. Clone repository
```console
$ git clone https://github.com/BookIILoy/PracticeProject.git
```
4. Create .env for frontend
```console
$ touch ./frontend/my-app/.env
```
5. edit .env for frontend In .env file should contain a variable called REACT_APP_BACKEND_IP which is the IP of the backend and its port(default 5000)

Example
```console
REACT_APP_BACKEND_IP= localhost:5000
```

6. Create .env for backend
```console
$ touch ./backend/.env
```

7. Edit .env for backend In .env should contain these variables
```console
PORT = port for your backend
DB_HOST = IP of your database ( if use docker use "host.docker.internal" )
DB_PORT = port of your database
DB_USER = username of the account for accessing the database
DB_PASSWORD = password of the account for accessing the database
DB_SQL = name of database ( database that you import in my project is "practice_db.sql" )
secretJWT = can type anything in this since this will act as a key for JWT
CORS_ORIGIN = frontend ip
```
Example
```console
PORT = 5000
DB_HOST = host.docker.internal
DB_PORT = 3306
DB_USER = practicepj
DB_PASSWORD = practicepj1234
DB_SQL = practice_db
secretJWT = bearerToken
CORS_ORIGIN = http://localhost:3000
```

8. Build the application
```console
$ docker compose up
```
ps. This guide is for testing on localhost only.
