const express = require('express');

const registrationRouter = express.Router();

// get all controllers
const {
    getAllRegistrations,
    addRegistration,
    getRegistrationUnique,
    markedExit,
    deleteRegister
} = require('../controllers/registration.controller');

// endpoints
registrationRouter.get('/', getAllRegistrations);
registrationRouter.get('/:id', getRegistrationUnique);
registrationRouter.post('/', addRegistration);
registrationRouter.patch('/:id', markedExit);
registrationRouter.patch('/delete/:id', deleteRegister);

// export 
module.exports = { registrationRouter };