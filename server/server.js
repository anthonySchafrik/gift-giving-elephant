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
  let sql = `INSERT INTO groups (name, password, total, cash) VALUES('${groupName}', '${groupPass}', '${totalCashAmount}', '${totalPeople}')`;
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
  let sql = `SELECT * from groups WHERE name='${name}'`;

  db.query(sql, (err, result) => {
    res.send(result.rows);
  });
});

app.patch("/updateGroup", (req, res) => {
  console.log(req.body);
  const { id, groupName, groupPass, totalCashAmount, totalPeople } = req.body;

  let sql = `UPDATE groups SET id = '${id}', name = '${groupName}', password = '${groupPass}', total = '${Number(
    totalCashAmount
  )}', cash = '${Number(totalPeople)}'`;
  // db.query(sql, (err, result) => {
  //   debugger;
  // });
  res.send(sql);
});

// server start
app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
