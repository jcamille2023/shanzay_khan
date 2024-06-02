const { override } = require('customize-cra');
module.exports = override(
  (config, env) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules\/(?!template-stuff)/,
    });
    config.module.rules.push({
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            require.resolve('babel-preset-react-app')
          ],
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          cacheCompression: false,
          compact: false,
        },
      },
      exclude: /node_modules\/(?!template-stuff)/,
    });
    return config;
  }
);