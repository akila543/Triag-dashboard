const request = require('supertest');
const expect = require('expect');
var app=require('./../server/server.js').app;

it('should return 200 status code for initial route',(done)=>{
request(app)
.get('/test')
.expect(200)
.expect('Triag server is working fine')
.end(done);
});


it('should check loadfile route status',(done)=>{
request(app)
.get('/getloadfile')
.expect(200)
.expect('loadfile route is working fine')
.end(done);
});

it('should check post loadfile route status and return 200',(done)=>{
request(app)
.post('/loadconf')
.expect(200)
.end(done);
});