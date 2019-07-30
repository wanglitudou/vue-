<template>
  <div>
    <div class="resettingrapper">
      <header class="releaseheaders">
        <span class="add_img">
          <img @click="backTohigher()" src="../../assets/icon/backadds.png" alt>
        </span>
        <span>职位详情</span>
        <span class="addsent" v-show="renovatecentadds">
          <span class="instigate" @click="modifyClick(remId)">
            <img v-show="this.is_favorite==0" src="../../assets/icon/collect_add-1.png" alt>
            <img v-show="this.is_favorite==1" src="../../assets/icon/coller_centadds_2.png" alt>
          </span>
          <img @click="addshareClick()" src="../../assets/icon/share_cent_1.png" alt>
        </span>
        <span v-show="signaladds"></span>
      </header>
      <div class="zhecent" v-if="dialogshare" @click="addshareshut()"></div>
      <div class="partiescents" v-if="dialogshare">
        <!-- v-show="indication" -->
        <div class="indisends">
          <div class="reachadds">
            <span></span>
            <span>分享到</span>
            <span>
              <img
                @click="liabilityaddClick()"
                class="img_sugar_1"
                src="../../assets/icon/shadds_1.png"
                alt
              >
            </span>
          </div>
          <div @click="liabilityClick()">
            <share :config="config"></share>
          </div>
        </div>
        <!-- <div class="indisends" v-show="indication">
          <share :config="config"></share>
        </div>-->
        <!-- <div class="abrogateadd" @click="extremelyclick()">
          <span>取消</span>
        </div>-->
      </div>
      <section class="section_resetting">
        <div @click="vanishClick()">
          <div class="experience">
            <span class="level">{{inten_job}}</span>
            <span class="time_data">{{create_time}}</span>
          </div>
          <div class="validate_cents">
            <div class="valcent_jif">
              <span>{{inten_province}}</span>
              <span>{{inten_city}}</span>
            </div>
            <div class="valcent_jif">{{education}}</div>
            <div class="valcent_jif">{{work_experience_time}}</div>
            <div class="valcent_jif">{{work_type}}</div>
            <div class="valcent_jif" id="vent-quite">{{job_people_num}}</div>
          </div>
          <div class="concerning">
            <div class="cent-addsad">{{expect_salary}}</div>
          </div>
          <div class="bewrite">
            <div class="responsibility">
              <div class="mark">
                <span class="depict">
                  <img class="broads_img" src="../../assets/icon/broadsideadd.png" alt>
                  <span class="cebt_sugeradd">职位描述</span>
                </span>
              </div>
              <div class="duty">
                <div class="obligation">{{job_desc}}</div>
              </div>
              <div class="demandadd">
                <div class="demand_centas">
                  <div class="callfor">
                    <img class="broads_img" src="../../assets/icon/broadsideadd.png" alt>
                    <span class="cebt_sugeradd">证书要求</span>
                  </div>
                  <div class="programme" v-for="item in job_cert" :key="item.index">{{item}}</div>
                </div>
              </div>
              <div class="basis">
                <div class="essential">
                  <div class="communication_cent">
                    <img class="broads_img" src="../../assets/icon/broadsideadd.png" alt>
                    <span class="cebt_sugeradd">基本信息</span>
                  </div>
                </div>
                <div class="corporate">
                  <div class="print">
                    <span v-if="avatar!= null">
                      <img :src="avatar" alt>
                    </span>
                    <span v-else-if="avatar==null">
                      <img class="img_centadds" src="../../assets/icon/rethink_1.png" alt>
                    </span>
                    <!-- <img :src="avatar" alt> -->
                  </div>
                  <div class="specific">
                    <div class="localization designation">{{company}}</div>
                    <div class="localization nature">
                      <span class="sidres">{{inten_province}}{{inten_city}}</span>
                      <span>{{company_type}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footers">
        <button class="dial" @click="connectionClick()">拨打电话</button>
      </footer>
      <!-- <div class="zhecent" v-if="dialogcentWY" @click="CentWapt()"></div>
      <div class="translate" v-if="dialogcentWY">
        <div class="centIconTr">
          <span></span>
          <span>
            <img @click="CentWapt()" src="../../assets/icon/quxiao02.png" alt>
          </span>
        </div>
        <div class="centIjotT">
          <p>拨打电话视为确认有强烈意向</p>
          <p>将不再推荐新内容!</p>
        </div>
        <div class="centCotY">
          <span class="closeRTy" @click="CentWapt()">取消</span>
          <span class="ctroTy" @click="affirmToy()">确认</span>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import { Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      dialogcentWY: false,
      user_type: "", //用戶類型
      renovatecentadds: false,
      signaladds: true,
      mobileTell: localStorage.getItem("mobileTell"),
      login_id: "",
      instancelist: [], //工作经历列表
      certificatelist: [], //证书列表
      dialogshare: false,
      is_favorite: 0, //1是已收藏 0是没收藏
      mob: "",
      userHeader: "",
      relation: false,
      reMmbile: localStorage.getItem("remobile"),
      config: {
        // url: "http://m.jzzp365.com/placeparticulars?reusemId=14460",
        url: window.location.href, // 网址，默认使用 window.location.href
        source: "筑材管家", // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        title: "筑材管家", // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        description: "", // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
        image: "", // 图片, 默认取网页中第一个img标签
        sites: ["weibo", "wechat", "qq", "qzone", "wechat", "douban"], // 启用的站点
        disabled: ["google", "facebook", "twitter"], // 禁用的站点
        // sites: [ "qq", "wechat"], // 启用的站点
        // disabled: ["google", "facebook", "weibo", "twitter","douban","qzone"], // 禁用的站点
        wechatQrcodeTitle: "微信扫一扫：分享", // 微信二维码提示文字
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈</p>"
      },
      indication: false,
      ISuserHeader: false,
      frame: false,
      items: [0, 1, 2, 3, 4],
      company_type: "",
      resume_title: "",
      inten_job: "",
      inten_province: "",
      sex: "",
      user_name: "",
      job_end_time: "",
      inten_city: "",
      expect_salary: "",
      status: "",
      create_time: "",
      update_time: "",
      education: "",
      job_people_num: "",
      expect_salary: "",
      create_time: "",
      work_experience_time: "",
      inten_city: "",
      job_desc: "", //岗位职责
      company: "", //公司信息
      company_type: "",
      company_province: "", //公司省份
      company_city: "", //公司所在市区
      avatar: null, //头像
      job_cert: "", //证书类型
      work_status: "", //工作状态，离职在职
      work_type: "", //工作性质，全职
      data: {
        reusemId: ""
      },
      current: [],
      remId: ""
    };
  },
  mounted() {
    this.user_type = localStorage.getItem("user_type"); //获取 user_type
    this.data.reusemId = this.$route.query.reusemId;
    // this.data.globalResumeid = this.$route.query.globalResumeid;
    this.remId = this.$route.query.reusemId;
  },
  created() {
    this.getCurrent();
    Indicator.open();
    setTimeout(() => {
      Indicator.close();
    }, 1000);
  },
  methods: {
    liabilityaddClick() {
      this.dialogshare = false;
    },
    //关闭分享弹窗
    liabilityClick() {
      this.dialogshare = false;
    },
    //收藏
    modifyClick(favoriteId) {
      let token = localStorage.getItem("token");
      if (token == null) {
        Toast({
          message: "请先登录",
          position: "middle",
          duration: 2000
        });
      } else if (this.is_favorite == 0) {
        this.$axios
          .post(window.ajaxSrc + "/client/favorite/add", {
            token: localStorage.getItem("token")
              ? localStorage.getItem("token")
              : "",
            resume_id: favoriteId
          })
          .then(res => {
            if (res.data.code == "20001") {
              Toast(res.data.message);
            } else {
              this.is_favorite = 1;
              Toast("收藏成功");
            }
          });
      } else if (this.is_favorite == 1) {
        this.$axios
          .post(window.ajaxSrc + "/client/favorite/delete", {
            token: localStorage.getItem("token")
              ? localStorage.getItem("token")
              : "",
            resume_id: favoriteId
          })
          .then(res => {
            if (res.data.code == "20001") {
              Toast(res.data.message);
            } else {
              this.is_favorite = 0;
              Toast("取消收藏");
            }
          });
      }
    },
    //判断拨打电话是否有token
    connectionClick() {
      // this.dialogcentWY = true;
      let tokenadd = localStorage.getItem("token");
      console.log(tokenadd);
      if (tokenadd == null) {
        Toast({
          message: "请先登录",
          position: "middle",
          duration: 2000
        });
      } else {
        window.location.href = "tel:" + this.mob;
      }
    },
    //拨打电话的弹框
    // CentWapt() {
    //   this.dialogcentWY = false;
    // },
    //拨打电话弹框确认按钮
    // affirmToy() {
    //   this.$axios
    //     .post(window.ajaxSrc + "/client/resume/recycle", {
    //       token: "27a4dd36a1ac2a027f20509cd2f935e1",
    //       resume_id: this.$route.query.reusemId,
    //       push_resume_id: this.$route.query.globalResumeid
    //     })
    //     .then(res => {
    //       if (res.data.code == 200) {
    //         this.dialogcentWY = false;
    //       }
    //     });
    // },
    //分享
    addshareClick() {
      let token = localStorage.getItem("token");
      if (token == null) {
        Toast({
          message: "请先登录",
          position: "middle",
          duration: 2000
        });
        this.dialogshare = false;
      } else {
        this.dialogshare = true;
      }
      // if
      // this.indication = true;
    },
    //分享取消
    extremelyclick() {
      this.dialogshare = false;
    },
    vanishClick() {
      this.indication = false;
    },
    certificate() {
      let that = this;
      that.frame = true;
      console.log("有证书");
    },
    creatshut() {
      let that = this;
      that.frame = false;
    },
    //分享关闭
    addshareshut() {
      this.dialogshare = false;
    },
    getCurrent() {
      let that = this;

      that.$axios
        .post(window.ajaxSrc + "/client/resume/view", {
          resume_id: that.$route.query.reusemId,
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : ""
        })
        .then(res => {
          this.login_id = localStorage.getItem("login_id"); //取出登录时候存的login_id 做判断
          console.log(res);
          if (res.data.code == 200) {
            localStorage.setItem("mobileTell", res.data.data.mobile);
            that.current = res.data.data;
            that.resume_title = res.data.data.resume_title;
            that.inten_job = res.data.data.inten_job;
            that.company_type = res.data.data.company_type;
            that.education = res.data.data.education;
            that.job_people_num = res.data.data.job_people_num;
            that.expect_salary = res.data.data.expect_salary;
            that.create_time = res.data.data.create_time;
            that.work_experience_time = res.data.data.work_experience_time;
            that.inten_province = res.data.data.inten_province;
            that.sex = res.data.data.sex;
            that.user_name = res.data.data.user_name;
            that.inten_city = res.data.data.inten_city;
            that.job_desc = res.data.data.job_desc;
            that.company = res.data.data.company;
            that.company_type = res.data.data.company_type;
            that.company_province = res.data.data.company_province;
            that.company_city = res.data.data.company_city;
            that.avatar = res.data.data.avatar;
            that.job_cert = res.data.data.job_cert;
            that.job_end_time = res.data.data.job_end_time;
            that.work_type = res.data.data.work_type;
            that.work_status = res.data.data.work_status;
            that.instancelist = res.data.data.job;
            that.certificatelist = res.data.data.column;
            that.is_favorite = res.data.data.is_favorite;
            that.mob = res.data.data.mobile;
          }
          //判断分享和收藏是否存在
          if (that.user_type == null) {
            that.renovatecentadds = true;
            that.signaladds = false;
          }
          if (that.user_type == 1) {
            if (that.data.reusemId != res.data.data.id) {
              that.renovatecentadds = false;
              that.signaladds = true;
            } else if (that.data.reusemId == res.data.data.id) {
              that.renovatecentadds = true;
              that.signaladds = false;
            }
          } else if (that.user_type == 2) {
            if (that.data.reusemId != res.data.data.id) {
              that.renovatecentadds = true;
              that.signaladds = false;
            } else if (that.data.reusemId == res.data.data.id) {
              that.renovatecentadds = false;
              that.signaladds = true;
            }
          }
        })
        .catch(() => {
          console.log("查询失败");
        });
    },
    backTohigher() {
      this.$router.go(-1); //返回到上一级
      // this.$router.push({ name: "recruit" });
    }
  }
};
</script>
<style scoped>
.zhecent {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 50;
}
.centIconTr {
  height: 0.6rem;
  line-height: 0.6rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
}
.centIjotT {
  height: 1rem;
  text-align: center;
  color: #333;
  font-size: 0.18rem;
}
.centCotY {
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
}
.closeRTy {
  width: 50%;
  text-align: center;
  color: #9494a0;
  border-right: 1px solid #ccc;
}
.ctroTy {
  width: 50%;
  text-align: center;
  color: #04ae92;
}
.centIjotT p {
  line-height: 0.3rem;
}
.translate {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 2.79rem;
  height: 2.14rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
.cebt_sugeradd {
  margin-left: 0.08rem;
}
.broads_img {
  width: 0.09rem;
  height: 0.18rem;
  vertical-align: middle;
}
.cent_quite_sent {
  height: 0.3rem;
  line-height: 0.3rem;
  color: rgba(51, 51, 51, 1);
  font-size: 0.12rem;
  color: #04ae92;
  margin-right: 0.5rem;
}
.cent_adds_name {
  height: 0.6rem;
  border: 1px solid #ccc;
  font-size: 0.14rem;
}
.credentialsadds {
  padding: 0.1rem 0.16rem;
}
.developadd {
  margin-top: 0.05rem;
}
.experience_cents {
  color: rgba(51, 51, 51, 1);
  font-size: 0.14rem;
}
.sent-namesd {
  color: rgba(153, 153, 153, 1);
  font-size: 0.14rem;
  height: 0.6rem;
  line-height: 0.6rem;
}
.time_centadds {
  color: rgba(153, 153, 153, 1);
  font-size: 0.12rem;
}
.cent_worek {
  color: rgba(51, 51, 51, 1);
  font-size: 0.15rem;
}
.concreteadd {
  height: 0.3rem;
  line-height: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.gothrough {
  padding: 0.1rem 0.16rem;
}
.wors_quite {
  font-size: 0.15rem;
  color: rgba(51, 51, 51, 1);
  margin-bottom: 0.2rem;
}
.sexuality {
  margin-left: 0.2rem;
}
#vent-quite {
  border-right: 0px;
}
.programme {
  margin-top: 0.15rem;
  font-size: 0.12rem;
  color: rgba(51, 51, 51, 1);
}
.demandadd {
  padding: 0.1rem 0.16rem;
}
.callfor {
  color: rgba(51, 51, 51, 1);
  font-size: 0.15rem;
  margin-bottom: 0.2rem;
}
.cent-addsad {
  color: #04ae92;
  font-size: 0.14rem;
  margin-left: 0.2rem;
}
.concerning {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
}
.validate_cents {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.15rem 0.2rem;
  font-size: 0.12rem;
}
.valcent_jif {
  border-right: 1px solid #ccc;
  padding-right: 0.2rem;
}
.abrogateadd {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  background: #ccc;
  color: #666;
}
.instigate {
  margin-right: 0.2rem;
}
.shoot {
  padding: 0.05rem 0.05rem;
}
.currents {
  color: #699;
}
.indisends {
  position: absolute;
  width: 100%;
}
.social-share {
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0 0.8rem;
}
.footers {
  height: 0.4rem;
  line-height: 0.4rem;
  color: #fff;
  background: #fff;
  text-align: center;
}
.addsent img {
  width: 0.16rem;
  height: 0.16rem;
}
.consult {
  width: 1.4rem;
  height: 0.35rem;
  line-height: 0.35rem;
  text-align: center;
  color: #fff;
  background: #04ae92;
  border-radius: 8px;
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
.sequence {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  text-align: center;
  margin-top: 0.5rem;
}
.proper {
  border-radius: 0.16rem;
  height: 0.32rem;
  line-height: 0.32rem;
  border: 1px solid rgba(102, 153, 153, 1);
  background: #fff;
  color: #699;
  margin-top: 0.3rem;
  text-align: center;
}
.proper:hover {
  background: #699;
  color: #fff;
}
.parties {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 250px;
  position: fixed;
  left: calc(50% - 188px);
  top: calc(50% - 150px);
  z-index: 100;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
}
.partiescents {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 1rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  bottom: -0.5rem;
  transform: translate(-50%, -50%);
  font-size: 0.15rem;
}
.dial {
  width: 2.76rem;
  height: 0.38rem;
  line-height: 0.38rem;
  color: #fff;
  background: #04ae92;
  border-radius: 19px;
  border: none;
  border: 0px;
  outline: none;
}
.dial a {
  color: #fff;
}
.designation {
  color: rgba(51, 51, 51, 1);
}
.sidres {
  height: 0.2rem;
  line-height: 0.2rem;
  padding-right: 0.15rem;
  border-right: 1px solid #ccc;
}
.nature {
  color: rgba(153, 153, 153, 1);
}
.localization {
  margin-top: 0.07rem;
}
.corporate {
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.1rem;
  margin-bottom: 0.2rem;
}
.specific {
  width: 2.5rem;
  font-size: 0.12rem;
}
.print {
  height: 0.52rem;
  width: 0.52rem;
  border-radius: 50%;
  margin-top: 0.03rem;
}
.print img {
  height: 0.52rem;
  width: 0.52rem;
  border-radius: 50%;
}
.obligation {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
.duty {
  margin-left: 0.16rem;
  margin-right: 0.16rem;
  line-height: 0.25rem;
  font-size: 0.12rem;
}
.basis {
  padding: 0.1rem 0.16rem;
}
.bewrite {
  height: auto;
  margin-top: 0.1rem;
}
.mark {
  height: 0.44rem;
  line-height: 0.44rem;
}
.depict {
  font-size: 0.16rem;
  color: rgba(51, 51, 51, 1);
  margin-left: 0.16rem;
  height: 0.19rem;
  line-height: 0.19rem;
}
.notice {
  height: 0.44rem;
  line-height: 0.44rem;
  font-size: 0.12rem;
  color: rgba(102, 102, 102, 1);
  display: flex;
  justify-content: space-between;
  padding: 0 0.16rem;
}
.construct {
  height: 0.44rem;
  line-height: 0.44rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.16rem;
}
.minute {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
}
.record {
  font-size: 0.1rem;
  color: rgba(102, 102, 102, 1);
  border: 1px solid #ccc;
  border-radius: 0.04rem;
  padding: 0.05rem 0.1rem;
  background: rgba(221, 221, 221, 1);
  color: rgba(102, 102, 102, 1);
}
.build {
  font-size: 0.14rem;
  color: rgba(51, 51, 51, 1);
}
.wages {
  font-size: 0.14rem;
  color: rgba(255, 66, 68, 1);
}
.level {
  font-size: 0.18rem;
  color: rgba(51, 51, 51, 1);
}
.time_data {
  font-size: 0.12rem;
  color: rgba(153, 153, 153, 1);
}
.experience {
  height: 0.44rem;
  line-height: 0.44rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.16rem;
  margin-top: 0.44rem;
}
.resettingrapper {
  width: 3.75rem;
  background: #fff;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  font-size: 14px;
}
.releaseheaders {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  color: #666;
  background: #fff;
  font-size: 0.18rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  margin-bottom: 0.07rem;
  display: flex;
  padding: 0 0.1rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
}
.add_img img {
  height: 0.17rem;
}
.section_resetting {
  height: auto;
  overflow-y: scroll;
  flex: 1;
}

.reachadds {
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
}
.img_sugar_1 {
  width: 0.11rem;
  height: 0.11rem;
  vertical-align: middle;
}
.img_centadds {
  height: 0.52rem;
  width: 0.52rem;
}
.row {
  padding: 20px 0 0 20px;
  border: 1px solid #000;
}
.row-pad {
  padding: 20px 0 0 60px;
}
</style>
