const mongoose = require('mongoose');
const { userSchema } = require('./userModel');

const populationSchema = new mongoose.Schema({
    areas:[String],
    units:[Number]
    
})

const greenEyeSchema = new mongoose.Schema({
    created_at: {
        type:Date,
        default:Date.now,
    },
    created_By:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        requierd:[true, "please tell me who you are"]
    },  
    length: {
        type:Number,
        default:3
    },
    replies:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"user",
    },
    population:{
        type:populationSchema

    }


})


const GreenEyeModel = mongoose.model('greenEye', greenEyeSchema)
module.exports = GreenEyeModel;


