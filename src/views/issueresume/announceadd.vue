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
                  :class="[detonatecentadd,detonatecentaddId == item.cid ? detonatecentaddActive : '']"
                  v-for="(item,index) in componentslist"
                  v-on:click="sentcomponClick(item.cid,item.name)"
                  :key="index"
                >{{item.name}}</li>
              </ul>
            </div>
            <div class="wrap">
              <ul>
                <li
                  class="propagate"
                  :class="[resumptioncentadd,resumptioncentaddId == item.cid ? resumptioncentaddActive : '']"
                  v-for="(item,index) in harvesaddtlist"
                  @click="harvestClick(item.cid,item.name)"
                  :key="item.index"
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
                  :class="[garrisoncentadd,garrisoncentaddId == item.id ? garrisoncentaddActive : '']"
                  v-for="(item,index) in provinceList"
                  v-on:click="provinceClick(item.id,item.name)"
                  :key="index.item"
                >{{item.name}}</li>
              </ul>
            </div>
            <div class="wrap">
              <ul>
                <li
                  class="propagate"
                  :class="[boorishcentadd,boorishcentaddId == item.id ? boorishcentaddActive : '']"
                  v-for="(item,index) in citylist"
                  @click="cityClick(item.id,item.name)"
                  :key="item.index"
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
          <div class="materialcenadds" v-if="dialogquousque">
            <div class="centsugeraddfinds">
              <div
                class="batholithcentadds"
                :class="[underpancentadd,underpancentaddId == item.id ? underpancentaddActive : '']"
                v-for="item in quousquelist"
                @click="sendClick(item.id,item.name)"
                :key="item.index"
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
              v-for="(item ,key ,index) in workTypeList"
              :key="item.index"
              @click="zwType(key+1)"
              :class="{work_Active:work_Active == key+1}"
            >{{item}}</span>
          </div>
        </div>

        <!-- 学历 -->
        <div class="zhecent" v-if="dialogrecord" @click="endecutshurt()"></div>
        <div class="workcentaddsfinds" v-if="dialogrecord">
          <div class="centworkaddsgugers">
            <div
              class="querssentwoulds"
              :class="[gesticulationcentadd,gesticulationcentaddId == item.id ? gesticulationcentaddActive : '']"
              @click="secondaryClick(item.id,item.name)"
              v-for="item in endut_list"
              :key="item.index"
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
              v-for="(item,key,index) in presentlist"
              :key="item.index"
              @click="currentlyClick(key+1)"
              :class="{facing_Active:facing_Active == key+1}"
            >{{item}}</span>
          </div>
        </div>

        <!-- <div class="zhecent" v-if="dialogpresent" @click="presentshurt()"></div>
        <div class="parties" v-if="dialogpresent">
          <div class="sequence">
            <div
              class="proper"
              @click="blowClick(item.id,item.name)"
              v-for="item in presentlist"
              :key="item.index"
            >{{item.name}}</div>
          </div>
        </div>-->

        <!-- 期望薪资 -->
        <div class="zhecent" v-if="dialogexpect" @click="expectshurt()"></div>
        <div class="monerycentaddsads" v-if="dialogexpect">
          <div class="monerysugers">
            <div
              class="monerywoulads"
              :class="[moneryaddscentadd,moneryaddscentaddId == item.id ? moneryaddscentaddActive : '']"
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
            <div class="add_wraapper" @click="introduceClick()">
              <img src="../../assets/icon/add_addsent.png" alt>添加证书
            </div>
            <div class="translate" v-if="dialogcredentials">
              <div class="hello">
                <div class="btn-group">
                  <ul>
                    <li
                      :class="{'sentaddsfix': index == sentaddsfix}"
                      v-for="(item,index) in diplomaList"
                      v-on:click="endowmentsClick(item.cid,item.name);spread_show(index)"
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

            <div class="pictogram" v-for="(item,index) in mapArr" :key="item.index">
              <span>{{item.ch_name}}</span>
              <span>{{item.name}}</span>
              <span>
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
                    :class="[positional , column_index == index ? statusActive : '']"
                    @click="obtainedClick(index,item)"
                    v-for="(item,index) in column_status"
                    :key="index"
                    v-if="(item.column_idF) == 1 || (item.column_idF) == 2 || (item.column_idF) == 3 || (item.column_idF) == 7"
                  >{{item.ch_name}}</div>
                </div>

                <div class="add_wonder">
                  <div
                    :class="[addinstic , statusId == item.id ? statusActive : '']"
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
                  :class="[add_student,natureIndex == index ? nature_active : '']"
                  @click="academicClick(item,index)"
                  v-for="(item,index) in column_type"
                  :key="index"
                  v-if="(item.column_idF) == 8 || (item.column_idF) == 9 || (item.column_idF) == 10 || (item.column_idF) == 11"
                >{{item.ch_name}}</div>
              </div>
              <div class="add_guiters">
                <div
                  class="addinstic"
                  :class="[natureActive.indexOf(item.id) != -1 ? nature_active : '']"
                  @click="reviewClick(item.id,item.name)"
                  v-for="(item,index) in listadd"
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
      moneryaddscentadd: "moneryaddscentadd",
      moneryaddscentaddId: "moneryaddscentaddId",
      moneryaddscentaddActive: "moneryaddscentadd_Active",
      gesticulationcentadd: "gesticulationcentadd",
      gesticulationcentaddId: "gesticulationcentaddId",
      gesticulationcentaddActive: "gesticulationcentadd_Active",
      underpancentadd: "underpancentadd",
      underpancentaddId: "underpancentaddId",
      underpancentaddActive: "underpancentadd_Active",
      detonatecentadd: "detonatecentadd",
      detonatecentaddId: "detonatecentaddId",
      detonatecentaddActive: "detonatecentadd_Active",
      garrisoncentadd: "garrisoncentadd",
      garrisoncentaddId: "garrisoncentaddId",
      garrisoncentaddActive: "garrisoncentadd_Active",
      boorishcentadd: "boorishcentadd",
      boorishcentaddId: "boorishcentaddId",
      boorishcentaddActive: "boorishcentadd_Active",
      resumptioncentadd: "resumptioncentadd",
      resumptioncentaddId: "resumptioncentaddId",
      resumptioncentaddActive: "resumptioncentadd_Active",
      sale: "",
      education_name: "",
      expect_salary: "",
      columnStr: "",
      columnType: "", //职称证性质
      isaddtents: true,
      listadd: [
        { name: "单证", id: "1" },
        { name: "网查", id: "2" },
        { name: "评审表", id: "3" },
        { name: "红头文件", id: "4" }
      ],
      result: ["a", "b"],
      column_id: "",
      column_province: "",
      visitlist: [], //存放列表
      ensconce: false,
      myMap: {}, //所获证书map所获证书map
      mapArr: [],
      column_status: [], //证书状态map
      column_index: "", //证书状态
      statusId: "",
      statusIndex: -1,
      natureIndex: -1,
      mapArrStatus: [],
      column_type: [],
      // column_type: "",
      mapArrType: [],
      indx: 0,
      obtainId: "",
      strId: "",
      pid: "",
      prosId: "",
      cityId: "",
      provinceList: [], //省列表
      citylist: [], //市列表
      prov_type: "",
      prov_name: "",
      citys_type: "",
      citys_name: "",
      send_type: "",
      persp_type: "",
      persp_name: "",
      certi_type: "",
      certi_name: "",
      senten_type: "",
      senten_name: "",
      send_name: "",
      redf_type: "",
      redf_name: "",
      dip_type: "",
      dip_name: "",
      inclu_type: "",
      inclu_name: "",
      credentials_type: "", //选择证书id
      credentials_name: "", //选择证书name
      compest_type: "", //职称名字的下标
      compest_name: "", //职称名字的name
      grade_type: "", //职称名字二级下标
      grade_name: "", //职称名字二级的name
      id: "",
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
      expeclist: [], //当前状态
      accountlist: [], //期望薪资
      quousquelist: [], //工作年限
      intentionlist: [], //意向城市
      diplomaList: [], //证书
      naturalList: [], //证书二级
      townlist: [],
      conditionlist: [], //证书状态
      incumbencylist: [
        { name: "初始注册", id: "1" },
        { name: "转注册", id: "2" },
        { name: "转注带B", id: "3" }
      ],
      presentlist: ["离职", "在职", "寻找机会"], //状态列表

      form: {
        appellation: "", //学历名称
        sendid: "",
        send_type: "",
        send_name: ""
      },
      workTypeList: ["全职", "兼职", "实习"],
      work_Active: "", //添加class名

      positional: "positional",
      addinstic: "addinstic",
      statusActive: "status-active",
      add_student: "add_student",
      nature_active: "nature_active",
      natureActive: [],
      addtents: "0",
      sentaddsfix: "0",
      getMenuText: "",
      data: {
        resbudId: "",
        datalist: ""
      },
      facing_Active: "", //添加class类名
      grounds: "0",
      indication: false,
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
      recruitwrapper: false
    };
  },
  mounted() {
    //接收个人发布编辑的id
    const resbudId = this.$route.query.resbudId;
    this.data.resbudId = resbudId;
    this.getReverse();
  },
  created() {
    this.getReverse();
  },
  methods: {
    zwType(workType) {
      //操作职位类型方法
      this.work_Active = workType; //添加类名
      this.work_type = workType;
    },
    currentlyClick(currentType) {
      this.facing_Active = currentType;
      this.work_status = currentType;
      // this.currentType = currentType;
    },
    //调取反显的数据接口show
    getReverse() {
      this.$axios
        .post(window.ajaxSrc + "/client/resume/show", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : "",
          resume_id: this.$route.query.resbudId
        })
        .then(res => {
          if (res.data.code == 200) {
            let data = res.data.data;
            console.log("回显数据", data);
            this.detonatecentaddId = res.data.data.inten_job_pid;
            this.resumptioncentaddId = res.data.data.inten_job;
            this.garrisoncentaddId = res.data.data.inten_province;
            this.boorishcentaddId = res.data.data.inten_city;
            this.underpancentaddId = res.data.data.work_experience_time;
            this.moneryaddscentaddId = res.data.data.expect_salary;
            this.gesticulationcentaddId = res.data.data.education;
            this.persp_name = res.data.data.education_name;
            this.senten_name = res.data.data.expect_salary_name;
            this.send_name = res.data.data.work_experience_name;
            this.prov_name = res.data.data.inten_area;
            this.compest_name = res.data.data.inten_job_name;
            this.redf_name = res.data.data.del_status;
            this.work_type = res.data.data.work_type;
            this.work_Active = this.work_type;
            this.work_status = res.data.data.work_status;
            this.facing_Active = this.work_status;
            //回显不操作 直接取show接口数据
            this.senten_type = res.data.data.expect_salary;
            this.grade_type = res.data.data.inten_job;
            this.send_type = res.data.data.work_experience_time;
            this.prov_type = res.data.data.inten_province;
            this.citys_type = res.data.data.inten_city;
            this.persp_type = res.data.data.education;

            this.curriculumlist = data.job;
            let column = data.column;
            this.mapArr = column.map(function(currentValue) {
              currentValue.name = currentValue.column_province_name;
              currentValue.column_idF = currentValue.pid;
              return currentValue;
            });
            console.log(this.mapArr);
            sessionStorage.setItem("curricumlist", JSON.stringify(data.job));
          }
        });
    },
    spread_show: function(index) {
      this.sentaddsfix = index;
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
    sentcomponClick(num, str) {
      this.detonatecentaddId = num;
      this.compest_type = num || "";
      this.compest_name = str || "";
      localStorage.setItem("compest_name", this.compest_name);
      localStorage.setItem("compest_type", this.compest_type);
      console.log(num);
      console.log(str);
      this.$axios
        .post(window.ajaxSrc + "/client/position/second", {
          pid: num
        })
        .then(res => {
          if (res.status == 200) {
            this.harvesaddtlist = res.data.data.items;
            console.log(res);
          }
        });
    },
    //职称名字二级
    harvestClick(num, str) {
      this.resumptioncentaddId = num;
      this.grade_type = num || "";
      this.grade_name = str || "";
      console.log(this.grade_type);
      console.log(this.grade_name);
      localStorage.setItem("grade_name", this.grade_name);
      localStorage.setItem("grade_type", this.grade_type);
      localStorage.setItem("grade_name", this.grade_name);
      this.dialogcomponents = false;
    },
    //职称证性质弹窗
    componentsshurt() {
      this.dialogcomponents = false;
    },
    //工作经历
    regularClick() {
      this.recruitwrapper = true;
      /* this.$router.push({
        name: "workexperience"
      }); */
    },
    //返回首页
    tofirst() {
      this.$router.push({ name: "release" });
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
          console.log(that.send_type);
          console.log("456");
          if (res.status == 200) {
            that.quousquelist = res.data.data;
          }
        });
    },
    //选择工作年限
    sendClick(num, str) {
      this.underpancentaddId = num;
      this.send_type = num || "";
      localStorage.setItem("send_type", this.send_type);
      this.send_name = str || "";
      this.quousqueadd();
      console.log(str);
      console.log(this.send_type);
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
    endowmentsClick(cid, name) {
      console.log(cid);
      this.dip_type = cid || "";
      this.dip_name = name || "";
      this.myMap["column_idF"] = cid; //有证书一级id时 请打开它
      this.$axios
        .post(window.ajaxSrc + "/client/column/second", {
          pid: cid
        })
        .then(res => {
          if (res.status == "200") {
            this.naturalList = res.data.data.items;
          }
        });
    },
    diplomashurt() {
      this.dialogdiploma = false;
    },
    // 证书状态
    conditionClick() {
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
      console.log("------------");
      const column_type_ = JSON.parse(JSON.stringify(mapArr));
      this.column_type = column_type_;

      let arr = [];
      // linkValue = "1,2,3,7";
      for (var i = 0; i < column_type_.length; i++) {
        arr.push(column_type_[i].column_idF);
      }
      console.log(arr);
      //  this.dialogtechnical = true;
      //  this.natureActive = [];
      //  this.natureIndex = -1;

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
    //证书状态保存
    rotatingClick() {
      let mapArr = this.mapArr;
      const column_status = this.column_status;
      let status1 = {};
      for (var i = 0; i < column_status.length; i++) {
        if (column_status[i]) {
          status1 = column_status[i];
        } else {
          status1 = mapArr[i];
        }
        mapArr[i] = Object.assign({}, status1);
      }
      this.dialogcondition = false;
    },
    //证书状态取消
    platformClick() {
      this.column_status = [];
      this.dialogcondition = false;
    },
    //职称证性质保存
    characterClick() {
      const natureIndex = this.natureIndex;
      let column_type = this.column_type;
      let mapArr = this.mapArr;
      let status1 = {};
      for (var i = 0; i < column_type.length; i++) {
        if (column_type[i]) {
          status1 = column_type[i];
        } else {
          status1 = mapArr[i];
        }
        mapArr[i] = Object.assign({}, status1);
      }
      this.dialogtechnical = false;
    },
    //职称证性质取消
    qualityClick() {
      this.dialogtechnical = false;
    },
    //职称证性质弹框
    technicalshut() {
      // this.dialogtechnical = false;
    },
    stateClick() {},
    //证书状态弹框
    conditionshurt() {
      // this.dialogcondition = false;
    },
    endecutshurt() {
      this.dialogrecord = false;
    },
    //当前状态
    currently() {
      this.dialogpresent = true;
    },
    blowClick(num, str) {
      this.redf_type = num || ""; //名字
      localStorage.setItem("redf_type", this.redf_type);
      this.redf_name = str || ""; //id
      this.currently();
      this.dialogpresent = false;
    },
    presentshurt() {
      this.dialogpresent = false;
    },
    //选择学历
    secondaryClick(num, str) {
      this.gesticulationcentaddId = num;
      this.persp_type = num || "";
      this.persp_name = str || "";
      localStorage.setItem("persp_type", this.persp_type);
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
            console.log(that.endut_list);
          }
          console.log(res);
        });
    },
    //选择薪资
    sentenceClick(num, str) {
      this.moneryaddscentaddId = num;
      this.senten_type = num || "";
      localStorage.setItem("senten_type", this.senten_type);
      this.senten_name = str || "";
      this.expectation();
      this.dialogexpect = false;
    },
    //期望薪资
    expectation() {
      this.dialogexpect = true;
      let that = this;
      that.$axios
        .post(window.ajaxSrc + "/client/index/sale", {
          // id: that.senten_type
          id: localStorage.getItem("senten_type")
        })
        .then(res => {
          if (res.status == 200) {
            that.accountlist = res.data.data;
            for (var i = 0; i < that.accountlist; i++) {
              if (that.accountlist[i].id == that.expect_salary) {
                console.log("薪资名称" + that.accountlist[i].name);
              }
            }
          }
        });
    },
    //发布列表接口
    annoulistClick() {
      let that = this;
      // if (that.compest_name == "") {
      //   Toast("请选择职称名称");
      // }
      // if (that.prov_name == "") {
      //   Toast("请选择省");
      //   return false;
      // }
      // if (that.citys_name == "") {
      //   Toast("请选择市");
      //   return false;
      // }

      // if (that.send_name == "") {
      //   Toast("请选择工作年限");
      //   return false;
      // }
      // if (that.persp_name == "") {
      //   Toast("请选择学历");
      //   return false;
      // }
      // if (that.redf_name == "") {
      //   Toast("请选择当前状态");
      //   return false;
      // }
      // if (that.senten_name == "") {
      //   Toast("请选择期望薪资");
      //   return false;
      // }
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
        if (currentValue.column_city) {
          value.column_city = currentValue.column_city;
        }
        if (currentValue.column_status) {
          value.column_status = currentValue.column_status;
        }
        if (currentValue.column_type) {
          value.column_type = currentValue.column_type;
        }
        return value;
      });
      console.log(column);
      that
        .$axios({
          url: window.ajaxSrc + "/client/resume/add",
          method: "post",
          data: {
            token: localStorage.getItem("token"),
            resume_id: this.data.resbudId,
            inten_province: this.prov_type,
            inten_city: this.citys_type,
            education: this.persp_type,
            work_status: this.work_status,
            expect_salary: this.senten_type, //期望薪资
            inten_job: this.grade_type, //职位名称
            work_experience_time: this.send_type, //工作年限
            work_type: this.work_type,
            job: encodeURIComponent(JSON.stringify(_curricumlist)),
            column: encodeURIComponent(JSON.stringify(column))
          },
          transformRequest: [
            function(data) {
              let ret = qs.stringify(data); // 这里必须使用qs库进行转换
              return ret;
            }
          ]
          /* headers: {
            "Content-Type": "application/json"
          } */
        })
        .then(res => {
          if (res.data.code == "200") {
            this.$router.push({ name: "release" });
            Toast("发布成功");
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
    //点击省 获取市
    provinceClick(num, str) {
      this.garrisoncentaddId = num;
      this.prov_type = num || "";
      this.prov_name = str || "";
      console.log(this.prov_type);
      localStorage.setItem("prov_type", this.prov_type);
      console.log(this.prov_name);
      this.$axios
        .post(window.ajaxSrc + "/client/index/city", {
          province: num
        })
        .then(res => {
          if (res.status == "200") {
            this.citylist = res.data.data;
            console.log(this.citylist);
            console.log("city类别");
          }
        });
    },
    cityClick(num, str) {
      this.boorishcentaddId = num;
      this.citys_type = num || "";
      this.citys_name = str || "";
      localStorage.setItem("citys_type", this.citys_type);
      console.log(this.citys_type);
      console.log(this.citys_name);
      this.dialogintention = false;
    },
    naturalClick(str, num) {
      this.myMap["column_id"] = str;
      this.myMap["ch_name"] = num;
      console.log(this.myMap["ch_name"] + "*****************");
      const senddatalist = JSON.stringify();
      console.log(num);
      this.$axios.post(window.ajaxSrc + "/client/index/area", {}).then(res => {
        if (res.status == "200") {
          this.townlist = res.data.data;
        }
      });
    },
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
      if (isCertificate) {
        this.myMap["column_province"] = str;
        this.myMap["name"] = num;
        this.mapArr.push(Object.assign({}, this.myMap));
      }
      this.dialogcredentials = false;
    },
    //删除已添加证书
    deleaddClick(index) {
      this.mapArr.splice(index, 1);
      console.log(this.mapArr);
    },
    //保存证书
    defendClick() {
      this.dialogdiploma = false;
      // this.$axios
      //   .post(window.ajaxSrc + "/client/favorite/add", {
      //     token: localStorage.getItem("token"),
      //     column_id: this.column_id,
      //     column_province: this.column_province
      //   })
      //   .then(res => {});
      console.log("保存0");
      console.log(this.myMap);
    },
    delmessageClick() {
      alert("删除");
    },
    //选择添加证书
    introduceClick() {
      this.dialogcredentials = true;
    },
    intentionClick() {},
    intentionshurt() {
      this.dialogintention = false;
    },
    //证书状态
    obtainedClick(index, item) {
      this.column_index = index;
      this.statusIndex = index;
      this.statusId = item.column_status;
    },
    includClick(item) {
      this.statusId = item.id;
      const index = this.column_index;
      let column_status = this.column_status;
      console.log(column_status);
      column_status[index].column_status = item.id;
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
      // this.natureIndex = index;
      // const column_type = item.column_type;
      // if (column_type) {
      //   this.natureActive = column_type.split(",");
      // } else {
      //   this.natureActive = [];
      // }
      // console.log(item, index);
      // this.natureIndex = index;
      // const columnType = item.column_type;
      // if (column_type) {
      //   this.natureActive = column_type;
      // } else {
      //   this.natureActive = [];
      // }
      // console.log("123职称证性质");
      // console.log(columnType);
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
      // let column_types = this.column_type;
      // const natureIndex = this.natureIndex;
      // let column_type = column_types[natureIndex].column_type;

      // if (column_type) {
      //   let isType = true;
      //   column_type = column_type.split(",");
      //   for (let i = 0; i < column_type.length; i++) {
      //     if (column_type[i] == num) {
      //       column_type.splice(i, 1);
      //       column_types[natureIndex].column_type = column_type.join(",");
      //       isType = false;
      //       break;
      //     }
      //   }
      //   if (isType) {
      //     column_type.push(num);
      //     column_types[natureIndex].column_type = column_type.join(",");
      //   }
      // } else {
      //   column_type = [];
      //   column_type.push(num);
      //   column_types[natureIndex].column_type = column_type.join(",");
      // }
      // this.natureActive = column_type;
      // const column_types = this.column_type;
      // const natureIndex = this.natureIndex;
      // let column_type = column_types[natureIndex].column_type;
      // if (column_type) {
      //   let isType = true;
      //   for (let i = 0; i < column_type.length; i++) {
      //     if (column_type[i] == num) {
      //       column_type.splice(i, 1);
      //       column_types[natureIndex].column_type = column_type;
      //       isType = false;
      //       break;
      //     }
      //   }
      //   if (isType) {
      //     column_type.push(num);
      //     column_types[natureIndex].column_type = column_type;
      //   }
      // } else {
      //   column_type = [];
      //   column_type.push(num);
      //   column_types[natureIndex].column_type = column_type;
      // }
      // let columnStr = "";
      // this.columnStr = column_type.join(",");
      // console.log(this.columnStr);
      // this.natureActive = column_type;
      // console.log(this.natureActive);
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
        console.log(workExperience);
        let isValue = true;
        //判断是否有空值
        for (let prop in workExperience) {
          if (!workExperience[prop]) {
            isValue = false;
            break;
          }
        }
        //数据填充完毕添加
        if (isValue && this.indication) {
          this.indication = false;
          if (this.workExperience.length != 0) {
            this.curriculumlist.push(Object.assign({}, this.workExperience));
          }
        }
      }

      const sendingdatalist = this.curriculumlist;
      const delicacylist = JSON.stringify(sendingdatalist);
      sessionStorage.setItem("curricumlist", delicacylist);
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
.work_Active,
.facing_Active {
  color: #04ae92;
  border: 1px solid #04ae92 !important;
}

.showCream span {
  border: 1px solid #999;
  width: 0.57rem;
  height: 0.2rem;
  padding: 0.02rem 0.16rem;
  margin-left: 0.32rem;
}
.conditionStatus span {
  border: 1px solid #999;
  width: 0.57rem;
  height: 0.2rem;
  padding: 0.02rem 0.16rem;
  margin-left: 0.18rem;
}
.centaddhigh {
  text-align: right;
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
  background: #05ae92;
  color: #fff;
}
.asdsent {
  text-align: center;
}
.isaddtents {
  background: #05ae92;
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
.nature_active {
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
  color: #05ae92;
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
  overflow-y: auto;
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
.wrap ul li {
  margin-left: 0.05rem;
  text-align: center;
}
.wrap {
  flex-grow: 1;
  background: rgba(238, 238, 238, 1);
  overflow: auto;
  /* height: calc(100vh - 2.44rem - 0.5rem); */
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
  background: #05ae92;
  color: #fff;
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
  z-index: 100; */
  background: #fff;
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
  color: #05ae92;
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
  /* width: 2rem; */
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  background: #05ae92;
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
  vertical-align: middle;
}
.garrisoncentadd_Active {
  color: #05ae92;
}
.boorishcentadd_Active {
  color: #05ae92;
}
.resumptioncentadd_Active {
  color: #05ae92;
}
.detonatecentadd_Active {
  color: #05ae92;
}
.materialcenadds {
  box-shadow: 0 0 5px 0 rgba (0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 2.5rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  bottom: 0;
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  overflow-y: scroll;
}
.centsugeraddfinds {
  text-align: center;
}
.batholithcentadds {
  font-size: 0.14rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.underpancentadd_Active {
  color: #05ae92;
}
.gesticulationcentadd_Active {
  color: #05ae92;
}
.workcentaddsfinds {
  box-shadow: 0 0 5px 0 rgba (0, 0, 0, 0.1);
  border-radius: 3px;
  width: 3.75rem;
  height: 2.5rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  bottom: 0;
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  overflow-y: scroll;
}
.centworkaddsgugers {
  text-align: center;
}
.querssentwoulds {
  font-size: 0.14rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.monerycentaddsads {
  /* border-radius: 3px; */
  width: 3.75rem;
  height: 2.5rem;
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 50%;
  bottom: 0;
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  overflow-y: scroll;
}
.monerysugers {
  text-align: center;
}
.monerywoulads {
  font-size: 0.14rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.moneryaddscentadd_Active {
  color: #05ae92;
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
