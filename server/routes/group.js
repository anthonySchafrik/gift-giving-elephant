const express = require('express');
const {
  createGroup,
  joinGroup,
  getGroupInfo,
  updateGroup
} = require('../controllers/groupControllers.js');

const apiBase = '/group';

const router = express.Router();

router.post(`${apiBase}/createGroup`, createGroup);

router.post(`${apiBase}/joinGroup`, joinGroup);

router.get(apiBase, getGroupInfo);

router.patch(`${apiBase}/updateGroup`, updateGroup);

module.exports = router;
