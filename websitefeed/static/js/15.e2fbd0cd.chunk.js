"use strict";(self.webpackChunkwebsite_editor=self.webpackChunkwebsite_editor||[]).push([[15],{15:(e,t,l)=>{l.r(t),l.d(t,{default:()=>L});var s=l(300),i=l(414);const n=e=>{let{loading:t,onSubmit:l,title:s}=e;return(0,i.jsx)("button",{type:"button",className:`btn btn-mi-theme ${t?"spinner spinner-right disabled":""} ml-2`,onClick:t?()=>{}:l,children:s})};var r=l(402),d=l(271);const a=e=>{let{networkId:t,step:l,request:a,moveStep:o}=e;const{themes:h,selectedTheme:c}=(0,s.d4)((e=>e.themeReducer),s.bN),u=(0,s.wA)();return(0,i.jsxs)("div",{className:"mi-theme-cont",children:[(0,i.jsx)("div",{className:"mi-theme",children:h.map(((e,l)=>{const{name:s,themeId:n}=e;return(0,i.jsx)("div",{className:n==c.themeId?"active":"",onClick:()=>(e=>u({type:d.H$,payload:{selectedTheme:e,networkId:t}}))(e),children:(0,i.jsx)("i",{children:(0,i.jsx)(r.A,{path:`/theme/${n}.png`,altTxt:s})})},l)}))}),(0,i.jsx)("div",{className:"mi-commonbtn",children:(0,i.jsx)(n,{loading:a,onSubmit:o,title:0==l?"Use This Template":"Add to Your Website"})})]})};var o=l(950),h=l(715);const c=e=>{let{description:t,descExam:l,loading:s,errorMsg:d,onSubmit:a,children:o}=e;return(0,i.jsxs)("div",{className:"mi-source-field",children:[o,(0,i.jsxs)("div",{className:"mi-feedbottomcont",children:[(0,i.jsx)("span",{children:(0,i.jsx)(r.A,{path:"/micro/info-circle.svg",altTxt:"info"})}),(0,i.jsxs)("div",{className:"mi-feedinfo",children:[(null===t||void 0===t?void 0:t.length)>0?(0,i.jsx)("p",{children:t}):null,(null===l||void 0===l?void 0:l.length)>0?(0,i.jsx)("p",{children:l}):null]})]}),(null===d||void 0===d?void 0:d.length)>0?(0,i.jsxs)("div",{className:"mi-alert",role:"alert",children:[(0,i.jsx)(r.A,{path:"/micro/exclamation.svg",altTxt:"alert"}),d]}):null,(0,i.jsx)("div",{className:"mi-feedsubmit",children:(0,i.jsx)(n,{loading:s,onSubmit:a,title:"Create Widget"})})]})};var u=l(313),p=l(726),v=l(867);const m=(e,t)=>l=>{(e=>(new u.A).post(p.Xi,e))(e).then((s=>{if(null!==s&&void 0!==s&&s.data){var i;const{data:n,statusCode:r,message:a}=s.data;200===r&&(null===n||void 0===n||null===(i=n.postData)||void 0===i?void 0:i.length)>0?((0,v.UW)(`selectedFilter-${e.networkId}`,e),(0,v.UW)(`postCreated-${e.networkId}`,n.postData),l({type:d.xg,payload:n.postData}),null===t||void 0===t||t(!0,"")):null===t||void 0===t||t(!1,a)}})).catch((e=>{var l,s;null===t||void 0===t||t(!1,(null===e||void 0===e||null===(l=e.response)||void 0===l||null===(s=l.data)||void 0===s?void 0:s.message)||"")}))},f="This field is required.",x="Please enter a value",g="Please select an option",j="No results found.";function I(e){let{filterId:t,networkId:l,moveStep:n,dfPayload:r,content:d}=e;const{label:a,description:u,placeHolder:p,descExam:x}=d,[g,j]=(0,o.useState)({hashtag:"",handle:"",feedError:"",error:!1,handleError:!1,loading:!1}),I=(0,s.wA)();return(0,o.useEffect)((()=>{if(r&&Object.keys(r).length>0){const{filterId:e,feedText:t}=r;26==e?j((e=>({...e,hashtag:t}))):23==e&&j((e=>({...e,handle:t})))}}),[r]),(0,i.jsxs)(c,{description:u,descExam:x,errorMsg:g.feedError,loading:g.loading,onSubmit:()=>{const{hashtag:e,handle:s}=g;if(0==e.trim().length&&26==t)j((e=>({...e,error:!0})));else if(0==s.trim().length&&23==t)j((e=>({...e,handleError:!0})));else{j((e=>({...e,loading:!0,error:!1,handleError:!1})));const i={networkId:l,filterId:t,feedText:26==t?e.split("#").join(""):(0,v.nN)("instagram.com/",s.split("@").join(""))};if(r&&Object.keys(r).length>0&&r.filterId==i.filterId&&r.feedText==i.feedText)return void setTimeout((()=>{n(!1),j((e=>({...e,loading:!1})))}),2e3);I(m(i,((e,t)=>{if(j((e=>({...e,loading:!1}))),e)n();else{let e=null;j((e=>({...e,feedError:t}))),e&&clearTimeout(e),e=setTimeout((()=>j((e=>({...e,feedError:""})))),3e3)}})))}},children:[a.length>0?(0,i.jsx)("label",{children:a}):null,(0,i.jsx)(h.A,{value:26==t?g.hashtag:g.handle,chngeAC:e=>{let{target:{name:t,value:l}}=e;const s="hashtag"===t?null:g.error,i="hashtag"===t?g.handleError:null;j((e=>({...e,[t]:l,error:s,handleError:i})))},name:26==t?"hashtag":"handle",ph:p}),26==t&&g.error||23==t&&g.handleError?(0,i.jsx)("span",{id:"feedserror",className:"errorMessage",children:f}):null]})}const y=e=>{let{list:t,updateValue:l}=e;const[s,n]=(0,o.useState)(!1),[r,d]=(0,o.useState)(t[0]),a=e=>{n(e)};return(0,i.jsxs)("div",{class:"dropdown",children:[(0,i.jsx)("button",{class:"dropdown-btn",onClick:()=>a(!s),children:r.label}),s?(0,i.jsx)("div",{class:"dropdown-content",children:t.map(((e,t)=>(0,i.jsx)("div",{class:"dropdown-item",onClick:()=>(e=>{a(!1),d(e),l(e.value)})(e),children:e.label},t)))}):null]})};class C extends o.Component{constructor(e){super(e),this.aCText=(0,v.eD)(((e,t)=>{const{filterId:l,onClCh:s}=this.props,i=String(e).length;if(i&&[11,1,75].includes(l))try{var n;const a=11==l&&("list"!=t||/(list=PL|^PL|^UC)/.test(String(e))),o=a?"playlist":"channel",h={showPlDd:a};"/"==e[i-1]&&e.substring(0,i-1),e.includes("@")&&(e=null!==(n=(0,v.gK)(e))&&void 0!==n?n:e),s(""),(r=e,d=o,(new u.A).post(p.nZ,{networkId:7,filterType:d,url:r})).then((e=>{const{data:l,statusCode:s}=e.data;if(200==s)if((null===l||void 0===l?void 0:l.length)>0){let e=l;"plLts"==t&&(e=(0,v.FY)(l,"snippet.title"),this.itemCl(l[0])),this.setState({[t]:e,...h})}else this.setState({[t]:[],ltErMsg:j,...h})})).catch((e=>{var l,s,i;this.setState({[t]:[],...h,ltErMsg:null!==(l=null===e||void 0===e||null===(s=e.response)||void 0===s||null===(i=s.data)||void 0===i?void 0:i.responseMessage)&&void 0!==l?l:j})}))}catch(a){this.setState({[t]:[],ltErMsg:j})}else this.setState({[t]:[]});var r,d})),this.chngeAC=(e,t)=>{const l=e.target.value;this.setState({ltErMsg:null,list:[],plLts:[]},(()=>this.props.onTxtCh(l))),(null===l||void 0===l?void 0:l.length)>2&&this.aCText(l,t)},this.getPl=e=>{const t={target:{name:"playList",value:e}};this.setState({list:[],plLts:[],ltErMsg:null},(()=>this.chngeAC(t,"plLts")))},this.itemCl=e=>{try{const{onTxtCh:t,onClCh:l,filterId:s}=this.props;this.setState({list:[],ltErMsg:null},(()=>{var i,n,r,d,a,o;t(null!==(i=null===e||void 0===e||null===(n=e.snippet)||void 0===n?void 0:n.title)&&void 0!==i?i:""),l(11==s?null===e||void 0===e||null===(r=e.snippet)||void 0===r?void 0:r.playlistId:75==s?null===e||void 0===e||null===(d=e.snippet)||void 0===d||null===(a=d.channelId)||void 0===a?void 0:a.replace("UC","UUSH"):null===e||void 0===e||null===(o=e.snippet)||void 0===o?void 0:o.channelId)}))}catch(t){}},this.state={showPlDd:!1,plLts:[],list:[],ltErMsg:null}}render(){var e;const{list:t,showPlDd:l,plLts:s,ltErMsg:n}=this.state,{value:r,name:d,errMsg:a,filterId:o,ph:c}=this.props;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"input-group position-relative",children:[(0,i.jsx)(h.A,{name:d,value:r,ph:c,chngeAC:e=>this.chngeAC(e,"list")}),t&&t.length>0?(0,i.jsx)("div",{className:"handlelist",children:(0,i.jsx)("ul",{className:"list-unstyled",children:t.map((e=>{var t,s,n,r,d,a;return(0,i.jsxs)("li",{onClick:11!=o||l?()=>this.itemCl(e):()=>{var t;return this.getPl(null===e||void 0===e||null===(t=e.snippet)||void 0===t?void 0:t.channelId)},children:[(0,i.jsx)("div",{className:"img-section",children:(0,i.jsx)("img",{src:null===e||void 0===e||null===(t=e.snippet)||void 0===t||null===(s=t.thumbnails)||void 0===s||null===(n=s.default)||void 0===n?void 0:n.url,alt:""})}),(0,i.jsxs)("div",{className:"content-section",children:[(0,i.jsx)("span",{children:null!==(r=null===e||void 0===e?void 0:e.snippet.title)&&void 0!==r?r:""}),(0,i.jsx)("p",{children:`https://www.youtube.com/${11==o&&l?"playlist?list=":"channel/"}${11==o&&l?null===e||void 0===e||null===(d=e.snippet)||void 0===d?void 0:d.playlistId:null===e||void 0===e||null===(a=e.snippet)||void 0===a?void 0:a.channelId}`})]})]},null===e||void 0===e?void 0:e.etag)}))})}):null]}),n||a?(0,i.jsx)("span",{id:"feedserror",className:"errorMessage required",children:null!==(e=null!==n&&void 0!==n?n:a)&&void 0!==e?e:f}):null,11==o&&l&&(null===s||void 0===s?void 0:s.length)>0&&(0,i.jsxs)("div",{id:"youtube_playlist_div",className:"mi-form-group form-group mb-0",children:[(0,i.jsx)("label",{htmlFor:"FeedWorkplaceGroup22",children:"Playlists"}),(0,i.jsx)(y,{list:s,updateValue:e=>this.itemCl(e)})]})]})}}const S=C,E={75:"shorts",11:"playList",1:"channel"};class b extends o.Component{constructor(e){super(e),this.onTxtCh=(e,t)=>{const{filterId:l}=this.props,s=`${E[l]}${t?"Id":""}`;this.setState({[s]:e,[`${s}Err`]:null})},this.onSubmit=()=>{const{channel:e,shorts:t,playList:l,channelId:s,shortsId:i,playListId:n}=this.state,{filterId:r,crtFD:d,moveStep:a,dfPayload:o}=this.props;if(1==r&&""==e)this.setState({channelErr:x});else if(75==r&&""==t)this.setState({shortsErr:x});else if(11==r&&""==l)this.setState({playListErr:x});else if(1==r&&""==s)this.setState({channelErr:g});else if(75==r&&""==i)this.setState({shortsErr:g});else if(11==r&&""==n)this.setState({playListErr:g});else{const h={networkId:7,filterId:r,feedText:1==r?e:75==r?t:l,channelId:1==r?s:75==r?i:n};if(this.setState({loading:!0,channelErr:null,shortsErr:null,playListErr:null}),o&&Object.keys(o).length>0&&o.filterId==h.filterId&&o.feedText==h.feedText)return void setTimeout((()=>{a(!1),this.setState({loading:!1})}),2e3);d(h,((e,t)=>{if(this.setState({loading:!1}),e)a();else{let e=null;this.setState({feedError:t}),e&&clearTimeout(e),e=setTimeout((()=>this.setState({feedError:""})),3e3)}}))}},this.state={channel:"",shorts:"",playList:"",channelId:"",shortsId:"",playListId:"",channelErr:null,playListErr:null,shortsErr:null,loading:!1,feedError:""}}componentDidUpdate(e){if(e.dfPayload!==this.props.dfPayload){const{filterId:e,feedText:t,channelId:l}=this.props.dfPayload;1==e?this.setState({channelId:l,channel:t}):75==e?this.setState({shortsId:l,shorts:t}):this.setState({playListId:l,playList:t})}}render(){const{channel:e,shorts:t,playList:l,channelErr:s,playListErr:n,shortsErr:r,feedError:d,loading:a}=this.state,{filterId:o,content:h}=this.props,{label:u,description:p,placeHolder:v,descExam:m}=h,f=E[o],x=75==o?t:11==o?l:e,g=75==o?r:11==o?n:s;return(0,i.jsxs)(c,{description:p,descExam:m,errorMsg:d,loading:a,onSubmit:this.onSubmit,children:[u.length>0?(0,i.jsx)("label",{children:u}):null,(0,i.jsx)(S,{filterId:o,onTxtCh:e=>this.onTxtCh(e,!1),onClCh:e=>this.onTxtCh(e,!0),value:x,name:f,ph:v,errMsg:g})]})}}const N=(0,s.Ng)(null,(e=>({crtFD:(t,l)=>e(m(t,l))})))(b),T=e=>{switch(e.networkId){case 18:return(0,i.jsx)(I,{...e});case 7:return(0,i.jsx)(N,{...e});default:return(0,i.jsx)(i.Fragment,{})}};class w extends o.Component{constructor(e){const{networkId:t,cntReducer:l}=e;super(e),this.handleClick=e=>this.setState({filterId:e}),this.state={filterId:l.dFL[t],flList:[],payload:null}}componentDidMount(){var e,t;const{networkId:l,cntReducer:s}=this.props,i=(null===(e=s.nTFL)||void 0===e?void 0:e[l])||[],n=(0,v.yN)(`selectedFilter-${l}`),r=(null===n||void 0===n?void 0:n.filterId)||(null===(t=i[0])||void 0===t?void 0:t.filterId)||this.state.filterId;this.setState({filterId:r,flList:i,payload:n})}render(){const{networkId:e,moveStep:t,cntReducer:l}=this.props,{filterId:s,flList:n,payload:r}=this.state,d=l.FLCNT,a=d.hasOwnProperty(e)?d[e][s]:d;return(0,i.jsxs)("div",{className:"mi-addfeed",children:[(0,i.jsx)("div",{className:"mi-sourcecontent",children:n.map(((e,t)=>{let{filterId:l,filterName:n}=e;return(0,i.jsx)("div",{className:l==s?"active":"",onClick:()=>this.handleClick(l),children:n},`${t}-${l}`)}))}),(0,i.jsx)("div",{className:"mi-feed",children:(0,i.jsx)(T,{filterId:s,networkId:e,moveStep:t,dfPayload:r,content:a})})]})}}const k=(0,s.Ng)((e=>({cntReducer:e.contentReducer})))(w),L=e=>(0,i.jsxs)("div",{className:"mi-source",children:[(0,i.jsx)("div",{className:"mi-source-title",children:(0,i.jsx)("p",{className:"m-0 text-center mi-title",children:1==e.step?"Source":"Select Theme"})}),1==e.step?(0,i.jsx)(k,{...e}):(0,i.jsx)(a,{...e})]})},715:(e,t,l)=>{l.d(t,{A:()=>i});var s=l(414);const i=e=>{let{value:t,chngeAC:l,name:i,className:n="",ph:r="",type:d="text"}=e;return(0,s.jsx)("input",{type:d,name:i,className:n,placeholder:r,value:t,onChange:l,autoComplete:"off"})}}}]);