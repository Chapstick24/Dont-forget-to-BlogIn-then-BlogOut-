const { User } = require('../models');

const userData = [
    {
        username: "Myke",
        email: "myke@gmail.com",
        password: "password1"
    },
    {
        username: "mike",
        email: "mike@gmail.com",
        password: "password2"
    },
    {
        username: "michael",
        email: "michael@gmail.com",
        password: "password3"
    },
    {
        username: "mikey",
        email: "mikey@gmail.com",
        password: "password4"
    },
    {
        username: "mykey",
        email: "mykeygmail.com",
        password: "password5"
    },
    {
        username: "mychal",
        email: "mychal@gmail.com",
        password: "password6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;