const Workout = require('../Models/WorkoutModel')
const mongoose = require('mongoose')

// GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 })
        res.status(200).json(workouts)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// GET SINGLE WORKOUT
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

// POST NEW WORKOUT
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// DELETE WORKOUT
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

// PATCH WORKOUT
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