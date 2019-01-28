const express = require('express');
const { userGroupInfo } = require('../controllers/userGroupController.js');
const router = express.Router();

router.get('/userGroupInfo', userGroupInfo);

module.exports = router;
