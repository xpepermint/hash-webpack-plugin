# hash-[webpack](http://webpack.github.io)-plugin

> Hash manifest file writer plugin for Webpack.

Do you need to integrate Webpack with your [ExpressJS](http://expressjs.com/) app? Check the [express-hash-webpack](https://github.com/xpepermint/express-hash-webpack) plugin.

## Setup

```js
npm install --save-dev hash-webpack-plugin
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
