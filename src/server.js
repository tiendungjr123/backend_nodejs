require('dotenv').config() // Import the express module
const express = require('express')
const app = express()
const port = process.env.PORT || 3000// initialize the port number
const hostname = process.env.HOST_NAME // initialize the hostname
// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data
const configViewEngine = require('./config/viewEngine') // Import the view engine configuration
configViewEngine(app);

const webRouter = require('./routers/web')
// khai bao router
app.use('/', webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
