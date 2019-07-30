<template>
  <div class="resettingrapper">
    <header class="releaseheaders">
      <span class="add_img">
        <img @click="maritime()" src="../../assets/icon/backaddsent.png" alt>
      </span>
      <span>修改密码</span>
      <span></span>
    </header>
    <section class="section_resetting">
      <div class="cipher">
        <input class="inp_cip" v-model="form.old_password" placeholder="请输入原密码" type="password">
      </div>
      <div class="cipher">
        <input class="inp_cip" v-model="form.new_password" placeholder="请设置新密码" type="password">
      </div>
      <div class="cipher">
        <input class="inp_cip" v-model="form.renew_password" placeholder="请重复输入新密码" type="password">
      </div>
      <div class="bestow">
        <p>修改后，必须重新登录使用</p>
      </div>
      <div class="submission">
        <button class="sub_refer" @click="referring()">提交</button>
      </div>
    </section>
    
  </div>
 
</template>
<script>
import { Toast,Indicator } from "mint-ui";
export default {
  data() {
    return {
      form: {
        old_password: "", //原始密码
        new_password: "", //新密码
        renew_password: "" //重复新密码
      }
    };
  },
  mounted() {},
  created(){
    Indicator.open();
setTimeout(() => {
Indicator.close();
}, 1000);
  },
  methods: {
    //返回发哦系统设置
    maritime() {
      this.$router.push({ name: "system" });
    },
    //重置密码提交
    referring() {
      if(this.form.old_password == ''){
       Toast("原始密码不能为空");  
        return false;
      }
      if (
        !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/.test(
          this.form.old_password
        )
      ) {
        Toast("原始密码至少包含数字、字母组合，长度在6~12位");
        return false;
      }
      if(this.form.new_password == ''){
       Toast("新密码不能为空");  
        return false;
      }
      if (
        !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/.test(
          this.form.new_password
        )
      ) {
        Toast("新密码至少包含数字、字母组合，长度在6~12位");
        return false;
      }
      if (
        !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}$/.test(
          this.form.renew_password
        )
      ) {
        Toast("请重复输入新密码");
        return false;
      }
      if (this.form.new_password != this.form.renew_password) {
        Toast("两次密码不一致");
        return false;
      }
      this.$axios
        .post(window.ajaxSrc + "/client/user/passup", {
          old_password: this.form.old_password,
          new_password: this.form.new_password,
          renew_password: this.form.renew_password,
          token: localStorage.getItem("token") ? localStorage.getItem("token") : ''
        })
        .then(res => {
          if (res.data.success) {
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
  background: #699;
  margin-right: 0.1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 315px;
  height: 44px;
  background: linear-gradient(
    30deg,
    rgba(55, 163, 148, 1),
    rgba(55, 164, 148, 1)
  );
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
.bestow {
  margin-left: 0.5rem;
  margin-top: 0.1rem;
  color: #05ae92;
}
.inp_cip {
  border: none;
  border: 0px;
  outline: none;
  color: #848484;
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
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  margin-bottom: 0.07rem;
}
.add_img img {
  height: 0.17rem;
}
</style>
