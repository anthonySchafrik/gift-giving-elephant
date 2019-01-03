const { db } = require("../database/index");
const log = console.log;

module.exports.insert = sql => {
  //works but does not send a result back to server to send to client

  db.query(sql, (err, result) => {
    if (err) {
      log(`ERROR L7 query.js => ${err}`);
      return err.message;
    } else {
      log("inserted Group sotred", result);
      return result;
    }
  });
};
