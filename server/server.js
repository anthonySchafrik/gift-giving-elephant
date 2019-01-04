const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const app = express();

const log = console.log;

const { db } = require("../database/index");

//can not get the utils to return message to pass on to client after group was created or error
// const  { insert } = require('./utils');

const port = 2020;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "../dist")));

// New group post req
app.post("/newGroup", (req, res) => {
  const { groupName, groupPass, totalCashAmount, totalPeople } = req.body;

  // new group going to db
  let sql = `INSERT INTO Groups (name, password, total, cash) VALUES('${groupName}', '${groupPass}', '${totalCashAmount}', '${totalPeople}')`;
  db.query(sql, (err, result) => {
    if (err) {
      log(`ERROR L28 query.js => ${err}`);
      if (err.code === "23505") {
        res.send("Group name all ready Taken");
      } else {
        res.send(`Something went wrong text error code to Anthony ${err.code}`);
      }
    } else {
      log("inserted Group sotred", result);
      res.send("Group created");
    }
  });
});

app.get("/getGroupInfo", (req, res) => {
  let name = req.query.name;
  let sql = `select * from groups where name='${name}'`;

  db.query(sql, (err, result) => {
    console.log(result.rows);
    res.send(result.rows);
  });
});

// server start
app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
