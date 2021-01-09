const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact');

router.post('/signup', contactCtrl.signUp);

module.exports = router;

