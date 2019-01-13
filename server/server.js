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

// new group req
app.post("/newGroup", (req, res) => {
  const { groupName, groupPass, totalCashAmount, totalPeople } = req.body;

  let sql = `INSERT INTO Groups (name, password, total, cash) VALUES('${groupName}', '${groupPass}', '${totalCashAmount}', '${totalPeople}');`;
  db.query(sql, (err, result) => {
    if (err) {
      log(`ERROR L28s => ${err}`);
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

// New new user req
app.post("/createUser", (req, res) => {
  const {
    email,
    firstName,
    hobbyOne,
    hobbyThree,
    hobbyTwo,
    lastName,
    password,
    userName
  } = req.body;

  let sql = `INSERT INTO Users (username, firstname, lastname, email,  password, hobbyone, hobbytwo, hobbythree) VALUES('${userName}', '${firstName}', '${lastName}', '${email}', '${password}', '${hobbyOne}', '${hobbyTwo}', '${hobbyThree}');`;

  db.query(sql, (err, result) => {
    if (err) {
      log(`ERROR L56s => ${err}`);
      if (err.code === "23505") {
        res.send("User name all ready Taken");
      } else {
        res.send(`Something went wrong text error code to Anthony ${err.code}`);
      }
    } else {
      log("inserted Group sotred", result);
      res.send("User created");
    }
  });
});

//join gorup
app.post("/joinGroup", (req, res) => {
  const { groupName, password, userName } = req.body;

  let group, user;

  let sqlFindGroup = `SELECT * FROM Groups WHERE name = '${groupName}';`;
  let sqlFinduser = `SELECT * FROM Users WHERE username = '${userName}';`;

  db.query(sqlFindGroup)
    .then(result1 => {
      group = result1.rows;
      return db.query(sqlFinduser);
    })
    .then(result2 => {
      user = result2.rows;
    })
    .then(() => {
      let userId = user[0].id;
      let groupId = group[0].id;
      let sqlJoinGroup = `INSERT INTO UsersGroup (userid, groupid) VALUES ('${userId}', '${groupId}');`;

      return db.query(sqlJoinGroup, (err, result) => {
        if (err) {
          res.send(`Error => ${err}`);
        } else {
          res.send(`You have joined Group ${group[0].name}`);
        }
      });
    });
});

// query to get a group info
app.get("/getGroupInfo", (req, res) => {
  let name = req.query.name;
  let sql = `SELECT * FROM Groups WHERE name = '${name}';`;

  db.query(sql, (err, result) => {
    res.send(result.rows);
  });
});

// query to log in site
app.get("/logUserIn", (req, res) => {
  const { username, password } = req.query;

  let sql = `SELECT * FROM Users WHERE username = '${username}';`;

  db.query(sql, (err, result) => {
    if (err) {
      res.send(`Something went wrong error code: ${err.code}`);
    }
    if (result.rows.length) {
      if (result.rows[0].password === password) {
        res.send(true);
      } else {
        res.send("Password did not match");
      }
    } else {
      res.send("User not found");
    }
  });
});

//query to update group
app.patch("/updateGroup", (req, res) => {
  const { id, groupName, groupPass, totalCashAmount, totalPeople } = req.body;

  let sql = `UPDATE Groups SET name = '${groupName}', password = '${groupPass}', total = '${Number(
    totalCashAmount
  )}', cash = '${Number(totalPeople)}' WHERE id = '${id}';`;

  db.query(sql, (err, result) => {});

  res.send("Group updated");
});

// server start
app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
