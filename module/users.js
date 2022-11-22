const {Schema,model} = require('mongoose');


const userSchema = new Schema({
    name:{type:String},
    age:{type:Number},
    email:{type:String,unique:true},
    phone:{type:Number,unique:true},
})

const User = model('user',userSchema)
module.exports = User