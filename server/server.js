const log = console.log;
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "../public")));

let port = 2020;
app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
