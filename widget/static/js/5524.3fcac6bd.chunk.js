(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5524,6723,8167,8262],{18459:(t,e,i)=>{"use strict";i.d(e,{A:()=>d});var s=i(9950),r=(i(14478),i(98776),i(52867)),o=i(80415),a=i(44414);class d extends s.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src,loadError:!1})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.media}}componentWillReceiveProps(t){const{itemDetails:e}=t,{loadError:i}=this.state;i&&t!=this.props&&e&&Object.keys(e).length>0&&e.showCart&&this.setState({imgUrl:e.data.featured_image,loadError:!1})}render(){const{ImageClass:t,media:e,itemDetails:i}=this.props,{imgUrl:s,paddingBottom:d}=this.state,n={paddingBottom:`${d}%`};return(0,a.jsx)("div",{className:`${t}_wrap mediaHolder`,style:n,children:(0,a.jsx)("img",{className:t,role:"img",src:s,height:300,width:300,onLoad:this.onLoad,onError:t=>{this.setState({loadError:!0}),t.target.src=o.qF},alt:(0,r.wG)(s)})})}}},78167:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var s=i(9950),r=(i(52867),i(93662)),o=i(44414);class a extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i,size:s}=this.props;return(0,o.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:`${e}__`,src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:s||44,height:s||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(r.A,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,i)=>{"use strict";i.d(e,{A:()=>a});var s=i(9950),r=i(44414);const o=t=>{let{username:e,network:i,authorClass:s,errorPic:o}=t;const a="#ffffff"==i.color?"#000":i.color;return(0,r.jsx)("img",{className:`${s}__`,src:o||`https://ui-avatars.com/api/?name=${e.replace(/\s/g,"")}&background=${String(null===i.id?"#000":a).replace("#","")}&color=fff&length=1`,alt:e,width:45,height:45,"aria-label":"author image"})},a=(0,s.memo)(o)},45565:(t,e,i)=>{"use strict";i.d(e,{A:()=>a});var s=i(80415),r=i(52867),o=i(44414);const a=t=>{let{size:e}=t;const i=t=>!(!(0,r.Nv)(t)||1!=e);return(0,o.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width",""+(2==e?"110px":"75px"),"important"),t.style.setProperty("height",""+(2==e?"25px":"18px"),"important"),t.style.setProperty("max-width",""+(2==e?"110px":"75px"),"important"),t.style.setProperty("max-height",""+(2==e?"25px":"18px"),"important"),t.style.setProperty("top",""+(i(55)||i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("left",""+(i(62)||i(61)?"auto":"14px"),"important"),t.style.setProperty("right",""+(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("bottom",""+(i(55)||i(62)||i(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image",`url(${s.th}/media/images/tagshop-light.svg)`,"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,o.jsx)("div",{children:" "})})}},89874:(t,e,i)=>{"use strict";i.d(e,{A:()=>h});var s=i(9950),r=i(11127),o=i(73068),a=i(1823),d=i(52867),n=i(14478),l=i(44414);const c=(0,o.componentWillAppendToBody)((t=>{let{children:e,wallId:i}=t;return i?(0,l.jsx)("div",{"data-widget-id":i,children:e}):null})),p=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?`<div class="tb_p_tooltip_price tb_price_disabled">${t.price_currency_symbol}${t.product_price}</div>`:"",s=t.product_price>0||t.product_discount>0?`${i}<div class="tb_p_tooltip_price">${t.price_currency_symbol}${e}</div>`:"";return`<a href="${t.product_url}" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">${t.product_title}</div>\n          ${s}\n        </a>`};class u extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:e,dataItem:i}=this.props;if(e&&Object.keys(e).length>0){var s,r;const{wall:o}=e;(0,n.hq)({type:1,action:2,wall:null===o||void 0===o||null===(s=o.Wall)||void 0===s?void 0:s.id,product_id:t.id,post:i.referenceId,owner:null===o||void 0===o||null===(r=o.Wall)||void 0===r?void 0:r.owner,feed:i.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,r)=>{var o,n;const u=(0,d.Ul)();return(0,l.jsxs)("div",{href:t.product_url,id:`tb_hotspot-${t.id}${u}`,onClick:e=>{this.tracking(t.UgcProduct),e.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(r),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot"+(i==r?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ "+(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:r+1}),(0,l.jsx)(c,{wallId:null===e||void 0===e||null===(o=e.wall)||void 0===o||null===(n=o.Wall)||void 0===n?void 0:n.id,children:(0,l.jsx)(a.m_,{className:"tb_pro_tooltip",anchorSelect:`#tb_hotspot-${t.id}${u}`,clickable:!0,html:p(t.UgcProduct)})})]},r)}))}):null}}const h=(0,r.Ng)((t=>({appData:t.appData})))(u)},78262:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(9950),r=i(14478),o=i(89874),a=i(98776),d=i(52867),n=i(80415),l=(i(66345),i(45565),i(44414));class c extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(`.track${this.props.data.id}`);i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,a.pG)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:s,ownerId:a,hotspot:c}=this.props,{imgUrl:p,paddingBottom:u,size:h,fixedPaddingBottom:m}=this.state,_={paddingBottom:`${this.props.size?1==this.props.size?null:m:u}%`},g={backgroundImage:`url(${p})`};if(h.width>h.height)var b="100%",v=h.height/h.width*100+"%";else v="100%",b=h.width/h.height*100+"%";const w=!!(e.hotspot&&e.ugc_products.length>0&&c),y={width:w&&this.props.size?b:null,height:w&&this.props.size?v:null};return(0,l.jsxs)("div",{className:`${t}_wrap_ mediaHolder${e.id}`,style:_,children:[w?(0,l.jsx)("div",{className:"tb_blur_bg_",style:g}):null,(0,l.jsxs)("div",{className:`${t}_wrap_in`,style:y,children:[w?(0,l.jsx)(o.A,{product:e.ugc_products,dataItem:e}):null,(0,l.jsx)("img",{className:`${t} track${e.id}`,role:"img",src:p,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src=`${n.th}/media/images/no-image.svg`,(0,r.bs)(t)},alt:(0,d.wE)(e.content)})]})]})}}},3720:(t,e,i)=>{"use strict";i.d(e,{A:()=>p});var s=i(9950),r=i(98776),o=i(38092),a=i.n(o),d=i(14478),n=i(66345),l=(i(45565),i(44414));const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,r.pG)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{const{videoLoaded:e}=this.state;e!=t&&this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(n.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(n.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){var t;const{VideoClass:e,data:i,wallID:s,isCover:r,controls:o,autoPlay:p,handleVideoEnded:u,muted:h,wall:m,ownerId:_}=this.props,{paddingBottom:g,videoLoaded:b,isVisible:v}=this.state,w={paddingBottom:`${g}%`},y=i.mediaClip&&String(i.mediaClip).length>0?i.mediaClip:i.mediaUrl;return(0,l.jsx)("div",{className:`${e}_wrap_ mediaHolder${i.id}`,style:w,ref:this.videoRef,children:(0,l.jsx)(a(),{className:`${e} video${i.id}`,url:c(y,i.network.id),"data-type":"video","data-network":i.network.id,"data-link":i.link,"data-wall-id":s,"data-item-id":i.id,"data-feed-id":i.feedId?i.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":""+(document.querySelector(".ts_rt_post_in")?`${document.querySelector(".ts_rt_post_in").clientHeight} px`:"100%"),title:`${i.network.name} post video`,"aria-labelledby":`tb-hc-post-${i.id}`,autoPlay:p,role:"presentation"}},file:{attributes:{preload:"metadata",title:`${i.network.name} post video`,"aria-labelledby":`tb-hc-post-${i.id}`,autoPlay:p,role:"presentation"}}},loop:!0,onError:t=>{i.stories&&0!=i.stories||(0,d.zi)(t,i.id)},autoPlay:p,muted:h,volume:p?1:0,playsinline:!0,onReady:t=>{n.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:n.HY?v:p,height:"100%",width:"100%",controls:[1533063,1739883].includes((null===m||void 0===m||null===(t=m.Wall)||void 0===t?void 0:t.owner)||_)||o||!1,style:{backgroundImage:`url(${i.postFileNew})`,backgroundSize:r?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:u||null})})}}},44463:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var s=i(9950),r=i(66345),o=i(44414);const a=s.lazy((()=>i.e(620).then(i.bind(i,20620))));class d extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:d,Personalization:n}=this.props,l=!!d&&(7!==t.id&&4!==t.id&&36!==t.id),c=r.uS&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:`${e} tb__icon tb-${c.replace(/fa-/g,"")}`,"aria-label":`post network ${(null===t||void 0===t?void 0:t.name)||""}`,children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(a,{network:t,networkClass:e})]})}}},47713:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var s=i(52867),r=i(44414);const o=t=>{let{ThemeRule:e,btnClass:i}=t;const o={fontFamily:e.css_font};return(0,r.jsx)("div",{className:`tb_shop_btn_wrap ${i}`,children:(0,r.jsx)("div",{className:"tb_shop_btn"+(e.postHover||(0,s.Nv)(4)||(0,s.Nv)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:o,children:e.shoppingText})})}},6723:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var s=i(9950),r=i(52867),o=i(44414);const a=t=>{const{postTime:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,r.fF)(e)}`,children:(0,r.fF)(e)})},d=(0,s.memo)(a)},77611:(t,e,i)=>{"use strict";i.d(e,{A:()=>o});var s=i(52867),r=i(44414);const o=t=>{let{count:e}=t;return(0,r.jsxs)("div",{className:"tb_r_view",children:[(0,r.jsx)("div",{className:"tb__icon tb-eye",children:(0,r.jsx)("div",{})}),(0,s.sl)(e)]})}},17135:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>I});var s=i(9950),r=i(41377),o=i(11127),a=i(68940),d=i(91109),n=(i(99425),i(62200),i(3473),i(71565),i(78262)),l=i(3720),c=i(66345),p=i(44414);const u=t=>{let{itemData:e,wallID:i,wall:s,ownerId:r,preload:o,isVisible:a}=t;const d=!(3!==e.type&&5!==e.type||1!=s.ThemeRule.autoPlay&&c.HY);return(0,p.jsx)("div",{className:"tb_rtp_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:d?(0,p.jsx)(l.A,{VideoClass:"tb_rtp_video",data:e,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:r,size:178,isCover:!0,muted:!0}):(0,p.jsx)(n.default,{ImageClass:"tb_rtp_image",data:e,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:r,size:178})})};var h=i(52867),m=(i(44463),i(47713),i(18459)),_=i(70804);const g=(t,e)=>{if(0!=t){if(e>0&&e<t){let i=(t-e)/t*100;return i>0?`${i.toFixed()}%`:""}return!1}return!1},b=t=>{let{itemData:e,wall:i}=t;const s=e.ugc_products,{Price:r,ProductTitle:o}=i.ProductSetting,n=!(!s||1!=s.length);return(0,p.jsx)("div",{className:"tb_rtp_wrap",id:`slide-${e.id}`,children:(0,p.jsxs)("div",{className:"tb_rtp_wrap_in",children:[(0,p.jsx)(a.RC,{id:`product_slide-${e.id}`,modules:[d.dK,d.Vx],spaceBetween:10,navigation:{prevEl:`#tb_rtn_prev-${e.id}`,nextEl:`#tb_rtn_next-${e.id}`},children:s.map(((t,e)=>(0,p.jsx)(a.qr,{children:(0,p.jsxs)("div",{className:"tb_rtp",children:[(0,p.jsx)("div",{className:"tb_rtp_media",style:{opacity:t.UgcProduct.product_image?1:0},children:(0,p.jsx)(m.A,{ImageClass:"tb_rtp_img",media:t.UgcProduct.product_image,size:!1,itemDetails:""})}),(0,p.jsx)("div",{className:"tb_rtp_title_w",children:t.UgcProduct.product_title?(0,p.jsx)("div",{className:`tb_rtp_title tb-cTBfont-${o.varient}`,children:(0,_.Ay)(t.UgcProduct.product_title)}):null}),t.UgcProduct.product_price>0||t.UgcProduct.product_discount>0?(0,p.jsxs)("div",{className:"tb_rtp_price_wrap",children:[(0,p.jsxs)("div",{className:`tb_rtp_price tb-cTBfont-${r.varient}`,children:[t.UgcProduct.price_currency_symbol,t.UgcProduct.product_discount>0?t.UgcProduct.product_discount:t.UgcProduct.product_price]}),t.UgcProduct.product_discount>0&&t.UgcProduct.product_discount!=t.UgcProduct.product_price?(0,p.jsxs)("div",{className:`tb_rtp_d_price tb-cTBfont-${r.varient}`,children:[t.UgcProduct.price_currency_symbol,t.UgcProduct.product_price]}):null,g(t.UgcProduct.product_price,t.UgcProduct.product_discount)&&""!=g(t.UgcProduct.product_price,t.UgcProduct.product_discount)?(0,p.jsx)("div",{className:"tb_rtp_dp",children:g(t.UgcProduct.product_price,t.UgcProduct.product_discount)}):null]}):null]},e)},e)))}),n?null:(0,p.jsxs)("div",{className:"tb_rtn_wrap",onClick:t=>{t.stopPropagation()},children:[(0,p.jsx)("div",{id:`tb_rtn_prev-${e.id}`,className:"tb_rtn_btn tb_rtn_btn_left tb__icon tb-arrow-left-alt",children:(0,p.jsx)("div",{})}),(0,p.jsx)("div",{id:`tb_rtn_next-${e.id}`,className:"tb_rtn_btn tb_rtn_btn_right tb__icon tb-arrow-right-alt",children:(0,p.jsx)("div",{})})]})]})})};var v=i(78167),w=i(6723);const y=t=>{let{author:e,personalization:i,postTime:s,network:r,ThemeRule:o,font:a,mediaType:d,ownerId:n,wall:l}=t;const c=!(!i.postAuthor||e.isInstaUser),{ProductTitle:u}=l.ProductSetting;return(0,p.jsx)("div",{className:"tb_rtp_wrap",children:(0,p.jsxs)("div",{className:"tb_rtp_wrap_in",style:{marginTop:c?"":0},children:[c?(0,p.jsxs)("div",{className:"tb_rtp_media",children:[(0,p.jsx)(v.default,{network:r,author:e,authorClass:"tb_rtp_a_img"},e.username)," "]}):"",c?(0,p.jsx)("div",{className:"tb_rtp_title_w",children:(0,p.jsx)("div",{className:`tb_rtp_authorname tb-cTBfont-${u.varient}`,children:e.username&&e.username.length>0?`${e.username}`:""})}):"",s?(0,p.jsx)(w.default,{postTime:s,timeClass:`tb_rtp_time tb-cTBfont-${o.font_varient}`}):""]})})};var f=i(77611);class x extends s.PureComponent{constructor(t){super(t),this.mediaHeight=s.createRef()}componentDidMount(){const{itemData:t,itemIndex:e,onClickPopUpSlider:i}=this.props;(0,h._7)(this.mediaHeight),t.isPopUp&&i(e,t)}render(){const{itemData:t,itemIndex:e,wallID:i,ownerId:s,wall:r,isVisible:o,clickToShowPopUp:a,ThemeRule:d,personalization:n,sliderHeight:l}=this.props,h=!!(t.ugc_products&&t.ugc_products.length>0),m={backgroundColor:d.cardColor,minHeight:l},_=!(!c.HY||!h||0!==t.hotspot),g=!!(c.HY&&t.hotspot&&h),v=3===t.type||5===t.type;return(0,p.jsx)("div",{"item-id":t.id,id:`tb-hc-post-${t.id}`,className:"tb_rtp_post_wrapper",ref:this.mediaHeight,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,style:{paddingLeft:r.Personalization.padding/2,paddingRight:r.Personalization.padding/2},"tb-product":_?1:g?2:0,children:(0,p.jsxs)("div",{className:"tb_rtp_post_in tb_icon_animate "+(c.HY?"":"tb_rtp_post_in_animate"),style:m,onClick:a(e,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,p.jsxs)("div",{className:"tb_rtp_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[v&&1==d.showReelsView&&(null===t||void 0===t?void 0:t.views)>0?(0,p.jsx)(f.A,{count:null===t||void 0===t?void 0:t.views}):null,(0,p.jsx)(u,{itemData:t,wallID:i,wall:r,ownerId:s,preload:0==e,isVisible:o},`img${e}_${t.id}`),c.HY?null:(0,p.jsx)("div",{className:"tb_rtp_play_ico",children:(0,p.jsx)("div",{className:"tb__icon tb-play",children:(0,p.jsx)("div",{})})})]}),h?(0,p.jsx)(b,{itemData:t,wall:r},`product_slide${t.id}`):(0,p.jsx)(y,{ownerId:s,postTime:t.createdAt,author:t.author,network:t.network,font:d,personalization:n,ThemeRule:d,wall:r})]})})}}var P=i(14478);class j extends s.Component{constructor(t){super(t),this.state={sliderHeight:""},this.requestData=t=>{const{appendData:e,wall:i,preRender:s,hasMoreData:r,getDataNextSteps:o,loaderData:a}=this.props;t.progress>.8&&r&&!a.isShowMoreLoading&&o(i.Wall.id,Math.floor(Date.now()/1e3),i.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.sliderHeight=s.createRef(),this.inputRefs={}}componentDidMount(){this.sliderHeight.current&&this.setState({sliderHeight:this.sliderHeight.current.clientHeight-40}),setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let t=document.querySelector(".tb_rtp_arrow_left__"),e=document.querySelector(".tb_rtp_arrow_right__");t&&e&&(document.querySelector(".tb_rtp_arrow_left__").style="display:none",document.querySelector(".tb_rtp_arrow_right__").style="display:none")}}render(){const{postData:t,completeDataObject:e,wall:i,clickToShowPopUp:s,hasMoreData:o,parentID:n,keyRender:l,containerSize:u,onClickPopUpSlider:h}=this.props,m=n,{sliderHeight:_}=this.state,g=i.ThemeRule.numberOfCoumn,b=i.ThemeRule.mobileColumn,v=i.ThemeRule.slidePost,w=i.ThemeRule.slideDuration,y=1===i.Personalization.trimcontent,f=(u.width/240).toFixed();let P=(1==f?2:f)-.4;var j=t;P>t.length&&(P=t.length);const I=0==g?P:parseInt(g)-.4;return I&&Math.round(I)<=t.length&&(j=Array(2).fill(t).flat()),(0,p.jsx)(p.Fragment,{children:""!=n?(0,p.jsx)("div",{className:"tb_rtp_post_container",ref:this.sliderHeight,children:(0,p.jsx)(a.RC,{ref:t=>this.inputRefs[m]=t,style:{width:"100%",height:"100%"},onScroll:t=>this.requestData(t),onSlideChange:t=>this.requestData(t),onAutoplay:t=>this.requestData(t),autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:I,touchRatio:2,cssMode:r.Fr,passiveListeners:!0,height:"100%",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:!!c.HY&&{delay:1===v?1e3*w:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!o,slideFullyVisibleClass:"tb-swiper-slide-fully-visible",breakpoints:{0:{slidesPerView:0==b?P:parseInt(b)-.4},480:{slidesPerView:0==b?P:parseInt(b)-.4},575:{slidesPerView:0==b?P:parseInt(b)-.4},767:{slidesPerView:I},1024:{slidesPerView:I},1400:{slidesPerView:I},1600:{slidesPerView:I}},mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[d.Ij,d.FJ,d.U1],className:"tb_rtp_post_slider "+(y?"tb_rtp_fixed_height":""),children:(0,p.jsx)(p.Fragment,{children:j&&j.length>0&&j.map(((t,r)=>{const o=e[t];return c.HY||3===o.type||5===o.type?(0,p.jsx)(a.qr,{style:{margin:0,padding:0},p_id:n,className:`tb_${o.id}`,children:t=>{let{isVisible:e}=t;return(0,p.jsx)(x,{isVisible:e,ownerId:i.Wall.owner,itemData:o,itemIndex:r,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:s,wall:i,sliderHeight:_,onClickPopUpSlider:h})}},r):null}))})},l)}):null})}}const I=(0,s.memo)((0,o.Ng)((t=>({loaderData:t.loaderData})),(t=>({getDataNextSteps:(e,i,s,r,o,a,d,n)=>t((0,P.H5)(e,i,s,r,o,a,d,n))})))(j))},98776:(t,e,i)=>{"use strict";e.pG=void 0;var s=i(61529);var r=i(95962);Object.defineProperty(e,"pG",{enumerable:!0,get:function(){return r.getImageSize}});var o=i(49363)},61529:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},95962:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=i(61529);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,r)=>{if("undefined"===typeof window)return r(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return r(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const a=new Image;a.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:a.naturalWidth,height:a.naturalHeight})})),a.addEventListener("error",(t=>{o&&window.clearTimeout(o),r(`${t.type}: ${t.message}`)})),a.src=t,e.timeout&&(o=window.setTimeout((()=>r(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},49363:function(t,e,i){"use strict";var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(r,o){function a(t){try{n(s.next(t))}catch(e){o(e)}}function d(t){try{n(s.throw(t))}catch(e){o(e)}}function n(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,d)}n((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const r=i(9950),o=i(95962);e.useImageSize=(t,e)=>{const[i,a]=(0,r.useState)(null),[d,n]=(0,r.useState)(!1),[l,c]=(0,r.useState)(null);return(0,r.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){n(!0),a(null),c(null);try{const{width:i,height:s}=yield(0,o.getImageSize)(t,e);a({width:i,height:s})}catch(l){c(l.toString())}finally{n(!1)}}))}),[t,e]),[i,{loading:d,error:l}]}},62200:()=>{},3473:()=>{},71565:()=>{},95098:()=>{}}]);