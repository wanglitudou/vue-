<template>
  <div class="seccenwrapper">
    <header class="headersappend">
      <span class="add_img">
        <img src="../../assets/icon/revert.png" alt>
      </span>
      <span>
        <img class="drow_img" src="../../assets/icon/dropdown.png" alt>
        <input class="inp_search" type="text">
        <img class="sear_img" src="../../assets/icon/sousuo.png" alt>
      </span>
      <span>搜索</span>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
.section_wrap {
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
.drow_img {
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  top: 0.2rem;
  margin-left: 0.1rem;
  z-index: 10;
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
  color: #fff;
  background: #699;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  margin-bottom: 0.07rem;
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
}
.add_img img {
  height: 0.17rem;
}
</style>

