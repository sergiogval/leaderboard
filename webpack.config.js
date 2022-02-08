import 'htmlWebpackPlugin' from './html-webpack-plugin'


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    "static": './dist',
  },
  plugins: [

      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: (__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
