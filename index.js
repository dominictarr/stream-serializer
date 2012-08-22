
var es = require('event-stream')

exports = module.exports = function (wrapper) {

  if('function' == typeof wrapper)
    return wrapper
  
  return exports[wrapper] || exports.json
}

exports.json = function (stream) {
  return es.pipeline(es.split(), es.parse(), stream, es.stringify())
}

exports.raw = function (stream) {
  return stream
}

