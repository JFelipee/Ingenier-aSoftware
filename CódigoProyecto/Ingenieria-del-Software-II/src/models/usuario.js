const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuario = new Schema({
    correo_electronico: String,
    contraseña: String,
    dni_cif: String,
    cuenta_empresa: Boolean
});

module.exports = mongoose.model('usuario', usuario);