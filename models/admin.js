'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = Schema({
    nombre: {type: String, require: true},
    apellido: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    rol:{type: String, require: true},
    permisos: {
        categorias: [
          {
            viewValue: { type: String, default: "" },
            show: { type: Boolean, default: false },
            sub: [
              {
                show: { type: Boolean, default: false },
                viewValue: { type: String, default: "" },
                route: { type: String, default: "" },
              },
            ],
          },
        ],
      },
    telefono: {type: String, require: true},
});

module.exports = mongoose.model('admin',AdminSchema);