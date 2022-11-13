"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
  nombre: { type: String, require: true },
  apellido: { type: String, require: false },
  empresa: { type: String, require: true },
  id_empresa: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  telefono: { type: String, require: false },
  rol:{type: String, require: true},
  // permisos: {
  //   categorias: 
  //   [
  //     {
  //       viewValue: { type: String, default: "" },
  //       show: { type: Boolean, default: false },
  //       sub: [
  //         {
  //           show: { type: Boolean, default: false },
  //           viewValue: { type: String, default: "" },
  //           route: { type: String, default: "" },
  //         },
  //       ],
  //     }
  //   ]
  // }
  permisos: { type: JSON, require:true}
});

module.exports = mongoose.model("cliente", ClienteSchema);
