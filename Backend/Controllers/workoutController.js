const Workout = require('../Models/WorkoutModel')
const mongoose = require('mongoose')

/*
GET ALL WORKOUT:
Asynchronous function that gets all of the workout documents and sort them in descending order.
If successful, it will return a status of 200 and the documents. Otherwise, a status of 404 will be sent along with
the error message
*/
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 })
        res.status(200).json(workouts)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


/*
GET SINGLE WORKOUT:
Asynchronous function that takes the id from the request parameters and check if its valid and existing before it returns the document.
If successful, it will return a status of 200 and the documents. Otherwise, a status of 404 will be sent along with the error message.
*/
const getWorkout = async (req, res) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "No such workout exist." })
        }
        const workouts = await Workout.findById(id)
        if (!workouts) {
            return res.status(404).json({ error: "No such workout exist." })
        }
        res.status(200).json(workouts)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


/*
POST SINGLE WORKOUT:
Asynchronous function that takes the data from the request body and creates a new document to be posted in the collection database.
If successful, it will return a status of 200 and the documents. Otherwise, a status of 404 will be sent along with the error message.
*/
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body

    //Check if there are empty fields
    let emptyFields = []
    if (!title) {
        emptyFields.push('title')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if (!load) {
        emptyFields.push('load')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


/*
DELETE SINGLE WORKOUT:
Asynchronous function that takes the id from the request parameters and check if its valid and existing before it deletes the document.
If successful, it will return a status of 200 along with the document that was deleted. Otherwise, a status of 404 will be sent along 
with the error message.
*/
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "No such workout exist." })
        }
        const workouts = await Workout.findOneAndDelete({ _id: id })
        if (!workouts) {
            return res.status(404).json({ error: "No such workout exist." })
        }
        res.status(200).json(workouts)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


/*
PATCH SINGLE WORKOUT:
Asynchronous function that takes the id from the request parameters and check if its valid and existing before it patches with the
data gathered from the req.body of the document. If successful, it will return a status of 200 and the documents. 
Otherwise, a status of 404 will be sent along with the error message.
*/
const patchWorkout = async (req, res) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "No such workout exist." })
        }
        const workouts = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
        if (!workouts) {
            return res.status(404).json({ error: "No such workout exist." })
        }
        res.status(200).json(workouts)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    patchWorkout
}