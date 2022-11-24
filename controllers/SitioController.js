"use strict";

var sitio = require("../models/sitio");
var refaccion = require("../models/refaccion");

const registro_sitio = async function (req, res) {
    // OBTENER DATA
    var data = req.body;

    // VALIDAR IGUALES
    var sitio_arr = [];
    sitio_arr = await sitio.find({ 
        $and:[
            {nombre: data.nombre},
            {empresa: data.empresa}
        ]
         });

    // REGISTRO
    if (sitio_arr.length == 0) {
        if (data.nombre) {
            var reg = await sitio.create(data);
            res.status(200).send({ data: reg });
          } else {
            res.status(200).send({
              message: "Necesitas ingresar un nombre al sitio",
              data: undefined,
            });
          }
    } else {
        res.status(200).send({
                message: "Ya existe un sitio con este nombre",
                data: undefined,
            });
    }
};

const listar_sitio = async function (req, res) {
    var data = req.body;
    var sitio_arr = [];
    sitio_arr = await sitio.find({empresa: data.empresa},{_id:true, nombre:true})
    console.log(sitio_arr)
    if (sitio_arr.length == 0) {
        res
          .status(200)
          .send({
            message: "No hay sitios para la empresa " + data.empresa,
            data: undefined,
          });
      } else {
        res.status(200).send({ data: sitio_arr });
      }
};

const listar_equipos = async function (req, res) {
  var data = req.body;
  var equipo_arr = [];
  equipo_arr = await sitio.findOne({_id:data.sitio},{Equipos:true})
  if (equipo_arr.length == 0) {
      res
        .status(200)
        .send({
          message: "No hay sitios para la empresa " + data.empresa,
          data: undefined,
        });
    } else {
      res.status(200).send({ data: equipo_arr });
    }
};

const listar_refacciones = async (req,res) =>{
  try{
  var data = req.body;
  var ref_arr = [];
  console.log(req.body)
  ref_arr = await refaccion.find({ _id: { $in: data.refacciones } }, { _id: 0 } )
  if (ref_arr.length == 0) {
      res
        .status(200)
        .send({
          message: "No hay sitios para la empresa " + data.empresa,
          data: undefined,
        });
    } else {
      res.status(200).send({ data: ref_arr });
    }
  }catch(error){
    res
    .status(200)
    .send({
      message: "Error en la solicitud" + error,
      data: undefined,
    });
  }
}

const registro_refaccion = async function (req, res) {
  // OBTENER DATA
  var data = req.body;
  // VALIDAR IGUALES
  var ref_arr = [];
  ref_arr = await refaccion.find({part: data.part});

  // REGISTRO
  if (ref_arr.length == 0) {
      if (data.nombre) {
          var reg = await refaccion.create(data);
          res.status(200).send({ data: reg });
        } else {
          res.status(200).send({
            message: "Necesitas ingresar un nombre a la refaccion",
            data: undefined,
          });
        }
  } else {
      res.status(200).send({
              message: "Ya existe una refaccion con este numero de parte",
              data: undefined,
          });
  }
};




module.exports = {
    registro_sitio,
    listar_sitio,
    listar_equipos,
    listar_refacciones,
    registro_refaccion
};