const express = require('express');
const {
  createUser,
  updateUser,
  logUserIn,
  userInfo
} = require('../controllers/userController.js');

const apiBase = '/user';

const router = express.Router();

router.get(apiBase, userInfo);

router.post(apiBase, createUser);

router.patch(apiBase, updateUser);

router.get(`${apiBase}/login`, logUserIn);

module.exports = router;
