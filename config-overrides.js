module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules\/(?!template-stuff)/,
  });
  config.module.rules.push({
    test: /\.jsx?$/,
    use: 'babel-loader',
    exclude: /node_modules\/(?!template-stuff)/,
  });
    return config;
  };