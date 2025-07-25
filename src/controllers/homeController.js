const getHomepage = (req, res) => {
  // process data
  // call model
  res.send('Hello World! and nodemon is running')
}
const getAbc = (req, res) => {
  res.render('sample.ejs')
}
module.exports = {
  getHomepage,
  getAbc
}