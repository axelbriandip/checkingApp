const { app } = require('./app');
const { database } = require('./utils/database.util');

const startServer = async () => {
    try {
        // authenticate
        await database.authenticate();
        // sync
        await database.sync();
        // init server
        const PORT = 4001;
        app.listen(PORT, () => {
            console.log('¡Express running!');
        })
    } catch (err) {
        console.log(err);
    }
}

startServer();