<template>
  <div class="seccenwrapper">
    <header class="releaseheaders">
      <span class="add_img">
        <img @click="pluggableClick()" src="../../assets/icon/backaddsent.png" alt>
      </span>
      <span>我的发布</span>
      <span class="add_img">
        <img @click="eliminateClick()" src="../../assets/icon/sourceadd_1.png" alt>
      </span>
    </header>
    <div class="wrapper-cents">
      <div v-for="item in enterpriserlist" :key="item.index">
        <div class="requireadds">
          <div class="wrap_name" @click="publishClick(item.id,item.user_id)">
            <div class="discharge">{{item.inten_job}}</div>
            <div class="wagesadd">
              <span class="barycentre">{{item.expect_salary}}{{item.id}} /月</span>
              <span class="cent_cents">{{item.inten_province}}{{item.inten_city}}</span>
            </div>
          </div>
          <div class="wrap_quits">
            <div class="cent_qwe">
              <span></span>
              <span class="time0_cents">{{item.create_time*1000 | formatDate}}</span>
            </div>
            <div class="cent_century">
              <span class="write_cents" @click="characterizationClick(item.id)">编辑</span>
              <span class="dele_cents">
                <img @click="operationClick(item.id)" src="../../assets/icon/delea_adds.png" alt>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-show="showexhibition" class="developadds">
        <img src="../../assets/icon/ho_a.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
import { MessageBox, Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      showexhibition: false,
      user_type: "",
      login_id: "",
      keep_id: "",
      uesr_id: "",
      enterpriserlist: []
    };
  },
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return MM + "-" + d;
    }
  },
  created() {
    this.establishment();
    Indicator.open();
    setTimeout(() => {
      Indicator.close();
    }, 1000);
  },
  methods: {
    //点击企业编辑，进入到编辑页
    characterizationClick(priseId) {
      this.$router.push({
        name: "businesseditors",
        query: { priseId: priseId }
      });
    },
    //点击进入详情
    publishClick(rescentId, indexId) {
      console.log(rescentId + "ididdi");
      this.login_id = localStorage.getItem("login_id"); //取出登录时候存的login_id 做判断
      var user_type = localStorage.getItem("user_type"); //获取 user_type
      let getuser_type = localStorage.getItem("user_type");
      if (user_type == 1) {
        if (this.login_id == indexId) {
          this.$router.push({
            name: "detailcircumstance",
            query: { reusemId: rescentId }
          });
        } else if (this.login_id != indexId) {
          this.$router.push({
            name: "placeparticulars",
            query: { reusemId: rescentId }
          });
        }
      } else if (user_type == 2) {
        if (this.login_id == indexId) {
          this.$router.push({
            name: "placeparticulars",
            query: { reusemId: rescentId }
          });
        } else if (this.login_id != indexId) {
          this.$router.push({
            name: "detailcircumstance",
            query: { reusemId: rescentId }
          });
        }
      }
    },
    establishment() {
      this.$axios
        .post(window.ajaxSrc + "/client/resume/mylist", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : ""
        })
        .then(res => {
          //数据不存在时， 显示该图标
          if (res.data.data.items == null) {
            this.showexhibition = true;
          }

          this.enterpriserlist = res.data.data.items;
          console.log(res);
          console.log("11111");
        });
    },
    pluggableClick() {
      this.$router.push({
        name: "mine"
      });
    },
    //删除
    operationClick(strId) {
      let that = this;
      MessageBox({
        title: " 删除招聘",
        message: "确定执行操作吗?",
        position: "bottom",
        showCancelButton: true,
        callback: function(action) {
          console.log(action);
          if (action == "confirm") {
            console.log("666");
            that.$axios
              .post(window.ajaxSrc + "/client/resume/delete", {
                token: localStorage.getItem("token")
                  ? localStorage.getItem("token")
                  : "",
                resume_id: strId
              })
              .then(res => {
                if ((res.status = "200")) {
                  Toast("删除成功");
                }
                if (res.data.code == "20001") {
                  Toast("删除失败");
                }
                that.establishment();
              });

            // that.$axios
            //   .get(window.ajaxSrc + "/api/meizubao/delAddress?id=" + id, {})
            //   .then(res => {
            //     that.getList();
            //   })
            //   .catch(() => {
            //     console.log("查询失败");
            //   });
          }
        }
      });

      // that.$axios
      //   .post(window.ajaxSrc + "/client/resume/delete", {
      //     token: localStorage.getItem("token"),
      //     resume_id: strId
      //   })
      //   .then(res => {
      //     if ((res.status = "200")) {
      //       Toast("删除成功");
      //     }
      //     if (res.data.code == "20001") {
      //       Toast("删除失败");
      //     }
      //     this.establishment();
      //   });
    },
    //点击跳转到发布招聘
    eliminateClick() {
      this.$router.push({ name: "releaserecruitment" });
    }
  }
};
</script>
<style scoped>
.dele_cents img {
  height: 0.22rem;
  vertical-align: middle;
}
.write_cents {
  color: #04ae92;
  font-size: 0.15rem;
}
.barycentre {
  color: #04ae92;
}
.cent_cents {
  margin-left: 0.24rem;
  color: #999;
}
.time0_cents {
}
.cent_century {
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
}
.cent_qwe {
  height: 0.5rem;
  line-height: 0.5rem;
  color: rgba(153, 153, 153, 1);
  font-size: 0.12rem;
  display: flex;
  justify-content: space-between;
}
.wagesadd {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.14rem;
}
.discharge {
  height: 0.5rem;
  line-height: 0.5rem;
  color: rgba(51, 51, 51, 1);
  font-size: 0.15rem;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.wrap_name {
  width: 60%;
}
.wrap_quits {
  width: 40%;
}
.wrapper-cents {
  margin-top: 0.55rem;
}
.requireadds {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
  border-bottom: 1px solid #ccc;
}
.create_time {
  font-size: 0.12rem;
}
.add_cenadd {
  margin-top: 0.3rem;
}
.add_secas {
  height: 0.35rem;
  line-height: 0.35rem;
  font-size: 0.14rem;
  color: #666;
}
.add_seft {
  height: 0.35rem;
  line-height: 0.35rem;
  font-size: 0.12rem;
  color: #666;
}
.seccenwrapper {
  width: 3.75rem;
  padding-bottom: 50px;
  background: #fff;
  display: flex;
  flex-direction: column;
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
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
  margin-bottom: 0.3rem;
}
.release_section {
  width: 100%;
  height: auto;
}
.add_img img {
  height: 0.22rem;
}
.developadds {
  text-align: center;
}
.developadds img {
  width: 2rem;
  height: 2rem;
  margin-top: 1.5rem;
}
</style>

