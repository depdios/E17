const express = require('express');
const userService = require('./user.service');
const cookieParser = require("cookie-parser");


module.exports = function(app){
    app.post('/userlog/login', (req, res, next) => {
        userService.authenticate(req.body)
            .then(user => res
                .cookie("access_token", user.token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                })
                .status(200)
                .json({ message: "Sesión iniciada correctamente" }))
            .catch(next);
    });

}