'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpresaSchema = Schema({
    nombre: {type: String, require: true},
    contactos: {type: Array, require: false},
});

module.exports = mongoose.model('Empresa',EmpresaSchema);