(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2817,8342,9239,5790],{89239:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var s=o(47313),a=o(17739),i=o(98935),n=o(46417);class c extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var s=o(47313),a=o(46417);const i=t=>{let{username:e,network:o,authorClass:s,errorPic:i}=t;const n="#ffffff"==o.color?"#000":o.color;return(0,a.jsx)("img",{className:"".concat(s,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,s.memo)(i)},7138:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var s=o(47313),a=o(46417);class i extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:s,item:i}=this.props,n=!(!o||1!==o.status),c={color:n?o.color:t.color,backgroundColor:n?o.background:t.background};return(0,a.jsxs)("div",{className:e,style:c,onClick:e=>{e.stopPropagation(),s(i),window.open("".concat(n?o.url:t.url),"_blank")},children:[" ",n?o.text:t.text]})}}const n=i},64442:(t,e,o)=>{"use strict";o.d(e,{Z:()=>_});var s=o(47313),a=o(2406),i=o(20510),n=o.n(i),c=o(43635),r=o(35179),l=(o(98511),o(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(r.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(r.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:s,controls:a,autoPlay:i,handleVideoEnded:_,muted:h}=this.props,{paddingBottom:m,videoLoaded:p,isVisible:u}=this.state,b={paddingBottom:"".concat(m,"%")},g=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(g,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,c.ib)(t,e.id)},autoPlay:i,muted:h,volume:i?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig?u:i,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},25810:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var s=o(47313),a=o(35179),i=o(46417);const n=s.lazy((()=>o.e(5867).then(o.bind(o,95867))));class c extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:c,Personalization:r}=this.props,l=!!c&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var s=o(47313),a=o(16390),i=o(17739),n=(o(35179),o(25810),o(46417));const c=s.lazy((()=>Promise.all([o.e(622),o.e(584)]).then(o.bind(o,30584))));class r extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:o,font:r,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:m,textAlign:p,maxLines:u,isReadMore:b}=this.props,g={WebkitLineClamp:u,textAlign:o.textAlignment};p||o.textAlignment;let w=20==d.network.id?e:(0,i.Fx)(e);12==d.network.id&&(w=(0,a.ZP)(w));const x="".concat(o.lineTrim?" tb_content_line-".concat(o.lineTrim):""),f="".concat(t," ").concat(b?"":x," tb-cTBfont-").concat(o.font_varient);return(0,n.jsxs)("div",{className:f,ref:this.contentRef,style:g,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(c,{data:d,content:w,Personalization:l})]})]})}}},90905:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var s=o(47313),a=o(35179),i=o(46417);const n=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:n}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:s,style:{color:n},"tb-network":e.id,children:(0,i.jsx)("div",{})})},c=t=>{let{ThemeID:e}=t;const{className:o,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:o,style:{color:s},"tb-network":e})};class r extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>o?(0,i.jsx)(c,{ThemeID:o},s):(0,i.jsx)(n,{network:e},s))):null})}}},5744:(t,e,o)=>{"use strict";o.d(e,{Z:()=>c});var s=o(47313),a=o(43635),i=o(35179),n=o(46417);class c extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:s,ownerId:n}=this.props;e.stopPropagation(),i.ZQ||(0,a.S5)({type:2,action:2,wall:s,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:n}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},32675:(t,e,o)=>{"use strict";o.d(e,{Z:()=>l});var s=o(47313),a=(o(35179),o(17739)),i=o(46417);const n=(t,e,o)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,a.ok)(e)):o,c=(t,e,o)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,a.ok)(e)):o,r=t=>{let{arialbl:e,hrefClick:o,Icon:s,count:n}=t;return(0,i.jsx)("div",{className:"tb_social_action__list",children:(0,i.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(o,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,i.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),children:" "}),n>0?(0,i.jsx)("div",{className:"tb_social_action_counts__",children:(0,a.sy)(n)}):""]})})};class l extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:o,ThemeID:s}=this.props,l={color:3===s?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),m=![29,19].includes(d),p=t.network.name?t.network.name:"";return(0,i.jsx)(i.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,i.jsx)("div",{className:o,children:(0,i.jsxs)("div",{className:"tb_social_action__",children:[h?(0,i.jsx)(r,{arialbl:p,hrefClick:n(d,t.postId,t.link),Icon:_,iconColorStyle:l,count:t.like_count}):null,m?(0,i.jsx)(r,{arialbl:p,hrefClick:c(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,i.jsx)(r,{arialbl:p,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,a.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,i.jsx)(r,{arialbl:p,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},55790:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var s=o(47313),a=o(17739),i=o(46417);const n=t=>{const{postTime:e,timeClass:o}=t;return(0,i.jsx)("div",{className:o,children:(0,a.Sy)(e)})},c=(0,s.memo)(n)},16977:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>D});var s=o(47313),a=o(61395),i=o.n(a),n=o(89239),c=o(55790),r=o(25810),l=o(35179),d=o(17739),_=o(46417);const h=t=>{let{author:e,personalization:o,postTime:s,network:a,ThemeRule:i,itemData:h,mediaType:m}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",u=!(!o.postAuthor||e.isInstaUser),b=!(!o.postAuthor||!o.postTime||e.isInstaUser||""==p);return(0,_.jsxs)("div",{className:"tb_nc_author_wrapper",children:[(0,_.jsxs)("div",{className:"tb_nc_author ".concat(l.ZQ&&(0,d.mD)(19)&&m?"tb_nc_author_top":""),children:[u?(0,_.jsx)(n.default,{itemData:h,network:a,author:e,authorClass:"tb_nc_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_nc_author_info",children:[u?(0,_.jsx)("div",{className:"tb_nc_authorname",children:e.name}):"",(0,_.jsxs)("div",{className:"tb_nc_post_info",children:[u&&""!=p?(0,_.jsx)("div",{className:"tb_nc_username",children:p}):"",b?(0,_.jsx)("div",{className:"tb_nc_seprator",children:" "}):"",o.postTime?(0,_.jsx)(c.default,{postTime:s,timeClass:"tb_nc_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor}):""]})]})]}),l.ZQ&&(0,d.mD)(19)&&l.ZQ&&!m||(0,d.mD)(59)||(0,d.mD)(83)||(0,d.mD)(19)&&(l.ig||l.Jx)?(0,_.jsx)("div",{className:"tb_nc_social_",children:(0,_.jsx)(r.default,{networkClass:"tb_nc_social_ico",network:a,isDefault:1===i.iconType,ThemeRule:i})}):null]})};var m=o(81349),p=o(84261),u=o(64442);const b=t=>{let{itemData:e,wallID:o,ownerId:s,wall:a}=t;const i=!(!l.ZQ||3!==e.type&&5!==e.type||a.Personalization.mobilePopup||a.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==a.ThemeRule.autoPlay,c=l.ZQ||l.Jx?!!a.ThemeRule.aspectImageRatio&&a.ThemeRule.aspectImageRatio:(l.ig,!1),h=(e.hotspot,!!(l.ZQ&&(0,d.mD)(19)||!(0,d.mD)(59)&&!l.ig&&!l.Jx));return(0,_.jsxs)("div",{className:"tb_nc_media_wrap",children:[h?(0,_.jsx)("div",{className:"tb_nc_social_ tb_nc_social_top_",children:(0,_.jsx)(r.default,{networkClass:"tb_nc_social_ico",network:e.network,isDefault:1===a.ThemeRule.iconType,ThemeRule:a.ThemeRule})}):null,i?null:(0,_.jsx)(m.Z,{itemData:e,IconClass:h?"tb_nc_media_icon_te":"tb_nc_media_icon",show:!0,isCenter:l.ZQ}),n||i?(0,_.jsx)(u.Z,{VideoClass:"tb_nc_video",data:e,wallID:o,themeID:a.Personalization.widgetTheme,ownerId:s,size:c,isCover:!0,controls:!1,autoPlay:!1,muted:!0}):(0,_.jsx)(p.default,{ImageClass:"tb_nc_image",data:e,wallID:o,themeID:a.Personalization.widgetTheme,ownerId:s,size:c,ThemeRule:a.ThemeRule,hotspot:!0})]})};var g=o(62245),w=o(5744),x=o(7138),f=o(90905),v=o(32675);const k=l.ZQ?null:200,j=t=>{let{itemData:e,personalization:o,adjustWidth:a,ThemeRule:i,clickToShowPopUp:n,itemIndex:c,wallID:r,ownerId:m,onClickToCTA:p,wall:u,counter:j}=t;const C=(0,s.useRef)(null),T={width:"".concat(a,"%"),padding:o.padding/2},N=1!==e.type,D=e.rating>0,I=e.rating>0?"tb_nc_rating_content":"tb_nc_content",y=1===e.type&&o.textDecorate?"tb_nc_text_decoration tb_nc_text_post":"",P=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),R=o.trimcontent?(0,d.Sv)(e.content,k):e.content;(0,s.useEffect)((()=>{l.ig&&(0,d.YN)(C)}),[]);e.font;return(0,_.jsx)("div",{id:"tb-nc-post-".concat(e.id),className:"tb_nc_post_wrapper ".concat(l.ZQ&&(0,d.mD)(59)||l.Jx&&(0,d.mD)(83)?"tb_nc_post_gradient tb_nc_gradient-".concat(j):""),style:T,"tb-network":e.network.icon,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,ref:C,children:(0,_.jsx)("div",{className:"tb_nc_post_wrap_in",children:(0,_.jsxs)("div",{className:"tb_nc_post_in",onClick:n(c,e),children:[(0,_.jsxs)("div",{className:"tb_nc_post_media_wrapp",children:[e.share.status?(0,_.jsx)(w.Z,{share:e.share,shareClass:"tb_nc_share_container",item:e,wallID:r,ownerId:m}):"",N?(0,_.jsx)(b,{itemData:e,wallID:r,ownerId:m,wall:u},"img_".concat(e.id)):"",!D||l.ZQ||(0,d.mD)(59)||l.ig?"":(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(f.Z,{rating:e.rating,network:e.network,ThemeID:59==o.widgetTheme?o.widgetTheme:null})})]}),(0,_.jsxs)("div",{className:"tb_nc_contant_wrapper",children:[(0,_.jsx)(h,{mediaType:N,ownerId:m,itemData:e.id,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:o,ThemeRule:i}),l.ZQ?"":P?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(x.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:p})}):"",D&&(l.ZQ&&((0,d.mD)(59)||(0,d.mD)(19))||l.ig)?(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(f.Z,{rating:e.rating,network:e.network,ThemeID:59==o.widgetTheme?o.widgetTheme:null})}):"",l.ig&&i.hideContent||!l.ig&&!i.hideContent||1==e.type?(0,_.jsx)(g.default,{contentClass:"".concat(I," ").concat(y),item:e,content:R,font:i,ThemeRule:i,personalization:o,contentTitle:e.contentTitle}):"",l.ZQ&&P?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(x.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:p})}):""]}),i.socialAction?(0,_.jsx)(v.Z,{itemData:e,ThemeRule:i,ThemeID:o.widgetTheme,actionClass:"tb_nc_social_action__"}):""]})})})};var C=o(43411),T=o(43635);class N extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_nc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:o,wall:s,postSize:a,clickToShowPopUp:n,onClickToCTA:c}=this.props,{loadData:r}=this.state;let d=0;return(0,_.jsx)(i(),{className:"tb_nc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_nc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:r?t&&t.length>0&&t.map(((t,i)=>{const r=e[t];return d=l.ZQ||l.Jx&&83==s.Personalization.widgetTheme?i%6===0?1:d+1:1,(0,_.jsx)(j,{ownerId:s.Wall.owner,itemData:r,itemIndex:i,adjustWidth:1==r.highlight?2*o:o,postSize:a,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:n,onClickToCTA:c,wall:s,counter:d},i)})):null})}}const D=(0,C.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,T.B0)(e))})))(N)},50247:()=>{}}]);