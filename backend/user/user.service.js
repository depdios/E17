const config = require('../config.json');
const jwt = require('jsonwebtoken');
const { User } = require("../models/userModel");
module.exports = {
    authenticate,
    getAll
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email: email });

    if (!user) throw 'email is incorrect';
    else if (user.password != password) throw 'password is incorrect';

    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

    return {
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