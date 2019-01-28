const { db } = require('../../database/index.js');

const log = console.log;

module.exports.createGroup = (req, res) => {
  const { groupName, groupPass, totalCashAmount, totalPeople } = req.body;

  let sql = `INSERT INTO Groups (name, password, total, cash) VALUES('${groupName}', '${groupPass}', '${totalCashAmount}', '${totalPeople}');`;
  db.query(sql, (err, result) => {
    if (err) {
      log(`ERROR L28s => ${err}`);
      if (err.code === '23505') {
        res.send('Group name all ready Taken');
      } else {
        res.send(`Something went wrong text error code to Anthony ${err.code}`);
      }
    } else {
      log('inserted Group sotred', result);
      res.send('Group created');
    }
  });
};

module.exports.joinGroup = (req, res) => {
  const { groupName, password, userName } = req.body;

  let group, user;

  let sqlFindGroup = `SELECT * FROM Groups WHERE name = '${groupName}';`;
  let sqlFinduser = `SELECT * FROM Users WHERE username = '${userName}';`;

  db.query(sqlFindGroup)
    .then(result1 => {
      group = result1.rows;
      return db.query(sqlFinduser);
    })
    .then(result2 => {
      user = result2.rows;
    })
    .then(() => {
      let userId = user[0].id;
      let groupId = group[0].id;
      let sqlJoinGroup = `INSERT INTO UsersGroup (userid, groupid) VALUES ('${userId}', '${groupId}');`;

      return db.query(sqlJoinGroup, err => {
        if (err) {
          res.send(`Error => ${err}`);
        } else {
          res.send(`You have joined Group ${group[0].name}`);
        }
      });
    });
};

module.exports.getGroupInfo = (req, res) => {
  let name = req.query.name;
  let sql = `SELECT * FROM Groups WHERE name = '${name}';`;

  db.query(sql, (err, result) => {
    res.send(result.rows);
  });
};

module.exports.updateGroup = (req, res) => {
  const { id, groupName, groupPass, totalCashAmount, totalPeople } = req.body;

  let sql = `UPDATE Groups SET name = '${groupName}', password = '${groupPass}', total = '${Number(
    totalCashAmount
  )}', cash = '${Number(totalPeople)}' WHERE id = '${id}';`;

  db.query(sql, err => {
    if (err) {
      res.send(`Something went wrong Error code ${err.code}`);
    }
  });

  res.send('Group updated');
};
