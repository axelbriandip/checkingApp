// 2022-08-22 19:30:30

const { Registration } = require('../models/registrations.model');

const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll({
            where: {
                status: 'working'
            }
        });

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

const getRegistrationUnique = async (req, res) => {
    try {
        // get id
        const { id } = req.params;

        // find registration
        const registration = await Registration.findOne({
            where: {
                id
            }
        })

        // if not exists
        if( !registration ) {
            return res.status(404).json({
                status: 'error',
                data: {
                    message: 'registration not found'
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
        const { exitTime } = req.body;
        const { id } = req.params;

        // verificar si el usuario existe o no
        const registerExit = await Registration.findOne({
            where: {
                id
            }
        })

        // si no existe..
        if ( !registerExit ) {
            return res.status(404).json({
                status: "error",
                message: "Register not found"
            })
        }

        // si existe..

        // método 1 - update
        // const updatedUser = await User.update({ name }, {
        //     where: {
        //         id: id
        //     }
        // })

        // método 2 - update
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

module.exports = {
    getAllRegistrations,
    addRegistration,
    getRegistrationUnique,
    markedExit
};