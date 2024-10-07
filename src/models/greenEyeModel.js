const mongoose = require('mongoose')

const populationSchema = new mongoose.Schema({
    areas:{String},
    units:{Number},
})

const greenEyeSechma = new mongoose.Schema({
    created_at :{
        type: Date,
        default: Date.now,
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true,"please tell me who are you"]
    },
    length:{
        type: Number,
        default: 3,
    },
    replys:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: 'user',
    },
    population:{
        type: populationSchema,
        required: [true,"please tell me population"]
    }  
});

const GreenEyeModel = mongoose.model("greenEye", greenEyeSechma)

module.exports = GreenEyeModel;