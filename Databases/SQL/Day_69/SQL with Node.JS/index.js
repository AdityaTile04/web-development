const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "my_data",
  password: "aditya",
});

let query = "SHOW TABLES";

try {
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();

const randomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
