const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact');

router.post('/signup', contactCtrl.signUp);

router.post('/signin', contactCtrl.signIp);

module.exports = router;

