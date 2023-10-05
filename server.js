const express = require('express')
const pool = require('./db')
const port = 3000

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const data = await pool.query(`SELECT * FROM users`)
        res.status(200).send(data.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.post('/', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        await pool.query(`INSERT INTO users(username,password,email) VALUES ($1,$2,$3)`, [username, password, email])
        res.status(200).send({ message: "Succesfully added user" })
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.get('setup', async (req, res) => {
    try {
        await pool.query(`CREATE TABLE users(
            id SERIAL PRIMARY KEY, 
            username VARCHAR(100) NOT NULL, 
            password VARCHAR(100) NOT NULL, 
            email VARCHAR(100) NOT NULL
            )`)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})
app.listen(port, () => console.log(`Server has startedd on port:${port}`))