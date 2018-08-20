'use strict'
const http = require('http')
    , express = require('express')
    , app = express()
    , server = http.createServer(app)
    , path = require('path')
    , assert = require('assert')
    , PORT = process.env.PORT || 3000 ;
const loadconf = require('./routes/loadfile.route.js');
const authRoutes = require('./routes/auth-routes.js');
const passportSetup = require('./config/passport-setup.js');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
const cookieSession = require('cookie-session');
const passport = require('passport');



app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}))

//initialize passportSetu
app.use(passport.initialize());
app.use(passport.session());

//connect to monogdb
mongoose.connect(keys.mongodb.dbURI,()=>{
  console.log('connected to mongodb');
});



app.use(function(req, res, next) {
 	res.header("Access-Control-Allow-Origin", "*");
 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();
 	});

app.use(express.static('./../'));



app.use('/',(req,res,next)=>{
  console.log('inside routes');
  next();

},loadconf,authRoutes);


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