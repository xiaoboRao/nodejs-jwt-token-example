const Koa = require('koa');
const app = new Koa();

var bodyParser = require('koa-body-parser');

const useRoutes =require('../router/index')

const errorHandler = require("./error-handle")

app.useRoutes =useRoutes

//解析返回的json数据
app.use(bodyParser());
app.useRoutes()
app.on('error',errorHandler)
module.exports = app