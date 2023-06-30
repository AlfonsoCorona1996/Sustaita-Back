'use strict'

var jwt = require('jwt-simple');
var moment =  require('moment');
var secret = 'Pepe1996';

function auth(req,res,next){
   
    // if(!req.headers.authorization){
    //     return res.status(403).send({message: 'NoHeadersError'});
    // }

    // var token = req.headers.authorization.replace(/['¨]+/g,'');

    // var segment = token.split('.');
    // if(segment.lenght != 3){
    //     // return res.status(403).send({message: 'InvalidToken'});
    // }
    next();
}

module.exports = auth