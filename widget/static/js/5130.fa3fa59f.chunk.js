"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5130,6723,8167,8262],{78167:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var a=o(9950),i=(o(52867),o(93662)),s=o(44414);class r extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o,size:a}=this.props;return(0,s.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,s.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:a||44,height:a||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,s.jsx)(i.A,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,o)=>{o.d(e,{A:()=>r});var a=o(9950),i=o(44414);const s=t=>{let{username:e,network:o,authorClass:a,errorPic:s}=t;const r="#ffffff"==o.color?"#000":o.color;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:s||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45,"aria-label":"author image"})},r=(0,a.memo)(s)},45565:(t,e,o)=>{o.d(e,{A:()=>r});var a=o(80415),i=o(52867),s=o(44414);const r=t=>{let{size:e}=t;const o=t=>!(!(0,i.Nv)(t)||1!=e);return(0,s.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==e?"25px":"18px"),"important"),t.style.setProperty("top","".concat(o(55)||o(62)||o(61)?"auto":"14px"),"important"),t.style.setProperty("left","".concat(o(62)||o(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(o(55)||o(62)||o(61)?"14px":"auto"),"important"),t.style.setProperty("bottom","".concat(o(55)||o(62)||o(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(a.th,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,s.jsx)("div",{children:" "})})}},60531:(t,e,o)=>{o.d(e,{A:()=>r});var a=o(9950),i=o(44414);class s extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:a,item:s}=this.props,r=!(!o||1!==o.status),n={color:r?o.color:t.color,backgroundColor:r?o.background:t.background};return(0,i.jsxs)("div",{className:e,style:n,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),a(s),window.open("".concat(r?o.url:t.url),"_blank")},children:[" ",r?o.text:t.text]})}}const r=s},89874:(t,e,o)=>{o.d(e,{A:()=>u});var a=o(9950),i=o(73878),s=o(73068),r=o(1823),n=o(52867),d=o(14478),l=o(44414);const c=(0,s.componentWillAppendToBody)((t=>{let{children:e,wallId:o}=t;return o?(0,l.jsx)("div",{"data-widget-id":o,children:e}):null})),p=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,o=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",a=t.product_price>0||t.product_discount>0?"".concat(o,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(a,"\n        </a>")};class h extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:o}=this.props;if(e&&Object.keys(e).length>0){var a,i;const{wall:s}=e;(0,d.hq)({type:1,action:2,wall:null===s||void 0===s||null===(a=s.Wall)||void 0===a?void 0:a.id,product_id:t.id,post:o.referenceId,owner:null===s||void 0===s||null===(i=s.Wall)||void 0===i?void 0:i.owner,feed:o.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:o}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,i)=>{var s,d;const h=(0,n.Ul)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(h),onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(i),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(o==i?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:i+1}),(0,l.jsx)(c,{wallId:null===e||void 0===e||null===(s=e.wall)||void 0===s||null===(d=s.Wall)||void 0===d?void 0:d.id,children:(0,l.jsx)(r.m_,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(h),clickable:!0,html:p(t.UgcProduct)})})]},i)}))}):null}}const u=(0,i.Ng)((t=>({appData:t.appData})))(h)},78262:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});var a=o(9950),i=o(14478),s=o(89874),r=o(98776),n=o(52867),d=o(80415),l=(o(66345),o(45565),o(44414));class c extends a.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const o=document.querySelector(".track".concat(this.props.data.id));o&&(o.setAttribute("data-height",e),o.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:o}=await(0,r.pG)(e.postFileNew);this.setState({paddingBottom:100*o/t,size:{height:parseInt(o),width:parseInt(t)}})}catch(o){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(o){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:o}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:o})}componentDidMount(){const{data:t,hotspot:e,size:o}=this.props;!o||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:o})}render(){const{ImageClass:t,data:e,wallID:o,themeID:a,ownerId:r,hotspot:c}=this.props,{imgUrl:p,paddingBottom:h,size:u,fixedPaddingBottom:m}=this.state,_={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:h,"%")},g={backgroundImage:"url(".concat(p,")")};if(u.width>u.height)var w="100%",v="".concat(u.height/u.width*100,"%");else v="100%",w="".concat(u.width/u.height*100,"%");const b=!!(e.hotspot&&e.ugc_products.length>0&&c),y={width:b&&this.props.size?w:null,height:b&&this.props.size?v:null};return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:_,children:[b?(0,l.jsx)("div",{className:"tb_blur_bg_",style:g}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:y,children:[b?(0,l.jsx)(s.A,{product:e.ugc_products,dataItem:e}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:p,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":o,"data-owner-id":r,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(d.th,"/media/images/no-image.svg"),(0,i.bs)(t)},alt:(0,n.wE)(e.content)})]})]})}}},3720:(t,e,o)=>{o.d(e,{A:()=>p});var a=o(9950),i=o(98776),s=o(38092),r=o.n(s),n=o(14478),d=o(66345),l=(o(45565),o(44414));const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,i.pG)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{const{videoLoaded:e}=this.state;e!=t&&this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(d.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(d.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:a,controls:i,autoPlay:s,handleVideoEnded:p,muted:h}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:_}=this.state,g={paddingBottom:"".concat(u,"%")},w=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:g,ref:this.videoRef,children:(0,l.jsx)(r(),{className:"".concat(t," video").concat(e.id),url:c(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,n.zi)(t,e.id)},autoPlay:s,muted:h,volume:s?1:0,playsinline:!0,onReady:t=>{d.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:d.HY?_:s,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:p||null})})}}},44463:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var a=o(9950),i=o(66345),s=o(44414);const r=a.lazy((()=>o.e(620).then(o.bind(o,20620))));class n extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:n,Personalization:d}=this.props,l=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),c=i.uS&&36==t.id?"tagembed":t.icon;return l?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(c.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,s.jsx)("div",{})}):(0,s.jsxs)(a.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(r,{network:t,networkClass:e})]})}}},6723:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var a=o(9950),i=o(52867),s=o(44414);const r=t=>{const{postTime:e,timeClass:o}=t;return(0,s.jsx)("div",{className:o,role:"status","aria-label":"post timestamp ".concat((0,i.fF)(e)),children:(0,i.fF)(e)})},n=(0,a.memo)(r)},30998:(t,e,o)=>{o.r(e),o.d(e,{default:()=>v});var a=o(89379),i=o(9950),s=o(53556),r=o(73878),n=o(78262),d=o(3720),l=o(66345),c=o(44414);const p=t=>{let{itemData:e,wallID:o,ownerId:a,wall:i,autoVPlay:s,handleVideoEnded:r}=t;const p=!(3!==e.type&&5!==e.type||28===e.network.id||1!=i.ThemeRule.autoPlay&&!l.uS||!s);return(0,c.jsx)("div",{className:"tb_stt_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:p?(0,c.jsx)(d.A,{VideoClass:"tb_stt_video",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:a,size:1,controls:!1,autoPlay:!(!l.uS||!s)||!!p&&s,handleVideoEnded:r,muted:!0,isCover:!0}):(0,c.jsx)(n.default,{ImageClass:"tb_stt_image",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:a,size:1})})};var h=o(78167),u=o(44463);o(6723);const m=t=>{let{author:e,personalization:o,postTime:a,network:i,ThemeRule:s,font:r}=t;const n=e.username&&e.username.length>0?"@".concat(e.username):"",d={color:s.authorColor,fontFamily:s.css_font},p={color:s.authorColor,fontSize:s.fontSize,fontFamily:s.css_font},m=(s.authorColor,!(!o.postAuthor||e.isInstaUser));!o.postAuthor||o.postTime;return(0,c.jsxs)("div",{className:"tb_stt_content_wrap",children:[l.uS?null:(0,c.jsx)("div",{className:"tb_stt_author_img",children:m?(0,c.jsx)(h.default,{author:e,network:i,authorClass:"tb_stt_author_img_00"}):" "}),(0,c.jsxs)("div",{className:"tb_stt_author_info",children:[(0,c.jsx)(u.default,{networkClass:"tb_stt_social_ico",network:i,isDefault:1===s.iconType,ThemeRule:s}),(0,c.jsxs)("div",{className:"tb_stt_author_001",children:[0===s.hideContent?(0,c.jsx)("div",{className:"tb_stt_hashtag tb-cTBfont-".concat(s.font_varient),style:l.uS?null:p,children:n}):"",m?(0,c.jsx)("div",{className:"tb_stt_author_name",style:l.uS?null:d,children:e.name}):""]})]})]})};var _=o(60531);const g=t=>{let{itemData:e,personalization:o,adjustWidth:a,ThemeRule:s,wallID:r,ownerId:n,wall:d,onClickToCTA:h,autoPlay:u,handleVideoEnded:g,onClickPopUpSlider:w,itemIndex:v}=t;const b={width:"".concat(a,"%")},y=1!==e.type,f=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status);return(0,i.useEffect)((()=>{e.isPopUp&&w(v,e)}),[v,e.isPopUp,e]),(0,c.jsx)("div",{id:"tb-stt-post-".concat(e.id),className:"tb_stt_post_wrapper",style:b,"tb-network":e.network.icon,children:(0,c.jsxs)("div",{className:"tb_stt_card_wrapper",children:[y?(0,c.jsx)("div",{className:"tb_stt_media_img",children:(0,c.jsx)(p,{itemData:e,wallID:r,wall:d,ownerId:n,autoVPlay:u,handleVideoEnded:g})}):"",(0,c.jsx)("div",{className:"tb_stt_card_wrapper_00",children:(0,c.jsxs)("div",{className:"tb_stt_card_content_0",children:[f&&l.uS?(0,c.jsxs)("div",{className:"tb_stt_post_cta",children:[(0,c.jsx)(_.A,{ctaClass:"tb_stt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",(0,c.jsx)(m,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:o,ThemeRule:s})]})})]})})};o(61038);class w extends i.PureComponent{constructor(t){super(t),this.state={arrowWidth:0,currentIndex:0},this.onResponsiveCardItem=()=>{const t=document.querySelector(".splide__slide.is-active");if(t){const e=t.clientWidth+.1*t.clientWidth;this.setState({arrowWidth:e})}},this.handleVideoEnded=()=>{const{postData:t}=this.props,{currentIndex:e}=this.state,o=e+1;o<t.length&&this.secondaryRef.current&&this.secondaryRef.current&&this.secondaryRef.current.splide.go(o)},this.secondaryRef=i.createRef()}componentDidMount(){this.onResponsiveCardItem(),window.addEventListener("resize",(()=>this.onResponsiveCardItem())),setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t,completeDataObject:e,onClickPopUpSlider:o,wall:a}=this.props;this.secondaryRef.current&&this.secondaryRef.current.slides.length>0&&this.secondaryRef.current.slides.map(((i,s)=>{if(i.classList){const s=String(i.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var r=s[0];String(s[0]).includes("tb_")&&(r=String(s[0]).replace("tb_",""));const n=t.findIndex((t=>t==r));document.querySelector(".tb_stt_post_container #".concat(i.id)).addEventListener("click",(t=>{t.preventDefault();const i=e[r];56!=a.Personalization.widgetTheme&&l.uS||o(n,i)}))}}))}render(){var t;const{completeDataObject:e,wall:o,onClickToCTA:i,modalPop:r,onClickPopUpSlider:n}=this.props,{arrowWidth:d,currentIndex:p}=this.state;let h=this.props.postData;h&&h.length>0&&(h=1==h.length?[...h,...h,...h,...h]:2==h.length?[...h,...h]:this.props.postData);const u=o.ThemeRule.numberOfCoumn,m=o.ThemeRule.mobileColumn,_=o.ThemeRule.slidePost,w=o.ThemeRule.slideDuration,v=o.Personalization.autoScrollStatus,b=l.uS&&void 0!==(null===(t=o.Personalization)||void 0===t?void 0:t.clonePost)&&0===o.Personalization.clonePost?{clones:0}:{},y=1!=v?!(Object.keys(b).length>0)&&"loop":"loop",f=(0,a.A)((0,a.A)({},b),{},{type:y,rewind:!1,speed:1e3,interval:1===_?1e3*parseInt(w):5e3,perPage:u>0?u:7,perMove:1,gap:0,cloneStatus:!1,autoplay:1===_,padding:"0",pagination:!1,arrows:!0,focus:"center",start:127183==o.Wall.owner?0:2,breakpoints:{560:{perPage:m>0?m:1,start:127183==o.Wall.owner?0:2},767:{perPage:m>0?m:3,start:127183==o.Wall.owner?0:2},991:{perPage:m>0?m:3,start:2},1200:{perPage:u>0?u:5,start:127183==o.Wall.owner?0:2},1400:{perPage:u>0?u:5,start:127183==o.Wall.owner?0:2},1600:{perPage:u>0?u:5,start:127183==o.Wall.owner?0:2}},updateOnMove:!0}),x=1===f.breakpoints[560].perPage?"tb_stt_center_mode560":"",P=1===f.breakpoints[767].perPage?"tb_stt_center_mode767":"",S=1===f.breakpoints[991].perPage?"tb_stt_center_mode991":"";if(l.uS&&1===_){var I=this.secondaryRef&&this.secondaryRef.current?this.secondaryRef.current.splide.Components.Autoplay:null;r.isShowPopUp&&I?I.pause():I&&I.play()}return(0,c.jsx)("div",{className:"tb_stt_post_container",children:(0,c.jsxs)(s.eB,{hasTrack:!1,className:"tb_stt_post_slider ".concat(l.uS?"tb_stt_triple_slider":""," ").concat(x," ").concat(P," ").concat(S),options:f,ref:this.secondaryRef,onActive:(t,e,o)=>this.setState({currentIndex:e.index}),children:[(0,c.jsx)(s.v9,{children:h&&h.length>0&&h.map(((t,a)=>{const r=e[t];return(0,c.jsx)(s.Nn,{style:{margin:0,padding:0},"data-index":a,className:"tb_".concat(r.id),children:(0,c.jsx)(g,{ownerId:o.Wall.owner,itemData:r,autoPlay:p==a,itemIndex:a,personalization:o.Personalization,ThemeRule:o.ThemeRule,wallID:o.Wall.id,onClickToCTA:i,wall:o,handleVideoEnded:this.handleVideoEnded,onClickPopUpSlider:n})},a)}))}),(0,c.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow  tb_stt_arrow_left__",onClick:this.onUpdateData,style:{right:d},role:"button","aria-label":"Go to previous slide",children:(0,c.jsx)("div",{className:"splide__arrow splide__arrow--prev tb__icon tb-arrow-left-alt",children:" "})}),(0,c.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow tb_stt_arrow_right__",style:{left:d},role:"button","aria-label":"Go to next slide",children:(0,c.jsx)("div",{className:"splide__arrow splide__arrow--next tb__icon tb-arrow-right-alt",children:" "})})]})})}}const v=(0,r.Ng)((t=>({modalPop:t.modalPop})))(w)},98776:(t,e,o)=>{e.pG=void 0;var a=o(61529);var i=o(95962);Object.defineProperty(e,"pG",{enumerable:!0,get:function(){return i.getImageSize}});var s=o(49363)},61529:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},95962:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=o(61529);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((o,i)=>{if("undefined"===typeof window)return i(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(a.ErrorMessage.URL_IS_NOT_DEFINED);let s=null;const r=new Image;r.addEventListener("load",(()=>{s&&window.clearTimeout(s),o({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{s&&window.clearTimeout(s),i("".concat(t.type,": ").concat(t.message))})),r.src=t,e.timeout&&(s=window.setTimeout((()=>i(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},49363:function(t,e,o){var a=this&&this.__awaiter||function(t,e,o,a){return new(o||(o=Promise))((function(i,s){function r(t){try{d(a.next(t))}catch(e){s(e)}}function n(t){try{d(a.throw(t))}catch(e){s(e)}}function d(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,n)}d((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=o(9950),s=o(95962);e.useImageSize=(t,e)=>{const[o,r]=(0,i.useState)(null),[n,d]=(0,i.useState)(!1),[l,c]=(0,i.useState)(null);return(0,i.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){d(!0),r(null),c(null);try{const{width:o,height:a}=yield(0,s.getImageSize)(t,e);r({width:o,height:a})}catch(l){c(l.toString())}finally{d(!1)}}))}),[t,e]),[o,{loading:n,error:l}]}},61038:()=>{},80045:(t,e,o)=>{o.d(e,{A:()=>i});var a=o(98587);function i(t,e){if(null==t)return{};var o,i,s=(0,a.A)(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)o=r[i],-1===e.indexOf(o)&&{}.propertyIsEnumerable.call(t,o)&&(s[o]=t[o])}return s}}}]);