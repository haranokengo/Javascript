// const path = require('path');
// const webpack = require('webpack');
// const environment = process.env.TEST || 'development';

// module.exports = {
//     // エントリーポイントの設定
//     entry: './src/my-main.js',
//     // ビルド後、'./dist/my-bundle.js'というbundleファイルを生成する
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'my-bundle.js'
//     },
//     resolve: {
//         extensions: ['.js', '.jsx'],
//         alias: {
//           AppConfig: path.join(__dirname, `/src/config/${environment}.js`)
//         }
//       },
    
// };

var webpack = require('webpack');
require('dotenv').config();

var defineEnv = new webpack.DefinePlugin({
  'process.env': {
    'TEST': JSON.stringify(process.env.TEST)
  }
});

module.exports = {
  context: __dirname + '/app',

  entry: {
    js: "./sample.js"
  },

  output: {
    path: __dirname + '/dist',
    filename: "./bundle.js"
  },

  plugins: [defineEnv]
};