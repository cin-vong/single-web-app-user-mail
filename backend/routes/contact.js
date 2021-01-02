const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact');
const listCtrl = require('../controllers/list');

router.post('/signup', contactCtrl.signUp);
router.get('/list', listCtrl.list);
router.get('/:id', listCtrl.GetoneList);
router.get('/', listCtrl.GetallList);

module.exports = router;

