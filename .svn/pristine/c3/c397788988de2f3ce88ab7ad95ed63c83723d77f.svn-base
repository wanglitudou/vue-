<template>
  <div class="resettingrapper">
    <header class="releaseheaders">
      <span class="add_img">
        <img @click="tofirst()" src="../../assets/icon/backadds.png" alt>
      </span>
      <span>创建简历</span>
      <span>
        <button class="btn_sents" @click="annoulistClick()">发布</button>
      </span>
    </header>
    <section class="section_resetting">
      <div class="publish">
        <!-- 职位名称 -->
        <div class="zhecent" v-if="dialogcomponents" @click="componentsshurt()"></div>
        <div class="translate" v-if="dialogcomponents">
          <div class="hello">
            <div class="btn-group">
              <ul>
                <li
                  class="asdsent"
                  :class="{'resume-active' : privacysId === item.cid}"
                  v-for="(item,index) in componentslist"
                  @click="sentcomponClick(item.cid,item.name,index)"
                  :key="item.cid"
                >{{item.name}}</li>
              </ul>
            </div>
            <div class="wrap">
              <ul>
                <li
                  class="propagate"
                  :class="{'resume-active' : grade_type === item.cid}"
                  v-for="item in harvesaddtlist"
                  @click="harvestClick(item.cid,item.name)"
                  :key="item.cid"
                >{{item.name}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="place">
          <span>职位名称</span>
          <span class="orientate centaddhigh" @click="componentsClick()">
            <span>{{compest_name}}</span>
            <span>{{grade_name}}</span>
            <img class="img_res" src="../../assets/icon/rightadds.png" alt>
          </span>
        </div>

        <!-- 意向城市 -->
        <div class="zhecent" v-if="dialogintention" @click="intentionshurt()"></div>
        <div class="translate" v-if="dialogintention">
          <div class="hello">
            <div class="btn-group">
              <ul>
                <li
                  class="addtents"
                  :class="{'resume-active' : prov_type === item.id}"
                  v-for="item in provinceList"
                  @click="provinceClick(item.id,item.name)"
                  :key="item.id"
                >{{item.name}}</li>
              </ul>
            </div>
            <div class="wrap">
              <ul>
                <li
                  class="propagate"
                  :class="{'resume-active' : citys_type === item.id}"
                  v-for="item in citylist"
                  @click="cityClick(item.id,item.name)"
                  :key="item.id"
                >{{item.name}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="place">
          <span>意向城市</span>
          <span class="orientate centaddhigh" @click="purposeClick()">
            <span>{{prov_name}}</span>
            <span>{{citys_name}}</span>
            <img class="img_res" src="../../assets/icon/rightadds.png" alt>
          </span>
        </div>

        <!-- 工作年限 -->
        <div class="zhecent" v-if="dialogquousque" @click="quousqueshurt()">
          <div class="germinationcent" v-if="dialogquousque">
            <div class="germinationsuger">
              <div
                class="germinationadds"
                :class="{'resume-active' : durationtId === item.id}"
                v-for="item in quousquelist"
                @click="sendClick(item.id,item.name)"
                :key="item.id"
              >{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="place">
          <span>工作年限</span>
          <span class="orientate centaddhigh" @click="quousqueadd()">
            <span>{{send_name}}</span>
            <img class="img_res" src="../../assets/icon/rightadds.png" alt>
          </span>
        </div>

        <!-- 求职类型 -->
        <div class="place">
          <span>求职类型</span>
          <div class="showCream">
            <span
              v-for="(item ,index) in workTypeList"
              :key="index"
              @click="zwType(index+1)"
              :class="{'incumbency-active' : workType == index+1}"
            >{{item}}</span>
          </div>
        </div>

        <!-- 学历 -->
        <div class="zhecent" v-if="dialogrecord" @click="endecutshurt()"></div>
        <div class="correctcentSugar" v-if="dialogrecord">
          <div class="correctaddslist">
            <div
              class="correctfindadds"
              :class="{'resume-active' : persp_type === item.id}"
              @click="secondaryClick(item.id,item.name)"
              v-for="item in endut_list"
              :key="item.id"
            >{{item.name}}</div>
          </div>
        </div>
        <div class="place">
          <span>学历</span>
          <span class="orientate centaddhigh" @click="educational()">
            <span>{{persp_name}}</span>
            <img class="img_res" src="../../assets/icon/rightadds.png" alt>
          </span>
        </div>

        <!-- 当前状态 -->
        <div class="place">
          <span>当前状态</span>
          <div class="conditionStatus">
            <span
              v-for="(item,index) in presentlist"
              :key="index"
              @click="currentlyClick(index+1)"
              :class="{'incumbency-active' : currentType == index+1}"
            >{{item}}</span>
          </div>
        </div>

        <!-- 期望薪资 -->
        <div class="zhecent" v-if="dialogexpect" @click="expectshurt()"></div>
        <div class="aspirationcentadds" v-if="dialogexpect">
          <div class="aspirationcentlist">
            <div
              class="aspirationsugar"
              :class="{'resume-active' : correctId === item.id}"
              @click="sentenceClick(item.id,item.name)"
              v-for="item in accountlist"
              :key="item.index"
            >{{item.name}}</div>
          </div>
        </div>
        <div class="place">
          <span>期望薪资</span>
          <span class="orientate centaddhigh" @click="expectation()">
            <span>{{senten_name}}</span>
            <img class="img_res" src="../../assets/icon/rightadds.png" alt>
          </span>
        </div>

        <!-- 所获证书 -->
        <div class="zhecent" v-if="dialogdiploma" @click="diplomashurt()"></div>
        <div class="translate" v-if="dialogdiploma">
          <div class="progerds">
            <div class="zhecent" v-if="dialogcredentials" @click="introdsgut()"></div>
            <div class="translate" v-if="dialogcredentials">
              <div class="hello">
                <div class="btn-group">
                  <ul>
                    <li
                      :class="{'resume-active': index === sentaddsfix}"
                      v-for="(item,index) in diplomaList"
                      v-on:click="endowmentsClick(item.cid,item.ch_name,index)"
                      :key="item.cid"
                    >{{item.ch_name}}</li>
                  </ul>
                </div>
                <div class="wrapadd">
                  <ul>
                    <li
                      class="propagate"
                      v-for="item in naturalList"
                      @click="naturalClick(item.cid,item.ch_name)"
                      :key="item.cid"
                    >{{item.ch_name}}</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li
                      class="addsprogress"
                      v-for="item in townlist"
                      @click="townlistClick(item.id,item.name)"
                      :key="item.id"
                    >{{item.name}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="add_wraapper" @click="introduceClick()">
              <img src="../../assets/icon/add_addsent.png" alt>添加证书
            </div>
            <div class="pictogram" v-for="(item,index) in mapArr" :key="item.index">
              <span class="subsistcentlist">{{item.ch_nameadd}}</span>
              <span class="diplomacentlist">{{item.ch_name}}</span>
              <span class="susurratelist">{{item.name}}</span>
              <span class="animalladds">
                <img
                  class="delet_sents"
                  @click="deleaddClick(index)"
                  src="../../assets/icon/delect_add.png"
                  alt
                >
              </span>
            </div>
          </div>
          <div class="delighted">
            <span class="center_add" @click="defendClick()">保存</span>
            <span class="center_delet" @click="diplomashurt()">取消</span>
          </div>
        </div>
        <div class="place">
          <span>所获证书</span>
          <span class="orientate centaddhigh" @click="diplomaClick()">
            <span></span>
            <img class="img_res" src="../../assets/icon/rightadds.png" alt>
          </span>
        </div>

        <!-- 证书状态 -->
        <div class="zhecent" v-if="dialogcondition" @click="conditionshurt()">
          <div class="summarizing" v-if="dialogcondition">
            <div class="analysis">
              <div class="cent_left_add">
                <div class="add_visiit">
                  <div
                    class="positional"
                    :class="{'status-active' : column_index === index}"
                    @click="obtainedClick(index,item)"
                    v-for="(item,index) in column_status"
                    :key="item.column_idF"
                    v-if="(item.column_idF) == 1 || (item.column_idF) == 2 || (item.column_idF) == 3 || (item.column_idF) == 7"
                  >{{item.ch_name}}</div>
                </div>
                <div class="add_wonder">
                  <div
                    class="addinstic"
                    :class="{'status-active' : statusId === item.id}"
                    @click="includClick(item)"
                    v-for="(item,index) in incumbencylist"
                    :key="index"
                  >{{item.name}}</div>
                </div>
              </div>
              <div class="cent_right_add">
                <div class="delighted">
                  <span class="center_add" @click="rotatingClick()">保存</span>
                  <span class="center_delet" @click="platformClick()">取消</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="place">
          <span>证书状态</span>
          <span class="orientate centaddhigh" @click="conditionClick()">
            <span></span>
            <img class="img_res" src="../../assets/icon/rightadds.png" alt>
          </span>
        </div>

        <!-- 职称证性质 -->
        <div class="zhecent" v-if="dialogtechnical" @click="technicalshut()">
          <div class="partiesadds" v-if="dialogtechnical">
            <div class="behalf">
              <div class="add_wise">
                <div
                  class="add_student"
                  :class="{'status-active' : natureIndex === index}"
                  @click="academicClick(item,index)"
                  v-for="(item,index) in column_type"
                  :key="index"
                  v-if="(item.column_idF) == 8 || (item.column_idF) == 9 || (item.column_idF) == 10 || (item.column_idF) == 11"
                >{{item.ch_name}}</div>
              </div>
              <div class="add_guiters">
                <div
                  class="addinstic"
                  :class="{'status-active' : natureActive.indexOf(item.id) != -1}"
                  @click="reviewClick(item.id,item.name)"
                  v-for="item in listadd"
                  :key="item.id"
                >{{item.name}}</div>
              </div>
            </div>
            <div class="conserve">
              <span class="ctal_add" @click="characterClick()">保存</span>
              <span class="quest_sel" @click="qualityClick()">取消</span>
            </div>
          </div>
        </div>
        <div class="place">
          <span>职称证性质</span>
          <span class="orientate centaddhigh" @click="technicalClick()">
            <img class="img_res" src="../../assets/icon/rightadds.png" alt>
          </span>
        </div>

        <!-- 工作经历 -->
        <div class="place">
          <span>工作经历</span>
          <span class="orientate centaddhigh" @click="regularClick()">
            <span></span>
            <img class="img_res" src="../../assets/icon/rightadds.png" alt>
          </span>
        </div>
      </div>
    </section>

    <!-- 工作经历 -->
    <div class="recruitwrapper" v-if="recruitwrapper">
      <header class="releaseheaders recruitwrapper-header">
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
                <input
                  type="text"
                  v-model="item.comany_name"
                  placeholder="请输入公司名称"
                  class="inp_plac"
                >
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
                <!-- @input="monitorClick()" -->
                <textarea
                  id="text_inp"
                  class="text_inp"
                  @input="echoInput(item.job_contents)"
                  v-model="item.job_contents"
                  maxlength="500"
                  placeholder="输入内容不超过500个字"
                ></textarea>
                <div class="cent_fisuger">
                  <span>
                    <!-- <span>{{grounds}}</span>/ -->
                    <span>{{item.job_contents.length}}</span>/
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

        <div class="experience" v-show="indication || curriculumlist.length <= 0">
          <div class="distance">
            <div class="designation">
              <div class="desi_name">公司名称</div>
              <div class="plece_input">
                <input
                  type="text"
                  v-model="workExperience.comany_name"
                  placeholder="请输入公司名称"
                  class="inp_plac"
                >
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
                <input
                  type="text"
                  v-model="workExperience.job_name"
                  placeholder="请输入职位"
                  class="inp_plac"
                >
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
        <button @click="conservation()" class="recruitwrapper-conserve">保存</button>
      </footer>
    </div>
  </div>
</template>
<script>
import { Popup, Toast, Indicator } from "mint-ui";
import qs from "qs";
import Vue from "vue";
import Calendar from "vue-mobile-calendar";
export default {
  data() {
    return {
      resbudId: "", //编辑的简历id
      privacysId: "", //职位名称选中的一级id
      compest_name: "", //职位名称选中的一级name
      grade_type: "", //职位名称选中的二级id
      grade_name: "", //职位名称选中的二级name
      prov_type: "", //意向城市选中的一级id
      prov_name: "", //意向城市选中的一级name
      citys_type: "", //意向城市选中的二级id
      citys_name: "", //意向城市选中的二级name
      durationtId: "", //工作年限选中id
      send_name: "", //工作年限选中name
      persp_type: "", //学历选中的id
      persp_name: "", //学历选中的name
      workTypeList: ["全职", "兼职", "实习"], //求职类型种类
      workType: 1, //求职类型选中
      presentlist: ["离职", "在职", "寻找机会"], //当前状态列表
      currentType: 1, //当前状态选中
      redf_name: "", //当前状态选中name
      correctId: "", //期望薪资当前选中的id
      senten_name: "", //期望薪资当前选中的name
      columnType: "", //职称证性质
      listadd: [
        //职称证性质列表
        { name: "单证", id: "1" },
        { name: "网查", id: "2" },
        { name: "评审表", id: "3" },
        { name: "红头文件", id: "4" }
      ],
      myMap: {}, //新添加的一条证书
      mapArr: [], //所有添加的证书
      column_status: [], //临时存放证书状态
      column_index: "", //证书状态一级选中index
      statusId: "", //证书状态一级选中id
      natureIndex: -1, //职称证性质一级选中index
      natureActive: [], //职称证性质二级选中
      column_type: [], //临时存放职称证性质
      prosId: "",
      cityId: "",
      provinceList: [], //省列表
      citylist: [], //市列表
      dialogcomponents: false, //职位名称
      dialogcredentials: false, //添加证书一级
      dialogrecord: false, //学历
      dialogpresent: false, //当前状态
      dialogexpect: false, //期望薪资
      dialogquousque: false, //工作年限
      dialogintention: false, //意向城市
      dialogdiploma: false,
      dialogcondition: false, //证书状态
      dialogtechnical: false, //职称证性质
      componentslist: [], //职称名称
      harvesaddtlist: [], //职称名字的二级
      endut_list: [], //学历列表
      accountlist: [], //期望薪资
      quousquelist: [], //工作年限
      diplomaList: [], //证书
      naturalList: [], //证书二级
      townlist: [],
      incumbencylist: [
        { name: "初始注册", id: "1" },
        { name: "转注册", id: "2" },
        { name: "转注带B", id: "3" }
      ],
      addtents: "0",
      sentaddsfix: null, //所获证书选中的一级
      grounds: "0",
      indication: false,
      workExperience: {
        job_start_time: "",
        job_end_time: "",
        comany_name: "",
        job_name: "",
        job_contents: ""
      },
      curricumlist: "",
      curriculumlist: [], //存放列表
      recruitwrapper: false
    };
  },
  mounted() {
    const resbudId = this.$route.query.resbudId;
    if (resbudId) {
      this.resbudId = resbudId;
      this.getReverse();
    }
  },
  created() {
    Indicator.open();
    setTimeout(() => {
      Indicator.close();
    }, 1000);
  },
  methods: {
    //调取反显的数据接口show
    getReverse() {
      let self = this;
      self.$axios
        .post(window.ajaxSrc + "/client/resume/show", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : "",
          resume_id: self.resbudId
        })
        .then(res => {
          if (res.data.code == 200) {
            let data = res.data.data;
            console.log("回显数据", data);
            this.privacysId = data.inten_job; //选择的职位名称一级id
            this.grade_type = data.inten_job_pid; //选择的职位名称一级id
            this.compest_name = data.inten_job_name; //选择的职位名称name
            this.prov_type = data.inten_province; //意向省id
            this.citys_type = data.inten_city; //意向市id
            this.prov_name = data.inten_area; //意向城市name
            this.durationtId = data.work_experience_time; //工作年限id
            this.send_name = data.work_experience_name; //工作年限name
            this.workType = data.work_type; //求职类型id
            this.persp_type = data.education; //学历id
            this.persp_name = data.education_name; //学历name
            this.currentType = data.work_status; //当前状态id
            this.correctId = data.expect_salary; //期望薪资id
            this.senten_name = data.expect_salary_name; //期望薪资name
            //所获证书
            let column = data.column;
            this.mapArr = column.map(function(currentValue) {
              currentValue.name = currentValue.column_province_name;
              currentValue.ch_nameadd = currentValue.p_name;
              currentValue.column_idF = currentValue.pid;
              return currentValue;
            });
            //工作经历
            this.curriculumlist = data.job;
            sessionStorage.setItem("curricumlist", JSON.stringify(data.job));
            console.log(this.mapArr);
          }
        });
    },
    //求职类型
    zwType(workType) {
      this.workType = workType;
    },
    //当前状态
    currentlyClick(currentType) {
      this.currentType = currentType;
    },
    //职位名称
    componentsClick() {
      this.dialogcomponents = true;
      this.$axios
        .post(window.ajaxSrc + "/client/position/index", {
          cid: this.cid,
          name: this.name
        })
        .then(res => {
          if (res.status == "200") {
            this.componentslist = res.data.data.items;
          }
        });
    },
    sentcomponClick(num, str, index) {
      this.addtents = index;
      this.privacysId = num;
      this.compest_name = str || "";
      localStorage.setItem("compest_name", this.compest_name);
      this.$axios
        .post(window.ajaxSrc + "/client/position/second", {
          pid: num
        })
        .then(res => {
          if (res.status == 200) {
            this.harvesaddtlist = res.data.data.items;
          }
        });
    },
    //职称名字二级
    harvestClick(num, str) {
      this.grade_type = num || "";
      this.grade_name = str || "";
      localStorage.setItem("grade_type", this.grade_type);
      localStorage.setItem("grade_name", this.grade_name);
      this.dialogcomponents = false;
    },
    //职位名称弹窗
    componentsshurt() {
      this.dialogcomponents = false;
    },
    //工作经历
    regularClick() {
      this.recruitwrapper = true;
      this.grounds = 0;
      if (this.curriculumlist.length <= 0) {
        this.indication = true;
      }
    },
    //返回首页
    tofirst() {
      this.$router.push({ name: "recruit" });
    },
    //工作年限
    quousqueadd() {
      this.dialogquousque = true;
      let that = this;
      that.$axios
        .post(window.ajaxSrc + "/client/index/workexp", {
          id: that.send_type
        })
        .then(res => {
          if (res.status == 200) {
            that.quousquelist = res.data.data;
          }
        });
    },
    //选择工作年限
    sendClick(num, str) {
      this.durationtId = num || ""; //id
      localStorage.setItem("send_type", this.durationtId);
      this.send_name = str || ""; //name
      localStorage.setItem("send_name", this.send_name);
      this.quousqueadd();
      this.dialogquousque = false;
    },
    introdsgut() {
      this.dialogcredentials = false;
    },
    //证书
    diplomaClick() {
      this.dialogdiploma = true;
      this.$axios
        .post(window.ajaxSrc + "/client/column/index", {})
        .then(res => {
          if (res.status == "200") {
            this.diplomaList = res.data.data.items;
          }
        });
    },
    // 证书状态
    conditionClick() {
      localStorage.setItem("cautionlist", JSON.stringify(this.mapArr));
      const mapArr = this.mapArr;
      const column_status_ = JSON.parse(JSON.stringify(mapArr));
      this.column_status = column_status_;
      let arr = [];
      for (var i = 0; i < column_status_.length; i++) {
        arr.push(column_status_[i].column_idF);
      }
      //有一级二级 显示div
      if (
        arr.indexOf("1") > -1 ||
        arr.indexOf("2") > -1 ||
        arr.indexOf("3") > -1 ||
        arr.indexOf("7") > -1
      ) {
        this.dialogcondition = true;
        //默认选中
        for (let i = 0; i < column_status_.length; i++) {
          const column_idF = column_status_[i].column_idF;
          const column_status = column_status_[i].column_status;
          if (
            column_idF == "1" ||
            column_idF == "2" ||
            column_idF == "3" ||
            column_idF == "7"
          ) {
            this.column_index = i;
            this.statusId = column_status;
            break;
          }
        }
      } else {
        return false;
      }
    },
    //职称证
    technicalClick() {
      // this.dialogtechnical = true;
      const mapArr = this.mapArr;
      console.log(mapArr);
      const column_type_ = JSON.parse(JSON.stringify(mapArr));
      this.column_type = column_type_;
      let arr = [];
      for (var i = 0; i < column_type_.length; i++) {
        arr.push(column_type_[i].column_idF);
      }
      console.log(arr);
      //非一级二级 显示div
      if (
        arr.indexOf("8") > -1 ||
        arr.indexOf("9") > -1 ||
        arr.indexOf("10") > -1 ||
        arr.indexOf("11") > -1
      ) {
        this.dialogtechnical = true;
        //默认选中
        for (let i = 0; i < column_type_.length; i++) {
          const column_idF = column_type_[i].column_idF;
          const column_type = column_type_[i].column_type || "";
          if (
            column_idF == "8" ||
            column_idF == "9" ||
            column_idF == "10" ||
            column_idF == "11"
          ) {
            this.natureIndex = i;
            this.natureActive = column_type.split(",");
            break;
          }
        }
      } else {
        return false;
      }
    },
    //证书状态取消
    platformClick() {
      this.column_status = [];
      this.dialogcondition = false;
    },
    //职称证性质保存
    characterClick() {
      let column_type = this.column_type;
      let mapArr = this.mapArr;
      for (var i = 0; i < column_type.length; i++) {
        if (column_type[i].column_type) {
          mapArr[i] = Object.assign({}, column_type[i]);
        }
      }
      this.dialogtechnical = false;
    },
    //职称证性质取消
    qualityClick() {
      this.dialogtechnical = false;
    },
    //职称证性质弹窗
    technicalshut() {
      // this.dialogtechnical = false;
    },
    stateClick() {},
    //证书状态弹窗取消
    conditionshurt() {
      // this.dialogcondition = false;
    },
    endecutshurt() {
      this.dialogrecord = false;
    },
    presentshurt() {
      this.dialogpresent = false;
    },
    //选择学历
    secondaryClick(num, str) {
      this.persp_type = num || ""; //id
      this.persp_name = str || ""; //name
      localStorage.setItem("persp_type", this.persp_type);
      localStorage.setItem("persp_name", this.persp_name);
      this.educational();
      this.dialogrecord = false;
    },
    quousqueshurt() {
      this.dialogquousque = false;
    },
    //学历
    educational() {
      this.dialogrecord = true;
      let that = this;
      that.$axios
        .post(window.ajaxSrc + "/client/index/eduexp", {
          id: that.persp_type
        })
        .then(res => {
          if (res.status == 200) {
            that.endut_list = res.data.data;
          }
        });
    },
    //选择薪资
    sentenceClick(num, str) {
      this.correctId = num || ""; //id
      localStorage.setItem("senten_type", this.correctId);
      this.senten_name = str || ""; //name
      localStorage.setItem("senten_name", this.senten_name);
      this.expectation();
      this.dialogexpect = false;
    },
    //期望薪资
    expectation() {
      this.dialogexpect = true;
      let that = this;
      that.$axios
        .post(window.ajaxSrc + "/client/index/sale", {
          id: that.correctId
        })
        .then(res => {
          if (res.status == 200) {
            that.accountlist = res.data.data;
          }
        });
    },
    //发布列表接口
    annoulistClick() {
      let that = this;
      if (that.compest_name == "") {
        Toast("请选择职称名称");
        return false;
      }
      if (!that.prov_type) {
        Toast("请选择省");
        return false;
      }
      if (!that.citys_type) {
        Toast("请选择市");
        return false;
      }

      if (that.durationtId == "") {
        Toast("请选择工作年限");
        return false;
      }
      if (that.persp_type == "") {
        Toast("请选择学历");
        return false;
      }
      if (that.workType == "") {
        Toast("请选择当前状态");
        return false;
      }
      if (that.correctId == "") {
        Toast("请选择期望薪资");
        return false;
      }
      //工作经历
      var curricumlist =
        JSON.parse(sessionStorage.getItem("curricumlist")) || [];
      let _curricumlist = curricumlist.map(function(currentValue) {
        let value = {};
        if (currentValue.comany_name) {
          value.comany_name = currentValue.comany_name;
        }
        if (currentValue.job_name) {
          value.job_name = currentValue.job_name;
        }
        if (currentValue.job_start_time) {
          value.job_start_time = currentValue.job_start_time;
        }
        if (currentValue.job_end_time) {
          value.job_end_time = currentValue.job_end_time;
        }
        if (currentValue.job_contents) {
          value.job_contents = currentValue.job_contents;
        }
        return value;
      });
      //后台不需要的name在传的时候要删除，id传给后台，name显示页面
      let column = this.mapArr.map(function(currentValue) {
        let value = {};
        if (currentValue.column_id) {
          value.column_id = currentValue.column_id;
        }
        if (currentValue.column_province) {
          value.column_province = currentValue.column_province;
        }
        /* if (currentValue.column_idF) {
			    value.column_city = currentValue.column_idF;
			  } */
        if (currentValue.column_status) {
          value.column_status = currentValue.column_status;
        } else {
          value.column_status = "";
        }

        if (currentValue.column_type) {
          value.column_type = currentValue.column_type;
        } else {
          value.column_type = "";
        }
        return value;
      });
      console.log(this.mapArr, column);

      const resbudId = this.$route.query.resbudId;
      let parameter = {
        token: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
        inten_job: that.grade_type, //职位名称
        inten_province: that.prov_type, //意向省
        inten_city: that.citys_type, //意向市
        work_experience_time: that.durationtId, //工作年限
        work_type: that.workType, //求职类型
        education: that.persp_type, //学历
        work_status: that.currentType, //当前状态
        expect_salary: that.correctId, //期望薪资
        job: encodeURIComponent(JSON.stringify(_curricumlist)),
        column: encodeURIComponent(JSON.stringify(column))
      };
      if (resbudId) {
        parameter.resbudId = resbudId;
      }
      console.log("encode", parameter);
      console.log("不encode", {
        token: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
        inten_job: that.grade_type, //职位名称
        inten_province: that.prov_type, //意向省
        inten_city: that.citys_type, //意向市
        work_experience_time: that.durationtId, //工作年限
        work_type: that.workType, //求职类型
        education: that.persp_type, //学历
        work_status: that.currentType, //当前状态
        expect_salary: that.correctId, //期望薪资
        job: _curricumlist,
        column: column
      });
      that
        .$axios({
          url: window.ajaxSrc + "/client/resume/add",
          method: "post",
          data: parameter,
          transformRequest: [
            function(data) {
              let ret = qs.stringify(data); // 这里必须使用qs库进行转换
              return ret;
            }
          ]
        })
        .then(res => {
          if (res.data.code == "200") {
            Toast("发布成功");
             this.$router.push({ name: "release" });//发布成功，直接跳转到发布页
            // this.$router.push({ name: "recruit" });
          } else {
            Toast(res.data.message);
          }
        });
    },
    expectshurt() {
      this.dialogexpect = false;
    },
    //意向城市
    purposeClick() {
      this.dialogintention = true;
      this.$axios
        .post(window.ajaxSrc + "/client/index/area", {
          id: this.prosId,
          name: this.cityId
        })
        .then(res => {
          if (res.status == "200") {
            this.provinceList = res.data.data;
          }
        });
    },
    //意向城市 点击省获取市列表
    provinceClick(num, str) {
      this.prov_type = num || "";
      this.prov_name = str || "";
      localStorage.setItem("prov_type", this.prov_type);
      localStorage.setItem("prov_name", this.prov_name);
      this.$axios
        .post(window.ajaxSrc + "/client/index/city", {
          province: num
        })
        .then(res => {
          if (res.status == "200") {
            this.citylist = res.data.data;
            console.log(this.citylist);
          }
        });
    },
    //意向城市 点击市列表
    cityClick(num, str) {
      this.citys_type = num || "";
      this.citys_name = str || "";
      localStorage.setItem("citys_type", this.citys_type);
      localStorage.setItem("citys_name", this.citys_name);
      this.dialogintention = false;
    },
    //意向城市 点击遮罩
    intentionshurt() {
      this.dialogintention = false;
    },
    //所获证书一级点击
    endowmentsClick(num, str, index) {
      this.sentaddsfix = index;
      this.myMap["ch_nameadd"] = str;
      this.$axios
        .post(window.ajaxSrc + "/client/column/second", {
          pid: num
        })
        .then(res => {
          if (res.status == "200") {
            this.naturalList = res.data.data.items;
          }
        });
      this.myMap["column_idF"] = num;
    },

    //所获证书二级点击
    naturalClick(str, num) {
      this.myMap["column_id"] = str; //最终的证书id（只取证书二级id）
      this.myMap["ch_name"] = num;
      this.$axios.post(window.ajaxSrc + "/client/index/area", {}).then(res => {
        if (res.status == "200") {
          this.townlist = res.data.data;
        }
      });
    },
    //所获证书三级点击
    townlistClick(str, num) {
      const column_id = this.myMap.column_id;
      const column_idF = this.myMap.column_idF;
      const mapArr = this.mapArr;
      let isCertificate = true;
      //遍历判断新加的证书是否已存在，修改城市名和id
      for (let i = 0; i < mapArr.length; i++) {
        if (
          mapArr[i].column_id == column_id &&
          mapArr[i].column_idF == column_idF
        ) {
          mapArr[i].column_province = str;
          mapArr[i].name = num;
          isCertificate = false;
          break;
        }
      }
      //不存在则添加
      //if (isCertificate) {
      this.myMap["column_province"] = str;
      this.myMap["name"] = num;
      this.myMap["column_status"] = "";
      this.myMap["column_type"] = "";
      this.mapArr.push(Object.assign({}, this.myMap));
      //}
      this.dialogcredentials = false;
    },
    //所获证书遮罩
    diplomashurt() {
      this.dialogdiploma = false;
    },
    //删除已添加证书
    deleaddClick(index) {
      this.mapArr.splice(index, 1);
      console.log(this.mapArr);
    },
    //保存证书
    defendClick() {
      this.dialogdiploma = false;
      console.log(this.myMap);
    },
    //选择添加证书
    introduceClick() {
      this.dialogcredentials = true;
    },
    //证书状态
    obtainedClick(index, item) {
      this.column_index = index;
      this.statusId = item.column_status;
    },
    //证书状态二级
    includClick(item) {
      this.statusId = item.id;
      const index = this.column_index;
      let column_status = this.column_status;
      column_status[index].column_status = item.id;
    },
    //证书状态保存
    rotatingClick() {
      const column_status = this.column_status;
      let mapArr = this.mapArr;
      for (var i = 0; i < column_status.length; i++) {
        if (column_status[i].column_status) {
          mapArr[i] = Object.assign({}, column_status[i]);
        }
      }
      this.dialogcondition = false;
    },
    //职称性质
    academicClick(item, index) {
      this.natureIndex = index;
      const column_type = item.column_type;
      if (column_type) {
        this.natureActive = column_type.split(",");
      } else {
        this.natureActive = [];
      }
    },
    //职称证性质多选
    //职称证性质多选
    reviewClick(num, str) {
      let column_types = this.column_type;
      const natureIndex = this.natureIndex;
      const column_type = column_types[natureIndex].column_type;
      let nature = [];
      if (column_type) {
        let isType = true;
        nature = column_type.split(",");
        for (let i = 0; i < nature.length; i++) {
          if (nature[i] == num) {
            nature.splice(i, 1);
            column_types[natureIndex].column_type = nature.join(",");
            isType = false;
            break;
          }
        }
        if (isType) {
          nature.push(num);
          column_types[natureIndex].column_type = nature.join(",");
        }
      } else {
        nature.push(num);
        column_types[natureIndex].column_type = nature.join(",");
      }
      this.natureActive = nature;
    },
    //隐藏工作经历
    toRation() {
      this.recruitwrapper = false;
    },
    //工作经历限制工作业绩输入字数
    monitorClick() {
      this.grounds = this.workExperience.job_contents.length;
      if (this.grounds > 500) {
        return false;
      }
    },
    echoInput(content) {
      if (content.length >= 500) {
        return;
      }
    },
    //工作经历保存
    conservation() {
      if (this.indication) {
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
          this.curriculumlist.push(Object.assign({}, this.workExperience));
          const sendingdatalist = this.curriculumlist;
          const delicacylist = JSON.stringify(sendingdatalist);
          sessionStorage.setItem("curricumlist", delicacylist);
        }
      }
      this.workExperience = {
        job_start_time: "",
        job_end_time: "",
        comany_name: "",
        job_name: "",
        job_contents: ""
      };
      this.recruitwrapper = false;
    },
    //添加一条工作经历
    addStr() {
      this.indication = true;
    },
    //删除一条工作经历
    deleStr(index) {
      this.curriculumlist.splice(index, 1);
      const curriculumlist = this.curriculumlist;
      sessionStorage.setItem("curricumlist", JSON.stringify(curriculumlist));
      if (this.curriculumlist.length <= 0) {
        this.indication = true;
      }
    },
    //隐藏占位的工作经历
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
.centaddhigh {
  text-align: right;
}
.officialrank {
  width: 1.5rem;
  border: 1px solid #ccc;
}
.btn_sents {
  border: none;
  border: 0px;
  outline: none;
  width: 0.61rem;
  height: 0.26rem;
  border: 1px solid rgba(4, 174, 146, 1);
  border-radius: 13px;
  background: #fff;
  color: rgba(4, 174, 146, 1);
  font-size: 0.15rem;
}
.sentaddsfix {
  color: #05ae92;
}
.asdsent {
  text-align: center;
}
.isaddtents {
  background: #699;
  color: #fff;
  font-size: 18px;
}
.delet_sents {
  width: 0.17rem;
}
.pictogram {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
}
.add_student {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.14rem;
  color: #666;
  text-align: left;
  margin-left: 0.16rem;
}
.add_student:hover {
  background: #05ae92;
  color: #fff;
}
.behalf {
  width: 100%;
  height: 3rem;
}
.add_wise {
  width: 2.45rem;
  float: left;
  height: 2.7rem;
}
.add_guiters {
  width: 1.2rem;
  float: right;
  height: 2.7rem;
  padding-left: 0.1rem;
}
.positional {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.14rem;
  color: #666;
  text-align: left;
  text-align: left;
  margin-left: 0.16rem;
}
.positional:hover {
  background: #05ae92;
  color: #fff;
}
.add_visiit {
  width: 2.45rem;
  float: left;
  height: 3.2rem;
}
.add_wonder {
  width: 1.2rem;
  float: right;
  height: 3.2rem;
}
.analysis {
  width: 100%;
  border: 1px solid #ccc;
}
.cent_left_add {
  height: 3.2rem;
}
.cent_right_add {
  height: 3.2rem;
}
.delighted {
  width: 100%;
  height: 0.5rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 0.14rem;
  padding: 0 0.5rem;
  position: absolute;
  bottom: 0.2rem;
}
.center_add {
  width: 1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  background: #05ae92;
  color: #fff;
  text-align: center;
  margin-top: 0.1rem;
  border-radius: 0.04rem;
}
.center_delet {
  width: 1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  background: #fff;
  color: #05ae92;
  border: 1px solid #05ae92;
  text-align: center;
  margin-top: 0.1rem;
  border-radius: 0.04rem;
}
.progerds {
  text-align: center;
}
.add_wraapper {
  text-align: center;
  width: 2rem;
  height: 0.4rem;
  margin-left: 0.8rem;
  line-height: 0.4rem;
  font-size: 0.14rem;
  color: #05ae92;
  background: rgba(242, 242, 242, 1);
  margin-top: 0.1rem;
}
.add_wraapper img {
  width: 0.17rem;
  vertical-align: middle;
}
.deleadd {
  padding-left: 0.1rem;
}
.deleadd img {
  width: 0.17rem;
}
.initial {
  display: flex;
  height: 0.44rem;
  line-height: 0.44rem;
  border: 1px solid #ccc;
  justify-content: space-between;
  padding: 0 0.2rem;
  color: #699;
  font-size: 0.14rem;
}
.ctal_add {
  width: 1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  background: #05ae92;
  color: #fff;
  text-align: center;
  margin-top: 0.1rem;
  border-radius: 0.04rem;
}
.quest_sel {
  width: 1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  background: #fff;
  color: #05ae92;
  text-align: center;
  margin-top: 0.1rem;
  border-radius: 0.04rem;
  border: 1px solid #05ae92;
}
.addinstic {
  text-align: center;
  width: 0.8rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border: 1px solid #05ae92;
  border-radius: 0.6rem;
  margin-bottom: 0.1rem;
  display: block;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
}
.addinstic input[type="checkbox"] {
  position: absolute;
  top: -100px;
  left: -100px;
}
.status-active {
  background: #05ae92;
  color: #fff;
}
.proper:hover {
  color: #04ae92;
}
.wrapadd {
  width: 30%;
}
.athers {
  margin-left: 0.2rem;
}
.zhecent {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 50;
}
.translate {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 4rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* position: fixed;
  left: calc(50% - 188px);
  bottom: 25%;
  z-index: 100;
  background: #fff; */
}
.hello {
  display: flex;
  height: 100%;
  overflow-y: auto;
  background: #fff;
}
.btn-group {
  width: 40%;
  line-height: 0.44rem;
  overflow-y: scroll;
  height: 4rem;
}
.btn-group ul li {
  text-align: center;
}
.acquirediploma {
  width: 30%;
  line-height: 0.44rem;
}
.addtents {
  background: #fff;
  color: #666;
}
.addtents:hover {
  background: rgba(238, 238, 238, 1);
  color: #04ae92;
}
.wrap ul {
  background: rgba(238, 238, 238, 1);
}
.wrap ul li {
  margin-left: 0.05rem;
  text-align: center;
}
.wrap {
  flex-grow: 1;
  background: rgba(238, 238, 238, 1);
  overflow: auto;
}
.wrapadd ul {
  background-color: #fff;
}
.propagate {
  color: rgba(136, 136, 136, 1);
  text-align: center;
  line-height: 0.44rem;
}
.propagate:hover {
  color: #05ae92;
}
.addsprogress {
  color: rgba(136, 136, 136, 1);
  text-align: center;
  line-height: 0.44rem;
  width: 1.5rem;
}
.addsprogress:hover {
  color: #666;
}
.inp_cantal {
  width: 2.5rem;
  border: none;
  border: 0px;
  outline: none;
  text-align: right;
  font-size: 0.12rem;
}
.parties {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 250px;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* position: fixed;
  left: calc(50% - 188px);
  bottom: 0;
  z-index: 100;
  background: #fff; */
}
.summarizing {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 4.5rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* position: fixed;
  left: calc(50% - 188px);
  bottom: 0;
  z-index: 100;
  background: #fff; */
  display: flex;
  justify-content: space-between;
}
.partiesadds {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 3.5rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* position: fixed;
  left: calc(50% - 188px);
  bottom: 0;
  z-index: 100;
  background: #fff; */
}
.conserve {
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
}
.sequence {
  width: 100%;
  float: right;
  height: 1.6rem;
  padding: 0 0.3rem;
  text-align: center;
  margin-top: 0.2rem;
}

.asyncfentch {
  width: 70%;
  border: 1px solid #ccc;
  text-align: left;
}
.sayentsd {
  width: 30%;
  border: 1px solid #ccc;
}
.juitar {
  width: 100%;
  float: right;
  height: 1.6rem;
  border: 1px solid #ccc;
  padding: 0 0.3rem;
  overflow: hidden;
  overflow-y: scroll;
}
.addrepors {
  height: 0.5rem;
  border: 1px solid #ccc;
  margin-top: 1.9rem;
}
.proper {
  border-radius: 0.16rem;
  height: 0.32rem;
  line-height: 0.32rem;
  border: 1px solid #04ae92;
  width: 0.7rem;
  background: #fff;
  float: left;
  color: #04ae92;
  margin-left: 0.05rem;
  margin-top: 0.1rem;
  padding: 0 0.05rem;
}
.properadd {
  border-radius: 0.16rem;
  height: 0.32rem;
  line-height: 0.32rem;
  border: 1px solid #04ae92;
  width: 2rem;
  background: #fff;
  float: left;
  color: #699;
  margin-left: 0.05rem;
  margin-top: 0.1rem;
  text-align: center;
  padding: 0 0.05rem;
  margin-left: 0.5rem;
}
.proper :nth-of-type(2n) {
  clear: left;
}
.orientate {
  font-size: 0.14rem;
  color: rgba(153, 153, 153, 1);
  width: 2rem;
}
.issue {
  margin-top: 0.3rem;
  text-align: center;
}
.btn_announce {
  width: 1.5rem;
  height: 0.35rem;
  line-height: 0.35rem;
  color: #fff;
  background: #699;
  font-size: 0.15rem;
  border: none;
  border: 0px;
  outline: none;
  border-radius: 0.04rem;
}
.resettingrapper {
  width: 3.75rem;
  padding-bottom: 50px;
  background: #fff;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.publish {
  margin-left: 0.16rem;
  margin-right: 0.16rem;
  overflow: scroll;
  overflow-y: scroll;
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
  height: 0.17rem;
}
.section_resetting {
  height: auto;
  margin-top: 0.44rem;
}
.place {
  height: 0.44rem;
  line-height: 0.44rem;
  border-bottom: 1px solid #ccc;
  font-size: 0.14rem;
  color: rgba(51, 51, 51, 1);
  display: flex;
  justify-content: space-between;
}
.img_res {
  width: 0.08rem;
}
.resume-active {
  color: #05ae92;
}
.negatives_Active {
  background: #05ae92;
  color: #fff;
}
.incumbency-active {
  color: #04ae92;
  border: 1px solid #04ae92 !important;
}
.showCream span {
  border: 1px solid #999;
  width: 0.57rem;
  height: 0.2rem;
  padding: 0.02rem 0.16rem;
  margin-left: 0.3rem;
}
.conditionStatus span {
  border: 1px solid #999;
  width: 0.57rem;
  height: 0.2rem;
  padding: 0.02rem 0.16rem;
  margin-left: 0.2rem;
}
.diplomacentlist {
  width: 35%;
  text-align: left;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.susurratelist {
  width: 20%;
  text-align: right;
}
.animalladds {
  width: 20%;
  text-align: right;
}
.germinationcent {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 2.5rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0%);
  overflow-y: scroll;
}
.correctcentSugar {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 3.24rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0%);
  overflow-y: scroll;
}
.aspirationcentadds {
  background: #ffffff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 3.24rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0%);
  overflow-y: scroll;
}
.germinationsuger {
  text-align: center;
}
.correctaddslist {
  text-align: center;
}
.aspirationcentlist {
  text-align: center;
}
.germinationadds {
  font-size: 0.14rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.correctfindadds {
  font-size: 0.14rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.aspirationsugar {
  font-size: 0.14rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.subsistcentlist {
  width: 30%;
  text-align: left;
  display: block;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
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
.recruitwrapper-conserve {
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
  position: fixed;
  top: 0;
  left: 0;
  width: 3.75rem;
  height: 100%;
  padding-bottom: 50px;
  background: #fff;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  z-index: 90;
  background-color: #fff;
  overflow-y: scroll;
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
  z-index: 20;
}
.recruitwrapper-header {
  z-index: 100;
}
.add_img img {
  height: 0.22rem;
  vertical-align: middle;
}
</style>
