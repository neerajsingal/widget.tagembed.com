"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9159,4261,9239,5790],{89239:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var a=o(47313),s=o(17739),i=o(98935),r=o(46417);class n extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,s.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(i.Z,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,o)=>{o.d(e,{Z:()=>r});var a=o(47313),s=o(46417);const i=t=>{let{username:e,network:o,authorClass:a,errorPic:i}=t;const r="#ffffff"==o.color?"#000":o.color;return(0,s.jsx)("img",{className:"".concat(a,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},r=(0,a.memo)(i)},98511:(t,e,o)=>{o.d(e,{Z:()=>r});var a=o(98501),s=o(17739),i=o(46417);const r=t=>{let{size:e}=t;const o=t=>!(!(0,s.mD)(t)||1!=e);return(0,i.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("top","".concat(o(55)||o(62)||o(61)?"auto":"14px"),"important"),t.style.setProperty("left","".concat(o(62)||o(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(o(55)||o(62)||o(61)?"14px":"auto"),"important"),t.style.setProperty("bottom","".concat(o(55)||o(62)||o(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(a.do,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,i.jsx)("div",{children:" "})})}},7138:(t,e,o)=>{o.d(e,{Z:()=>r});var a=o(47313),s=o(46417);class i extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:a,item:i}=this.props,r=!(!o||1!==o.status),n={color:r?o.color:t.color,backgroundColor:r?o.background:t.background};return(0,s.jsxs)("div",{className:e,style:n,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),a(i),window.open("".concat(r?o.url:t.url),"_blank")},children:[" ",r?o.text:t.text]})}}const r=i},97915:(t,e,o)=>{o.d(e,{Z:()=>h});var a=o(47313),s=o(43411),i=o(83773),r=o(6119),n=o(17739),d=o(46417);const l=(0,i.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),c=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,o=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",a=t.product_price>0||t.product_discount>0?"".concat(o,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(a,"\n        </a>")};class p extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:o}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,d.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const s=(0,n.i1)();return(0,d.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(s),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(o==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,d.jsx)(l,{children:(0,d.jsx)(r.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(s),clickable:!0,html:c(t.UgcProduct)})})]},e)}))}):null}}const h=(0,s.$j)((t=>({appData:t.appData})))(p)},84261:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});var a=o(47313),s=o(43635),i=o(97915),r=o(2406),n=o(17739),d=o(98501),l=(o(35179),o(98511),o(46417));class c extends a.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const o=document.querySelector(".track".concat(this.props.data.id));o&&(o.setAttribute("data-height",e),o.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:o}=await(0,r.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t,size:{height:parseInt(o),width:parseInt(t)}})}catch(o){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(o){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:o}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:o})}componentDidMount(){const{data:t,hotspot:e,size:o}=this.props;!o||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:o})}render(){const{ImageClass:t,data:e,wallID:o,themeID:a,ownerId:r,hotspot:c}=this.props,{imgUrl:p,paddingBottom:h,size:u,fixedPaddingBottom:m}=this.state,_={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:h,"%")},g={backgroundImage:"url(".concat(p,")")};if(u.width>u.height)var w="100%",b="".concat(u.height/u.width*100,"%");else b="100%",w="".concat(u.width/u.height*100,"%");const v=!!(e.hotspot&&e.ugc_products.length>0&&c),y={width:v&&this.props.size?w:null,height:v&&this.props.size?b:null};return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:_,children:[v?(0,l.jsx)("div",{className:"tb_blur_bg_",style:g}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:y,children:[v?(0,l.jsx)(i.Z,{product:e.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:p,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":o,"data-owner-id":r,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(d.do,"/media/images/no-image.svg"),(0,s.ht)(t)},alt:(0,n.F$)(e.content)})]})]})}}},64442:(t,e,o)=>{o.d(e,{Z:()=>p});var a=o(47313),s=o(2406),i=o(20510),r=o.n(i),n=o(43635),d=o(35179),l=(o(98511),o(46417));const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,s.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(d.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(d.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:a,controls:s,autoPlay:i,handleVideoEnded:p,muted:h}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:_}=this.state,g={paddingBottom:"".concat(u,"%")},w=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:g,ref:this.videoRef,children:(0,l.jsx)(r(),{className:"".concat(t," video").concat(e.id),url:c(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:i,muted:h,volume:i?1:0,playsinline:!0,onReady:t=>{d.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:d.ig?_:i,height:"100%",width:"100%",controls:s||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:p||null})})}}},25810:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var a=o(47313),s=o(35179),i=o(46417);const r=a.lazy((()=>o.e(5867).then(o.bind(o,95867))));class n extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:n,Personalization:d}=this.props,l=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),c=s.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(r,{network:t,networkClass:e})]})}}},55790:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var a=o(47313),s=o(17739),i=o(46417);const r=t=>{const{postTime:e,timeClass:o}=t;return(0,i.jsx)("div",{className:o,role:"status","aria-label":"post timestamp",children:(0,s.Sy)(e)})},n=(0,a.memo)(r)},9159:(t,e,o)=>{o.r(e),o.d(e,{default:()=>w});var a=o(47313),s=o(11774),i=o(43411),r=o(84261),n=o(64442),d=o(35179),l=o(46417);const c=t=>{let{itemData:e,wallID:o,ownerId:a,wall:s,autoVPlay:i,handleVideoEnded:c}=t;const p=!(3!==e.type&&5!==e.type||28===e.network.id||1!=s.ThemeRule.autoPlay&&!d.ZQ||!i);return(0,l.jsx)("div",{className:"tb_stt_media_wrap",children:p?(0,l.jsx)(n.Z,{VideoClass:"tb_stt_video",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:1,controls:!1,autoPlay:!(!d.ZQ||!i)||!!p&&i,handleVideoEnded:c,muted:!0,isCover:!0}):(0,l.jsx)(r.default,{ImageClass:"tb_stt_image",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:1})})};var p=o(89239),h=o(25810);o(55790);const u=t=>{let{author:e,personalization:o,postTime:a,network:s,ThemeRule:i,font:r}=t;const n=e.username&&e.username.length>0?"@".concat(e.username):"",c={color:i.authorColor,fontFamily:i.css_font},u={color:i.authorColor,fontSize:i.fontSize,fontFamily:i.css_font},m=(i.authorColor,!(!o.postAuthor||e.isInstaUser));!o.postAuthor||o.postTime;return(0,l.jsxs)("div",{className:"tb_stt_content_wrap",children:[d.ZQ?null:(0,l.jsx)("div",{className:"tb_stt_author_img",children:m?(0,l.jsx)(p.default,{author:e,network:s,authorClass:"tb_stt_author_img_00"}):" "}),(0,l.jsxs)("div",{className:"tb_stt_author_info",children:[(0,l.jsx)(h.default,{networkClass:"tb_stt_social_ico",network:s,isDefault:1===i.iconType,ThemeRule:i}),(0,l.jsxs)("div",{className:"tb_stt_author_001",children:[0===i.hideContent?(0,l.jsx)("div",{className:"tb_stt_hashtag tb-cTBfont-".concat(i.font_varient),style:d.ZQ?null:u,children:n}):"",m?(0,l.jsx)("div",{className:"tb_stt_author_name",style:d.ZQ?null:c,children:e.name}):""]})]})]})};var m=o(7138);const _=t=>{let{itemData:e,personalization:o,adjustWidth:s,ThemeRule:i,wallID:r,ownerId:n,wall:p,onClickToCTA:h,autoPlay:_,handleVideoEnded:g,onClickPopUpSlider:w,itemIndex:b}=t;const v={width:"".concat(s,"%")},y=1!==e.type,f=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status);return(0,a.useEffect)((()=>{e.isPopUp&&w(b,e)}),[b,e.isPopUp,e]),(0,l.jsx)("div",{id:"tb-stt-post-".concat(e.id),className:"tb_stt_post_wrapper",style:v,"tb-network":e.network.icon,children:(0,l.jsxs)("div",{className:"tb_stt_card_wrapper",children:[y?(0,l.jsx)("div",{className:"tb_stt_media_img",children:(0,l.jsx)(c,{itemData:e,wallID:r,wall:p,ownerId:n,autoVPlay:_,handleVideoEnded:g})}):"",(0,l.jsx)("div",{className:"tb_stt_card_wrapper_00",children:(0,l.jsxs)("div",{className:"tb_stt_card_content_0",children:[f&&d.ZQ?(0,l.jsxs)("div",{className:"tb_stt_post_cta",children:[(0,l.jsx)(m.Z,{ctaClass:"tb_stt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",(0,l.jsx)(u,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:o,ThemeRule:i})]})})]})})};o(37210);class g extends a.PureComponent{constructor(t){super(t),this.state={arrowWidth:0,currentIndex:0},this.onResponsiveCardItem=()=>{const t=document.querySelector(".splide__slide.is-active");if(t){const e=t.clientWidth+.1*t.clientWidth;this.setState({arrowWidth:e})}},this.handleVideoEnded=()=>{const{postData:t}=this.props,{currentIndex:e}=this.state,o=e+1;o<t.length&&this.secondaryRef.current&&this.secondaryRef.current&&this.secondaryRef.current.splide.go(o)},this.secondaryRef=a.createRef()}componentDidMount(){this.onResponsiveCardItem(),window.addEventListener("resize",(()=>this.onResponsiveCardItem())),setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t,completeDataObject:e,onClickPopUpSlider:o,wall:a}=this.props;this.secondaryRef.current&&this.secondaryRef.current.slides.length>0&&this.secondaryRef.current.slides.map(((s,i)=>{if(s.classList){const i=String(s.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var r=i[0];String(i[0]).includes("tb_")&&(r=String(i[0]).replace("tb_",""));const n=t.findIndex((t=>t==r));document.querySelector(".tb_stt_post_container #".concat(s.id)).addEventListener("click",(t=>{t.preventDefault();const s=e[r];56!=a.Personalization.widgetTheme&&d.ZQ||o(n,s)}))}}))}render(){var t;const{completeDataObject:e,wall:o,onClickToCTA:a,modalPop:i,onClickPopUpSlider:r}=this.props,{arrowWidth:n,currentIndex:c}=this.state;let p=this.props.postData;p&&p.length>0&&(p=1==p.length?[...p,...p,...p,...p]:2==p.length?[...p,...p]:this.props.postData);const h=o.ThemeRule.numberOfCoumn,u=o.ThemeRule.mobileColumn,m=o.ThemeRule.slidePost,g=o.ThemeRule.slideDuration,w=o.Personalization.autoScrollStatus,b=d.ZQ&&void 0!==(null===(t=o.Personalization)||void 0===t?void 0:t.clonePost)&&0===o.Personalization.clonePost?{clones:0}:{},v=1!=w?!(Object.keys(b).length>0)&&"loop":"loop",y={...b,type:v,rewind:!1,speed:1e3,interval:1===m?1e3*parseInt(g):5e3,perPage:h>0?h:7,perMove:1,gap:0,cloneStatus:!1,autoplay:1===m,padding:"0",pagination:!1,arrows:!0,focus:"center",start:127183==o.Wall.owner?0:2,breakpoints:{560:{perPage:u>0?u:1,start:127183==o.Wall.owner?0:2},767:{perPage:u>0?u:3,start:127183==o.Wall.owner?0:2},991:{perPage:u>0?u:3,start:2},1200:{perPage:h>0?h:5,start:127183==o.Wall.owner?0:2},1400:{perPage:h>0?h:5,start:127183==o.Wall.owner?0:2},1600:{perPage:h>0?h:5,start:127183==o.Wall.owner?0:2}},updateOnMove:!0},f=1===y.breakpoints[560].perPage?"tb_stt_center_mode560":"",x=1===y.breakpoints[767].perPage?"tb_stt_center_mode767":"",P=1===y.breakpoints[991].perPage?"tb_stt_center_mode991":"";if(d.ZQ&&1===m){var k=this.secondaryRef&&this.secondaryRef.current?this.secondaryRef.current.splide.Components.Autoplay:null;i.isShowPopUp&&k?k.pause():k&&k.play()}return(0,l.jsx)("div",{className:"tb_stt_post_container",children:(0,l.jsxs)(s.tv,{hasTrack:!1,className:"tb_stt_post_slider ".concat(d.ZQ?"tb_stt_triple_slider":""," ").concat(f," ").concat(x," ").concat(P),options:y,ref:this.secondaryRef,onActive:(t,e,o)=>this.setState({currentIndex:e.index}),children:[(0,l.jsx)(s.Gj,{children:p&&p.length>0&&p.map(((t,i)=>{const n=e[t];return(0,l.jsx)(s.jw,{style:{margin:0,padding:0},"data-index":i,className:"tb_".concat(n.id),children:(0,l.jsx)(_,{ownerId:o.Wall.owner,itemData:n,autoPlay:c==i,itemIndex:i,personalization:o.Personalization,ThemeRule:o.ThemeRule,wallID:o.Wall.id,onClickToCTA:a,wall:o,handleVideoEnded:this.handleVideoEnded,onClickPopUpSlider:r})},i)}))}),(0,l.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow  tb_stt_arrow_left__",onClick:this.onUpdateData,style:{right:n},role:"button","aria-label":"Go to previous slide",children:(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb__icon tb-arrow-left-alt",children:" "})}),(0,l.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow tb_stt_arrow_right__",style:{left:n},role:"button","aria-label":"Go to next slide",children:(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next tb__icon tb-arrow-right-alt",children:" "})})]})})}}const w=(0,i.$j)((t=>({modalPop:t.modalPop})))(g)},2406:(t,e,o)=>{e.Ad=void 0;var a=o(84228);var s=o(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var i=o(22537)},84228:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=o(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((o,s)=>{if("undefined"===typeof window)return s(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return s(a.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const r=new Image;r.addEventListener("load",(()=>{i&&window.clearTimeout(i),o({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{i&&window.clearTimeout(i),s("".concat(t.type,": ").concat(t.message))})),r.src=t,e.timeout&&(i=window.setTimeout((()=>s(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,o){var a=this&&this.__awaiter||function(t,e,o,a){return new(o||(o=Promise))((function(s,i){function r(t){try{d(a.next(t))}catch(e){i(e)}}function n(t){try{d(a.throw(t))}catch(e){i(e)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,n)}d((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const s=o(47313),i=o(65786);e.useImageSize=(t,e)=>{const[o,r]=(0,s.useState)(null),[n,d]=(0,s.useState)(!1),[l,c]=(0,s.useState)(null);return(0,s.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){d(!0),r(null);try{const{width:o,height:a}=yield(0,i.getImageSize)(t,e);r({width:o,height:a})}catch(l){c(l.toString())}finally{d(!1)}}))}),[t,e]),[o,{loading:n,error:l}]}},37210:()=>{}}]);