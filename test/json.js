
var through   = require('through')
var serialize = require('..')
var assert    = require('assert')

var expected = [1, 2, 3]
var ended = false

var ss = serialize()(through(function (data) {
  var n = expect = expected.shift()
  assert.equal(data, n)
  console.log(data)
}, function () {
  ended = true
}))

ss.write('1\n2\n3\n')
ss.end()

assert.equal(expected.length, 0)
assert.equal(ended, true)

