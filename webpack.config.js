const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'client/src/index.jsx'),
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }],
  },
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
