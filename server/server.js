const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();
const port = 2020;

const groupRoutes = require('./routes/group.js');
const usersRoutes = require('./routes/user.js');
const userGroupRoutes = require('./routes/userGroup.js');
const matchRoutes = require('./routes/match.js');

const log = console.log;
const apiBase = '/api/v1';

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../dist')));

app.use(apiBase, groupRoutes);

app.use(apiBase, usersRoutes);

app.use(apiBase, userGroupRoutes);

app.use(apiBase, matchRoutes);

app.get('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
