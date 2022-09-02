const express = require('express');

const app = express();

app.use(express.json());

// import router
const { registrationRouter } = require('./routes/registration.router')

// define endpoints
app.use('/api/v1/registrations', registrationRouter)

// if endpoints failed
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'Error',
        data: {
            message: `${req.method} ${req.url} no exists in your server`
        }
    })
})

module.exports = { app };