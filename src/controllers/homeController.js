const mongoose = require('mongoose');
const db = require('../db');

var User = require('../models/user.model');

const controller = {};

app.get('/', function(req, res) {
    // do something here.
  });

controller.list = (req, res) => {

    User.find((err, usuarios) => {
        if (err) console.log('Error: ' + err);

        res.render('home', {
            users: usuarios
        });

    })

}



controller.save = (req, res) => {
    var newUser = User({
        nombre: req.body.nombre,
        correo: req.body.correo,
        password: req.body.password
    });


    newUser.save((err, usersaved) => {
        if (err) console.log(err);
        console.log('Guardado con exito!.. ', usersaved);
        res.redirect('/');
    })
}

module.exports = controller;