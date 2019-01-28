const { db } = require('../../database/index.js');
const log = console.log;

module.exports.createUser = (req, res) => {
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
      if (err.code === '23505') {
        res.send('User name all ready Taken');
      } else {
        res.send(`Something went wrong text error code to Anthony ${err.code}`);
      }
    } else {
      log('inserted Group sotred', result);
      res.send('User created');
    }
  });
};

module.exports.updateUser = (req, res) => {
  const {
    id,
    firstname,
    lastname,
    email,
    password,
    hobbyone,
    hobbytwo,
    hobbythree
  } = req.body;

  let sql = `UPDATE Users SET firstname = '${firstname}', lastname = '${lastname}', email = '${email}', password = '${password}', hobbyone = '${hobbyone}', hobbytwo = '${hobbytwo}', hobbythree = '${hobbythree}' WHERE id = ${id};`;

  db.query(sql, err => {
    if (err) {
      res.send(err.code);
    }
  });
  res.send('User Updated');
};

module.exports.logUserIn = (req, res) => {
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
        res.send('Password did not match');
      }
    } else {
      res.send('User not found');
    }
  });
};

module.exports.userInfo = (req, res) => {
  let user = req.query.user;

  sql = `SELECT * FROM Users WHERE username = '${user}';`;

  db.query(sql, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result.rows);
    }
  });
};
