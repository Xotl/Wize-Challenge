const
    chai = require('chai'),
    assert = require('chai').assert,
    mongoose = require('mongoose')



describe('Mongoose connection', function() {
    const connectionString = process.env.MONGODB_CONNECTION_STRING
    var catSchema, Cat

    after(function(done) {
        mongoose.connection.close(done)
    })


    it('has a connection string present', function() {
        assert.isString(connectionString)
        assert.isAbove(connectionString.length, 1)
    })

    it('connects to MongoDB', function(done) {
        db = mongoose.connection
        db.on('error', done)
        db.once('open', function() {
            catSchema = mongoose.Schema({
                name: String,
                color:  String
            })
            Cat = mongoose.model('cats', catSchema)
            done()
        })
        mongoose.connect(connectionString, {})
    })

    it('can store data', function(done) {
        var kitty = new Cat({ name: 'Fluffy', color:'black' })
        kitty.save(done)
    })

    it('can get data', function(done) {
        Cat.find({}, function(err, docs) {
            if (err) done(err);
            assert.isArray(docs)
            assert.isAbove(docs.length, 0)
            done()
        })
    })
})
