var fs = require('fs');
var path = require('path');

module.exports = function(options) {
  return function() {

    var outputPath = options.path || './';
    var fileName = options.fileName || 'hash.txt';

    this.plugin('done', function(stats) {
      fs.writeFileSync(
        path.join(outputPath, fileName),
        stats.hash
      );
    });
  };
};
