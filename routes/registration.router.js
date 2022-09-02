const express = require('express');

const registrationRouter = express.Router();

// get all controllers
const {
    getAllRegistrations,
    addRegistration,
    getRegistrationUnique
} = require('../controllers/registration.controller');

// endpoints
registrationRouter.get('/', getAllRegistrations);
registrationRouter.get('/:id', getRegistrationUnique);
registrationRouter.post('/', addRegistration);

// export 
module.exports = { registrationRouter };