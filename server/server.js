const log = console.log;
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const { db } = require("../database/index");

// app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "../public")));

app.post("/newGroup", (req, res) => {
  let newGroupData = req.body;
  let groupName = req.body.groupName;
  let groupPass = req.body.groupPass;
  let totalCashAmount = req.body.totalCashAmount;
  let totalpeople = req.body.totalpeople;

  let sql = `INSERT INTO Groups (name, password, total, cash) VALUES("${groupName}", "${groupPass}", "${totalCashAmount}", "${totalpeople}")`;

  db.query(sql, (error, result) => {
    if (error) {
      log(error);
    } else {
      log("inserted Group sotred", result);
    }
  });

  res.send("Thanks for the request");
});

let port = 2020;
app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
