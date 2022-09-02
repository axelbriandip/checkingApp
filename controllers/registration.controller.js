const { Registration } = require('../models/registrations.model');

const getAllRegistrations = async (req, res) => {
    try {
        // get all registrations
        const allRegistrations = await Registration.findAll({
            where: {
                // filter for status
                status: 'working'
            }
        });

        // response
        res.status(200).json({
            status: 'success',
            data: {
                allRegistrations
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const addRegistration = async (req, res) => {
    try {
        // received registration
        const { entranceTime } = req.body;

        // create registration
        const newRegistration = await Registration.create({ entranceTime })

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

const getRegistrationUnique = async (req, res) => {
    try {
        // received id
        const { id } = req.params;

        // find registration
        const registration = await Registration.findOne({ where: { id } })

        // if not exists
        if( !registration ) {
            return res.status(404).json({
                status: 'Error',
                data: {
                    message: 'Registration not found'
                }
            })
        }

        // if exists
        res.status(200).json({
            status: 'success',
            data: {
                registration
            }
        })

    } catch (err) {
        console.log(err);
    }
}

const markedExit = async (req, res) => {
    try {
        // received exitTime and id
        const { exitTime } = req.body;
        const { id } = req.params;

        // find registration
        const registerExit = await Registration.findOne({ where: { id } })

        // if not exists
        if ( !registerExit ) {
            return res.status(404).json({
                status: "Error",
                data: {
                    message: "Registration not found"
                }
            })
        }

        // if exists
        await registerExit.update({
            exitTime,
            status: 'out'
        });

        // response
        res.status(200).json({
            status: "success",
            data: {
                registerExit
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const deleteRegistration = async (req, res) => {
    try {
        // received id
        const { id } = req.params;
        // find registration
        const registerDelete = await Registration.findOne({ where: { id } })
        // if not exists
        if( !registerDelete ) {
            return res.status(404).json({
                status: 'Error',
                data: {
                    message: 'Registration not found'
                }
            })
        }
        // if exists
        await registerDelete.update({ status: 'cancelled' });
        // response
        res.status(200).json({
            status: 'success',
            data: {
                registerDelete
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllRegistrations,
    addRegistration,
    getRegistrationUnique,
    markedExit,
    deleteRegistration
};