"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5452,9239,5790],{29146:(t,e,o)=>{o.r(e),o.d(e,{default:()=>N});var a=o(47313),s=o(89239),i=o(55790),n=o(25810),r=o(46417);const c=t=>{let{author:e,personalization:o,postTime:a,network:c,ThemeRule:l,font:d}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",_=!(!o.postAuthor||e.isInstaUser),h=!(!o.postAuthor||!o.postTime||e.isInstaUser);return(0,r.jsxs)("div",{className:"tb_cp_author_wrapper",children:[(0,r.jsxs)("div",{className:"tb_cp_author",children:[_?(0,r.jsx)(s.default,{author:e,network:c,authorClass:"tb_cp_author_profile"}):"",(0,r.jsxs)("div",{className:"tb_cp_author_info",children:[_?(0,r.jsx)("div",{className:"tb_cp_authorname",children:e.name}):"",(0,r.jsxs)("div",{className:"tb_cp_post_info",children:[_?(0,r.jsx)("div",{className:"tb_cp_username",children:p}):"",h?(0,r.jsx)("div",{className:"tb_cp_seprator",children:" "}):"",o.postTime?(0,r.jsx)(i.default,{postTime:a,timeClass:"tb_cp_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor}):""]})]})]}),(0,r.jsx)("div",{className:"tb_cp_social_",children:(0,r.jsx)(n.default,{networkClass:"tb_cp_social_ico",network:c,ThemeRule:l,isDefault:1===l.iconType})})]})};var l=o(35179),d=o(81349),p=o(84261),_=o(64442);const h=t=>{let{itemData:e,wallID:o,ownerId:a,wall:s}=t;const i=!(!l.ZQ||3!==e.type&&5!==e.type||s.Personalization.mobilePopup||s.Personalization.postFeatured),n=(3===e.type||5===e.type)&&28!==e.network.id&&1==s.ThemeRule.autoPlay,c=l.ZQ||l.Jx?s.ThemeRule.aspectImageRatio?s.ThemeRule.aspectImageRatio:80:!l.ig&&100,h=!l.ig||!e.hotspot;return(0,r.jsxs)("div",{className:"tb_cp_media_wrap",children:[i?null:(0,r.jsx)(d.Z,{itemData:e,IconClass:"tb_cp_media_icon",show:h,isCenter:l.ZQ}),n||i?(0,r.jsx)(_.Z,{VideoClass:"tb_cp_video",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:c,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,r.jsx)(p.default,{ImageClass:"tb_cp_image",data:e,wallID:o,themeID:s.Personalization.widgetTheme,ownerId:a,size:c,ThemeRule:s.ThemeRule,hotspot:!0})]})};var m=o(17739),u=o(5744),b=o(7138),w=o(90905),g=o(32675);const k=t=>{let{itemData:e,personalization:o,adjustWidth:s,ThemeRule:i,clickToShowPopUp:n,itemIndex:d,wallID:p,ownerId:_,onClickToCTA:k,wall:v,onClickPopUpSlider:x}=t;const C=(0,a.useRef)(null),j={width:"".concat(s,"%"),padding:o.padding/2},f=1!==e.type,I=e.rating>0,N=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),T=!!(e.ugc_products&&e.ugc_products.length>0),D=!(!T||0!==e.hotspot),y=!(!e.hotspot||!T);return(0,a.useEffect)((()=>{l.ig&&(0,m.YN)(C)}),[]),(0,a.useEffect)((()=>{e.isPopUp&&x(d,e)}),[d,e.isPopUp,e]),(0,r.jsx)("div",{id:"tb-cp-post-".concat(e.id),className:"tb_cp_post_wrapper",style:j,"tb-network":e.network.id,"tb-product":D?1:y?2:0,ref:C,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,children:(0,r.jsxs)("div",{className:"tb_cp_post_in",onClick:n(d,e),children:[(0,r.jsxs)("div",{className:"tb_cp_post_media_wrapper",children:[e.share.status?(0,r.jsx)(u.Z,{share:e.share,shareClass:"tb_cp_share_container",item:e,wallID:p,ownerId:_}):"",f?(0,r.jsx)(h,{itemData:e,wallID:p,ownerId:_,ThemeID:o.widgetTheme,wall:v},"img".concat(d,"_").concat(e.id)):"",l.ZQ&&I?(0,r.jsxs)("div",{className:"tb_cp_rating__",children:[(0,r.jsx)(w.Z,{rating:e.rating,network:e.network})," "]}):"",N?(0,r.jsxs)("div",{className:"tb_cp_post_cta",children:[(0,r.jsx)(b.Z,{ctaClass:"tb_cp_post_cta_btn",cta:e.cta,item:e,onClickToCTA:k})," "]}):""]}),(0,r.jsx)("div",{className:"tb_cp_contant_wrapper",children:(0,r.jsx)(c,{ownerId:_,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:o,ThemeRule:i})}),i.socialAction?(0,r.jsx)(g.Z,{itemData:e,ThemeRule:i,ThemeID:o.widgetTheme,actionClass:"tb_cp_social_action__ ".concat(l.ZQ?"tb_cp_social_action_bg":"","}")}):""]})})};var v=o(43411),x=o(61395),C=o.n(x),j=o(43635);const f=t=>{let{loadData:e,postData:o,completeDataObject:a,BrandingPosition:s,clickToShowPopUp:i,wall:n,adjustWidth:c,onClickToCTA:l,onClickPopUpSlider:d}=t;return e?o&&o.length>0&&o.map(((t,e)=>{const o=a[t];return parseInt(s),(0,r.jsx)(k,{ownerId:n.Wall.owner,itemData:o,itemIndex:e,adjustWidth:1==o.highlight?2*c:c,personalization:n.Personalization,ThemeRule:n.ThemeRule,wallID:n.Wall.id,clickToShowPopUp:i,onClickToCTA:l,wall:n,onClickPopUpSlider:d},"Classic_Card_".concat(e,"_").concat(t.id))})):null};class I extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1}}componentDidMount(){const{postData:t}=this.props;this.setState({postData:t,loadData:1})}render(){const{postData:t,completeDataObject:e,adjustWidth:o,wall:a,clickToShowPopUp:s,onClickToCTA:i,onClickPopUpSlider:n}=this.props,{loadData:c}=this.state;return l.ig?(0,r.jsx)(C(),{className:"tb_cp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cp_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(0,r.jsx)(f,{loadData:c,wall:a,clickToShowPopUp:s,postData:t,completeDataObject:e,BrandingPosition:4,adjustWidth:o,onClickToCTA:i,onClickPopUpSlider:n})}):(0,r.jsx)("div",{className:"tb_cp_post_container",children:(0,r.jsx)(f,{loadData:c,wall:a,clickToShowPopUp:s,postData:t,completeDataObject:e,BrandingPosition:4,adjustWidth:o,onClickToCTA:i,onClickPopUpSlider:n})})}}const N=(0,v.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,j.B0)(e))})))(I)},89239:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var a=o(47313),s=o(17739),i=o(98935),n=o(46417);class r extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,s.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,o)=>{o.d(e,{Z:()=>n});var a=o(47313),s=o(46417);const i=t=>{let{username:e,network:o,authorClass:a,errorPic:i}=t;const n="#ffffff"==o.color?"#000":o.color;return(0,s.jsx)("img",{className:"".concat(a,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,a.memo)(i)},7138:(t,e,o)=>{o.d(e,{Z:()=>n});var a=o(47313),s=o(46417);class i extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:a,item:i}=this.props,n=!(!o||1!==o.status),r={color:n?o.color:t.color,backgroundColor:n?o.background:t.background};return(0,s.jsxs)("div",{className:e,style:r,onClick:e=>{e.stopPropagation(),a(i),window.open("".concat(n?o.url:t.url),"_blank")},children:[" ",n?o.text:t.text]})}}const n=i},64442:(t,e,o)=>{o.d(e,{Z:()=>p});var a=o(47313),s=o(2406),i=o(20510),n=o.n(i),r=o(43635),c=o(35179),l=(o(98511),o(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,s.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(c.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:a,controls:s,autoPlay:i,handleVideoEnded:p,muted:_}=this.props,{paddingBottom:h,videoLoaded:m,isVisible:u}=this.state,b={paddingBottom:"".concat(h,"%")},w=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:i,muted:_,volume:i?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?u:i,height:"100%",width:"100%",controls:s||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:p||null})})}}},25810:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var a=o(47313),s=o(35179),i=o(46417);const n=a.lazy((()=>o.e(5867).then(o.bind(o,95867))));class r extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=s.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:t,networkClass:e})]})}}},90905:(t,e,o)=>{o.d(e,{Z:()=>c});var a=o(47313),s=o(35179),i=o(46417);const n=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:n}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:n},"tb-network":e.id,children:(0,i.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:o,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:o,style:{color:a},"tb-network":e})};class c extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>o?(0,i.jsx)(r,{ThemeID:o},a):(0,i.jsx)(n,{network:e},a))):null})}}},5744:(t,e,o)=>{o.d(e,{Z:()=>r});var a=o(47313),s=o(43635),i=o(35179),n=o(46417);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:a,ownerId:n}=this.props;e.stopPropagation(),i.ZQ||(0,s.S5)({type:2,action:2,wall:a,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:n}),(0,s.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},32675:(t,e,o)=>{o.d(e,{Z:()=>l});var a=o(47313),s=(o(35179),o(17739)),i=o(46417);const n=(t,e,o)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,s.ok)(e)):o,r=(t,e,o)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,s.ok)(e)):o,c=t=>{let{arialbl:e,hrefClick:o,Icon:a,count:n}=t;return(0,i.jsx)("div",{className:"tb_social_action__list",children:(0,i.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(o,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,i.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(a),children:" "}),n>0?(0,i.jsx)("div",{className:"tb_social_action_counts__",children:(0,s.sy)(n)}):""]})})};class l extends a.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:o,ThemeID:a}=this.props,l={color:3===a?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,p=3===d||10===d||7===d?"like":"heart",_=!![1,2,3,7,8,9,10,18].includes(d),h=![29,19].includes(d),m=t.network.name?t.network.name:"";return(0,i.jsx)(i.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,i.jsx)("div",{className:o,children:(0,i.jsxs)("div",{className:"tb_social_action__",children:[_?(0,i.jsx)(c,{arialbl:m,hrefClick:n(d,t.postId,t.link),Icon:p,iconColorStyle:l,count:t.like_count}):null,h?(0,i.jsx)(c,{arialbl:m,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,i.jsx)(c,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,s.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,i.jsx)(c,{arialbl:m,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},55790:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});var a=o(47313),s=o(17739),i=o(46417);const n=t=>{const{postTime:e,timeClass:o}=t;return(0,i.jsx)("div",{className:o,children:(0,s.Sy)(e)})},r=(0,a.memo)(n)}}]);