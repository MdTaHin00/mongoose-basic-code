const mongoose = require('mongoose')
//! another wey 
// const { Schema } = mongoose;
// const userSchema = new Schema({    
// })
const userSchema = new mongoose.Schema({
    //* String -> name string value hova
    name: String,
    email: {
        //* type:String -> email string value hova
        type: String,
        //*  require:true -> ai user a email na thkaly from submit hova na 
        required: true,
        //* unique:true -> same email akadik hova na
        unique: true
    },
    password: String,
    age: {
        //* Number -> age number value hova
        type: Number,
        //* default-> age dela deva na dela 18 call hova
        default: 18
    },
    price: {
        type: Number,
        //* min:0 -> sob thaka choto value 0 hova
        min: 0,
        //* max:100 -> sob thaka bro value 100 hova
        max: 100
    },
    createAt: {
       //* type:Date -> createAt value time hova 
       type:Date,
       //* default:Date.now()-> present time call hova
       default:Date.now()
    },
    address:{
      street:{
        type:String,
        required:true
      },
      city:String,
      state:String,
      zip:Number
    }
},{
    //? timestamps:true ->  user ar data update,edit show kola jay
    timestamps:true,
    //? strict:true -> userSchema model vahela anno data asva na 
    // strict:true
}
)


//! model call
//* User -> ai model ar name 
//* userSchema -> oporal schema ta 
const UserModel = mongoose.model('User',userSchema);

//! export require
module.exports = UserModel;