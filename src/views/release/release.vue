
<template>
  <div class="releasewrapper">
    <header class="releaseheaders">
      <span class="add_img">
        <img @click="recurrence()" src="../../assets/icon/backaddsent.png" alt>
      </span>
      <span>我的发布</span>

      <span class="add_img">
        <img @click="extricateClick()" src="../../assets/icon/sourceadd_1.png" alt>
      </span>
    </header>
    <div class="wrapper-cents">
      <div>
        <div class="requireadds" v-for="(item,index) in resumelist" :key="item.id">
          <div class="wrap_name" @click="addenteringClick(item.id,item.user_id)">
            <div class="discharge">{{item.inten_job}}</div>
            <div class="wagesadd">
              <span class="barycentre">{{item.expect_salary}}/月</span>
              <span class="cent_cents">{{item.inten_area}}</span>
            </div>
          </div>
          <div class="wrap_quits">
            <div class="cent_qwe">
              <span></span>
              <span class="time0_cents">{{ item.create_time*1000 | formatDate }}</span>
            </div>
            <div class="cent_century">
              <span class="write_cents" @click="bluepencilClick(item.id)">编辑</span>
              <span class="compile_adds" @click="modifyaddClick(item.id,index)">
                <img v-show="item.status==0" src="../../assets/icon/closeadd_1.png" alt>
                <img v-show="item.status==1" src="../../assets/icon/openadd_1.png" alt>
              </span>
              <span class="dele_cents">
                <img
                  v-show="item.status==1"
                  @click="revolvingClick()"
                  src="../../assets/icon/delea_adds.png"
                  alt
                >
                <img
                  v-show="item.status==0"
                  @click="deleforClick(item.id)"
                  src="../../assets/icon/delea_adds.png"
                  alt
                >
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
      remId: "",
      resume_id: "",
      editoraddlist: [], //编辑列表
      resumelist: [],
      beginlist: [], //启用
      form: {
        token: "1"
      }
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
  mounted() {},
  created() {
    this.tabulation();
    Indicator.open();
    setTimeout(() => {
      Indicator.close();
    }, 1000);
  },
  methods: {
    revolvingClick() {
      Toast("已启用 不可删除");
    },
    //点击编辑
    bluepencilClick(resbudId) {
      this.$router.push({
        name: "issueresume",
        query: { resbudId: resbudId }
      });
      console.log(resbudId);
      console.log("4564111");
    },
    //点击进出详情查看
    addenteringClick(rescentId, indexId) {
      console.log(rescentId + "ididid");
      this.login_id = localStorage.getItem("login_id"); //取出登录时候存的login_id 做判断
      // this.user_id = localStorage.getItem("user_id");
      console.log(this.user_id);
      console.log(this.login_id);
      console.log("登录12");
      console.log(rescentId);
      console.log("发布id");
      var user_type = localStorage.getItem("user_type"); //获取 user_type
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
            name: "detailcircumstance",
            query: { reusemId: rescentId }
          });
        } else if (this.login_id != indexId) {
          this.$router.push({
            name: "placeparticulars",
            query: { reusemId: rescentId }
          });
        }
      }
    },
    //修改状态 启用 status=1，禁用statuus=0
    modifyaddClick(ststuId, index) {
      console.log(index);
      let that = this;
      let resumelist = that.resumelist;
      const status = resumelist[index].status;
      let status_ = "";
      if (status == "0") {
        status_ = "1";
      } else if (status == "1") {
        status_ = "0";
      }
      console.log(status);
      let token = localStorage.getItem("token");
      that.$axios
        .post(window.ajaxSrc + "/client/resume/changestatus", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : "",
          resume_id: ststuId,
          status: status_
        })
        .then(res => {
          if (res.data.code == 200) {
            for (let i = 0; i < resumelist.length; i++) {
              if (i !== index) {
                let newList = resumelist[i];
                newList.status = "0";
                that.$set(resumelist, i, newList);
              }
            }
            resumelist[index].status = status_;
            if (resumelist[index].status == 1) {
              console.log("状态11");
            }
            // alert(status_)
            // alert(resumelist[index].status);
          }
        });
      console.log("123");
    },
    //点击跳转到创建简历
    extricateClick() {
      this.$router.push({ name: "issueresume" });
    },
    tabulation() {
      this.$axios
        .post(window.ajaxSrc + "/client/resume/mylist", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : ""
        })
        .then(res => {
          if (res.data.data.items == null) {
            //数据不存在时， 显示该图标
            this.showexhibition = true;
          }
          if (res.data.code == 200) {
            // if (res.data.data.items != null) {
            //   localStorage.setItem("user_id", res.data.data.items[0].user_id); //设置 user_id
            // }
            this.resumelist = res.data.data.items;

            //  for (let i = 0; i < resumelist.length; i++) {
            //   if (i !== index) {
            //     let newList = resumelist[i];
            //     newList.status = "0";
            //     that.$set(resumelist, i, newList);
            //   }
            // }
          }
          console.log(res.data.total_pages);

          // console.log(res);
        });
    },
    deleforClick(strId) {
      console.log(strId);
      console.log("删除的id");

      let that = this;
      MessageBox({
        title: "提示",
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
                if (res.data.code == 200) {
                  Toast("删除成功");
                }
                if (res.data.code == "20001") {
                  Toast("已启用 不可删除");
                }
                that.tabulation();
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
      //     if (res.data.code == 200) {
      //       Toast("删除成功");
      //     }
      //     if (res.data.code == "20001") {
      //       Toast("删除失败");
      //     }
      //     this.tabulation();
      //   });
    },
    recurrence() {
      this.$router.push({
        name: "mine"
      });
    }
  }
};
</script>
 <style scoped>
.mint-msgbox-btn mint-msgbox-cancel {
  color: red;
}
.mint-msgbox-btn mint-msgbox-cancel {
  color: #f00;
}
.mint-msgbox-cancel {
  color: red;
}
.mint-msgbox-confirm {
  color: #ccc !important;
}
.compile_adds img {
  width: 0.35rem;
  height: 0.18rem;
  vertical-align: middle;
}
.wrapper-cents {
  margin-top: 0.55rem;
  overflow-y: scroll;
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
.wrap_name {
  width: 50%;
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
.wagesadd {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.12rem;
}
.barycentre {
  color: #04ae92;
}
.cent_cents {
  margin-left: 0.24rem;
  color: #999;
}
.wrap_quits {
  width: 50%;
}
.cent_qwe {
  height: 0.5rem;
  line-height: 0.5rem;
  color: rgba(153, 153, 153, 1);
  font-size: 0.12rem;
  display: flex;
  justify-content: space-between;
}
.write_cents {
  color: #04ae92;
  font-size: 0.14rem;
}
.dele_cents img {
  height: 0.17rem;
  vertical-align: middle;
}
.cent_century {
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
}
.timeadds {
  width: 0.9rem;
  border: 1px solid #ccc;
}
.releasewrapper {
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
  background: #fff;
  color: rgba(51, 51, 51, 1);
  font-size: 0.18rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  margin-bottom: 0.07rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
}
.release_section {
  width: 100%;
  height: auto;
  margin-top: 0.44rem;
}
.add_img img {
  height: 0.22rem;
}
.enable {
  width: 3.42rem;
  height: 0.7rem;
  border-bottom: 1px solid #e7e7e7;
  margin-left: 0.16rem;
  display: flex;
}
.programme {
  width: 2rem;
  height: 0.7rem;
}
.manage {
  width: 1.9rem;
  height: 0.7rem;
  line-height: 0.7rem;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #434040;
}
.manage img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
}

.intermediate {
  height: 0.35rem;
  line-height: 0.35rem;
  font-size: 14px;
  color: #434040;
}
.specific {
  height: 0.35rem;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #c3c3c3;
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