# [gulp](http://gulpjs.com/)-devkit

> Common Gulp tasks for rapid NodeJS development.

**Features:**

* Preconfigured development server with integrated livereload listener.
* Asset pipeline, handling sprockets-like includes, styles (`css`, `styl`), scripts (`js` with react and bable), views (`html`, `jade`), images (`jpg`, `png`, `gif`) and fonts (`eot`, `woff`, `ttf`, `svg`).
* Asset bundler for precompiling assets.

## Setup

Your `gulpfile.js` should look something like the example below.

```js
var gulp = require('gulp');

require('gulp-devkit')(gulp, {
  nodemon: { script: 'bin/www.js' }
});

gulp.task('default', ['serve']);

```

And here is your main application file example.

```js
'use strict';
//= include('./hat.js')
//= include('./person.js')

(function() {
  React.render(...);
})();
```

Now run `gulp` command and start building your nodejs app. Note that you will need to install the [livereload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) for your browser for livereload to work.

When deploying your application to a production server, run `gulp assets:bundle` to precompile assets. If your application dynamically renders views, you will need to manually append a fingerprint to every asset file. If your application is using ExpressJS framework check the [express-manifest](https://github.com/xpepermint/express-manifest) middleware which automatically handles file names for you.

## Config

Open [defaults.json](defaults.json) file to see the default configuration values.

### nodemon: Hash

> [Nodemon](https://www.npmjs.com/package/gulp-nodemon) configuration options.

### paths.assets.styles: String

> Path to assets source folder with styles.

### paths.assets.scripts: String

> Path to assets source folder with scripts.

### paths.assets.views: String

> Path to assets source folder with views.

### paths.assets.images: String

> Path to assets source folder with images.

### paths.assets.fonts: String

> Path to assets source folder with fonts.

### paths.assets.build: String

> Path to compiled/precompiled assets.

### paths.views: String

> Path to dynamic views to watch.

### ext.images: String[]

> List of allowed image file exstensions.

### ext.fonts: String[]

> List of allowed font file exstensions.

### livereload.enabled: Boolean

> Enable/disabled [livereload](https://github.com/vohof/gulp-livereload).

## Tasks

### $ gulp serve

> Starts development HTTP server with built-in support for livereload.

### $ gulp assets:compile

> Compiles assets source files.

### $ gulp assets:watch

> Starts watching assets for changes. Assets are immediately recompiled when changed.

### $ gulp assets:bundle

> Precompiles assets for production (fingerprint, gzip).

### $ gulp assets:clean

> Removes all compiled assets.
