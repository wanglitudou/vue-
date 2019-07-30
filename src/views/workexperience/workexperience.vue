<template>
  <div class="recruitwrapper">
    <header class="releaseheaders">
      <span class="add_img">
        <img @click="toRation()" src="../../assets/icon/backaddsent.png" alt>
      </span>
      <span>工作经历</span>
      <span class="add_img">
        <img @click="addStr()" src="../../assets/icon/urceadd_1.png" alt>
      </span>
    </header>
    <section class="addworksections">
      <div class="experience" v-for="(item,index) in curriculumlist" :key="index">
        <div class="distance">
          <div class="designation">
            <div class="desi_name">公司名称</div>
            <div class="plece_input">
              <input type="text" v-model="item.comany_name" placeholder="请输入公司名称" class="inp_plac">
            </div>
          </div>
          <div class="operation">
            <div class="work_time">开始时间</div>
            <div class="action_time">
              <div>
                <div class="block">
                  <el-date-picker
                    class="data_time"
                    v-model="item.job_start_time"
                    type="date"
                    format="yyyy-MM"
                    value-format="yyyy-MM"
                    placeholder="开始时间"
                  ></el-date-picker>
                </div>
              </div>
            </div>
          </div>
          <div class="operation">
            <div class="work_time">结束时间</div>
            <div class="action_time">
              <div>
                <el-date-picker
                  class="data_time"
                  v-model="item.job_end_time"
                  type="date"
                  format="yyyy-MM"
                  value-format="yyyy-MM"
                  placeholder="结束时间"
                ></el-date-picker>
              </div>
            </div>
          </div>
          <div class="designation">
            <div class="desi_name">所任职位</div>
            <div class="plece_input">
              <input type="text" v-model="item.job_name" placeholder="请输入职位" class="inp_plac">
            </div>
          </div>
          <div class="achievement">
            <div class="outstanding">工作业绩</div>
            <div class="circumstantial">
              <textarea
                id="text_inp"
                class="text_inp"
                @input="monitorClick()"
                v-model="item.job_contents"
                maxlength="500"
                placeholder="输入内容不超过500个字"
              ></textarea>
              <div class="cent_fisuger">
                <span>
                  <span>{{grounds}}</span>/
                  <span>500</span>
                </span>
              </div>
            </div>
          </div>
          <div class="del-add">
            <div></div>
            <div>
              <img @click="deleStr(index)" src="../../assets/icon/cutout.png" alt>
            </div>
          </div>
        </div>
      </div>
      <div class="experience" v-show="indication">
        <div class="distance">
          <div class="designation">
            <div class="desi_name">公司名称</div>
            <div class="plece_input">
              <input type="text" v-model="workExperience.comany_name" placeholder="请输入公司名称" class="inp_plac">
            </div>
          </div>
          <div class="operation">
            <div class="work_time">工作时间</div>
            <div class="action_time">
              <div>
                <div class="block">
                  <el-date-picker
                    class="data_time"
                    v-model="workExperience.job_start_time"
                    type="date"
                    format="yyyy-MM"
                    value-format="yyyy-MM"
                    placeholder="开始时间"
                  ></el-date-picker>
                </div>
              </div>
            </div>
          </div>
          <div class="operation cent_suger">
            <div class="work_time">工作时间</div>
            <div class="action_time">
              <div>
                <el-date-picker
                  class="data_time"
                  v-model="workExperience.job_end_time"
                  type="date"
                  format="yyyy-MM"
                  value-format="yyyy-MM"
                  placeholder="结束时间"
                ></el-date-picker>
              </div>
            </div>
          </div>
          <div class="designation">
            <div class="desi_name">所任职位</div>
            <div class="plece_input">
              <input type="text" v-model="workExperience.job_name" placeholder="请输入职位" class="inp_plac">
            </div>
          </div>
          <div class="achievement">
            <div class="outstanding">工作业绩</div>
            <div class="circumstantial">
              <textarea
                id="text_inp"
                class="text_inp"
                @input="monitorClick()"
                v-model="workExperience.job_contents"
                maxlength="500"
                placeholder="输入内容不超过500个字"
              ></textarea>
              <div class="cent_fisuger">
                <span>
                  <span>{{grounds}}</span>/
                  <span>500</span>
                </span>
              </div>
            </div>
          </div>
          <div class="del-add">
            <div></div>
            <div>
              <img @click="hideStr()" src="../../assets/icon/cutout.png" alt>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="conservesave">
      <button @click="conservation()" class="conserve">保存</button>
    </footer>
  </div>
</template>
<script>
import Calendar from "vue-mobile-calendar";
// import { Popup, Toast,Indicator } from "vant";
import { Popup, Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      grounds: "0",
      indication: true,
      occupationallist: [],
      workExperience: {
        job_start_time: "",
        job_end_time: "",
        comany_name: "",
        job_name: "",
        job_contents: ""
      },
      curricumlist: "",
      pickerOptions1: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      companyname: "", //工作名称
      assumeoffice: "", //所任职位
      achievement: "", //工作业绩
      showadd: false,
      show: false,
      starttime: "", //开始时间
      terminaltime: "", //结束时间
      curriculumlist: [], //存放列表
      data: {
        resbudId: ""
      }
    };
  },
  mounted() {
    this.data.resbudId = this.$route.query.resbudId;
    let curricumlist = localStorage.getItem("curricumlist");
    if (curricumlist) {
      curricumlist = JSON.parse(curricumlist);
      this.curriculumlist = curricumlist;
      if (this.curriculumlist.length > 0) {
        this.indication = false;
      }
    }
  },
  created() {
    Indicator.open();
    setTimeout(() => {
      Indicator.close();
    }, 1000);
  },
  methods: {
    //监听
    monitorClick() {
      this.grounds = this.workExperience.job_contents.length;
      if (this.grounds > 500) {
        return false;
      }
    },
    toRation() {
      this.$router.push({ name: "issueresume" });
    },
    //保存
    conservation() {
      if (this.workExperience.comany_name == "") {
        Toast("请输入公司名称");
        return false;
      }
      if (this.workExperience.job_name == "") {
        Toast("请输入职位名称");
        return false;
      }
      if (this.workExperience.job_start_time == "") {
        Toast("请输入开始时间");
        return false;
      }
      if (this.workExperience.job_end_time == "") {
        Toast("请输入结束时间");
        return false;
      }
      if (this.workExperience.job_contents == "") {
        Toast("请输入工作业绩");
        return false;
      }
      const workExperience = this.workExperience;
      let isValue = true;
      //判断是否有空值
      for (let prop in workExperience) {
        if (!workExperience[prop]) {
          isValue = false;
          break;
        }
      }
      //数据填充完毕添加
      if (isValue) {
        this.indication = false;
        console.log(isValue);
        console.log("进来的value");
        if (this.workExperience.length != 0) {
          this.curriculumlist.push(Object.assign({}, this.workExperience));
          // return false;
        }
        // this.curriculumlist.push(Object.assign({}, this.workExperience));
        const sendingdatalist = this.curriculumlist;
        console.log(sendingdatalist);
        console.log("工作经历数据1");
        const delicacylist = JSON.stringify(sendingdatalist);
        localStorage.setItem("curricumlist", delicacylist);
        this.$router.go(-1); //返回到上一级
        // this.$router.push({ name: "issueresume" });
      }
    },
    //添加
    addStr() {
      this.indication = true;
    },
    //删除
    deleStr(index) {
      this.curriculumlist.splice(index, 1);
      const curriculumlist = this.curriculumlist;
      localStorage.setItem("curricumlist", JSON.stringify(curriculumlist));
    },
    //隐藏
    hideStr() {
      this.indication = false;
      this.workExperience = {
        job_start_time: "",
        job_end_time: "",
        comany_name: "",
        job_name: "",
        job_contents: ""
      };
    }
  }
};
</script>
<style scoped>
.circumstantial {
  position: relative;
}
.cent_fisuger {
  height: 0.3rem;
  position: absolute;
  right: 0;
  bottom: 0;
}
.cent_suger {
  margin-top: 0.15rem;
}
.del-add {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
}
.distance {
  margin-bottom: 0.2rem;
}
.recruitwrapper /deep/ .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 1.8rem;
  height: 0.3rem;
}
.conservesave {
  width: 100%;
  height: 0.5rem;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0rem;
  z-index: 0;
  background: #fff;
}
.conserve {
  width: 194px;
  height: 36px;
  background: rgba(4, 174, 146, 1);
  border-radius: 5px;
  font-size: 0.15rem;
  border: none;
  border: 0px;
  outline: none;
  color: #fff;
}
.deleatconvers {
  width: 1rem;
  height: 0.35rem;
  line-height: 0.35rem;
  color: #fff;
  background: #fff;
  font-size: 0.15rem;
  border: none;
  border: 0px;
  outline: none;
  color: #699;
  border: 1px solid #699;
  border-radius: 0.04rem;
}
.pronounced {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
}
.text_inp {
  width: 100%;
  height: 2rem;
  border: none;
  background: rgba(248, 248, 248, 1);
  padding-left: 0.1rem;
  border: 1px solid #ccc;
}
.text_inp:focus {
  outline: none;
}
.outstanding {
  height: 0.7rem;
  line-height: 0.7rem;
  color: rgba(51, 51, 51, 1);
  font-size: 0.14rem;
}
.inp_plac {
  width: 100%;
  border: 0;
  outline: none;
  cursor: pointer;
  padding-left: 0.1rem;
  text-align: right;
}
.utmost {
  font-size: 0.14rem;
  color: rgba(153, 153, 153, 1);
}
.infoe_begin {
  font-size: 0.12rem;
  margin-left: 0.1rem;
  margin-right: 0.2rem;
}
.addworksections {
  height: auto;
  margin-left: 0.16rem;
  margin-right: 0.16rem;
  margin-top: 0.44rem;
}
.operation {
  height: 0.4rem;
  line-height: 0.44rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0.15rem;
}
.designation {
  height: 0.4rem;
  line-height: 0.44rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  margin-top: 0.15rem;
}
.plece_input {
  width: 2.7rem;
}
.recruitwrapper {
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
  color: #333;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  margin-bottom: 0.07rem;
  display: flex;
  padding: 0 0.1rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}
.add_img img {
  height: 0.22rem;
  vertical-align: middle;
}
</style>
