var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

/**
 * @func makeFileContents
 * @param {string} fileName - the user-inputted filename
 * @returns the file contents based on the filetype.
 **/
function makeFileContents(fileName, { hash }) {
  let hashString;

  switch(path.extname(fileName)) {
    case '.json':
      /* json content should have json obj in the file */
      hashString = JSON.stringify({ webpackHash: hash });
      break;

    default:
      hashString = hash;
      break;
  }

  return hashString;
}

module.exports = function(options) {
  return function() {

    var outputPath = options.path || './';
    var fileName = options.fileName || 'hash.txt';

    mkdirp(outputPath, function(err) {
      if (err) return console.log('Error creating folder:', err);

      this.plugin('done', function(stats) {

        fs.writeFileSync(
          path.join(outputPath, fileName),
          makeFileContents(fileName, stats),
        );
      });
    }.bind(this));
  };
};
