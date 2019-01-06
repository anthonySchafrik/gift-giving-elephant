const pg = require("pg");
const conString = "postgres://postgres:postgres@localhost:5432/GGE";

const client = new pg.Client(conString);

client.connect(err => {
  if (err) {
    console.log(`An error has happend conecting to database; -->: ${err}`);
  } else {
    console.log(`Connected to pg.`);
  }
});

//Creates Groups tale
const sqlGroups =
  "CREATE TABLE Groups (id SERIAL, name VARCHAR(255) UNIQUE, password VARCHAR(255), total INT, cash INT)";

client.query(sqlGroups, err => {
  if (err) {
    if (err.code === "42P07") {
      console.log("Table all ready there");
    } else {
      console.log(`Error in database => ${err}`);
      throw err;
    }
  } else {
    console.log("Table created");
  }
});

//creates User table
const sqlUsers =
  "CREATE TABLE Users (id SERIAL, username VARCHAR(10) UNIQUE, firstname VARCHAR(255), lastname VARCHAR(255), email VARCHAR(255), password VARCHAR(10), hobbyOne VARCHAR(255),  hobbyTwo VARCHAR(255), hobbyThree VARCHAR(255))";

client.query(sqlUsers, err => {
  if (err) {
    if (err.code === "42P07") {
      console.log("Table all ready there");
    } else {
      console.log(`Error in database => ${err}`);
      console.log(err.code);
    }
  } else {
    console.log("Table created");
  }
});

module.exports.db = client;
