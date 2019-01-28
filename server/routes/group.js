const express = require('express');
const {
  createGroup,
  joinGroup,
  getGroupInfo,
  updateGroup
} = require('../controllers/groupControllers.js');

const router = express.Router();

router.post('/newGroup', createGroup);

router.post('/joinGroup', joinGroup);

router.get('/getGroupInfo', getGroupInfo);

router.patch('/updateGroup', updateGroup);

module.exports = router;
