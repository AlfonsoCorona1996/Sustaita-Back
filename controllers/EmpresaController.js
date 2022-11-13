"use strict";

var empresa = require("../models/empresa");

const registro_empresa = async function (req, res) {
    // OBTENER DATA
    var data = req.body;

    // VALIDAR IGUALES
    var empresa_arr = [];
    empresa_arr = await empresa.find({nombre: data.nombre});

    // REGISTRO
    if (empresa_arr.length == 0) {
        if (data.nombre) {
            var reg = await empresa.create(data);
            res.status(200).send({ data: reg });
          } else {
            res.status(200).send({
              message: "Necesitas ingresar un nombre a la empresa",
              data: undefined,
            });
          }
    } else {
        res.status(200).send({
                message: "Ya existe una empresa con este nombre",
                data: undefined,
            });
    }
};


module.exports = {
    registro_empresa
};