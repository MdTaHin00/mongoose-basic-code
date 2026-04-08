const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT


//! connectDB require 
//* config folder dataBase.js file
const connectDB = require('./config/dataBase')
//? connectDB function call
connectDB()

app.get('/', (req, res) => {
  res.send('Mongoose schema server..')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//  mdtahinhassanjihad_db_user
//  elYVjmCqQLy3kWv6
