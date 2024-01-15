var fs = require('fs');
var path = require('path');

class HashGeneratorPlugin {
  static defaultOptions = {
    path: './',
    fileName: 'hash.txt'
  }

  constructor(options = {}) {
    this.options = { ...HashGeneratorPlugin.defaultOptions, ...options };
  }

  apply(compiler) {
    compiler.hooks.done.tap(
      'HashGeneratorPlugin', (stats) => {
        var outputPath = this.options.path || './';
        var fileName = this.options.fileName || 'hash.txt';

        if (!fs.existsSync(outputPath)){
          fs.mkdirSync(outputPath, { recursive: true });
        }

        fs.writeFileSync(
          path.join(outputPath, fileName),
          stats.hash
        )
      }
    );
  }
}

module.exports = HashGeneratorPlugin;
