const express = require('express');
const router = express.Router();
const path = require('path');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

const Usuario = require('../models/usuario')
const Reserva = require('../models/reserva')
const Catalogo = require('../models/catalogo')

router.get('/', (req, res) => {
    // var tablas1 = Tabla1.find();
    // console.log(tablas1);
    res.render(path.join(__dirname + "/index.ejs"));
});

router.get('/login', (req, res) => {
    res.render(path.join(__dirname + "/login.ejs"));
});

router.get('/registro', (req, res) => {
    res.render(path.join(__dirname + "/registro.ejs"));
});

router.get('/misreservas', (req, res) => {
    // const reservas = Reserva.find();
    // console.log(reservas.toString())
    /*
    const reserva = new Schema({
        foto: String,
        modelo: String,
        gama: String,
        puertas: Number,
        cambio: String,
        extras: Object,
        fecha_reserva: String,
        fecha_entrega: String,
        fecha_devolucion: String,
        tarifa: String,
        forma_pago: String
    });
     */
    const reservas = [{
        foto: "Imagen del Ford Focus",
        modelo: "Ford Focus",
        gama: "Media",
        puertas: 4,
        cambio: "manual",
        extras: {
            plazas: "2",
            maletero: "341 L",
            aire_acondicionado: "aire acondicionado",
            cv: "100 CV, 125 CV y 155 CV",
            disponibilidad: "Franquicia-1 (C/ Puerto barbaran, Nº53)",
            gps: "GPS",
            silla_bebes: "Silla para bebes"
        },
        fecha_reserva: "16/12/20",
        fecha_recogida: "18/12/20",
        fecha_entrega: "23/12/20",
        tarifa: "Semanal",
        forma_pago: "Efectivo"
    }]
    res.render(path.join(__dirname + "/mis_reservas.ejs"), {
        reservas
    });
});

router.get('/reservas', (req, res) => {
    const reservas = [{
        foto: "Imagen del Ford Focus",
        modelo: "Ford Focus",
        gama: "Media",
        puertas: 4,
        cambio: "manual",
        extras: {
            plazas: "2",
            maletero: "341 L",
            aire_acondicionado: "aire acondicionado",
            cv: "100 CV, 125 CV y 155 CV",
            disponibilidad: "Franquicia-1 (C/ Puerto barbaran, Nº53)",
            gps: "GPS",
            silla_bebes: "Silla para bebes"
        },
        fecha_reserva: "16/12/20",
        fecha_recogida: "18/12/20",
        fecha_entrega: "23/12/20",
        tarifa: "Semanal",
        forma_pago: "Efectivo"
    }]
    res.render(path.join(__dirname + "/informacion_reserva.ejs"), {
        reservas
    })
})

router.get('/catalogo', (req, res) => {
    const catalogoAntiguo = Catalogo.find();
    // console.log(catalogoAntiguo)
    const catalogo = [{
        foto: "Imagen del Ford Focus",
        modelo: "Ford Focus",
        gama: "Media",
        puertas: 4,
        cambio: "manual",
        extras: {
            plazas: "2",
            maletero: "341 L",
            aire_acondicionado: "aire acondicionado",
            cv: "100 CV, 125 CV y 155 CV",
            disponibilidad: "Franquicia-1 (C/ Puerto barbaran, Nº53"
        }
    },
        {
            foto: "Imagen del Batmovil",
            modelo: "Batmovil",
            gama: "Alta",
            puertas: 2,
            cambio: "automatica",
            extras: {
                plazas: "2",
                maletero: "500 L",
                aire_acondicionado: "aire acondicionado",
                cv: "1000 CV",
                disponibilidad: "Franquicia-4 (Avda. Los barros)"
            }
        },
        {
            foto: "Imagen del Lamborgini",
            modelo: "Lamborgini aventador",
            gama: "Alta",
            puertas: 2,
            cambio: "automatica",
            extras: {
                plazas: "2",
                maletero: "300 L",
                aire_acondicionado: "aire acondicionado",
                cv: "300 CV",
                disponibilidad: "Franquicia-4 (Avda. Los barros)"
            }
        }
    ]
    // console.log(catalogo[0])
    // console.log(catalogo[0].modelo)
    res.render(path.join(__dirname + "/catalogo.ejs"), {
        catalogo
    });
});

router.get('/informacion_coche', (req, res) => {
    const catalogo = Catalogo.find();
    // console.log(catalogo)
    const vehiculo = [{
        foto: "Imagen del Batmovil",
        modelo: "Batmovil",
        gama: "Alta",
        puertas: 2,
        cambio: "automatica",
        extras: {
            plazas: "2",
            maletero: "500 L",
            aire_acondicionado: "aire acondicionado",
            cv: "1000 CV",
            disponibilidad: "Franquicia-4 (Avda. Los barros)"
        }
    }]
    res.render(path.join(__dirname + "/informacion_coche.ejs"), {
        vehiculo
    });
});

router.post('/registrar', async (req, res) => {
    console.log(req.method + ": " + req.path + " -> " + res.statusCode + ": " + res.body);
    console.log(res.body);
    const usuarioRegistrar = new Usuario(res.body);
    console.log(usuarioRegistrar);
    await usuarioRegistrar.save();
    console.log("Registrar usuario en la BD");
    res.render(path.join(__dirname + "/index.ejs"));
});

router.post('/logear', (req, res) => {
    res.send("El usuario a.gsanz@alumnos.upm.es ha sido logueado con exito")
    console.log("Comprobar que el usuario esta registrado en la BD")
    const usuario = Usuario.find(res.body);
});

router.post('/add', jsonParser, (req, res) => {
    var objeto = new Tabla1();
    objeto.titulo = "a";
    objeto.descripcion = "b";
    objeto.estado = true;

    console.log("res: " + res.body);
    console.log("req: " + req.body.accessKey);
    console.log(objeto);
    console.log(new Tabla1(req.body));
    objeto.save();

    res.send('received');
});

module.exports = router;