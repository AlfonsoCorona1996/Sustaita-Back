"use strict";

var cotizaciones = require("../models/cotizaciones");

// ! Regristo de solicitud de cotizacion
const registro_cotizacion = async function (req, res) {
  // OBTENER DATA
  var data = req.body;
  // Encontrar el folio mas grande
  var HigherFolio = await cotizaciones
    .find({}, { folio: true })
    .sort({ folio: -1 })
    .limit(1);
  // Obtener nuevo folio
  var newFolio = '000000'
  if (HigherFolio.length == 0) {
    newFolio = await getHigherFolio("000000");
  } else {
    newFolio = await getHigherFolio(HigherFolio[0].folio);
  }
  // Asiganar valor a folio que sera registrado
  data.folio = newFolio;
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

//! Funcion para obtener el consecutivo del folio
function getHigherFolio(oldFolio) {
  const today = new Date();
  const actualMonth = today.getMonth() + 1;
  const actualYear = parseInt(today.getFullYear().toString().substring(2, 4));
  try {
    var newFolio = "";
    const oldMonth = parseInt(oldFolio.toString().substring(2, 4));
    const oldYear = parseInt(oldFolio.toString().substring(0, 2));

    if (actualYear > oldYear || actualMonth > oldMonth) {
      if (actualMonth < 10) {
        newFolio = actualYear + "0" + actualMonth + "01";
      } else {
        newFolio = actualYear + "" + actualMonth + "01";
      }
    } else {
      newFolio = parseInt(oldFolio) + 1;
    }

    return newFolio;
  } catch {
    if (actualMonth < 10) {
      newFolio = actualYear + "0" + actualMonth + "01";
    } else {
      newFolio = actualYear + "" + actualMonth + "01";
    }
    return newFolio;
  }
}

// ! Para los files
const registro_cotizacion_files = async function (req, res) {
  const img_paths = []
  // OBTENER DATA
  for(const file of req.files.archivos){
    img_paths.push(file.path.split('\\')[2]);
  }

  const name = img_paths;


  res.status(200).send({ data: name});
};

// ! Update names de archivos subidos
const update_files_name = async function (req, res){
  // OBTENER DATA
  var data = req.body;
  console.log(req.body)
  var reg = await cotizaciones.findOneAndUpdate({folio: req.body.folio},{
    archivos: req.body.names
  })
  res.status(200).send({ data: req.body });
}

const listar_cotizaciones = async function (req, res) {
  var data = req.body;
  var cot_arr = [];
  cot_arr = await cotizaciones.find({ empresa: data.empresa });
  if (cot_arr.length == 0) {
    res.status(200).send({
      message: "No hay cotizaciones con la empresa " + data.empresa,
      data: undefined,
    });
  } else {
    res.status(200).send({ data: cot_arr });
  }
};

const listar_cot_larga = async function (req, res) {
  var data = req.params;
  var cot_arr = [];

  cot_arr = await cotizaciones.find({ folio: data.folio });
  if (cot_arr.length == 0) {
    res.status(200).send({
      message: "No hay cotizaciones con el folio " + data.folio,
      data: undefined,
    });
  } else {
    res.status(200).send({ data: cot_arr });
  }
};

module.exports = {
  registro_cotizacion,
  registro_cotizacion_files,
  listar_cotizaciones,
  listar_cot_larga,
  update_files_name
};
