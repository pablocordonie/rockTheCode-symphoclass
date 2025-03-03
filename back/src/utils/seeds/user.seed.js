require('dotenv').config();
const mongoose = require('mongoose');
const Attendee = require('../../api/models/Attendee');
const Event = require('../../api/models/Event');
const User = require('../../api/models/User');
const { hashPassword } = require('../hash');

const users = [
    {
        username: 'pablo_cord',
        fullname: 'Pablo Cordonié',
        email: 'pablo_cord93@gmail.com',
        birthdate: '26/01/1993',
        img: '',
        password: hashPassword('1234567890'),
        role: 'admin'
    },
    {
        username: 'alice_85',
        fullname: 'Alicia Jovellanos',
        email: 'alice123@gmail.com',
        birthdate: '15/03/1985',
        img: '',
        password: hashPassword('1234567890')
    },
    {
        username: 'bob_95',
        fullname: 'Roberto López',
        email: 'bob456@gmail.com',
        birthdate: '11/10/1978',
        img: '',
        password: hashPassword('1234567890')
    },
    {
        username: 'carol_99',
        fullname: 'Carolina Castaño',
        email: 'carol@gmail.com',
        birthdate: '19/12/1999',
        img: '',
        password: hashPassword('1234567890')
    }
];

mongoose.connect(process.env.DB_URL)
    .then(async () => {
        const attendeesCollection = await Attendee.find();
        if (attendeesCollection.length) {
            await Attendee.collection.drop();
            console.log(`The attendees collection's been dropped`);
        }

        const eventsCollection = await Event.find();
        if (eventsCollection.length) {
            await Event.collection.drop();
            console.log(`The events collection's been dropped`);
        }

        const usersCollection = await User.find();
        if (usersCollection.length) {
            await User.collection.drop();
            console.log(`The users collection's been dropped`);
        }
    })
    .catch(err => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        try {
            const usersData = users.map(product => new User(product));
            await User.insertMany(usersData);
            console.log('The new users data are inserted on the DB');
        } catch (error) {
            console.log(`Error creating the new data: ${error}`)
        } finally {
            await mongoose.disconnect();
        }

    });