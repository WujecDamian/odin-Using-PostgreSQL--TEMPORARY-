const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: "postgresql://code.:2004@localhost:5432/top_users",
});
