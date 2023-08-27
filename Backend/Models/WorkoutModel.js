const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*
Create a model by defining the schema or the blueprint of the data
*/

const workOutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workOutSchema)