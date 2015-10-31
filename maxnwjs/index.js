
(function() {
  var ffi = require('ffi');

  var libmax = ffi.Library('../libmax/libmax.dylib', {
    'max': ['int', ['int', 'int']]
  });

  $(function() {
    $('#response').text('Max of 95 and 105 is ' + libmax.max(95, 105));
  });

})();
