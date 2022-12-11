const config = require('../config.json');
const jwt = require('jsonwebtoken');
const { User } = require("../models/userModel");

// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, email: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email: email });

    if (!user) throw 'email is incorrect';
    else if (user.password != password) throw 'password is incorrect';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

    return {
        ...omitPassword(user),
        token
    };
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}