const express = require('express');
require('dotenv').config();


const PORT = process.env.PORT || 5000;

// express app
const app = express();

app.get('/', (req, res) => {
    res.json({ mssg: "Welcome to the APP" })
})

// listen for requests
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})