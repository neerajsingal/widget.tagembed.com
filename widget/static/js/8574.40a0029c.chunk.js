(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8574,7033,7234,7668,757],{97234:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var o=a(72791),s=a(2703),i=a(14496),n=a(80184);class r extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,n.jsx)("div",{className:e,style:{overflow:4==a.id?"visible":""},children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,s.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color})},Math.random())}}},14496:(t,e,a)=>{"use strict";a.d(e,{Z:()=>s});a(72791);var o=a(80184);const s=t=>{let{username:e,network:a,authorClass:s}=t;return(0,o.jsx)("img",{className:"".concat(s,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":a.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var o=a(72791),s=a(80184);class i extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:o,item:i}=this.props,n=!(!a||1!==a.status),r={color:n?a.color:t.color,backgroundColor:n?a.background:t.background};return(0,s.jsxs)("div",{className:e,style:r,onClick:e=>{e.stopPropagation(),o(i),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=i},40115:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var o=a(72791),s=a(11225),i=a(80413),n=a(2703),r=a(70188),l=a(80184);class c extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:a,themeID:o,ownerId:i}=this.props,{imgUrl:c,paddingBottom:d}=this.state,_={paddingBottom:"".concat(d,"%")};return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:_,children:(0,l.jsx)("img",{className:t,role:"img",src:c,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,s.ht)(t)},alt:(0,n.P)(c)})})}}},98270:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var o=a(72791),s=a(80413),i=a(96710),n=a.n(i),r=a(80184);const l=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class c extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,s.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:a,isCover:o,controls:s,autoPlay:i,handleVideoEnded:c,muted:d}=this.props,{paddingBottom:_,videoLoaded:h}=this.state,u={paddingBottom:"".concat(_,"%")};return(0,r.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:u,children:(0,r.jsx)(n(),{className:t,url:l(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.networkId,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!i,onError:t=>{this.setVideoLoaded(!1)},autoPlay:i,muted:d,volume:i?1:0,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:i,height:"100%",width:"100%",controls:s,style:{backgroundImage:h?"":"url(".concat(e.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:c||null})})}}},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var o=a(72791),s=a(46535),i=a(2703),n=a(80184);const r=o.lazy((()=>a.e(1088).then(a.bind(a,41088))));class l extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:l}=this.props,c=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),d=s.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:s.ZQ&&!(0,i.mD)(59)?a.iconColor:null},children:(0,n.jsx)("div",{})}):(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{network:t,networkClass:e})]})}}},23450:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var o=a(72791),s=a(34867),i=a(2703),n=a(46535),r=a(80184);const l=o.lazy((()=>Promise.all([a.e(6332),a.e(6476)]).then(a.bind(a,46476))));class c extends o.PureComponent{constructor(t){super(t),this.state={expanded:!1},this.toggleExpanded=this.toggleExpanded.bind(this)}toggleExpanded(){this.setState({expanded:!this.state.expanded})}render(){const{contentClass:t,content:e,ThemeRule:a,font:c,personalization:d,item:_,contentTitle:h,readMore:u,maxLength:m,textAlign:p}=this.props,{expanded:b}=this.state,g={fontFamily:a.css_font,fontSize:c.fontSize,color:n.ZQ&&!(0,i.mD)(59)?c.fontColor:null,textAlign:p||a.textAlignment};let w=20==_.network.id?e:(0,i.Fx)(e);12==_.network.id&&(w=(0,s.ZP)(w));const x=u?b?w:w.slice(0,m):w;return(0,r.jsxs)("div",{className:"".concat(t," ").concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""," tb-cTBfont-").concat(a.font_varient),style:g,children:[h?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(h)}):null,(0,r.jsxs)(o.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(l,{data:_,content:x,Personalization:d})]}),u&&w.length>m&&(0,r.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:b?"...Read Less...":"...Read More..."})]})}}},19036:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var o=a(72791),s=a(46535),i=a(80184);const n=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:n}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:o,style:{color:n},"tb-network":e.id,children:(0,i.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:a,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:o},"tb-network":e})};class l extends o.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>a?(0,i.jsx)(r,{ThemeID:a},o):(0,i.jsx)(n,{network:e},o))):null})}}},20169:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var o=a(72791),s=a(11225),i=a(46535),n=a(80184);class r extends o.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:o,ownerId:n}=this.props;e.stopPropagation(),i.ZQ||(0,s.S5)({type:2,action:2,wall:o,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:n}),(0,s.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},31152:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var o=a(72791),s=(a(46535),a(2703)),i=a(80184);const n=(t,e,a)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,s.ok)(e)):a,r=(t,e,a)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,s.ok)(e)):a,l=t=>{let{arialbl:e,hrefClick:a,Icon:o,iconColorStyle:s,count:n}=t;return(0,i.jsx)("div",{className:"tb_social_action__list",children:(0,i.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(a,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,i.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(o),style:s,children:" "}),n>0?(0,i.jsx)("div",{className:"tb_social_action_counts__",style:s,children:n}):""]})})};class c extends o.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:a,ThemeID:o}=this.props,c={color:3===o?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),u=![29,19].includes(d),m=t.network.name?t.network.name:"";return(0,i.jsx)(i.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,i.jsx)("div",{className:a,children:(0,i.jsxs)("div",{className:"tb_social_action__",children:[h?(0,i.jsx)(l,{arialbl:m,hrefClick:n(d,t.postId,t.link),Icon:_,iconColorStyle:c,count:t.like_count}):null,u?(0,i.jsx)(l,{arialbl:m,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===d?(0,i.jsx)(l,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,s.ok)(t.postId)),Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,i.jsx)(l,{arialbl:m,hrefClick:t.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},27668:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var o=a(72791),s=a(2703),i=a(80184);const n=t=>{const{postTime:e,timeClass:a,authorColor:n,authorNameStyle:r}=t,l=(0,o.useMemo)((()=>(0,s.Sy)(e)),[]),c={color:n,...r};return(0,i.jsx)("div",{className:a,style:c,children:l})},r=(0,o.memo)(n)},28776:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>S});var o=a(72791),s=a(60173),i=a(77581),n=a(48282),r=a(27668),l=a(70757),c=a(19036),d=a(97234),_=a(46535),h=a(80184);const u=t=>{let{author:e,personalization:a,postTime:s,network:i,ThemeRule:n,font:u,rating:m,ownerId:p,instaHash:b}=t;const g=e.username&&e.username.length>0?"@".concat(e.username):"",w={color:n.authorColor,fontFamily:n.css_font},x={backgroundColor:n.authorColor},v=!(!a.postAuthor||e.isInstaUser),f=!(!a.postAuthor||!a.postTime||e.isInstaUser),j=null!==i.id&&""!==i.id;return(0,h.jsxs)("div",{className:"tb_hc_author_wrapper",children:[v?(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(d.default,{network:i,author:e,authorClass:"tb_hc_author_profile"})}):"",(0,h.jsxs)("div",{className:"tb_hc_author_info",children:[v&&_.ZQ?(0,h.jsx)("div",{className:"tb_hc_authorname tb-cTBfont-".concat(n.font_varient),style:w,children:e.name}):"",(0,h.jsxs)("div",{className:"tb_hc_post_info",children:[v?(0,h.jsx)("div",{className:"tb_hc_username",style:w,children:g}):"",f?(0,h.jsx)("div",{className:"tb_hc_seprator",style:x,children:" "}):"",a.postTime?(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(r.default,{postTime:s,timeClass:"tb_hc_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor,authorNameStyle:w})}):""]})]}),29===i.id&&m>0?(0,h.jsxs)("div",{className:"tb_hc_onsite_rating__",children:[(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(c.Z,{rating:m,network:i})})," "]}):null,j?(0,h.jsx)("div",{className:"tb_hc_social_",children:(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(l.default,{networkClass:"tb_hc_social_ico",network:i,isDefault:1===n.iconType,ThemeRule:n})})}):null]})};var m=a(98270),p=a(40115);const b=t=>{let{itemData:e,wallID:a,ownerId:o,wall:s,isCover:i,ThemeRule:n}=t;const r=3===e.type||5===e.type,l=7===e.network.id,c=!!(e.imageList&&e.imageList.length>0),d=c&&r?"tb_hc_multi_images_ico_bottom":"tb_hc_multi_images_ico",u=1===e.isAudio,b=(3===e.type||5===e.type)&&28!==e.network.id&&1==s.ThemeRule.autoPlay,g=_.ZQ&&n.aspectImageRatio?n.aspectImageRatio:100;return(0,h.jsxs)("div",{className:"tb_hc_media_wrap",children:[c?(0,h.jsx)("div",{className:"".concat(d," tb__icon tb-multiple"),children:" "}):null,r&&!b?l?(0,h.jsxs)("div",{className:"tb_hc_youtube_ico tb__icon tb-youtube-default",children:[(0,h.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,h.jsx)("div",{})}),(0,h.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,h.jsx)("div",{})})]}):u?(0,h.jsx)("div",{className:"tb_hc_audio_ico tb__icon tb-audio",children:(0,h.jsx)("div",{})}):(0,h.jsx)("div",{className:"tb_hc_video_ico tb__icon ".concat(_.ZQ?"tb-play":"tb-video"),children:(0,h.jsx)("div",{})}):"",b?(0,h.jsx)(m.Z,{VideoClass:"tb_hc_video",data:e,wallID:a,themeID:s.Personalization.widgetTheme,wall:s,size:g,isCover:i,muted:!0}):(0,h.jsx)(p.Z,{ImageClass:"tb_hc_image",data:e,wallID:a,themeID:s.Personalization.widgetTheme,ownerId:o,size:g})]})};var g=a(23450),w=a(20169),x=a(16243),v=a(31152),f=a(2703);const j=_.ZQ?null:140;class k extends o.PureComponent{constructor(t){super(t),this.postTrack=o.createRef()}componentDidMount(){_.nX&&(0,f.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,ThemeRule:a,clickToShowPopUp:o,itemIndex:s,wallID:i,ownerId:n,onClickToCTA:r,wall:l}=this.props,d=2===t.type||3===t.type||4===t.type||5===t.type,m=!!(t.rating&&t.rating>0&&29!==t.network.id),p={backgroundColor:a.cardColor,borderRadius:_.ZQ?a.radius:""},k=t.rating>0?"tb_hc_rating_content":"tb_hc_content",y=1===t.type?"tb_hc_text_post":"",C=1===t.type&&e.textDecorate?"tb_hc_text_decoration":"",N=!!t.cta.status,I=e.trimcontent?(0,f.Sv)(t.content,j):t.content;return(0,h.jsx)("div",{"item-id":t.id,id:"tb-hc-post-".concat(t.id),className:"tb_hc_post_wrapper",ref:this.postTrack,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,style:{padding:e.padding/2},children:(0,h.jsxs)("div",{className:"tb_hc_post_in",style:p,onClick:o(s,t),children:[d?(0,h.jsxs)("div",{className:"tb_hc_post_media_wrapp",children:[t.share.status?(0,h.jsx)(w.Z,{share:t.share,shareClass:"tb_hc_share_container",item:t,wallID:i,ownerId:n}):"",(0,h.jsx)(b,{itemData:t,wallID:i,wall:l,ownerId:n,size:!!e.trimcontent&&100,isCover:!!e.trimcontent,ThemeRule:a})]}):null,m?(0,h.jsx)("div",{className:"tb_hc_rating__",children:(0,h.jsx)(c.Z,{rating:t.rating,network:t.network})}):null,(0,h.jsxs)("div",{className:"tb_hc_contant_wrapper ".concat(y),children:[(0,h.jsx)(u,{ownerId:n,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:e,ThemeRule:a,rating:t.rating,instaHash:t.instaHash}),N?(0,h.jsxs)("div",{className:"tb_hc_post_cta",onClick:t=>{t.stopPropagation()},children:[(0,h.jsx)(x.Z,{ctaClass:"tb_hc_post_cta_btn",cta:e.cta,postCta:t.cta,item:t,onClickToCTA:r})," "]}):"",a.hideContent&&1!=t.type?null:(0,h.jsx)("div",{className:"tb_hc_content_wrapper__",children:(0,h.jsx)(g.default,{contentClass:"".concat(k," ").concat(C),item:t,content:I,font:a,ThemeRule:a,personalization:e,contentTitle:t.contentTitle},t.id)})]}),a.socialAction?(0,h.jsx)(v.Z,{itemData:t,ThemeRule:a,ThemeID:e.widgetTheme,actionClass:"tb_hc_social_action__ ".concat(_.ZQ?"tb_hc_social_action_bg":"")}):null]})})}}var y=a(11225);const C=t=>{let{author:e,personalization:a,postTime:s,network:i,ThemeRule:n,font:l,rating:c,ownerId:u,instaHash:m}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",b={color:n.authorColor,fontFamily:n.css_font},g={backgroundColor:n.authorColor},w=!(!a.postAuthor||e.isInstaUser),x=!(!a.postAuthor||!a.postTime||e.isInstaUser);null!==i.id&&i.id;return(0,h.jsxs)("div",{className:"tb_hc_author_wrapper tb_hc_author_wrapper_center",children:[w?(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(d.default,{network:i,author:e,authorClass:"tb_hc_author_profile"})}):"",(0,h.jsxs)("div",{className:"tb_hc_author_info",children:[w&&_.ZQ?(0,h.jsx)("div",{className:"tb_hc_authorname tb-cTBfont-".concat(n.font_varient),style:b,children:e.name}):"",(0,h.jsxs)("div",{className:"tb_hc_post_info",children:[w?(0,h.jsx)("div",{className:"tb_hc_username",style:b,children:p}):"",x?(0,h.jsx)("div",{className:"tb_hc_seprator",style:g,children:" "}):"",a.postTime?(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(r.default,{postTime:s,timeClass:"tb_hc_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor,authorNameStyle:b})}):""]})]})]})},N=_.ZQ?null:140;class I extends o.PureComponent{constructor(t){super(t),this.postTrack=o.createRef()}componentDidMount(){_.nX&&(0,f.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,ThemeRule:a,clickToShowPopUp:s,itemIndex:i,ownerId:n,onClickToCTA:r,wallID:d}=this.props,u=!!(t.rating&&t.rating>0),m={backgroundColor:a.cardColor,borderRadius:_.ZQ?a.radius:""},p=t.rating>0?"tb_hc_rating_content":"tb_hc_content",b=1===t.type?"tb_hc_text_post":"",j=1===t.type&&e.textDecorate?"tb_hc_text_decoration":"",k=!!t.cta.status,y=e.trimcontent?(0,f.Sv)(t.content,N):t.content,I=null!==t.network.id&&""!==t.network.id;return(0,h.jsx)("div",{"item-id":t.id,id:"tb-hc-post-".concat(t.id),className:"tb_hc_post_wrapper",ref:this.postTrack,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,style:{padding:e.padding/2},children:(0,h.jsxs)("div",{className:"tb_hc_post_in",style:m,onClick:s(i,t),children:[t.share.status?(0,h.jsx)(w.Z,{share:t.share,shareClass:"tb_hc_share_container",item:t,wallID:d,ownerId:n}):null,(0,h.jsxs)("div",{className:"tb_hc_contant_wrapper ".concat(b),children:[I?(0,h.jsx)("div",{className:"tb_hc_social_ ".concat(_.ZQ?"tb_hc_social_review_":""),children:(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(l.default,{networkClass:"tb_hc_social_ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a})})}):null,u?(0,h.jsx)("div",{className:"tb_hc_rating__",children:(0,h.jsx)(c.Z,{rating:t.rating,network:t.network})}):null,a.hideContent&&1!=t.type?null:(0,h.jsx)("div",{className:"tb_hc_content_wrapper__ ".concat((0,f.mD)(47)?"tb_hc_content_review__":""),children:(0,h.jsx)(g.default,{contentClass:"".concat(p," ").concat(j),item:t,content:y,font:a,ThemeRule:a,personalization:e,contentTitle:t.contentTitle},t.id)}),(0,h.jsx)(C,{ownerId:n,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:e,ThemeRule:a,rating:t.rating,instaHash:t.instaHash}),k?(0,h.jsx)("div",{className:"tb_hc_post_cta",onClick:t=>{t.stopPropagation()},children:(0,h.jsx)(x.Z,{ctaClass:"tb_hc_post_cta_btn",cta:e.cta,postCta:t.cta,item:t,onClickToCTA:r})}):""]}),a.socialAction?(0,h.jsx)(v.Z,{itemData:t,ThemeRule:a,ThemeID:e.widgetTheme,actionClass:"tb_hc_social_action__ ".concat(_.ZQ?"tb_hc_social_action_bg":"")}):null]})})}}a(59169);class T extends o.Component{constructor(t){super(t),this.state={windowWidth:document.getElementById(f.u$)&&document.getElementById(f.u$).clientWidth?document.getElementById(f.u$).clientWidth:window.innerWidth},this.onScreenLoad=()=>{const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:document.getElementById(f.u$)&&document.getElementById(f.u$).clientWidth?document.getElementById(f.u$).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:t,wall:e,preRender:a,hasMoreData:o}=this.props;o&&(0,y.Sx)(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,a,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const a=document.querySelectorAll(".splide__slide.is-visible").length,o=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),s=Number(o)+(a-1)+a;s>0?(t.style.transition="0s ease",t.style.transform="translateX(-".concat(s*e,"px)")):t.style.transform="translateX(0px)"}),200)},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach((t=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let a=document.querySelector(".tb_hc_arrow_left__"),o=document.querySelector(".tb_hc_arrow_right__");function s(){setTimeout((()=>{let t=document.querySelector(".splide__list");null!=t&&(t.style.transform="translateX(0)")}),100)}a&&o&&(document.querySelector(".tb_hc_arrow_left__").style="display:none",document.querySelector(".tb_hc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){s()})),s(),window.addEventListener("resize",s)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let e=document.querySelector("#kt_aside_toggle");null!=e&&e.addEventListener("click",this.reScrolled)}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:a,onClickPopUpSlider:o,parentID:s}=this.props;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,i)=>{if(t.classList){const i=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var n=i[0];String(i[0]).includes("tb_")&&(n=String(i[0]).replace("tb_",""));const r=e.findIndex((t=>t==n));let l=document.querySelectorAll(".tb_hc_post_container #".concat(t.id));for(let t=0;t<l.length;t++){let e=l[t],i=e.getAttribute("p_id");String(s)===String(i)&&e.addEventListener("click",(t=>{t.preventDefault();const e=a[n];o(r,e)}))}}}))}}render(){const{postData:t,completeDataObject:e,wall:a,clickToShowPopUp:o,hasMoreData:i,onClickToCTA:r,parentID:l}=this.props,c=l,{windowWidth:d}=this.state,u=a.ThemeRule.numberOfCoumn,m=a.ThemeRule.mobileColumn,p=a.ThemeRule.slidePost,b=a.ThemeRule.slideDuration,g=a.Personalization.autoScrollStatus,w=1===a.Personalization.trimcontent,x=!!(d<768||s.tq),v=t&&t.length?x?1:t.length>3?3:t.length:3,f=t&&t.length?x?1:t.length>4?4:t.length:4;x||1===g||t.length;const j={role:"article",label:"social widget",rewind:!0,speed:1e3,loop:!0,interval:1===p?1e3*b:5e3,perPage:u>0?u:x?1:t.length>5?5:t.length,gap:0,perMove:!!_.ZQ&&1,autoplay:1===p,padding:"0",pagination:!1,arrows:!!x||t.length>(u>0?u:f),fixedHeight:w&&!_.ZQ,breakpoints:{560:{perPage:m>0?m:1,perMove:m>0?m:1,arrows:t.length>(m>0?m:1)},767:{perPage:u>0?u-3<1?u:u-3:v,arrows:t.length>(u>0?u-3<1?u:u-3:v)},991:{perPage:u>0?u-4<1?u:u-4:v,arrows:t.length>(u>0?u-4<1?u:u-4:v)},1200:{perPage:u>0?u-1==0?u:u-1:v,arrows:t.length>(u>0?u-1==0?u:u-1:v)},1600:{perPage:u>0?u:f,arrows:t.length>(u>0?u:f)}}},y=[33,34,35,36,37,3,4,19];return(0,h.jsx)(h.Fragment,{children:""!=l?(0,h.jsx)("div",{className:"tb_hc_post_container",ref:this.sliderHeight,children:(0,h.jsxs)(n.tv,{hasTrack:!1,className:"tb_hc_post_slider ".concat(w?"tb_hc_fixed_height":""),options:j,ref:t=>this.inputRefs[c]=t,children:[(0,h.jsx)(n.Gj,{children:t&&t.length>0&&t.map(((t,s)=>{const i=e[t];return(0,h.jsx)(n.jw,{p_id:l,className:"tb_".concat(i.id),children:!_.ZQ&&y.includes(i.network.id)?(0,h.jsx)(I,{ownerId:a.Wall.owner,itemData:i,itemIndex:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:o,wallID:a.Wall.id,onClickToCTA:r,wall:a}):(0,h.jsx)(k,{ownerId:a.Wall.owner,itemData:i,itemIndex:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:o,wallID:a.Wall.id,onClickToCTA:r,wall:a})},s)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--prev tb_hc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--next tb_hc_arrow_right__ tb__icon tb-arrow-right-alt",onClick:void 0!=i?this.requestData:null,"aria-labelledby":"Navigation Next Slide",children:" "})]})]})}):null})}}const S=(0,o.memo)((0,i.$j)((t=>({})),(t=>({getDataNextSteps:(e,a,o,s,i,n,r,l)=>t((0,y.Sx)(e,a,o,s,i,n,r,l))})))(T))},80413:(t,e,a)=>{"use strict";e.Ad=void 0;var o=a(7782);var s=a(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var i=a(52047)},7782:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=a(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,s)=>{if("undefined"===typeof window)return s(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return s(o.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{i&&window.clearTimeout(i),s("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(i=window.setTimeout((()=>s(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,a){"use strict";var o=this&&this.__awaiter||function(t,e,a,o){return new(a||(a=Promise))((function(s,i){function n(t){try{l(o.next(t))}catch(e){i(e)}}function r(t){try{l(o.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}l((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const s=a(72791),i=a(94590);e.useImageSize=(t,e)=>{const[a,n]=(0,s.useState)(null),[r,l]=(0,s.useState)(!1),[c,d]=(0,s.useState)(null);return(0,s.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:a,height:o}=yield(0,i.getImageSize)(t,e);n({width:a,height:o})}catch(c){d(c.toString())}finally{l(!1)}}))}),[t,e]),[a,{loading:r,error:c}]}},59169:()=>{},50247:()=>{}}]);
//# sourceMappingURL=8574.40a0029c.chunk.js.map