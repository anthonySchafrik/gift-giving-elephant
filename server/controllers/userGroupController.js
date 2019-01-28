const { db } = require('../../database/index.js');

module.exports.userGroupInfo = (req, res) => {
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
};
