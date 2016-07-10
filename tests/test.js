const
    request = require('request'),
    chai = require('chai'),
    assert = require('chai').assert


describe('Simple test', function() {
    it('will pass everytime', function() {
        assert.isOk(true)
    })

    it('also will pass everytime', function() {
        assert.isNotOk(false)
    })
})