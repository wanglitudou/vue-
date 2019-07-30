<template>
  <div class="seccenwrapper">
    <header class="headersappend">
      <span class="add_img">
        <img @click="backaddClick()" src="../../assets/icon/backaddsent.png" alt>
      </span>
      <span>
        <input class="inp_search" v-model="keywords" type="text" ref="input1" placeholder="请输入搜索内容">
      </span>
      <span @click="showADD()">搜索</span>
    </header>
    <section class="wrappers_cents">
      <div class="cent_centsadd" v-for="item in addsentlist" :key="item.index">
        <div class="cent_addssugar">{{item.name}}</div>
        <div class="img_centadd">
          <img @click="addscreeningClick(item.id)" src="../../assets/icon/pingbi_1.png" alt>
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
      keywords: "",
      addsentlist: [] //点搜索数据
    };
  },
  created() {
    Indicator.open();
    setTimeout(() => {
      Indicator.close();
    }, 1000);
  },
  methods: {
    showADD() {
      this.$axios
        .post(window.ajaxSrc + "/client/user/company", {
          token: localStorage.getItem("token") ? localStorage.getItem("token") : '',
          keywords: this.keywords
        })
        .then(res => {
          this.addsentlist = res.data.data;
          console.log(res);
        });
    },
    //添加屏蔽
    addscreeningClick(StrId) {
      this.$axios
        .post(window.ajaxSrc + "/client/user/shield", {
          token: localStorage.getItem("token") ? localStorage.getItem("token") : '',
          company_id: StrId
        })
        .then(res => {
          if (res.data.code == "200") {
            Toast("添加屏蔽成功");
            // Toast("该企业已在屏蔽列表，不能重复添加");
          } else {
            Toast(res.data.message);
          }
        });
    },
    backaddClick() {
      this.$router.push({ name: "privacysettings" });
    }
  }
};
</script>
<style scoped>
.img_centadd {
  height: 0.22rem;
}
.img_centadd img {
  height: 0.22rem;
  vertical-align: middle;
}
.cent_centsadd {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.15rem;
}
.cent_addssugar {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.wrappers_cents {
  margin-top: 0.5rem;
  overflow-y: scroll;
}
.amputate {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  font-size: 0.14rem;
}
.dele_img {
  width: 0.17rem;
  height: 0.17rem;
}
.seccenwrapper {
  width: 3.75rem;
  padding-bottom: 50px;
  background: #fff;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.sear_img {
  position: absolute;
  right: 0.66rem;
  width: 0.2rem;
  top: 0.13rem;
}
.headersappend {
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
}
.inp_search {
  width: 2.7rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border: none;
  border: 0px;
  outline: none;
  color: #666;
  border-radius: 0.06rem;
  padding-left: 0.3rem;
  position: relative;
  background: rgba(238, 238, 238, 1);
  border-radius: 17px;
  color: rgba(51, 51, 51, 1);
  font-size: 0.14rem;
}
.add_img img {
  height: 0.17rem;
}
</style>

