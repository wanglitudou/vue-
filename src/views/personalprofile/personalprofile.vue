<template>
  <div class="releasewrapper">
    <header class="releaseheaders">
      <span class="add_img">
        <img src="../../assets/icon/revert.png" alt>
      </span>
      <span>个人资料</span>
      <span></span>
    </header>
    <section class="release_section">
      <div class="material">
        <div class="afresh">
          <img src="../../assets/icon/stressing.png" alt>
        </div>
        <p class="interrupted">网络不通，赶快连网再试</p>
        <p class="bowling">点击重新加载</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.interrupted {
  font-size: 0.14rem;
  color: rgba(154, 159, 180, 1);
  margin-top: 0.15rem;
}
.bowling {
  font-size: 0.14rem;
  color: rgba(102, 153, 153, 1);
  margin-top: 0.2rem;
}
.afresh img {
  width: 1.3rem;
  height: 1.3rem;
}
.afresh {
  text-align: center;
}
.material {
  width: 100%;
  height: 1.5rem;
  margin-top: 1.5rem;
  text-align: center;
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
  color: #fff;
  background: #699;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  margin-bottom: 0.07rem;
}
.add_img img {
  height: 0.17rem;
}
.release_section {
  width: 100%;
  height: auto;
}
</style>
