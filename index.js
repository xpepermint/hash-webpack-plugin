var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var replaceall = require('replaceall');

module.exports = function(options) {
  return function() {

    var outputPath = options.path || './';
    var fileName = options.fileName || 'hash.txt';
    var template = options.template || '%%HASH%%';

    mkdirp(outputPath, function(err) {
      if (err) return console.log('Error creating folder:', err);

      this.plugin('done', function(stats) {
        fs.writeFileSync(
          path.join(outputPath, fileName),
          replaceall('%%HASH%%', stats.hash, template)
        );
      });
    }.bind(this));
  };
};
