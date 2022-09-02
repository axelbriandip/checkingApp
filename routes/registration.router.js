const express = require('express');

const registrationRouter = express.Router();

// get all controllers
const {
    getAllRegistrations,
    addRegistration,
    getRegistrationUnique,
    markedExit
} = require('../controllers/registration.controller');

// endpoints
registrationRouter.get('/', getAllRegistrations);
registrationRouter.get('/:id', getRegistrationUnique);
registrationRouter.post('/', addRegistration);
registrationRouter.patch('/:id', markedExit);

// export 
module.exports = { registrationRouter };