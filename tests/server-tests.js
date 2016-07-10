const
    chai = require('chai'),
    assert = require('chai').assert,
    request = require('request')


describe('Enpoints', function() {
  var serverURL = process.env.SERVER_TEST_URL

  if (!serverURL.startsWith('http://')) {
    serverURL = `http://${serverURL}`;
  }


  it('reponds on "/" correctly', function(done) {
    request.get(`${serverURL}/`, function (error, response, body) {
      assert.isDefined(response)
      assert.equal(response.statusCode, 200)
      assert.equal(body, 'Hello World!')
      done(error)
    })
  })

  it('reponds on "/health" correctly', function(done) {
    request.get(`${serverURL}/health`, function (error, response, body) {
      assert.isDefined(response)
      assert.equal(response.statusCode, 200)
      assert.equal(body, 'All good')
      done(error)
    })
  })

  it('reponds on "/database" correctly', function(done) {
    request.get(`${serverURL}/database`, function (error, response, body) {
      assert.isDefined(response)
      assert.equal(response.statusCode, 200)
      done(error)
    })
  })

})