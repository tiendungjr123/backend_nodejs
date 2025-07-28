const connection = require('../config/database');

const getAllUsers = async (req, res) => {
  let [results, fields] = await connection.query('select * from Users');

  return res.status(200).json({
    message: 'ok',
    data: results
  });
};
const createNewUser = async (req, res) => {


  let { email, name, city } = req.body;
  if (!email || !name || !city) {
    return res.status(200).json({
      message: 'missing require params',
    });
  }
  let [results, fields] = await connection.query(
    ` INSERT INTO Users(email,name,city)
      VALUES (?,?,?)`, [email, name, city],)
  return res.status(200).json({
    message: 'ok',
  });
}

const updateUser = async (req, res) => {
  let { email, name, city, id } = req.body;
  if (!email || !name || !city || !id) {
    return res.status(200).json({
      message: 'missing require params',
    });
  }
  await connection.query(
    `UPDATE Users SET email =?, city = ?, name =? where id = ?;`, [email, city, name, id])
  return res.status(200).json({
    message: 'ok'
  })
}
const deleteUser = async (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(200).json({
      message: 'missing require params',
    });
  }
  await connection.query(
    ` DELETE FROM Users WHERE id = ?`, [id],)
  return res.status(200).json({
    message: 'ok'
  })
}
module.exports = {
  getAllUsers, createNewUser,
  updateUser, deleteUser
};
