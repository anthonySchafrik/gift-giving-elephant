const { db } = require('../../database/index.js');
const utils = require('../utils');
const log = console.log;

module.exports.matchedUsers = (req, res) => {
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
};

module.exports.getMatch = (req, res) => {
  let userId = req.query.userId;

  let sqlMatch = `SELECT matchtwoid FROM MatchedUsers WHERE (id = '${userId}')`;

  db.query(sqlMatch, (err, result) => {
    if (err) {
      res.send(err);
    }

    if (!result.rows.length) {
      return res.send('User not matched yet.');
    }
    let matchedUserId = result.rows[0].matchtwoid;
    let sqlMatchUser = `SELECT firstname, hobbyone, hobbytwo, hobbythree from Users WHERE(id = '${matchedUserId}'); `;

    return db.query(sqlMatchUser, (err, result) => {
      res.send(result.rows[0]);
    });
  });
};
