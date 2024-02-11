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
#### For Adding Product ( In this time )
- use  /api/admin/upload like post method in postman (any platform that you use to test APIs) to upload image to backend and copy image_url
Example
###### key must be img and value is for upload image file.
![Screenshot 2024-02-12 004931](https://github.com/BookIILoy/PracticeProject/assets/145659447/bfa62049-ac07-492c-b8cb-15d9d8d187d8)
- Go to /api/admin/createproduct to adding your product to your database.
Example
```console
{
    "name" : your_product_name,
    "oldPrice" : your_old_price,
    "newPrice" : your_new_price,
    "count" : your_product_count,
    "desc" : your_product_description,
    "img" : your_product_image_url ( just paste image_url that you get from /api/admin/upload
}
```
![Screenshot 2024-02-12 015745](https://github.com/BookIILoy/PracticeProject/assets/145659447/e7c31620-47d4-4e8a-b3a9-9b4862dadcd5)
ps. This guide is for testing on localhost only.
