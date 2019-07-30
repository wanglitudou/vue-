<template>
  <div class="resettingrapper">
    <header class="releaseheaders">
      <span class="add_img">
        <img @click="tobacktream()" src="../../assets/icon/revert.png" alt>
      </span>
      <span>密码重置成功</span>
      <span></span>
    </header>
    <div class="section_add">
      <div class="trema"></div>
      <div class="dist_guiter">
        <img src="../../assets/icon/trium.png" alt>
      </div>
      <div class="instict">
        <span class="upon">密码重置成功，请妥善保存密码!</span>
      </div>
      <div class="bowling blackadd">
        <button class="btn_bow" @click="getLoginadd()">登录</button>
      </div>
      <div class="bowling">
        <button class="btn_bow btn_enroll" @click="toRegister()">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    tobacktream() {
      this.$router.push({ name: "resetting" });
    },
    getLoginadd() {
      this.$router.push({ name: "Login" });
    },
    toRegister() {
      this.$router.push({ name: "register" });
    }
  }
};
</script>
<style scoped>
.bowling {
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
}
.btn_bow {
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  background: #699;
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 2.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 22px;
}
.blackadd {
  margin-top: 1rem;
}
.btn_enroll {
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 14px;
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
.instict {
  text-align: center;
  font-size: 0.17rem;
  color: rgba(102, 153, 153, 1);
}
.trema {
  height: 0.6rem;
}
.dist_guiter {
  height: 1.23rem;
  line-height: 1.23rem;
  text-align: center;
}
.dist_guiter img {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.3rem;
}
.resettingrapper {
  width: 3.75rem;
  padding-bottom: 50px;
  background: #fff;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.releaseheaders {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  color: #fff;
  background: #699;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  margin-bottom: 0.07rem;
}
.add_img img {
  height: 0.17rem;
}
</style>
