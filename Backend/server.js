const express = require('express');
require('dotenv').config();

// Route declarations
const workOutRoutes = require('./Routes/workouts')

// express app
const app = express();

// Middleware: Logging the requests path and methods
app.use((req, res, next) => {
    console.log(`${req.method} Request from ${req.path}`)
    next()
})

// Routes
app.use('/api/workouts', workOutRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`)
})