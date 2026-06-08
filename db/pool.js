const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "code.>",
  database: "top_users",
  password: "2004",
  port: 5432,
});
