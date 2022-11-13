'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SitioSchema = Schema({
    empresa: {type: String, require: true},
    nombre: {type: String, require: true},
    direccion: {type: String, require: false},
    coordenadas: {type: String, require: false},
    jefes: {type: Array, require: false},
    Equipos: {type: Array, require: false},
});

module.exports = mongoose.model('Sitio',SitioSchema);