<template>
  <div>
    <Button @click="removeadd()">点击</Button>
    <div class="zhe" v-if="dialog" @click="catal_ss"></div>
    <div class="posCont" v-if="dialog">
      <div class="tit_add">
      </div>
      <div class="give_add"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      textarea: ""
    };
  },
  components: {},
  methods: {
    removeadd() {
      let that = this;
      that.dialog = true;
    },
    catal_ss() {
      let that = this;
      that.dialog = false;
    }
  }
};
</script>
<style scoped>
.give_add {
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.zhe {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 50;
}
.posCont {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 250px;
  position: fixed;
  /* left: calc(50% - 300px); */
  top: calc(50% - 150px);
  z-index: 100;
  background: #fff;
}
.tit_add {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}
</style>
