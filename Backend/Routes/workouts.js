const express = require('express')
const Workout = require('../Models/WorkoutModel')
const router = express.Router()
const { getWorkouts, getWorkout, createWorkout, deleteWorkout, patchWorkout } = require('../Controllers/workoutController')

router.get('/', getWorkouts)

router.post('/', createWorkout)

router.get('/:id', getWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', patchWorkout)

module.exports = router;