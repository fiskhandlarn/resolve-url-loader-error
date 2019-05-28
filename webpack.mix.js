const mix = require('laravel-mix');
const publicPath = `public`;

mix.setResourceRoot('../');
mix.setPublicPath(publicPath);

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'import-glob-loader',
      },
    ],
  },
});

// Compile styles.
mix.sass('resources/assets/styles/app.scss', 'styles');
