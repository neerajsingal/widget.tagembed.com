(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6264,6723,7319,8167],{78167:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var n=i(9950),o=(i(52867),i(93662)),s=i(44414);class a extends n.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i,size:n}=this.props;return(0,s.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,s.jsx)("img",{className:`${e}__`,src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:n||44,height:n||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,s.jsx)(o.A,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,i)=>{"use strict";i.d(e,{A:()=>a});var n=i(9950),o=i(44414);const s=t=>{let{username:e,network:i,authorClass:n,errorPic:s}=t;const a="#ffffff"==i.color?"#000":i.color;return(0,o.jsx)("img",{className:`${n}__`,src:s||`https://ui-avatars.com/api/?name=${e.replace(/\s/g,"")}&background=${String(null===i.id?"#000":a).replace("#","")}&color=fff&length=1`,alt:e,width:45,height:45,"aria-label":"author image"})},a=(0,n.memo)(s)},60531:(t,e,i)=>{"use strict";i.d(e,{A:()=>a});var n=i(9950),o=i(44414);class s extends n.PureComponent{render(){const{cta:t,ctaClass:e,postCta:i,onClickToCTA:n,item:s}=this.props,a=!(!i||1!==i.status),r={color:a?i.color:t.color,backgroundColor:a?i.background:t.background};return(0,o.jsxs)("div",{className:e,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:e=>{e.stopPropagation(),n(s),window.open(`${a?i.url:t.url}`,"_blank")},children:[" ",a?i.text:t.text]})}}const a=s},44463:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var n=i(9950),o=i(66345),s=i(44414);const a=n.lazy((()=>i.e(620).then(i.bind(i,20620))));class r extends n.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=o.uS&&36==t.id?"tagembed":t.icon;return c?(0,s.jsx)("div",{className:`${e} tb__icon tb-${d.replace(/fa-/g,"")}`,"aria-label":`post network ${(null===t||void 0===t?void 0:t.name)||""}`,children:(0,s.jsx)("div",{})}):(0,s.jsxs)(n.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(a,{network:t,networkClass:e})]})}}},65859:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var n=i(9950),o=i(70804),s=i(52867),a=(i(66345),i(44463),i(44414));const r=n.lazy((()=>Promise.all([i.e(8615),i.e(1796)]).then(i.bind(i,21796)))),l=n.lazy((()=>i.e(3576).then(i.bind(i,33576))));class c extends n.PureComponent{constructor(t){super(t),this.contentRef=n.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var i,n;const t=(null===(i=this.contentRef)||void 0===i||null===(n=i.current)||void 0===n?void 0:n.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:i,font:n,personalization:c,item:d,contentTitle:_,readMore:u,maxLength:h,textAlign:p,maxLines:m,isReadMore:b}=this.props,g={WebkitLineClamp:m,textAlign:i.textAlignment};p||i.textAlignment;let v=20==d.network.id?e:(0,s.w)(e);12==d.network.id&&(v=(0,o.Ay)(v));const w=""+(i.lineTrim?` tb_content_line-${i.lineTrim}`:""),x=`${t} ${b?"":w} tb-cTBfont-${i.font_varient}`;return(0,a.jsxs)("div",{className:x,ref:this.contentRef,style:g,children:[_?(0,a.jsx)("div",{className:"tb_bold_txt__",children:(0,o.Ay)(_)}):null,d.aiStatus?(0,a.jsx)(l,{aiSummary:d.aiSummary,type:null===c||void 0===c?void 0:c.ai_summary}):(0,a.jsx)(r,{data:d,content:v,Personalization:c})]})}}},49395:(t,e,i)=>{"use strict";i.d(e,{A:()=>l});var n=i(9950),o=i(66345),s=i(44414);const a=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:o.uS?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:o.uS?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:n,color:a}=i[(null===e||void 0===e?void 0:e.aiNetwork)||(null===e||void 0===e?void 0:e.id)]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,s.jsx)("div",{className:n,style:{color:a},"tb-network":e.id,children:(0,s.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:i,color:n}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,s.jsx)("div",{className:i,style:{color:n},"tb-network":e})};class l extends n.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,s.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,n)=>i?(0,s.jsx)(r,{ThemeID:i},n):(0,s.jsx)(a,{network:e},n))):null})}}},173:(t,e,i)=>{"use strict";i.d(e,{A:()=>r});var n=i(9950),o=i(14478),s=i(66345),a=i(44414);class r extends n.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:i,wallID:n,ownerId:a}=this.props;e.stopPropagation(),s.uS||(0,o.hq)({type:2,action:2,wall:n,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:a}),(0,o.nF)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,a.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon "+(s.uS?"tb-share-fill":"tb-share"),children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,a.jsx)("div",{})})}):"",t.twitter?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,a.jsx)("div",{})})}):"",t.linkedin?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,a.jsx)("div",{})})}):""]})]})}}},46803:(t,e,i)=>{"use strict";i.d(e,{A:()=>c});var n=i(9950),o=(i(66345),i(52867)),s=i(44414);const a=(t,e,i)=>1==t?`https://twitter.com/intent/favorite?tweet_id=${(0,o.Ph)(e)}`:i,r=(t,e,i)=>1==t?`https://twitter.com/intent/tweet?in_reply_to=${(0,o.Ph)(e)}`:i,l=t=>{let{arialbl:e,hrefClick:i,Icon:n,count:a,itemId:r=0}=t;return(0,s.jsx)("div",{className:"tb_social_action__list",role:"listitem","aria-roledescription":"post social action links",children:(0,s.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(i,"_blank")},className:`tb_social_action__ico_wrap tb_social_action__ico_wrap_${r}`,"aria-label":`${e} post,${"eye"==n?"view":"heart-outline"==n?"like":"comment"==n?"comment":""} count ${(0,o.sl)(a)}`,role:"button",tabIndex:"0",children:[(0,s.jsx)("div",{className:`tb_social_action_ico__ tb__icon tb-${n}`,children:" "}),a>0?(0,s.jsx)("div",{className:"tb_social_action_counts__",children:(0,o.sl)(a)}):""]})})};class c extends n.PureComponent{componentDidMount(){try{var t;const{itemData:e}=this.props,i=`.tb_social_action__ico_wrap_${null===e||void 0===e?void 0:e.id}`;null===(t=document.querySelector(i))||void 0===t||t.addEventListener("keydown",(function(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}))}catch(e){console.log(e)}}render(){const{itemData:t,ThemeRule:e,actionClass:i,ThemeID:n}=this.props,c={color:3===n?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart-outline",u=!![1,2,3,7,8,9,10,18].includes(d),h=![29,19].includes(d),p=t.network.name?t.network.name:"";return(0,s.jsx)(s.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,s.jsx)("div",{className:i,children:(0,s.jsxs)("div",{className:"tb_social_action__",role:"list",children:[u?(0,s.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:a(d,t.postId,t.link),Icon:_,iconColorStyle:c,count:t.like_count}):null,h?(0,s.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===d?(0,s.jsx)(l,{itemId:t.id,arialbl:p,hrefClick:`https://twitter.com/intent/retweet?tweet_id=${(0,o.Ph)(t.postId)}`,Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,s.jsx)(l,{arialbl:p,itemId:t.id,hrefClick:t.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},6723:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var n=i(9950),o=i(52867),s=i(44414);const a=t=>{const{postTime:e,timeClass:i}=t;return(0,s.jsx)("div",{className:i,role:"status","aria-label":`post timestamp ${(0,o.fF)(e)}`,children:(0,o.fF)(e)})},r=(0,n.memo)(a)},71630:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>S});var n=i(9950),o=i(41377),s=i(11127),a=i(53556),r=i(52867),l=i(66345),c=i(78167),d=i(6723),_=i(44463),u=i(44414);const h=t=>{var e,i;let{author:n,personalization:o,postTime:s,network:a,ThemeRule:r,font:h,mediaType:p,ownerId:m}=t;const b=!(!o.postAuthor||n.isInstaUser),g=!(!o.postAuthor||!o.postTime||n.isInstaUser);return(0,u.jsxs)("div",{className:"tb_rc_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,u.jsxs)("div",{className:"tb_rc_author",children:[b?(0,u.jsx)(c.default,{network:a,author:n,authorClass:"tb_rc_author_profile"},n.username):"",(0,u.jsxs)("div",{className:"tb_rc_author_info",children:[b?(0,u.jsx)("div",{className:"tb_rc_authorname",children:n.name}):"",(0,u.jsx)("div",{className:"tb_rc_post_info",children:null!==n&&void 0!==n&&n.aiStatus?(0,u.jsxs)("div",{className:"tb_rc_username",children:[null===n||void 0===n||null===(e=n.avgRating)||void 0===e?void 0:e.avgRate," Based on ",null===n||void 0===n||null===(i=n.avgRating)||void 0===i?void 0:i.totalReviews," reviews"]}):(0,u.jsxs)(u.Fragment,{children:[b?(0,u.jsx)("div",{className:"tb_rc_username",children:n.username&&n.username.length>0?`@${n.username}`:""}):"",g?(0,u.jsx)("div",{className:"tb_rc_seprator",children:" "}):"",o.postTime?(0,u.jsx)(d.default,{postTime:s,timeClass:`tb_rc_time tb-cTBfont-${r.font_varient}`,authorColor:r.authorColor}):""]})})]})]}),p&&a.id||l.uS||l.MH?(0,u.jsx)("div",{className:"tb_rc_social_",children:(0,u.jsx)(_.default,{networkClass:"tb_rc_social_ico",network:a,isDefault:1===r.iconType,ThemeRule:r})}):null]})};var p=i(65859),m=i(173),b=i(60531),g=i(49395),v=i(46803);const w=l.uS?null:200;class x extends n.PureComponent{constructor(t){super(t),this.contentRef=t=>{this.setState({height:t})},this.contentRefHidden=t=>{this.setState({hiddenHeight:t})},this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this),this.mediaHeight=n.createRef()}componentDidMount(){const{itemData:t,onClickPopUpSlider:e,itemIndex:i}=this.props;(0,r._7)(this.mediaHeight),t.isPopUp&&e(i,t)}componentDidMount(){const{itemData:t,onClickPopUpSlider:e,itemIndex:i}=this.props;t.isPopUp&&e(i,t)}render(){const{itemData:t,personalization:e,adjustWidth:i,ThemeRule:n,clickToShowPopUp:o,itemIndex:s,wallID:a,ownerId:c,onClickToCTA:d,wall:x,languageSetting:f}=this.props,{isExpanded:k,hiddenHeight:j,height:S}=this.state,C=1!==t.type,N=t.rating>0,y=t.rating>0||(0,r.Nv)(54)?"tb_rc_rating_content":"tb_rc_content",T=1===t.type&&e.textDecorate?"tb_rc_text_decoration tb_rc_text_post":"",I=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),D=e.trimcontent?(0,r.Ex)(t.content,w):t.content,P=j>S;return(0,u.jsx)("div",{className:"tb_rc_post_wrapper","data-id":t.id,style:{width:`${1==t.highlight?2*i:i}%`,padding:e.padding/2},"tb-network":t.network.icon,ref:this.mediaHeight,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"area-label":D,role:"article",children:(0,u.jsx)("div",{className:"tb_rc_post_wrap_in "+(l.uS?"te_mc_post_wrap_in":""),children:(0,u.jsxs)("div",{className:"tb_rc_post_in",onClick:o(s,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,u.jsxs)("div",{className:"tb_rc_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[l.uS||C||!(0,r.Nv)(20)?null:(0,u.jsxs)("div",{className:"tb_rc_social_top_",children:[" ",(0,u.jsx)(_.default,{networkClass:"tb_rc_social_center_ico",network:t.network,isDefault:1===n.iconType,ThemeRule:n})," "]}),t.share.status?(0,u.jsx)(m.A,{share:t.share,shareClass:"tb_rc_share_container",item:t,wallID:a,ownerId:c}):null]}),(0,u.jsxs)("div",{className:"tb_rc_contant_wrapper",children:[(0,u.jsxs)("div",{className:"tb_rc_content_wrap "+((0,r.Nv)(52)?"tb_rc_content_wrap_fixed":""),style:{textAlign:n.textAlignment},children:[N?(0,u.jsxs)("div",{className:"tb_rc_rating__ "+(29===t.network.id?"tb_rc_onsite_rating__":""),children:[(0,u.jsx)(g.A,{rating:t.rating,network:t.network})," "]}):null,I&&!l.uS?(0,u.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,u.jsx)(b.A,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,n.hideContent&&C?null:(0,u.jsxs)("div",{className:"tb_rc_content_in",children:[(0,u.jsx)("div",{className:"tb_rc_rating_content_hidden",children:(0,u.jsx)(p.default,{item:t,contentClass:`${y} ${T}`,content:D,font:n,ThemeRule:n,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0})}),(0,u.jsx)(p.default,{item:t,contentClass:`${y} ${T}`,content:D,font:n,ThemeRule:n,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRef,maxLines:k?"":n.lineTrim,isReadMore:!0}),n.lineTrim>0&&P?(0,u.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,languageSetting:f,children:k?f.showLess:f.readMore}):null]})]}),I&&l.uS?(0,u.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,u.jsx)(b.A,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,(0,u.jsx)(h,{ownerId:c,mediaType:C,postTime:t.createdAt,author:t.author,network:t.network,font:n,personalization:e,ThemeRule:n})]}),n.socialAction&&!(0,r.Nv)(52)?(0,u.jsx)(v.A,{itemData:t,ThemeRule:n,ThemeID:e.widgetTheme,actionClass:"tb_rc_social_action__ "+(l.uS?"tb_rc_social_action_bg":"")}):null]})})})}}const f=x;var k=i(14478);i(61038);class j extends n.Component{constructor(t){super(t),this.state={windowWidth:document.getElementById(r.S2)&&document.getElementById(r.S2).clientWidth?document.getElementById(r.S2).clientWidth:window.innerWidth},this.onScreenLoad=()=>{const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:document.getElementById(r.S2)&&document.getElementById(r.S2).clientWidth?document.getElementById(r.S2).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:t,wall:e,preRender:i,hasMoreData:n,getDataNextSteps:o,loaderData:s}=this.props,a=e.Personalization.autoScrollStatus;n&&1==a&&!s.isShowMoreLoading&&o(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,i,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const i=document.querySelectorAll(".splide__slide.is-visible").length,n=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),o=Number(n)+(i-1)+i;o>0?(t.style.transition="0s ease",t.style.transform=`translateX(-${o*e}px)`):t.style.transform="translateX(0px)"}),200)},this.autoScrollSlider=(t,e,i,n)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus){const e=l.uS?t._o.perPage+t.index:t.index;t.length-e===(l.uS?1:t._o.perPage)&&this.requestData()}},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach((t=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let i=document.querySelector(".tb_rc_arrow_left__"),n=document.querySelector(".tb_rc_arrow_right__");function o(){setTimeout((()=>{let t=document.querySelector(".splide__list");null!=t&&(t.style.transform="translateX(0)")}),100)}i&&n&&(document.querySelector(".tb_rc_arrow_left__").style="display:none",document.querySelector(".tb_rc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){o()})),o(),window.addEventListener("resize",o)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let e=document.querySelector("#kt_aside_toggle");null!=e&&e.addEventListener("click",this.reScrolled)}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:i,onClickPopUpSlider:n,parentID:o}=this.props;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,s)=>{if(t.classList){const s=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var a=s[0];String(s[0]).includes("tb_")&&(a=String(s[0]).replace("tb_",""));const r=e.findIndex((t=>t==a));let l=document.querySelectorAll(`.tb_rc_post_container #${t.id}`);for(let t=0;t<l.length;t++){let e=l[t],s=e.getAttribute("p_id");String(o)===String(s)&&e.addEventListener("click",(t=>{t.preventDefault();const e=i[a];n(r,e)}))}}}))}}render(){var t;const{postData:e,completeDataObject:i,wall:n,clickToShowPopUp:s,hasMoreData:r,onClickToCTA:c,parentID:d,languageSetting:_,onClickPopUpSlider:h,loaderData:p}=this.props,m=d,{windowWidth:b}=this.state,g=n.ThemeRule.numberOfCoumn,v=n.ThemeRule.mobileColumn,w=n.ThemeRule.slidePost,x=n.ThemeRule.slideDuration,k=n.Personalization.autoScrollStatus,j=1===n.Personalization.trimcontent,S=!!(b<768||o.Fr),C=e&&e.length?S?1:e.length>3?3:e.length:3,N=e&&e.length?S?1:e.length>3?3:e.length:3;S||1===k||e.length;const y=l.uS?3:5,T=l.uS&&void 0!==(null===(t=n.Personalization)||void 0===t?void 0:t.clonePost)&&0===n.Personalization.clonePost?{clones:0}:{},I=1!=k?!(Object.keys(T).length>0)&&"slide":"slide",D={...T,type:1!==k&&I,role:"article",label:"social widget",rewind:!0,speed:1e3,loop:!0,interval:1===w?1e3*x:5e3,perPage:g>0?g:S?1:e.length>y?y:e.length,gap:0,perMove:!!l.uS&&1,autoplay:1===w,padding:"0",pagination:!1,arrows:!!S||e.length>(g>0?g:N),fixedHeight:j,breakpoints:{560:{perPage:v>0?v:1,perMove:v>0?v:1,arrows:e.length>(v>0?v:1)},767:{perPage:g>0?g-3<1?g:g-3:C,arrows:e.length>(g>0?g-3<1?g:g-3:C)},991:{perPage:g>0?g-4<1?g:g-4:C,arrows:e.length>(g>0?g-4<1?g:g-4:C)},1200:{perPage:g>0?g-1==0?g:g-1:C,arrows:e.length>(g>0?g-1==0?g:g-1:C)},1600:{perPage:g>0?g:N,arrows:e.length>(g>0?g:N)}}};return(0,u.jsx)(u.Fragment,{children:""!=d?(0,u.jsx)("div",{className:"tb_rc_post_container",ref:this.sliderHeight,children:(0,u.jsxs)(a.eB,{hasTrack:!1,className:`tb_rc_post_slider ${j?"tb_rc_fixed_height":""} ${l.uS?"tb_rc_fixed_height_te":""}`,options:D,ref:t=>this.inputRefs[m]=t,onMove:this.autoScrollSlider,children:[(0,u.jsx)(a.v9,{children:e&&e.length>0&&e.map(((t,e)=>{const o=i[t];return(0,u.jsx)(a.Nn,{p_id:d,className:`tb_${o.id}`,children:(0,u.jsx)(f,{ownerId:n.Wall.owner,itemData:o,itemIndex:e,personalization:n.Personalization,ThemeRule:n.ThemeRule,clickToShowPopUp:s,wallID:n.Wall.id,onClickToCTA:c,wall:n,languageSetting:_,onClickPopUpSlider:h})},e)}))}),(0,u.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_rc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,u.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--prev tb_rc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,u.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--next tb_rc_arrow_right__ tb__icon tb-arrow-right-alt "+(p.isShowMoreLoading?"tb_a_spinner":""),"aria-labelledby":"Navigation Next Slide",onClick:t=>this.requestData(),children:" "})]})]})}):null})}}const S=(0,n.memo)((0,s.Ng)((t=>({loaderData:t.loaderData})),(t=>({getDataNextSteps:(e,i,n,o,s,a,r,l)=>t((0,k.H5)(e,i,n,o,s,a,r,l))})))(j))},61038:()=>{},95098:()=>{}}]);