var request = require('supertest');

describe('POST /login', function(){
    it('Should log me in successfully', function(done){
        request('http://localhost:3000')
            .post('/login')
            .send({username: 'shayanjm6', password: 'test6'})
            .set('Accept', 'application/json')
            .expect('Welcome shayanjm6.')
            .end(function(err, res){
        if (err) return done(err);
        done()
      });
    });

    it('Should NOT log me in successfully', function(done){
        request('http://localhost:3000')
            .post('/login')
            .send({username: 'shayanjm7', password: 'test6'})
            .set('Accept', 'application/json')
            .expect('Unauthorized')
            .end(function(err, res){
        if (err) return done(err);
        done()
      });
    });
});
