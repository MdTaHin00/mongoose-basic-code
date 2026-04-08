const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT

//! connectDB 
const connectDB = require('./config/dataBase');
connectDB();

app.get('/', (req, res) => {
  res.send('Mongoose products Schema')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// mdtahinhassanjihad_db_user
// yj3xtlLBowDbKzoK