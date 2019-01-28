const express = require('express');
const {
  createUser,
  updateUser,
  logUserIn,
  userInfo
} = require('../controllers/userController.js');

const router = express.Router();

router.post('/createUser', createUser);

router.patch('/updateUser', updateUser);

router.get('/logUserIn', logUserIn);

router.get('/userInfo', userInfo);

module.exports = router;
