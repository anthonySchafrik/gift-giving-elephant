const pg = require('pg');
require('dotenv').config();
const ELEPHANTSQL_KEY = process.env.ELEPHANTSQL_KEY;

// const conString = "postgres://postgres:postgres@localhost:5432/GGE";
const conString = `postgres://kerrlcbi:${ELEPHANTSQL_KEY}@baasu.db.elephantsql.com:5432/kerrlcbi`;

const client = new pg.Client(conString);

client.connect(err => {
  if (err) {
    console.log(`An error has happend conecting to database; -->: ${err}`);
  } else {
    console.log(`Connected to pg.`);
  }
});

//Creates Groups tale
const sqlGroups =
  'CREATE TABLE Groups (id SERIAL primary key, name VARCHAR(255) UNIQUE, password VARCHAR(255), total INT, cash INT)';

client.query(sqlGroups, err => {
  if (err) {
    if (err.code === '42P07') {
      console.log('Groups Table all ready there');
    } else {
      console.log(`Error in database => ${err}`);
      throw err;
    }
  } else {
    console.log('Groups Table created');
  }
});

//creates User table
const sqlUsers =
  'CREATE TABLE Users (id SERIAL primary key, username VARCHAR(10) UNIQUE, firstname VARCHAR(255), lastname VARCHAR(255), email VARCHAR(255), password VARCHAR(10), hobbyOne VARCHAR(255),  hobbyTwo VARCHAR(255), hobbyThree VARCHAR(255))';

client.query(sqlUsers, err => {
  if (err) {
    if (err.code === '42P07') {
      console.log('Users Table all ready there');
    } else {
      console.log(`Error in database => ${err}`);
      console.log(err.code);
    }
  } else {
    console.log('Users Table created');
  }
});

const sqlUsersGroup =
  'CREATE TABLE UsersGroup (id SERIAL primary key, userID INT references Users(id), groupID INT references Groups(id))';

client.query(sqlUsersGroup, err => {
  if (err) {
    if (err.code === '42P07') {
      console.log('UsersGroup Table all ready there');
    } else {
      console.log(`Error in database => ${err}`);
      console.log(err.code);
    }
  } else {
    console.log('UsersGroup Table created');
  }
});

const sqlMatchedUsers =
  'CREATE TABLE  MatchedUsers (id SERIAL primary key, matchOneID INT references Users(id), matchTwoId INT references Users(id));';

client.query(sqlMatchedUsers, err => {
  if (err) {
    if (err.code === '42P07') {
      console.log('MatchedUsers Table all ready there');
    } else {
      console.log(`Error in database => ${err}`);
      console.log(err.code);
    }
  } else {
    console.log('MatchedUsers Table created');
  }
});

/**
 *
 */

module.exports.db = client;
