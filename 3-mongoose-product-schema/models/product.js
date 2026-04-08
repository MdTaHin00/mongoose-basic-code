const mongoose = require('mongoose')
//! another wey 
// const { Schema } = mongoose;
// const userSchema = new Schema({    
// })

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        //* required:true -> name na thkaly Product message asva
        required:[true, 'Product name is required'],
        trim:true,
        //* maxLength:100 -> 100 letter bayse hola message asva
        maxLength:[100, 'Name cannot exceed 100 characters']
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:[true,"Product price is required"],
        //* min:0 -> price sob thaka choto 0 value hova
        min:[0,"Price cannot be negative"]
    },
    category:{
        type:String,
        required:true,
        enum:{
            values:['Electronics','Books','Clothing','Home','Beauty','Sports','Toys','Grocery','Automotive','Heath'],
            message:'Please select a valid category foe the product'
        }
    }, 
    stock:{
        type:Number,
        required:true,
        default: 0 
    },
    rating:{
        type:Number,
        default: 0 ,
        max:5,
        min:0
    } ,
    image:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    isFeatured:{
        type:Boolean,
        default:false
    }

},
 //*  timestamps:true -> code update & edit check method
{
    timestamps:true
}
)

//* Product-> ai model ar name
//* productSchema -> operal schema make kola hoyca tar name
const ProductModel = mongoose.model('Product',productSchema)

//! export require
module.exports = ProductModel ;