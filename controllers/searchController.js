const db = require("../db/queries");

const search = async (req, res) => {
  console.log(req.query.q);
  const queryResult = await db.searchUser(req.query.q);
  console.log(queryResult);
  res.send(queryResult);
};

module.exports = { search };
