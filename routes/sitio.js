'use strict'

var express = require('express');
var SitioController = require('../controllers/SitioController');

var api = express.Router();

api.post('/registro_sitio', SitioController.registro_sitio );
api.post('/listar_sitios', SitioController.listar_sitio);
// api.post('/listar_cotizaciones_clientes', SitioController.listar_cotizaciones);
// api.get('/listar_cotizaciones_clientes/:folio', SitioController.listar_cot_larga);

module.exports = api;