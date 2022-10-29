'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'Pepe1996';

exports.createToken = function(user){
    var payload ={
        sub: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        empresa: user.empresa,
        rol: user.rol,
        permisos: user.permisos,
        iat: moment().unix(),
        exp: moment().add(60,'minutes').unix()
    }


    return jwt.encode(payload,secret);
}

exports.createToken_cliente = function(user){
    var payload ={
        sub: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        empresa: user.empresa,
        rol: user.rol,
        permisos: user.permisos,
        iat: moment().unix(),
        exp: moment().add(60,'minutes').unix()
    }


    return jwt.encode(payload,secret);
}
