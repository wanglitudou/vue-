<template>
  <div class="regiswrapper">
    <div class="Pleaseselect">
      <span>请选择身份,开启您的招聘/求职之旅吧</span>
    </div>
    <div class="classification">
      <div class="accumulation">
        <div class="add_lefts">
          <router-link :tag="'li'" :to="{name:'register',query: { userId: 123,user_type:1}}">
            <img src="../assets/icon/business.png" alt>
            <div class="add_fovers">
              <span>我是企业</span>
            </div>
          </router-link>
        </div>
        <!-- <button class="btn_bow">我要招聘</button> -->
        <div class="add_rights">
          <router-link :tag="'li'" :to="{name:'register',query: { userId: 456,user_type:2}}">
            <img src="../assets/icon/employeeadd.png" alt>
            <div class="add_fovers">
              <span>我是个人</span>
            </div>
          </router-link>
        </div>
      </div>
      <!-- <div class="recommendadd">
        <span>我是企业</span>
        <span>我是个人</span>
      </div>-->
    </div>
    <div class="alterationadd">
      <span>提示:请谨慎选择身份,选择后不能更改!</span>
    </div>
    <!-- <div class="chamberlain">
      <div class="content">
        <span>
          <img src="../assets/icon/butler.png">
        </span>
      </div>  
    </div>
    <div class="bowling">
      <router-link :tag="'li'" :to="{name:'register',query: { userId: 123,user_type:1}}">
        <button class="btn_bow">我要招聘</button>
      </router-link>
    </div>
    <div class="bowling">
      <router-link :tag="'li'" :to="{name:'register',query: { userId: 456,user_type:2}}">
        <button class="btn_bow btn_enroll">我要找工作</button>
      </router-link>
    </div>
    <div class="back_add">
      <span class="back_login" @click="backLogin()">返回登录</span>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {
    backLogin() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
<style scoped>
.add_fovers {
  text-align: center;
}
.recommendadd {
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  font-size: 0.15rem;
  color: rgba(51, 51, 51, 1);
}
.add_lefts img {
  width: 0.9rem;
  height: 0.9rem;
}
.add_rights img {
  width: 0.9rem;
  height: 0.9rem;
}
.accumulation {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
}
.Pleaseselect {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  color: rgba(1, 174, 146, 1);
  font-size: 0.14rem;
}
.classification {
  width: 100%;
  height: 2rem;
}
.alterationadd {
  width: 100%;
  height: 2rem;
  line-height: 1.5rem;
  text-align: center;
  color: rgba(255, 64, 39, 1);
  font-size: 0.14rem;
}
.back_add {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
}
.back_login {
  font-size: 0.18rem;
  color: rgba(102, 153, 153, 1);
}
.bowling {
  width: 100%;
  text-align: center;
  margin-top: 0.35rem;
}
.btn_bow {
  border: 0;
  outline: none;
  cursor: pointer;
  color: #fff;
  background: #699;
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 2.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 22px;
}
.btn_enroll {
  border: 0;
  outline: none;
  cursor: pointer;
  color: #699;
  background: #fff;
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 2.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 22px;
  border-radius: 22px;
  border: 1px solid rgba(102, 153, 153, 1);
}
.regiswrapper {
  width: 3.75rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.chamberlain {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
</style>
