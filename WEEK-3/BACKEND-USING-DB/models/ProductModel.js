import {Schema,model} from 'mongoose'
//create user schema(name,brand price)
const productSchema=new Schema({
    productname:{
        type:String,
        required:[true,"product name is required"],
    },
    brand:{
        type:String,
        required:[true,"give the brande name to the product"]
    },
    price:{
        type:Number,
        required:[true,"set the price of the product"],
    }
},{
    strict:"throw",
    timestamps:true
})

//create user model with that schema
export const ProductModel=model("product",productSchema)