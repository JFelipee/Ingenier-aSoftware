const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catalogo = new Schema({
    foto: String,
    modelo: String,
    gama: String,
    puertas: Number,
    cambio: String,
    extras: Object,
    marca: String
});

module.exports = mongoose.model('catalogo', catalogo);