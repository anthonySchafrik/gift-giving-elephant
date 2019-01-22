// const { db } = require('../../database/index');
const log = console.log;

module.exports = {
  assignPeople: group => {
    return assignPeople(group);
  }
};

// export const insert = sql => {
//   //works but does not send a result back to server to send to client

//   db.query(sql, (err, result) => {
//     if (err) {
//       log(`ERROR L7 query.js => ${err}`);
//       return err.message;
//     } else {
//       log('inserted Group sotred', result);
//       return result;
//     }
//   });
// };

const generateRandomNumber = number => {
  let randomNumber = Math.random() * (number - 0) + 0;

  return Math.floor(randomNumber);
};

const groupFilter = (group, personOne, personTwo) => {
  return group.filter(user => {
    return user.id !== personOne.id && user.id !== personTwo.id;
  });
};

const assignPeople = (group, match = []) => {
  let one = generateRandomNumber(group.length);
  let two = generateRandomNumber(group.length);

  while (one === two) {
    two = generateRandomNumber(group.length);
  }

  let personOne = { ...group[one] };
  let personTwo = { ...group[two] };

  match.push([personOne, personTwo]);

  group = groupFilter(group, personOne, personTwo);

  if (group.length > 0) {
    return assignPeople(group, match);
  }

  return match;
};
