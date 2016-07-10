const
    chai = require('chai'),
    assert = require('chai').assert,
    request = require('request')


describe('Enpoints', function() {
  const serverURL = process.env.SERVER_TEST_URL


  it('reponds on "/"', function(done) {
    request.get(`${serverURL}/`, function (error, response, body) {
      if (error) done(error)
      assert.equal(response.statusCode, 200)
      assert.equal(body, 'Hello World!')
      done()
    })
  })

  it('reponds on "/health"', function(done) {
    request.get(`${serverURL}/health`, function (error, response, body) {
      if (error) done(error)
      assert.equal(response.statusCode, 200)
      assert.equal(body, 'All good')
      done()
    })
  })

  it('reponds on "/database"', function(done) {
    request.get(`${serverURL}/database`, function (error, response, body) {
      if (error) done(error)
      assert.equal(response.statusCode, 200)
      done()
    })
  })

})