var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with hello ', function(done) {
    request(app).get('/').expect('Hello Dave. I like your ugly hat.', done);
  });
});
