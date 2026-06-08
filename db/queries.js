const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(usernames) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [usernames]);
}

module.exports = {
  getAllUsernames,
  insertUsername,
};
