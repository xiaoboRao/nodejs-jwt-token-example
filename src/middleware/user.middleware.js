const errTypes = require("../constants/error-types.js");
const service = require("../service/userService.js")
const md5paassword = require("../utils/password-handle.js")
const verifyUsers = async (ctx, next) => {
  // 1.获取用户名和密码
  const { userName, password } = ctx.request.body;

  //判断用户账号或者密码不为空
  if (!userName || !password) {
    const error = new Error(errTypes.NAME_OR_PASSWORD_IS_REQUIRED);

    return ctx.app.emit("error", error,ctx);
  }
 
  // 3.判断这次注册的用户名是没有被注册过
  const result = await service.getUserByName(userName);
  
  if (result.length) {
    const error = new Error(errTypes.USER_ALREADY_EXISTS);
    return ctx.app.emit('error', error, ctx);
  }
  //如果有效，则进入下一个中间件
  await next();
};

const handlePassword = async(ctx,next)=>{
    //将密码加密后继续调用后面的中间键
    const { password } = ctx.request.body;
    ctx.request.body.password = md5paassword(password)
    await next()
}
module.exports = { verifyUsers,handlePassword };
