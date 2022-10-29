'use strict'

var express = require('express');
var cotizacionController = require('../controllers/CotizacionesControllers');

var api = express.Router();

api.post('/registro_cotizacion', cotizacionController.registro_cotizacion );
api.post('/listar_cotizaciones_clientes', cotizacionController.listar_cotizaciones);
api.get('/listar_cotizaciones_clientes/:folio', cotizacionController.listar_cot_larga);

module.exports = api;