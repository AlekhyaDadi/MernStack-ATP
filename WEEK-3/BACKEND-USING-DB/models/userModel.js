import {Schema,model} from 'mongoose'
//create user schema(username,password,age)
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"minimum len shoud be 4"],
        maxLength:[6,"max len is exceeded"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    age:{
        type:Number,
        required:[true,"age is req"],
        min:[18,"age should be above 18"],
        max:[25,"age shouls be less than 25"]
    }
},{
    strict:"throw",
    timestamps:true
})

//create user model with that schema
export const userModel=model("user",userSchema)