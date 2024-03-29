'use strict'

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4202;

var cliente_route = require('./routes/cliente');
var admin_route = require('./routes/admin');
var cot_route = require('./routes/cotizaciones');
var sitio_route = require('./routes/sitio');
var empresa_route = require('./routes/empresa');
var servicio_route = require('./routes/servicios');


// CONECCION CON BASE DE DATOS
mongoose.connect('mongodb://0.0.0.0:27017/susweb',(err, res)=>{
    if(err){
        console.log();
    }else{
        var listener = app.listen(port, '0.0.0.0', function(){
            console.log('Servidor corriendo en el puerto ' + port, listener.address().port, app.settings.env);
            
        });
    }
})

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({limit: '50mb',extended:true}));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method, X-Requested-With, accept');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use('/api',cliente_route);
app.use('/api',admin_route);
app.use('/api',cot_route);
app.use('/api',sitio_route);
app.use('/api',empresa_route);
app.use('/api',servicio_route)

module.exports = app;