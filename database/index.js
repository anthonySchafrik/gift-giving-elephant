const Client = require("mariasql");

const c = new Client({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  db: "GGE"
});

c.connect(err => {
  if (err) {
    console.log(`An error has happend conecting to database; -->: ${err}`);
  } else {
    console.log(`Connected to maria.`, c.connected);
  }
});

var sql =
  "CREATE TABLE Groups (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255), total INT, cash INT)";

// c.query(sql, function(err, result) {
//   debugger;
//   if (err === `Table 'Groups' already exists`) {
//     return "Table is there";
//   }
//   if (err) {
//     throw err;
//   }
//   console.log("Table created");
// });

module.exports.db = c;
