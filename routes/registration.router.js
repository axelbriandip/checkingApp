const express = require('express');

const registrationRouter = express.Router();

// get all controllers
const {
    getAllRegistrations,
    addRegistration,
    getRegistrationUnique,
    markedExit,
    deleteRegistration
} = require('../controllers/registration.controller');

// endpoints
registrationRouter.get('/', getAllRegistrations);
registrationRouter.get('/:id', getRegistrationUnique);
registrationRouter.post('/', addRegistration);
registrationRouter.patch('/:id', markedExit);
registrationRouter.delete('/:id', deleteRegistration);

// export 
module.exports = { registrationRouter };