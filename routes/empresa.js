'use strict'

var express = require('express');
var EmpresaController = require('../controllers/EmpresaController');

var api = express.Router();

api.post('/registro_empresa', EmpresaController.registro_empresa);
// api.post('/listar_cotizaciones_clientes', SitioController.listar_cotizaciones);
// api.get('/listar_cotizaciones_clientes/:folio', SitioController.listar_cot_larga);

module.exports = api;