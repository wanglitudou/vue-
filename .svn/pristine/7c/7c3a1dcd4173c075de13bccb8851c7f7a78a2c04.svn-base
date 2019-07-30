<!-- 公司详情 -->
<template>
  <div class="corporationbox">
    <header class="corporation-head">
      <i @click="goBack"><img src="../../assets/icon/backadds.png" alt></i>
      <span>公司详情</span>
      <i></i>
    </header>

    <div class="corporationlist">
      <dl>
        <dt><img :src="company_log" alt></dt>
        <dd><h3>{{company}}</h3></dd>
      </dl>
    </div>

    <div class="corporationAbout">
      <h3 class="title">公司介绍</h3>
      <p>{{company_desc}}</p>
    </div>

    <div class="listBox">
      <h3 class="title">职位招聘</h3>
      <ul class="listfile">
        <li v-for="(item,index) in resumeList">
          <p><span>{{item.position}}</span><b>{{item.rec_num}}</b></p>
          <p>{{item.salary}}</p>
        </li>
       
      </ul>
    </div>

    <div class="corporPhone corpor-items">
      <h3 class="title">联系电话</h3>
      <div class="phone nex">18811126840</div>
    </div>

    <div class="corporAddress corpor-items">
      <h3 class="title">公司地址</h3>
      <div class="address nex">{{province}}{{city}}{{address}}</div>
    </div>

    <div class="corporUrl corpor-items">
      <h3 class="title">公司网址</h3>
      <div class="url nex">{{company_url}}</div>
    </div>
    
    <div class="corporInfo corpor-items">
      <h3 class="title">工商信息</h3>
      <div class="info">
        <img :src="license" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      company_desc:"",
      company_url:"",
      company_log:"",
      company:"",
      license:"",
      province:"",
      city:"",
      address:"",

    };
  },
  mounted() {
    this.companyDeatil();
  },
  //方法集合
  methods: {
    //返回上一级
    goBack() {
      this.$router.go(-1);
    },

    companyDeatil(){
      let that = this;
      that.$axios
        .post(window.ajaxSrc + "/client/user/companyView", {
          company_id: that.$route.query.id
        })
        .then(res => {
          this.company_desc = res.data.data.company_desc;//公司简介
          this.company = res.data.data.company;//公司名称
          this.company_log = res.data.data.company_log;//公司头像
          this.company_url = res.data.data.company_url;//公司网址
          this.license = res.data.data.license;//工商信息
          this.province = res.data.data.province;//省份
          this.city = res.data.data.city;//市
          this.address = res.data.data.address;//详细地址
          this.resumeList = res.data.data.resume;//招聘职位列表
        });
    },
  }
};
</script>
<style scoped>
.corporationbox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
}

.corporation-head {
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  padding: 0 0.2rem;
  font-size: 0.18rem;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #eee;
}

.corporation-head span {
  color: #333333;
}

.corporation-head i:nth-of-type(1) {
  width: 0.18rem;
}

.corporation-head i:nth-of-type(1) > img {
  width: 60%;
}

.corporationlist {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.18rem 0 0.18rem;
}

.corporationlist > dl {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.15rem 0;
}

.corporationlist > dl > dt {
  width: 0.9rem;
  height: 0.9rem;
}

.corporationlist > dl > dt > img {
  width: 100%;
  height: 100%;
}

.corporationlist > dl > dd {
  flex: 1;
  padding-left: 0.18rem;
}

.corporationlist > dl > dd > h3 {
  font-size: 0.18rem;
  color: #121212;
}

.corporationAbout {
  width: 100%;
  padding: 0 0.18rem;
}

.corporationAbout .title {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: #333;
}

.corporationAbout > p {
  font-size: 0.12rem;
  letter-spacing: 0.01rem;
  color: #666;
}

.listBox {
  width: 100%;
  padding: 0 0.18rem;
}

.listBox .title {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: #333;
}

.listBox .listfile {
  width: 100%;
}

.listBox .listfile > li {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.listBox .listfile li > p {
  font-size: 0.12rem;
  font-weight: 800;
}

.listBox .listfile li > p:nth-of-type(1) {
  display: flex;
  justify-content: space-between;
}

.listBox .listfile li > p:nth-of-type(2) {
  color: rgb(231, 102, 102);
}

.listBox .listfile li > p > span {
  color: rgb(89, 185, 145);
}

.listBox .listfile li > p > b {
  width: 1rem;
  text-align: center;
  color: rgb(190, 189, 189);
}

.corpor-items {
  width: 100%;
  padding: 0.1rem 0.18rem 0 0.18rem;
}

.corpor-items .title {
  width: 100%;
  height: 0.38rem;
  line-height: 0.38rem;
  color: #333;
}

.corpor-items .nex {
  font-size: 0.12rem;
  color: #999;
}

.corpor-items .info {
  width: 0.9rem;
  height: 0.9rem;
  text-align: center;
  margin: 0 auto;
}

.corpor-items .info img {
  width: 100%;
  height: 100%;
}
</style>