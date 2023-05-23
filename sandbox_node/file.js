let fs = require('fs');

fs.readFile(__dirname + '/fichero.txt', function(err, data) {
  if (! err) {
    console.log(data.toString());
  }
});