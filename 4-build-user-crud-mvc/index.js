const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT 
const cors = require('cors')


//! middleware 
app.use(express.json())
app.use(cors())

//! connectDB require
const connectDB = require('./config/database')
//? connectDB function call
connectDB()

//! routes require
const userRoutes = require('./routes/userRoutes');
//? /api/users -> ai route search kola userRoutes call hova
//* first -> /api/users tar por userRoutes var code 
app.use("/api/users", userRoutes) 


app.get('/', (req, res) => {
  res.send('Build Users CRUD MVC server..')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// mdtahinhassanjihad_db_user
// hidQpIegySto5EGa