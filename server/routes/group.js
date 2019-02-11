const express = require('express');
const {
  createGroup,
  joinGroup,
  getGroupInfo,
  updateGroup
} = require('../controllers/groupControllers.js');

const apiBase = '/group';

const router = express.Router();

router.post('/newGroup', createGroup);

router.post('/joinGroup', joinGroup);

router.get(apiBase, getGroupInfo);

router.patch('/updateGroup', updateGroup);

module.exports = router;
