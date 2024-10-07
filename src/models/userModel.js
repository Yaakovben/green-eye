const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required :[true,"user name is required"],
        minlength: [5, "way too short name, please enter at least 5 chars"]
    },
    password:{
        type:String,
        required:[true,"password must be provided"]
    },
    role:{
        type:String,
        enum:['soldie', 'commandert'],
        required:[true, "please provider a role"]

    }

})

const UserModel = mongoose.model('user', userSchema)