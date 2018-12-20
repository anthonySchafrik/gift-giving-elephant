const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

const log = console.log;

const { db } = require('../database/index');
// const  { insert } = require('./utils');

const port = 2020;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

// New group post req
app.post('/newGroup', (req, res) => {
  const { groupName, groupPass, totalCashAmount, totalPeople } = req.body;

  // new group going to db
  let sql = `INSERT INTO Groups (name, password, total, cash) VALUES('${groupName}', '${groupPass}', '${totalCashAmount}', '${totalPeople}')`;
  db.query(sql, (err, result) => {
    if (err) {
      log(`ERROR L7 query.js => ${err}`);
      if (err.detail === `Key (name)=(a) already exists.`) {
        res.send('Group name all ready Taken')
      } else {
        res.send('Something went wrong try again latter');
      }
    } else {
      log('inserted Group sotred', result);
      res.send('Group created');
    }
  }); 
});

// server start
app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
