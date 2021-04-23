const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('../webpack.config.js');
const compiler = webpack(config);

const port = process.env.PORT || 3000;

const app = express();
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.listen(port, (err) => {
    console.log(`BorkCatcher is up on localhost:${port}`);
});