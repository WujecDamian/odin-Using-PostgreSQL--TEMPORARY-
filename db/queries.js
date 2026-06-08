const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(usernames) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [usernames]);
}

async function searchUser(searchQuery) {
  const result = await pool.query(
    `SELECT * FROM usernames WHERE username ILIKE $1`,
    [`%${searchQuery}%`],
  );
  return result.rows;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUser,
};
