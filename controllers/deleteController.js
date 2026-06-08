const db = require("../db/queries");

const deleteUsers = async (req, res) => {
  await db.deleteUsers();
  res.redirect("/");
};

module.exports = { deleteUsers };
