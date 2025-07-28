const connection = require("../config/database")

const getALLUsers = async () => {
  let [results, fields] = await connection.query('select * from Users');
  return results;
}

module.exports = {
  getALLUsers
}