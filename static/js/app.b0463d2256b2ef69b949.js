webpackJsonp([0],[,,,function(t,e,s){"use strict";var a=s(1),i=s(42),n=s(6);a.a.use(i.a),e.a=new i.a.Store({state:{data:n.a}})},function(t,e,s){s(17);var a=s(0)(s(7),s(35),null,null);t.exports=a.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(1),i=s(4),n=s.n(i),r=s(3);a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:n.a},store:r.a})},function(t,e,s){"use strict";e.a={title:"Kylooe | bibu-shen@foxmail.com",name:"Kylooe",avatar:"./static/img/avatar.jpg",slogan:"不断学习的动力，无尽的可能性，全栈的心。",mail:"bibu-shen@foxmail.com",skill:[{name:"HTML5",level:9},{name:"CSS3",level:9},{name:"JavaScript",level:8},{name:"React",level:5},{name:"Vue",level:5}],projects:[{img:"./static/img/ihm.png",name:"澳门房屋局新官方网站",show:!0,keywords:["Brunch","sass","ES 6"],description:"澳门特别行政区政府房屋局新官方网站。个人负责前台除首页外的所有页面重构、UI 动效、基于 Vue 开发后台系统的部分组件等等。"},{img:"./static/img/gcs.png",name:"澳门新闻局照片征集平台",show:!0,keywords:["sass","ES 6","gulp"],description:"澳門特別行政區政府新聞局面向公众的照片征集平台。\n生成 twig，除内容型图片外所有视觉效果使用 CSS 完成，自动化构建使用 gulp。",demo:"https://photo.gcs.gov.mo/"},{img:"./static/img/marathon.png",name:"Macao Marathon 2017",show:!0,keywords:["Bootstrap","sass","Symfony 2.8","jQuery"],description:"在历年的冗余老代码基础上基于 Bootstrap 和 jQuery 进⾏新⼀年项⽬的开发，按照设计稿重构 PC 端和移动端布局样式。整理项⽬文件结构，编写项⽬文档。独立负责上述前端相关部分，以及同项⽬ App 中活动⻚的 WebView 调整。",demo:"http://www.macaomarathon.com/zh/"},{img:"./static/img/wms.png",name:"管理系统",show:!1,keywords:["TypeScript","Angular"],description:"一无所知时期瞎做的基于 Angular 2 框架开发的管理系统，十分粗糙，但第一次接触前端框架。",code:"https://github.com/Kylooe/ng2-wms"},{img:"./static/img/blog.png",name:"easy-blog",show:!0,keywords:["Pug(Jade)","Express","Node.js"],description:"使用 Node.js 基于 Express 框架搭建的小小博客系统，数据库使用 MongoDB，使用 Pug（Jade）作为模板引擎。\n接触并熟悉了一下 RESTful API。",code:"https://github.com/Kylooe/node-easy-blog"},{img:"./static/img/viso.png",name:"可视化音乐播放器",show:!0,keywords:["HTML 5 动画","Web Audio API","JavaScript","Canvas"],description:"使用 HTML 5 的 Web Audio API 实现的音频播放器，通过 Canvas 实时绘制可视化音频频域数据。\n实现了几种视觉效果，播放过程中切换流畅。",code:"http://www.github.com",demo:"http://kylooe.com/Exercises/2016/v-player/index.html"},{img:"./static/img/plane.png",name:"A Plane",show:!0,keywords:["Three.js","JavaScript","游戏"],description:"鼠标控制躲避障碍与碰撞得分的飞机小游戏，使用 Three.js 创建各模型与控制运动，结合 TwennMax.js 进行物体的缓动处理。\n配色参考家机游戏《风之旅人》。",code:"http://www.github.com",demo:"http://kylooe.com/Exercises/2016/plane/plane.html"},{img:"./static/img/plane.png",name:"很久以前的小白基础练习",show:!1,keywords:["CSS","JavaScript","HTML"],description:"刚开始接触HTML与CSS时做的各种CSS练习。",demo:"http://kylooe.com/Exercises/"}]}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(27),i=s.n(a),n=s(26),r=s.n(n),c=s(30),o=s.n(c),l=s(32),u=s.n(l),v=s(31),d=s.n(v),p=s(28),f=s.n(p),h=s(29),_=s.n(h);e.default={name:"resume",data:function(){return{pages:["profile","skill","project","education"],current:0,isFullPage:!0,isLandscape:!1,lock:!1,touchY:0}},mounted:function(){},methods:{to:function(t){this.current=t},change:function(t){this.isFullPage=!t},fullscroll:function(t){var e=this;t=t||window.event;var s=t.wheelDelta?t.wheelDelta:-t.detail;if(t.stopPropagation(),t.preventDefault(),!this.lock){if(s>0){if(0===this.current)return;this.current--}else if(s<0){if(this.current===this.pages.length-1)return;this.current++}this.lock=!0,setTimeout(function(){e.lock=!1},800)}},touchmove:function(t){this.touchY=t.changedTouches[0].screenY},touchend:function(t){var e=this;if(0!==this.touchY&&!this.lock){var s=t.changedTouches[0].screenY;if(this.touchY-s>50){if(this.current===this.pages.length-1)return;this.current++}else if(this.touchY-s<-50){if(0===this.current)return;this.current--}this.lock=!0,setTimeout(function(){e.lock=!1},800)}}},components:{switcher:i.a,navigator:r.a,profile:o.a,skill:u.a,project:d.a,education:f.a,pdf:_.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navigator",props:["id"],data:function(){return{pages:["简介","技能","项目","教育"]}},methods:{linkTo:function(t){this.$emit("to",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"switcher",data:function(){return{isSingle:!1}},methods:{change:function(t){this.isSingle=t,this.$emit("change",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"pdf",data:function(){return{}},beforeMount:function(){this.projects=this.$store.state.data.projects.filter(function(t){return!0===t.show})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"profile",data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"project",data:function(){return{offset:0,rowNum:3,cardWidth:350,projects:[]}},beforeMount:function(){this.projects=this.$store.state.data.projects.filter(function(t){return!0===t.show}),window.innerWidth<=430&&(this.rowNum=1)},updated:function(){0===this.offset&&document.querySelector(".left").classList.add("disable"),this.offset===(this.projects.length-this.rowNum)*-this.cardWidth&&document.querySelector(".right").classList.add("disable")},methods:{arrow:function(t){var e=t.target.classList,s=e.contains("left"),a=s?0:(this.projects.length-this.rowNum)*-this.cardWidth;this.offset!==a&&(s?(this.offset+=this.cardWidth,document.querySelector(".right").classList.remove("disable")):(this.offset-=this.cardWidth,document.querySelector(".left").classList.remove("disable")))}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"skill",data:function(){return{weight:30}},beforeMount:function(){window.innerWidth<=430&&(this.weight=15)},computed:{skillStyle:function(){return{background:"linear-gradient(90deg, #fff "+this.weight/3*2+"px, transparent "+this.weight/3+"px)",backgroundSize:this.weight+"px 100%"}}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,s){s(19);var a=s(0)(s(8),s(37),"data-v-32b4f226",null);t.exports=a.exports},function(t,e,s){s(16);var a=s(0)(s(9),s(34),null,null);t.exports=a.exports},function(t,e,s){s(20);var a=s(0)(s(10),s(38),"data-v-5abcb376",null);t.exports=a.exports},function(t,e,s){s(18);var a=s(0)(s(11),s(36),"data-v-22e3e24f",null);t.exports=a.exports},function(t,e,s){s(15);var a=s(0)(s(12),s(33),"data-v-0997c5f4",null);t.exports=a.exports},function(t,e,s){s(21);var a=s(0)(s(13),s(39),"data-v-8ed0b314",null);t.exports=a.exports},function(t,e,s){s(22);var a=s(0)(s(14),s(40),"data-v-d5875224",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("img",{staticClass:"avatar",attrs:{src:t.$store.state.data.avatar}}),t._v(" "),s("h1",{staticClass:"title"},[t._v(t._s(t.$store.state.data.name))]),t._v(" "),s("p",{staticClass:"slogan"},[t._v(t._s(t.$store.state.data.slogan))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"social"},[s("a",{attrs:{href:"http://github.com/Kylooe"}},[s("svg",{staticClass:"logo",attrs:{"aria-hidden":"true",height:"32",width:"32",viewBox:"0 0 16 16"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Email: "),s("a",{attrs:{href:"mailto:bibu-shen@foxmail.com",target:"_blank"}},[t._v("bibu-shen@foxmail.com")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"switcher",class:{single:t.isSingle}},[s("span",{on:{click:function(e){t.change(!1)}}},[t._v("多")]),t._v(" "),s("span",{on:{click:function(e){t.change(!0)}}},[t._v("单")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"resume"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLandscape,expression:"isLandscape"}]},[s("p",[t._v("手机横屏显示效果很炸啦，还是竖屏看吧(`·ω·´)")])]),t._v(" "),s("switcher",{on:{change:t.change}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isFullPage,expression:"isFullPage"}],staticClass:"fullpage",on:{mousewheel:t.fullscroll,DOMMouseScroll:t.fullscroll,touchmove:function(e){e.preventDefault(),t.touchmove(e)},touchend:function(e){e.preventDefault(),t.touchend(e)}}},[s("navigator",{attrs:{id:t.current},on:{to:t.to}}),t._v(" "),t._l(t.pages,function(e,a){return s("div",{staticClass:"page",class:{current:t.current===a,pre:t.current>a,next:t.current<a}},[s(e,{tag:"component"})],1)})],2),t._v(" "),s("pdf",{directives:[{name:"show",rawName:"v-show",value:!t.isFullPage,expression:"!isFullPage"}]})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"sidebar"},[s("img",{staticClass:"avatar",attrs:{src:t.$store.state.data.avatar}}),t._v(" "),s("h1",{staticClass:"title"},[t._v(t._s(t.$store.state.data.name))]),t._v(" "),s("p",{staticClass:"contact"},[t._v(t._s(t.$store.state.data.mail))]),t._v(" "),s("p",[t._v("应聘职位")]),t._v(" "),s("p",{staticClass:"job"},[t._v("Web前端开发工程师")]),t._v(" "),s("div",{staticClass:"skill"},[s("p",[t._v("个人技能")]),t._v(" "),t._l(t.$store.state.data.skill,function(e){return s("p",{staticClass:"skill"},[s("span",{staticClass:"skill-name"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"level",style:{width:15*e.level+"px"}})])}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)],2)]),t._v(" "),s("div",{staticClass:"main"},[t._m(3),t._v(" "),s("div",{staticClass:"part"},[s("p",{staticClass:"subtitle"},[t._v("在线项目")]),t._v(" "),s("ul",t._l(t.projects,function(e){return s("li",[s("p",[s("a",{staticClass:"project-name",attrs:{href:e.demo?e.demo:e.code}},[t._v(t._s(e.name))]),t._v(" "),t._l(e.keywords,function(e){return s("span",{staticClass:"keyword"},[t._v(t._s(e))])})],2),t._v(" "),s("p",{staticClass:"desc"},[t._v(t._s(e.description))]),t._v(" "),s("img",{staticClass:"project-img",attrs:{src:e.img,alt:"图显示不出来"}})])}))]),t._v(" "),t._m(4),t._v(" "),t._m(5)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"skill"},[s("span",{staticClass:"skill-name"},[t._v("英语")]),s("span",[t._v("左手Google右手Stack Overflow")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"skill"},[s("span",{staticClass:"skill-name"},[t._v("日语")]),s("span",[t._v("日常交流水平读写")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"skill"},[s("span",{staticClass:"skill-name"},[t._v("粤语")]),s("span",[t._v("母语")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"part"},[s("p",{staticClass:"subtitle"},[t._v("个人简介")]),t._v(" "),s("p",[t._v("关注交互体验，擅长逻辑实现。有设计思维，对页面重构有现代化产品审美。\n      可无障碍阅读英文开发文档及其他技术资料，常使用 Stack Overflow 等解决开发困惑。\n      通过 Git 对代码进行版本控制及托管。习惯使用 Mac OS 进行开发。\n      具有 All in 的身心状态，热爱学习，有内驱力。有一颗做全栈的心！\n      ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"part"},[s("p",{staticClass:"subtitle"},[t._v("工作经历")]),t._v(" "),s("p",{staticClass:"point"},[t._v("珠海唯思科技/澳门唯创科技"),s("span",{staticClass:"time"},[t._v("2017.07 - 现在")])]),t._v(" "),s("p",[t._v("经手项目基本为前台展示+后台管理的结构，本人通常负责根据设计稿实现项目前台全站多语言多终端的所有布局样式和交互逻辑，生成 HTML 结构模板和所需的 CSS 与 JS 供后端于 PHP 框架中使用。\n        在职期间公司项目开发基本仍使用前端生成模板+后端套页面的模式，对此本人倾向于编写简洁明了的页面结构，使用 SASS 模块化样式，效率允许范围内使用原生 JavaScript 或 jQuery 直接实现所有交互逻辑，力求简单高效，令后端必要时也可以无障碍进行修改。\n        间或使用 Vue 或 React 为项目的后台系统提供数据操作组件，如动态表单、前台用户权限统一管理等等；重构 React-native 项目的页面布局和调整UI。\n      ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"part"},[s("p",{staticClass:"subtitle"},[t._v("教育背景")]),t._v(" "),s("p",{staticClass:"point"},[t._v("深圳大学"),s("span",{staticClass:"time"},[t._v("2013.09 - 2017.06")])]),t._v(" "),s("p",[t._v("本科。集成电路设计与集成系统专业。\n        制作过多个与专业相关的硬件开发小项目。\n        在校曾于学生会权益部任职学生干事，参与组织策划及成功开展了多场规模至少达百人的活动。\n        凭兴趣自学 Unity 3D 并创作体感游戏，完成后被推荐参赛并获中国大学生计算机设计大赛全国二等奖。\n        做过志愿者。爱猫，熟识活动范围内的流浪猫群体，进行过流浪猫救助与救治重病流浪猫善款募捐。\n      ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navigator"},t._l(t.pages,function(e,a){return s("div",{staticClass:"item"},[s("a",{staticClass:"link",class:{active:t.id===a},on:{click:function(e){t.linkTo(a)}}},[s("span",{class:{hide:t.id!==a}},[t._v("\n        "+t._s(t.pages[a])+"\n      ")])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",{staticClass:"title"},[t._v("经历")]),t._v(" "),s("div",{staticClass:"content"},[s("ul",[s("li",[s("p",{staticClass:"time"},[t._v("2013 - 2017")]),t._v(" "),s("h3",[t._v("深圳大学")]),t._v(" "),s("p",[t._v("本科 · 集成电路设计与集成系统")])]),t._v(" "),s("li",[s("p",{staticClass:"time"},[t._v("2017.07 - 现在")]),t._v(" "),s("h3",[t._v("珠海唯思科技/澳门唯创科技")]),t._v(" "),s("p",[t._v("前端开发")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",{staticClass:"title"},[t._v("项目")]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"wrapper"},[s("ul",{staticClass:"projects",style:{left:t.offset+"px"}},t._l(t.projects,function(e){return s("li",{staticClass:"project"},[s("p",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),s("img",{attrs:{src:e.img,alt:"图显示不出来"}}),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(e.description))]),t._v(" "),e.code?s("a",{attrs:{href:e.code,target:"_blank"}},[t._v("源码")]):t._e(),t._v(" "),e.demo?s("a",{attrs:{href:e.demo,target:"_blank"}},[t._v("DEMO")]):t._e()])}))]),t._v(" "),s("div",{staticClass:"left disable",on:{click:t.arrow,touchstart:t.arrow}},[t._v("<")]),t._v(" "),s("div",{staticClass:"right",on:{click:t.arrow,touchstart:t.arrow}},[t._v(">")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h2",{staticClass:"title"},[t._v("技能")]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"skills"},t._l(t.$store.state.data.skill,function(e){return s("div",{staticClass:"skill"},[s("p",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"level",style:[{width:e.level*t.weight+"px"},t.skillStyle]})])})),t._v(" "),s("div",{staticClass:"other"})])])},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.b0463d2256b2ef69b949.js.map