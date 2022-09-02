// 2022-08-22 19:30:30

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
        // received register
        const { entranceTime } = req.body;

        // create register
        const newRegistration = await Registration.create({
            entranceTime
        })

        // response
        res.status(200).json({
            status: "success",
            data: {
                newRegistration
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getAllRegistrations, addRegistration };