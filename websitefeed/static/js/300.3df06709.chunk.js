"use strict";(self.webpackChunkwebsite_editor=self.webpackChunkwebsite_editor||[]).push([[300],{4313:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(9246),a=s(6345),i=s(2867);const o=e=>{const t=(0,i.yN)("accessToken"),s={guestid:(0,i.yN)("referenceId"),authorization:`Bearer ${t}`};return{...e,headers:{...s,...e.headers}}};const r=class{constructor(){const e={baseURL:a.nC},t=n.A.create(e);return t.interceptors.request.use(o),n.A.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t}}},5402:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(6345),a=s(4414);const i=e=>{const{altTxt:t,clsname:s,path:i,isPrefix:o}=e;return(0,a.jsx)("img",{src:`${o?"":n.ZU}${i}`,alt:t,className:s,...e})}},5300:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var n=s(9950),a=s(300),i=s(2867),o=s(3271),r=s(6345),l=s(4313);const c=(e,t,s,n)=>a=>{let c=(0,i.yN)("referenceId");c||(c=`TGB-${Date.now()}-${Math.floor(1e4*Math.random())}`,(0,i.UW)("referenceId",c)),a({type:o.zh,payload:c}),(e=>(new l.A).get(`${r.hH}?networkId=${e}`))(e).then((r=>{if(null!==r&&void 0!==r&&r.data){const{data:l,statusCode:c}=r.data;if(200==c&&Object.keys(l||{}).length>0){const{themes:r,personalization:c,token:d,banner:h}=l;if((0,i.UW)("accessToken",d),(null===r||void 0===r?void 0:r.length)>0){const n=(0,i.v4)(t,r),l=n.find((e=>e.themeId==s));a({type:o.H$,payload:{selectedTheme:l,networkId:e}});const m={themes:n,Personalization:c,Banner:h};(0,i.UW)(`widgetThemes-${e}`,m),a({type:o.Vp,payload:{...m,token:d}})}n&&n(!0)}else n&&n(!1)}})).catch((e=>{n&&n(!1)}))};var d=s(5402),h=s(7836),m=s(4414);const p=(0,n.lazy)((()=>s.e(893).then(s.bind(s,2893)))),u=(0,n.lazy)((()=>s.e(616).then(s.bind(s,9616)))),y=(0,n.lazy)((()=>Promise.all([s.e(901),s.e(574)]).then(s.bind(s,2574)))),g=(0,n.lazy)((()=>s.e(111).then(s.bind(s,5111)))),f=(0,n.lazy)((()=>s.e(195).then(s.bind(s,3195)))),k={step:0,noFdCrt:0,networkId:0,netName:"",isMobile:!1,mbOpt:!0,request:!1};class b extends n.Component{constructor(e){var t;super(e),t=this,this.getCNT=()=>{(new l.A).get(`${r.mi}?v=1.0.0`).then((e=>{if(null!==e&&void 0!==e&&e.data){const t=e.data;if(this.props.stCNT(t),t.dummyThemes){const{id:e,name:s}=(0,i.zD)(),n=()=>this.setState({networkId:e,netName:s},(()=>this.checkStep(t.dummyThemes)));4==e?(0,i.Wx)(`https://maps.googleapis.com/maps/api/js?key=${(0,i.af)(h.i0)}&libraries=places`,n):n()}}})).catch((e=>console.error("ex content",e)))},this.getDWidth=()=>{const e=document.querySelector(".micro-main");e&&this.setState({isMobile:e.offsetWidth<768})},this.checkStep=e=>{var t;const{networkId:s}=this.state,{stTH:n,stSelTH:a,stRfId:o,stPost:r}=this.props;let l=0,c=0;const d=(0,i.yN)("referenceId"),h=(0,i.yN)("accessToken"),m=(0,i.yN)(`widgetThemes-${s}`),p=(0,i.yN)(`feedCreated-${s}`),u=(0,i.yN)(`postCreated-${s}`),y=null!==(t=(0,i.yN)(`reviewFilters-${s}`))&&void 0!==t?t:[],g=(0,i.yN)(`selectedTheme-${s}`);d&&h&&m&&Object.keys(m).length>0&&m.themes&&m.Personalization&&(l=1,u&&(c=p||0,l=2));let f=[],k={},b={};var v;0==l?f=e&&Object.keys(e).length>0?e[s]:[]:(2==l&&r({posts:u,reviewFilters:y}),f=m.themes,k=m.Personalization,b=null!==(v=m.Banner)&&void 0!==v?v:{});o(d),n({themes:f,Personalization:k,token:null!==h&&void 0!==h?h:null,Banner:b}),f.length>0&&a(g||f[0],s),this.setState({step:l,noFdCrt:c})},this.resetState=()=>{const{networkId:e,netName:t}=this.state;this.setState({...k,networkId:e,netName:t})},this.moveStep=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const{step:s,networkId:n,noFdCrt:a}=t.state,{getThemes:o,themeData:r}=t.props;if(0==s){const{selectedTheme:e,themes:s}=r;t.setState({request:!0}),o(n,s,e.themeId,(e=>{t.setState({request:!1,step:e?1:0})}))}else if(1==s){const s=e?a+1:a;t.setState({step:2,noFdCrt:s},(()=>{(0,i.UW)(`feedCreated-${n}`,s)}))}else t.setState({step:3})},this.setActiveTab=e=>this.setState({step:e}),this.state={...k}}componentDidMount(){this.getCNT(),this.getDWidth(),window.addEventListener("resize",this.getDWidth)}componentWillUnmount(){window.removeEventListener("resize",this.getDWidth)}render(){const{step:e,networkId:t,isMobile:s,mbOpt:a,netName:i,noFdCrt:o}=this.state,{content:l,themeData:c}=this.props;return(0,m.jsxs)("div",{className:`micro-main website-${r.bl}`,children:[(0,m.jsx)(n.Suspense,{fallback:null,children:(0,m.jsx)(p,{title:`${i} Widget`,step:e,backAction:()=>this.setState({step:2})})}),(0,m.jsxs)("div",{className:"micro-inn",children:[s?(0,m.jsxs)("div",{className:"mi-mobile-gear "+(a?"":"open"),onClick:()=>this.setState({mbOpt:!a}),children:[(0,m.jsx)(d.A,{path:"/micro/gear.svg",altTxt:"gear",clsname:"img-fluid"}),(0,m.jsx)(d.A,{path:"/micro/close.svg",altTxt:"close",clsname:"img-fluid"})]}):null,e>2?(0,m.jsx)(n.Suspense,{fallback:null,children:(0,m.jsx)(f,{selectedTheme:c.selectedTheme,networkId:t,content:l,resetState:this.resetState})}):(0,m.jsxs)(m.Fragment,{children:[s&&a?null:(0,m.jsxs)(m.Fragment,{children:[0==e?null:(0,m.jsx)(n.Suspense,{fallback:null,children:(0,m.jsx)(u,{...this.state,setActiveTab:this.setActiveTab})}),(0,m.jsx)(n.Suspense,{fallback:null,children:(0,m.jsx)(y,{...this.state,moveStep:this.moveStep})})]}),(0,m.jsx)(n.Suspense,{fallback:null,children:(0,m.jsx)(g,{noFdCrt:o})})]})]})]})}}const v=(0,a.Ng)((e=>({themeData:e.themeReducer,content:e.contentReducer.sCNT})),(e=>({stTH:t=>e({type:o.Vp,payload:t}),stSelTH:(t,s)=>e({type:o.H$,payload:{selectedTheme:t,networkId:s}}),stPost:t=>e({type:o.xg,payload:t}),stRfId:t=>e({type:o.zh,payload:t}),stCNT:t=>e({type:o.gZ,payload:t}),getThemes:(t,s,n,a)=>e(c(t,s,n,a))})))((0,n.memo)(b))}}]);