const connection = require('../config/database');

const getHomepage = (req, res) => {
  return res.render('home.ejs');
}
const getAbc = (req, res) => {
  res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
  console.log(req.body)
  res.send("create new user")
}
module.exports = {
  getHomepage,
  getAbc,
  postCreateUser
}