const path = require('path');

module.exports = {
  mode: "development",
  entry: './client/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};