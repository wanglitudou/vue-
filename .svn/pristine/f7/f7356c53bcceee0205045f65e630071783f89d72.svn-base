
<template>
  <div class="releasewrapper">
    <header class="releaseheaders">
      <span class="add_img">
        <img @click="recurrence()" src="../../assets/icon/backaddsent.png" alt>
      </span>
      <span>我的收藏</span>
      <span></span>
    </header>
    <section class="release_section">
      <div class="collersadd" v-for="item in favoritelist" :key="item.index">
        <div class="clooect_cents" @click="enshrineClick(item.resume_id)">
          <div class="pos_cent">{{item.inten_job}}</div>
          <div class="deta_centsad">
            <span class="spacingadd">{{item.expect_salary}}/月</span>
            <span class="distinctionass">{{item.inten_area}}</span>
          </div>
        </div>
        <div class="collerc_adds">
          <div class="time_adds">{{item.create_time*1000 | formatDate}}</div>
          <div class="img_centsf">
            <img @click="deletedClick(item.resume_id)" src="../../assets/icon/delea_adds.png" alt>
          </div>
        </div>
      </div>
      <div v-show="showenteradds" class="enshrineadd">
        <img src="../../assets/icon/coll_1.png" alt>
      </div>
    </section>
  </div>
</template>
<script>
import { Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      showenteradds: false,
      resume_id: "",
      favoritelist: [],
      form: {
        token: ""
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
  mounted() {
    var user_type = localStorage.getItem("user_type"); //获取 user_type
  },
  created() {
    this.enshrine();
    Indicator.open();
    setTimeout(() => {
      Indicator.close();
    }, 1000);
  },
  methods: {
    enshrine() {
      this.$axios
        .post(window.ajaxSrc + "/client/favorite/index", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : ""
        })
        .then(res => {
          if (res.data.data.items == null) {
            this.showenteradds = true;
          }
          if (res.data.code == 200) {
            this.favoritelist = res.data.data.items;
          }
        });
    },
    recurrence() {
      this.$router.push({
        name: "mine"
      });
    },
    //删除
    deletedClick(strId) {
      let that = this;
      that.$axios
        .post(window.ajaxSrc + "/client/favorite/delete", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : "",
          resume_id: strId
        })
        .then(res => {
          if (res.data.code == 200) {
            Toast("删除成功");
          } else {
            Toast("删除失败");
          }
          this.enshrine();
        });
    },
    //查看详细信息
    enshrineClick(resentId) {
      let getuser_type = localStorage.getItem("user_type");
      if (getuser_type == 1) {
        this.$router.push({
          name: "placeparticulars",
          query: { reusemId: resentId }
        });
      } else if (getuser_type == 2) {
        this.$router.push({
          name: "detailcircumstance",
          query: { reusemId: resentId }
        });
      }
    }
  }
};
</script>
 <style scoped>
.img_centsf {
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
}
.img_centsf img {
  vertical-align: middle;
  width: 0.17rem;
  height: 0.17rem;
  line-height: 0.17rem;
}
.time_adds {
  font-size: 0.12rem;
  color: #ccc;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
}
.pos_cent {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.15rem;
  color: #333;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.deta_centsad {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.14rem;
}
.clooect_cents {
  width: 70%;
  height: 1rem;
  line-height: 0.5rem;
  padding: 0 0.2rem;
  font-size: 0.15rem;
}
.collerc_adds {
  width: 30%;
  height: 1rem;
  line-height: 0.5rem;
  font-size: 0.15rem;
  color: #ccc;
  padding: 0 0.2rem;
}
.distinctionass {
  font-size: 0.15rem;
  color: #999999;
}
.spacingadd {
  color: #04ae92;
  font-size: 0.15rem;
}
.place_add {
  color: rgba(67, 64, 64, 1);
  font-size: 14px;
  height: 0.5rem;
  line-height: 0.5rem;
}
.place_sent {
  height: 0.2rem;
  color: rgba(136, 136, 136, 1);
  font-size: 12px;
}
.mvitae {
  width: 80%;
  height: 0.6rem;
}
.curriculu {
  width: 20%;
  height: 0.6rem;
  line-height: 0.6rem;
  color: rgba(136, 136, 136, 1);
  font-size: 0.12rem;
  text-align: center;
}
.fovers {
  width: 80%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
}
.cosfovrt {
  width: 20%;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: rgba(67, 64, 64, 1);
  font-size: 0.14rem;
}
.cosfovrt img {
  vertical-align: middle;
  width: 0.2rem;
  height: 0.2rem;
}
.collersadd {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  border-bottom: 1px solid #ccc;
}

.releasewrapper {
  width: 3.75rem;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.releaseheaders {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  color: rgba(51, 51, 51, 1);
  font-size: 0.18rem;
  background: #fff;
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
  margin-top: 0.5rem;
  overflow-y: scroll;
}
.add_img img {
  height: 0.17rem;
}
.enshrineadd {
  text-align: center;
}
.enshrineadd img {
  width: 2rem;
  height: 2rem;
  margin-top: 1.5rem;
}
</style>