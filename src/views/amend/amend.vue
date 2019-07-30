
<template>
  <div class="amendwrapper">
    <header class="addheaders">
      <span class="add_img">
        <img @click="higherlevel()" src="../../assets/icon/backaddsent.png" alt>
      </span>
      <span>修改手机号</span>
      <span></span>
    </header>
    <section class="amend_section">
      <div class="phone_adds">
        <img src="../../assets/icon/phonechange.png" alt>
      </div>
      <div class="tieupadd">
        <div class="tie-cents">已绑定手机号:{{reMmbile}}</div>
        <div class="tie_binds">修改后，必须使用新手机号登录</div>
      </div>
      <div class="validate_fix">
        <div class="introduce lic_intruce">
          <i class="icon-user"></i>
          <input
            class="ipt_request"
            v-model="form.mobile"
            autocomplete="on"
            placeholder="请输入手机号"
            type="text"
            maxlength="11"
          >
        </div>
        <div class="introduce_cents">
          <span class="leftSpan">
            <i class="icon-cipher"></i>
            <input class="ipt_request addIp" v-model="form.code" placeholder="请输入验证码" type="text">
          </span>
          <button
            class="place-cenrtsadd"
            :disabled="disabled || time > 0"
            @click="identifyingcode"
          >{{ text }}</button>
        </div>
        <div class="hold">
          <button class="keep" @click="condition()">确认修改</button>
        </div>
      </div>
    </section>
  </div>
</template>
  <script>
import { Toast,Indicator } from "mint-ui";
export default {
  data() {
    return {
      second: 60,
      time: 0,
      disabled: false,
      isDisableds: true,
      alreadyNum: "",
      reMmbile: localStorage.getItem("remobile"),
      form: {
        mobile: "", //用户手机号
        code: "" //验证码
      }
    };
  },
  computed: {
    text: function() {
      return this.time > 0 ? this.time + "s " : "获取验证码";
    }
  },
  mounted() {},
  created(){
    Indicator.open();
setTimeout(() => {
Indicator.close();
}, 1000);
  },
  methods: {
    //返回到上一级  system
    higherlevel() {
      this.$router.push({ name: "system" });
    },
    //获取验证码
    identifyingcode() {
      this.time = this.second;
      //  this.timer();
      this.getCode();
    },
    timer() {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
      }
    },
    getCode() {
      if (this.form.mobile == "") {
        this.time = "获取验证码";
        Toast("手机号不能为空");
        return false;
      }
      this.$axios
        .post(window.ajaxSrc + "/client/user/sendsms", {
          mobile: this.form.mobile,
          code: this.form.code
        })
        .then(res => {
          if (res.data.code == "200") {
            this.timer();
            Toast("发送成功");
          } else if (res.data.code == "10001") {
            Toast(res.data.message);
          }
        });
    },
    //确认修改
    condition() {
      if (this.form.code == "") {
        Toast("验证码不能为空");
        return false;
      }
      if (!/^[0-9]{4}$/.test(this.form.code)) {
        Toast("验证码四位数字");
        return false;
      }
      if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(this.form.mobile)) {
        Toast("请输入正确的手机号格式");
        return false;
      }
      this.$axios
        .post(window.ajaxSrc + "/client/user/mobileup", {
          mobile: this.form.mobile,
          code: this.form.code,
          token: localStorage.getItem("token") ? localStorage.getItem("token") : ''
        })
        .then(res => {
          if (res.data.success) {
            localStorage.clear();
            this.$router.push({ name: "Login" });
          } else if (res.data.code == "20001") {
            Toast(res.data.message);
          }
        });
    }
  }
};
</script>

 <style scoped>
.place-cenrtsadd {
  /* width: 0.6rem; */
  height: 0.6rem;
  line-height: 0.6rem;
  color: #04ae92;
  font-size: 0.12rem;
  border: 0;
  outline: none;
  cursor: pointer;
  background: #fff;
  float: right;
  padding-right: 0.1rem;
}
.icon-cipher {
  background-image: url(../../assets/icon/steganogram.png);
  position: absolute;
  left: 0.1rem;
  z-index: 5;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  width: 0.18rem;
  height: 0.18rem;
  margin-top: 0.2rem;
  background-size: contain;
}
.introduce {
  width: 3rem;
  margin: 0 auto;
  position: relative;
  border-bottom: 1px solid #ccc;
  padding-top: 0.2rem;

  vertical-align: middle;
}
.introduce input {
  margin-bottom: 0.2rem;
}
.leftSpan {
  float: left;
  width: 2.2rem;
}
.introduce_cents {
  width: 3rem;
  margin: 0 auto;
  position: relative;
  border-bottom: 1px solid #ccc;
  font-size: 0.14rem;
  display: flex;
  justify-content: space-between;
}

.lic_intruce {
  padding-top: 0.3rem;
}
.icon-user {
  background-image: url(../../assets/icon/phoneadd.png);
  position: absolute;
  left: 0.1rem;
  z-index: 5;
  background-repeat: no-repeat;
  width: 0.18rem;
  height: 0.18rem;
  margin-bottom: 0.1rem;
  background-size: contain;
}
.ipt_request {
  border: none;
  /* height: 0.6rem; */
  /* line-height: 0.6rem; */
  border: 0px;
  outline: none;
  cursor: pointer;
  color: #666;
  font-size: 14px;
  margin-left: 0.4rem;
}
.addIp {
  margin-top: 0.2rem;
}
.validate_fix {
  width: 100%;
  height: 1.5rem;
}
.tie-cents {
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.16rem;
  color: #333;
}
.tie_binds {
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  font-size: 0.12rem;
  color: rgba(153, 153, 153, 1);
}
.tieupadd {
  width: 100%;
  height: 0.8rem;
}
.phone_adds {
  width: 100%;
  height: 1.86rem;
  line-height: 1.86rem;
  text-align: center;
}
.phone_adds img {
  width: 0.91rem;
  height: 1rem;
  margin-top: 0.4rem;
}
.amendwrapper {
  width: 3.75rem;
  padding-bottom: 50px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.hold {
  margin-top: 0.4rem;
  text-align: center;
}
.keep {
  width: 315px;
  height: 44px;
  background: linear-gradient(
    30deg,
    rgba(55, 163, 148, 1),
    rgba(55, 164, 148, 1)
  );
  border-radius: 22px;
  color: #fff;
  font-size: 0.15rem;
  border: none;
  border: 0px;
  outline: none;
}
.addheaders {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
}
.add_img img {
  height: 0.17rem;
}
.revise {
  width: 100%;
  height: auto;
}
.bundling {
  margin-left: 0.16rem;
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 0.16rem;
  color: #434040;
}
.modification {
  font-size: 12px;
  color: #888888;
  margin-left: 0.16rem;
}
.entering {
  height: 0.44rem;
  line-height: 0.44rem;
  margin-left: 0.16rem;
  font-size: 0.14rem;
}
.enter_inp {
  width: 100%;
  border: none;
  height: 0.44rem;
  line-height: 0.44rem;
  border: 0px;
  outline: none;
  cursor: pointer;
  border-bottom: 1px solid #e7e7e7;
}
.validate {
  margin-left: 0.16rem;
  height: 0.44rem;
  line-height: 0.44rem;

  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
}
.vali_inp {
  border: 0px;
  outline: none;
  cursor: pointer;
}
.trans_btn {
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  color: #669999;
  background: #fff;
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid #ccc;
}
.introduce {
  font-size: 0.14rem;
}
</style>