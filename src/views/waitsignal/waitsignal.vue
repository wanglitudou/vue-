<template>
  <div class="releasewrapper">
    <header class="releaseheaders">
      <span class="add_img" >
        <img src="../../assets/icon/revert.png" alt>
      </span>
      <span>个人资料</span>
      <span></span>
    </header>
    <section class="release_section">
      <div class="material">
        <div class="afresh">
          <img src="../../assets/icon/loading.png" alt>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.afresh img {
  width: 1.6rem;
  height: 1.6rem;
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
