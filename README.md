# hash-[webpack](http://webpack.github.io)-plugin

> Hash manifest file writer plugin for Webpack.

## Setup

```js
npm instal --save-dev hash-webpack-plugin
```

## Example

```js
...
var HashPlugin = require('hash-webpack-plugin');

module.exports = {
  ...
  plugins: [
    new HashPlugin({ path: './build', fileName: 'hash.txt' })
  ]
};
```
