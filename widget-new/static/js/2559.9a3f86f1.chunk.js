"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2559],{82559:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var a=n(72791),s=n(11225),r=n(77581),i=n(2703),l=n(70188),o=n(46535),g=n(80184);const c=a.lazy((()=>n.e(2230).then(n.bind(n,82230)))),d=a.lazy((()=>n.e(8839).then(n.bind(n,88839)))),p=a.lazy((()=>n.e(9509).then(n.bind(n,69509)))),u=a.lazy((()=>n.e(7625).then(n.bind(n,17625)))),h=a.lazy((()=>n.e(4900).then(n.bind(n,4900)))),m=a.lazy((()=>n.e(4816).then(n.bind(n,84816))));class b extends a.PureComponent{constructor(){super(),this.state={containerSize:{width:null,height:null},parentID:""}}componentDidMount(){const e=document.querySelector(".tb_app_container");this.setState({containerSize:{width:e.offsetWidth,height:e.offsetHeight}}),(0,i.gz)(this.props.wall.Personalization.widgetTheme)}componentDidUpdate(){let e=document.querySelector(".tb_app_container"),t=i.b8?i.b8:e.parentNode.id;this.setState({parentID:t})}render(){const{wall:e,reviewFilters:t,webFilters:n,postData:s,languageSetting:r,filter_tags:i}=this.props,b=!!(e.Banner&&Object.keys(e.Banner).length>0&&(1===e.Banner.status&&1===e.Banner.banner_position||1===e.BannerImage.status)),B=!!(e.Banner&&Object.keys(e.Banner).length>0&&1===e.Banner.status&&2===e.Banner.banner_position),j=o.ZQ?![55,60,16,47,57].includes(e.Personalization.widgetTheme):![55,52,60,16,47,57].includes(e.Personalization.widgetTheme),k=!!(e.Banner&&Object.keys(e.Banner).length>0&&1===e.Banner.status&&6==e.Banner.bannerType&&0===e.Personalization.filterStatus&&57!=e.Personalization.widgetTheme),x=o.ZQ?1===e.Personalization.filterStatus:!!(n&&n.length>1),S=!!(i&&i.length>0);let w=""!=n&&n&&n.length>0?n.map((e=>{let{Network:t}=e;return t.id})):null;e.Background.image&&e.Background.image.includes(l.ho)&&(e.Background.image=String(e.Background.image).replace("https://cloud.taggbox.com/uploaded/",""));const f=0===e.Background.transparent||e.Background.image&&o.ZQ?{backgroundImage:e.Background.image?"url(".concat(e.Background.image,")"):"",backgroundColor:e.Background.color}:null;return(0,g.jsxs)("div",{className:"tb_app_container",style:{minHeight:[47,16,49,55,60,52].includes(e.Personalization.widgetTheme)?"100%":"".concat(this.props.postHeight,"px")},children:[b?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(c,{Banner:e.Banner,BannerImage:e.BannerImage})]}):"",(0,g.jsxs)("div",{className:"tb_app_wrapper",style:f,children:[k?(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:(0,g.jsx)(d,{reviewFilters:t,appendData:s.appendData,wall:e,languageSetting:r,postData:s})}):null,e.UserRule.on_site_upload&&e.UgcSettings.onsite_status||o.nX&&e.UgcSettings.onsite_status?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(h,{UgcSettings:e.UgcSettings,id:e.Wall.id})," "]}):null,j&&(x||S)?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(p,{type:e.Personalization.filter_type,webFilters:n,filter_tags:i,appendData:s.appendData,wall:e,languageSetting:r,postData:s})]}):"",(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(u,{...this.props,brandingNetworks:w,containerSize:this.state.containerSize,parentID:this.state.parentID})]}),s&&s.completeDataObject?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(m,{completeDataObject:s.completeDataObject,postData:s.postData})]}):""]}),B?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(c,{Banner:e.Banner,BannerImage:e.BannerImage})]}):""]})}}const B=(0,r.$j)((e=>{if(!0===e.postHeight.manage_height){return{postHeight:e.postHeight.data.replace("px",""),renderId:e.renderId}}return{renderId:e.renderId}}),(e=>({managePostHeight:t=>e((0,s.B0)(t))})))(b)}}]);
//# sourceMappingURL=2559.9a3f86f1.chunk.js.map