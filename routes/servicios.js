'use strict'

var express = require('express');
var ServiciosController = require('../controllers/ServiciosController');

var api = express.Router();

api.post('/registro_servicio', ServiciosController.registro_servicio);

module.exports = api;