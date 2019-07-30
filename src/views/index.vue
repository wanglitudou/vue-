<template>
  <div class="container">
    <router-view class="wrapper"></router-view>
    <ul class="nav">
     
      <router-link :tag="'li'" :to="{path:'recruit'}">
        <span class="icon icon2"></span>
        <span>首页</span>
      </router-link>
     

      <router-link :tag="'li'" @click.native="recommendFun" v-if="user_type === 2" :to="{path:'recommendRC'}">
     <!--  <li @click="recommendFun"> -->
        <span class="icon icon3"></span>
        <span>智能推荐</span>
     <!--  </li> -->
      </router-link>

      <router-link :tag="'li'" @click.native="recommendFun" v-else :to="{path:'recommendZW'}">
     <!--  <li @click="recommendFun"> -->
        <span class="icon icon3"></span>
        <span>智能推荐</span>
     <!--  </li> -->
      </router-link>

      
      <router-link :tag="'li'" :to="{name:'mine'}">
        <span class="icon icon5"></span>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      resdef: "职位", //变量
      url: [],
      dynamicSegment: "",
      user_type:""
    };
  },
  created() {
    let user_type = localStorage.getItem("user_type"); //获取 user_type
    console.log(user_type + "66666666666");
    if (user_type != null && user_type == 2) {
      this.resdef = "简历";
    }
    // let that = this;
    // that.getmeter();
  },
  mounted: function() {
    var userId = this.$route.query.userId;
    if (userId == 123) {
      this.isShow = true;
      console.log(this.isShow + "11111");
      // this.isShow = !this.isShow;
    } else if (userId == 456) {
      this.isShow = false;
      console.log(this.isShow + "666");
    }
  },
  methods: {
    toconference() {
      var user_type = localStorage.getItem("user_type"); //获取 user_type
      if (user_type == 1) {
        this.$router.push({ name: "issueresume" });
      } else if (user_type == 2) {
        this.$router.push({ name: "releaserecruitment" });
      }
      if (user_type == null) {
        Toast({
          message: "请先登录",
          position: "top",
          duration: 2000
        });
      }
    },
    recommendFun(){
       var user_type = localStorage.getItem("user_type"); //获取 user_type
      if (user_type == 1) {        //智能推荐职位
        this.$router.push({ name: "recommendZW" });
      } else if (user_type == 2) { //智能推荐人才
        this.$router.push({ name: "recommendRC" });
      }
      if (user_type == null) {
       this.$router.push({ name: "Login" });
      }
    }
  }
};
</script>
<style scoped>
.nav {
  width: 100%;
  height: 0.5rem;
  border-top: 1px solid #ccc;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  color: #999;
  z-index: 2000;
  justify-content: space-between;
  padding: 0 0.49rem;
}
.addicon {
  width: 100%;
  height: 100%;
  background-size: cover;
  text-align: center;
}
.addimg {
  /* width: 44px;
  line-height: 44px;
  margin-top: 10px; */
}
.addimg img {
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.1rem;
}
.nav li {
  text-align: center;
  height: 0.55rem;
}
.router-link-active {
  color: #04ae92;
}
.nav li span {
  display: block;
  height: 50%;
  margin: 0 auto;
  font-size: 10px;
}
.icon {
  width: 0.2rem;
  height: 0.2rem;
  background-position: bottom center;
  background-repeat: no-repeat;
}
.icon1 {
  background-image: url(../assets/icon/icon1.png);
  background-size: 0.2rem;
}
.icon2 {
  background-image: url(../assets/icon/placeadd.png);
  background-size: 0.2rem;
}

.icon3 {
  background-image: url(../assets/icon/tidings.png);
  background-size: 0.2rem;
}
.icon4 {
  background-image: url(../assets/icon/icon2.png);
  background-size: 0.2rem;
}
.icon5 {
  background-image: url(../assets/icon/slender.png);
  background-size: 0.2rem;
}
.router-link-active .icon1 {
  background-image: url(../assets/icon/icon1-a.png);
  background-size: 0.2rem;
}
.router-link-active .icon2 {
  background-image: url(../assets/icon/complexor.png);
  background-size: 0.2rem;
}
.router-link-active .icon3 {
  background-image: url(../assets/icon/contactadd.png);
  background-size: 0.2rem;
}
.router-link-active .icon5 {
  background-image: url(../assets/icon/distanceadd.png);
  background-size: 0.2rem;
}
.centaddssuger {
}
</style>
