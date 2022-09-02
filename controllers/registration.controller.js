const { Registration } = require('../models/registrations.model');

const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll();

        res.status(200).json({
            status: 'success',
            data: {
                registrations
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const addRegistration = async (req, res) => {
    try {
        // received dates
        const { entranceTime, exitTime } = req.body;

        // create registration
        const newRegistration = await Registration.create({
            entranceTime,
            exitTime
        })

        // response
        res.status(201).json({
            status: 'success',
            data: {
                newRegistration
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllRegistrations, addRegistration };