"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2559],{82559:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});var a=t(72791),s=t(11225),r=t(77581),i=t(2703),l=t(70188),o=t(46535),c=t(80184);const g=a.lazy((()=>t.e(2230).then(t.bind(t,82230)))),d=a.lazy((()=>t.e(8839).then(t.bind(t,88839)))),p=a.lazy((()=>t.e(9509).then(t.bind(t,69509)))),u=a.lazy((()=>t.e(7625).then(t.bind(t,17625)))),h=a.lazy((()=>t.e(4900).then(t.bind(t,4900)))),m=a.lazy((()=>t.e(4816).then(t.bind(t,84816))));class b extends a.PureComponent{constructor(){super(),this.state={containerSize:{width:null,height:null},parentID:""}}componentDidMount(){const e=document.querySelector(".tb_app_container");this.setState({containerSize:{width:e.offsetWidth,height:e.offsetHeight}}),(0,i.gz)(this.props.wall.Personalization.widgetTheme)}componentDidUpdate(){let e=document.querySelector(".tb_app_container"),n=i.b8?i.b8:e.parentNode.id;this.setState({parentID:n})}render(){const{wall:e,reviewFilters:n,webFilters:t,postData:s,languageSetting:r,filter_tags:i}=this.props,b=!!(e.Banner&&Object.keys(e.Banner).length>0&&(1===e.Banner.status&&1===e.Banner.banner_position||1===e.BannerImage.status)),j=!!(e.Banner&&Object.keys(e.Banner).length>0&&1===e.Banner.status&&2===e.Banner.banner_position),B=o.ZQ?![55,60,16,47,57].includes(e.Personalization.widgetTheme):![55,52,60,16,47,57].includes(e.Personalization.widgetTheme),k=!!(e.Banner&&Object.keys(e.Banner).length>0&&1===e.Banner.status&&6==e.Banner.bannerType&&0===e.Personalization.filterStatus&&57!=e.Personalization.widgetTheme),x=o.ZQ?1===e.Personalization.filterStatus:!!(t&&t.length>1),S=!!(i&&i.length>0);console.warn("chcj",""!=t&&t&&t.length>0,t);let w=""!=t&&t&&t.length>0?t.map((e=>{let{Network:n}=e;return console.warn("check",n),n&&0==Object.keys(n)?n.id:null})):null;e.Background.image&&e.Background.image.includes(l.ho)&&(e.Background.image=String(e.Background.image).replace("https://cloud.taggbox.com/uploaded/",""));const f=0===e.Background.transparent||e.Background.image&&o.ZQ?{backgroundImage:e.Background.image?"url(".concat(e.Background.image,")"):"",backgroundColor:e.Background.color}:null;return(0,c.jsxs)("div",{className:"tb_app_container",style:{minHeight:[47,16,49,55,60,52].includes(e.Personalization.widgetTheme)?"100%":"".concat(this.props.postHeight,"px")},children:[b?(0,c.jsxs)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(g,{Banner:e.Banner,BannerImage:e.BannerImage})]}):"",(0,c.jsxs)("div",{className:"tb_app_wrapper",style:f,children:[k?(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(d,{reviewFilters:n,appendData:s.appendData,wall:e,languageSetting:r,postData:s})}):null,e.UserRule.on_site_upload&&e.UgcSettings.onsite_status||o.nX&&e.UgcSettings.onsite_status?(0,c.jsxs)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(h,{UgcSettings:e.UgcSettings,id:e.Wall.id})," "]}):null,B&&(x||S)?(0,c.jsxs)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(p,{type:e.Personalization.filter_type,webFilters:t,filter_tags:i,appendData:s.appendData,wall:e,languageSetting:r,postData:s})]}):"",(0,c.jsxs)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(u,{...this.props,brandingNetworks:w,containerSize:this.state.containerSize,parentID:this.state.parentID})]}),s&&s.completeDataObject?(0,c.jsxs)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(m,{completeDataObject:s.completeDataObject,postData:s.postData})]}):""]}),j?(0,c.jsxs)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(g,{Banner:e.Banner,BannerImage:e.BannerImage})]}):""]})}}const j=(0,r.$j)((e=>{if(!0===e.postHeight.manage_height){return{postHeight:e.postHeight.data.replace("px",""),renderId:e.renderId}}return{renderId:e.renderId}}),(e=>({managePostHeight:n=>e((0,s.B0)(n))})))(b)}}]);
//# sourceMappingURL=2559.a797ff20.chunk.js.map