const fs = require("fs");

//把路由同意放到index中管理
const useRoutes = function () {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") return;
    const router = require(`./${file}`);
    this.use(router.routes()).use(router.allowedMethods());
  });
}
module.exports = useRoutes
