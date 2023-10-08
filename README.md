# WorkPlace ReadMe

## Get Started with Docker
1. Firstly, create image, run this code in terminal **`docker build -t workplace-image .`**
2. Create container for image **`docker compose up`** 
3. If you change something in code (*Nurzhigit*) write again 2 this commands

## Database 
Do this steps only once. <br>
1. Connect to Docker

        docker exec -it workplace-node-app bash

2. Run node js sript <br>

         node db_queries.js

Output should be: `SQL file '/app/create_table.sql' executed successfully.`

## Api

### 1. Users

| Key                | Description                              |
| ------------------ | ---------------------------------------- |
| id                | Serial, PRIMARY KEY               |
| username          | Varchar(255), NOT NULL, UNIQUE             |
| password          | Varchar(255), NOT NULL                |
| email             | Varchar(255), NOT NULL, UNIQUE
| image_url             | Varchar(255)
<br>

@Get Request <br>
`http://localhost:3000/api/user/` <br>
Response: **JSON list of users**

@Post Request <br>
`http://localhost:3000/api/user/` <br>
Response: **STATUS 200**