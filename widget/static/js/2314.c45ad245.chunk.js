(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2314,8342,9239,5790],{89239:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var a=o(47313),s=(o(17739),o(98935)),i=o(46417);class n extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o}=this.props;return(0,i.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,i.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,i.jsx)(s.Z,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var a=o(47313),s=o(46417);const i=t=>{let{username:e,network:o,authorClass:a,errorPic:i}=t;const n="#ffffff"==o.color?"#000":o.color;return(0,s.jsx)("img",{className:"".concat(a,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45,"aria-label":"author image"})},n=(0,a.memo)(i)},7138:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var a=o(47313),s=o(46417);class i extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:a,item:i}=this.props,n=!(!o||1!==o.status),r={color:n?o.color:t.color,backgroundColor:n?o.background:t.background};return(0,s.jsxs)("div",{className:e,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),a(i),window.open("".concat(n?o.url:t.url),"_blank")},children:[" ",n?o.text:t.text]})}}const n=i},64442:(t,e,o)=>{"use strict";o.d(e,{Z:()=>_});var a=o(47313),s=o(2406),i=o(20510),n=o.n(i),r=o(43635),c=o(35179),l=(o(98511),o(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,s.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:a,controls:s,autoPlay:i,handleVideoEnded:_,muted:h}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:p}=this.state,b={paddingBottom:"".concat(u,"%")},w=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:i,muted:h,volume:i?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?p:i,height:"100%",width:"100%",controls:s||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},25810:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var a=o(47313),s=o(35179),i=o(46417);const n=a.lazy((()=>o.e(5867).then(o.bind(o,95867))));class r extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=s.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var a=o(47313),s=o(16390),i=o(17739),n=(o(35179),o(25810),o(46417));const r=a.lazy((()=>Promise.all([o.e(622),o.e(584)]).then(o.bind(o,30584))));class c extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:o,font:c,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:u,textAlign:m,maxLines:p,isReadMore:b}=this.props,w={WebkitLineClamp:p,textAlign:o.textAlignment};m||o.textAlignment;let v=20==d.network.id?e:(0,i.Fx)(e);12==d.network.id&&(v=(0,s.ZP)(v));const g="".concat(o.lineTrim?" tb_content_line-".concat(o.lineTrim):""),f="".concat(t," ").concat(b?"":g," tb-cTBfont-").concat(o.font_varient);return(0,n.jsxs)("div",{className:f,ref:this.contentRef,style:w,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(_)}):null,(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:d,content:v,Personalization:l})]})]})}}},90905:(t,e,o)=>{"use strict";o.d(e,{Z:()=>c});var a=o(47313),s=o(35179),i=o(46417);const n=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:n}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:n},"tb-network":e.id,children:(0,i.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:o,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:o,style:{color:a},"tb-network":e})};class c extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>o?(0,i.jsx)(r,{ThemeID:o},a):(0,i.jsx)(n,{network:e},a))):null})}}},5744:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var a=o(47313),s=o(43635),i=o(35179),n=o(46417);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:a,ownerId:n}=this.props;e.stopPropagation(),i.ZQ||(0,s.S5)({type:2,action:2,wall:a,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:n}),(0,s.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},55790:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var a=o(47313),s=o(17739),i=o(46417);const n=t=>{const{postTime:e,timeClass:o}=t;return(0,i.jsx)("div",{className:o,role:"status","aria-label":"post timestamp ".concat((0,s.Sy)(e)),children:(0,s.Sy)(e)})},r=(0,a.memo)(n)},95136:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>N});o(47313);var a=o(89239),s=o(55790),i=o(25810),n=o(46417);const r=t=>{let{author:e,personalization:o,postTime:r,network:c,ThemeRule:l,font:d,mediaType:_}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",u=!(!o.postAuthor||e.isInstaUser),m=!(!o.postAuthor||!o.postTime||e.isInstaUser);return(0,n.jsxs)("div",{className:"tb_wt_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,n.jsxs)("div",{className:"tb_wt_author",children:[u?(0,n.jsx)(a.default,{author:e,network:c,authorClass:"tb_wt_author_profile"}):"",(0,n.jsxs)("div",{className:"tb_wt_author_info",children:[u?(0,n.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,n.jsxs)("div",{className:"tb_wt_post_info",children:[u?(0,n.jsx)("div",{className:"tb_wt_username",children:h}):"",m?(0,n.jsx)("div",{className:"tb_wt_seprator",children:" "}):"",o.postTime?(0,n.jsx)(s.default,{postTime:r,timeClass:"tb_wt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor}):""]})]})]}),(0,n.jsx)("div",{className:"tb_wt_social_",children:(0,n.jsx)(i.default,{networkClass:"tb_wt_social_ico",network:c,isDefault:1===l.iconType,ThemeRule:l})})]})};var c=o(35179),l=o(81349),d=o(84261),_=o(64442);const h=t=>{let{itemData:e,wallID:o,ownerId:a,wall:s}=t;const i=!(!c.ZQ||3!==e.type&&5!==e.type||s.Personalization.mobilePopup||s.Personalization.postFeatured),r=(3===e.type||5===e.type)&&28!==e.network.id&&1==s.ThemeRule.autoPlay,h=!(!c.ZQ&&!c.Jx)&&(!!s.ThemeRule.aspectImageRatio&&s.ThemeRule.aspectImageRatio);return(0,n.jsxs)("div",{className:"tb_wt_media_wrap",role:"button",tabindex:"0","aria-label":"Post Pop up media wrapper",children:[i?null:(0,n.jsx)(l.Z,{itemData:e,IconClass:"tb_wt_media_icon",show:!0,isCenter:c.ZQ}),r||i?(0,n.jsx)(_.Z,{VideoClass:"tb_wt_video",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:h,isCover:!0,controls:!1,autoPlay:!1,muted:!0}):(0,n.jsx)(d.default,{ImageClass:"tb_wt_image",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:h,ThemeRule:s.ThemeRule})]})};var u=o(62245),m=o(7138),p=o(90905);const b=t=>{let{share:e,shareClass:o}=t;const a=(t,e)=>{t.stopPropagation(),e()};return(0,n.jsx)("div",{className:o,children:(0,n.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var w=o(17739);const v=(t,e,o)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,w.ok)(e)):o,g=(t,e,o)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,w.ok)(e)):o,f=t=>{let{itemData:e,ThemeRule:o}=t;const a=e.network.id,s=3===a||10===a?"like":"heart";return(0,n.jsx)(n.Fragment,{children:12!==a&&15!==a&&20!==a&&21!==a&&29!==a?(0,n.jsxs)("div",{className:"tb_wt_social_action__",role:"navigation",children:[(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:v(a,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post Like Url ".concat(v(a,e.postId,e.link)),title:"Favorite",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-".concat(s),children:" "}),e.like_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:g(a,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post comment Url ".concat(g(a,e.postId,e.link)),title:"Comment",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:c.ZQ?e.comment_count:e.like_count}):""]})}),1===a?(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,w.ok)(e.postId)),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow","aria-label":"Post comment Url https://twitter.com/intent/retweet?tweet_id=".concat((0,w.ok)(e.postId)),title:"Tweet",children:(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})};var x=o(5744);const k=c.ZQ?null:200,j=t=>{let{itemData:e,personalization:o,ThemeRule:a,wallID:s,clickToShowPopUp:i,itemIndex:l,ownerId:d,onClickToCTA:_,wall:v}=t;const g=!!(e.ugc_products&&e.ugc_products.length>0),j=!(!g||0!==e.hotspot),N=!(!e.hotspot||!g),C=!(c.ZQ&&(0,w.mD)(53)||(0,w.mD)(57)||c.Jx&&(0,w.mD)(85)||1===e.type),I=e.rating>0,T=e.rating>0?"tb_wt_rating_content":"tb_wt_content",y=1===e.type&&o.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",D=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),P=o.trimcontent?(0,w.Sv)(e.content,k):e.content;return(0,n.jsx)("div",{id:"tb-wt-post-".concat(e.id),className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":j?1:N?2:0,role:"article","aria-label":"Post ".concat(parseInt(l)+1,",").concat(P),tabIndex:"0",children:(0,n.jsxs)("div",{className:"tb_wt_post_in",onClick:i(l,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,n.jsx)(r,{ownerId:d,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:o,ThemeRule:a,mediaType:C}),(0,n.jsxs)("div",{className:"tb_wt_post_media_wrapp",role:"button",tabindex:"0","aria-label":"Pop Up Button",children:[C?(0,n.jsx)(h,{itemData:e,wallID:s,ownerId:d,wall:v},"img".concat(l,"_").concat(e.id)):"",I?(0,n.jsxs)("div",{className:"tb_wt_rating__",children:[(0,n.jsx)(p.Z,{rating:e.rating,network:e.network})," "]}):""]}),(0,n.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[e.share.status?(0,n.jsx)(x.Z,{share:e.share,shareClass:"tb_wt_share_container",item:e,wallID:s,ownerId:d}):"",D?(0,n.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,n.jsx)(m.Z,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",a.hideContent&&1!=e.type?"":(0,n.jsx)(u.default,{contentClass:"".concat(T," ").concat(y),item:e,content:P,font:a,ThemeRule:a,personalization:o,contentTitle:e.contentTitle}),(0,n.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!a.socialAction?{justifyContent:"flex-end"}:{},children:[a.socialAction?(0,n.jsx)(f,{itemData:e,ThemeRule:a}):"",e.share.status?(0,n.jsx)(b,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},N=t=>{let{postData:e,completeDataObject:o,adjustWidth:a,wall:s,clickToShowPopUp:i,onClickToCTA:r}=t;return(0,n.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const c=o[t];return(0,n.jsx)(j,{ownerId:s.Wall.owner,itemData:c,itemIndex:e,adjustWidth:a,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:i,onClickToCTA:r,wall:s},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},2406:(t,e,o)=>{"use strict";e.Ad=void 0;var a=o(84228);var s=o(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var i=o(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,o)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=o(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((o,s)=>{if("undefined"===typeof window)return s(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return s(a.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),o({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{i&&window.clearTimeout(i),s("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(i=window.setTimeout((()=>s(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,o){"use strict";var a=this&&this.__awaiter||function(t,e,o,a){return new(o||(o=Promise))((function(s,i){function n(t){try{c(a.next(t))}catch(e){i(e)}}function r(t){try{c(a.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(n,r)}c((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const s=o(47313),i=o(65786);e.useImageSize=(t,e)=>{const[o,n]=(0,s.useState)(null),[r,c]=(0,s.useState)(!1),[l,d]=(0,s.useState)(null);return(0,s.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){c(!0),n(null);try{const{width:o,height:a}=yield(0,i.getImageSize)(t,e);n({width:o,height:a})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[o,{loading:r,error:l}]}},50247:()=>{}}]);