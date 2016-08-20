var request = require('supertest');
describe('loading express', function() {
  var server;
  beforeEach(function(done) { 
    server = require('../../server');
    done();
  });

  describe('GET request to /', function() {
    it('Should respond with 200', function(done) {
      request(server).get('/')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if(err) return done(err);
          done();
        });
    });
  });
});
