"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6166,5867],{97915:(t,e,c)=>{c.d(e,{Z:()=>u});var i=c(47313),s=c(43411),n=c(83773),o=c(6119),a=c(17739),r=c(46417);const d=(0,n.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),l=t=>'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n  <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n  ").concat(t.product_discount>0&&t.product_price>t.product_discount?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_discount,"</div>"):"","\n  ").concat(t.product_price>0?'<div class="tb_p_tooltip_price">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"","\n  </a>");class _ extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:c}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const s=(0,a.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(s),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(c==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(d,{children:(0,r.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(s),clickable:!0,html:l(t.UgcProduct)})})]},e)}))}):null}}const u=(0,s.$j)((t=>({appData:t.appData})))(_)},84261:(t,e,c)=>{c.r(e),c.d(e,{default:()=>l});var i=c(47313),s=c(43635),n=c(97915),o=c(2406),a=c(17739),r=c(98501),d=c(46417);class l extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const c=document.querySelector(".track".concat(this.props.data.id));c&&(c.setAttribute("data-height",e),c.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:c}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*c/t})}catch(c){this.setState({paddingBottom:100})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(c){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.data.postFileNew}}componentWillMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{ImageClass:t,data:e,wallID:c,themeID:i,ownerId:o,hotspot:l}=this.props,{imgUrl:_,paddingBottom:u}=this.state,h={paddingBottom:"".concat(u,"%")},v={backgroundImage:"url(".concat(_,")")},b=!!(e.hotspot&&e.ugc_products.length>0&&l);return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:h,children:[b?(0,d.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:{width:b?"":"100%"},children:[b?(0,d.jsx)(n.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:_,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":c,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,s.ht)(t)},alt:(0,a.P)(_)})]})]})}}},81349:(t,e,c)=>{c.d(e,{Z:()=>o});c(47313);var i=c(35179),s=c(95867),n=c(46417);const o=t=>{const{itemData:e,IconClass:c,isCenter:o,hideVideo:a,show:r}=t,d=3===e.type||5===e.type,l=7===e.network.id,_=!!(e.imageList&&e.imageList.length>0),u=1===e.isAudio,h=!!(e.ugc_products&&e.ugc_products.length>0),v=(0,n.jsx)(s.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),b=(0,n.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,n.jsx)("div",{})}),p=(0,n.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,n.jsx)("div",{})}),m=(0,n.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,n.jsx)("div",{})}),x=(0,n.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,n.jsx)("div",{})}),f=(0,n.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,n.jsx)("div",{})}),j=(0,n.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,n.jsx)("div",{})});return r?(0,n.jsxs)(n.Fragment,{children:[o&&(l||d)?(0,n.jsxs)("div",{className:"".concat(c," tb__media_ico_c"),children:[d&&!l?j:"",d&&l?v:""]}):null,h||_||d?(0,n.jsxs)("div",{className:"".concat(c," tb__media_ico_"),children:[h?f:"",_?b:"",o||!d||l||a?"":u?p:i.ZQ?x:m]}):null]}):null}},95867:(t,e,c)=>{c.r(e),c.d(e,{default:()=>a});var i=c(47313),s=c(35179),n=c(46417);const o=i.memo((t=>{let{network:e,networkClass:c}=t;const i="".concat(c," tb__icon tb_ico_default");switch(e.id){case 1:return(0,n.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,n.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,n.jsx)("div",{})});case 3:return(0,n.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,n.jsx)("div",{})});case 4:return(0,n.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,n.jsx)("div",{})})]});case 5:return(0,n.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,n.jsx)("div",{})});case 6:return(0,n.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,n.jsx)("div",{})})]});case 7:return(0,n.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,n.jsx)("div",{})})]});case 8:return(0,n.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,n.jsx)("div",{})});case 10:return(0,n.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,n.jsx)("div",{})});case 11:return(0,n.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,n.jsx)("div",{})});case 12:return(0,n.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,n.jsx)("div",{})});case 15:return(0,n.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,n.jsx)("div",{})});case 19:return(0,n.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,n.jsx)("div",{})});case 20:return(0,n.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,n.jsx)("div",{})})]});case 21:return(0,n.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,n.jsx)("div",{})});case 23:return(0,n.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,n.jsx)("div",{})});case 25:return(0,n.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,n.jsx)("div",{})});case 26:return(0,n.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,n.jsx)("div",{})})]});case 28:return s.ZQ?(0,n.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,n.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,n.jsx)("div",{})})]});case 29:return s.ZQ?(0,n.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,n.jsx)("div",{})}):(0,n.jsx)("div",{className:"".concat(i," tb-onsite-upload-default"),children:(0,n.jsx)("div",{})});case 30:case 32:return(0,n.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,n.jsx)("div",{})});case 31:return(0,n.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,n.jsx)("div",{})})]});case 33:return(0,n.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,n.jsx)("div",{})})]});case 34:return(0,n.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,n.jsx)("div",{})})]});case 35:return(0,n.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,n.jsx)("div",{})});case 36:return(0,n.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,n.jsx)("div",{})})]});case 37:return(0,n.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,n.jsx)("div",{})}),(0,n.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,n.jsx)("div",{})})]});default:return""}}));class a extends i.PureComponent{render(){return(0,n.jsx)(o,{...this.props})}}},25810:(t,e,c)=>{c.r(e),c.d(e,{default:()=>a});var i=c(47313),s=c(35179),n=c(46417);const o=i.lazy((()=>c.e(5867).then(c.bind(c,95867))));class a extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:c,isDefault:a,Personalization:r}=this.props,d=!!a&&(7!==t.id&&4!==t.id&&36!==t.id),l=s.ZQ&&36==t.id?"tagembed":t.icon;return d?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(l.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(o,{network:t,networkClass:e})]})}}},11502:(t,e,c)=>{c.d(e,{Z:()=>n});var i=c(17739),s=c(46417);const n=t=>{let{ThemeRule:e,btnClass:c}=t;const n={fontFamily:e.css_font};return(0,s.jsx)("div",{className:"tb_shop_btn_wrap ".concat(c),children:(0,s.jsx)("div",{className:"tb_shop_btn".concat(e.postHover||(0,i.mD)(4)||(0,i.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:n,children:e.shoppingText})})}},44084:(t,e,c)=>{function i(t,e,c){return Array.prototype.slice.call(t,e,c)}function s(t){return t.bind.apply(t,[null].concat(i(arguments,1)))}function n(t,e){return typeof e===t}c.d(e,{r:()=>it});var o=Array.isArray;function a(t){return o(t)?t:[t]}function r(t,e){a(t).forEach(e)}s(n,"function"),s(n,"string"),s(n,"undefined");var d=Object.keys;function l(t){return i(arguments,1).forEach((function(e){!function(t,e,c){if(t){var i=d(t);i=c?i.reverse():i;for(var s=0;s<i.length;s++){var n=i[s];if("__proto__"!==n&&!1===e(t[n],n))break}}}(e,(function(c,i){t[i]=e[i]}))})),t}var _="splide";var u="visible",h="hidden",v="refresh",b="updated",p="destroy";function m(t){var e=t?t.event.bus:document.createDocumentFragment(),c=function(){var t=[];function e(t,e,c){r(t,(function(t){t&&r(e,(function(e){e.split(" ").forEach((function(e){var i=e.split(".");c(t,i[0],i[1])}))}))}))}return{bind:function(c,i,s,n){e(c,i,(function(e,c,i){var o="addEventListener"in e,a=o?e.removeEventListener.bind(e,c,s,n):e.removeListener.bind(e,s);o?e.addEventListener(c,s,n):e.addListener(s),t.push([e,c,i,s,a])}))},unbind:function(c,i,s){e(c,i,(function(e,c,i){t=t.filter((function(t){return!!(t[0]!==e||t[1]!==c||t[2]!==i||s&&t[3]!==s)||(t[4](),!1)}))}))},dispatch:function(t,e,c){var i;return"function"===typeof CustomEvent?i=new CustomEvent(e,{bubbles:!0,detail:c}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!1,c),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),t.length=0}}}();return t&&t.event.on(p,c.destroy),l(c,{bus:e,on:function(t,i){c.bind(e,a(t).join(" "),(function(t){i.apply(i,o(t.detail)?t.detail:[])}))},off:s(c.unbind,e),emit:function(t){c.dispatch(e,t,i(arguments,1))}})}var x=_,f=_+"__slide",j=f+"__container";function g(t){t.length=0}function N(t,e,c){return Array.prototype.slice.call(t,e,c)}function y(t){return t.bind(null,...N(arguments,1))}function w(t,e){return typeof e===t}const E=Array.isArray;y(w,"function");const k=y(w,"string"),S=y(w,"undefined");function I(t){return null===t}function C(t){return E(t)?t:[t]}function W(t,e){C(t).forEach(e)}function M(t,e){return t.push(...C(e)),t}function A(t,e,c){t&&W(e,(e=>{e&&t.classList[c?"add":"remove"](e)}))}function D(t,e){A(t,k(e)?e.split(" "):e,!0)}function L(t,e){W(e,t.appendChild.bind(t))}function H(t,e){return t instanceof HTMLElement&&(t.msMatchesSelector||t.matches).call(t,e)}function T(t,e){return e?function(t,e){const c=t?N(t.children):[];return e?c.filter((t=>H(t,e))):c}(t,e)[0]:t.firstElementChild}const O=Object.keys;function P(t,e,c){if(t){let i=O(t);i=c?i.reverse():i;for(let c=0;c<i.length;c++){const s=i[c];if("__proto__"!==s&&!1===e(t[s],s))break}}return t}function z(t,e){W(t,(t=>{W(e,(e=>{t&&t.removeAttribute(e)}))}))}function F(t,e,c){var i;!I(i=e)&&w("object",i)?P(e,((e,c)=>{F(t,c,e)})):W(t,(t=>{I(c)||""===c?z(t,e):t.setAttribute(e,String(c))}))}function B(t,e,c){const i=document.createElement(t);return e&&(k(e)?D(i,e):F(i,e)),c&&L(c,i),i}function U(t,e,c){if(S(c))return getComputedStyle(t)[e];I(c)||(t.style[e]="".concat(c))}function Z(t,e){return e?N(t.querySelectorAll(e)):[]}function R(t,e){A(t,e,!1)}function Q(t){return k(t)?t:t?"".concat(t,"px"):""}const q="splide";const{min:V,max:Y,floor:$,ceil:G,abs:J}=Math;const K="".concat(f,"__row"),X="".concat(f,"--col"),tt={rows:1,cols:1,dimensions:[],gap:{}};function et(t){function e(){const{rows:e,cols:c,dimensions:i}=t;return E(i)&&i.length?i:[[e,c]]}return{get:function(t){const c=e();return c[V(t,c.length-1)]},getAt:function(t){const c=e();let i,s,n=0;for(let e=0;e<c.length;e++){const o=c[e];if(i=o[0]||1,s=o[1]||1,n+=i*s,t<n)break}return function(t,e){if(!t)throw new Error("[".concat(q,"] ").concat(e||""))}(i&&s,"Invalid dimension"),[i,s]}}}function ct(t,e,c){const{on:i,destroy:s}=m(t),{Components:n,options:o}=t,{resolve:a}=n.Direction,{forEach:r}=n.Slides;function d(t,e){const c=T(t,".".concat(j)),i=T(c||t,"img");i&&i.src&&(U(c||t,"background",e?"":'center/cover no-repeat url("'.concat(i.src,'")')),U(i,"display",e?"":"none"))}function l(t){return Z(t,".".concat(K))}function _(t){return Z(t,".".concat(X))}function v(t,e){_(t).forEach((t=>{F(t,"tabindex",e?0:null)}))}function b(t){v(t.slide,!0)}function p(t){v(t.slide,!1)}return{mount:function(){r((i=>{const{slide:s}=i,[n,o]=c.get(i.isClone?i.slideIndex:i.index);!function(t,c){const{row:i}=e.gap,s="calc(".concat(100/t,"%").concat(i?" - ".concat(Q(i)," * ").concat((t-1)/t):"",")");l(c).forEach(((t,e,c)=>{U(t,"height",s),U(t,"display","flex"),U(t,"margin","0 0 ".concat(Q(i)," 0")),U(t,"padding",0),e===c.length-1&&U(t,"marginBottom",0)}))}(n,s),function(t,c){const{col:i}=e.gap,s="calc(".concat(100/t,"%").concat(i?" - ".concat(Q(i)," * ").concat((t-1)/t):"",")");_(c).forEach(((t,e,c)=>{U(t,"width",s),e!==c.length-1&&U(t,a("marginRight"),Q(i))}))}(o,s),_(i.slide).forEach(((e,c)=>{var s;e.id="".concat(i.slide.id,"-col").concat((s=c+1)<10?"0".concat(s):"".concat(s)),t.options.cover&&d(e)}))})),o.slideFocus&&(i(u,b),i(h,p))},destroy:function(){r((t=>{const{slide:e}=t;v(e,!1),l(e).forEach((t=>{z(t,"style")})),_(e).forEach((t=>{d(t,!0),z(t,"style")}))})),s()}}}function it(t,e,c){const{on:i,off:s}=m(t),{Elements:n}=e,o={},a=et(o),r=ct(t,o,a),d="".concat(x,"--grid"),l=[];function _(){var e,r;e=o,C(r||O(e)).forEach((t=>{delete e[t]})),function(t){N(arguments,1).forEach((e=>{P(e,((c,i)=>{t[i]=e[i]}))}))}(o,tt,c.grid||{}),!function(){if(c.grid){const{rows:t,cols:e,dimensions:c}=o;return t>1||e>1||E(c)&&c.length>0}return!1}()?j()&&(u(),h()):(u(),M(l,n.slides),D(t.root,d),L(n.list,function(){const t=[];let e,c,i=0,s=0;return l.forEach(((n,o)=>{const[r,d]=a.getAt(o);s||(i||(e=B(n.tagName,f),t.push(e)),c=function(t,e,c){const i="li"===e.tagName.toLowerCase()?"ul":"div";return B(i,K,c)}(0,n,e)),function(t,e,c){D(e,X),L(c,e)}(0,n,c),++s>=d&&(s=0,i=++i>=r?0:i)})),t}()),s(v),i(v,p),h())}function u(){if(j()){const{slides:e}=n;r.destroy(),l.forEach((t=>{R(t,X),L(n.list,t)})),W(e,(t=>{t&&t.parentNode&&t.parentNode.removeChild(t)})),R(t.root,d),g(e),M(e,l),g(l),s(v)}}function h(){t.refresh()}function p(){j()&&r.mount()}function j(){return e=t.root,c=d,e&&e.classList.contains(c);var e,c}return{mount:function(){_(),i(b,_)},destroy:u}}},2406:(t,e,c)=>{e.Ad=void 0;var i=c(84228);var s=c(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var n=c(22537)},84228:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,c)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=c(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((c,s)=>{if("undefined"===typeof window)return s(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return s(i.ErrorMessage.URL_IS_NOT_DEFINED);let n=null;const o=new Image;o.addEventListener("load",(()=>{n&&window.clearTimeout(n),c({width:o.naturalWidth,height:o.naturalHeight})})),o.addEventListener("error",(t=>{n&&window.clearTimeout(n),s("".concat(t.type,": ").concat(t.message))})),o.src=t,e.timeout&&(n=window.setTimeout((()=>s(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,c){var i=this&&this.__awaiter||function(t,e,c,i){return new(c||(c=Promise))((function(s,n){function o(t){try{r(i.next(t))}catch(e){n(e)}}function a(t){try{r(i.throw(t))}catch(e){n(e)}}function r(t){var e;t.done?s(t.value):(e=t.value,e instanceof c?e:new c((function(t){t(e)}))).then(o,a)}r((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const s=c(47313),n=c(65786);e.useImageSize=(t,e)=>{const[c,o]=(0,s.useState)(null),[a,r]=(0,s.useState)(!1),[d,l]=(0,s.useState)(null);return(0,s.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){r(!0),o(null);try{const{width:c,height:i}=yield(0,n.getImageSize)(t,e);o({width:c,height:i})}catch(d){l(d.toString())}finally{r(!1)}}))}),[t,e]),[c,{loading:a,error:d}]}},37210:()=>{}}]);