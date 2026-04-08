const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoBD Database Connection SuccessFully");
    } catch (error) {
        console.log("MongoDB Database connection Failed", error);
    }
}

module.exports = connectDB