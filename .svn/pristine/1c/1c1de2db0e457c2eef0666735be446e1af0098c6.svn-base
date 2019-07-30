// import index from "../views/index.vue";
// import home from "../views/home.vue";
// import addrelease from "../views/addrelease.vue";
// import curriculumvitae from "../views/curriculumvitae.vue";
// import recruit from "../views/recruit.vue";
// import information from "../views/information.vue";
// import mine from "../views/mine.vue";
// import release from "../views/release/release.vue";
// import collection from "../views/collection/collection.vue";
// import system from "../views/system/system.vue";
// import Login from "../views/Login/Login.vue";
// import register from "../views/register/register.vue";
// import agreement from "../views/agreement/agreement.vue";
// import verification from "../views/verification/verification.vue";
// import resetting from "../views/resetting/resetting.vue";
// import personalrequest from "../views/personalrequest/personalrequest.vue";
// import companyinformation from "../views/companyinformation/companyinformation.vue";
// import issueresume from "../views/issueresume/issueresume.vue";

// import announceadd from "../views/issueresume/announceadd.vue"; //个人发布中的额编辑
// import releaserecruitment from "../views/releaserecruitment/releaserecruitment.vue";
// import businesseditors from "../views/releaserecruitment/businesseditors.vue"; //企业中得发布列表中得编辑页

// import placeparticulars from "../views/placeparticulars/placeparticulars.vue";
// import detailcircumstance from "../views/placeparticulars/detailcircumstance.vue";
// import individualment from "../views/placeparticulars/individualment.vue";
// import detaillist from "../views/placeparticulars/detaillist.vue";
// import workexperience from "../views/workexperience/workexperience.vue";
// import registrationchoices from "../views/registrationchoices.vue";
// import steganogram from "../views/steganogram/steganogram.vue";
// import privacysettings from "../views/privacysettings/privacysettings.vue";
// import appendscreen from "../views/appendscreen/appendscreen.vue";
// import retriumphantly from "../views/retriumphantly/retriumphantly.vue";
// import enterprisesreleased from "../views/enterprisesreleased/enterprisesreleased.vue";
// import shieldcompany from "../views/shieldcompany/shieldcompany.vue";
// import concerning from "../views/concerning/concerning.vue";
// import conferenceroom from "../views/conferenceroom/conferenceroom.vue";
// import amend from "../views/amend/amend.vue"; //修改手机号码

const home = () => import("../views/home.vue");
const index = () => import("../views/index.vue");
const recruit = () => import("../views/recruit.vue");
const curriculumvitae = () => import("../views/curriculumvitae.vue");
const information = () => import("../views/information.vue");
const addrelease = () => import("../views/addrelease.vue");
const mine = () => import("../views/mine.vue");
const registrationchoices = () => import("../views/registrationchoices.vue");
const release = () => import("../views/release/release.vue");
const collection = () => import("../views/collection/collection.vue");
const system = () => import("../views/system/system.vue");
const Login = () => import("../views/Login/Login.vue");
const detaillist = () => import("../views/placeparticulars/detaillist.vue");

const todoactive = () => import("../views/placeparticulars/todoactive.vue");

const register = () => import("../views/register/register.vue");
const agreement = () => import("../views/agreement/agreement.vue");
const verification = () => import("../views/verification/verification.vue");
const resetting = () => import("../views/resetting/resetting.vue");
const personalrequest = () =>
  import("../views/personalrequest/personalrequest.vue");
const companyinformation = () =>
  import("../views/companyinformation/companyinformation.vue");
const issueresume = () => import("../views/issueresume/issueresume.vue");
const announceadd = () => import("../views/issueresume/announceadd.vue");
const releaserecruitment = () =>
  import("../views/releaserecruitment/releaserecruitment.vue");
const businesseditors = () =>
  import("../views/releaserecruitment/businesseditors.vue");
const placeparticulars = () =>
  import("../views/placeparticulars/placeparticulars.vue");
const detailcircumstance = () =>
  import("../views/placeparticulars/detailcircumstance.vue");
const individualment = () =>
  import("../views/placeparticulars/individualment.vue");
const workexperience = () =>
  import("../views/workexperience/workexperience.vue");
const steganogram = () => import("../views/steganogram/steganogram.vue");
const amend = () => import("../views/amend/amend.vue");
const retriumphantly = () =>
  import("../views/retriumphantly/retriumphantly.vue");
const privacysettings = () =>
  import("../views/privacysettings/privacysettings.vue");
const appendscreen = () => import("../views/appendscreen/appendscreen.vue");
const concerning = () => import("../views/concerning/concerning.vue");
const about = () => import("../views/concerning/about.vue");
const info = () => import("../views/concerning/info.vue");
const enterprisesreleased = () =>
  import("../views/enterprisesreleased/enterprisesreleased.vue");
const shieldcompany = () => import("../views/shieldcompany/shieldcompany.vue");
const conferenceroom = () =>
  import("../views/conferenceroom/conferenceroom.vue");

const firm = () => import("../views/subjobs/firm.vue"); //招聘企业
const corporation = () => import("../views/corporation/corporation.vue"); //公司详情

const recommendRC = () => import("../views/recommendRC.vue");

const recommendZW = () => import("../views/recommendZW.vue");
let routes = [
  {
    path: "/",
    redirect: "/index/recruit"
    // redirect: "/registrationchoices.vue"
    // redirect: "/index/recruit.vue"
  },
  {
    name: "index",
    path: "/index",
    // path: "/index/:id",
    component: index,
    //component: require('../views/index'),
    children: [
      {
        name: "home", //首页
        path: "home",
        component: home
      },
      {
        name: "recruit", //招聘
        path: "recruit",
        component: recruit
      },
      {
        name: "information",
        path: "information",
        component: information
      },
      {
        name: "addrelease",
        path: "addrelease",
        component: addrelease
      },
      {
        name: "curriculumvitae", //简历
        path: "curriculumvitae",
        component: curriculumvitae
      },
      {
        name: "mine", //我的
        path: "mine",
        component: mine
      },
      {
        name: "recommendRC", //推荐人才
        path: "recommendRC",
        component: recommendRC
      },
      {
        name: "recommendZW", //推荐职位
        path: "recommendZW",
        component: recommendZW
      }
    ]
  },
  {
    name: "registrationchoices",
    path: "/registrationchoices/:id",
    // path: "/registrationchoices.vue",
    component: registrationchoices
  },
  {
    name: "release",
    path: "/release",
    component: release
  },
  {
    name: "collection",
    path: "/collection",
    component: collection
  },
  {
    name: "system",
    path: "/system",
    component: system
  },
  {
    name: "Login",
    path: "/Login",
    component: Login
  },
  {
    name: "detaillist",
    path: "/detaillist",
    component: detaillist
  },
  {
    name: "todoactive",
    path: "/todoactive",
    component: todoactive
  },
  {
    name: "register",
    path: "/register",
    component: register
  },
  {
    name: "agreement",
    path: "/agreement",
    component: agreement
  },
  {
    name: "verification",
    path: "/verification",
    component: verification
  },
  {
    name: "resetting",
    path: "/resetting",
    component: resetting
  },
  {
    name: "personalrequest",
    path: "/personalrequest",
    component: personalrequest
  },
  {
    name: "companyinformation",
    path: "/companyinformation",
    component: companyinformation
  },
  {
    name: "issueresume",
    path: "/issueresume",
    component: issueresume
  },
  {
    name: "announceadd",
    path: "/announceadd",
    component: announceadd
  },
  {
    name: "releaserecruitment",
    path: "/releaserecruitment",
    component: releaserecruitment
  },
  {
    name: "businesseditors",
    path: "/businesseditors",
    component: businesseditors
  },
  {
    name: "placeparticulars",
    path: "/placeparticulars",
    component: placeparticulars
  },
  {
    name: "detailcircumstance",
    path: "/detailcircumstance",
    component: detailcircumstance
  },
  {
    name: "individualment",
    path: "/individualment",
    component: individualment
  },
  {
    name: "workexperience",
    path: "/workexperience",
    component: workexperience
  },
  {
    name: "steganogram",
    path: "/steganogram",
    component: steganogram
  },
  {
    name: "amend",
    path: "/amend",
    component: amend
  },
  {
    name: "retriumphantly",
    path: "/retriumphantly",
    component: retriumphantly
  },
  {
    name: "privacysettings",
    path: "/privacysettings",
    component: privacysettings
  },
  {
    name: "appendscreen",
    path: "/appendscreen",
    component: appendscreen
  },
  {
    name: "concerning",
    path: "/concerning",
    component: concerning
  },
  {
    name: "about",
    path: "/about",
    component: about
  },
  {
    name: "info",
    path: "/info",
    component: info
  },
  {
    name: "enterprisesreleased",
    path: "/enterprisesreleased",
    component: enterprisesreleased
  },
  {
    name: "shieldcompany",
    path: "/shieldcompany",
    component: shieldcompany
  },
  {
    name: "conferenceroom",
    path: "/conferenceroom",
    component: conferenceroom
  },
  {
    name: "firm", //招聘企业
    path: "/firm",
    component: firm
  },
  {
    name: "corporation", //公司详情
    path: "/corporation",
    component: corporation
  },
  {
    name: "recommendRC", //推荐人才
    path: "/recommendRC",
    component: recommendRC
  },
  {
    name: "recommendZW", //推荐职位
    path: "/recommendZW",
    component: recommendZW
  }
];
export default routes; //抛出
