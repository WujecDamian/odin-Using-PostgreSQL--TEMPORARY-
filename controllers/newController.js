const renderNew = (req, res) => {
  res.render("new");
};
const postNew = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};

module.exports = { renderNew, postNew };
