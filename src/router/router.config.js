//配置路由
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); //注册VueRouter
// import routes from "./routes"; //引入routers
import routes from "./routers.js"; //引入
//实例化路由
var router = new VueRouter({
  mode: "history",
  // base: "/dist/index.html",
  // base: "process.env.BASE_URL",
  routes: routes
});
export default router;
