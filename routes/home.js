const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')
//const Story = require('../models/Story')
const homeController = require('../controllers/home')

// @desc Home,Login/Landing page
// @route GET /
router.get('/', homeController.getIndex) 

module.exports = router






