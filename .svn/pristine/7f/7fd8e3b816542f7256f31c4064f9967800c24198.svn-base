<template>
  <div class="resettingrapper">
    <header class="releaseheaders">
      <span class="add_img">
        <img src="../../assets/icon/backadds.png" @click="backToLogin()" alt>
      </span>
      <span>忘记密码</span>
      <span></span>
    </header>
    <section class="section_resetting">
      <div class="cipher">
        <input class="inp_cip" v-model="data.mobile" placeholder="请输入手机号" type="text">
      </div>
      <div class="cipher">
        <span>
          <input class="inp_cip" v-model="data.code" placeholder="请输入验证码" type="text">
        </span>
        <span>
          <span class="send_ref" :disabled="disabled || time > 0" @click="identifying()">{{ text }}</span>
        </span>
      </div>
      <div class="cipher">
        <input class="inp_cip" v-model="data.password" placeholder="请输入新密码" type="password">
      </div>
      <div class="cipher">
        <input class="inp_cip" v-model="data.repassword" placeholder="请重复新密码" type="password">
      </div>
      <div class="zhecent" v-if="dialogprovince" @click="provinceshurt()">
        <div class="translate" v-if="dialogprovince">
          <div class="heacentsadd">恭喜您</div>
          <div class="centaddsugar">
            <img src="../../assets/icon/adds_2.png" alt>
          </div>
          <div class="rearrange">
            <p>密码修改成功，请重新登录</p>
          </div>
          <div class="cent_finish">
            <button class="sensible" @click="comprehendClik()">我知道了</button>
          </div>
          <div>
            <img
              @click="comprehendClik()"
              class="img_sugars"
              src="../../assets/icon/adds_1.png"
              alt
            >
          </div>
        </div>
      </div>
      <div class="submission">
        <button class="sub_refer" @click="nextOperation()">提交</button>
      </div>
    </section>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      dialogprovince: false,
      edd: 60,
      time: 0,
      disabled: false,
      isDisableds: true,
      alreadyNum: "",
      data: {
        mobile: "",
        code: "",
        password: "",
        id: "",
        repassword: ""
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
    backToLogin() {
      this.$router.push({ name: "Login" });
    },
    identifying() {
      this.time = this.edd;
      this.getCode();
      // this.timer();
    },
    timer() {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
      }
    },
    getCode() {
      if (this.data.mobile == "") {
        this.time = "获取验证码";
        Toast("手机号不能为空");
        return false;
      }
      this.$axios
        .post(window.ajaxSrc + "/client/user/sendsms", {
          mobile: this.data.mobile,
          code: this.data.code
        })
        .then(res => {
          if (res.data.code == "200") {
            this.timer();
            Toast("发送成功");
          } else if (res.data.code == "10001") {
            Toast(res.data.message);
            return false;
          }
        });
    },
    nextOperation() {
      if (this.data.code == "") {
        Toast("验证码不能为空");
        return false;
      }
      if (!/^[0-9]{4}$/.test(this.data.code)) {
        Toast("验证码四位数字");
        return false;
      }
      if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(this.data.mobile)) {
        Toast("请输入正确的手机号格式");
        return false;
      }
      //密码  新密码等
      if (
        !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/.test(this.data.password)
      ) {
        Toast("请输入密码");
        return false;
      }
      if (this.data.repassword == "") {
        Toast("请重复输入新密码");
        return false;
      }
      if (this.data.password != this.data.repassword) {
        Toast("两次密码不一致");
        return false;
      }
      this.$axios
        .post(window.ajaxSrc + "/client/user/resetpass", {
          mobile: this.data.mobile,
          code: this.data.code,
          password: this.data.password,
          repassword: this.data.repassword
        })
        .then(res => {
          if (res.data.success) {
            this.dialogprovince = true;
          } else if (res.data.code == "20001") {
            Toast(res.data.message);
          }
        });
    },
    //提交后跳到登录页面
    comprehendClik() {
      this.$router.push({
        name: "Login"
      });
      this.dialogprovince = false;
    },
    provinceshurt() {
      this.dialogprovince = false;
    }
  }
};
</script>
<style scoped>
.send_ref {
  float: right;
  border: none;
  border: 0px;
  outline: none;
  color: #05ae92;
  width: 101px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 6px;
  margin-right: 0.3rem;
}
.submission {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
}
.sub_refer {
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  background: #05ae92;
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 2.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 22px;
}
.cipher {
  width: 3.43rem;
  height: 0.5rem;
  line-height: 0.5rem;
  margin-left: 0.16rem;
  border-bottom: 1px solid #ccc;
  margin-top: 0.3rem;
}
.inp_cip {
  border: none;
  border: 0px;
  outline: none;
  color: #666;
  font-size: 14px;
  margin-left: 0.36rem;
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
  color: #333;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  margin-bottom: 0.07rem;
  font-size: 0.18rem;
}
.add_img img {
  height: 0.17rem;
}

.zhecent {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 50;
}
.translate {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.1rem;
  width: 2.8rem;
  height: 3.5rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.heacentsadd {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  border: 1px solid #ccc;
  font-size: 0.2rem;
  background: #05ae92;
  color: #fff;
  text-align: center;
  color: #fff;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
}
.centaddsugar {
  width: 100%;
  height: 1.63rem;
  text-align: center;
}
.centaddsugar img {
  width: 1.33rem;
  height: 0.9rem;
  margin-top: 0.37rem;
}
.rearrange {
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center;
  font-size: 0.15rem;
  color: rgba(153, 153, 153, 1);
}
.cent_finish {
  text-align: center;
}
.img_sugars {
  width: 0.23rem;
  height: 0.23rem;
  position: absolute;
  top: 0.11rem;
  right: 0.09rem;
}
.sensible {
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 0.17rem;
  color: rgba(255, 255, 255, 1);
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 192px;
  height: 44px;
  background: #05ae92;
  border-radius: 22px;
  margin-top: 0.3rem;
}
</style>
