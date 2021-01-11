const express = require('express');
const router = express.Router();
const listCtrl = require('../controllers/list');

router.get('/user', listCtrl.GetoneList);
router.post('/user', listCtrl.GetallList);

module.exports = router;