<!-- 招聘企业 -->
<template>
  <div class="firmbox">
    <header class="firm-head">
      <i @click="goBack">
        <img src="../../assets/icon/backadds.png" alt>
      </i>
      <span>招聘企业</span>
      <i></i>
    </header>

    <div class="firmlist">
      <dl v-for="(item,index) in listArr" :key="index" @click="toCorporation(item.id)">
        <dt>
          <img :src="item.company_log" alt>
        </dt>
        <dd>
          <div class="Cent_py">{{item.company}}</div>
          <p>
            <span v-if="item.company_desc!='' ">描述：</span>
            {{item.company_desc}}
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      listArr: []
    };
  },
  mounted() {
    this.firmList();
  },
  //方法集合
  methods: {
    //返回上一级
    goBack() {
      this.$router.go(-1);
    },

    firmList() {
      let that = this;
      that.$axios
        .post(window.ajaxSrc + "/client/index/companyList", {})
        .then(res => {
          this.listArr = res.data.data.items;
        });
    },

    //跳到-公司详情
    toCorporation(companyId) {
      this.$router.push({ name: "corporation", query: { id: companyId } });
    }
  }
};
</script>
<style scoped>
.Cent_py {
  width: 2rem;
  color: #121212;
  font-size: 0.18rem;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.firmbox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.firm-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  padding: 0 0.2rem;
  font-size: 0.18rem;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #ddd;
}

.firm-head span {
  color: #333333;
}

.firm-head i:nth-of-type(1) {
  width: 0.18rem;
}

.firm-head i:nth-of-type(1) > img {
  width: 60%;
}

.firmlist {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0.18rem;
}

.firmlist > dl {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 0.01rem solid #eee;
  padding: 0.15rem 0;
}

.firmlist > dl > dt {
  width: 0.82rem;
  height: 0.79rem;
}

.firmlist > dl > dt > img {
  width: 100%;
  height: 100%;
}

.firmlist > dl > dd {
  flex: 1;
  padding-left: 0.18rem;
}

.firmlist > dl > dd > h3 {
  font-size: 0.18rem;
  color: #121212;
}

.firmlist > dl > dd > p {
  margin-top: 0.33rem;
  color: #999999;
}

.firmlist > dl > dd > p:nth-of-type(1) {
  font-size: 0.12rem;
}

.firmlist > dl > dd > p:nth-of-type(2) {
  font-size: 0.14rem;
}
</style>