"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6111],{64442:(e,t,i)=>{i.d(t,{Z:()=>u});var o=i(47313),s=i(2406),a=i(20510),n=i.n(a),d=i(43635),r=i(35179),l=(i(98511),i(46417));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class u extends o.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,s.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(r.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(r.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:i,isCover:o,controls:s,autoPlay:a,handleVideoEnded:u,muted:h}=this.props,{paddingBottom:p,videoLoaded:m,isVisible:g}=this.state,_={paddingBottom:"".concat(p,"%")},v=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,l.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:_,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(e," video").concat(t.id),url:c(v,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:t.postFileNew}},file:{attributes:{preload:"metadata",poster:t.postFileNew}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,d.ib)(e,t.id)},autoPlay:a,muted:h,volume:a?1:0,playsinline:!0,onReady:e=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig?g:a,height:"100%",width:"100%",controls:s||!1,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:u||null})})}}},407:(e,t,i)=>{i.r(t),i.d(t,{default:()=>c});var o=i(47313),s=i(35179),a=i(81349),n=i(84261),d=i(64442),r=i(46417);const l=o.lazy((()=>Promise.resolve().then(i.bind(i,25810)))),c=e=>{let{itemData:t,wallID:i,ThemeID:c,ownerId:u,wall:h}=e;const p=!t.hotspot,m=!(3!==t.type&&5!==t.type||1!=h.ThemeRule.autoPlay&&s.ig);return(0,r.jsxs)("div",{className:"tb_sp_media_wrap",children:[s.ZQ?(0,r.jsx)("div",{className:"tb_sp_social_top_",children:(0,r.jsx)(o.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(l,{networkClass:"tb_sp_social__ico",network:t.network,isDefault:1===h.ThemeRule.iconType,ThemeRule:h.ThemeRule})})}):null,(0,r.jsx)(a.Z,{itemData:t,IconClass:"tb_sp_media_icon".concat(s.ZQ?" tb_sp_media_icon_te":""),show:p,isCenter:s.ZQ}),m?(0,r.jsx)(d.Z,{VideoClass:"tb_sp_video",data:t,wallID:i,themeID:h.Personalization.widgetTheme,ownerId:u,size:100,isCover:!0,muted:!0}):(0,r.jsx)(n.default,{ImageClass:"tb_sp_image",data:t,wallID:i,themeID:c,ownerId:u,size:100,hotspot:!!t.hotspot})]})}},2406:(e,t,i)=>{t.Ad=void 0;var o=i(84228);var s=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var a=i(22537)},84228:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,s)=>{if("undefined"===typeof window)return s(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return s(o.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const n=new Image;n.addEventListener("load",(()=>{a&&window.clearTimeout(a),i({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{a&&window.clearTimeout(a),s("".concat(e.type,": ").concat(e.message))})),n.src=e,t.timeout&&(a=window.setTimeout((()=>s(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(s,a){function n(e){try{r(o.next(e))}catch(t){a(t)}}function d(e){try{r(o.throw(e))}catch(t){a(t)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,d)}r((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const s=i(47313),a=i(65786);t.useImageSize=(e,t)=>{const[i,n]=(0,s.useState)(null),[d,r]=(0,s.useState)(!1),[l,c]=(0,s.useState)(null);return(0,s.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){r(!0),n(null);try{const{width:i,height:o}=yield(0,a.getImageSize)(e,t);n({width:i,height:o})}catch(l){c(l.toString())}finally{r(!1)}}))}),[e,t]),[i,{loading:d,error:l}]}}}]);