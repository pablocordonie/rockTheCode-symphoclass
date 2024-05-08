require('dotenv').config();
const PORT = 8080;
const LOCALHOST = `http://localhost:${PORT}`;

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { connectDB } = require('./src/config/db');
connectDB();

app.use('/ping', (req, res, next) => res.status(200).json('Pong!'));

const mainRouter = require('./src/api/routes/router');
app.use('/api/v1', mainRouter);

app.use('*', (req, res, next) => res.status(404).json('Route not found'));

app.listen(PORT, () => console.log(`Listening on: ${LOCALHOST}`));