'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RefaccionSchema = Schema({
    nombre: {type: String, require: true},
    descripcion: {type: String, require: false},
    part: {type: String, require: true},
    marca: {type: String, require: false},
    tipo: {type: Array, require: false},
    para: {type: Array, require: false},
});

module.exports = mongoose.model('Refacciones',RefaccionSchema);