(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1e3,8342,4576,9239,5790],{26731:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var i=a(98501),o=a(46417);const n="https://cloud.tagshop.ai/app/theme/widget/media/images/no-product.svg";function l(t){const{className:e,urls:a,isProduct:l}=t;return(0,o.jsx)("img",{className:e,decoding:"async",src:(null===a||void 0===a?void 0:a.small)||"",width:"187",height:"259",alt:"",loading:"lazy",draggable:"false",onError:t=>t.target.src=l?n:"".concat(i.do,"/media/images/no-image.svg")})}},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var i=a(47313),o=(a(17739),a(98935)),n=a(46417);class l extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a,size:i}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),srcSet:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:i||44,height:i||44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var i=a(47313),o=a(46417);const n=t=>{let{username:e,network:a,authorClass:i,errorPic:n}=t;const l="#ffffff"==a.color?"#000":a.color;return(0,o.jsx)("img",{className:"".concat(i,"__"),src:n||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":l).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45,"aria-label":"author image"})},l=(0,i.memo)(n)},24576:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var i=a(46417);const o=(t,e)=>(0,i.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{color:"#F8B90C",fontSize:e},children:(0,i.jsxs)("div",{className:"tb_avg_rating_ico_fill__ tb__icon tb-star-fill",style:{width:10*t+"%",fontSize:e},children:[(0,i.jsx)("div",{})," "]})}),n=t=>{let{rating:e,size:a}=t;const n=e>5?5:e,l=Math.trunc(5-n),s=Math.trunc(n),r=String(n).split(".")[1];return(0,i.jsxs)("div",{className:"tb_avg_rating__","aria-label":"Ratings",role:"status",children:[s?[...Array(s)].map(((t,e)=>(0,i.jsx)("div",{"data-index":e,className:"tb_avg_rating_ico__ tb__icon tb-star-fill",style:{color:"#F8B90C",fontSize:a},children:(0,i.jsx)("div",{})},e))):null,r>0?o(r,a):null,l?[...Array(l)].map(((t,e)=>(0,i.jsx)("div",{className:"tb_avg_rating_ico__ tb__icon tb-star-outline",style:{fontSize:a},children:(0,i.jsx)("div",{})},e))):null]})}},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});var i=a(47313),o=a(35179),n=a(46417);const l=i.lazy((()=>a.e(5867).then(a.bind(a,95867))));class s extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:s,Personalization:r}=this.props,c=!!s&&(7!==t.id&&4!==t.id&&36!==t.id),d=o.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(l,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var i=a(47313),o=a(16390),n=a(17739),l=(a(35179),a(25810),a(46417));const s=i.lazy((()=>Promise.all([a.e(622),a.e(584)]).then(a.bind(a,30584)))),r=i.lazy((()=>a.e(7531).then(a.bind(a,97531))));class c extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var a,i;const t=(null===(a=this.contentRef)||void 0===a||null===(i=a.current)||void 0===i?void 0:i.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:i,personalization:c,item:d,contentTitle:u,readMore:_,maxLength:m,textAlign:h,maxLines:v,isReadMore:p}=this.props,g={WebkitLineClamp:v,textAlign:a.textAlignment};h||a.textAlignment;let b=20==d.network.id?e:(0,n.Fx)(e);12==d.network.id&&(b=(0,o.ZP)(b));const f="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),w="".concat(t," ").concat(p?"":f," tb-cTBfont-").concat(a.font_varient);return(0,l.jsxs)("div",{className:w,ref:this.contentRef,style:g,children:[u?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(u)}):null,d.aiStatus?(0,l.jsx)(r,{aiSummary:d.aiSummary,type:null===c||void 0===c?void 0:c.ai_summary}):(0,l.jsx)(s,{data:d,content:b,Personalization:c})]})}}},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var i=a(47313),o=a(35179),n=a(46417);const l=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:l}=a[(null===e||void 0===e?void 0:e.aiNetwork)||(null===e||void 0===e?void 0:e.id)]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,n.jsx)("div",{className:i,style:{color:l},"tb-network":e.id,children:(0,n.jsx)("div",{})})},s=t=>{let{ThemeID:e}=t;const{className:a,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,n.jsx)("div",{className:a,style:{color:i},"tb-network":e})};class r extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,n.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>a?(0,n.jsx)(s,{ThemeID:a},i):(0,n.jsx)(l,{network:e},i))):null})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});var i=a(47313),o=a(17739),n=a(46417);const l=t=>{const{postTime:e,timeClass:a}=t;return(0,n.jsx)("div",{className:a,role:"status","aria-label":"post timestamp ".concat((0,o.Sy)(e)),children:(0,o.Sy)(e)})},s=(0,i.memo)(l)},14850:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>g});a(47313);var i=a(89239),o=a(55790),n=(a(90905),a(24576)),l=a(46417);const s=t=>{var e,a;let{author:s,personalization:r,postTime:c,network:d,ThemeRule:u,font:_,rating:m,size:h}=t;const v=!(!r.postAuthor||s.isInstaUser),p=m>0;return(0,l.jsxs)("div",{className:"tb_l_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:[(0,l.jsxs)("div",{className:"tb_l_author",children:[v?(0,l.jsx)(i.default,{author:s,network:d,authorClass:"tb_l_author_profile",size:h}):"",(0,l.jsx)("div",{className:"tb_l_author_info",children:null!==s&&void 0!==s&&s.aiStatus?(0,l.jsxs)("div",{className:"tb_l_authorname",children:[null===s||void 0===s||null===(e=s.avgRating)||void 0===e?void 0:e.avgRate," Based on ",null===s||void 0===s||null===(a=s.avgRating)||void 0===a?void 0:a.totalReviews," reviews"]}):(0,l.jsxs)(l.Fragment,{children:[v?(0,l.jsx)("div",{className:"tb_l_authorname",children:s.name}):"",r.postTime?(0,l.jsx)(o.default,{postTime:c,timeClass:"tb_l_time tb-cTBfont-".concat(u.font_varient),authorColor:u.authorColor}):""]})})]}),p?(0,l.jsxs)("div",{className:"tb_l_rating__",children:[(0,l.jsx)(n.default,{size:16,rating:m})," "]}):""]})};var r=a(35179),c=a(81349),d=a(84261);const u=t=>{let{itemData:e,wallID:a,ownerId:i,wall:o}=t;const n=3===e.type||5===e.type;!(!r.ZQ&&!r.Jx)&&(!!o.ThemeRule.aspectImageRatio&&o.ThemeRule.aspectImageRatio);return(0,l.jsxs)("div",{className:"tb_l_media_wrap",role:"button",tabIndex:"0","aria-label":"Post Pop up media wrapper",children:[n?(0,l.jsx)(c.Z,{itemData:e,IconClass:"tb_l_media_icon",show:!0,isCenter:!0}):null,(0,l.jsx)(d.default,{ImageClass:"tb_l_image",data:e,wallID:a,themeID:o.Personalization.widgetTheme,ownerId:i,size:100,ThemeRule:o.ThemeRule})]})};var _=a(62245),m=a(17739),h=a(26731);const v=r.ZQ?null:200,p=t=>{var e,a,i,o,n,c,d,p,g,b,f,w,x,j,N;let{itemData:T,personalization:I,ThemeRule:y,wallID:k,clickToShowPopUp:C,itemIndex:S,ownerId:P,wall:z}=t;const R={padding:I.padding/2},D=1!==T.type,E=I.trimcontent?(0,m.Sv)(T.content,v):T.content,A=null===T||void 0===T||null===(e=T.ugc_products)||void 0===e||null===(a=e[0])||void 0===a||null===(i=a.UgcProduct)||void 0===i?void 0:i.product_image;return(0,l.jsx)("div",{id:"tb-l-post-".concat(T.id),className:"tb_l_post_wrapper","tb-network":T.network.id,role:"article","aria-label":"Post ".concat(parseInt(S)+1,",").concat(E),style:R,tabIndex:"0",children:(0,l.jsxs)("div",{className:"tb_l_post_in",onClick:C(S,T),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,l.jsx)(s,{ownerId:P,postTime:T.createdAt,author:T.author,network:T.network,font:y,personalization:I,ThemeRule:y,mediaType:D,size:40,rating:T.rating}),r.ig&&y.hideContent?(0,l.jsx)("div",{className:"tb_l_contant_wrapper",children:(0,l.jsx)(_.default,{contentClass:"tb_l_content",item:T,content:E,font:y,ThemeRule:y,personalization:I,contentTitle:T.contentTitle})}):"",D?(0,l.jsx)("div",{className:"tb_l_media_list",children:(0,l.jsx)(u,{itemData:T,wallID:k,ownerId:P,wall:z},"img".concat(S,"_").concat(T.id))}):"",(null===T||void 0===T||null===(o=T.ugc_products)||void 0===o?void 0:o.length)>0?(0,l.jsx)("div",{className:"tb_l_p_list",children:(0,l.jsxs)("div",{className:"tb_l_p_wrp",children:[(0,l.jsx)("div",{className:"tb_l_p_",children:(0,l.jsx)(h.Z,{className:"tb_l_p_img",urls:{small:A,large:A,original:A}})}),(0,l.jsxs)("div",{className:"tb_l_p_info",children:[(0,l.jsx)("div",{className:"tb_l_p_t",children:null===T||void 0===T||null===(n=T.ugc_products)||void 0===n||null===(c=n[0])||void 0===c||null===(d=c.UgcProduct)||void 0===d?void 0:d.product_title}),(0,l.jsxs)("div",{className:"tb_l_p_p",children:[null===T||void 0===T||null===(p=T.ugc_products)||void 0===p||null===(g=p[0])||void 0===g?void 0:g.UgcProduct.price_currency_symbol,(null===T||void 0===T||null===(b=T.ugc_products)||void 0===b||null===(f=b[0])||void 0===f?void 0:f.UgcProduct.product_discount)>0?null===T||void 0===T||null===(w=T.ugc_products)||void 0===w||null===(x=w[0])||void 0===x?void 0:x.UgcProduct.product_discount:null===T||void 0===T||null===(j=T.ugc_products)||void 0===j||null===(N=j[0])||void 0===N?void 0:N.UgcProduct.product_price]})]})]})}):null]})})},g=t=>{let{postData:e,completeDataObject:a,adjustWidth:i,wall:o,clickToShowPopUp:n,onClickToCTA:s}=t;return(0,l.jsx)("div",{className:"tb_l_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const r=a[t];return(0,l.jsx)(p,{ownerId:o.Wall.owner,itemData:r,itemIndex:e,adjustWidth:i,personalization:o.Personalization,ThemeRule:o.ThemeRule,wallID:o.Wall.id,clickToShowPopUp:n,onClickToCTA:s,wall:o},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var i=a(84228);var o=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var n=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,o)=>{if("undefined"===typeof window)return o(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return o(i.ErrorMessage.URL_IS_NOT_DEFINED);let n=null;const l=new Image;l.addEventListener("load",(()=>{n&&window.clearTimeout(n),a({width:l.naturalWidth,height:l.naturalHeight})})),l.addEventListener("error",(t=>{n&&window.clearTimeout(n),o("".concat(t.type,": ").concat(t.message))})),l.src=t,e.timeout&&(n=window.setTimeout((()=>o(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var i=this&&this.__awaiter||function(t,e,a,i){return new(a||(a=Promise))((function(o,n){function l(t){try{r(i.next(t))}catch(e){n(e)}}function s(t){try{r(i.throw(t))}catch(e){n(e)}}function r(t){var e;t.done?o(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(l,s)}r((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const o=a(47313),n=a(65786);e.useImageSize=(t,e)=>{const[a,l]=(0,o.useState)(null),[s,r]=(0,o.useState)(!1),[c,d]=(0,o.useState)(null);return(0,o.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){r(!0),l(null);try{const{width:a,height:i}=yield(0,n.getImageSize)(t,e);l({width:a,height:i})}catch(c){d(c.toString())}finally{r(!1)}}))}),[t,e]),[a,{loading:s,error:c}]}},50247:()=>{}}]);