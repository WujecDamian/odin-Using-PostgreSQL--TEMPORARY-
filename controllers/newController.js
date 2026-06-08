const db = require("../db/queries");

const renderNew = async (req, res) => {
  res.render("new");
};
const postNew = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};

module.exports = { renderNew, postNew };
