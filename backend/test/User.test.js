let mongoose = require("mongoose");
let User = require("../models/userModel");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../main');
let should = chai.should();

chai.use(chaiHttp);

//const { request } = require("express")

describe('Users', () => {

    // Borra la base de datos antes de ejecutar cada prueba 
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });

    // Prueba crear usuario
    describe('/POST user', () => {
        it('No debería dejar crear usuario sin email', (done) => {
            let user = {
                username: 'JaimeG',
                password: 'pass',
                phone: '671982451',
                favGenres: ['Ciencia ficción', 'Aventura'],
                favAuthors: ['Ursula k.', 'Julio Verne'],
            }

            chai.request(server)
            .post('/user')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200)
            })
        })
    })

});

/*
test('Usuario con todos los campos', async () => {
    const response = await request(app)
    .post('/users')
    .send({
        username: 'JaimeG',
        email: 'jaime@gmail.com',
        password: 'jame1',
        phone: '671982451',
        favGenres: ['Ciencia ficción', 'Aventura'],
        favAuthors: ['Ursula k.', 'Julio Verne'],
    })
    .set()
    .expect('Content-Type', /json)
    .expect(200)

    expect(response.body).toEqual({
        username: 'JaimeG',
        email: 'jame@gmail.com',
        password: 'jaime1',
        phone: '671982451',
        favGenres: ['Ciencia ficción', 'Aventura'],
        favAuthors: ['Ursula k.', 'Julio Verne'],
        _id: 'abc',
    })
})
*/