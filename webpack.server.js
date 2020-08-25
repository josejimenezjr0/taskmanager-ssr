const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const nodeExternals = require('webpack-node-externals')

const config = {
  //inform webpack for node instead of browser
  target: 'node',

  //root file of server
  entry: './src/index.js',

  //output file destination
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [nodeExternals()]
}

module.exports = merge(baseConfig, config)