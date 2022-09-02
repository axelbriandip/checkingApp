const express = require('express');

const registrationRouter = express.Router();

// get all controllers
const { getAllRegistrations, addRegistration } = require('../controllers/registration.controller');

// endpoints
registrationRouter.get('/', getAllRegistrations);
registrationRouter.post('/', addRegistration);

// export 
module.exports = { registrationRouter };