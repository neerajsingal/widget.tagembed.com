"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[82],{7138:(e,t,o)=>{o.d(t,{Z:()=>s});var l=o(47313),a=o(46417);class i extends l.PureComponent{render(){const{cta:e,ctaClass:t,postCta:o,onClickToCTA:l,item:i}=this.props,s=!(!o||1!==o.status),r={color:s?o.color:e.color,backgroundColor:s?o.background:e.background};return(0,a.jsxs)("div",{className:t,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:t=>{t.stopPropagation(),l(i),window.open("".concat(s?o.url:e.url),"_blank")},children:[" ",s?o.text:e.text]})}}const s=i},76254:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var l=o(47313),a=o(35179),i=o(43411),s=o(11774),r=o(43635),n=o(44084),d=o(17739),c=o(84261),p=o(64442),u=o(81349),h=o(46417);const _=e=>{var t;let{itemData:o,wall:l,wallID:i,themeID:s,ownerId:r,ThemeRule:n}=e;const d=(a.ZQ||"tagembed"==(null===l||void 0===l||null===(t=l.User)||void 0===t?void 0:t.userDatabaseType))&&n.aspectImageRatio?n.aspectImageRatio:100,_=(3===o.type||5===o.type)&&1==l.ThemeRule.autoPlay;return(0,h.jsxs)("div",{className:"tb_ht_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[(0,h.jsx)(u.Z,{itemData:o,IconClass:"tb_ht_media_icon",show:a.ZQ,isCenter:!1}),_?(0,h.jsx)(p.Z,{VideoClass:"tb_ht_video",data:o,wallID:i,themeID:l.Personalization.widgetTheme,ownerId:r,size:a.ZQ?d:100,isCover:!0,muted:!0,autoPlay:!0}):(0,h.jsx)(c.default,{ImageClass:"tb_ht_image",data:o,wallID:i,themeID:s,ownerId:r,size:d,hotspot:!1})]})};var b=o(25810),g=o(11502),m=o(7138);const v=e=>{let{itemData:t,personalization:o,ThemeRule:i,wallID:s,ownerId:r,onClickToCTA:n,clickToShowPopUp:c,itemIndex:p,adjustWidth:u,wall:v,onClickPopUpSlider:w}=e;const x=81!=o.widgetTheme,P=(0,l.useRef)(null),f=0==i.postHover&&a.ig?"light":"dark",T=a.Jx?"tb_ht_color_overlay":"tb_ht_post_overlay-"+f,j={backgroundColor:a.Jx?i.cardColor:""},k={padding:o.padding/2},C=1!==t.type,D=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status)&&(!!a.ZQ||(!x||!a.Jx)),I=x&&a.Jx?"50%":null,S=!!(a.ig&&""!=i.shoppingText&&t.ugc_products.length>0),R=!!(a.ig&&t.ugc_products&&t.ugc_products.length>0),y=!(!a.ig||!R||0!==t.hotspot),N=!!(a.ig&&t.hotspot&&R);return(0,l.useEffect)((()=>{(0,d.YN)(P)}),[]),(0,l.useEffect)((()=>{t.isPopUp&&w(p,t)}),[p,t.isPopUp,t]),(0,h.jsx)("div",{id:"tb-ht-post-".concat(t.id),className:"tb_ht_post_wrapper",style:k,"tb-network":t.network.id,"tb-product":y?1:N?2:0,ref:P,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"area-label":t.content,role:"article",children:(0,h.jsx)("div",{className:"tb_ht_post_in",style:{borderRadius:I},role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,h.jsxs)("div",{className:"tb_ht_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[C?(0,h.jsx)(_,{itemData:t,wallID:s,themeID:o.widgetTheme,ownerId:r,ThemeRule:i,wall:v},"img".concat(p,"_").concat(t.id)):"",(0,h.jsxs)("div",{className:"tb_ht_post_details",children:[(0,h.jsx)("div",{className:"tb_ht_social_",children:(0,h.jsx)(b.default,{networkClass:"tb_ht_social_ico_",network:t.network,ThemeRule:i,isDefault:1===i.iconType,Personalization:o})}),S?(0,h.jsx)(g.Z,{ThemeRule:i,btnClass:"tb_ht_btn_wrap"}):null,D?(0,h.jsxs)("div",{className:"tb_ht_post_cta",onClick:e=>{e.stopPropagation()},children:[(0,h.jsx)(m.Z,{ctaClass:"tb_ht_post_cta_btn",cta:t.cta,item:t,onClickToCTA:n})," "]}):""]}),(0,h.jsx)("div",{className:"tb_ht_post_overlay ".concat(T),style:j,children:(0,h.jsx)("div",{})})]})})})};o(37210);class w extends l.Component{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:o,hasMoreData:l,getDataNextSteps:a}=this.props,i=t.Personalization.autoScrollStatus;l&&1==i&&a(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,o,e.heightEvent)},this.autoScrollSlider=(e,t,o,l)=>{const{wall:i}=this.props;if(1==i.Personalization.autoScrollStatus){var s;const t=a.ZQ||"tagembed"==(null===i||void 0===i||null===(s=i.User)||void 0===s?void 0:s.userDatabaseType),o=t?e._o.perPage+e.index:e.index;e.length-o===(t?1:e._o.perPage)&&this.requestData()}},this.onClickToPopUP=(e,t,o,l)=>{try{var a;const{postData:e,onClickPopUpSlider:o,completeDataObject:l}=this.props;o(e.findIndex((e=>{var o;return e==(null===t||void 0===t||null===(o=t.slide)||void 0===o?void 0:o.getAttribute("postId"))})),l[null===t||void 0===t||null===(a=t.slide)||void 0===a?void 0:a.getAttribute("postId")])}catch(i){console.warn("Error in onClickToPopUP",i)}},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:o,onClickPopUpSlider:l,wall:a,parentID:i}=this.props,s=a.ThemeRule.multiRow;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,a)=>{if(e.classList){const a=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var s=a[0];String(a[0]).includes("tb_")&&(s=String(a[0]).replace("tb_",""));const r=t.findIndex((e=>e==s));let n=document.querySelectorAll("#".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],a=t.getAttribute("p_id");String(i)===String(a)&&t.addEventListener("click",(e=>{e.preventDefault();const t=o[s];l(r,t)}))}}}))}else if(2==s){Object.values(e)[5].map(((e,a)=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{if(e.classList){const s=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var a=s[0];String(s[0]).includes("tb_")&&(a=String(s[0]).replace("tb_",""));const r=t.findIndex((e=>e==a));let n=document.querySelectorAll(".tb_hs_post_container #".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],s=t.getAttribute("p_id");String(i)===String(s)&&t.addEventListener("click",(e=>{e.preventDefault();const t=o[a];l(r,t)}))}}}))}))}))}}render(){var e,t;const{postData:o,completeDataObject:l,wall:i,clickToShowPopUp:r,onClickToCTA:d,parentID:c,adjustWidth:p,cardNumber:u,onClickPopUpSlider:_}=this.props,b=a.ZQ||"tagembed"==(null===i||void 0===i||null===(e=i.User)||void 0===e?void 0:e.userDatabaseType),g=c,m=i.ThemeRule.numberOfCoumn,w=i.ThemeRule.mobileColumn,x=i.ThemeRule.slidePost,P=i.ThemeRule.slideDuration,f=i.Personalization.autoScrollStatus,T=b?i.ThemeRule.multiRow:1,j=b&&void 0!==(null===(t=i.Personalization)||void 0===t?void 0:t.clonePost)&&0===i.Personalization.clonePost?{clones:0}:{},k=1!=f?!(Object.keys(j).length>0)&&(b?"slide":"loop"):b?"slide":"loop",C={...j,grid:{rows:T},type:1!==f&&k,rewind:!!b,rewindSpeed:1e3,interval:1===x&&parseInt(P)>0?1e3*parseInt(P):5e3,perPage:a.ig?u:m>0?m:5,perMove:1,gap:0,autoplay:1===x,padding:0,pagination:!1,arrows:(null===o||void 0===o?void 0:o.length)>1,breakpoints:{560:{perPage:a.ig?u:w>0?w:1},767:{perPage:a.ig?u:w>0?w:2},991:{perPage:a.ig?u:w>0?w:3},1200:{perPage:a.ig?u:m>0?m:4},1400:{perPage:a.ig?u:m>0?m:5},1600:{perPage:a.ig?u:m>0?m:6}}};return""!=c?(0,h.jsx)("div",{className:"tb_ht_post_container",children:(0,h.jsxs)(s.tv,{hasTrack:!1,className:"tb_ht_post_slider",options:C,extensions:{Grid:n.r},ref:e=>this.inputRefs[g]=e,onMove:this.autoScrollSlider,onClick:this.onClickToPopUP,children:[(0,h.jsx)(s.Gj,{children:(i.ThemeRule.multiRow>1&&1!==o.length&&o.length%2!==0?o.pop():o)&&o&&o.length>0&&o.map(((e,t)=>{const o=l[e];return(0,h.jsx)(s.jw,{style:{margin:0,padding:0},className:"tb_".concat(o.id),p_id:c,postId:null===o||void 0===o?void 0:o.id,children:(0,h.jsx)(v,{itemData:o,itemIndex:t,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:r,wallID:i.Wall.id,onClickToCTA:d,adjustWidth:p,wall:i,onClickPopUpSlider:_})},"SplideSlide_".concat(o.id))}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_ht_arrow_wrapper_",children:[(0,h.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--prev tb_ht_arrow tb_ht_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,h.jsx)("div",{})}),(0,h.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--next  tb_ht_arrow_right__ tb__icon tb-arrow-right-alt",role:"button","aria-label":"Go to next slide",children:(0,h.jsx)("div",{})})]})]})}):null}}const x=(0,l.memo)((0,i.$j)((e=>({})),(e=>({getDataNextSteps:(t,o,l,a,i,s,n,d)=>e((0,r.Sx)(t,o,l,a,i,s,n,d))})))(w))}}]);