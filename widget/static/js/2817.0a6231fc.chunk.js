(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2817,8342,9239,5790],{89239:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var a=o(47313),i=o(17739),s=o(98935),n=o(46417);class c extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(s.Z,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var a=o(47313),i=o(46417);const s=t=>{let{username:e,network:o,authorClass:a,errorPic:s}=t;const n="#ffffff"==o.color?"#000":o.color;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:s||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,a.memo)(s)},7138:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var a=o(47313),i=o(46417);class s extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:a,item:s}=this.props,n=!(!o||1!==o.status),c={color:n?o.color:t.color,backgroundColor:n?o.background:t.background};return(0,i.jsxs)("div",{className:e,style:c,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),a(s),window.open("".concat(n?o.url:t.url),"_blank")},children:[" ",n?o.text:t.text]})}}const n=s},64442:(t,e,o)=>{"use strict";o.d(e,{Z:()=>_});var a=o(47313),i=o(2406),s=o(20510),n=o.n(s),c=o(43635),r=o(35179),l=(o(98511),o(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(r.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(r.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:a,controls:i,autoPlay:s,handleVideoEnded:_,muted:h}=this.props,{paddingBottom:m,videoLoaded:p,isVisible:u}=this.state,b={paddingBottom:"".concat(m,"%")},g=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(g,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,c.ib)(t,e.id)},autoPlay:s,muted:h,volume:s?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig?u:s,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},25810:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var a=o(47313),i=o(35179),s=o(46417);const n=a.lazy((()=>o.e(5867).then(o.bind(o,95867))));class c extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:c,Personalization:r}=this.props,l=!!c&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,s.jsx)("div",{})}):(0,s.jsxs)(a.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var a=o(47313),i=o(16390),s=o(17739),n=(o(35179),o(25810),o(46417));const c=a.lazy((()=>Promise.all([o.e(622),o.e(584)]).then(o.bind(o,30584))));class r extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:o,font:r,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:m,textAlign:p,maxLines:u,isReadMore:b}=this.props,g={WebkitLineClamp:u,textAlign:o.textAlignment};p||o.textAlignment;let w=20==d.network.id?e:(0,s.Fx)(e);12==d.network.id&&(w=(0,i.ZP)(w));const x="".concat(o.lineTrim?" tb_content_line-".concat(o.lineTrim):""),k="".concat(t," ").concat(b?"":x," tb-cTBfont-").concat(o.font_varient);return(0,n.jsxs)("div",{className:k,ref:this.contentRef,style:g,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(_)}):null,(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(c,{data:d,content:w,Personalization:l})]})]})}}},90905:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var a=o(47313),i=o(35179),s=o(46417);const n=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:n}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:a,style:{color:n},"tb-network":e.id,children:(0,s.jsx)("div",{})})},c=t=>{let{ThemeID:e}=t;const{className:o,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,s.jsx)("div",{className:o,style:{color:a},"tb-network":e})};class r extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>o?(0,s.jsx)(c,{ThemeID:o},a):(0,s.jsx)(n,{network:e},a))):null})}}},5744:(t,e,o)=>{"use strict";o.d(e,{Z:()=>c});var a=o(47313),i=o(43635),s=o(35179),n=o(46417);class c extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:a,ownerId:n}=this.props;e.stopPropagation(),s.ZQ||(0,i.S5)({type:2,action:2,wall:a,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:n}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(s.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},32675:(t,e,o)=>{"use strict";o.d(e,{Z:()=>l});var a=o(47313),i=(o(35179),o(17739)),s=o(46417);const n=(t,e,o)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,i.ok)(e)):o,c=(t,e,o)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,i.ok)(e)):o,r=t=>{let{arialbl:e,hrefClick:o,Icon:a,count:n,itemId:c=0}=t;return(0,s.jsx)("div",{className:"tb_social_action__list",role:"listitem",children:(0,s.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(o,"_blank")},className:"tb_social_action__ico_wrap tb_social_action__ico_wrap_".concat(c),"aria-label":"".concat(e," post,").concat("eye"==a?"view":"heart"==a?"like":"comment"==a?"comment":""," count ").concat((0,i.sy)(n)),role:"button",tabIndex:"0",children:[(0,s.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(a),children:" "}),n>0?(0,s.jsx)("div",{className:"tb_social_action_counts__",children:(0,i.sy)(n)}):""]})})};class l extends a.PureComponent{componentDidMount(){try{var t;const{itemData:e}=this.props,o=".tb_social_action__ico_wrap_".concat(null===e||void 0===e?void 0:e.id);null===(t=document.querySelector(o))||void 0===t||t.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(e){console.log(e)}}render(){const{itemData:t,ThemeRule:e,actionClass:o,ThemeID:a}=this.props,l={color:3===a?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),m=![29,19].includes(d),p=t.network.name?t.network.name:"";return(0,s.jsx)(s.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,s.jsx)("div",{className:o,children:(0,s.jsxs)("div",{className:"tb_social_action__",role:"list",children:[h?(0,s.jsx)(r,{itemId:t.id,arialbl:p,hrefClick:n(d,t.postId,t.link),Icon:_,iconColorStyle:l,count:t.like_count}):null,m?(0,s.jsx)(r,{itemId:t.id,arialbl:p,hrefClick:c(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,s.jsx)(r,{itemId:t.id,arialbl:p,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,i.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,s.jsx)(r,{arialbl:p,itemId:t.id,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},55790:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var a=o(47313),i=o(17739),s=o(46417);const n=t=>{const{postTime:e,timeClass:o}=t;return(0,s.jsx)("div",{className:o,role:"status","aria-label":"post timestamp",children:(0,i.Sy)(e)})},c=(0,a.memo)(n)},16977:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>y});var a=o(47313),i=o(61395),s=o.n(i),n=o(89239),c=o(55790),r=o(25810),l=o(35179),d=o(17739),_=o(46417);const h=t=>{let{author:e,personalization:o,postTime:a,network:i,ThemeRule:s,itemData:h,mediaType:m}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",u=!(!o.postAuthor||e.isInstaUser),b=!(!o.postAuthor||!o.postTime||e.isInstaUser||""==p);return(0,_.jsxs)("div",{className:"tb_nc_author_wrapper",children:[(0,_.jsxs)("div",{className:"tb_nc_author ".concat(l.ZQ&&(0,d.mD)(19)&&m?"tb_nc_author_top":""),children:[u?(0,_.jsx)(n.default,{itemData:h,network:i,author:e,authorClass:"tb_nc_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_nc_author_info",children:[u?(0,_.jsx)("div",{className:"tb_nc_authorname",children:e.name}):"",(0,_.jsxs)("div",{className:"tb_nc_post_info",children:[u&&""!=p?(0,_.jsx)("div",{className:"tb_nc_username",children:p}):"",b?(0,_.jsx)("div",{className:"tb_nc_seprator",children:" "}):"",o.postTime?(0,_.jsx)(c.default,{postTime:a,timeClass:"tb_nc_time tb-cTBfont-".concat(s.font_varient),authorColor:s.authorColor}):""]})]})]}),l.ZQ&&(0,d.mD)(19)&&l.ZQ&&!m||(0,d.mD)(59)||(0,d.mD)(83)||(0,d.mD)(19)&&(l.ig||l.Jx)?(0,_.jsx)("div",{className:"tb_nc_social_",children:(0,_.jsx)(r.default,{networkClass:"tb_nc_social_ico",network:i,isDefault:1===s.iconType,ThemeRule:s})}):null]})};var m=o(81349),p=o(84261),u=o(64442);const b=t=>{let{itemData:e,wallID:o,ownerId:a,wall:i}=t;const s=!(!l.ZQ||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay,c=l.ZQ||l.Jx?!!i.ThemeRule.aspectImageRatio&&i.ThemeRule.aspectImageRatio:(l.ig,!1),h=(e.hotspot,!!(l.ZQ&&(0,d.mD)(19)||!(0,d.mD)(59)&&!l.ig&&!l.Jx));return(0,_.jsxs)("div",{className:"tb_nc_media_wrap",children:[h?(0,_.jsx)("div",{className:"tb_nc_social_ tb_nc_social_top_",children:(0,_.jsx)(r.default,{networkClass:"tb_nc_social_ico",network:e.network,isDefault:1===i.ThemeRule.iconType,ThemeRule:i.ThemeRule})}):null,s?null:(0,_.jsx)(m.Z,{itemData:e,IconClass:h?"tb_nc_media_icon_te":"tb_nc_media_icon",show:!0,isCenter:l.ZQ}),n||s?(0,_.jsx)(u.Z,{VideoClass:"tb_nc_video",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:a,size:c,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,_.jsx)(p.default,{ImageClass:"tb_nc_image",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:a,size:c,ThemeRule:i.ThemeRule,hotspot:!0})]})};var g=o(62245),w=o(5744),x=o(7138),k=o(90905),v=o(32675);const f=l.ZQ?null:200,j=t=>{let{itemData:e,personalization:o,adjustWidth:i,ThemeRule:s,clickToShowPopUp:n,itemIndex:c,wallID:r,ownerId:m,onClickToCTA:p,wall:u,counter:j,onClickPopUpSlider:C}=t;const T=(0,a.useRef)(null),I={width:"".concat(i,"%"),padding:o.padding/2},y=1!==e.type,N=e.rating>0,D=e.rating>0?"tb_nc_rating_content":"tb_nc_content",P=1===e.type&&o.textDecorate?"tb_nc_text_decoration tb_nc_text_post":"",S=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),R=o.trimcontent?(0,d.Sv)(e.content,f):e.content;(0,a.useEffect)((()=>{l.ig&&(0,d.YN)(T)}),[]),(0,a.useEffect)((()=>{e.isPopUp&&C(c,e)}),[c,e.isPopUp,e]);e.font;return(0,_.jsx)("div",{id:"tb-nc-post-".concat(e.id),className:"tb_nc_post_wrapper ".concat(l.ZQ&&(0,d.mD)(59)||l.Jx&&(0,d.mD)(83)?"tb_nc_post_gradient tb_nc_gradient-".concat(j):""),style:I,"tb-network":e.network.icon,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,ref:T,tabIndex:"0","area-label":R,role:"article",children:(0,_.jsx)("div",{className:"tb_nc_post_wrap_in",children:(0,_.jsxs)("div",{className:"tb_nc_post_in",onClick:n(c,e),children:[(0,_.jsxs)("div",{className:"tb_nc_post_media_wrapp",children:[e.share.status?(0,_.jsx)(w.Z,{share:e.share,shareClass:"tb_nc_share_container",item:e,wallID:r,ownerId:m}):"",y?(0,_.jsx)(b,{itemData:e,wallID:r,ownerId:m,wall:u},"img_".concat(e.id)):"",!N||l.ZQ||(0,d.mD)(59)||l.ig?"":(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(k.Z,{rating:e.rating,network:e.network,ThemeID:59==o.widgetTheme?o.widgetTheme:null})})]}),(0,_.jsxs)("div",{className:"tb_nc_contant_wrapper",children:[(0,_.jsx)(h,{mediaType:y,ownerId:m,itemData:e.id,postTime:e.createdAt,author:e.author,network:e.network,font:s,personalization:o,ThemeRule:s}),l.ZQ?"":S?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(x.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:p})}):"",N&&(l.ZQ&&((0,d.mD)(59)||(0,d.mD)(19))||l.ig)?(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(k.Z,{rating:e.rating,network:e.network,ThemeID:59==o.widgetTheme?o.widgetTheme:null})}):"",l.ig&&s.hideContent||!l.ig&&!s.hideContent||1==e.type?(0,_.jsx)(g.default,{contentClass:"".concat(D," ").concat(P),item:e,content:R,font:s,ThemeRule:s,personalization:o,contentTitle:e.contentTitle}):"",l.ZQ&&S?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(x.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:p})}):""]}),s.socialAction?(0,_.jsx)(v.Z,{itemData:e,ThemeRule:s,ThemeID:o.widgetTheme,actionClass:"tb_nc_social_action__"}):""]})})})};var C=o(43411),T=o(43635);class I extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_nc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:o,wall:a,postSize:i,clickToShowPopUp:n,onClickToCTA:c,onClickPopUpSlider:r}=this.props,{loadData:d}=this.state;let h=0;return(0,_.jsx)(s(),{className:"tb_nc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_nc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:d?t&&t.length>0&&t.map(((t,s)=>{const d=e[t];return h=l.ZQ||l.Jx&&83==a.Personalization.widgetTheme?s%6===0?1:h+1:1,(0,_.jsx)(j,{ownerId:a.Wall.owner,itemData:d,itemIndex:s,adjustWidth:1==d.highlight?2*o:o,postSize:i,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:n,onClickToCTA:c,wall:a,counter:h,onClickPopUpSlider:r},s)})):null})}}const y=(0,C.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,T.B0)(e))})))(I)},50247:()=>{}}]);