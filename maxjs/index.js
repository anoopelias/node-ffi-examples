
var ffi = require('ffi');

var libmax = ffi.Library('../libmax/libmax.dylib', {
  'max': ['int', ['int', 'int']]
});

console.log("Max of 45 and 55 is " + libmax.max(45, 55));
