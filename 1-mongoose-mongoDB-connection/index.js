const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const port = process.env.PORT

//! connectDB require
//* config folder dataBase.js file
const connectBD = require('./config/DataBase')

//? connectBD function call 
//* advance code
//* connectDB async function tai .than() . catch() pai
connectBD().then(() => {
    //* database connection thaklay ai code run hova
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}).catch(() => {
    console.log("Server failed database connection");
})

app.get('/', (req, res) => {
    res.send('Mongoose and MongoBD connection server..')
})



// mdtahinhassanjihad_db_user
//  4EnWHaWdvRuQS34C
