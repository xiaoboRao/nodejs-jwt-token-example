
const Router = require('koa-router');
const userRouter = new Router({prefix: '/users'});
const {verifyUsers,handlePassword} = require("../middleware/user.middleware.js")
const UserController = require('../controller/userController.js')

userRouter.get('/',verifyUsers,handlePassword, UserController.create);

  module.exports = userRouter