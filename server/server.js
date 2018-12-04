const log = console.log;
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// const { db } = require("../database/index");

// app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "../public")));

app.post("/newGroup", (req, res) => {
  const { groupName, groupPass, totalCashAmount, totalPeople } = req.body;

  let sql = `INSERT INTO Groups (name, password, total, cash) VALUES("${groupName}", "${groupPass}", "${totalCashAmount}", "${totalPeople}")`;
  log(`sql => ${sql}`);
  // db.query(sql, (error, result) => {
  //   if (error) {
  //     log(error);
  //   } else {
  //     log("inserted Group sotred", result);
  //   }
  // });

  res.send("Thanks for the request");
});

let port = 2020;
app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
