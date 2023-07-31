const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
//const Story = require('../models/Story')
const logInController = require('../controllers/login')

// @desc Home,Login/Landing page
// @route GET /
router.get('/', logInController.getLogIn) 

module.exports = router






