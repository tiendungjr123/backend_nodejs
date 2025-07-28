const connection = require('../config/database');
const { getALLUsers } = require('../services/CRUDService');
const getHomepage = async (req, res) => {
  let results = await getALLUsers();
  return res.render('home.ejs', { listUsers: results });
}
const getAbc = (req, res) => {
  res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  // let {email,name,city} = req.body;

  let [results, fields] = await connection.query(
    ` INSERT INTO Users(email,name,city)
      VALUES (?,?,?)`, [email, name, city],)

  res.send('create user succeed!')
}

const getCreatePage = (req, res) => {
  res.render('create.ejs')
}
module.exports = {
  getHomepage,
  getAbc,
  postCreateUser,
  getCreatePage
}