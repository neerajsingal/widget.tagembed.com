"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4355],{44355:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var i=t(47313),a=t(43635),l=t(43411),s=t(17739),o=t(98501),r=t(35179),d=t(46417);const u=i.lazy((()=>t.e(7535).then(t.bind(t,37535)))),h=i.lazy((()=>t.e(260).then(t.bind(t,50260)))),g=i.lazy((()=>t.e(9093).then(t.bind(t,59093)))),c=i.lazy((()=>t.e(8534).then(t.bind(t,18534)))),v=i.lazy((()=>Promise.all([t.e(7914),t.e(589)]).then(t.bind(t,66538))));class p extends i.PureComponent{constructor(){super(),this.handleResize=()=>{var e,n,t,i;this.containerRef.current&&this.setState({containerSize:{width:null===this||void 0===this||null===(e=this.containerRef)||void 0===e||null===(n=e.current)||void 0===n?void 0:n.offsetWidth,height:null===this||void 0===this||null===(t=this.containerRef)||void 0===t||null===(i=t.current)||void 0===i?void 0:i.offsetHeight}})},this.state={containerSize:{width:null,height:null},parentID:""},this.containerRef=i.createRef()}componentDidMount(){var e,n,t,i,a;((0,s.gz)(this.props.wall.Personalization.widgetTheme),window.addEventListener("resize",this.handleResize),null!==this&&void 0!==this&&null!==(e=this.containerRef)&&void 0!==e&&e.current)&&this.setState({containerSize:{width:null===this||void 0===this||null===(n=this.containerRef)||void 0===n||null===(t=n.current)||void 0===t?void 0:t.offsetWidth,height:null===this||void 0===this||null===(i=this.containerRef)||void 0===i||null===(a=i.current)||void 0===a?void 0:a.offsetHeight}})}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}componentDidUpdate(){let e=document.querySelector(".tb_app_container"),n=s.b8?s.b8:e.parentNode.id;this.setState({parentID:n})}render(){var e,n,t,a,l,p,m,w,f,b;const{wall:S,reviewFilters:x,webFilters:z,postData:j,languageSetting:k,filter_tags:B}=this.props,_=!!(S.Banner&&Object.keys(S.Banner).length>0),R=_?(0,s.Kn)(S.Banner)?S.Banner:S.Banner[0]:{},D=!!(_||S.CustomBanner&&Object.keys(S.CustomBanner).length>0&&(1===(null===R||void 0===R?void 0:R.status)&&1===(null===R||void 0===R?void 0:R.banner_position)||1===(null===R||void 0===R?void 0:R.status)&&1===(null===R||void 0===R?void 0:R.banner_position)||1===(null===S||void 0===S||null===(e=S.BannerImage)||void 0===e?void 0:e.status))),I=!(!_||1!==R.status||2!==R.banner_position),P=r.ZQ?![55,60,16,47,57].includes(S.Personalization.widgetTheme):![55,52,60,16,47,57,61,84].includes(S.Personalization.widgetTheme),y=_&&1===(null===R||void 0===R?void 0:R.status)&&6==(null===R||void 0===R?void 0:R.bannerType)&&0===S.Personalization.filterStatus&&![57,84].includes(S.Personalization.widgetTheme),F=r.ZQ?1===S.Personalization.filterStatus:!!(1===S.Personalization.filterStatus&&z&&z.length>1),H=!!(B&&B.length>0);let T=""!=z&&z&&z.length>0?z.map((e=>{let{Network:n}=e;return null===n||void 0===n?void 0:n.id})):null;!r.ig&&null!==S&&void 0!==S&&null!==(n=S.Background)&&void 0!==n&&n.image&&S.Background.image.includes(o.ho)&&(S.Background.image=String(S.Background.image).replace(o.lO,""));const U=0===(null===S||void 0===S||null===(t=S.Background)||void 0===t?void 0:t.transparent)||null!==S&&void 0!==S&&null!==(a=S.Background)&&void 0!==a&&a.image&&r.ZQ?{backgroundImage:null!==S&&void 0!==S&&null!==(l=S.Background)&&void 0!==l&&l.image?"url(".concat(null===S||void 0===S||null===(p=S.Background)||void 0===p?void 0:p.image,")"):"",backgroundColor:null===S||void 0===S||null===(m=S.Background)||void 0===m?void 0:m.color}:null,C=!![63,64].includes(S.Personalization.widgetTheme),W=!(1!=(null===S||void 0===S||null===(w=S.ThemeRule)||void 0===w?void 0:w.showReviewHeader)||!C);return(0,d.jsxs)("div",{className:"tb_app_container",style:{minHeight:[47,16,49,55,60,52].includes(S.Personalization.widgetTheme)?"100%":"".concat(this.props.postHeight,"px")},ref:this.containerRef,children:[D?(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(u,{Banner:S.Banner,BannerImage:S.BannerImage})]}):"",(0,d.jsxs)("div",{className:"tb_app_wrapper",style:U,children:[y&&D||W?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(h,{isHeader:W,reviewFilters:x,appendData:j.appendData,wall:S,languageSetting:k,postData:j})}):null,(null!==S&&void 0!==S&&null!==(f=S.UserRule)&&void 0!==f&&f.on_site_upload&&S.UgcSettings.onsite_status||r.nX&&S.UgcSettings.onsite_status)&&(r.Jx||r.ig&&![63,64,50].includes(S.Personalization.widgetTheme))?(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(v,{UgcSettings:S.UgcSettings,id:S.Wall.id,tagShopWallId:S.Wall.wallId})," "]}):null,P&&(F||H)?(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(g,{type:S.Personalization.filter_type,webFilters:z,filter_tags:B,appendData:j.appendData,wall:S,languageSetting:k,postData:j})]}):"",C&&1==(null===S||void 0===S||null===(b=S.ThemeRule)||void 0===b?void 0:b.showReviewList)||!C?(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(c,{...this.props,brandingNetworks:T,containerSize:this.state.containerSize,parentID:this.state.parentID})]}):null,y&&I?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(h,{isHeader:W,reviewFilters:x,appendData:j.appendData,wall:S,languageSetting:k,postData:j})}):null]}),I?(0,d.jsxs)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:[" ",(0,d.jsx)(u,{Banner:S.Banner,BannerImage:S.BannerImage})]}):""]})}}const m=(0,l.$j)((e=>{if(!0===e.postHeight.manage_height){return{postHeight:e.postHeight.data.replace("px",""),renderId:e.renderId}}return{renderId:e.renderId}}),(e=>({managePostHeight:n=>e((0,a.B0)(n))})))(p)}}]);