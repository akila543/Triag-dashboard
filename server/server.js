'use strict'
const http = require('http')
    , express = require('express')
    , app = express()
    , server = http.createServer(app)
    , path = require('path')
    , assert = require('assert')
    , PORT = process.env.PORT || 1101 ;
const loadconf = require('./routes/loadfile.route.js');

app.use(function(req, res, next) {
 	res.header("Access-Control-Allow-Origin", "*");
 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();
 	});

app.use(express.static('./../'));

app.use('/',(req,res,next)=>{
  console.log('inside routes');
  next();

},loadconf);


app.get('/test',(req,res)=>{
  res.send('Triag server is working fine')
})
//App server ---------->
module.exports = server.listen(PORT, err => {
  if(err){
    throw err
  }
  console.log('Triag Server running on 1101')
})
module.exports.app=app;