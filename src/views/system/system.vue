
<template>
  <div class="addreleasewrapper">
    <header class="addheaders">
      <span class="add_img">
        <img @click="recurrence()" src="../../assets/icon/backaddsent.png" alt>
      </span>
      <span>系统设置</span>
      <span></span>
    </header>
    <section class="addrelease_section">
      <div class="modify" @click="turnnum()">
        <span>修改手机号</span>
        <span class="alter_img">
          <img src="../../assets/icon/proceed.png" alt>
        </span>
      </div>
      <div class="modify" @click="detonate()">
        <span>修改密码</span>
        <span class="alter_img">
          <img src="../../assets/icon/proceed.png" alt>
        </span>
      </div>
      <div class="modify" v-show="enter_add">
        <span>隐私设置</span>
        <span class="alter_img">
          <img @click="settingClick()" src="../../assets/icon/proceed.png" alt>
        </span>
      </div>
      <div class="withdraw">
        <button class="btn_withdraw" @click="secede()">退出登录</button>
      </div>
    </section>
  </div>
</template> 
<script>
import { Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      enter_add: false
    };
  },
  mounted() {
    let getuser_type = localStorage.getItem("user_type");
    if (getuser_type == 1) {
      this.enter_add = true;
    } else if (getuser_type == 2) {
      this.enter_add = false;
    }
  },
  created() {
    Indicator.open();
    setTimeout(() => {
      Indicator.close();
    }, 1000);
  },
  methods: {
    //清除缓存
    resetClick() {
      localStorage.clear();
    },
    //修改手机号
    turnnum() {
      this.$router.push({ name: "amend" });
    },
    //修改密码
    detonate() {
      this.$router.push({ name: "steganogram" });
    },
    //退出
    secede() {
      this.$axios
        .post(window.ajaxSrc + "/client/user/logout", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : ""
        })
        .then(res => {
          if (res.data.code == 200) {
            localStorage.clear();
            this.$router.push({ name: "recruit" });
          }
        });
    },
    //返回上一级
    recurrence() {
      this.$router.push({
        name: "mine"
      });
    },
    settingClick() {
      this.$router.push({ name: "privacysettings" });
    }
  }
};
</script>
 <style scoped>
.withdraw {
  width: 100%;
  height: 0.72rem;
  line-height: 0.72rem;
  color: #fff;
  text-align: center;
  margin-top: 0.16rem;
}
.btn_withdraw {
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 0.16rem;
  color: #04ae92;
  background: rgba(255, 255, 255, 1);
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 2px;
}
.addreleasewrapper {
  width: 3.75rem;
  padding-bottom: 50px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.addheaders {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  color: #333;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
}
.add_img img {
  height: 0.17rem;
}
.addrelease_section {
  width: 100%;
  height: auto;
}
.modify {
  width: 3.43rem;
  height: 0.44rem;
  line-height: 0.44rem;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #434040;
  font-family: PingFangSC-Regular;
  border-bottom: 1px solid #e7e7e7;
  margin-left: 0.16rem;
  color: #434040;
}
.alter_img img {
  height: 0.15rem;
}
.memory {
  font-size: 12px;
  color: #888888;
  margin-right: 0.08rem;
}
</style>