import "../static/common/reset.css";
import "../static/common/mint-ui.css";
import "./font/iconfont.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.config.js";
// import router from "./router/router.config";
import "./components/js/iShare.js";
import "./components/js/iShare_tidy.js";
import "./components/js/jquery-2.1.0";
// import "./components/js/jquery.share.min.js";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);
import { InfiniteScroll, Spinner } from "mint-ui";
Vue.use(InfiniteScroll);
Vue.use(Spinner);
import "babel-polyfill";
import Es6Promise from "es6-promise";
require("es6-promise").polyfill();
Es6Promise.polyfill();
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import Calendar from "vue-mobile-calendar";

Vue.use(Calendar);
const install = function(Vue) {
  Vue.component(Calendar.name, Calendar);
};

import { Checkbox, CheckboxGroup } from "vant";

Vue.use(Checkbox).use(CheckboxGroup);

import scroll from "vue-seamless-scroll";
Vue.use(scroll);
// 在src/main.js进行全局引入
// import Vant from "vant";
// import "vant/lib/vant-css/index.css";
// Vue.use(vant);
// 在src/main.js进行全局引入1111

import { DatetimePicker } from "vant";
import "vue-social-share/dist/client.css";
import Share from "vue-social-share";
Vue.use(Share);
import VueCookie from "vue-cookie";
Vue.use(VueCookie); // 挂在在全局了

Vue.use(DatetimePicker);
import "vue-social-share/dist/client.css";

import { Toast } from "mint-ui";
import axios from "axios";
window.ajaxSrc = "http://api.jzzp365.com";
// window.ajaxSrc = "http://api.9zcgj.com";
axios.defaults.transformRequest = [
  function(data) {
    let newData = "";
    for (let k in data) {
      newData +=
        encodeURIComponent(k) + "=" + encodeURIComponent(data[k]) + "&";
    }
    return newData;
  }
];
// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.get["Content-Type"] =
//   "application/x-www-form-urlencoded";
Vue.prototype.$axios = axios;
// import VueAMap from 'vue-amap';
// Vue.use(VueAMap);
//添加全局拦截
Vue.prototype.$axios.interceptors.response.use(
  function(response) {
    if (response.data.code == "10004") {
      Toast(response.data.message);
      localStorage.clear();
      router.push("/index/recruit");
    }
    return response;
  },
  function(err) {
    console.log(err);
  }
);

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
