const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB database Collection SuccessFully");
    } catch (error) {
    console.log("MonGoBD Database collection Failed",error);
    }
}

module.exports = connectDB