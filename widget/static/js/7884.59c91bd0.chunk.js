(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6264,6723,7884,8167],{78167:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var a=o(9950),i=(o(52867),o(93662)),s=o(44414);class n extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o,size:a}=this.props;return(0,s.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,s.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:a||44,height:a||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,s.jsx)(i.A,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});var a=o(9950),i=o(44414);const s=t=>{let{username:e,network:o,authorClass:a,errorPic:s}=t;const n="#ffffff"==o.color?"#000":o.color;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:s||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45,"aria-label":"author image"})},n=(0,a.memo)(s)},60531:(t,e,o)=>{"use strict";o.d(e,{A:()=>n});var a=o(9950),i=o(44414);class s extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:a,item:s}=this.props,n=!(!o||1!==o.status),r={color:n?o.color:t.color,backgroundColor:n?o.background:t.background};return(0,i.jsxs)("div",{className:e,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),a(s),window.open("".concat(n?o.url:t.url),"_blank")},children:[" ",n?o.text:t.text]})}}const n=s},3720:(t,e,o)=>{"use strict";o.d(e,{A:()=>_});var a=o(9950),i=o(98776),s=o(38092),n=o.n(s),r=o(14478),c=o(66345),l=(o(45565),o(44414));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,i.pG)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{const{videoLoaded:e}=this.state;e!=t&&this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:a,controls:i,autoPlay:s,handleVideoEnded:_,muted:u}=this.props,{paddingBottom:h,videoLoaded:m,isVisible:p}=this.state,b={paddingBottom:"".concat(h,"%")},w=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.zi)(t,e.id)},autoPlay:s,muted:u,volume:s?1:0,playsinline:!0,onReady:t=>{c.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.HY?p:s,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},44463:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var a=o(9950),i=o(66345),s=o(44414);const n=a.lazy((()=>o.e(620).then(o.bind(o,20620))));class r extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.uS&&36==t.id?"tagembed":t.icon;return l?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,s.jsx)("div",{})}):(0,s.jsxs)(a.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(n,{network:t,networkClass:e})]})}}},65859:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var a=o(9950),i=o(70804),s=o(52867),n=(o(66345),o(44463),o(44414));const r=a.lazy((()=>Promise.all([o.e(8615),o.e(1796)]).then(o.bind(o,21796))));class c extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var o,a;const t=(null===(o=this.contentRef)||void 0===o||null===(a=o.current)||void 0===a?void 0:a.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:o,font:c,personalization:l,item:d,contentTitle:_,readMore:u,maxLength:h,textAlign:m,maxLines:p,isReadMore:b}=this.props,w={WebkitLineClamp:p,textAlign:o.textAlignment};m||o.textAlignment;let v=20==d.network.id?e:(0,s.w)(e);12==d.network.id&&(v=(0,i.Ay)(v));const f="".concat(o.lineTrim?" tb_content_line-".concat(o.lineTrim):""),g="".concat(t," ").concat(b?"":f," tb-cTBfont-").concat(o.font_varient);return(0,n.jsxs)("div",{className:g,ref:this.contentRef,style:w,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,i.Ay)(_)}):null,(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:d,content:v,Personalization:l})]})]})}}},49395:(t,e,o)=>{"use strict";o.d(e,{A:()=>c});var a=o(9950),i=o(66345),s=o(44414);const n=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.uS?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.uS?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:n}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:a,style:{color:n},"tb-network":e.id,children:(0,s.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:o,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,s.jsx)("div",{className:o,style:{color:a},"tb-network":e})};class c extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>o?(0,s.jsx)(r,{ThemeID:o},a):(0,s.jsx)(n,{network:e},a))):null})}}},173:(t,e,o)=>{"use strict";o.d(e,{A:()=>r});var a=o(9950),i=o(14478),s=o(66345),n=o(44414);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:a,ownerId:n}=this.props;e.stopPropagation(),s.uS||(0,i.hq)({type:2,action:2,wall:a,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:n}),(0,i.nF)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(s.uS?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},6723:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var a=o(9950),i=o(52867),s=o(44414);const n=t=>{const{postTime:e,timeClass:o}=t;return(0,s.jsx)("div",{className:o,role:"status","aria-label":"post timestamp ".concat((0,i.fF)(e)),children:(0,i.fF)(e)})},r=(0,a.memo)(n)},84061:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>N});o(9950);var a=o(78167),i=o(6723),s=o(44463),n=o(44414);const r=t=>{let{author:e,personalization:o,postTime:r,network:c,ThemeRule:l,font:d,mediaType:_}=t;const u=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!o.postAuthor||e.isInstaUser),m=!(!o.postAuthor||!o.postTime||e.isInstaUser);return(0,n.jsxs)("div",{className:"tb_wt_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,n.jsxs)("div",{className:"tb_wt_author",children:[h?(0,n.jsx)(a.default,{author:e,network:c,authorClass:"tb_wt_author_profile"}):"",(0,n.jsxs)("div",{className:"tb_wt_author_info",children:[h?(0,n.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,n.jsxs)("div",{className:"tb_wt_post_info",children:[h?(0,n.jsx)("div",{className:"tb_wt_username",children:u}):"",m?(0,n.jsx)("div",{className:"tb_wt_seprator",children:" "}):"",o.postTime?(0,n.jsx)(i.default,{postTime:r,timeClass:"tb_wt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor}):""]})]})]}),(0,n.jsx)("div",{className:"tb_wt_social_",children:(0,n.jsx)(s.default,{networkClass:"tb_wt_social_ico",network:c,isDefault:1===l.iconType,ThemeRule:l})})]})};var c=o(66345),l=o(15537),d=o(78262),_=o(3720);const u=t=>{let{itemData:e,wallID:o,ownerId:a,wall:i}=t;const s=!(!c.uS||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),r=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay,u=!(!c.uS&&!c.MH)&&(!!i.ThemeRule.aspectImageRatio&&i.ThemeRule.aspectImageRatio);return(0,n.jsxs)("div",{className:"tb_wt_media_wrap",role:"button",tabIndex:"0","aria-label":"Post Pop up media wrapper",children:[s?null:(0,n.jsx)(l.A,{itemData:e,IconClass:"tb_wt_media_icon",show:!0,isCenter:c.uS}),r||s?(0,n.jsx)(_.A,{VideoClass:"tb_wt_video",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:a,size:u,isCover:!0,controls:!1,autoPlay:!1,muted:!0}):(0,n.jsx)(d.default,{ImageClass:"tb_wt_image",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:a,size:u,ThemeRule:i.ThemeRule})]})};var h=o(65859),m=o(60531),p=o(49395);const b=t=>{let{share:e,shareClass:o}=t;const a=(t,e)=>{t.stopPropagation(),e()};return(0,n.jsx)("div",{className:o,children:(0,n.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var w=o(52867);const v=(t,e,o)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,w.Ph)(e)):o,f=(t,e,o)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,w.Ph)(e)):o,g=t=>{let{itemData:e,ThemeRule:o}=t;const a=e.network.id,i=3===a||10===a?"like":"heart-outline";return(0,n.jsx)(n.Fragment,{children:12!==a&&15!==a&&20!==a&&21!==a&&29!==a?(0,n.jsxs)("div",{className:"tb_wt_social_action__",role:"navigation",children:[(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:v(a,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post Like Url ".concat(v(a,e.postId,e.link)),title:"Favorite",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-".concat(i),children:" "}),e.like_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:f(a,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post comment Url ".concat(f(a,e.postId,e.link)),title:"Comment",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:c.uS?e.comment_count:e.like_count}):""]})}),1===a?(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,w.Ph)(e.postId)),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post comment Url https://twitter.com/intent/retweet?tweet_id=".concat((0,w.Ph)(e.postId)),title:"Tweet",children:(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})};var x=o(173);const k=c.uS?null:200,j=t=>{let{itemData:e,personalization:o,ThemeRule:a,wallID:i,clickToShowPopUp:s,itemIndex:l,ownerId:d,onClickToCTA:_,wall:v}=t;const f=!!(e.ugc_products&&e.ugc_products.length>0),j=!(!f||0!==e.hotspot),N=!(!e.hotspot||!f),I=!(c.uS&&(0,w.Nv)(53)||(0,w.Nv)(57)||c.MH&&(0,w.Nv)(85)||1===e.type),C=e.rating>0,T=e.rating>0?"tb_wt_rating_content":"tb_wt_content",y=1===e.type&&o.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",S=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),P=o.trimcontent?(0,w.Ex)(e.content,k):e.content;return(0,n.jsx)("div",{id:"tb-wt-post-".concat(e.id),className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":j?1:N?2:0,role:"article","aria-label":"Post ".concat(parseInt(l)+1,",").concat(P),tabIndex:"0",children:(0,n.jsxs)("div",{className:"tb_wt_post_in",onClick:s(l,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,n.jsx)(r,{ownerId:d,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:o,ThemeRule:a,mediaType:I}),(0,n.jsxs)("div",{className:"tb_wt_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[I?(0,n.jsx)(u,{itemData:e,wallID:i,ownerId:d,wall:v},"img".concat(l,"_").concat(e.id)):"",C?(0,n.jsxs)("div",{className:"tb_wt_rating__",children:[(0,n.jsx)(p.A,{rating:e.rating,network:e.network})," "]}):""]}),(0,n.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[e.share.status?(0,n.jsx)(x.A,{share:e.share,shareClass:"tb_wt_share_container",item:e,wallID:i,ownerId:d}):"",S?(0,n.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,n.jsx)(m.A,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",a.hideContent&&1!=e.type?"":(0,n.jsx)(h.default,{contentClass:"".concat(T," ").concat(y),item:e,content:P,font:a,ThemeRule:a,personalization:o,contentTitle:e.contentTitle}),(0,n.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!a.socialAction?{justifyContent:"flex-end"}:{},children:[a.socialAction?(0,n.jsx)(g,{itemData:e,ThemeRule:a}):"",e.share.status?(0,n.jsx)(b,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},N=t=>{let{postData:e,completeDataObject:o,adjustWidth:a,wall:i,clickToShowPopUp:s,onClickToCTA:r}=t;return(0,n.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const c=o[t];return(0,n.jsx)(j,{ownerId:i.Wall.owner,itemData:c,itemIndex:e,adjustWidth:a,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:s,onClickToCTA:r,wall:i},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},98776:(t,e,o)=>{"use strict";e.pG=void 0;var a=o(61529);var i=o(95962);Object.defineProperty(e,"pG",{enumerable:!0,get:function(){return i.getImageSize}});var s=o(49363)},61529:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},95962:(t,e,o)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=o(61529);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((o,i)=>{if("undefined"===typeof window)return i(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(a.ErrorMessage.URL_IS_NOT_DEFINED);let s=null;const n=new Image;n.addEventListener("load",(()=>{s&&window.clearTimeout(s),o({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{s&&window.clearTimeout(s),i("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(s=window.setTimeout((()=>i(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},49363:function(t,e,o){"use strict";var a=this&&this.__awaiter||function(t,e,o,a){return new(o||(o=Promise))((function(i,s){function n(t){try{c(a.next(t))}catch(e){s(e)}}function r(t){try{c(a.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(n,r)}c((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=o(9950),s=o(95962);e.useImageSize=(t,e)=>{const[o,n]=(0,i.useState)(null),[r,c]=(0,i.useState)(!1),[l,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){c(!0),n(null),d(null);try{const{width:o,height:a}=yield(0,s.getImageSize)(t,e);n({width:o,height:a})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[o,{loading:r,error:l}]}},95098:()=>{},80045:(t,e,o)=>{"use strict";o.d(e,{A:()=>i});var a=o(98587);function i(t,e){if(null==t)return{};var o,i,s=(0,a.A)(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)o=n[i],-1===e.indexOf(o)&&{}.propertyIsEnumerable.call(t,o)&&(s[o]=t[o])}return s}}}]);