const Router = require('express')
const router = new Router();
const userController = require('../controllers/userController');

router.post('/user', userController.createUser)
router.get('/user', userController.getAllUsers)

module.exports = router