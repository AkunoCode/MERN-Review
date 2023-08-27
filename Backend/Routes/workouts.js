const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ mssg: "GET all the workouts" })
})

router.post('/', (req, res) => {
    res.json({ mssg: "POST a new workout" })
})

router.get('/:id', (req, res) => {
    res.json({ mssg: "GET a single workout" })
})

router.delete('/:id', (req, res) => {
    res.json({ mssg: "DELETE a single workout" })
})

router.patch('/:id', (req, res) => {
    res.json({ mssg: "PATCH a single workout" })
})

module.exports = router;