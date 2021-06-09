const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: {type: String},
    correo: {type: String},
    password:{type: String}
    
});

module.exports = mongoose.model('User',userSchema);