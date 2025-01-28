"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2578],{60531:(e,t,a)=>{a.d(t,{A:()=>i});var o=a(9950),l=a(44414);class s extends o.PureComponent{render(){const{cta:e,ctaClass:t,postCta:a,onClickToCTA:o,item:s}=this.props,i=!(!a||1!==a.status),r={color:i?a.color:e.color,backgroundColor:i?a.background:e.background};return(0,l.jsxs)("div",{className:t,style:r,role:"button",tabIndex:"0","aria-label":"CTA Button",onClick:t=>{t.stopPropagation(),o(s),window.open("".concat(i?a.url:e.url),"_blank")},children:[" ",i?a.text:e.text]})}}const i=s},28185:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var o=a(89379),l=a(9950),s=a(66345),i=a(73878),r=a(53556),n=a(14478),d=a(61302),c=a(52867),p=a(78262),u=a(3720),h=a(15537),_=a(44414);const b=e=>{var t;let{itemData:a,wall:o,wallID:l,themeID:i,ownerId:r,ThemeRule:n}=e;const d=(s.uS||"tagembed"==(null===o||void 0===o||null===(t=o.User)||void 0===t?void 0:t.userDatabaseType))&&n.aspectImageRatio?n.aspectImageRatio:100,c=(3===a.type||5===a.type)&&1==o.ThemeRule.autoPlay;return(0,_.jsxs)("div",{className:"tb_ht_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[(0,_.jsx)(h.A,{itemData:a,IconClass:"tb_ht_media_icon",show:s.uS,isCenter:!1}),c?(0,_.jsx)(u.A,{VideoClass:"tb_ht_video",data:a,wallID:l,themeID:o.Personalization.widgetTheme,ownerId:r,size:s.uS?d:100,isCover:!0,muted:!0,autoPlay:!0}):(0,_.jsx)(p.default,{ImageClass:"tb_ht_image",data:a,wallID:l,themeID:i,ownerId:r,size:d,hotspot:!1})]})};var m=a(44463),g=a(47713),w=a(60531);const v=e=>{let{itemData:t,personalization:a,ThemeRule:o,wallID:i,ownerId:r,onClickToCTA:n,clickToShowPopUp:d,itemIndex:p,adjustWidth:u,wall:h,onClickPopUpSlider:v}=e;const x=81!=a.widgetTheme,f=(0,l.useRef)(null),T=0==o.postHover&&s.HY?"light":"dark",D=s.MH?"tb_ht_color_overlay":"tb_ht_post_overlay-"+T,j={backgroundColor:s.MH?o.cardColor:""},k={padding:a.padding/2},C=1!==t.type,S=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status)&&(!!s.uS||(!x||!s.MH)),I=x&&s.MH?"50%":null,P=!!(s.HY&&""!=o.shoppingText&&t.ugc_products.length>0),R=!!(s.HY&&t.ugc_products&&t.ugc_products.length>0),y=!(!s.HY||!R||0!==t.hotspot),N=!!(s.HY&&t.hotspot&&R);return(0,l.useEffect)((()=>{s.HY&&(0,c._7)(f)}),[]),(0,l.useEffect)((()=>{t.isPopUp&&v(p,t)}),[p,t.isPopUp,t]),(0,_.jsx)("div",{id:"tb-ht-post-".concat(t.id),className:"tb_ht_post_wrapper",style:k,"tb-network":t.network.id,"tb-product":y?1:N?2:0,ref:f,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"area-label":t.content,role:"article",children:(0,_.jsx)("div",{className:"tb_ht_post_in",onClick:d(p,t),style:{borderRadius:I},role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,_.jsxs)("div",{className:"tb_ht_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[C?(0,_.jsx)(b,{itemData:t,wallID:i,themeID:a.widgetTheme,ownerId:r,ThemeRule:o,wall:h}):"",(0,_.jsxs)("div",{className:"tb_ht_post_details",children:[(0,_.jsx)("div",{className:"tb_ht_social_",children:(0,_.jsx)(m.default,{networkClass:"tb_ht_social_ico_",network:t.network,ThemeRule:o,isDefault:1===o.iconType,Personalization:a})}),P?(0,_.jsx)(g.A,{ThemeRule:o,btnClass:"tb_ht_btn_wrap"}):null,S?(0,_.jsxs)("div",{className:"tb_ht_post_cta",onClick:e=>{e.stopPropagation()},children:[(0,_.jsx)(w.A,{ctaClass:"tb_ht_post_cta_btn",cta:t.cta,item:t,onClickToCTA:n})," "]}):""]}),(0,_.jsx)("div",{className:"tb_ht_post_overlay ".concat(D),style:j,children:(0,_.jsx)("div",{})})]})})})};a(61038);class x extends l.Component{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:a,hasMoreData:o,getDataNextSteps:l}=this.props;o&&l(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,a,e.heightEvent)},this.onUpdateData=e=>{},this.autoScrollSlider=(e,t,a,o)=>{var l;const{wall:i}=this.props,r=s.uS||"tagembed"==(null===i||void 0===i||null===(l=i.User)||void 0===l?void 0:l.userDatabaseType),n=r?e._o.perPage+e.index:e.index;e.length-n===(r?1:e._o.perPage)&&this.requestData()},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:a,onClickPopUpSlider:o,wall:l,parentID:s}=this.props,i=l.ThemeRule.multiRow;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,l)=>{if(e.classList){const l=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var i=l[0];String(l[0]).includes("tb_")&&(i=String(l[0]).replace("tb_",""));const r=t.findIndex((e=>e==i));let n=document.querySelectorAll("#".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],l=t.getAttribute("p_id");String(s)===String(l)&&t.addEventListener("click",(e=>{e.preventDefault();const t=a[i];o(r,t)}))}}}))}else if(2==i){Object.values(e)[5].map(((e,l)=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{if(e.classList){const i=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var l=i[0];String(i[0]).includes("tb_")&&(l=String(i[0]).replace("tb_",""));const r=t.findIndex((e=>e==l));let n=document.querySelectorAll(".tb_hs_post_container #".concat(e.id));for(let e=0;e<n.length;e++){let t=n[e],i=t.getAttribute("p_id");String(s)===String(i)&&t.addEventListener("click",(e=>{e.preventDefault();const t=a[l];o(r,t)}))}}}))}))}))}}render(){var e,t;const{postData:a,completeDataObject:l,wall:i,clickToShowPopUp:n,onClickToCTA:c,parentID:p,adjustWidth:u,cardNumber:h,onClickPopUpSlider:b}=this.props,m=s.uS||"tagembed"==(null===i||void 0===i||null===(e=i.User)||void 0===e?void 0:e.userDatabaseType),g=p,w=i.ThemeRule.numberOfCoumn,x=i.ThemeRule.mobileColumn,f=i.ThemeRule.slidePost,T=i.ThemeRule.slideDuration,D=i.Personalization.autoScrollStatus,j=m?i.ThemeRule.multiRow:1,k=m&&void 0!==(null===(t=i.Personalization)||void 0===t?void 0:t.clonePost)&&0===i.Personalization.clonePost?{clones:0}:{},C=1!=D?!(Object.keys(k).length>0)&&(m?"slide":"loop"):m?"slide":"loop",S=(0,o.A)((0,o.A)({},k),{},{grid:{rows:j},type:1!==D&&C,rewind:!!m,rewindSpeed:1e3,interval:1===f&&parseInt(T)>0?1e3*parseInt(T):5e3,perPage:s.HY?h:w>0?w:5,perMove:1,gap:0,autoplay:1===f,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:s.HY?h:x>0?x:1},767:{perPage:s.HY?h:x>0?x:2},991:{perPage:s.HY?h:x>0?x:3},1200:{perPage:s.HY?h:w>0?w:4},1400:{perPage:s.HY?h:w>0?w:5},1600:{perPage:s.HY?h:w>0?w:6}}});return""!=p?(0,_.jsx)("div",{className:"tb_ht_post_container",children:(0,_.jsxs)(r.eB,{hasTrack:!1,className:"tb_ht_post_slider",options:S,extensions:{Grid:d.x},ref:e=>this.inputRefs[g]=e,onMove:this.autoScrollSlider,children:[(0,_.jsx)(r.v9,{children:(i.ThemeRule.multiRow>1&&1!==a.length&&a.length%2!==0?a.pop():a)&&a&&a.length>0&&a.map(((e,t)=>{const a=l[e];return(0,_.jsx)(r.Nn,{style:{margin:0,padding:0},className:"tb_".concat(a.id),p_id:p,children:(0,_.jsx)(v,{itemData:a,itemIndex:t,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:n,wallID:i.Wall.id,onClickToCTA:c,adjustWidth:u,wall:i,onClickPopUpSlider:b})},t)}))}),(0,_.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_ht_arrow_wrapper_",children:[(0,_.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--prev tb_ht_arrow tb_ht_arrow_left__ tb__icon tb-arrow-left-alt",role:"button","aria-label":"Go to previous slide",children:(0,_.jsx)("div",{})}),(0,_.jsx)("div",{className:"tb_ht_arrow splide__arrow splide__arrow--next  tb_ht_arrow_right__ tb__icon tb-arrow-right-alt",role:"button","aria-label":"Go to next slide",children:(0,_.jsx)("div",{})})]})]})}):null}}const f=(0,l.memo)((0,i.Ng)((e=>({})),(e=>({getDataNextSteps:(t,a,o,l,s,i,r,d)=>e((0,n.H5)(t,a,o,l,s,i,r,d))})))(x))}}]);