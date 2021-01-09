const express = require('express');
const router = express.Router();
const listCtrl = require('../controllers/list');

router.get('/list', listCtrl.GetallList);

module.exports = router;