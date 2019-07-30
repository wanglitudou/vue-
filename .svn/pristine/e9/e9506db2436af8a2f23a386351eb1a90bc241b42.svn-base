<template>
  <div class="loginwrapper">
    <div class="progrict_name">
      <div class="distance">
        <div class="name_add">
          <span>筑才管家</span>
        </div>
      </div>
      <div class="license">
        <div class="introduce lic_intruce">
          <input
            class="ipt_request"
            @blur="confirmation()"
            v-model="data.mobile"
            placeholder="请输入手机号"
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
            <button
              class="send_add"
              :disabled="disabled || time > 0"
              @click="Sendverification"
            >{{ text }}</button>
          </span>
        </div>
        <div class="inste_read">
          <span>
            <input class="Fruit" v-model="consent" name="Fruit" type="radio" value="1">
          </span>
          <span class="reading">请阅读</span>
          <span class="protocol" @click="toAgreement()">《筑才管家用户协议》</span>
        </div>
        <div class="bowling">
          <button class="acquiesce" :class="{sentaddsfix:consent=='1'}" @click="toRegistration()">注册</button>
        </div>
        <div class="bowling">
          <span class="back_res" @click="backLogin()">返回登录</span>
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
      consent: false,
      registerenroll: "",
      second: 60,
      time: 0,
      disabled: false,
      isDisableds: true,
      alreadyNum: "",
      data: {
        mobile: "", //	手机号
        password: "", //密码
        type: "user_type", //注册类型 1个人 2企业
        code: "", //手机验证码
        remobile: "",
        token: ""
      }
    };
  },
  computed: {
    text: function() {
      return this.time > 0 ? this.time + "s " : "获取验证码";
    }
  },
  mounted() {},
  methods: {
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
    Sendverification() {
      this.getCode();
    },
    timer() {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
      }
    },
    getCode() {
      this.$axios
        .post(window.ajaxSrc + "/client/user/sendsms", {
          mobile: this.data.mobile,
          password: this.data.password,
          code: this.data.code
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
      // console.log(this.consent + "111");
      if (this.consent == 1) {
        if (this.data.code == "") {
          Toast("验证码不能为空");
          return false;
        }
        let that = this;
        that.$axios
          .post(window.ajaxSrc + "/client/user/register", {
            mobile: that.data.mobile,
            password: that.data.password,
            code: that.data.code,
            token: localStorage.getItem("token") ? localStorage.getItem("token") : ''
          })
          .then(res => {
            console.log(res.data.data.mobile);
            localStorage.setItem("token", res.data.data.token); //设置 token
            var token = localStorage.getItem("token"); //获取 token
            localStorage.setItem("user_type", res.data.data.user_type);

            localStorage.setItem("remobile", res.data.data.mobile); //设置 mobile
          });
        if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(that.data.mobile)) {
          Toast("请输入正确的手机号格式");
          return false;
        }
        if (
          !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/.test(
            that.data.password
          )
        ) {
          Toast("必须包含数字字母和特殊字符");
          return false;
        }

        this.$router.push({
          path: "/index/recruit",
          query: {
            // userId: this.$route.query.userId,
            type: this.$route.query.user_type
          }
        });
      } else {
        Toast("请勾选协议");
      }
    },
    toAgreement() {
      this.$router.push({ name: "agreement" });
      console.log("阅读协议");
    },
    backLogin() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
<style scoped>
.inp_read {
  display: flex;
  justify-content: space-between;
  height: 0.5rem;
  line-height: 0.5rem;
}
.send_add {
  border: none;
  border: 0px;
  outline: none;
  color: #fff;
  width: 0.9rem;
  background: #699;
  border-radius: 0.08rem;
}
.inp_inp {
  height: 0.4rem;
  width: 1rem;
  border: none;
  border: 0px;
  outline: none;
  margin-left: 0.16rem;
  color: #ccc;
}
.back_res {
  font-size: 0.18rem;
  color: #699;
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
  color: #699;
}
.inp_end {
  width: 1.2rem;
  height: 0.5rem;
  border: 0px;
  outline: none;
  cursor: pointer;
  margin-left: 0.16rem;
}
.btn_dispatch {
  border: 0;
  height: 0.5rem;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  color: #669999;
  background: #fff;
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
  color: #666;
  background: #ccc;
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
.sentaddsfix {
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  background: #699;
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 2.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 22px;
  border-radius: 22px;
}
.loginwrapper {
  width: 3.75rem;
  padding-bottom: 50px;
}
.progrict_name {
  width: 375px;
  height: 391px;
  background: rgba(102, 153, 153, 1);
}
.distance {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  border: 1px solid #699;
}
.name_add {
  width: 100%;
  padding-top: 0.4rem;
  text-align: center;
  font-size: 24px;
  color: #ccc;
}
.license {
  width: 3.43rem;
  height: 4.2rem;
  background: #fff;
  border-radius: 0.08rem;
  margin-left: 0.16rem;
}
.introduce {
  width: 2.4rem;
  margin-left: 0.5rem;
  border-bottom: 1px solid #ccc;
}
.inste_read {
  width: 2.4rem;
  margin-left: 0.5rem;
}
.sebd_add {
  width: 2.4rem;
  margin-left: 0.5rem;
  height: 0.6rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}
.entry_code {
  width: 50%;
}
.lic_intruce {
  padding-top: 0.5rem;
}
.ipt_request {
  border: none;
  height: 0.6rem;
  line-height: 0.6rem;
  border: 0px;
  outline: none;
  cursor: pointer;
  color: #ccc;
  font-size: 14px;
  margin-left: 0.2rem;
  margin-left: 0.2rem;
}
</style>
