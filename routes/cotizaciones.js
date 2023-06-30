'use strict'

var express = require('express');
var cotizacionController = require('../controllers/CotizacionesControllers');

var api = express.Router();
var auth = require('../middlewares/authenticate');
var multiparty = require('connect-multiparty');
var path = multiparty({uploadDir: './uploads/solicitar_coticacion'})

api.post('/registro_cotizacion', cotizacionController.registro_cotizacion );
api.post('/registro_cotizacion_files', [auth, path], cotizacionController.registro_cotizacion_files);
api.post('/listar_cotizaciones_clientes', cotizacionController.listar_cotizaciones);
api.get('/listar_cotizaciones_clientes/:folio', cotizacionController.listar_cot_larga);
api.post('/update_files_registro', cotizacionController.update_files_name)

module.exports = api;