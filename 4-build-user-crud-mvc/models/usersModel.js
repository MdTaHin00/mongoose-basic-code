const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
   name:String,
   email:{
    type:String,
    required:[true,"Email is required"],
    unique:true,
    trim:true
   },
   password:{
    type:String,
    required:[true,'Password is required'],
    minLength:6
   },
   age:{
    type:Number,
    min:16
   },
   isActivated:Boolean,
   role:{
    type:String,
    enum:['user','admin','moderator'],
    default:'user'
   },
   address:{
     street:String,
     city:String,
     state:String,
     zip:String
   }
},{
    timestamps:true
});

const UserSchema = mongoose.model('User',userSchema);

module.exports = UserSchema;
