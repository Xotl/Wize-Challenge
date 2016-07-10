const
    chai = require('chai'),
    assert = require('chai').assert,
    request = require('request'),
    server = require('../main.js')


describe('Enpoints', function(){
  it('should pass', function() {

    server.then( listener => {
      console.log(listener.address())
    } )

    assert.isOk('Yes');
  });

  it('should also pass', function(){
    assert.isNotOk(false);
  });
})