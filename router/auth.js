const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const middleware = require('../verifyToken')

router.post('/signin', 
middleware.verifyCredentialsExist, 
middleware.verifyUserExist,
middleware.verifyPassword,
authController.signin)

router.post('/signup', 
middleware.verifyCredentialsExist, 
middleware.verifyUserNotExist,
middleware.verifyPasswordLength,
authController.signup)

module.exports = router