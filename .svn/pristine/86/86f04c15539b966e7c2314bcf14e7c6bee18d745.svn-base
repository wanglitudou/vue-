<template>
  <div class="worappessent">
    <header class="releaseheaders">
      <span class="add_img">
        <img @click="tobackClick()" src="../../assets/icon/backadds.png" alt>
      </span>
      <span>关于我们</span>
      <span></span>
    </header>
    <div class="wrapper_cents">
      <div class="cent_addds">
        <img src="../../assets/icon/checkout_1.jpg" alt>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {};
  },
  created() {
    Indicator.open();
    setTimeout(() => {
      Indicator.close();
    }, 1000);
  },
  methods: {
    //返回上一级
    tobackClick() {
      this.$router.push({ name: "mine" });
    }
  }
};
</script>
<style scoped>
.wrapper_cents {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
}
.worappessent {
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
  color: rgba(51, 51, 51, 1);
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  margin-bottom: 0.07rem;
  font-size: 0.18rem;
}
.add_img img {
  height: 0.22rem;
}
.cent_addds img {
  width: 100%;
  height: 100%;
}
</style>


