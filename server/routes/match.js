const express = require('express');
const { matchedUsers, getMatch } = require('../controllers/matchController.js');
const router = express.Router();

router.post('/matchedUsers', matchedUsers);

router.get('/getMatch', getMatch);

module.exports = router;
