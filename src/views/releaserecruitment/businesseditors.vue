<template>
  <div class="resettingrapper">
    <header class="releaseheaders">
      <span class="add_img">
        <img @click="backwonderClick()" src="../../assets/icon/backaddsent.png" alt>
      </span>
      <span>发布招聘</span>
      <span>
        <button class="btn_sents" @click="announceClick()">发布</button>
      </span>
    </header>
    <section class="section_resetting">
      <div class="publish">
        <div class="zhecent" v-if="dialogcomponents" @click="componentsshurt()"></div>
        <div class="translate" v-if="dialogcomponents">
          <div class="hello">
            <div class="btn-group">
              <ul>
                <li
                  class="addtents"
                  :class="[gradesugeradd,gradesugeraddId == item.cid ? gradesugeraddActive : '']"
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
                  :class="[findeugeradd,findeugeraddId == item.cid ? findeugeraddActive : '']"
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
            <span>{{compest_name}}{{grade_name}}</span>
            <img class="img_res" src="../../assets/icon/proceed.png" alt>
          </span>
        </div>
        <div class="zhecent" v-if="dialogvacancy" @click="vacancyshurt()"></div>
        <div class="translate" v-if="dialogvacancy">
          <div class="hello">
            <div class="btn-group">
              <ul>
                <li
                  class="addtents"
                  :class="[shengsenteradd,shengsenteraddId == item.id ? shengsenteraddActive : '']"
                  v-for="(item,index) in provinceaddList"
                  v-on:click="provincevacancyClick(item.id,item.name)"
                  :key="index.item"
                >{{item.name}}</li>
              </ul>
            </div>
            <div class="wrap">
              <ul>
                <li
                  class="propagate"
                  :class="[citysenteradd,citysenteraddId == item.id ? citysenteraddActive : '']"
                  v-for="(item,index) in cityaddlist"
                  @click="cityvacancyClick(item.id,item.name)"
                  :key="item.index"
                >{{item.name}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="place">
          <span>招聘地区</span>
          <span class="orientate centaddhigh" @click="vacancyClick()">
            <span>{{provea_name}}{{cityver_name}}</span>
            <span></span>
            <img class="img_res" src="../../assets/icon/proceed.png" alt>
          </span>
        </div>
        <div class="zhecent" v-if="dialogtripar" @click="triparshurt()">
          <div class="centlistsugerlist" v-if="dialogtripar">
            <div class="centlistsaddsent">
              <div
                class="centlistaddswin"
                :class="[centlistsentadd,centlistsentId == item.id ? centlistsentActive : '']"
                v-for="item in triparlist"
                @click="sendtriparClick(item.id,item.name)"
                :key="item.index"
              >{{item.name}}</div>
            </div>
          </div>
        </div>

        <div class="place">
          <span>工作年限</span>
          <span class="orientate centaddhigh" @click="tripartiteClick()">
            <span class="orientate">{{tripart_name}}</span>
            <img class="img_res" src="../../assets/icon/proceed.png" alt>
          </span>
        </div>
        <div class="place">
          <span>职位类型</span>
          <div class="showCream">
            <!-- <span @click="zwType(1)" :class="{work_Active:isWorkType}">全职</span> -->
            <span
              v-for="(item ,key ,index) in workTypeList"
              :key="item.index"
              @click="zwType(key+1)"
              :class="{work_Active:work_Active == key+1}"
            >{{item}}</span>
          </div>
        </div>
        <div class="zhecent" v-if="dialoginculcate" @click="inculcateshurt()"></div>
        <div class="enjersentlist" v-if="dialoginculcate">
          <div class="enjersentsent">
            <div
              class="enjersentsuger"
              :class="[sendinculsadd,sendinculsId == item.id ? sendinculsActive : '']"
              @click="sendinculcateClick(item.id,item.name)"
              v-for="item in inculcatelist"
              :key="item.index"
            >{{item.name}}</div>
          </div>
        </div>
        <div class="place">
          <span>学历要求</span>
          <span class="orientate centaddhigh" @click="inculcateClick()">
            <span class="orientate">{{incul_name}}</span>
            <img class="img_res" src="../../assets/icon/proceed.png" alt>
          </span>
        </div>
        <div class="zhecent" v-if="dialogremuner" @click="remunershurt()"></div>
        <div class="subsistaddlist" v-if="dialogremuner">
          <div class="subsistaddcent">
            <div
              class="subsistaddwinder"
              :class="[addwinderadd,addwinderId == item.id ? addwinderActive : '']"
              @click="sentremunerClick(item.id,item.name)"
              v-for="item in remunerlist"
              :key="item.index"
            >{{item.name}}</div>
          </div>
        </div>
        <div class="place">
          <span>薪资待遇</span>
          <span class="orientate centaddhigh" @click="remunerationClick()">
            <span class="orientate">{{remuner_name}}</span>
            <img class="img_res" src="../../assets/icon/proceed.png" alt>
          </span>
        </div>
        <div class="zhecent" v-if="dialoginemploy" @click="employshurt()"></div>
        <div class="centnumsugerlist" v-if="dialoginemploy">
          <div class="centnumsugeradds">
            <div
              class="centnumsugerbuild"
              :class="[centnumsugerjust,centnumsugerjustId == item.id ? centnumsugerjustActive : '']"
              @click="sendemployClick(item.id,item.name)"
              v-for="item in employaddlist"
              :key="item.index"
            >{{item.name}}</div>
          </div>
        </div>
        <div class="place">
          <span>招聘人数</span>
          <span class="orientate centaddhigh" @click="employaddClick()">
            <span>{{employsent_name}}</span>
            <img class="img_res" src="../../assets/icon/proceed.png" alt>
          </span>
        </div>
        <!-- 证书 -->
        <div class="zhecent" v-if="dialogdemand" @click="demandshurt()"></div>
        <div class="translate" v-if="dialogdemand">
          <div class="hello">
            <div class="btn-group">
              <ul>
                <li
                  :class="[requirement, (requireIndex == item.cid) || (demandlistActive_[item.cid] && demandlistActive_[item.cid].length > 0) ? require_active : '']"
                  v-for="(item,index) in demandlist"
                  v-on:click="endemandClick(item.cid,item.ch_name,index)"
                  :key="item.cid"
                >
                  {{item.ch_name}}
                  <span
                    class="cent_num_add"
                    v-if="demandlistActive_[item.cid] && demandlistActive_[item.cid].length > 0"
                  >{{demandlistActive_[item.cid].length}}</span>
                </li>
              </ul>
            </div>
            <div class="wrapadd">
              <ul>
                <li
                  class="distinction"
                  :class="[demandlistActive_[firstCertificateId] && (demandlistActive_[firstCertificateId].indexOf(item.cid) != -1 ) ? require_active:'' ]"
                  v-for="(item,index) in endurelist"
                  @click="natdemandClick(item.cid,item.ch_name,index)"
                  :key="item.index"
                >{{item.ch_name}}</li>
              </ul>
            </div>
          </div>
          <div class="corrections">
            <div>
              <button class="vanishadd" @click="substituteClick()">取消</button>
            </div>
            <div>
              <button class="renovateadd" @click="manipulationClick()">确定</button>
            </div>
          </div>
        </div>
        <div class="place">
          <span>证书要求</span>
          <span class="orientate centaddhigh" @click="sentdemandClick()">
            <span v-show="statementsent">
              <span>{{demand_name}}</span>
              <span>{{grass_name}}</span>
            </span>
            <span v-show="statementsentadds">
              <span>{{longness}}</span>
            </span>
            <!-- <span>{{demand_name}}</span>
            <span>{{grass_name}}</span>-->
            <img class="img_res" src="../../assets/icon/proceed.png" alt>
          </span>
        </div>
        <div class="achievement">
          <div class="outstanding">职位描述</div>
          <div class="circumstantial">
            <textarea
              id="text_inp"
              class="text_inp"
              v-model="job_desc"
              maxlength="500"
              @input="monitorClick()"
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
      </div>
    </section>
  </div>
</template>
<script>
import { Toast, Indicator } from "mint-ui";
// import { lchown } from "fs";
export default {
  data() {
    return {
      gradesugeradd: "gradesugeradd",
      gradesugeraddId: "gradesugeraddId",
      gradesugeraddActive: "gradesugeradd_Active",
      findeugeradd: "findeugeradd",
      findeugeraddId: "findeugeraddId",
      findeugeraddActive: "findeugeradd_Active",
      shengsenteradd: "shengsenteradd",
      shengsenteraddId: "shengsenteraddId",
      shengsenteraddActive: "shengsenteradd_Active",
      citysenteradd: "citysenteradd",
      citysenteraddId: "citysenteraddId",
      citysenteraddActive: "citysenteradd_Active",
      statementsent: false,
      statementsentadds: false,
      longness: "", //选择证书的长度
      centnumsugerjust: "centnumsugerjust",
      centnumsugerjustId: "centnumsugerjustId",
      centnumsugerjustActive: "centnumsugerjust_Active",
      centlistsentadd: "centlistsentadd",
      centlistsentId: "centlistsentId",
      centlistsentActive: "centlistsent_Active",
      sendinculsadd: "sendinculsadd",
      sendinculsId: "sendinculsId",
      sendinculsActive: "sendinculs_Active",
      addwinderadd: "addwinderadd",
      addwinderId: "addwinderId",
      addwinderActive: "addwinder_Active",
      grounds: "0",
      inten_job_name: "", //show职位名称
      education_name: "", //show学历要求
      grass_type: "",
      grass_name: localStorage.getItem("grass_name"),
      job_desc: "", //职位描述
      provea_name: "", //招聘地区一级
      prover_type: "",
      cityver_name: "", // 招聘地区二级
      cityvea_type: "",
      tripart_name: localStorage.getItem("tripart_name"), //工作年限
      tripart_type: "", //工作年限下标
      incul_name: localStorage.getItem("incul_name"), //学历
      incul_type: "", //xueli下标
      remuner_name: localStorage.getItem("remuner_name"), //薪资待遇
      remuner_type: "", //薪资待遇下标
      demand_type: "", //证书要求下标
      demand_name: localStorage.getItem("demand_name"), //name
      employsent_type: "", //招聘人数下标
      employsent_name: localStorage.getItem("employsent_name"), //招聘人数
      compest_type: "", //职称名字的下标
      compest_name: "", //职称名字的name
      grade_type: "", //职称名字二级下标
      grade_name: "", //职称名字二级的name
      provinceaddList: [], //省
      cityaddlist: [], //市
      triparlist: [], //年限
      inculcatelist: [], //学历要求
      remunerlist: [], //薪资待遇
      demandlist: [],
      demandlistActive: {},
      demandlistActive_: {},
      firstCertificateId: -1, //当前选中的一级证书的index
      twoCertificate: -1, //当前选中的二级证书的index
      endurelist: [], //证书二级
      employaddlist: [], //招聘人数
      componentslist: [], //职称名称
      harvesaddtlist: [], //职称名字的二级
      dialogvacancy: false, //招聘地区
      dialogtripar: false, //工作年限
      dialoginculcate: false, //学历要求
      dialogremuner: false, //薪资待遇
      dialogdemand: false, //证书要求
      dialoginemploy: false, //招聘人数
      dialogcomponents: false, //职位名称
      data: {
        priseId: ""
      },
      requireIndex: -1,
      requirement: "requirement",
      require_active: "require_active",
      distinActive: [],
      splendid: "",
      workTypeList: ["全职", "兼职", "实习"],
      work_Active: "1", //添加class名
      workType: "1"
    };
  },
  mounted() {
    //接收企业发布列表点编辑传得id
    this.data.priseId = this.$route.query.priseId;

    this.$axios
      .post(window.ajaxSrc + "/client/resume/show", {
        token: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
        resume_id: this.$route.query.priseId
      })
      .then(res => {
        if (res.data.code == 200) {
          console.log(res.data.data);
          console.log("返现数据");
          this.centlistsentId = res.data.data.work_experience_time;
          this.sendinculsId = res.data.data.education;
          this.addwinderId = res.data.data.expect_salary;
          this.centnumsugerjustId = res.data.data.job_people_num;
          this.gradesugeraddId = res.data.data.inten_job_pid;
          this.findeugeraddId = res.data.data.inten_job;
          this.shengsenteraddId = res.data.data.inten_province;
          this.citysenteraddId = res.data.data.inten_city;
          this.splendid = res.data.data.job_cert;
          this.itemActive = res.data.data.job_cert_ori;
        }
      });
  },
  created() {
    this.comfortableClick();
  },
  methods: {
    zwType(workType) {
      //操作职位类型方法
      this.work_Active = workType; //添加类名
      this.workType = workType;
    },
    //监听
    monitorClick() {
      this.grounds = this.job_desc.length;
      if (this.grounds > 500) {
        return false;
      }
    },
    //职称证取消操作
    substituteClick() {
      this.dialogdemand = false;
    },
    //职称证确定操作
    manipulationClick() {
      this.dialogdemand = false;
      const den_ = this.demandlistActive_;
      let activeArr = [];
      for (let key in den_) {
        activeArr = activeArr.concat(den_[key]);
      }

      this.demandlistActive = JSON.parse(JSON.stringify(den_));
      this.distinActive = JSON.parse(JSON.stringify(activeArr));
      console.log(this.distinActive);
      localStorage.setItem("longness", this.distinActive.length);
      this.longness = localStorage.getItem("longness");
      if (this.longness <= 1) {
        this.statementsent = true;
        this.statementsentadds = false;
      } else if (this.longness > 1) {
        localStorage.removeItem("demand_name");
        localStorage.removeItem("grass_name");
        this.longness = localStorage.getItem("longness");
        this.statementsent = false;
        this.statementsentadds = true;
      }
      localStorage.setItem("splendid", this.distinActive);
      console.log("确定1");
    },
    // 反显数据 掉接口show
    comfortableClick() {
      this.$axios
        .post(window.ajaxSrc + "/client/resume/show", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : "",
          resume_id: this.$route.query.priseId
        })
        .then(res => {
          if (res.data.code == 200) {
            this.compest_name = res.data.data.inten_job_name;
            // this.inten_job_name = res.data.data.inten_job_name;
            this.provea_name = res.data.data.inten_area;
            this.tripart_name = res.data.data.work_experience_name;
            this.incul_name = res.data.data.education_name;
            this.remuner_name = res.data.data.expect_salary_name;
            this.employsent_name = res.data.data.job_people_name;
            this.job_desc = res.data.data.job_desc;

            //反显得到的数据 传给后台
            this.grade_type = res.data.data.inten_job;
            this.cityvea_type = res.data.data.inten_city;
            this.prover_type = res.data.data.inten_province;
            this.demand_type = res.data.data.job_cert;
            this.employsent_type = res.data.data.job_people_num;
            this.incul_type = res.data.data.education;
            this.remuner_type = res.data.data.expect_salary;
            this.tripart_type = res.data.data.work_experience_time;
            this.workType = res.data.data.work_type;
            console.log(res.data.data);
            this.grounds = this.job_desc.length;
            console.log(this.job_desc.length);
            console.log("show数据1");
          }
        });
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
      this.gradesugeraddId = num;
      this.compest_type = num || "";
      this.compest_name = str || "";
      localStorage.removeItem("compest_name");
      localStorage.setItem("compest_name", this.compest_name);
      console.log(num);
      console.log(str);
      console.log("789999999");
      this.$axios
        .post(window.ajaxSrc + "/client/position/second", {
          pid: num
        })
        .then(res => {
          if (res.status == 200) {
            this.harvesaddtlist = res.data.data.items;
            console.log(res);
            console.log("753");
          }
        });
    },
    //职称名字二级
    harvestClick(num, str) {
      this.findeugeraddId = num;
      // console.log(str);
      // console.log("....")
      this.grade_type = num || "";
      this.grade_name = str || "";
      localStorage.removeItem("grade_name");
      localStorage.setItem("grade_name", this.grade_name); //name
      this.dialogcomponents = false;
    },
    //职位描述弹窗
    componentsshurt() {
      this.dialogcomponents = false;
    },
    //招聘地区
    vacancyClick() {
      this.dialogvacancy = true;
      this.$axios
        .post(window.ajaxSrc + "/client/index/area", {
          id: this.prosId,
          name: this.cityId
        })
        .then(res => {
          if (res.status == "200") {
            this.provinceaddList = res.data.data;
          }
        });
    },
    //获取市
    provincevacancyClick(num, str) {
      this.shengsenteraddId = num;
      this.prover_type = num || "";
      this.provea_name = str || ""; //name
      localStorage.removeItem("provea_name");
      localStorage.setItem("provea_name", this.provea_name);
      this.$axios
        .post(window.ajaxSrc + "/client/index/city", {
          province: num
        })
        .then(res => {
          if (res.status == "200") {
            this.cityaddlist = res.data.data;
            console.log(this.cityaddlist);
            console.log("city类别");
          }
        });
    },
    cityvacancyClick(num, str) {
      this.citysenteraddId = num;
      this.cityvea_type = num || "";
      this.cityver_name = str || ""; //name
      localStorage.setItem("cityver_name", this.cityver_name);
      console.log(num);
      console.log(str);
      console.log("获取市");
      this.dialogvacancy = false;
    },
    vacancyshurt() {
      this.dialogvacancy = false;
    },
    //工作年限
    tripartiteClick() {
      this.dialogtripar = true;
      this.$axios
        .post(window.ajaxSrc + "/client/index/workexp", {
          id: this.tripart_type
        })
        .then(res => {
          if (res.status == "200") {
            this.triparlist = res.data.data;
          }
        });
    },
    triparshurt() {
      this.dialogtripar = false;
    },
    sendtriparClick(num, str) {
      this.centlistsentId = num;
      this.tripart_type = num || "";
      localStorage.setItem("tripart_type", this.tripart_type);
      // localStorage.setItem("tripart_type", this.tripart_type);
      this.tripart_name = str || ""; //name
      localStorage.setItem("tripart_name", this.tripart_name);
      this.tripartiteClick();
      this.dialogtripar = false;
    },
    //学历要求
    inculcateClick() {
      this.dialoginculcate = true;
      this.$axios
        .post(window.ajaxSrc + "/client/index/eduexp", {
          id: this.incul_type
        })
        .then(res => {
          if (res.status == 200) {
            this.inculcatelist = res.data.data;
            console.log(this.inculcatelist);
          }
          console.log("学历");
          console.log(res);
        });
    },
    //学历要求
    sendinculcateClick(num, str) {
      console.log(num);
      console.log(str);
      console.log("要求学历1");
      this.sendinculsId = num;
      this.incul_type = num || "";
      this.incul_name = str || ""; //name
      localStorage.setItem("incul_name", this.incul_name);
      this.inculcateClick();
      this.dialoginculcate = false;
    },
    inculcateshurt() {
      this.dialoginculcate = false;
    },
    //薪资待遇
    remunerationClick() {
      this.dialogremuner = true;
      this.$axios
        .post(window.ajaxSrc + "/client/index/sale", {
          id: this.remuner_type
        })
        .then(res => {
          if (res.status == 200) {
            this.remunerlist = res.data.data;
          }
        });
    },
    sentremunerClick(num, str) {
      this.addwinderId = num;
      this.remuner_type = num || "";
      console.log(this.remuner_type);
      console.log("薪资待遇1");
      this.remuner_name = str || ""; //name
      localStorage.setItem("remuner_name", this.remuner_name);
      this.remunerationClick();
      this.dialogremuner = false;
    },
    remunershurt() {
      this.dialogremuner = false;
    },
    //证书要求
    sentdemandClick() {
      this.dialogdemand = true;
      this.$axios
        .post(window.ajaxSrc + "/client/column/index", {})
        .then(res => {
          if (res.status == "200") {
            let items = res.data.data.items;
            this.demandlist = items;
          }
        });
      const den = this.demandlistActive;
      this.demandlistActive_ = JSON.parse(JSON.stringify(den));
    },
    //证书要求一级
    endemandClick(num, str, index) {
      this.firstCertificateId = num;
      this.requireIndex = num;
      this.demand_type = num || "";
      this.demand_name = str || ""; //name
      localStorage.setItem("demand_name", this.demand_name);

      this.$axios
        .post(window.ajaxSrc + "/client/column/second", {
          pid: num
        })
        .then(res => {
          if (res.status == "200") {
            this.endurelist = res.data.data.items;
          }
        });
    },
    //证书要求二级
    natdemandClick(num, str, index) {
      const firstCertificateId = this.firstCertificateId;
      console.log(firstCertificateId);
      let itemActive = this.demandlistActive_[firstCertificateId];
      console.log(itemActive);
      console.log("二级二级2");
      if (!itemActive) {
        itemActive = [];
        this.demandlistActive_[firstCertificateId] = [];
      }
      this.grass_type = num || "";
      this.grass_name = str || ""; //name
      const _index = itemActive.indexOf(num);
      if (itemActive.indexOf(num) === -1) {
        this.demandlistActive_[firstCertificateId].push(num);
      } else {
        this.demandlistActive_[firstCertificateId].splice(_index, 1);
      }
      localStorage.setItem("grass_name", this.grass_name);
    },
    demandshurt() {
      this.dialogdemand = false;
      this._distinActive = [];
      console.log(this.grass_name);
      console.log(".........");
    },
    //招聘人数
    employaddClick() {
      this.dialoginemploy = true;
      this.$axios
        .post(window.ajaxSrc + "/client/index/people", {})
        .then(res => {
          if (res.status == "200") {
            this.employaddlist = res.data.data;
          }
        });
    },
    //招聘人数
    sendemployClick(num, str) {
      this.centnumsugerjustId = num;
      this.employsent_type = num || "";
      this.employsent_name = str || ""; //name
      localStorage.setItem("employsent_name", this.employsent_name);
      this.employaddClick();
      this.dialoginemploy = false;
      console.log(this.employsent_name);
    },
    employshurt() {
      this.dialoginemploy = false;
    },
    backwonderClick() {
      this.$router.push({ name: "enterprisesreleased" });
    },
    //企业发布
    announceClick() {
      let that = this;
      // if (!/^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/.test(that.resume_title)) {
      //   Toast("请输入标题的正确格式");
      //   return false;
      // }
      if (that.tripart_name == "") {
        Toast("请选择工作年限");
        return false;
      }
      if (that.provea_name == "") {
        Toast("请选择地区");
        return false;
      }
      if (that.remuner_name == "") {
        Toast("请选择薪资待遇");
        return false;
      }
      if (that.compest_name == "") {
        Toast("请选择职称名称");
        return false;
      }
      if (that.incul_name == "") {
        Toast("请选择学历名称");
        return false;
      }
      if (that.employsent_name == "") {
        Toast("请选择招聘人数");
        return false;
      }
      if (that.demand_name == "") {
        Toast("请选择证书要求");
        return false;
      }

      that.$axios
        .post(window.ajaxSrc + "/client/resume/add", {
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : "",
          resume_id: that.data.priseId ? that.data.priseId : "", //编辑的id
          work_experience_time: that.tripart_type ? that.tripart_type : "",
          expect_salary: that.remuner_type ? that.remuner_type : "",
          education: that.incul_type ? that.incul_type : "",
          job_people_num: that.employsent_type ? that.employsent_type : "",
          job_cert: localStorage.getItem("splendid")
            ? localStorage.getItem("splendid")
            : "", //证书要求  splendid
          inten_province: that.prover_type ? that.prover_type : "",
          inten_city: that.cityvea_type ? that.cityvea_type : "",
          inten_job: that.grade_type ? that.grade_type : "",
          job_desc: that.job_desc ? that.job_desc : "",
          work_type: that.workType ? that.workType : ""
        })
        .then(res => {
          if (res.data.code == "200") {
            Toast("发布成功");
            that.$router.push({ name: "enterprisesreleased" });
          }
        });
    }
  }
};
</script>
<style scoped>
.centaddhigh {
  /* width: 2.5rem; */
  /* border: 1px solid #ccc; */
  text-align: right;
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
.cent_num_add {
  border: 1px solid #52ae92;
  border-radius: 50%;
  margin-left: 0.05rem;
  padding: 0rem 0.04rem;
}
.distinction {
  color: rgba(136, 136, 136, 1);
  text-align: center;
  line-height: 0.44rem;
}
.corrections {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  background: #fff;
  color: #333;
  position: absolute;
  bottom: 0rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.4rem;
  font-size: 0.15rem;
}
.vanishadd {
  width: 1.1rem;
  height: 0.36rem;
  border: 1px solid rgba(4, 174, 146, 1);
  border-radius: 5px;
  color: rgba(4, 174, 146, 1);
  border: 0;
  outline: none;
  cursor: pointer;
  background: #fff;
  border: 1px solid #04ae92;
}
.renovateadd {
  width: 1.5rem;
  height: 0.36rem;
  background: rgba(4, 174, 146, 1);
  border-radius: 5px;
  color: rgba(255, 255, 255, 1);
  border: 0;
  outline: none;
  cursor: pointer;
}
.requirement {
  color: rgba(136, 136, 136, 1);
  text-align: center;
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
.zhecent {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 50;
}
.wrapadd {
  width: 1rem;
}
.proper {
  border-radius: 0.16rem;
  height: 0.32rem;
  line-height: 0.32rem;
  border: 1px solid #05ae92;
  width: 0.7rem;
  background: #fff;
  float: left;
  color: #05ae92;
  margin-left: 0.05rem;
  margin-top: 0.1rem;
  padding: 0 0.05rem;
}
.proper :nth-of-type(2n) {
  clear: left;
}
.proper:hover {
  color: #05ae92;
}
.sequence {
  width: 100%;
  float: right;
  height: 1.6rem;
  padding: 0 0.3rem;
  text-align: center;
  margin-top: 0.2rem;
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
}
.btn-group {
  width: 40%;
  line-height: 0.44rem;
}
.hello {
  display: flex;
  height: 100%;
  overflow-y: auto;
}
.addtents {
  color: rgba(136, 136, 136, 1);
  text-align: center;
}
.addtents:hover {
  color: #05ae92;
}
.wrap ul {
  background-color: #fff;
}
.wrap {
  width: 100%;
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
.inp_inp {
  border: 0;
  outline: none;
  width: 2rem;
  text-align: right;
}
.orientate {
  font-size: 0.14rem;
  color: rgba(153, 153, 153, 1);
  width: 2.5rem;
}
.outstanding {
  height: 0.3rem;
  line-height: 0.3rem;
  color: rgba(51, 51, 51, 1);
  font-size: 0.14rem;
}
.text_inp {
  width: 100%;
  height: 1.78rem;
  border: none;
  border: 1px solid #ccc;
  padding-left: 0.1rem;
}
.text_inp:focus {
  outline: none;
  border: 1px solid #ccc;
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
  background: #fff;
  color: rgba(51, 51, 51, 1);
  font-size: 0.18rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  margin-bottom: 0.07rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
}
.add_img img {
  height: 0.22rem;
}
.section_resetting {
  height: auto;
  margin-top: 0.5rem;
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
  width: 0.1rem;
  vertical-align: middle;
}
.require_active {
  color: #04ae92;
}
.centlistsugerlist {
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
.centlistsaddsent {
  text-align: center;
}
.centlistaddswin {
  font-size: 0.14rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.enjersentlist {
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
.enjersentsent {
  text-align: center;
}
.enjersentsuger {
  font-size: 0.14rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.subsistaddlist {
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
.subsistaddcent {
  text-align: center;
}
.subsistaddwinder {
  font-size: 0.14rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.centnumsugerlist {
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
.centnumsugeradds {
  text-align: center;
}
.centnumsugerbuild {
  font-size: 0.14rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.centlistsent_Active {
  color: #05ae92;
}
.sendinculs_Active {
  color: #05ae92;
}
.addwinder_Active {
  color: #05ae92;
}
.centnumsugerjust_Active {
  color: #05ae92;
}
.showCream span {
  border: 1px solid #999;
  width: 0.57rem;
  height: 0.2rem;
  padding: 0.02rem 0.16rem;
  margin-left: 0.3rem;
}
.work_Active {
  color: #04ae92;
  border: 1px solid #04ae92 !important;
}
.gradesugeradd_Active {
  color: #05ae92;
}
.findeugeradd_Active {
  color: #05ae92;
}
.shengsenteradd_Active {
  color: #05ae92;
}
.citysenteradd_Active {
  color: #05ae92;
}
</style>
