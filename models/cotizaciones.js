'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CotizacionSchema = Schema({
    folio: {type: String, require: true},
    des_cliente: {type: String, require: true},
    des_empresa: {type: String, require: false},
    empresa: {type: String, require: true},
    sitio: {type: String, require: true},
    id_sitio: {type: String, require: true},
    equipos: [{type: Array, require: false}],
    atencion: {type: String, require: true},
    remitente: {type: String, require: false},
    fecha_sol: {type: Date, require: true},
    fecha_pro: {type: Date, require: false},
    fecha_cot: {type: Date, require: false},
    doc: {type: String, require: false},
    vigencia: {type: Number, require: false},
    status: {type: String, default: 'Solicitada', require: true},
    historial: [{type: Array, require: false}],
    refacciones: [{type: Array, require: false}],
    conversacion: [{type: Array, require: false}],
    archivos: [{type: Array, require: false}],
});

module.exports = mongoose.model('cotizaciones',CotizacionSchema);