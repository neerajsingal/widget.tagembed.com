(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2314,8342,9239,5790],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var o=s(47313),a=s(17739),i=s(98935),n=s(46417);class r extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var o=s(47313),a=s(46417);const i=t=>{let{username:e,network:s,authorClass:o,errorPic:i}=t;const n="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:"".concat(o,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,o.memo)(i)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var o=s(47313),a=s(46417);class i extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:o,item:i}=this.props,n=!(!s||1!==s.status),r={color:n?s.color:t.color,backgroundColor:n?s.background:t.background};return(0,a.jsxs)("div",{className:e,style:r,onClick:e=>{e.stopPropagation(),o(i),window.open("".concat(n?s.url:t.url),"_blank")},children:[" ",n?s.text:t.text]})}}const n=i},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var o=s(47313),a=s(2406),i=s(20510),n=s.n(i),r=s(43635),c=s(35179),l=(s(98511),s(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:o,controls:a,autoPlay:i,handleVideoEnded:_,muted:h}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:p}=this.state,b={paddingBottom:"".concat(u,"%")},w=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:i,muted:h,volume:i?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?p:i,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var o=s(47313),a=s(35179),i=s(46417);const n=o.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(o.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var o=s(47313),a=s(16390),i=s(17739),n=(s(35179),s(25810),s(46417));const r=o.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class c extends o.PureComponent{constructor(t){super(t),this.contentRef=o.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:c,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:u,textAlign:m,maxLines:p,isReadMore:b}=this.props,w={WebkitLineClamp:p,textAlign:s.textAlignment};m||s.textAlignment;let v=20==d.network.id?e:(0,i.Fx)(e);12==d.network.id&&(v=(0,a.ZP)(v));const f="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),g="".concat(t," ").concat(b?"":f," tb-cTBfont-").concat(s.font_varient);return(0,n.jsxs)("div",{className:g,ref:this.contentRef,style:w,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:d,content:v,Personalization:l})]})]})}}},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var o=s(47313),a=s(35179),i=s(46417);const n=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:n}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:o,style:{color:n},"tb-network":e.id,children:(0,i.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:s,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:s,style:{color:o},"tb-network":e})};class c extends o.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>s?(0,i.jsx)(r,{ThemeID:s},o):(0,i.jsx)(n,{network:e},o))):null})}}},5744:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var o=s(47313),a=s(43635),i=s(35179),n=s(46417);class r extends o.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:o,ownerId:n}=this.props;e.stopPropagation(),i.ZQ||(0,a.S5)({type:2,action:2,wall:o,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var o=s(47313),a=s(17739),i=s(46417);const n=t=>{const{postTime:e,timeClass:s}=t;return(0,i.jsx)("div",{className:s,children:(0,a.Sy)(e)})},r=(0,o.memo)(n)},95136:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>N});s(47313);var o=s(89239),a=s(55790),i=s(25810),n=s(46417);const r=t=>{let{author:e,personalization:s,postTime:r,network:c,ThemeRule:l,font:d,mediaType:_}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",u=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,n.jsxs)("div",{className:"tb_wt_author_wrapper",children:[(0,n.jsxs)("div",{className:"tb_wt_author",children:[u?(0,n.jsx)(o.default,{author:e,network:c,authorClass:"tb_wt_author_profile"}):"",(0,n.jsxs)("div",{className:"tb_wt_author_info",children:[u?(0,n.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,n.jsxs)("div",{className:"tb_wt_post_info",children:[u?(0,n.jsx)("div",{className:"tb_wt_username",children:h}):"",m?(0,n.jsx)("div",{className:"tb_wt_seprator",children:" "}):"",s.postTime?(0,n.jsx)(a.default,{postTime:r,timeClass:"tb_wt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor}):""]})]})]}),(0,n.jsx)("div",{className:"tb_wt_social_",children:(0,n.jsx)(i.default,{networkClass:"tb_wt_social_ico",network:c,isDefault:1===l.iconType,ThemeRule:l})})]})};var c=s(35179),l=s(81349),d=s(84261),_=s(64442);const h=t=>{let{itemData:e,wallID:s,ownerId:o,wall:a}=t;const i=!(!c.ZQ||3!==e.type&&5!==e.type||a.Personalization.mobilePopup||a.Personalization.postFeatured),r=(3===e.type||5===e.type)&&28!==e.network.id&&1==a.ThemeRule.autoPlay,h=!(!c.ZQ&&!c.Jx)&&(!!a.ThemeRule.aspectImageRatio&&a.ThemeRule.aspectImageRatio);return(0,n.jsxs)("div",{className:"tb_wt_media_wrap",children:[i?null:(0,n.jsx)(l.Z,{itemData:e,IconClass:"tb_wt_media_icon",show:!0,isCenter:c.ZQ}),r||i?(0,n.jsx)(_.Z,{VideoClass:"tb_wt_video",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:o,size:h,isCover:!0,controls:!1,autoPlay:!1,muted:!0}):(0,n.jsx)(d.default,{ImageClass:"tb_wt_image",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:o,size:h,ThemeRule:a.ThemeRule})]})};var u=s(62245),m=s(7138),p=s(90905);const b=t=>{let{share:e,shareClass:s}=t;const o=(t,e)=>{t.stopPropagation(),e()};return(0,n.jsx)("div",{className:s,children:(0,n.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>o(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var w=s(17739);const v=(t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,w.ok)(e)):s,f=(t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,w.ok)(e)):s,g=t=>{let{itemData:e,ThemeRule:s}=t;const o=e.network.id,a=3===o||10===o?"like":"heart";return(0,n.jsx)(n.Fragment,{children:12!==o&&15!==o&&20!==o&&21!==o&&29!==o?(0,n.jsxs)("div",{className:"tb_wt_social_action__",children:[(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:v(o,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-".concat(a),children:" "}),e.like_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:f(o,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:c.ZQ?e.comment_count:e.like_count}):""]})}),1===o?(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,w.ok)(e.postId)),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})};var x=s(5744);const k=c.ZQ?null:200,j=t=>{let{itemData:e,personalization:s,ThemeRule:o,wallID:a,clickToShowPopUp:i,itemIndex:l,ownerId:d,onClickToCTA:_,wall:v}=t;const f=!!(e.ugc_products&&e.ugc_products.length>0),j=!(!f||0!==e.hotspot),N=!(!e.hotspot||!f),C=!(c.ZQ&&(0,w.mD)(53)||(0,w.mD)(57)||c.Jx&&(0,w.mD)(85)||1===e.type),I=e.rating>0,T=e.rating>0?"tb_wt_rating_content":"tb_wt_content",y=1===e.type&&s.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",D=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),S=s.trimcontent?(0,w.Sv)(e.content,k):e.content;return(0,n.jsx)("div",{id:"tb-wt-post-".concat(e.id),className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":j?1:N?2:0,children:(0,n.jsxs)("div",{className:"tb_wt_post_in",onClick:i(l,e),children:[(0,n.jsx)(r,{ownerId:d,postTime:e.createdAt,author:e.author,network:e.network,font:o,personalization:s,ThemeRule:o,mediaType:C}),(0,n.jsxs)("div",{className:"tb_wt_post_media_wrapp",children:[C?(0,n.jsx)(h,{itemData:e,wallID:a,ownerId:d,wall:v},"img".concat(l,"_").concat(e.id)):"",I?(0,n.jsxs)("div",{className:"tb_wt_rating__",children:[(0,n.jsx)(p.Z,{rating:e.rating,network:e.network})," "]}):""]}),(0,n.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[e.share.status?(0,n.jsx)(x.Z,{share:e.share,shareClass:"tb_wt_share_container",item:e,wallID:a,ownerId:d}):"",D?(0,n.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,n.jsx)(m.Z,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",o.hideContent&&1!=e.type?"":(0,n.jsx)(u.default,{contentClass:"".concat(T," ").concat(y),item:e,content:S,font:o,ThemeRule:o,personalization:s,contentTitle:e.contentTitle}),(0,n.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!o.socialAction?{justifyContent:"flex-end"}:{},children:[o.socialAction?(0,n.jsx)(g,{itemData:e,ThemeRule:o}):"",e.share.status?(0,n.jsx)(b,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},N=t=>{let{postData:e,completeDataObject:s,adjustWidth:o,wall:a,clickToShowPopUp:i,onClickToCTA:r}=t;return(0,n.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const c=s[t];return(0,n.jsx)(j,{ownerId:a.Wall.owner,itemData:c,itemIndex:e,adjustWidth:o,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:i,onClickToCTA:r,wall:a},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var o=s(84228);var a=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var i=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(o.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),s({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{i&&window.clearTimeout(i),a("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(i=window.setTimeout((()=>a(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var o=this&&this.__awaiter||function(t,e,s,o){return new(s||(s=Promise))((function(a,i){function n(t){try{c(o.next(t))}catch(e){i(e)}}function r(t){try{c(o.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,r)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(47313),i=s(65786);e.useImageSize=(t,e)=>{const[s,n]=(0,a.useState)(null),[r,c]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){c(!0),n(null);try{const{width:s,height:o}=yield(0,i.getImageSize)(t,e);n({width:s,height:o})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[s,{loading:r,error:l}]}},50247:()=>{}}]);