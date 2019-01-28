const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const port = 2020;

const groupRoutes = require('./routes/group.js');
const usersRoutes = require('./routes/user.js');
const userGroup = require('./routes/userGroup.js');
const match = require('./routes/match.js');

const log = console.log;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/', groupRoutes);

app.use('/', usersRoutes);

app.use('/', userGroup);

app.use('/', match);

app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
