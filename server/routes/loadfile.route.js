const loadconf =  require('express').Router(),
      request = require('superagent'),
      mongodb = require('mongodb').MongoClient;
var exec= require('child_process').exec;
var  spawn  = require('child_process').spawn;

loadconf.post('/loadconf',function (req, res) {
var type=req.query.typeoflog;  
console.log(type);
if(type=="SQL"){
  exec('/home/akila/kibana/bin/kibana',function(err,stdout,stderr){
  console.log('out',stdout);
  console.log('errr',stderr);
  console.log(err);

})

}
else if(type=="sample"){
   
  exec('nohup /home/akila/logstash-6.3.2/bin/logstash -f /home/akila/Triag_dashboard/conf/sample2.conf',function(err,stdout,stderr){
  console.log(stdout)
  console.log('errr',stderr);
  console.log(err);

})

}
res.send("file loaded into logstash")
  });


loadconf.get('/getloadfile',(req,res)=>{
  res.send('loadfile route is working fine');
})

module.exports = loadconf;
