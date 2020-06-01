// console.log("herhe")const
const express = require('express')
require('./db');
require('./Reg');
require('./img');
var fetch = require('./fetch')
var app = express();
var rout = require('./get')

rout(app)
fetch(app)
const port  = 3001

app.listen(port,()=>console.log("up and running "+port))