const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOBD_URL)
        console.log("Database collection successFully");
    } catch (error) {
        console.log("Database Collection Error", error);
    }
}

module.exports = connectDB