<template>
  <div class="addreleasewrapper">
    <header class="addheaders">
      <span class="add_img">
        <img @click="recurrence()" src="../../assets/icon/backaddsent.png" alt>
      </span>
      <span>隐私设置</span>
      <span></span>
    </header>
    <section class="addrelease_section">
      <div class="cent_sectionadds">
        <div class="conceal" v-for="item in woodpilelist" :key="item.index">
          <span class="cent_gugeradds">{{item.name}}</span>
          <span>
            <img
              @click="shiftoutClick(item.id)"
              class="realize"
              src="../../assets/icon/spillover_1.png"
              alt
            >
          </span>
        </div>
      </div>
    </section>
    <footer class="footersadd">
      <button class="keep" @click="shieldClick()">添加屏蔽</button>
    </footer>
  </div>
</template>
<script>
import { Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      woodpilelist: []
    };
  },
  created() {
    this.woodpilelistClick();
    Indicator.open();
    setTimeout(() => {
      Indicator.close();
    }, 1000);
  },
  methods: {
    //查看隐私列表
    woodpilelistClick() {
      this.$axios
        .post(window.ajaxSrc + "/client/user/myshield", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : ""
        })
        .then(res => {
          this.woodpilelist = res.data.data;
          console.log(res);
        });
    },
    recurrence() {
      this.$router.push({ name: "system" });
    },
    shieldClick() {
      this.$router.push({ name: "shieldcompany" });
    },
    //移除屏蔽
    shiftoutClick(strId) {
      this.$axios
        .post(window.ajaxSrc + "/client/user/delshield", {
          token: localStorage.getItem("token"),
          company_id: strId
        })
        .then(res => {
          this.woodpilelistClick();
        });
    }
  }
};
</script>
<style scoped>
.cent_gugeradds {
  width: 3.2rem;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hold {
  margin-top: 0.4rem;
  text-align: center;
  position: absolute;
  bottom: 1rem;
  left: 0.9rem;
}
.keep {
  width: 194px;
  height: 36px;
  background: rgba(4, 174, 146, 1);
  border-radius: 5px;
  color: rgba(255, 255, 255, 1);
  font-size: 0.15rem;
  border: none;
  border: 0px;
  outline: none;
}
.conceal {
  height: 0.44rem;
  line-height: 0.44rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.14rem;
  border-bottom: 1px solid #ccc;
  font-size: 0.12rem;
  width: 3.5rem;
  margin-left: 0.12rem;
  color: rgba(51, 51, 51, 1);
}
.realize {
  width: 0.18rem;
  height: 0.18rem;
  vertical-align: middle;
}
.addreleasewrapper {
  width: 3.75rem;
  padding-bottom: 50px;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.addheaders {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  color: rgba(51, 51, 51, 1);
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  font-size: 0.18rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
}
.add_img img {
  height: 0.17rem;
}
.addrelease_section {
  width: 100%;
  height: auto;
  margin-top: 0.5rem;
}
.footersadd {
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  width: 100%;
  margin-top: 0.15rem;
  position: fixed;
  bottom: 1rem;
}
.cent_sectionadds {
  width: 100%;
  height: auto;
  overflow-y: scroll;
}
</style>

