"use strict";(self.webpackChunkwebsite_editor=self.webpackChunkwebsite_editor||[]).push([[300],{726:(e,t,s)=>{s.d(t,{OE:()=>y,QF:()=>d,Rt:()=>l,Xi:()=>f,ZU:()=>c,bl:()=>n,hH:()=>u,m3:()=>b,mi:()=>m,nC:()=>i,nZ:()=>g,oO:()=>r,rs:()=>h,ti:()=>k});const n=(0,s(867).FB)(),a=`${n}.com`,o="https://cloud.tagbox.com",i="https://api.taggbox.com",r=`https://app.${a}`,c=`${o}/react-app/media`,l=`https://widget.${a}`,d=`${l}/`,h="6",p=`${i}/website-api/v1`,m=`${o}/website/micro-tool-json/content-${n}.json`,u=`${p}/theme/get-theme`,f=`${p}/feed/create-feed`,g=`${p}/feed/search-autocomplete`,y=`${i}/api/v1/user/signUp`,b=`${i}/api/v1/user/checkUserExist`,k="https://ipinfo.io/json?token=f8cbcfd57fe1f1"},313:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(246),a=s(726),o=s(867);const i=e=>{const t=(0,o.yN)("accessToken"),s={guestid:(0,o.yN)("referenceId"),authorization:`Bearer ${t}`};return{...e,headers:{...s,...e.headers}}};const r=class{constructor(){const e={baseURL:a.nC},t=n.A.create(e);return t.interceptors.request.use(i),n.A.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t}}},402:(e,t,s)=>{s.d(t,{A:()=>o});var n=s(726),a=s(414);const o=e=>{const{altTxt:t,clsname:s,path:o,isPrefix:i}=e;return(0,a.jsx)("img",{src:`${i?"":n.ZU}${o}`,alt:t,className:s,...e})}},919:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var n=s(950),a=s(300),o=s(867),i=s(271),r=s(726),c=s(313);const l=(e,t,s,n)=>a=>{let l=(0,o.yN)("referenceId");l||(l=`TGB-${Date.now()}-${Math.floor(1e4*Math.random())}`,(0,o.UW)("referenceId",l)),a({type:i.zh,payload:l}),(e=>(new c.A).get(`${r.hH}?networkId=${e}`))(e).then((r=>{if(null!==r&&void 0!==r&&r.data){const{data:c,statusCode:l}=r.data;if(200==l&&Object.keys(c||{}).length>0){const{themes:r,personalization:l,redisData:d,token:h}=c;if((0,o.UW)("accessToken",h),(null===r||void 0===r?void 0:r.length)>0){const n=(0,o.v4)(t,r),c=n.find((e=>e.themeId==s));a({type:i.H$,payload:{selectedTheme:c,networkId:e}});const d={themes:n,Personalization:l};(0,o.UW)(`widgetThemes-${e}`,d),a({type:i.Vp,payload:{...d,token:h}})}if(null!==d&&void 0!==d&&d.postData){const{postData:t}=d;(0,o.UW)(`postCreated-${e}`,t),(0,o.UW)(`feedCreated-${e}`,1),a({type:i.xg,payload:t})}n&&n(!0)}else n&&n(!1)}})).catch((e=>{n&&n(!1)}))};var d=s(402),h=s(414);const p=(0,n.lazy)((()=>s.e(893).then(s.bind(s,893)))),m=(0,n.lazy)((()=>s.e(616).then(s.bind(s,616)))),u=(0,n.lazy)((()=>s.e(15).then(s.bind(s,15)))),f=(0,n.lazy)((()=>s.e(111).then(s.bind(s,111)))),g=(0,n.lazy)((()=>s.e(810).then(s.bind(s,810)))),y={step:0,noFdCrt:0,networkId:0,netName:"",isMobile:!1,mbOpt:!0,request:!1};class b extends n.Component{constructor(e){var t;super(e),t=this,this.getCNT=()=>{const{stCNT:e}=this.props;(new c.A).get(`${r.mi}?v=1.0.0`).then((t=>{if(null!==t&&void 0!==t&&t.data){const s=t.data;if(e(s),s.dummyThemes){const{id:e,name:t}=(0,o.zD)();this.setState({networkId:e,netName:t},(()=>this.checkStep(s.dummyThemes)))}}})).catch((e=>console.error("ex content",e)))},this.getDWidth=()=>{const e=document.querySelector(".micro-main");e&&this.setState({isMobile:e.offsetWidth<768})},this.checkStep=e=>{const{networkId:t}=this.state,{stTH:s,stSelTH:n,stRfId:a,stPost:i}=this.props;let r=0,c=0;const l=(0,o.yN)("referenceId"),d=(0,o.yN)("accessToken"),h=(0,o.yN)(`widgetThemes-${t}`),p=(0,o.yN)(`feedCreated-${t}`),m=(0,o.yN)(`postCreated-${t}`),u=(0,o.yN)(`selectedTheme-${t}`);l&&d&&h&&Object.keys(h).length>0&&h.themes&&h.Personalization&&(r=1,m&&(c=p||0,r=2));let f=[],g={};0==r?f=e&&Object.keys(e).length>0?e[t]:[]:(2==r&&i(m),f=h.themes,g=h.Personalization),a(l),s(f,g,d),f.length>0&&n(u||f[0],t),this.setState({step:r,noFdCrt:c})},this.resetState=()=>{const{networkId:e,netName:t}=this.state;this.setState({...y,networkId:e,netName:t})},this.moveStep=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const{step:s,networkId:n,noFdCrt:a}=t.state,{getThemes:i,themeData:r}=t.props;if(0==s){const{selectedTheme:e,themes:s}=r;t.setState({request:!0}),i(n,s,e.themeId,(e=>{t.setState({request:!1,step:e?1:0})}))}else if(1==s){const s=e?a+1:a;t.setState({step:2,noFdCrt:s},(()=>{(0,o.UW)(`feedCreated-${n}`,s)}))}else t.setState({step:3})},this.setActiveTab=e=>this.setState({step:e}),this.state={...y}}componentDidMount(){this.getCNT(),this.getDWidth(),window.addEventListener("resize",this.getDWidth)}componentWillUnmount(){window.removeEventListener("resize",this.getDWidth)}render(){const{step:e,networkId:t,isMobile:s,mbOpt:a,netName:o,noFdCrt:i}=this.state,{content:c,themeData:l}=this.props;return(0,h.jsxs)("div",{className:`micro-main website-${r.bl}`,children:[(0,h.jsx)(n.Suspense,{fallback:null,children:(0,h.jsx)(p,{title:`${o} Widget`,step:e,backAction:()=>this.setState({step:2})})}),(0,h.jsxs)("div",{className:"micro-inn",children:[s?(0,h.jsxs)("div",{className:"mi-mobile-gear "+(a?"":"open"),onClick:()=>this.setState({mbOpt:!a}),children:[(0,h.jsx)(d.A,{path:"/micro/gear.svg",altTxt:"gear",clsname:"img-fluid"}),(0,h.jsx)(d.A,{path:"/micro/close.svg",altTxt:"close",clsname:"img-fluid"})]}):null,e>2?(0,h.jsx)(n.Suspense,{fallback:null,children:(0,h.jsx)(g,{selectedTheme:l.selectedTheme,networkId:t,content:c,resetState:this.resetState})}):(0,h.jsxs)(h.Fragment,{children:[s&&a?null:(0,h.jsxs)(h.Fragment,{children:[0==e?null:(0,h.jsx)(n.Suspense,{fallback:null,children:(0,h.jsx)(m,{...this.state,setActiveTab:this.setActiveTab})}),(0,h.jsx)(n.Suspense,{fallback:null,children:(0,h.jsx)(u,{...this.state,moveStep:this.moveStep})})]}),(0,h.jsx)(n.Suspense,{fallback:null,children:(0,h.jsx)(f,{noFdCrt:i})})]})]})]})}}const k=(0,a.Ng)((e=>({themeData:e.themeReducer,content:e.contentReducer.sCNT})),(e=>({stTH:function(t,s){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e({type:i.Vp,payload:{themes:t,Personalization:s,token:n}})},stSelTH:(t,s)=>e({type:i.H$,payload:{selectedTheme:t,networkId:s}}),stPost:t=>e({type:i.xg,payload:t}),stRfId:t=>e({type:i.zh,payload:t}),stCNT:t=>e({type:i.gZ,payload:t}),getThemes:(t,s,n,a)=>e(l(t,s,n,a))})))((0,n.memo)(b))}}]);