'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServicioSchema = Schema({
    nombre: {type: String, require: true},
    descripcion: {type: String, require: true},
    actividades: {type: Array, require: false},
    para: {type: Array, require: false},
    equipos: {type: Array, require: false}
});

module.exports = mongoose.model('Servicios',ServicioSchema);