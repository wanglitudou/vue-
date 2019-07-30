<template>
  <div class="worappessent">
    <header class="releaseheaders">
      <span class="add_img">
        <img @click="tobackClick()" src="../../assets/icon/backadds.png" alt>
      </span>
      <span>客服</span>
      <span></span>
    </header>
    <div class="wrapper_cents">
       <span>电话:</span> <i>17710531825</i>
                        
    </div>
  </div>
</template>
<script>
import { Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {};
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
  text-align: center;
  margin-top:.5rem;
}
.wrapper_cents span{
  font-size: 18px;
  color:#333;
}
.wrapper_cents i{
  font-size: 18px;
  color:#999;
  font-style: normal;
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


