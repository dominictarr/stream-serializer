
var es = require('event-stream')

exports.json = function (stream) {
  return es.pipeline(es.split(), es.parse(), stream, es.stringify())
}

exports.raw = function (stream) {
  return stream
}

