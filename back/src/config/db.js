const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Database connection status: online');
    } catch (error) {
        console.log('Database connection status: offline // Connection error: ', error);
        // Proceso de salida en caso de fallo de conexión
        process.exit(1);
    }
};

module.exports = { connectDB };