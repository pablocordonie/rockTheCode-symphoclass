require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

// Definir el puerto en el que se ejecutará el servidor
const PORT = 8080;

// Definir la URL de localhost
const LOCALHOST = `http://localhost:${PORT}`;

const express = require('express');
const app = express();
const cors = require('cors');

// Configurar middleware de Express
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Habilitar parsing de JSON
app.use(express.urlencoded({ extended: false })); // Habilitar parsing de URL-encoded

// Configurar Cloudinary utilizando las variables de entorno
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// Conectar a la base de datos
const { connectDB } = require('./src/config/db');
connectDB();

// Definir una ruta de prueba que responde con "Pong!"
app.use('/ping', (req, res, next) => res.status(200).json('Pong!'));

// Configurar el enrutador principal para las rutas de la API
const { mainRouter } = require('./src/api/routes/router');
app.use('/api/v1', mainRouter);

// Devolver un error HTTP 404 si la ruta no se ha encontrado
app.use('*', (req, res, next) => res.status(404).json('Route not found'));

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => console.log(`Listening on: ${LOCALHOST}`));