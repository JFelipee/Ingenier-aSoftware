const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reserva = new Schema({
    foto: String,
    modelo: String,
    gama: String,
    puertas: Number,
    cambio: String,
    extras: Object,
    fecha_reserva: String,
    fecha_recogida: String,
    fecha_entrega: String,
    tarifa: String,
    forma_pago: String
});

module.exports = mongoose.model('reserva', reserva);