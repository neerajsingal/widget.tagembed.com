"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7058],{3720:(t,e,n)=>{n.d(e,{A:()=>l});var o=n(9950),i=n(98776),r=n(38092),c=n.n(r),s=n(14478),a=n(66345),d=(n(45565),n(44414));const u=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class l extends o.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:n}=await(0,i.pG)(e.postFileNew);this.setState({paddingBottom:100*n/t})}catch(n){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{const{videoLoaded:e}=this.state;e!=t&&this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(a.uS,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(a.uS,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(n){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:n,isCover:o,controls:i,autoPlay:r,handleVideoEnded:l,muted:f}=this.props,{paddingBottom:h,videoLoaded:p,isVisible:m}=this.state,v={paddingBottom:"".concat(h,"%")},g=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,d.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:v,ref:this.videoRef,children:(0,d.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:u(g,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,s.zi)(t,e.id)},autoPlay:r,muted:f,volume:r?1:0,playsinline:!0,onReady:t=>{a.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:a.HY?m:r,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:l||null})})}}},44463:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var o=n(9950),i=n(66345),r=n(44414);const c=o.lazy((()=>n.e(620).then(n.bind(n,20620))));class s extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:n,isDefault:s,Personalization:a}=this.props,d=!!s&&(7!==t.id&&4!==t.id&&36!==t.id),u=i.uS&&36==t.id?"tagembed":t.icon;return d?(0,r.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(u.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,r.jsx)("div",{})}):(0,r.jsxs)(o.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(c,{network:t,networkClass:e})]})}}},47713:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(52867),i=n(44414);const r=t=>{let{ThemeRule:e,btnClass:n}=t;const r={fontFamily:e.css_font};return(0,i.jsx)("div",{className:"tb_shop_btn_wrap ".concat(n),children:(0,i.jsx)("div",{className:"tb_shop_btn".concat(e.postHover||(0,o.Nv)(4)||(0,o.Nv)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:r,children:e.shoppingText})})}},61302:(t,e,n)=>{function o(t,e,n){return Array.prototype.slice.call(t,e,n)}function i(t){return t.bind.apply(t,[null].concat(o(arguments,1)))}function r(t,e){return typeof e===t}n.d(e,{x:()=>ot});var c=Array.isArray;function s(t){return c(t)?t:[t]}function a(t,e){s(t).forEach(e)}i(r,"function"),i(r,"string"),i(r,"undefined");var d=Object.keys;function u(t){return o(arguments,1).forEach((function(e){!function(t,e,n){if(t){var o=d(t);o=n?o.reverse():o;for(var i=0;i<o.length;i++){var r=o[i];if("__proto__"!==r&&!1===e(t[r],r))break}}}(e,(function(n,o){t[o]=e[o]}))})),t}var l="splide";var f="visible",h="hidden",p="refresh",m="updated",v="destroy";function g(t){var e=t?t.event.bus:document.createDocumentFragment(),n=function(){var t=[];function e(t,e,n){a(t,(function(t){t&&a(e,(function(e){e.split(" ").forEach((function(e){var o=e.split(".");n(t,o[0],o[1])}))}))}))}return{bind:function(n,o,i,r){e(n,o,(function(e,n,o){var c="addEventListener"in e,s=c?e.removeEventListener.bind(e,n,i,r):e.removeListener.bind(e,i);c?e.addEventListener(n,i,r):e.addListener(i),t.push([e,n,o,i,s])}))},unbind:function(n,o,i){e(n,o,(function(e,n,o){t=t.filter((function(t){return!!(t[0]!==e||t[1]!==n||t[2]!==o||i&&t[3]!==i)||(t[4](),!1)}))}))},dispatch:function(t,e,n){var o,i=!0;return"function"===typeof CustomEvent?o=new CustomEvent(e,{bubbles:i,detail:n}):(o=document.createEvent("CustomEvent")).initCustomEvent(e,i,!1,n),t.dispatchEvent(o),o},destroy:function(){t.forEach((function(t){t[4]()})),t.length=0}}}();return t&&t.event.on(v,n.destroy),u(n,{bus:e,on:function(t,o){n.bind(e,s(t).join(" "),(function(t){o.apply(o,c(t.detail)?t.detail:[])}))},off:i(n.unbind,e),emit:function(t){n.dispatch(e,t,o(arguments,1))}})}var b=l,y=l+"__slide",_=y+"__container";function w(t){t.length=0}function E(t,e,n){return Array.prototype.slice.call(t,e,n)}function S(t){return t.bind(null,...E(arguments,1))}function I(t,e){return typeof e===t}const k=Array.isArray;S(I,"function");const N=S(I,"string"),x=S(I,"undefined");function C(t){return null===t}function L(t){return k(t)?t:[t]}function O(t,e){L(t).forEach(e)}function j(t,e){return t.push(...L(e)),t}function M(t,e,n){t&&O(e,(e=>{e&&t.classList[n?"add":"remove"](e)}))}function z(t,e){M(t,N(e)?e.split(" "):e,!0)}function T(t,e){O(e,t.appendChild.bind(t))}function A(t,e){return t instanceof HTMLElement&&(t.msMatchesSelector||t.matches).call(t,e)}function D(t,e){return e?function(t,e){const n=t?E(t.children):[];return e?n.filter((t=>A(t,e))):n}(t,e)[0]:t.firstElementChild}const P=Object.keys;function R(t,e,n){if(t){let o=P(t);o=n?o.reverse():o;for(let n=0;n<o.length;n++){const i=o[n];if("__proto__"!==i&&!1===e(t[i],i))break}}return t}function F(t,e){O(t,(t=>{O(e,(e=>{t&&t.removeAttribute(e)}))}))}function W(t,e,n){var o;!C(o=e)&&I("object",o)?R(e,((e,n)=>{W(t,n,e)})):O(t,(t=>{C(n)||""===n?F(t,e):t.setAttribute(e,String(n))}))}function H(t,e,n){const o=document.createElement(t);return e&&(N(e)?z(o,e):W(o,e)),n&&T(n,o),o}function B(t,e,n){if(x(n))return getComputedStyle(t)[e];C(n)||(t.style[e]="".concat(n))}function V(t,e){return e?E(t.querySelectorAll(e)):[]}function U(t,e){M(t,e,!1)}function q(t){return N(t)?t:t?"".concat(t,"px"):""}const G="splide";const{min:Y,max:J,floor:K,ceil:Q,abs:X}=Math;const Z="".concat(y,"__row"),$="".concat(y,"--col"),tt={rows:1,cols:1,dimensions:[],gap:{}};function et(t){function e(){const{rows:e,cols:n,dimensions:o}=t;return k(o)&&o.length?o:[[e,n]]}return{get:function(t){const n=e();return n[Y(t,n.length-1)]},getAt:function(t){const n=e();let o,i,r=0;for(let e=0;e<n.length;e++){const c=n[e];if(o=c[0]||1,i=c[1]||1,r+=o*i,t<r)break}return function(t,e){if(!t)throw new Error("[".concat(G,"] ").concat(e||""))}(o&&i,"Invalid dimension"),[o,i]}}}function nt(t,e,n){const{on:o,destroy:i}=g(t),{Components:r,options:c}=t,{resolve:s}=r.Direction,{forEach:a}=r.Slides;function d(t,e){const n=D(t,".".concat(_)),o=D(n||t,"img");o&&o.src&&(B(n||t,"background",e?"":'center/cover no-repeat url("'.concat(o.src,'")')),B(o,"display",e?"":"none"))}function u(t){return V(t,".".concat(Z))}function l(t){return V(t,".".concat($))}function p(t,e){l(t).forEach((t=>{W(t,"tabindex",e?0:null)}))}function m(t){p(t.slide,!0)}function v(t){p(t.slide,!1)}return{mount:function(){a((o=>{const{slide:i}=o,[r,c]=n.get(o.isClone?o.slideIndex:o.index);!function(t,n){const{row:o}=e.gap,i="calc(".concat(100/t,"%").concat(o?" - ".concat(q(o)," * ").concat((t-1)/t):"",")");u(n).forEach(((t,e,n)=>{B(t,"height",i),B(t,"display","flex"),B(t,"margin","0 0 ".concat(q(o)," 0")),B(t,"padding",0),e===n.length-1&&B(t,"marginBottom",0)}))}(r,i),function(t,n){const{col:o}=e.gap,i="calc(".concat(100/t,"%").concat(o?" - ".concat(q(o)," * ").concat((t-1)/t):"",")");l(n).forEach(((t,e,n)=>{B(t,"width",i),e!==n.length-1&&B(t,s("marginRight"),q(o))}))}(c,i),l(o.slide).forEach(((e,n)=>{var i;e.id="".concat(o.slide.id,"-col").concat((i=n+1)<10?"0".concat(i):"".concat(i)),t.options.cover&&d(e)}))})),c.slideFocus&&(o(f,m),o(h,v))},destroy:function(){a((t=>{const{slide:e}=t;p(e,!1),u(e).forEach((t=>{F(t,"style")})),l(e).forEach((t=>{d(t,!0),F(t,"style")}))})),i()}}}function ot(t,e,n){const{on:o,off:i}=g(t),{Elements:r}=e,c={},s=et(c),a=nt(t,c,s),d="".concat(b,"--grid"),u=[];function l(){var e,a;e=c,L(a||P(e)).forEach((t=>{delete e[t]})),function(t){E(arguments,1).forEach((e=>{R(e,((n,o)=>{t[o]=e[o]}))}))}(c,tt,n.grid||{}),!function(){if(n.grid){const{rows:t,cols:e,dimensions:n}=c;return t>1||e>1||k(n)&&n.length>0}return!1}()?_()&&(f(),h()):(f(),j(u,r.slides),z(t.root,d),T(r.list,function(){const t=[];let e,n,o=0,i=0;return u.forEach(((r,c)=>{const[a,d]=s.getAt(c);i||(o||(e=H(r.tagName,y),t.push(e)),n=function(t,e,n){const o="li"===e.tagName.toLowerCase()?"ul":"div";return H(o,Z,n)}(0,r,e)),function(t,e,n){z(e,$),T(n,e)}(0,r,n),++i>=d&&(i=0,o=++o>=a?0:o)})),t}()),i(p),o(p,v),h())}function f(){if(_()){const{slides:e}=r;a.destroy(),u.forEach((t=>{U(t,$),T(r.list,t)})),O(e,(t=>{t&&t.parentNode&&t.parentNode.removeChild(t)})),U(t.root,d),w(e),j(e,u),w(u),i(p)}}function h(){t.refresh()}function v(){_()&&a.mount()}function _(){return e=t.root,n=d,e&&e.classList.contains(n);var e,n}return{mount:function(){l(),o(m,l)},destroy:f}}},98776:(t,e,n)=>{e.pG=void 0;var o=n(61529);var i=n(95962);Object.defineProperty(e,"pG",{enumerable:!0,get:function(){return i.getImageSize}});var r=n(49363)},61529:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},95962:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=n(61529);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((n,i)=>{if("undefined"===typeof window)return i(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(o.ErrorMessage.URL_IS_NOT_DEFINED);let r=null;const c=new Image;c.addEventListener("load",(()=>{r&&window.clearTimeout(r),n({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{r&&window.clearTimeout(r),i("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(r=window.setTimeout((()=>i(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},49363:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function c(t){try{a(o.next(t))}catch(e){r(e)}}function s(t){try{a(o.throw(t))}catch(e){r(e)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,s)}a((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=n(9950),r=n(95962);e.useImageSize=(t,e)=>{const[n,c]=(0,i.useState)(null),[s,a]=(0,i.useState)(!1),[d,u]=(0,i.useState)(null);return(0,i.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){a(!0),c(null),u(null);try{const{width:n,height:o}=yield(0,r.getImageSize)(t,e);c({width:n,height:o})}catch(d){u(d.toString())}finally{a(!1)}}))}),[t,e]),[n,{loading:s,error:d}]}},61038:()=>{},80045:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(98587);function i(t,e){if(null==t)return{};var n,i,r=(0,o.A)(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(i=0;i<c.length;i++)n=c[i],-1===e.indexOf(n)&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}}}]);