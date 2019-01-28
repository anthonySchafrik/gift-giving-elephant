const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const { db } = require('../database/index');
const utils = require('./utils');
const groupRoutes = require('./routes/group.js');
const usersRoutes = require('./routes/user.js');
const app = express();
const log = console.log;
const port = 2020;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/', groupRoutes);
app.use('/', usersRoutes);
// //users
// //create user
// app.post('/createUser', (req, res) => {
//   const {
//     email,
//     firstName,
//     hobbyOne,
//     hobbyThree,
//     hobbyTwo,
//     lastName,
//     password,
//     userName
//   } = req.body;

//   let sql = `INSERT INTO Users (username, firstname, lastname, email,  password, hobbyone, hobbytwo, hobbythree) VALUES('${userName}', '${firstName}', '${lastName}', '${email}', '${password}', '${hobbyOne}', '${hobbyTwo}', '${hobbyThree}');`;

//   db.query(sql, (err, result) => {
//     if (err) {
//       log(`ERROR L56s => ${err}`);
//       if (err.code === '23505') {
//         res.send('User name all ready Taken');
//       } else {
//         res.send(`Something went wrong text error code to Anthony ${err.code}`);
//       }
//     } else {
//       log('inserted Group sotred', result);
//       res.send('User created');
//     }
//   });
// });

// //update user
// app.patch('/updateUser', (req, res) => {
//   const {
//     id,
//     firstname,
//     lastname,
//     email,
//     password,
//     hobbyone,
//     hobbytwo,
//     hobbythree
//   } = req.body;

//   let sql = `UPDATE Users SET firstname = '${firstname}', lastname = '${lastname}', email = '${email}', password = '${password}', hobbyone = '${hobbyone}', hobbytwo = '${hobbytwo}', hobbythree = '${hobbythree}' WHERE id = ${id};`;

//   db.query(sql, err => {
//     if (err) {
//       res.send(err.code);
//     }
//   });
//   res.send('User Updated');
// });

// // query to log in site
// app.get('/logUserIn', (req, res) => {
//   const { username, password } = req.query;

//   let sql = `SELECT * FROM Users WHERE username = '${username}';`;

//   db.query(sql, (err, result) => {
//     if (err) {
//       res.send(`Something went wrong error code: ${err.code}`);
//     }
//     if (result.rows.length) {
//       if (result.rows[0].password === password) {
//         res.send(true);
//       } else {
//         res.send('Password did not match');
//       }
//     } else {
//       res.send('User not found');
//     }
//   });
// });

// //query to get user info
// app.get('/userInfo', (req, res) => {
//   let user = req.query.user;

//   sql = `SELECT * FROM Users WHERE username = '${user}';`;

//   db.query(sql, (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result.rows);
//     }
//   });
// });

//user group info
app.get('/userGroupInfo', (req, res) => {
  let group = req.query.group;

  let sql = `SELECT id FROM Groups WHERE (name = '${group}');`;
  let users = [];

  db.query(sql, (err, result) => {
    let id = result.rows[0].id;
    let sql = `SELECT userid FROM UsersGroup WHERE (groupid = '${id}');`;

    return db.query(sql, (err, result) => {
      return result.rows.forEach(user => {
        let id = user.userid;
        let sql = `SELECT * FROM Users WHERE (id = '${id}');`;

        db.query(sql, (err, result) => {
          users.push(result.rows[0]);
        });
      });
    });
  });
  setTimeout(() => {
    res.send(users);
  }, 3000);
});

//match users
app.post('/matchedUsers', (req, res) => {
  let group = req.body;
  let error = false;

  utils.assignPeople(group).forEach(match => {
    let sql = `
      INSERT INTO MatchedUsers (
        matchOneID, 
        matchTwoId
      ) 
      VALUES
        (
          '${match[0].id}', 
          '${match[1].id}'
        ),
        (
          '${match[1].id}', 
          '${match[0].id}'
        )`;

    db.query(sql, (err, result) => {
      if (err) {
        error = true;
        log(err);
      }
    });
  });

  if (error) {
    res.send(`Something went wrong try again later`);
  }

  res.send('Matches Set');
});

//user match info
app.get('/getMatch', (req, res) => {
  let userId = req.query.userId;

  let sqlMatch = `SELECT matchtwoid FROM MatchedUsers WHERE (id = '${userId}')`;

  db.query(sqlMatch, (err, result) => {
    let matchedUserId = result.rows[0].matchtwoid;
    let sqlMatchUser = `SELECT firstname, hobbyone, hobbytwo, hobbythree from Users WHERE(id = '${matchedUserId}'); `;

    return db.query(sqlMatchUser, (err, result) => {
      res.send(result.rows[0]);
    });
  });
});

// server start
app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
