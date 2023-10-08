const db = require('../db')

class UserController {
    async createUser(req, res) {
        const { username, password, email } = req.body;
        const newUser = await db.query(`INSERT INTO users(username,password,email) VALUES($1,$2,$3)`, [username, password, email])
        res.status(200).send('OK')
    }

    async getAllUsers(req, res) {
        const users = await db.query(`SELECT * FROM users`);
        res.json(users.rows);
    }
}

module.exports = new UserController();