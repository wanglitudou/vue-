<template>
  <div class="recruitwrapper">
    <header class="headers">
      <div class="address_site">
        <span>北京</span>
        <span class="dropdown">
          <img src="../assets/icon/dropdown.png" alt>
        </span>
      </div>
      <div class="search">
        <img src="../assets/icon/sousuo.png" alt>
        <div class="search_sousuo">搜索招聘、简历信息</div>
      </div>
      <div class="signin">登录</div>
    </header>
    <section class="recruit_section">
      <div class="moreinformation">
        <div class="more_addnews">
          <span class="place_place">职位</span>
          <span>
            <img class="place_img" src="../assets/icon/dropdown.png" alt>
          </span>
        </div>
        <div class="more_addnews">
          <span class="place_place">地区</span>
          <span>
            <img class="place_img" src="../assets/icon/dropdown.png" alt>
          </span>
        </div>
        <div class="more_addnews">
          <span class="place_place">薪资</span>
          <span>
            <img class="place_img" src="../assets/icon/dropdown.png" alt>
          </span>
        </div>
        <div class="more_addnews">
          <span class="place_place">更多</span>
          <span>
            <img class="place_img" src="../assets/icon/dropdown.png" alt>
          </span>
        </div>
      </div>
      <div class="message_add">
        <div class="RecruitmentInformation" v-for="items in biographical" :key="items.index">
          <div class="graphics">
            <div class="sculpture_left"></div>
            <div class="sculpture_right">
              <div class="engineer">
                <span class="engineer_middle">{{items.inten_job}}</span>
                <span class="engineer_salary">{{items.expect_salary}}</span>
              </div>
              <div class="numberofpeople">
                <span class="res_action">
                  <span>{{items.inten_province}}</span>
                  <span>{{items.inten_city}}</span>
                </span>
              </div>
              <div class="detail_enterprise">
                <span class="deadline">{{items.work_experience_time}}</span>
                <span class="educational">{{items.education}}</span>
                <span class="nature">
                  <span class="certificate">证</span>
                </span>
                <span class="acti_time">{{items.create_time}}</span>
              </div>
            </div>
          </div>

          <div class="icon_detail">
            <div>
              <img src="../assets/icon/news.png" alt>
            </div>
            <div>
              <img src="../assets/icon/phone.png" alt>
            </div>
            <div>
              <img src="../assets/icon/shared.png" alt>
            </div>
            <div>
              <img class="aaa" src="../assets/icon/stars.png" alt>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      biographical: [] //简历对应职位信息
    };
  },
  mounted: function() {},
  created() {
    let that = this;
    that.getbiographical();
  },
  methods: {
    getbiographical() {
      let that = this;
      that.$axios
        .post(window.ajaxSrc + "/client/resume/index", {})
        .then(res => {
          if (res.data.success) {
            that.biographical = res.data.data.items;
            console.log(111);
            console.log(res.data.data);
          }
        })
        .catch(() => {
          console.log("查询失败");
        });
    }
  }
};
</script>
<style scoped>
.RecruitmentInformation {
  width: 100%;
  height: 1.38rem;
}
.graphics {
  width: 100%;
  height: 1rem;
  display: flex;
}
.sculpture_left {
  width: 0.52rem;
  height: 0.52rem;
  background: #ccc;
  border-radius: 50%;
  margin-left: 15px;
  margin-top: 30px;
}
.sculpture_right {
  width: 2.62rem;
}
.engineer {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  color: #818181;
  letter-spacing: 0;
  text-align: left;
  padding: 0 20px;
}
.engineer_middle {
  font-size: 14px;
  color: #4a4a4a;
  letter-spacing: 0;
  text-align: left;
}
.engineer_salary {
  font-size: 12px;
  color: #669999;
  letter-spacing: 0;
  text-align: left;
  margin-right: -0.05rem;
}
.numberofpeople {
  font-size: 12px;
  color: #888;
  margin-left: 20px;
  margin-top: 10px;
}
.detail_enterprise {
  height: 0.4rem;
  line-height: 0.4rem;
}
.detail_enterprise span {
  font-size: 12px;
  color: #ababab;
  letter-spacing: 0;
  text-align: left;
}
.deadline {
  margin-left: 20px;
}
.educational {
  margin-left: 0.16rem;
}
.nature {
  margin-left: 0.22rem;
}
.certificate {
  padding: 5px 6px;
  line-height: 0.21rem;
  background: #669999;
  border-radius: 0.04rem;
  color: #fff !important ;
}
.acti_time {
  float: right;
  margin-right: 20px;
}
.icon_detail {
  height: 0.36rem;
  line-height: 0.36rem;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0 27px;
}
.icon_detail div img {
  width: 19px;
  height: 19px;
}
.aaa:hover {
  background: url(../assets/icon/stars-a.png);
  background-size: 0.19rem;
}
.message_add {
  width: 100%;
  overflow-y: scroll;
  margin-top: 0.44rem;
}
.recruitwrapper {
  width: 3.75rem;
  padding-bottom: 50px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.headers {
  width: 3.75rem;
  height: 0.44rem;
  line-height: 0.44rem;
  display: flex;
  padding: 0 0.16rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
  background: #699;
}
.address_site {
  font-size: 14px;
  color: #fff;
  text-align: left;
}
.dropdown img {
  width: 12px;
  height: 6px;
}
.search {
  width: 2.39rem;
  height: 0.28rem;
  line-height: 0.28rem;
  margin-top: 0.08rem;
  font-size: 12px;
  display: flex;
  align-items: center;
  background: #f7f7f7;
  border-radius: 4px;
  margin-left: 0.1rem;
}
.search_sousuo {
  margin-left: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #ababab;
}
.search img {
  width: 11px;
  height: 11px;
  margin-left: 13px;
}
.signin {
  font-size: 14px;
  color: #fff;
  text-align: left;
  margin-left: 0.16rem;
}
.recruit_section {
  width: 100%;
  height: auto;
  margin-top: 0.44rem;
}
.moreinformation {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  display: flex;
  justify-content: space-between;
  padding: 0 45px;
  font-size: 12px;
  color: #fff;
  position: fixed;
  top: 44px;
  background: #699;
}
.place_img {
  width: 5px;
  height: 5px;
  margin-left: 5px;
  vertical-align: middle;
}
</style>
