require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const workOutRoutes = require('./Routes/workouts')
const cors = require('cors')

// express app
const app = express();

// MIDDLEWARES
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(`${req.method} Request from ${req.path}`)
    next()
})

// Routes
app.use('/api/workouts', workOutRoutes)

// Connect to DB and then listen for requests after successful connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Connected to database and listening on port ${process.env.PORT}`)
    })
}).catch((err) => {
    console.log(err)
})