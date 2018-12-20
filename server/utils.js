const { db } = require("../database/index");
const log = console.log;

module.exports.insert = sql => {
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
