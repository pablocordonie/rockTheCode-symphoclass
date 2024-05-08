require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../../api/models/User');
const { hashPassword } = require('../hash');

const users = [
    {
        username: 'pablo_cord',
        fullname: 'Pablo Cordonié',
        email: 'pablo_cord93@gmail.com',
        password: hashPassword('1234567890'),
        role: 'admin'
    },
    {
        username: 'alice_85',
        fullname: 'Alicia Jovellanos',
        email: 'alice123@gmail.com',
        password: hashPassword('1234567890')
    },
    {
        username: 'bob_95',
        fullname: 'Roberto López',
        email: 'bob456@gmail.com',
        password: hashPassword('1234567890')
    },
    {
        username: 'carol_90',
        fullname: 'Carolina Castaño',
        email: 'carol@gmail.com',
        password: hashPassword('1234567890')
    }
];

mongoose.connect(process.env.DB_URL)
    .then(async () => {
        const usersCollection = await User.find();
        if (usersCollection.length) {
            await User.collection.drop();
            console.log(`The users collection's been dropped`);
        }
    })
    .catch(err => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        const usersData = users.map(product => new User(product));
        await User.insertMany(usersData);
        console.log('The new users data are inserted on the DB');
    })
    .catch(error => console.log(`Error creating the new data: ${error}`))
    .finally(() => mongoose.disconnect());