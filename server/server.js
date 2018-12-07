const log = console.log;
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const { db } = require("../database/index");

let port = 2020;

// app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "../public")));

// New group post req
app.post("/newGroup", (req, res) => {
  const { groupName, groupPass, totalCashAmount, totalPeople } = req.body;

  // error handling
  let hasError = false;
  let errorMessage = "";

  // new group going to db
  let sql = `INSERT INTO Groups (name, password, total, cash) VALUES('${groupName}', '${groupPass}', '${totalCashAmount}', '${totalPeople}')`;

  //  adding new group to db
  db.query(sql, (err, result) => {
    debugger;
    if (err) {
      log(`ERROR L23 => ${err}`);
      hasError = true;
      errorMessage = err.message;
    } else {
      log("inserted Group sotred", result);
    }
  });
  // error handling
  debugger;
  if (hasError) {
    res.send(errorMessage);
  } else {
    res.send("Created Group");
  }
});

// server start
app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
