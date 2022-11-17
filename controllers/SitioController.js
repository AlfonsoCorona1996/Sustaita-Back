"use strict";

var sitio = require("../models/sitio");

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
    sitio_arr = await sitio.find({empresa: data.empresa})
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




module.exports = {
    registro_sitio,
    listar_sitio,
    listar_equipos
};