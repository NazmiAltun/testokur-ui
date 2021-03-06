const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, '../src'),
    use: [require.resolve('ts-loader')],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
