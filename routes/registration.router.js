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
registrationRouter.patch('/exit/:id', markedExit);
// registrationRouter.delete('/delete/:id', deleteRegistration);
registrationRouter.patch('/delete/:id', deleteRegistration);

// export 
module.exports = { registrationRouter };