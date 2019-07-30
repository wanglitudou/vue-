<template>
  <div class="minewrapper">
 
    <section class="minesections">
      <div class="detailedinformation">
        <span class="settingBtn" @click="toSystem()"><img src="../assets/icon/icon_set_up.png"></span>

        <div class="nav_img">
          <img src="../assets/icon/img_1.png" alt>
        </div>
        <div class="detail_cent" v-if="tokenAdd!=null">
          <div class="sent_vartor">
            <span class="vartor" v-show="windersuger">
              <img class="imgheadportrait" :src="reUploadpictures">
            </span>
            <span class="vartor" v-show="centaddwinder">
              <img class="imgheadportrait" src="../assets/icon/rethink_1.png">
            </span>
          </div>
          <div class="cation">
            <span class="sent_adds">
              <span v-show="centaddsname">
                <span class="name_add" v-if="tokenAdd != null">{{reNickname}}</span>
                <span class="reads_write" @click="toPersonalDetails()"><img src="../assets/icon/bianjiadd.png" alt></span>
             
              </span>

              <span v-show="comyaddsname">
                <span class="name_add" v-if="companyName != null">{{companyName}}</span>
                <span class="reads_write" @click="toPersonalDetails()"><img src="../assets/icon/bianjiadd.png" alt></span>

                <!-- <span class="address_sent">{{reProname}}.{{reCityname}}</span> -->
              </span>
            </span>
          </div>
         
        </div>
        <div class="detail_cent" v-else>
          <div class="poart-add">
            <span class="transmission">
              <img src="../assets/icon/rethink_1.png">
            </span>
          </div>
         <!--  <div class="unlisted">
            <span class="add_login">您还未登录哦</span>
          </div> -->
          <div class="irrigate">
            <span class="vinegar" @click="toLoginClick()">登录</span>
          </div>
        </div>
      </div>
      <div class="circumstantial">
        <div class="relMin">
        <div class="release" @click="toRelease()">
        
            <img src="../assets/icon/fabusent.png" alt>
            <i>我的发布</i>
            <span class="deploy">
              <img src="../assets/icon/proceed.png" alt>
            </span>
         
        </div>
        <div class="release" @click="toInfo()">
          
            <img src="../assets/icon/shoucangicon.png" alt>
            <i>消息</i>
            <span class="deploy">
              <img src="../assets/icon/proceed.png" alt>
            </span>
        
        </div>
        <div class="release">
          
            <img src="../assets/icon/shezhiicon.png" alt>
            <i>更新版本</i>
            <span class="deploy">
             当前版本V2.0
            </span>
         
        </div>

        <div class="release" @click="abouts()">
          <img src="../assets/icon/aboutower.png" alt>
         
            <i>关于</i>
            <span class="deploy">
              <img src="../assets/icon/proceed.png" alt>
            </span>
          
        </div>

         <div class="release" @click="aboutsKF()">
          <img src="../assets/icon/aboutower.png" alt>
         
            <i>客服</i>
            <span class="deploy">
              <img src="../assets/icon/proceed.png" alt>
            </span>
          
        </div>

      </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      centaddwinder: false,
      windersuger: false,
      centaddsname: false,
      comyaddsname: false,
      tokenAdd: localStorage.getItem("token"),
      reMmbile: localStorage.getItem("remobile"),
      reProname: localStorage.getItem("pro_name"),
      reCityname: localStorage.getItem("city_name"),
      reNickname: "",
      companyName: localStorage.getItem("company_name"),
      reUploadpictures: "",
      listArr: [],
      getuser_type: ""
    };
  },
  mounted() {
    //判断是否有user_name  没有不显示，有的话 赋值
    if (localStorage.getItem("user_name") != "null") {
      this.reNickname = localStorage.getItem("user_name");
    }
    if (localStorage.getItem("company_name") != "null") {
      this.companyName = localStorage.getItem("company_name");
    }

    this.reUploadpictures = localStorage.getItem("avatar");
    //判断是否有头像，没有显示默认的，有的话，显示存在的
    if (localStorage.getItem("avatar") == "null") {
      this.centaddwinder = true;
    } else {
      this.windersuger = true;
    }
  },
  created() {
    let getuser_type = localStorage.getItem("user_type");
    if (getuser_type == 1) {
      this.centaddsname = true;
    } else if (getuser_type == 2) {
      this.comyaddsname = true;
    }
  },
  methods: {
    //去登录
    toLoginClick() {
      this.$router.push({ name: "Login" });
    },
    getInfor() {
      let that = this;
      that.$axios
        .post(window.ajaxSrc + "/client/user/setinfo", {
          user_name: that.$route.query.user_name
        })
        .then(res => {});
    },
    abouts() {
      this.$router.push({ name: "concerning" });
    },
    aboutsKF(){
      this.$router.push({ name: "about" });
    },
    toRelease() {
      let getuser_type = localStorage.getItem("user_type");
      if (getuser_type == 1) {
        this.$router.push({ name: "release" });
      } else if (getuser_type == 2) {
        this.$router.push({ name: "enterprisesreleased" });
      }
      if (getuser_type == null) {
        this.$router.push({ name: "Login" });
      }
    },
    toInfo() {
      let getuser_type = localStorage.getItem("user_type");
      if (getuser_type == null) {
        this.$router.push({ name: "Login" });
      } else if (getuser_type != null) {
        this.$router.push({
          name: "info"
        });
      }
    },
    toSystem() {
      let getuser_type = localStorage.getItem("user_type");
      if (getuser_type == null) {
        this.$router.push({ name: "Login" });
      } else if (getuser_type != null) {
        this.$router.push({
          name: "system"
        });
      }
    },
    //个人 企业进行判断 user_type=1个人 user_type=2 企业
    toPersonalDetails() {
      let getuser_type = localStorage.getItem("user_type");
      if (getuser_type == 1) {
        this.$router.push({ name: "personalrequest" });
      } else if (getuser_type == 2) {
        this.$router.push({ name: "companyinformation" });
      }else if (getuser_type == null) {
        this.$router.push({ name: "Login" });
      }
      let that = this;
      let retoken = localStorage.getItem("token");
      that.$axios
        .post(window.ajaxSrc + "/client/user/getinfo", {
          token: retoken
        })
        .then(res => {
          //listArr = res.data.data;
        });
    }
  }
};
</script>
<style scoped>
.circumstantial {
  margin-top: 0.5rem;
}
.poart-add {
  width: 100%;
  height: 0.5rem;
  text-align: center;
  position: absolute;
  top:-.22rem;
}
.transmission img {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  display: inline-block;

}

.vinegar {
  padding: 0.05rem 0.3rem;
  font-size: 0.15rem;
  color: rgba(4, 174, 146, 1);
  border: 1px solid rgba(4, 174, 146, 1);
  border-radius: 0.2rem;
}
.add_login {
  font-size: 0.14rem;
  color: rgba(51, 51, 51, 1);
}
.irrigate {
  width: 100%;
  height: 0.3rem;
  text-align: center;
  padding-top:.6rem;

}
.unlisted {
  width: 100%;
  height: 0.3rem;
  text-align: center;
  padding-top:.5rem;
}
.sent_vartor {
  width: 100%;
  height: 0.5rem;
  text-align: center;
}
.vartor {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  display: inline-block;
  /* background: #04ae92; */
  margin-top: -0.15rem;
}
.addsents {
  font-size: 0.14rem;
  color: #666;
}
.reads_write {
  font-size: 0.14rem;
  color: #04ae92;
}
.reads_write img{
  width:.12rem;
  height: .14rem;
}
.name_add {
  font-size: 0.18rem;
  color: rgba(51, 51, 51, 1);
}
.address_sent {
  font-size: 0.12rem;
  color: rgba(102, 102, 102, 1);
}
.communi {
  width: 100%;
  height: 0.3rem;
  text-align: center;
}
.communi img {
  width: 0.12rem;
  height: 0.14rem;
  vertical-align: middle;
}
.cation {
  width: 100%;
  height: 0.3rem;
  text-align: center;
  margin-top:.1rem;
}
.relMin{
  width: 90%;
  background:#fff;
  margin:0 auto;
  border-radius: .1rem;
   font-size: 14px;
}
.release {
  width: 90%;
  height: 0.56rem;
  line-height:.56rem;
  margin:0 auto;
  border-bottom:1px solid #EAEEF9;
}
.release img{
   width: 0.2rem;
  height: 0.2rem;
  vertical-align:middle;
}
.release i{
  font-style: normal;
  padding-left:.2rem;
}
.release:last-child{
  border-bottom:none;
}
.issuance {
  width: 0.44rem;
  height: 0.44rem;
  float: left;
  text-align: center;
  line-height: 0.44rem;
}
.mypublish {
  width: 3.15rem;
  height: 0.44rem;
  line-height: 0.44rem;
  border-bottom: 2px solid #e7e7e7;
  float: left;
  display: flex;
  justify-content: space-between;
}
.announce {
  font-size: 14px;
  color: #434040;
}
.deploy {
  font-size: 14px;
  color: #434040;
  float: right;
}
.deploy img {
  height: 0.16rem;
  width: 0.09rem;
}
.issuance_img img {
  width: 0.2rem;
  height: 0.2rem;
}
.icon_portrait {
  width: 0.97rem;
  height: 1.38rem;
  line-height: 1.38rem;
}
.chiefengineer {
  width: 2.46rem;
  line-height: 1.38rem;
  line-height: 1.38rem;
}
.cent_medal {
  margin-top: 0.33rem;
  height: 0.72rem;
  font-size: 14px;
  color: #4a4a4a;
  margin-left: 0.2rem;
}
.chief_name {
  height: 0.36rem;
  line-height: 0.36rem;
}
.chief_concrete {
  height: 0.36rem;
  line-height: 0.36rem;
}
.headportrait {
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 50%;
  margin-left: 0.25rem;
  display: inline-block;
  margin-top: 0.33rem;
}
.imgheadportrait {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
}
.minewrapper {
  width: 3.75rem;
  padding-bottom: 50px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
}
.mineheader {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  background: #699;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding: 0 0.16rem;
}
.mineheader span {
  font-size: 0.16rem;
  color: #fff;
}
.mineheader span img {
  width: 0.18rem;
  height: 0.18rem;
}
.minesections {
  width: 100%;
  height: auto;
}
.detailedinformation {
  width: 100%;
  height: 1.5rem;
}
.settingBtn{
  position: absolute;
  top: .22rem;
  left:.22rem;
}
.nav_img {
  width: 100%;
  height: 1.5rem;
  /* background: url("../assets/icon/reportadd.png"); */
}
.nav_img img {
  width: 100%;
  height: 100%;
}
.detail_cent {
  width: 3.43rem;
  height: .97rem;
  margin-top: -0.85rem;
  margin-left: 0.16rem;
  background: #ffffff;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 14px 16px 0px rgba(4, 174, 146, 0.07);
}
</style>
