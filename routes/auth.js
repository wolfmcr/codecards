const router = require('express').Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');
//@desc POST register new user
//@route /auth/register
router.post('/register', authController.registerUser);

//@desc POST login user
//@route /auth/login
router.post('/login', authController.login);

//@desc GET user data
//@route /auth/user
router.get('/user', auth, authController.getUserData);

//@desc
//@route

module.exports = router;
