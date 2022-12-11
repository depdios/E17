const express = require('express');
const userService = require('./user.service');

module.exports = function(app){
    app.post('/userlog/login', (req, res, next) => {
        userService.authenticate(req.body)
            .then(user => res.json(user))
            .catch(next);
    });

}