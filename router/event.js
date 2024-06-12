const express = require('express')
const router = express.Router()
const isUserLogged = require('../verifyToken')
const eventController = require('../controllers/eventController')

router.get('/', eventController.index)
router.get('/user', isUserLogged.getCurrentUser, eventController.indexPerUser)
router.post('/', isUserLogged.getCurrentUser, eventController.create)
router.get('/:id', isUserLogged.getCurrentUser, eventController.read)

module.exports = router