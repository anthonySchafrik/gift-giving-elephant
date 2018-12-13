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

const sql =
  "CREATE TABLE Groups (id SERIAL, name VARCHAR(255) UNIQUE, password VARCHAR(255), total INT, cash INT)";

client.query(sql, function(err, result) {
  console.log(err);

  if (err) {
    return "Table is there";
  }
  // if (err) {
  //   throw err;
  // }
  console.log("Table created");
});

module.exports.db = client;
