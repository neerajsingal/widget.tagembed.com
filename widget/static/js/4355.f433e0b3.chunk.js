"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4355],{44355:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var i=t(47313),a=t(43635),l=t(43411),s=t(17739),r=t(98501),o=t(35179),d=t(46417);const u=i.lazy((()=>t.e(7535).then(t.bind(t,37535)))),g=i.lazy((()=>t.e(260).then(t.bind(t,50260)))),c=i.lazy((()=>t.e(1819).then(t.bind(t,61819)))),h=i.lazy((()=>t.e(8534).then(t.bind(t,18534)))),p=i.lazy((()=>Promise.all([t.e(7914),t.e(589)]).then(t.bind(t,66538))));class v extends i.PureComponent{constructor(){super(),this.handleResize=()=>{this.containerRef.current&&this.setState({containerSize:{width:this.containerRef.current.offsetWidth,height:this.containerRef.current.offsetHeight}})},this.state={containerSize:{width:null,height:null},parentID:""},this.containerRef=i.createRef()}componentDidMount(){var e,n,t,i,a;((0,s.gz)(this.props.wall.Personalization.widgetTheme),window.addEventListener("resize",this.handleResize),null!==this&&void 0!==this&&null!==(e=this.containerRef)&&void 0!==e&&e.current)&&this.setState({containerSize:{width:null===this||void 0===this||null===(n=this.containerRef)||void 0===n||null===(t=n.current)||void 0===t?void 0:t.offsetWidth,height:null===this||void 0===this||null===(i=this.containerRef)||void 0===i||null===(a=i.current)||void 0===a?void 0:a.offsetHeight}})}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}componentDidUpdate(){let e=document.querySelector(".tb_app_container"),n=s.b8?s.b8:e.parentNode.id;this.setState({parentID:n})}render(){var e,n,t,a,l,s,v,m,w,f,b,B;const{wall:S,reviewFilters:j,webFilters:k,postData:x,languageSetting:z,filter_tags:_}=this.props,R=!!(S.Banner&&Object.keys(S.Banner).length>0||S.CustomBanner&&Object.keys(S.CustomBanner).length>0&&(1===(null===S||void 0===S||null===(e=S.Banner)||void 0===e?void 0:e.status)&&1===(null===S||void 0===S||null===(n=S.Banner)||void 0===n?void 0:n.banner_position)||1===(null===S||void 0===S||null===(t=S.BannerImage)||void 0===t?void 0:t.status))),D=!!(S.Banner&&Object.keys(S.Banner).length>0&&1===S.Banner.status&&2===S.Banner.banner_position),I=o.ZQ?![55,60,16,47,57].includes(S.Personalization.widgetTheme):![55,52,60,16,47,57,61].includes(S.Personalization.widgetTheme),y=S.Banner&&Object.keys(S.Banner).length>0&&1===S.Banner.status&&6==S.Banner.bannerType&&0===S.Personalization.filterStatus&&![57,84].includes(S.Personalization.widgetTheme),P=o.ZQ?1===S.Personalization.filterStatus:!!(1===S.Personalization.filterStatus&&k&&k.length>1),F=!!(_&&_.length>0);let H=""!=k&&k&&k.length>0?k.map((e=>{let{Network:n}=e;return null===n||void 0===n?void 0:n.id})):null;!o.ig&&null!==S&&void 0!==S&&null!==(a=S.Background)&&void 0!==a&&a.image&&S.Background.image.includes(r.ho)&&(S.Background.image=String(S.Background.image).replace(r.lO,""));const T=0===(null===S||void 0===S||null===(l=S.Background)||void 0===l?void 0:l.transparent)||null!==S&&void 0!==S&&null!==(s=S.Background)&&void 0!==s&&s.image&&o.ZQ?{backgroundImage:null!==S&&void 0!==S&&null!==(v=S.Background)&&void 0!==v&&v.image?"url(".concat(null===S||void 0===S||null===(m=S.Background)||void 0===m?void 0:m.image,")"):"",backgroundColor:null===S||void 0===S||null===(w=S.Background)||void 0===w?void 0:w.color}:null,U=!![63,64].includes(S.Personalization.widgetTheme),C=!(1!=(null===S||void 0===S||null===(f=S.ThemeRule)||void 0===f?void 0:f.showReviewHeader)||!U);return(0,d.jsxs)("div",{className:"tb_app_container",style:{minHeight:[47,16,49,55,60,52].includes(S.Personalization.widgetTheme)?"100%":"".concat(this.props.postHeight,"px")},ref:this.containerRef,children:[R?(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(u,{Banner:S.Banner,BannerImage:S.BannerImage})]}):"",(0,d.jsxs)("div",{className:"tb_app_wrapper",style:T,children:[y&&R||C?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(g,{isHeader:C,reviewFilters:j,appendData:x.appendData,wall:S,languageSetting:z,postData:x})}):null,(null!==S&&void 0!==S&&null!==(b=S.UserRule)&&void 0!==b&&b.on_site_upload&&S.UgcSettings.onsite_status||o.nX&&S.UgcSettings.onsite_status)&&(o.Jx||o.ig&&![63,64,50].includes(S.Personalization.widgetTheme))?(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(p,{UgcSettings:S.UgcSettings,id:S.Wall.id,tagShopWallId:S.Wall.wallId})," "]}):null,I&&(P||F)?(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(c,{type:S.Personalization.filter_type,webFilters:k,filter_tags:_,appendData:x.appendData,wall:S,languageSetting:z,postData:x})]}):"",U&&1==(null===S||void 0===S||null===(B=S.ThemeRule)||void 0===B?void 0:B.showReviewList)||!U?(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(h,{...this.props,brandingNetworks:H,containerSize:this.state.containerSize,parentID:this.state.parentID})]}):null,y&&D?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(g,{isHeader:C,reviewFilters:j,appendData:x.appendData,wall:S,languageSetting:z,postData:x})}):null]}),D?(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(u,{Banner:S.Banner,BannerImage:S.BannerImage})]}):""]})}}const m=(0,l.$j)((e=>{if(!0===e.postHeight.manage_height){return{postHeight:e.postHeight.data.replace("px",""),renderId:e.renderId}}return{renderId:e.renderId}}),(e=>({managePostHeight:n=>e((0,a.B0)(n))})))(v)}}]);