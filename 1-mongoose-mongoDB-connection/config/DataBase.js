
//! mongoose require
const mongoose = require('mongoose')

const connectBD = async ()=>{
    try {
        await mongoose.connect(process.env.MONGOBD_URL)
        console.log("MongoDB connected successFully");        
    } catch (error) {
    console.log("DataBase connection failed", error);
    }
}

//! mongoose connection method
//? connection method first run hoy
//* connected,open,disconnected,reconnected,close
mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connection.on('open', () => console.log('open'));
mongoose.connection.on('disconnected', () => console.log('disconnected'));
mongoose.connection.on('reconnected', () => console.log('reconnected'));
mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
mongoose.connection.on('close', () => console.log('close'));


module.exports = connectBD