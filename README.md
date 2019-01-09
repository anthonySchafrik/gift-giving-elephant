# gift-giving-elephant

This is a White Elephant Gift app for my friends and family to use around the holidays.

# Set up

# 1

Download repo from

# 2

Download PostgreSql for the os you are using.

https://www.postgresql.org/download/

# 3

Add a Postgre database called GGE to your PostgreSql

# 4

Run

1. npm i
2. npm run build
3. (in a new terminal tab) npm start

The app should show up on localhost:2020

# Debugging

client errors
npm ERR! 404 Not Found: event-stream@3.3.6
Delete node_modules folder
Delete package-lock.json file
Run npm i

Server errors
error: password authention failed for user "postgres"
Change the the password in the database file in the conString exp
const conString = "postgres://YourUserName:YoursPassword@localhost:5432/GGE";
