const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Intentar conectarse a la base de datos
        await mongoose.connect(process.env.DB_URL);
        console.log('Database connection status: online');
    } catch (err) {
        // Devolver un mensaje de error por consola en caso de fallo de conexión
        console.log('Database connection status: offline // Connection error: ', err);
        // Proceso de salida en caso de fallo de conexión
        process.exit(1);
    }
};

module.exports = { connectDB };