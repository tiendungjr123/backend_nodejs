require('dotenv').config() // Import the express module
const express = require('express')

const app = express() // tạo express application
const port = process.env.PORT || 3000// initialize the port number
const hostname = process.env.HOST_NAME // initialize the hostname

const configViewEngine = require('./config/viewEngine') // Import the view engine configuration
const webRouter = require('./routers/web')
configViewEngine(app);

// khai bao router
app.use('/', webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
