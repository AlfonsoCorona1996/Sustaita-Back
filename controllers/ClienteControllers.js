"use strict";

var cliente = require('../models/cliente');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');

const registro_cliente = async function (req, res) {
    //? OBTENER DATA
    var data = req.body;

    //? VALIDAR IGUALES
    var cleintes_arr = [];
    cleintes_arr = await cliente.find({ email: data.email });

    //? REGISTRO
    if (cleintes_arr.length == 0) {
        if (data.password) {
            bcrypt.hash(data.password, null, null, async function (err, hash) {
                if (hash) {
                    data.password = hash;
                    var reg = await cliente.create(data);
                    res.status(200).send({data:reg});
                }else{
                    res.status(200).send({
                        message: "ErrorServer",
                        data: undefined,
                    });
                }
            })
        } else {
            res.status(200).send({
                    message: "Es necesario ingresar una contraseña",
                    data: undefined,
                });
        }
    } else {
        res.status(200).send({
                message: "El correo ya existe en la base de datos",
                data: undefined,
            });
    }
};

const login_cliente = async function(req, res){
    var data = req.body;
    var cliente_arr = [];

    cliente_arr = await cliente.find({email:data.email});
    if(cliente_arr.length == 0){
        // res.status(200).send({message:'No hay ninguna cuenta con el correo ' + data.email, data:undefined});
        res.status(200).send({message:'Correo o contraseña son incorrectos', data:undefined});
    }else{
        //LOGIN
        let user = cliente_arr[0];

        bcrypt.compare(data.password, user.password, async function(error,check){
            if(check){

                res.status(200).send({
                    data:user,
                    token: jwt.createToken_cliente(user)
                })

            }else{
                // res.status(200).send({message:'No coincide la contraseña', data:undefined});
                res.status(200).send({message:'Correo o contraseña son incorrectos', data:undefined});
            }  
        });
    }
};

module.exports = {
    registro_cliente,
    login_cliente
};
