(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5542,7033,7234,7668,757],{97234:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(72791),o=s(2703),i=s(14496),n=s(80184);class r extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,n.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,o.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});s(72791);var a=s(80184);const o=t=>{let{username:e,network:s,authorClass:o}=t;return(0,a.jsx)("img",{className:"".concat(o,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},16243:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var a=s(72791),o=s(80184);class i extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:a,item:i}=this.props,n=!(!s||1!==s.status);return(0,o.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),a(i),window.open("".concat(n?s.url:t.url),"_blank")},children:[" ",n?s.text:t.text]})}}const n=i},40115:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var a=s(72791),o=s(11225),i=s(80413),n=s(2703),r=s(70188),l=s(80184);class d extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:s,themeID:a,ownerId:i}=this.props,{imgUrl:d,paddingBottom:c}=this.state,_={paddingBottom:"".concat(c,"%")};return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:_,children:(0,l.jsx)("img",{className:t,role:"img",src:d,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,o.ht)(t)},alt:(0,n.P)(d)})})}}},98270:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var a=s(72791),o=s(80413),i=s(96710),n=s.n(i),r=s(11225),l=s(80184);const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class c extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:t,data:e,wallID:s,isCover:a,controls:o,autoPlay:i,handleVideoEnded:c,muted:_}=this.props,{paddingBottom:p,videoLoaded:h}=this.state,m={paddingBottom:"".concat(p,"%")};return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:m,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!i,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:i,muted:_,volume:i?1:0,playsinline:!0,onReady:t=>{this.setVideoLoaded(!0)},playing:i,height:"100%",width:"100%",controls:o,style:{backgroundImage:h?"":"url(".concat(e.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:c||null})})}}},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(72791),o=s(46535),i=s(2703),n=s(80184);const r=a.lazy((()=>s.e(1088).then(s.bind(s,41088))));class l extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:l}=this.props,d=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),c=o.ZQ&&36==t.id?"tagembed":t.icon;return d?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(c.replace(/fa-/g,"")),style:{color:(0,i.mD)(59)?null:s.iconColor},children:(0,n.jsx)("div",{})}):(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{network:t,networkClass:e})]})}}},23450:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(72791),o=s(34867),i=s(2703),n=s(80184);const r=a.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class l extends a.PureComponent{constructor(t){super(t),this.toggleExpanded=t=>{this.setState({expanded:!this.state.expanded}),t.stopPropagation()},this.state={expanded:!1}}render(){const{contentClass:t,content:e,ThemeRule:s,font:l,personalization:d,item:c,contentTitle:_,readMore:p,maxLength:h,textAlign:m}=this.props,{expanded:u}=this.state,w={textAlign:m||s.textAlignment};let b=20==c.network.id?e:(0,i.Fx)(e);12==c.network.id&&(b=(0,o.ZP)(b));const g=p?u?b:b.slice(0,h):b,x="".concat(t).concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):"").concat(s.font_varient?" tb-cTBfont-".concat(s.font_varient):"");return(0,n.jsxs)("div",{className:x,style:w,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(_)}):null,(0,n.jsxs)(a.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:c,content:g,Personalization:d})]}),p&&b.length>h&&(0,n.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:u?"...Read Less...":"...Read More..."})]})}}},27668:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(72791),o=s(2703),i=s(80184);const n=t=>{const{postTime:e,timeClass:s}=t,n=(0,a.useMemo)((()=>(0,o.Sy)(e)),[]);return(0,i.jsx)("div",{className:s,children:n})},r=(0,a.memo)(n)},55461:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>f});var a=s(72791),o=s(48282),i=s(97234),n=s(27668),r=s(70757),l=s(80184);const d=t=>{let{author:e,personalization:s,postTime:a,network:o,ThemeRule:d,font:c}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",p={color:d.authorColor,fontFamily:d.css_font},h={backgroundColor:d.authorColor},m=!(!s.postAuthor||e.isInstaUser),u=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,l.jsxs)("div",{className:"tb_spt_author_wrapper",children:[(0,l.jsxs)("div",{className:"tb_spt_author",children:[m?(0,l.jsx)(i.default,{author:e,network:o,authorClass:"tb_spt_author_profile"}):"",(0,l.jsxs)("div",{className:"tb_spt_author_info",children:[m?(0,l.jsx)("div",{className:"tb_spt_authorname",style:p,children:e.name}):"",(0,l.jsxs)("div",{className:"tb_spt_post_info",children:[m?(0,l.jsx)("div",{className:"tb_spt_username",style:p,children:_}):"",u?(0,l.jsx)("div",{className:"tb_spt_seprator",style:h,children:" "}):"",s.postTime?(0,l.jsx)(n.default,{postTime:a,timeClass:"tb_spt_time tb-cTBfont-".concat(d.font_varient),authorColor:d.authorColor,authorNameStyle:p}):""]})]})]}),(0,l.jsx)("div",{className:"tb_spt_social_",children:(0,l.jsx)(r.default,{networkClass:"tb_spt_social_ico",network:o,isDefault:1===d.iconType,ThemeRule:d})})]})},c=t=>{let{share:e,shareColor:s}=t;const a={color:s};return(0,l.jsxs)("div",{className:"tb_spt_share_wrapper",children:[(0,l.jsxs)("div",{className:"tb_spt_share_button_",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico tb__icon tb-share",style:a,children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_btn_txt",style:a,children:"Share"})]}),(0,l.jsx)("div",{className:"tb_spt_share_wrapper_dropdown",children:(0,l.jsxs)("div",{className:"tb_spt_share_icon_list",children:[e.facebook?(0,l.jsxs)("a",{href:e.facebook,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-facebook",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Facebook"})]}):"",e.twitter?(0,l.jsxs)("a",{href:e.twitter,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__  tb__icon tb-twitter",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Twitter"})]}):"",e.linkedin?(0,l.jsxs)("a",{href:e.linkedin,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-linkedin",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"LinkedIn"})]}):""]})})]})};var _=s(40115),p=s(98270);const h=t=>{let{itemData:e,wallID:s,ownerId:a,wall:o}=t;const i=(3===e.type||5===e.type)&&28!==e.network.id&&1==o.ThemeRule.autoPlay;return(0,l.jsx)("div",{className:"tb_spt_media_wrap",children:i?(0,l.jsx)(p.Z,{VideoClass:"tb_spt_video",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:a,size:130,muted:!0,autoPlay:i,handleVideoEnded:()=>{}}):(0,l.jsx)(_.Z,{ImageClass:"tb_spt_image",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:a,size:130})})};var m=s(23450),u=s(16243),w=s(2703);const b=(t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,w.ok)(e)):s,g=(t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,w.ok)(e)):s,x=t=>{let{itemData:e,ThemeRule:s}=t;const a={color:s.fontColor},o=e.network.id,i=3===o||10===o?"like":"heart";return(0,l.jsx)(l.Fragment,{children:12!==o&&15!==o&&20!==o&&21!==o?(0,l.jsxs)("div",{className:"tb_spt_social_action__",children:[(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:b(o,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-".concat(i),style:a,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:a,children:e.like_count}):""]})}),(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:g(o,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-comment",style:a,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:a,children:e.like_count}):""]})}),1===o?(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,w.ok)(e.postId)),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-retweet",style:a,children:" "})})}):""]}):""})},v=t=>{let{itemData:e,personalization:s,ThemeRule:a,itemIndex:o,clickToShowPopUp:i,wallID:n,ownerId:r,onClickToCTA:_,wall:p}=t;const w={backgroundColor:a.cardColor},b=2===e.type||3===e.type||4===e.type||5===e.type,g=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),v={justifyContent:e.share.status?"":"flex-end",borderTop:"1px solid ".concat(a.fontColor)};return(0,l.jsx)("div",{id:"tb-spt-post-".concat(e.id),className:"tb_spt_post_wrapper","tb-network":e.network.id,children:(0,l.jsx)("div",{className:"tb_spt_post_in",onClick:i(o,e),children:(0,l.jsxs)("div",{className:"tb_spt_post_media_wrapp",children:[b?(0,l.jsx)(h,{itemData:e,wallID:n,wall:p,ownerId:r}):"",(0,l.jsx)("div",{className:"tb_spt_post_details",children:(0,l.jsxs)("div",{className:"tb_spt_contant_wrapper",children:[(0,l.jsx)(d,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:s,ThemeRule:a}),(0,l.jsxs)("div",{className:"tb_spt_content_wrap",children:[(0,l.jsxs)("div",{className:"tb_spt_content_wrap_in",children:[a.hideContent&&1!=e.type?"":(0,l.jsx)(m.default,{contentClass:"tb_spt_content",item:e,content:e.content,font:a,ThemeRule:a,personalization:s}),g?(0,l.jsxs)("div",{className:"tb_spt_post_cta",children:[(0,l.jsx)(u.Z,{ctaClass:"tb_spt_post_cta_btn",cta:e.cta,contentTitle:e.contentTitle,item:e,onClickToCTA:_})," "]}):""]}),(0,l.jsxs)("div",{className:"tb_spt_social_actions_container",style:v,children:[e.share.status?(0,l.jsx)(c,{share:e.share,shareColor:a.fontColor}):"",a.socialAction?(0,l.jsx)(x,{itemData:e,ThemeRule:a}):""]})]})]})}),(0,l.jsx)("div",{className:"tb_spt_post_overlay",style:w,children:(0,l.jsx)("div",{})})]})})})};s(59169);class f extends a.PureComponent{componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:a,onClickToCTA:i}=this.props,n={type:"loop",rewind:!0,speed:500,gap:0,autoplay:!!s.ThemeRule.slidePost,padding:0,pagination:!1,arrows:!0};return(0,l.jsx)("div",{className:"tb_spt_post_container",children:(0,l.jsxs)(o.tv,{hasTrack:!1,className:"tb_spt_post_slider",options:n,ref:this.myRef,children:[(0,l.jsx)(o.Gj,{children:t&&t.length>0&&t.map(((t,n)=>{const r=e[t];return(0,l.jsx)(o.jw,{style:{margin:0,padding:0},children:(0,l.jsx)(v,{ownerId:s.Wall.owner,itemData:r,itemIndex:n,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:a,onClickToCTA:i,wall:s},n)})}))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_spt_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_spt_arrow tb_spt_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next tb_spt_arrow tb_spt_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,l.jsx)("div",{})})]})]})})}}},80413:(t,e,s)=>{"use strict";e.Ad=void 0;var a=s(7782);var o=s(94590);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var i=s(52047)},7782:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},94590:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=s(7782);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,o)=>{if("undefined"===typeof window)return o(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return o(a.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),s({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{i&&window.clearTimeout(i),o("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(i=window.setTimeout((()=>o(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},52047:function(t,e,s){"use strict";var a=this&&this.__awaiter||function(t,e,s,a){return new(s||(s=Promise))((function(o,i){function n(t){try{l(a.next(t))}catch(e){i(e)}}function r(t){try{l(a.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,r)}l((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const o=s(72791),i=s(94590);e.useImageSize=(t,e)=>{const[s,n]=(0,o.useState)(null),[r,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)(null);return(0,o.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:s,height:a}=yield(0,i.getImageSize)(t,e);n({width:s,height:a})}catch(d){c(d.toString())}finally{l(!1)}}))}),[t,e]),[s,{loading:r,error:d}]}},59169:()=>{},50247:()=>{}}]);
//# sourceMappingURL=5542.dd54cf8c.chunk.js.map