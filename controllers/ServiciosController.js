"use strict";

var servicio = require("../models/servicio");

const registro_servicio = async function (req, res) {
  // OBTENER DATA
  var data = req.body;
  // VALIDAR IGUALES
  var ser_arr = [];
  ser_arr = await servicio.find({ nombre: data.nombre });

  //REGISTRO
  if (ser_arr.length == 0) {
    if (data.nombre) {
      var reg = await servicio.create(data);
      res.status(200).send({ data: reg });
    } else {
      res.status(200).send({
        message: "Necesitas ingresar un nombre al servicio",
        data: undefined,
      });
    }
  } else {
    res.status(200).send({
      message: "Ya existe un servicio con ese nombre",
      data: undefined,
    });
  }
};


module.exports = {
    registro_servicio
}
