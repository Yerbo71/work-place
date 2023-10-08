CREATE TABLE
    IF NOT EXISTS users (
        id serial PRIMARY KEY,
        username VARCHAR(255),
        password VARCHAR(255),
        email VARCHAR(255),
        image VARCHAR(255)
    );