<template>
  <div class="loginwrapper">
    <div class="login-cent">
      <img src="../../assets/icon/appearanceadd.png" alt>
    </div>
    <div class="circumstantial">
      <span class="sentloginadd" :class="{active:isActive}" @click="loginClick()">登录</span>
      <span class="concentrate" :class="{centadds:centaddsadd}" @click="registerClick()">注册</span>
    </div>
    <div class="dissipation" v-show="showadd">
      <div class="introduce lic_intruce">
        <i class="icon-user"></i>
        <input
          class="ipt_request"
          autocomplete="on"
          v-model="data.mobile"
          placeholder="请输入手机号"
          type="text"
          maxlength="11"
        >
      </div>
      <div class="introduce lic_intruce">
        <i class="icon-cipher"></i>
        <input
          class="ipt_request"
          v-model="data.password"
          maxlength="11"
          placeholder="请输入密码"
          type="password"
        >
      </div>
      <div class="for_num">
        <span class="forget" @click="toVerification()">忘记密码</span>
      </div>
      <div class="bowling">
        <button class="btn_bow" @click="getUser()">登录</button>
      </div>
    </div>
    <div class="dangerous" v-show="showregister">
      <div class="examiner" v-show="showdecorations">
        <div class="decorations">
          <div class="left_centadd" @click="cebtaddsClick(2)">
            <img src="../../assets/icon/business.png" alt>
            <div class="add_fovers">
              <span>我是企业</span>
            </div>
          </div>
          <div class="right_centadd" @click="individualClick(1)">
            <img src="../../assets/icon/employeeadd.png" alt>
            <div class="add_fovers">
              <span>我是个人</span>
            </div>
          </div>
        </div>
        <div class="promptadd">
          <span>提示:请谨慎选择身份,选择后不能更改!</span>
        </div>
      </div>
      <div class="license" v-show="showlicense">
        <div class="introduce lic_intruce">
          <input
            class="ipt_request"
            v-model="data.mobile"
            placeholder="请输入手机号"
            maxlength="11"
            type="text"
          >
        </div>
        <div class="introduce">
          <input class="ipt_request" v-model="data.password" placeholder="请输入密码" type="password">
        </div>
        <div class="introduce inp_read">
          <span>
            <input class="inp_inp" v-model="data.code" placeholder="请输入验证码" type="text">
          </span>
          <span>
            <button class="send_add" :disabled="disabled || time > 0" @click="getCode()">{{ text }}</button>
          </span>
        </div>
        <div class="bowling">
          <button class="acquiesce" :class="{sentaddsfix:consent=='1'}" @click="toRegistration()">注册</button>
        </div>
        <div class="inste_read">
          <span>
            <input class="Fruit" v-model="consent" name="Fruit" type="radio" value="1">
          </span>
          <span class="reading">请阅读</span>
          <span class="protocol" @click="toAgreement()">《筑才管家用户协议》</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Radio } from "mint-ui";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      login_id: "",
      isActive: true,
      centaddsadd: false,
      typeadd: "user_type",
      showdecorations: true,
      showlicense: false,
      isA: true,
      consent: false,
      registerenroll: "",
      second: 60,
      time: 0,
      disabled: false,
      isDisableds: true,
      alreadyNum: "",
      showadd: true,
      showregister: false,
      data: {
        mobile: "",
        password: "",
        verify_code: "",
        remember_me: "",
        token: "",
        data: {
          remobile: ""
        }
      }
    };
  },
  computed: {
    text: function() {
      return this.time > 0 ? this.time + "s " : "获取验证码";
    }
  },
  mounted() {},
  created() {},
  methods: {
    //我是企业
    cebtaddsClick(e) {
      this.typeadd = e;
      console.log(this.typeadd);
      this.showdecorations = false;
      this.showlicense = true;
    },
    //我是个人
    individualClick(e) {
      this.typeadd = e;
      console.log(this.typeadd);
      this.showdecorations = false;
      this.showlicense = true;
    },
    //注册
    confirmation() {
      let that = this;
      if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(that.data.mobile)) {
        Toast("请输入正确的手机号格式");
        return false;
      }
      that.$axios
        .post(window.ajaxSrc + "/client/user/checkmobile", {
          mobile: that.data.mobile
        })
        .then(res => {
          if (!res.data.success) {
            Toast(res.data.message);
          }
        });
    },
    // Sendverification() {
    //   this.getCode();
    // },
    timer() {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
      }
    },
    getCode() {
      let that = this;
      if (that.data.mobile == "") {
        Toast("手机号不能为空");
        return false;
      }
      if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(that.data.mobile)) {
        Toast("请输入正确的手机号格式");
        return false;
      }

      this.$axios
        .post(window.ajaxSrc + "/client/user/sendsms", {
          mobile: this.data.mobile,
          password: this.data.password
        })
        .then(res => {
          if (res.data.code == "200") {
            this.time = this.second;
            this.timer();
            Toast("发送成功");
          } else if (res.data.code == "10001") {
            Toast("手机号码不能为空");
            return false;
          }
        });
    },
    toRegistration() {
      let that = this;
      if (that.data.mobile == "") {
        Toast("手机号不能为空");
        return false;
      }
      if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(that.data.mobile)) {
        Toast("请输入正确的手机号格式");
        return false;
      }
      if (that.data.password == "") {
        Toast("密码不能为空");
        return false;
      }
      if (
        !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/.test(that.data.password)
      ) {
        Toast("密码必须包含数字字母和特殊字符");
        return false;
      }

      if (that.data.code == "") {
        Toast("验证码不能为空");
        return false;
      }

      if (!/^[0-9]{4}$/.test(that.data.code)) {
        Toast("验证码为四位数字");
        return false;
      }

      if (this.consent == 0) {
        Toast("请勾选协议");
      }
      that.$axios
        .post(window.ajaxSrc + "/client/user/register", {
          mobile: that.data.mobile,
          password: that.data.password,
          code: that.data.code,
          type: this.typeadd
        })
        .then(res => {
          if (res.data.code == "20001") {
            Toast(res.data.message);
          } else {
            localStorage.setItem("token", res.data.data.token); //设置 token
            var token = localStorage.getItem("token"); //获取 token
            localStorage.setItem("user_type", res.data.data.user_type);
            localStorage.setItem("avatar", res.data.data.avatar);
            localStorage.setItem("remobile", res.data.data.mobile); //设置 mobile
            this.$router.push({
              path: "/index/recruit",
              query: {
                type: this.$route.query.user_type
              }
            });
          }
        });
    },
    toAgreement() {
      this.$router.push({ name: "agreement" });
      console.log("阅读协议");
    },
    //显示登录
    loginClick() {
      this.showadd = true;
      this.showregister = false;
      this.isActive = true;
      this.centaddsadd = false;
    },
    //点注册
    registerClick() {
      this.showadd = false;
      this.showregister = true;
      this.isActive = false;
      this.centaddsadd = true;
    },
    getUser() {
      let that = this;
      if (!/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(that.data.mobile)) {
        Toast("请输入正确的手机号格式");
        return false;
      }
      that.$axios
        .post(window.ajaxSrc + "/client/user/login", {
          mobile: that.data.mobile,
          password: that.data.password
        })
        .then(res => {
          if (res.data.code == "20001") {
            Toast(res.data.message);
          }
          localStorage.setItem("token", res.data.data.token); //设置 token
          //存id
          localStorage.setItem("login_id", res.data.data.id); //设置 token
          console.log(res.data.data.id);
          console.log("登录id1");
          console.log(res.data.data.token);
          console.log(res.data.data.user_name);
          localStorage.setItem("user_name", res.data.data.user_name);
          localStorage.setItem("company_name", res.data.data.company_name);
          var token = localStorage.getItem("token"); //获取 token
          // localStorage.user_type = res.data.data.user_type;
          localStorage.setItem("user_type", res.data.data.user_type);
          localStorage.setItem("remobile", res.data.data.mobile);
          localStorage.setItem("avatar", res.data.data.avatar);
          console.log(localStorage.user_type + "user_type");
          console.log(token + "555");
          if (res.data.success) {
            that.data.mobile = res.data.mobile;
            that.data.password = res.data.data.password;
          }
          this.$router.push({
            path: "index/recruit"
          });
        });
      console.log("获取用户信息");
    },
    toVerification() {
      this.$router.push({ name: "verification" });
      console.log("忘记密码");
    },
    toRegister() {
      this.$router.push({ name: "registrationchoices" });
      // let that = this;
      // that.$axios
      //   .post("http://api.gjgj101.com/client/user/register", {
      //     mobile: that.data.mobile,
      //     password: that.data.password
      //   })
      //   .then(res => {
      //     console.log(res, "23");
      //     if (res.data.success) {
      //       console.log(success);
      //       that.data.mobile = res.data.mobile;
      //       that.data.password = res.data.data.password;
      //       console.log(that.data.mobile);
      //     } else {
      //       Toast({
      //         message: "手机号不存在",
      //         position: "top",
      //         duration: 3000
      //       });
      //       // alert(res.data.message);
      //     }
      //   });
      console.log("注册");
    }
  }
};
</script>
<style scoped>
.active {
  color: rgba(51, 51, 51, 1);
  font-size: 0.21rem;
}
.centadds {
  color: rgba(51, 51, 51, 1);
  font-size: 0.21rem;
}
.promptadd {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  font-size: 0.12rem;
  color: #ff4027;
  margin-top: 0.3rem;
}
.decorations {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-top: 0.3rem;
}
.add_fovers {
  text-align: center;
}
.right_centadd img {
  width: 0.9rem;
  height: 0.9rem;
}
.left_centadd img {
  width: 0.9rem;
  height: 0.9rem;
}
.examiner {
  width: 100%;
}
.concentrate {
  margin-left: 0.15rem;
}
.inste_read {
  width: 2.4rem;
  margin-left: 0.5rem;
}
.Fruit {
  vertical-align: middle;
}
.reading {
  font-size: 12px;
  color: #ccc;
}
.protocol {
  font-size: 12px;
  color: #37a494;
}
.acquiesce {
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  background: #ccc;
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 2.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 22px;
  border-radius: 22px;
}
.send_add {
  border: none;
  border: 0px;
  outline: none;
  color: #04ae92;
  width: 0.9rem;
  background: #fff;
  border-radius: 0.08rem;
  font-size: 0.12rem;
}
.sentaddsfix {
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  background: linear-gradient(
    30deg,
    rgba(55, 163, 148, 1),
    rgba(55, 164, 148, 1)
  );
  border-radius: 44px;
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 2.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 22px;
  border-radius: 22px;
}
.inp_inp {
  height: 0.4rem;
  width: 1rem;
  border: none;
  border: 0px;
  outline: none;
  margin-left: 0.4rem;
  color: #ccc;
  font-size: 0.14rem;
}
.inp_read {
  display: flex;
  justify-content: space-between;
  height: 0.5rem;
  line-height: 0.5rem;
}
.sentloginadd {
  margin-left: 0.2rem;
}
.circumstantial {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
}
.login-cent img {
  width: 100%;
  height: 100%;
}
.login-cent {
  width: 100%;
  height: 2rem;
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
  font-size: 14px;
  color: #fff;
  background: #04ae92;
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 2.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 22px;
}
.forget {
  float: right;
  color: #37a494;
  font-size: 12px;
  margin-top: 0.1rem;
}
.loginwrapper {
  width: 3.75rem;
  padding-bottom: 50px;
}
.license {
  width: 3.43rem;
  background: #fff;
  border-radius: 0.08rem;
  margin-left: 0.16rem;
}
.introduce {
  width: 3rem;
  margin: 0 auto;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.introduce input {
  background-color: transparent !important;
}
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
}
.for_num {
  width: 2.4rem;
  margin-left: 0.5rem;
}
.lic_intruce {
  padding-top: 0.3rem;
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
  -webkit-appearance: none;
  padding: 0.1rem;
}
.icon-user {
  background-image: url(../../assets/icon/phoneadd.png);
  position: absolute;
  left: 0.1rem;
  z-index: 5;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  width: 0.2rem;
  height: 0.2rem;
  background-size: contain;
  margin-top: 0.12rem;
}
.icon-cipher {
  background-image: url(../../assets/icon/steganogram.png);
  position: absolute;
  left: 0.1rem;
  z-index: 5;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.1rem;
  background-size: contain;
}
</style>
