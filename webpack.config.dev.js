const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());

const srcPath = path.join(appDirectory, 'src')
const publicPath = path.join(__dirname, 'public')
const distPath = path.join(__dirname, 'dist')
const scriptPath = path.join(__dirname, 'script')
const port = 8005

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      path.resolve(srcPath, 'index.tsx'),
    ]
  },
  output: {
    filename: 'building.bundle.js',
    path: distPath,
    libraryTarget: 'umd',
    publicPath: 'http://localhost:8080/dist'
  },
  devtool: 'evail-source-map', // 'source-map'
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(css|sass|less)$/,
        exclude: /node_modules\/(?!(diff2html)\/)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                localIdentName: '[local]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                plugins: (loader) => [
                    require('autoprefixer')(), //CSS浏览器兼容
                ]
              }
            },
            {
              loader: 'less-loader',
            },
          ],
        }),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      src: path.resolve(srcPath),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  externals: {},
  plugins: [
    new CleanWebpackPlugin(['build', 'dist']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename: 'building.bundle.css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: [srcPath, publicPath],
    port,
    hot: true,
    host: '0.0.0.0',
    index: 'index.html'
  },
}
