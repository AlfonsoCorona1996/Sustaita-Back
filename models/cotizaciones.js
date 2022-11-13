'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CotizacionSchema = Schema({
    folio: {type: String, require: true},
    des_cliente: {type: String, require: true},
    des_empresa: {type: String, require: true},
    empresa: {type: String, require: true},
    sitio: {type: String, require: true},
    equipos: {type: Array, require: false},
    atencion: {type: String, require: true},
    remitente: {type: String, require: true},
    fecha_sol: {type: Date, require: true},
    fecha_pro: {type: Date, require: false},
    fecha_cot: {type: Date, require: false},
    doc: {type: String, require: false},
    vigencia: {type: Number, require: true},
    status: {type: String, require: true},
    contenido: {type: Object, require: false},
    comentarios: {type: String, require: false},
});

module.exports = mongoose.model('cotizaciones',CotizacionSchema);