// const Dotenv = require('dotenv-webpack');
const path = require('path');
// var webpack = require('webpack');

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/script.js',
  type: "module",
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'dist')
  },
  // ローダーの設定
  module: {
    rules: [
      {
        // 処理対象ファイル
        test: /\.js$/,

        // 処理対象から外すファイル
        exclude: /node_modules/,
        use: [
          {
            // 利用するローダー
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env', {
                    modules: false
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
  // plugins: {
  //   new webpack.DefinePlugin({
  //       'process.env.TEST': JSON.stringify('development')
  //   })
  // },
};