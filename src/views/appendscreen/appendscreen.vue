<template>
  <div class="seccenwrapper">
    <header class="headersappend">
      <span class="add_img">
        <img @click="backaddClick()" src="../../assets/icon/backadds.png" alt>
      </span>
      <span>
        <div class="centfends" @click="enumerateClick()">
          <span>
            <span>{{matters_name}}</span>
          </span>
        </div>
        <img class="drow_img" src="../../assets/icon/fireworkadd.png" alt>
        <input
          class="inp_search"
          @input="inquireClick()"
          @focus="fragranceClick()"
          type="text"
          v-model="position_name"
          @keyup.13="showADD()"
          placeholder="请输入职位"
        >
      </span>
      <span class="asd" @click="showADD()">搜索</span>
    </header>
    <div class="section_wrappers">
      <div class="zhecentadds" v-if="dialogprovince" @click="provinceshurt()">
        <div class="compilecentadds" v-if="dialogprovince">
          <div class="hello">
            <div class="btn-group">
              <ul>
                <li
                  class="addtents"
                  :class="[discoveradd,discoverId == item.id ? discoverActive : '']"
                  v-for="(item,index) in provincelist"
                  v-on:click="provinceClick(item.id,item.name)"
                  :key="index.id"
                >{{item.name}}</li>
              </ul>
            </div>
            <div class="wrap">
              <ul>
                <li
                  class="propagate"
                  :class="[particularadd,particularId == item.id ? particularActive : '']"
                  v-for="(item,index) in citylist"
                  @click="cityClick(item.id)"
                  :key="index"
                >{{item.name}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="zhecent" v-if="pitchondialog" @click="pitchonshut()"></div>
      <div class="parties" v-if="pitchondialog">
        <div
          class="projectadd"
          v-show="collectadd"
          v-for="item in institutionlist"
          :key="item.index"
        >
          <div class="cent-aent" @click="pitchonClick(item.attrs)">{{item.attrs}}</div>
        </div>
      </div>
      <div class="cent_centsadd" v-show="calligraphy">
        <div class="search_quite">
          <span>历史记录</span>
          <span @click="cleanoutClick()">清除记录</span>
        </div>
        <div class="partiesadds">
          <div class="sequenceaddsent">
            <div class="sequiresadd">
              <div
                class="prosentsadd"
                v-for="item in accumulate"
                :key="item.index"
                @click="newsreelClick(item)"
              >{{item}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="technology_add" v-show="actualityadd">
      <div class="divisionwrappers" v-for="items in tabulationlist" :key="items.index">
        <div @click="toDetail(items.id)">
          <div class="establish_show">
            <span v-if="items.t1_name!=null" class="add_eslit">{{items.t1_name}}-{{items.t2_name}}</span>
            <span v-else="items.t1_name==null" class="add_eslit">{{items.t2_name}}</span>
            <span class="add_listasen">{{items.expect_salary}}/月</span>
          </div>
          <div class="invariably_add">
            <div>
              <span class="addsentadd">{{items.inten_area}}</span>
            </div>
            <div>
              <span class="addsentadd">{{items.education}}</span>
            </div>
            <div>
              <span class="addsentadd">{{items.work_experience_time}}</span>
            </div>
            <div>
              <span class="addsentadd">{{items.work_type}}</span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
          <div class="bookedfor">
            <div class="responsibility">
              <span class="sent_pleaces">
                <span v-if="items.avatar!=null">
                  <img :src="items.avatar">
                </span>
                <span v-else="items.avatar==null"></span>
              </span>
              <span class="obligationadd">{{items.company}}</span>
            </div>
            <div class="speedyadd">{{items.create_time}}</div>
          </div>
        </div>
      </div>
      <div class="loadData" v-if="tabulationlist.length">
        <mt-spinner type="fading-circle" color="#05ae92 " v-if="topStatus"></mt-spinner>
        <span v-else>
          <span @click="loadMore()" v-show="this.page < this.total_pages">加载更多</span>
          <span v-show="this.page >= this.total_pages">数据全部加载完成</span>
        </span>
      </div>
      <div class="nodata" v-if="noData">暂无数据</div>
    </div>
  </div>
</template>
<script>
import { Spinner, Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      user_type: "",
      discoveradd: "discoveradd",
      discoverId: "discoverId",
      discoverActive: "discover_Active",
      particularadd: "particularadd",
      particularId: "particularId",
      particularActive: "particular_Active",
      proId: "", //省id
      proName: "", //省名称
      provincelist: [], //省列表
      citylist: [], //市列表
      address: "北京",
      addmasteradds: "北京",
      matters_type: "",
      matters_name: "全国",
      totalNum: "",
      dialogprovince: false, //省市
      page: "1",
      pageSize: "",
      lists: [],
      list: [],
      noData: false,
      //   loadMore: false,
      topStatus: false,
      loading: false,
      count: 0,
      limitNum: 15,
      calligraphy: true,
      search_val: "",
      actualityadd: true,
      tabulationlist: [], //列表数据
      pitchondialog: false, //搜索记录弹框
      // obligeadd: true, //历史记录显示与隐藏
      collectadd: false,
      institutionlist: [], //搜索职位列表
      keyword: "",
      position_name: "",
      search_value: "",
      accumulate: "",
      total_pages: "",
      current: "",
      searchVal: ""
    };
  },
  mounted() {
    localStorage.setItem("particularId", "");
    this.user_type = localStorage.getItem("user_type");
    accumulate: JSON.parse(localStorage.getItem("HistoryList"));
    this.addmasteradds = localStorage.getItem("addmasteradds");
    if (this.addmasteradds != null) {
      this.addmasteradds = localStorage.getItem("addmaster");
    } else {
      this.addmasteradds = "北京";
    }
    // if(this.aaa>15){
    //   this.aaa=true;
    // }
  },
  computed: {
    // tabulationlist: function() {
    //   this.list = this.tabulationlist;
    //   return this.list.slice(0, this.limitNum);
    // }
  },
  created() {
    this.accumulate = JSON.parse(localStorage.getItem("HistoryList"));
    console.log(this.accumulate);
    Indicator.open();
    setTimeout(() => {
      Indicator.close();
    }, 1000);
  },
  methods: {
    //省
    enumerateClick(num, str) {
      this.dialogprovince = true;
      this.$axios
        .post(window.ajaxSrc + "/client/index/area", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : "",
          id: this.proId,
          name: this.proName
        })
        .then(res => {
          if (res.data.code == 200) {
            this.provincelist = res.data.data;
          }
          this.showADD();
        });
    },
    //市
    provinceClick(num, str) {
      this.discoverId = num;
      this.matters_type = num || "";
      this.matters_name = str || "";
      var addmasteradds = localStorage.setItem("addmasteradds", str);
      console.log(num);
      this.clickProvine = num; //获取上一个click的省份id
      this.$axios
        .post(window.ajaxSrc + "/client/index/city", {
          province: num
        })
        .then(res => {
          if (res.status == 200) {
            this.citylist = res.data.data;
          }
        });
    },
    cityClick(cityStr) {
      localStorage.setItem("particularId", cityStr);
      this.particularId = cityStr;
      this.$axios
        .post(window.ajaxSrc + "/client/resume/index", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : "",
          inten_city: cityStr,
          search_value: this.position_name
          // search_value: localStorage.getItem("search_val")
          //   ? localStorage.getItem("search_val")
          //   : ""
        })
        .then(res => {
          if (res.data.success) {
            this.tabulationlist = res.data.data.items;
            // this.recruitment = res.data.data.items;
          }
        });

      //关闭弹窗
      this.dialogprovince = false;
    },
    provinceshurt() {
      // this.dialogprovince = false;
    },
    isNull(str) {
      if (str == "") return true;
      var regu = "^[ ]+$";
      var re = new RegExp(regu);
      return re.test(str);
    },
    //点击进入详情页
    toDetail(resumeId) {
      if (this.user_type == "null") {
        this.$router.push({
          name: "placeparticulars",
          query: { reusemId: resumeId }
        });
      }
      if (this.user_type == 1) {
        this.$router.push({
          name: "placeparticulars",
          query: { reusemId: resumeId }
        });
      } else if (this.user_type == 2) {
        this.$router.push({
          name: "detailcircumstance",
          query: { reusemId: resumeId }
        });
      }
    },
    //历史记录选择
    newsreelClick(str) {
      console.log(str);
      this.position_name = str;
      // localStorage.setItem("search_val", this.position_name);
      // localStorage.getItem("search_val");
      this.showADD();
    },
    //搜索记录弹框
    pitchonshut() {
      this.pitchondialog = false;
    },
    //选中
    pitchonClick(str) {
      this.position_name = str;
      // alert(this.position_name);
      // localStorage.setItem("find_name", str);
      // localStorage.getItem("find_name");
      // console.log("456");
      this.$axios
        .post(window.ajaxSrc + "/client/resume/index", {
          search_value: this.position_name,
          inten_city: localStorage.getItem("particularId")
        })
        .then(res => {
          if (res.data.success) {
            this.tabulationlist = res.data.data.items;
            if (this.tabulationlist.length > 0) {
              $(".section_wrappers").hide();
            }
          }
        })
        .catch(() => {
          console.log("查询失败");
        });

      this.collectadd = false;
      // this.obligeadd = true; //历史记录显示
    },
    //输入injput
    //input焦点事件
    fragranceClick() {
      console.log(1);
      this.collectadd = true;
      this.calligraphy = false;
      this.pitchondialog = true; //弹框
      // this.obligeadd = false; //历史记录隐藏
    },
    inquireClick() {
      this.$axios
        .post(window.ajaxSrc + "/client/position/search", {
          position_name: this.position_name
        })
        .then(res => {
          if (res.data.code == "200") {
            // localStorage.setItem("search_val", this.position_name);
            // localStorage.getItem("search_val");
            this.institutionlist = res.data.data;
            console.log(this.institutionlist);
            console.log("数据");
          }
        });
    },
    showADD() {
      // alert(this.position_name);
      this.collectadd = false;
      this.$axios
        .post(window.ajaxSrc + "/client/resume/index", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : "",
          search_value: this.position_name ? this.position_name : "",
          page: "1",
          pageSize: "15",
          inten_city: localStorage.getItem("particularId")
        })
        .then(res => {
          if (res.data.success) {
            this.tabulationlist = res.data.data.items;
            this.current = res.data.data.current; //当前页
            this.total_pages = res.data.data.total_pages;
            console.log("搜索数据1");
            if (this.tabulationlist.length > 0) {
              $(".sequenceaddsent").hide();
              $(".search_quite").hide();
            }
            if (this.tabulationlist.length == 0) {
              this.noData = true;
            } else if (this.tabulationlist.length < this.count) {
              this.noData = false;
              this.topStatus = false;
              this.loading = false;
            } else {
              this.noData = false;
              this.loading = true;
              this.topStatus = false;
            }
            this.tabulationlist = res.data.data.items;
            console.log("搜多1111");
          }
        })
        .catch(() => {
          console.log("查询失败");
        });
      console.log("搜错11");
      // this.$router.push({
      //   name: "recruit",
      //   query: { search_value: this.position_name }
      // });
      const val = this.position_name;
      const _val = this.isNull(val);
      if (_val) {
        return false;
      }
      console.log(_val);
      console.log(val);
      console.log("222");
      let HistoryList = JSON.parse(localStorage.getItem("HistoryList"));
      if (HistoryList) {
        if (HistoryList.length > 0) {
          // 有数据的话 判断
          if (HistoryList.indexOf(val) !== -1) {
            // 有相同的，先删除, 再添加
            HistoryList.splice(HistoryList.indexOf(val), 1);
          }
        }
      } else {
        HistoryList = [];
      }
      console.log(HistoryList);
      HistoryList.unshift(val);
      if (HistoryList.length > 9) {
        // 保留九=个值;
        HistoryList.pop();
      }
      localStorage.setItem("HistoryList", JSON.stringify(HistoryList));
    },
    loadMore() {
      this.topStatus = true;
      setTimeout(() => {
        this.topStatus = false;
        // this.limitNum = this.limitNum + 5;
        // this.page++;
        this.$axios
          .post(window.ajaxSrc + "/client/resume/index", {
            search_value: this.position_name,
            page: ++this.page,
            pageSize: this.limitNum
          })
          .then(res => {
            if (res.data.success) {
              this.tabulationlist = this.tabulationlist.concat(
                res.data.data.items
              );
              console.log(res.data.data.items);
            }
          })
          .catch(() => {
            console.log("查询失败");
          });
      }, 500);
    },
    //清除记录
    cleanoutClick() {
      localStorage.removeItem("HistoryList");
      this.accumulate = "";
    },
    show(keyword) {},
    backaddClick() {
      this.$router.push({ name: "recruit" });
    }
  }
};
</script>
<style scoped>
.obligationadd {
  /* display: block; */
  /* width: 100px; */
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
}
.asd {
  color: #000;
}
.loadData {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  line-height: 30px;
  color: #05ae92;
  font-size: 14px;
}
.nodata {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 14px;
  color: #05ae92;
  align-items: center;
  justify-content: center;
}
.loadData {
  width: 96%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #05ae92;
  font-size: 16px;
}
.establish_show {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  font-size: 0.15rem;
}
.technology_add {
  width: 100%;
  overflow-y: scroll;
  margin-top: 0.2rem;
  margin-top: 0.5rem;
  background: rgba(238, 238, 238, 1);
}
.divisionwrappers {
  width: 100%;
  height: 1.6rem;
  background: rgba(255, 255, 255, 1);
  margin-bottom: 0.05rem;
  border-radius: 0.05rem;
}
.add_eslit {
  color: rgba(51, 51, 51, 1);
}
.add_listasen {
  color: rgba(255, 64, 39, 1);
}
.invariably_add {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: rgba(153, 153, 153, 1);
  font-size: 0.12rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
}
.addsentadd {
  background: rgba(242, 242, 242, 1);
  padding: 0.05rem;
}
.prosentsadd {
  border-radius: 0.1rem;
  height: 0.32rem;
  line-height: 0.32rem;
  background: #eee;
  float: left;
  color: #333;
  margin-left: 0.05rem;
  margin-top: 0.1rem;
  padding: 0 0.05rem;
}
.bookedfor {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
}
.responsibility {
  color: rgba(51, 51, 51, 1);
  font-size: 0.14rem;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 2.7rem;
}
.sent_pleaces {
  width: 0.4rem;
  height: 0.4rem;
  background: #ccc;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
  margin-bottom: 0.05rem;
}
.sent_pleaces img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
}
.speedyadd {
  font-size: 0.12rem;
  color: rgba(153, 153, 153, 1);
}
.prosentsadd:nth-of-type(4n) {
  clear: left;
}
.sequiresadd {
  width: 100%;
  float: right;
  text-align: center;
}
.sequenceaddsent {
  width: 100%;
  float: right;
  padding: 0 0.3rem;
  text-align: center;
  margin-top: 0.2rem;
}
.partiesadds {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  background: #fff;
}
.deepness {
  padding: 0.05rem 0.05rem;
  background: #dec;
  border-radius: 0.05rem;
}
.parties {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 100%;
  left: calc(50% - 188px);
  z-index: 100;
  background: #fff;
}
.zhecent {
  width: 100%;
  position: fixed;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 50;
}
.translate {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 4rem;
  position: fixed;
  left: calc(50% - 188px);
  bottom: 25%;
  z-index: 100;
  background: #fff;
}
.cent-aent {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.12rem;
  color: #666;
  margin-left: 0.2rem;
}
.cent-aent:hover {
  color: #04ae92;
}

.projectadd {
  width: 100%;
  height: auto;
  background: #eee;
}
.address_cent {
  position: absolute;
  left: 0.6rem;
  top: 0;
  color: #666;
  z-index: 99;
}
.findadd {
  color: #666;
}
.culumv {
  padding: 0.08rem 0.06rem;
  color: #666;
  font-size: 0.14rem;
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
.asent_ass {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
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
  top: 0.17rem;
  left: 1rem;
  z-index: 10;
  vertical-align: middle;
}
.centfends {
  position: absolute;
  width: 0.5rem;
  height: 0.2rem;
  line-height: 0.2rem;
  top: 0.12rem;
  z-index: 100;
  margin-left: 0.2rem;
  text-align: center;
  color: #333;
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
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  margin-bottom: 0.07rem;
  position: fixed;
}
.inp_search {
  width: 3rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border: none;
  border: 0px;
  outline: none;
  color: #666;
  background: rgba(238, 238, 238, 1);
  border-radius: 0.17rem;
  padding-left: 0.9rem;
  position: relative;
}
.add_img img {
  height: 0.17rem;
  vertical-align: middle;
}
.search_quite {
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  margin-top: 0.4rem;
}
.thekeep {
  width: 100%;
}
.propagate {
  width: 1rem;
  color: rgba(136, 136, 136, 1);
  text-align: center;
  line-height: 0.44rem;
}
.compilecentadds {
  width: 3.75rem;
  height: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: #fff;
  z-index: 0;
  /* border: 1px solid blue; */
}
.hello {
  display: flex;
  height: 100%;
  overflow-y: auto;
}
.btn-group {
  width: 40%;
  line-height: 0.44rem;
  overflow-y: scroll;
  /* height: 4rem; */
}
.addtents {
  color: rgba(136, 136, 136, 1);
  text-align: center;
}
.wrapadd {
  width: 1rem;
  text-align: center;
}
.propagate:hover {
  color: #05ae92;
}
.discover_Active {
  color: #05ae92;
}
.particular_Active {
  color: #05ae92;
}
.zhecentadds {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 50;
}
</style>

