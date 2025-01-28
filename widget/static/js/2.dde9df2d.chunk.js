"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2,6723,8167],{57492:(t,e,o)=>{o.r(e),o.d(e,{default:()=>N});var a=o(9950),i=o(78167),s=o(6723),n=o(44463),r=o(44414);const c=t=>{let{author:e,personalization:o,postTime:a,network:c,ThemeRule:l,font:d}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",_=!(!o.postAuthor||e.isInstaUser),h=!(!o.postAuthor||!o.postTime||e.isInstaUser);return(0,r.jsxs)("div",{className:"tb_cp_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,r.jsxs)("div",{className:"tb_cp_author",children:[_?(0,r.jsx)(i.default,{author:e,network:c,authorClass:"tb_cp_author_profile"}):"",(0,r.jsxs)("div",{className:"tb_cp_author_info",children:[_?(0,r.jsx)("div",{className:"tb_cp_authorname",children:e.name}):"",(0,r.jsxs)("div",{className:"tb_cp_post_info",children:[_?(0,r.jsx)("div",{className:"tb_cp_username",children:p}):"",h?(0,r.jsx)("div",{className:"tb_cp_seprator",children:" "}):"",o.postTime?(0,r.jsx)(s.default,{postTime:a,timeClass:"tb_cp_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor}):""]})]})]}),(0,r.jsx)("div",{className:"tb_cp_social_",children:(0,r.jsx)(n.default,{networkClass:"tb_cp_social_ico",network:c,ThemeRule:l,isDefault:1===l.iconType})})]})};var l=o(66345),d=o(15537),p=o(78262),_=o(3720);const h=t=>{let{itemData:e,wallID:o,ownerId:a,wall:i}=t;const s=!(!l.uS||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay,c=l.uS||l.MH?i.ThemeRule.aspectImageRatio?i.ThemeRule.aspectImageRatio:80:!l.HY&&100,h=!l.HY||!e.hotspot;return(0,r.jsxs)("div",{className:"tb_cp_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[s?null:(0,r.jsx)(d.A,{itemData:e,IconClass:"tb_cp_media_icon",show:h,isCenter:l.uS}),n||s?(0,r.jsx)(_.A,{VideoClass:"tb_cp_video",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:a,size:c,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,r.jsx)(p.default,{ImageClass:"tb_cp_image",data:e,wallID:o,themeID:i.Personalization.widgetTheme,ownerId:a,size:c,ThemeRule:i.ThemeRule,hotspot:!0})]})};var u=o(52867),m=o(173),b=o(60531),w=o(49395),g=o(46803);const k=t=>{let{itemData:e,personalization:o,adjustWidth:i,ThemeRule:s,clickToShowPopUp:n,itemIndex:d,wallID:p,ownerId:_,onClickToCTA:k,wall:v,onClickPopUpSlider:x}=t;const C=(0,a.useRef)(null),f={width:"".concat(i,"%"),padding:o.padding/2},j=1!==e.type,I=e.rating>0,N=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),T=!!(e.ugc_products&&e.ugc_products.length>0),D=!(!T||0!==e.hotspot),S=!(!e.hotspot||!T);return(0,a.useEffect)((()=>{l.HY&&(0,u._7)(C)}),[]),(0,a.useEffect)((()=>{e.isPopUp&&x(d,e)}),[d,e.isPopUp,e]),(0,r.jsx)("div",{id:"tb-cp-post-".concat(e.id),className:"tb_cp_post_wrapper",style:f,"tb-network":e.network.id,"tb-product":D?1:S?2:0,ref:C,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,tabIndex:"0","area-label":e.content,role:"article",children:(0,r.jsxs)("div",{className:"tb_cp_post_in",onClick:n(d,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,r.jsxs)("div",{className:"tb_cp_post_media_wrapper",children:[e.share.status?(0,r.jsx)(m.A,{share:e.share,shareClass:"tb_cp_share_container",item:e,wallID:p,ownerId:_}):"",j?(0,r.jsx)(h,{itemData:e,wallID:p,ownerId:_,ThemeID:o.widgetTheme,wall:v},"img".concat(d,"_").concat(e.id)):"",l.uS&&I?(0,r.jsxs)("div",{className:"tb_cp_rating__",children:[(0,r.jsx)(w.A,{rating:e.rating,network:e.network})," "]}):"",N?(0,r.jsxs)("div",{className:"tb_cp_post_cta",children:[(0,r.jsx)(b.A,{ctaClass:"tb_cp_post_cta_btn",cta:e.cta,item:e,onClickToCTA:k})," "]}):""]}),(0,r.jsx)("div",{className:"tb_cp_contant_wrapper",children:(0,r.jsx)(c,{ownerId:_,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:o,ThemeRule:s})}),s.socialAction?(0,r.jsx)(g.A,{itemData:e,ThemeRule:s,ThemeID:o.widgetTheme,actionClass:"tb_cp_social_action__ ".concat(l.uS?"tb_cp_social_action_bg":"","}")}):""]})})};var v=o(73878),x=o(74378),C=o.n(x),f=o(14478);const j=t=>{let{loadData:e,postData:o,completeDataObject:a,BrandingPosition:i,clickToShowPopUp:s,wall:n,adjustWidth:c,onClickToCTA:l,onClickPopUpSlider:d}=t;return e?o&&o.length>0&&o.map(((t,e)=>{const o=a[t];return parseInt(i),(0,r.jsx)(k,{ownerId:n.Wall.owner,itemData:o,itemIndex:e,adjustWidth:1==o.highlight?2*c:c,personalization:n.Personalization,ThemeRule:n.ThemeRule,wallID:n.Wall.id,clickToShowPopUp:s,onClickToCTA:l,wall:n,onClickPopUpSlider:d},"Classic_Card_".concat(e,"_").concat(t.id))})):null};class I extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1}}componentDidMount(){const{postData:t}=this.props;this.setState({postData:t,loadData:1})}render(){const{postData:t,completeDataObject:e,adjustWidth:o,wall:a,clickToShowPopUp:i,onClickToCTA:s,onClickPopUpSlider:n}=this.props,{loadData:c}=this.state;return l.HY?(0,r.jsx)(C(),{className:"tb_cp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cp_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(0,r.jsx)(j,{loadData:c,wall:a,clickToShowPopUp:i,postData:t,completeDataObject:e,BrandingPosition:4,adjustWidth:o,onClickToCTA:s,onClickPopUpSlider:n})}):(0,r.jsx)("div",{className:"tb_cp_post_container",children:(0,r.jsx)(j,{loadData:c,wall:a,clickToShowPopUp:i,postData:t,completeDataObject:e,BrandingPosition:4,adjustWidth:o,onClickToCTA:s,onClickPopUpSlider:n})})}}const N=(0,v.Ng)((t=>({})),(t=>({managePostHeight:e=>t((0,f.V3)(e))})))(I)},78167:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});var a=o(9950),i=(o(52867),o(93662)),s=o(44414);class n extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o,size:a}=this.props;return(0,s.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,s.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:a||44,height:a||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,s.jsx)(i.A,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,o)=>{o.d(e,{A:()=>n});var a=o(9950),i=o(44414);const s=t=>{let{username:e,network:o,authorClass:a,errorPic:s}=t;const n="#ffffff"==o.color?"#000":o.color;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:s||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45,"aria-label":"author image"})},n=(0,a.memo)(s)},60531:(t,e,o)=>{o.d(e,{A:()=>n});var a=o(9950),i=o(44414);class s extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:a,item:s}=this.props,n=!(!o||1!==o.status),r={color:n?o.color:t.color,backgroundColor:n?o.background:t.background};return(0,i.jsxs)("div",{className:e,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),a(s),window.open("".concat(n?o.url:t.url),"_blank")},children:[" ",n?o.text:t.text]})}}const n=s},3720:(t,e,o)=>{o.d(e,{A:()=>p});var a=o(9950),i=o(98776),s=o(38092),n=o.n(s),r=o(14478),c=o(66345),l=(o(45565),o(44414));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,i.pG)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{const{videoLoaded:e}=this.state;e!=t&&this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:a,controls:i,autoPlay:s,handleVideoEnded:p,muted:_}=this.props,{paddingBottom:h,videoLoaded:u,isVisible:m}=this.state,b={paddingBottom:"".concat(h,"%")},w=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.zi)(t,e.id)},autoPlay:s,muted:_,volume:s?1:0,playsinline:!0,onReady:t=>{c.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.HY?m:s,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:p||null})})}}},44463:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var a=o(9950),i=o(66345),s=o(44414);const n=a.lazy((()=>o.e(620).then(o.bind(o,20620))));class r extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.uS&&36==t.id?"tagembed":t.icon;return l?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,s.jsx)("div",{})}):(0,s.jsxs)(a.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(n,{network:t,networkClass:e})]})}}},49395:(t,e,o)=>{o.d(e,{A:()=>c});var a=o(9950),i=o(66345),s=o(44414);const n=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.uS?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.uS?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:n}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:a,style:{color:n},"tb-network":e.id,children:(0,s.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:o,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,s.jsx)("div",{className:o,style:{color:a},"tb-network":e})};class c extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>o?(0,s.jsx)(r,{ThemeID:o},a):(0,s.jsx)(n,{network:e},a))):null})}}},173:(t,e,o)=>{o.d(e,{A:()=>r});var a=o(9950),i=o(14478),s=o(66345),n=o(44414);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:a,ownerId:n}=this.props;e.stopPropagation(),s.uS||(0,i.hq)({type:2,action:2,wall:a,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:n}),(0,i.nF)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(s.uS?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},46803:(t,e,o)=>{o.d(e,{A:()=>l});var a=o(9950),i=(o(66345),o(52867)),s=o(44414);const n=(t,e,o)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,i.Ph)(e)):o,r=(t,e,o)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,i.Ph)(e)):o,c=t=>{let{arialbl:e,hrefClick:o,Icon:a,count:n,itemId:r=0}=t;return(0,s.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,s.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(o,"_blank")},className:"tb_social_action__ico_wrap tb_social_action__ico_wrap_".concat(r),"aria-label":"".concat(e," post,").concat("eye"==a?"view":"heart-outline"==a?"like":"comment"==a?"comment":""," count ").concat((0,i.sl)(n)),role:"button",tabIndex:"0",children:[(0,s.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(a),children:" "}),n>0?(0,s.jsx)("div",{className:"tb_social_action_counts__",children:(0,i.sl)(n)}):""]})})};class l extends a.PureComponent{componentDidMount(){try{var t;const{itemData:e}=this.props,o=".tb_social_action__ico_wrap_".concat(null===e||void 0===e?void 0:e.id);null===(t=document.querySelector(o))||void 0===t||t.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(e){console.log(e)}}render(){const{itemData:t,ThemeRule:e,actionClass:o,ThemeID:a}=this.props,l={color:3===a?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,p=3===d||10===d||7===d?"like":"heart-outline",_=!![1,2,3,7,8,9,10,18].includes(d),h=![29,19].includes(d),u=t.network.name?t.network.name:"";return(0,s.jsx)(s.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,s.jsx)("div",{className:o,children:(0,s.jsxs)("div",{className:"tb_social_action__",role:"list",children:[_?(0,s.jsx)(c,{itemId:t.id,arialbl:u,hrefClick:n(d,t.postId,t.link),Icon:p,iconColorStyle:l,count:t.like_count}):null,h?(0,s.jsx)(c,{itemId:t.id,arialbl:u,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,s.jsx)(c,{itemId:t.id,arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,i.Ph)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,s.jsx)(c,{arialbl:u,itemId:t.id,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},6723:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var a=o(9950),i=o(52867),s=o(44414);const n=t=>{const{postTime:e,timeClass:o}=t;return(0,s.jsx)("div",{className:o,role:"status","aria-label":"post timestamp ".concat((0,i.fF)(e)),children:(0,i.fF)(e)})},r=(0,a.memo)(n)}}]);