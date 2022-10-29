"use strict";

var cotizaciones = require("../models/cotizaciones");

const registro_cotizacion = async function (req, res) {
  // OBTENER DATA
  var data = req.body;

  // VALIDAR IGUALES
  var cot_arr = [];
  cot_arr = await cotizaciones.find({ folio: data.folio });

  // REGISTRO
  if (cot_arr.length == 0) {
    if (data.folio) {
      var reg = await cotizaciones.create(data);
      res.status(200).send({ data: reg });
    } else {
      res.status(200).send({
        message: "Es necesario ingresar un folio",
        data: undefined,
      });
    }
  } else {
    res.status(200).send({
      message: "Ya existe una cotizacion con ese folio",
      data: undefined,
    });
  }
};

const listar_cotizaciones = async function (req, res) {
  var data = req.body;
  var cot_arr = [];
  cot_arr = await cotizaciones.find({empresa:data.empresa});
  if (cot_arr.length == 0) {
    res.status(200).send({
        message: "No hay cotizaciones con la empresa ",
        data: undefined,
      });
  } else {
    res.status(200).send({ data: cot_arr });
  }
};

const listar_cot_larga = async function (req, res) {
  var data = req.params;
  var cot_arr = {};

  cot_arr = await cotizaciones.find({ folio: data.folio });
  if (cot_arr.length == 0) {
    res
      .status(200)
      .send({
        message: "No hay cotizaciones con el folio " + data.folio,
        data: undefined,
      });
  } else {
    res.status(200).send({ data: cot_arr });
  }
};

module.exports = {
  registro_cotizacion,
  listar_cotizaciones,
  listar_cot_larga,
};
