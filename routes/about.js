const express = require('express');
const controller = require('../controllers/about');

const router = express.Router()

router.get('/', controller.renderAbout);

module.exports = router;