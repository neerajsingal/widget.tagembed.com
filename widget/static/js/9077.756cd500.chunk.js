(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9077,1088,7033,7234,7668,757],{97234:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(72791),i=s(2703),o=s(14496),c=s(80184);class n extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,c.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,c.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});s(72791);var a=s(80184);const i=t=>{let{username:e,network:s,authorClass:i}=t;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var a=s(72791),i=s(80184);class o extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:a,item:o}=this.props,c=!(!s||1!==s.status),n={color:c?s.color:t.color,backgroundColor:c?s.background:t.background};return(0,i.jsxs)("div",{className:e,style:n,onClick:e=>{e.stopPropagation(),a(o),window.open("".concat(c?s.url:t.url),"_blank")},children:[" ",c?s.text:t.text]})}}const c=o},40115:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(72791),i=s(11225),o=s(80413),c=s(2703),n=s(70188),l=s(80184);class r extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:s,themeID:a,ownerId:o}=this.props,{imgUrl:r,paddingBottom:d}=this.state,_={paddingBottom:"".concat(d,"%")};return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:_,children:(0,l.jsx)("img",{className:t,role:"img",src:r,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,c.P)(r)})})}}},98270:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(72791),i=s(80413),o=s(96710),c=s.n(o),n=s(80184);const l=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class r extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:s,isCover:a,controls:i,autoPlay:o,handleVideoEnded:r,muted:d}=this.props,{paddingBottom:_,videoLoaded:h}=this.state,m={paddingBottom:"".concat(_,"%")};return(0,n.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:(0,n.jsx)(c(),{className:t,url:l(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.networkId,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!o,onError:t=>{this.setVideoLoaded(!1)},autoPlay:o,muted:d,volume:o?1:0,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:o,height:"100%",width:"100%",controls:i,style:{backgroundImage:h?"":"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:r||null})})}}},37989:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});s(72791);var a=s(46535),i=s(41088),o=s(80184);const c=t=>{const{itemData:e,IconClass:s,position:c}=t,n=3===e.type||5===e.type,l=7===e.network.id,r=!!(e.imageList&&e.imageList.length>0),d=(e.imageList&&!a.ZQ&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_multi_images_ico_bottom":a.ZQ?"tb_multi_images_ico_te":"tb_multi_images_ico",_=1===e.isAudio,h=(0,o.jsx)(i.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),m=(0,o.jsx)("div",{className:"".concat(d," tb__icon tb-multiple"),children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),p=(0,o.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,o.jsx)("div",{})}),u=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return(0,o.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[r?m:"",n&&!l&&a.ZQ?u:"",n?l?h:_?b:a.ZQ?u:p:""]})}},41088:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(72791),i=s(46535),o=s(80184);const c=a.memo((t=>{let{network:e,networkClass:s}=t;switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return i.ZQ?(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return i.ZQ?(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-onsite-upload-default"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(s," tb__icon tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(s," tb__icon tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});default:return""}}));class n extends a.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(72791),i=s(46535),o=s(2703),c=s(80184);const n=a.lazy((()=>s.e(1088).then(s.bind(s,41088))));class l extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:l}=this.props,r=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return r?(0,c.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:i.ZQ&&!(0,o.mD)(59)?s.iconColor:null},children:(0,c.jsx)("div",{})}):(0,c.jsxs)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(n,{network:t,networkClass:e})]})}}},23450:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(72791),i=s(34867),o=s(2703),c=s(46535),n=s(80184);const l=a.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class r extends a.PureComponent{constructor(t){super(t),this.state={expanded:!1},this.toggleExpanded=this.toggleExpanded.bind(this)}toggleExpanded(){this.setState({expanded:!this.state.expanded})}render(){const{contentClass:t,content:e,ThemeRule:s,font:r,personalization:d,item:_,contentTitle:h,readMore:m,maxLength:b,textAlign:p}=this.props,{expanded:u}=this.state,x={fontFamily:s.css_font,fontSize:r.fontSize,color:c.ZQ&&!(0,o.mD)(59)?r.fontColor:null,textAlign:p||s.textAlignment};let v=20==_.network.id?e:(0,o.Fx)(e);12==_.network.id&&(v=(0,i.ZP)(v));const j=m?u?v:v.slice(0,b):v;return(0,n.jsxs)("div",{className:"".concat(t," ").concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""," tb-cTBfont-").concat(s.font_varient),style:x,children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(h)}):null,(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(l,{data:_,content:j,Personalization:d})]}),m&&v.length>b&&(0,n.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:u?"...Read Less...":"...Read More..."})]})}}},19036:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(72791),i=s(46535),o=s(80184);const c=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:c}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:c},"tb-network":e.id})},n=t=>{let{ThemeID:e}=t;const{className:s,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:a},"tb-network":e})};class l extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>s?(0,o.jsx)(n,{ThemeID:s},a):(0,o.jsx)(c,{network:e},a))):null})}}},20169:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var a=s(72791),i=s(11225),o=s(46535),c=s(80184);class n extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:a,ownerId:c}=this.props;e.stopPropagation(),o.ZQ||(0,i.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:c}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,c.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,c.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,c.jsx)("div",{})}),(0,c.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook"})}):"",t.twitter?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter"})}):"",t.linkedin?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin"})}):""]})]})}}},31152:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(72791),i=(s(46535),s(2703)),o=s(80184);const c=(t,e,s)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,i.ok)(e)):s,n=(t,e,s)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,i.ok)(e)):s,l=t=>{let{arialbl:e,hrefClick:s,Icon:a,iconColorStyle:i,count:c}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(s,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(a),style:i,children:" "}),c>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",style:i,children:c}):""]})})};class r extends a.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:s,ThemeID:a}=this.props,r={color:3===a?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),m=![29,19].includes(d),b=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,o.jsx)("div",{className:s,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[h?(0,o.jsx)(l,{arialbl:b,hrefClick:c(d,t.postId,t.link),Icon:_,iconColorStyle:r,count:t.like_count}):null,m?(0,o.jsx)(l,{arialbl:b,hrefClick:n(d,t.postId,t.link),Icon:"comment",iconColorStyle:r,count:t.comment_count}):null,1===d?(0,o.jsx)(l,{arialbl:b,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,i.ok)(t.postId)),Icon:"retweet",iconColorStyle:r,count:t.comment_count}):null,(0,o.jsx)(l,{arialbl:b,hrefClick:t.link,Icon:"eye",iconColorStyle:r,count:0})]})}):""})}}},27668:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(72791),i=s(2703),o=s(80184);const c=t=>{const{postTime:e,timeClass:s,authorColor:c,authorNameStyle:n}=t,l=(0,a.useMemo)((()=>(0,i.Sy)(e)),[]),r={color:c,...n};return(0,o.jsx)("div",{className:s,style:r,children:l})},n=(0,a.memo)(c)},38774:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>T});var a=s(72791),i=s(39852),o=s.n(i),c=s(97234),n=s(27668),l=s(70757),r=s(46535),d=s(2703),_=s(80184);const h=t=>{let{author:e,personalization:s,postTime:a,network:i,ThemeRule:o,itemData:h,mediaType:m}=t;const b=e.username&&e.username.length>0?"@".concat(e.username):"",p={color:r.ZQ||(0,d.mD)(59)?null:o.authorColor,fontFamily:o.css_font},u={backgroundColor:r.ZQ||(0,d.mD)(59)?null:o.authorColor},x=!(!s.postAuthor||e.isInstaUser),v=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,_.jsxs)("div",{className:"tb_nc_author_wrapper",children:[(0,_.jsxs)("div",{className:"tb_nc_author ".concat(r.ZQ&&(0,d.mD)(19)&&m?"tb_nc_author_top":""),children:[x?(0,_.jsx)(c.default,{itemData:h,network:i,author:e,authorClass:"tb_nc_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_nc_author_info",children:[x?(0,_.jsx)("div",{className:"tb_nc_authorname",style:p,children:e.name}):"",(0,_.jsxs)("div",{className:"tb_nc_post_info",children:[x?(0,_.jsx)("div",{className:"tb_nc_username",style:p,children:b}):"",v?(0,_.jsx)("div",{className:"tb_nc_seprator",style:u,children:" "}):"",s.postTime?(0,_.jsx)(n.default,{postTime:a,timeClass:"tb_nc_time tb-cTBfont-".concat(o.font_varient),authorColor:!r.ZQ&&!(0,d.mD)(59)&&o.authorColor,authorNameStyle:p}):""]})]})]}),!r.ZQ&&(0,d.mD)(19)?(0,_.jsx)("div",{className:"tb_nc_social_",children:(0,_.jsx)(l.default,{networkClass:"tb_nc_social_ico",network:i,isDefault:1===o.iconType,ThemeRule:o})}):null]})};var m=s(37989),b=s(40115),p=s(98270);const u=t=>{let{itemData:e,wallID:s,ownerId:a,wall:i}=t;const o=!(!r.ZQ||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),c=(3===e.type||5===e.type)&&28!==e.network.id&&1==i.ThemeRule.autoPlay,n=r.ZQ?!!i.ThemeRule.aspectImageRatio&&i.ThemeRule.aspectImageRatio:100;return(0,_.jsxs)("div",{className:"tb_nc_media_wrap",children:[r.ZQ&&(0,d.mD)(19)?(0,_.jsx)("div",{className:"tb_nc_social_ tb_nc_social_top_",children:(0,_.jsx)(l.default,{networkClass:"tb_nc_social_ico",network:e.network,isDefault:1===i.ThemeRule.iconType,ThemeRule:i.ThemeRule})}):null,o?null:(0,_.jsx)(m.Z,{itemData:e,IconClass:"tb_nc_media_icon"}),c||o?(0,_.jsx)(p.Z,{VideoClass:"tb_nc_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:n,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,_.jsx)(b.Z,{ImageClass:"tb_nc_image",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:n,ThemeRule:i.ThemeRule})]})};var x=s(23450),v=s(20169),j=s(16243),g=s(19036),N=s(31152);const w=r.ZQ?null:200,k=t=>{let{itemData:e,personalization:s,adjustWidth:a,ThemeRule:i,clickToShowPopUp:o,itemIndex:c,wallID:n,ownerId:l,onClickToCTA:m,wall:b,counter:p}=t;const k={width:"".concat(a,"%"),padding:s.padding/2},f={backgroundColor:i.cardColor},C=2===e.type||3===e.type||4===e.type||5===e.type,y=e.rating>0,T=e.rating>0?"tb_nc_rating_content":"tb_nc_content",D=1===e.type&&s.textDecorate?"tb_nc_text_decoration tb_nc_text_post":"",I=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),Z=s.trimcontent?(0,d.Sv)(e.content,w):e.content;e.font;return(0,_.jsx)("div",{id:"tb-nc-post-".concat(e.id),className:"tb_nc_post_wrapper ".concat(r.ZQ&&(0,d.mD)(59)?"tb_nc_post_gradient tb_nc_gradient-".concat(p):""),style:k,"tb-network":e.network.icon,children:(0,_.jsx)("div",{className:"tb_nc_post_wrap_in",style:{borderRadius:b.ThemeRule.radius},children:(0,_.jsxs)("div",{className:"tb_nc_post_in",style:f,onClick:o(c,e),children:[(0,_.jsxs)("div",{className:"tb_nc_post_media_wrapp",children:[e.share.status?(0,_.jsx)(v.Z,{share:e.share,shareClass:"tb_nc_share_container",item:e,wallID:n,ownerId:l}):"",C?(0,_.jsx)(u,{itemData:e,wallID:n,ownerId:l,wall:b},"img_".concat(e.id)):"",!y||r.ZQ||(0,d.mD)(59)?"":(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(g.Z,{rating:e.rating,network:e.network,ThemeID:59})})]}),(0,_.jsxs)("div",{className:"tb_nc_contant_wrapper",children:[(0,_.jsx)(h,{mediaType:C,ownerId:l,itemData:e.id,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:s,ThemeRule:i}),r.ZQ?"":I?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(j.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:m})}):"",y&&r.ZQ&&(0,d.mD)(59)?(0,_.jsx)("div",{className:"tb_nc_rating__",children:(0,_.jsx)(g.Z,{rating:e.rating,network:e.network,ThemeID:59})}):"",i.hideContent&&1!=e.type?"":(0,_.jsx)(x.default,{contentClass:"".concat(T," ").concat(D),item:e,content:Z,font:i,ThemeRule:i,personalization:s,contentTitle:e.contentTitle}),r.ZQ&&I?(0,_.jsx)("div",{className:"tb_nc_post_cta",children:(0,_.jsx)(j.Z,{ctaClass:"tb_nc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:m})}):""]}),i.socialAction?(0,_.jsx)(N.Z,{itemData:e,ThemeRule:i,ThemeID:s.widgetTheme,actionClass:"tb_nc_social_action__ ".concat(r.ZQ?"tb_nc_social_action_bg":"")}):""]})})})};var f=s(77581),C=s(11225);class y extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_nc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:a,postSize:i,clickToShowPopUp:c,onClickToCTA:n}=this.props,{loadData:l}=this.state;let d=0;return(0,_.jsx)(o(),{className:"tb_nc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_nc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:l?t&&t.length>0&&t.map(((t,o)=>{const l=e[t];return d=r.ZQ?o%6===0?1:d+1:1,(0,_.jsx)(k,{ownerId:a.Wall.owner,itemData:l,itemIndex:o,adjustWidth:1==l.highlight?2*s:s,postSize:i,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:c,onClickToCTA:n,wall:a,counter:d},o)})):null})}}const T=(0,f.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,C.B0)(e))})))(y)},50247:()=>{}}]);
//# sourceMappingURL=9077.756cd500.chunk.js.map