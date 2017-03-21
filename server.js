var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

let compiler = webpack(config)


const server = new WebpackDevServer(compiler, {
	hot: true,
	publicPath: '/',
	historyApiFallback: true,
	inline: true,
	stats: {
		colors: true
	},
})

server.listen(7001, 'localhost', function(){
  console.log("server start at port: 7001");
})