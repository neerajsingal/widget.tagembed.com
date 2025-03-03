/*! For license information please see 1823.28670514.chunk.js.LICENSE.txt */
(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1823],{48738:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=i(e,l(o)))}return e}function l(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)n.call(e,o)&&e[o]&&(t=i(t,o));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},1823:(e,t,o)=>{"use strict";o.d(t,{m_:()=>Pe});var n=o(9950);const r=Math.min,l=Math.max,i=Math.round,c=Math.floor,s=e=>({x:e,y:e}),a={left:"right",right:"left",bottom:"top",top:"bottom"},u={start:"end",end:"start"};function d(e,t,o){return l(e,r(t,o))}function f(e,t){return"function"===typeof e?e(t):e}function p(e){return e.split("-")[0]}function m(e){return e.split("-")[1]}function h(e){return"x"===e?"y":"x"}function v(e){return"y"===e?"height":"width"}function y(e){return["top","bottom"].includes(p(e))?"y":"x"}function g(e){return h(y(e))}function w(e){return e.replace(/start|end/g,(e=>u[e]))}function b(e){return e.replace(/left|right|bottom|top/g,(e=>a[e]))}function x(e){return"number"!==typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function _(e){const{x:t,y:o,width:n,height:r}=e;return{width:n,height:r,top:o,left:t,right:t+n,bottom:o+r,x:t,y:o}}function E(e,t,o){let{reference:n,floating:r}=e;const l=y(t),i=g(t),c=v(i),s=p(t),a="y"===l,u=n.x+n.width/2-r.width/2,d=n.y+n.height/2-r.height/2,f=n[c]/2-r[c]/2;let h;switch(s){case"top":h={x:u,y:n.y-r.height};break;case"bottom":h={x:u,y:n.y+n.height};break;case"right":h={x:n.x+n.width,y:d};break;case"left":h={x:n.x-r.width,y:d};break;default:h={x:n.x,y:n.y}}switch(m(t)){case"start":h[i]-=f*(o&&a?-1:1);break;case"end":h[i]+=f*(o&&a?-1:1)}return h}async function S(e,t){var o;void 0===t&&(t={});const{x:n,y:r,platform:l,rects:i,elements:c,strategy:s}=e,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:m=0}=f(t,e),h=x(m),v=c[p?"floating"===d?"reference":"floating":d],y=_(await l.getClippingRect({element:null==(o=await(null==l.isElement?void 0:l.isElement(v)))||o?v:v.contextElement||await(null==l.getDocumentElement?void 0:l.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:s})),g="floating"===d?{x:n,y:r,width:i.floating.width,height:i.floating.height}:i.reference,w=await(null==l.getOffsetParent?void 0:l.getOffsetParent(c.floating)),b=await(null==l.isElement?void 0:l.isElement(w))&&await(null==l.getScale?void 0:l.getScale(w))||{x:1,y:1},E=_(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:g,offsetParent:w,strategy:s}):g);return{top:(y.top-E.top+h.top)/b.y,bottom:(E.bottom-y.bottom+h.bottom)/b.y,left:(y.left-E.left+h.left)/b.x,right:(E.right-y.right+h.right)/b.x}}function A(){return"undefined"!==typeof window}function T(e){return L(e)?(e.nodeName||"").toLowerCase():"#document"}function R(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function O(e){var t;return null==(t=(L(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function L(e){return!!A()&&(e instanceof Node||e instanceof R(e).Node)}function k(e){return!!A()&&(e instanceof Element||e instanceof R(e).Element)}function C(e){return!!A()&&(e instanceof HTMLElement||e instanceof R(e).HTMLElement)}function D(e){return!(!A()||"undefined"===typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof R(e).ShadowRoot)}function N(e){const{overflow:t,overflowX:o,overflowY:n,display:r}=I(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(r)}function P(e){return["table","td","th"].includes(T(e))}function H(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(o){return!1}}))}function B(e){const t=W(),o=k(e)?I(e):e;return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function W(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function $(e){return["html","body","#document"].includes(T(e))}function I(e){return R(e).getComputedStyle(e)}function j(e){return k(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function F(e){if("html"===T(e))return e;const t=e.assignedSlot||e.parentNode||D(e)&&e.host||O(e);return D(t)?t.host:t}function z(e){const t=F(e);return $(t)?e.ownerDocument?e.ownerDocument.body:e.body:C(t)&&N(t)?t:z(t)}function M(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=z(e),l=r===(null==(n=e.ownerDocument)?void 0:n.body),i=R(r);if(l){const e=K(i);return t.concat(i,i.visualViewport||[],N(r)?r:[],e&&o?M(e):[])}return t.concat(r,M(r,[],o))}function K(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function V(e){const t=I(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=C(e),l=r?e.offsetWidth:o,c=r?e.offsetHeight:n,s=i(o)!==l||i(n)!==c;return s&&(o=l,n=c),{width:o,height:n,$:s}}function q(e){return k(e)?e:e.contextElement}function U(e){const t=q(e);if(!C(t))return s(1);const o=t.getBoundingClientRect(),{width:n,height:r,$:l}=V(t);let c=(l?i(o.width):o.width)/n,a=(l?i(o.height):o.height)/r;return c&&Number.isFinite(c)||(c=1),a&&Number.isFinite(a)||(a=1),{x:c,y:a}}const X=s(0);function Y(e){const t=R(e);return W()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:X}function Z(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),l=q(e);let i=s(1);t&&(n?k(n)&&(i=U(n)):i=U(e));const c=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==R(e))&&t}(l,o,n)?Y(l):s(0);let a=(r.left+c.x)/i.x,u=(r.top+c.y)/i.y,d=r.width/i.x,f=r.height/i.y;if(l){const e=R(l),t=n&&k(n)?R(n):n;let o=e,r=K(o);for(;r&&n&&t!==o;){const e=U(r),t=r.getBoundingClientRect(),n=I(r),l=t.left+(r.clientLeft+parseFloat(n.paddingLeft))*e.x,i=t.top+(r.clientTop+parseFloat(n.paddingTop))*e.y;a*=e.x,u*=e.y,d*=e.x,f*=e.y,a+=l,u+=i,o=R(r),r=K(o)}}return _({width:d,height:f,x:a,y:u})}function G(e,t){const o=j(e).scrollLeft;return t?t.left+o:Z(O(e)).left+o}function J(e,t,o){void 0===o&&(o=!1);const n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-(o?0:G(e,n)),y:n.top+t.scrollTop}}function Q(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=R(e),n=O(e),r=o.visualViewport;let l=n.clientWidth,i=n.clientHeight,c=0,s=0;if(r){l=r.width,i=r.height;const e=W();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,s=r.offsetTop)}return{width:l,height:i,x:c,y:s}}(e,o);else if("document"===t)n=function(e){const t=O(e),o=j(e),n=e.ownerDocument.body,r=l(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),i=l(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let c=-o.scrollLeft+G(e);const s=-o.scrollTop;return"rtl"===I(n).direction&&(c+=l(t.clientWidth,n.clientWidth)-r),{width:r,height:i,x:c,y:s}}(O(e));else if(k(t))n=function(e,t){const o=Z(e,!0,"fixed"===t),n=o.top+e.clientTop,r=o.left+e.clientLeft,l=C(e)?U(e):s(1);return{width:e.clientWidth*l.x,height:e.clientHeight*l.y,x:r*l.x,y:n*l.y}}(t,o);else{const o=Y(e);n={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return _(n)}function ee(e,t){const o=F(e);return!(o===t||!k(o)||$(o))&&("fixed"===I(o).position||ee(o,t))}function te(e,t,o){const n=C(t),r=O(t),l="fixed"===o,i=Z(e,!0,l,t);let c={scrollLeft:0,scrollTop:0};const a=s(0);if(n||!n&&!l)if(("body"!==T(t)||N(r))&&(c=j(t)),n){const e=Z(t,!0,l,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else r&&(a.x=G(r));const u=!r||n||l?s(0):J(r,c);return{x:i.left+c.scrollLeft-a.x-u.x,y:i.top+c.scrollTop-a.y-u.y,width:i.width,height:i.height}}function oe(e){return"static"===I(e).position}function ne(e,t){if(!C(e)||"fixed"===I(e).position)return null;if(t)return t(e);let o=e.offsetParent;return O(e)===o&&(o=o.ownerDocument.body),o}function re(e,t){const o=R(e);if(H(e))return o;if(!C(e)){let t=F(e);for(;t&&!$(t);){if(k(t)&&!oe(t))return t;t=F(t)}return o}let n=ne(e,t);for(;n&&P(n)&&oe(n);)n=ne(n,t);return n&&$(n)&&oe(n)&&!B(n)?o:n||function(e){let t=F(e);for(;C(t)&&!$(t);){if(B(t))return t;if(H(t))return null;t=F(t)}return null}(e)||o}const le={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:n,strategy:r}=e;const l="fixed"===r,i=O(n),c=!!t&&H(t.floating);if(n===i||c&&l)return o;let a={scrollLeft:0,scrollTop:0},u=s(1);const d=s(0),f=C(n);if((f||!f&&!l)&&(("body"!==T(n)||N(i))&&(a=j(n)),C(n))){const e=Z(n);u=U(n),d.x=e.x+n.clientLeft,d.y=e.y+n.clientTop}const p=!i||f||l?s(0):J(i,a,!0);return{width:o.width*u.x,height:o.height*u.y,x:o.x*u.x-a.scrollLeft*u.x+d.x+p.x,y:o.y*u.y-a.scrollTop*u.y+d.y+p.y}},getDocumentElement:O,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const c=[..."clippingAncestors"===o?H(t)?[]:function(e,t){const o=t.get(e);if(o)return o;let n=M(e,[],!1).filter((e=>k(e)&&"body"!==T(e))),r=null;const l="fixed"===I(e).position;let i=l?F(e):e;for(;k(i)&&!$(i);){const t=I(i),o=B(i);o||"fixed"!==t.position||(r=null),(l?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||N(i)&&!o&&ee(e,i))?n=n.filter((e=>e!==i)):r=t,i=F(i)}return t.set(e,n),n}(t,this._c):[].concat(o),n],s=c[0],a=c.reduce(((e,o)=>{const n=Q(t,o,i);return e.top=l(n.top,e.top),e.right=r(n.right,e.right),e.bottom=r(n.bottom,e.bottom),e.left=l(n.left,e.left),e}),Q(t,s,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:re,getElementRects:async function(e){const t=this.getOffsetParent||re,o=this.getDimensions,n=await o(e.floating);return{reference:te(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:o}=V(e);return{width:t,height:o}},getScale:U,isElement:k,isRTL:function(e){return"rtl"===I(e).direction}};function ie(e,t,o,n){void 0===n&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:a="function"===typeof ResizeObserver,layoutShift:u="function"===typeof IntersectionObserver,animationFrame:d=!1}=n,f=q(e),p=i||s?[...f?M(f):[],...M(t)]:[];p.forEach((e=>{i&&e.addEventListener("scroll",o,{passive:!0}),s&&e.addEventListener("resize",o)}));const m=f&&u?function(e,t){let o,n=null;const i=O(e);function s(){var e;clearTimeout(o),null==(e=n)||e.disconnect(),n=null}return function a(u,d){void 0===u&&(u=!1),void 0===d&&(d=1),s();const{left:f,top:p,width:m,height:h}=e.getBoundingClientRect();if(u||t(),!m||!h)return;const v={rootMargin:-c(p)+"px "+-c(i.clientWidth-(f+m))+"px "+-c(i.clientHeight-(p+h))+"px "+-c(f)+"px",threshold:l(0,r(1,d))||1};let y=!0;function g(e){const t=e[0].intersectionRatio;if(t!==d){if(!y)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),1e3)}y=!1}try{n=new IntersectionObserver(g,{...v,root:i.ownerDocument})}catch(w){n=new IntersectionObserver(g,v)}n.observe(e)}(!0),s}(f,o):null;let h,v=-1,y=null;a&&(y=new ResizeObserver((e=>{let[n]=e;n&&n.target===f&&y&&(y.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame((()=>{var e;null==(e=y)||e.observe(t)}))),o()})),f&&!d&&y.observe(f),y.observe(t));let g=d?Z(e):null;return d&&function t(){const n=Z(e);!g||n.x===g.x&&n.y===g.y&&n.width===g.width&&n.height===g.height||o();g=n,h=requestAnimationFrame(t)}(),o(),()=>{var e;p.forEach((e=>{i&&e.removeEventListener("scroll",o),s&&e.removeEventListener("resize",o)})),null==m||m(),null==(e=y)||e.disconnect(),y=null,d&&cancelAnimationFrame(h)}}const ce=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var o,n;const{x:r,y:l,placement:i,middlewareData:c}=t,s=await async function(e,t){const{placement:o,platform:n,elements:r}=e,l=await(null==n.isRTL?void 0:n.isRTL(r.floating)),i=p(o),c=m(o),s="y"===y(o),a=["left","top"].includes(i)?-1:1,u=l&&s?-1:1,d=f(t,e);let{mainAxis:h,crossAxis:v,alignmentAxis:g}="number"===typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return c&&"number"===typeof g&&(v="end"===c?-1*g:g),s?{x:v*u,y:h*a}:{x:h*a,y:v*u}}(t,e);return i===(null==(o=c.offset)?void 0:o.placement)&&null!=(n=c.arrow)&&n.alignmentOffset?{}:{x:r+s.x,y:l+s.y,data:{...s,placement:i}}}}},se=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:r}=t,{mainAxis:l=!0,crossAxis:i=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...s}=f(e,t),a={x:o,y:n},u=await S(t,s),m=y(p(r)),v=h(m);let g=a[v],w=a[m];if(l){const e="y"===v?"bottom":"right";g=d(g+u["y"===v?"top":"left"],g,g-u[e])}if(i){const e="y"===m?"bottom":"right";w=d(w+u["y"===m?"top":"left"],w,w-u[e])}const b=c.fn({...t,[v]:g,[m]:w});return{...b,data:{x:b.x-o,y:b.y-n,enabled:{[v]:l,[m]:i}}}}}},ae=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:r,middlewareData:l,rects:i,initialPlacement:c,platform:s,elements:a}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:E=!0,...A}=f(e,t);if(null!=(o=l.arrow)&&o.alignmentOffset)return{};const T=p(r),R=y(c),O=p(c)===c,L=await(null==s.isRTL?void 0:s.isRTL(a.floating)),k=h||(O||!E?[b(c)]:function(e){const t=b(e);return[w(e),t,w(t)]}(c)),C="none"!==_;!h&&C&&k.push(...function(e,t,o,n){const r=m(e);let l=function(e,t,o){const n=["left","right"],r=["right","left"],l=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:n:t?n:r;case"left":case"right":return t?l:i;default:return[]}}(p(e),"start"===o,n);return r&&(l=l.map((e=>e+"-"+r)),t&&(l=l.concat(l.map(w)))),l}(c,E,_,L));const D=[c,...k],N=await S(t,A),P=[];let H=(null==(n=l.flip)?void 0:n.overflows)||[];if(u&&P.push(N[T]),d){const e=function(e,t,o){void 0===o&&(o=!1);const n=m(e),r=g(e),l=v(r);let i="x"===r?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[l]>t.floating[l]&&(i=b(i)),[i,b(i)]}(r,i,L);P.push(N[e[0]],N[e[1]])}if(H=[...H,{placement:r,overflows:P}],!P.every((e=>e<=0))){var B,W;const e=((null==(B=l.flip)?void 0:B.index)||0)+1,t=D[e];if(t)return{data:{index:e,overflows:H},reset:{placement:t}};let o=null==(W=H.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:W.placement;if(!o)switch(x){case"bestFit":{var $;const e=null==($=H.filter((e=>{if(C){const t=y(e.placement);return t===R||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:$[0];e&&(o=e);break}case"initialPlacement":o=c}if(r!==o)return{reset:{placement:o}}}return{}}}},ue=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:l,rects:i,platform:c,elements:s,middlewareData:a}=t,{element:u,padding:p=0}=f(e,t)||{};if(null==u)return{};const h=x(p),y={x:o,y:n},w=g(l),b=v(w),_=await c.getDimensions(u),E="y"===w,S=E?"top":"left",A=E?"bottom":"right",T=E?"clientHeight":"clientWidth",R=i.reference[b]+i.reference[w]-y[w]-i.floating[b],O=y[w]-i.reference[w],L=await(null==c.getOffsetParent?void 0:c.getOffsetParent(u));let k=L?L[T]:0;k&&await(null==c.isElement?void 0:c.isElement(L))||(k=s.floating[T]||i.floating[b]);const C=R/2-O/2,D=k/2-_[b]/2-1,N=r(h[S],D),P=r(h[A],D),H=N,B=k-_[b]-P,W=k/2-_[b]/2+C,$=d(H,W,B),I=!a.arrow&&null!=m(l)&&W!==$&&i.reference[b]/2-(W<H?N:P)-_[b]/2<0,j=I?W<H?W-H:W-B:0;return{[w]:y[w]+j,data:{[w]:$,centerOffset:W-$-j,...I&&{alignmentOffset:j}},reset:I}}}),de=(e,t,o)=>{const n=new Map,r={platform:le,...o},l={...r.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:l=[],platform:i}=o,c=l.filter(Boolean),s=await(null==i.isRTL?void 0:i.isRTL(t));let a=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=E(a,n,s),f=n,p={},m=0;for(let h=0;h<c.length;h++){const{name:o,fn:l}=c[h],{x:v,y:y,data:g,reset:w}=await l({x:u,y:d,initialPlacement:n,placement:f,strategy:r,middlewareData:p,rects:a,platform:i,elements:{reference:e,floating:t}});u=null!=v?v:u,d=null!=y?y:d,p={...p,[o]:{...p[o],...g}},w&&m<=50&&(m++,"object"===typeof w&&(w.placement&&(f=w.placement),w.rects&&(a=!0===w.rects?await i.getElementRects({reference:e,floating:t,strategy:r}):w.rects),({x:u,y:d}=E(a,f,s))),h=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:p}})(e,t,{...r,platform:l})};var fe=o(48738);const pe="react-tooltip-core-styles",me="react-tooltip-base-styles",he={core:!1,base:!1};function ve(e){let{css:t,id:o=me,type:n="base",ref:r}=e;var l,i;if(!t||"undefined"==typeof document||he[n])return;if("core"===n&&"undefined"!=typeof process&&(null===(l=null===process||void 0===process?void 0:{NODE_ENV:"production",PUBLIC_URL:"https://widget.tagembed.com/widget",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})||void 0===l?void 0:l.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==n&&"undefined"!=typeof process&&(null===(i=null===process||void 0===process?void 0:{NODE_ENV:"production",PUBLIC_URL:"https://widget.tagembed.com/widget",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})||void 0===i?void 0:i.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===n&&(o=pe),r||(r={});const{insertAt:c}=r;if(document.getElementById(o))return;const s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.id=o,a.type="text/css","top"===c&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t)),he[n]=!0}const ye=async e=>{let{elementReference:t=null,tooltipReference:o=null,tooltipArrowReference:n=null,place:r="top",offset:l=10,strategy:i="absolute",middlewares:c=[ce(Number(l)),ae({fallbackAxisSideDirection:"start"}),se({padding:5})],border:s}=e;if(!t)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};if(null===o)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};const a=c;return n?(a.push(ue({element:n,padding:5})),de(t,o,{placement:r,strategy:i,middleware:a}).then((e=>{let{x:t,y:o,placement:n,middlewareData:r}=e;var l,i;const c={left:`${t}px`,top:`${o}px`,border:s},{x:a,y:u}=null!==(l=r.arrow)&&void 0!==l?l:{x:0,y:0},d=null!==(i={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]])&&void 0!==i?i:"bottom",f=s&&{borderBottom:s,borderRight:s};let p=0;if(s){const e=`${s}`.match(/(\d+)px/);p=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:c,tooltipArrowStyles:{left:null!=a?`${a}px`:"",top:null!=u?`${u}px`:"",right:"",bottom:"",...f,[d]:`-${4+p}px`},place:n}}))):de(t,o,{placement:"bottom",strategy:i,middleware:a}).then((e=>{let{x:t,y:o,placement:n}=e;return{tooltipStyles:{left:`${t}px`,top:`${o}px`},tooltipArrowStyles:{},place:n}}))},ge=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),we=(e,t,o)=>{let n=null;const r=function(){for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];const c=()=>{n=null,o||e.apply(this,l)};o&&!n&&(e.apply(this,l),n=setTimeout(c,t)),o||(n&&clearTimeout(n),n=setTimeout(c,t))};return r.cancel=()=>{n&&(clearTimeout(n),n=null)},r},be=e=>null!==e&&!Array.isArray(e)&&"object"==typeof e,xe=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every(((e,o)=>xe(e,t[o])));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!be(e)||!be(t))return e===t;const o=Object.keys(e),n=Object.keys(t);return o.length===n.length&&o.every((o=>xe(e[o],t[o])))},_e=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some((e=>{const o=t.getPropertyValue(e);return"auto"===o||"scroll"===o}))},Ee=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(_e(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},Se="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,Ae=e=>{e.current&&(clearTimeout(e.current),e.current=null)},Te="DEFAULT_TOOLTIP_ID",Re={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},Oe=(0,n.createContext)({getTooltipData:()=>Re});function Le(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;return(0,n.useContext)(Oe).getTooltipData(e)}var ke={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},Ce={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const De=e=>{let{forwardRef:t,id:o,className:r,classNameArrow:l,variant:i="dark",anchorId:c,anchorSelect:s,place:a="top",offset:u=10,events:d=["hover"],openOnClick:f=!1,positionStrategy:p="absolute",middlewares:m,wrapper:h,delayShow:v=0,delayHide:y=0,float:g=!1,hidden:w=!1,noArrow:b=!1,clickable:x=!1,closeOnEsc:_=!1,closeOnScroll:E=!1,closeOnResize:S=!1,openEvents:A,closeEvents:T,globalCloseEvents:R,imperativeModeOnly:O,style:L,position:k,afterShow:C,afterHide:D,disableTooltip:N,content:P,contentWrapperRef:H,isOpen:B,defaultIsOpen:W=!1,setIsOpen:$,activeAnchor:I,setActiveAnchor:j,border:F,opacity:z,arrowColor:M,role:K="tooltip"}=e;var V;const q=(0,n.useRef)(null),U=(0,n.useRef)(null),X=(0,n.useRef)(null),Y=(0,n.useRef)(null),Z=(0,n.useRef)(null),[G,J]=(0,n.useState)({tooltipStyles:{},tooltipArrowStyles:{},place:a}),[Q,ee]=(0,n.useState)(!1),[te,oe]=(0,n.useState)(!1),[ne,re]=(0,n.useState)(null),le=(0,n.useRef)(!1),ce=(0,n.useRef)(null),{anchorRefs:se,setActiveAnchor:ae}=Le(o),ue=(0,n.useRef)(!1),[de,pe]=(0,n.useState)([]),me=(0,n.useRef)(!1),he=f||d.includes("click"),ve=he||(null==A?void 0:A.click)||(null==A?void 0:A.dblclick)||(null==A?void 0:A.mousedown),ge=A?{...A}:{mouseover:!0,focus:!0,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1};!A&&he&&Object.assign(ge,{mouseenter:!1,focus:!1,mouseover:!1,click:!0});const be=T?{...T}:{mouseout:!0,blur:!0,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1};!T&&he&&Object.assign(be,{mouseleave:!1,blur:!1,mouseout:!1});const _e=R?{...R}:{escape:_||!1,scroll:E||!1,resize:S||!1,clickOutsideAnchor:ve||!1};O&&(Object.assign(ge,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(be,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(_e,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),Se((()=>(me.current=!0,()=>{me.current=!1})),[]);const Te=e=>{me.current&&(e&&oe(!0),setTimeout((()=>{me.current&&(null==$||$(e),void 0===B&&ee(e))}),10))};(0,n.useEffect)((()=>{if(void 0===B)return()=>null;B&&oe(!0);const e=setTimeout((()=>{ee(B)}),10);return()=>{clearTimeout(e)}}),[B]),(0,n.useEffect)((()=>{if(Q!==le.current)if(Ae(Z),le.current=Q,Q)null==C||C();else{const e=(()=>{const e=getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay").match(/^([\d.]+)(ms|s)$/);if(!e)return 0;const[,t,o]=e;return Number(t)*("ms"===o?1:1e3)})();Z.current=setTimeout((()=>{oe(!1),re(null),null==D||D()}),e+25)}}),[Q]);const Re=e=>{J((t=>xe(t,e)?t:e))},Oe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;Ae(X),te?Te(!0):X.current=setTimeout((()=>{Te(!0)}),e)},De=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;Ae(Y),Y.current=setTimeout((()=>{ue.current||Te(!1)}),e)},Ne=e=>{var t;if(!e)return;const o=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==o?void 0:o.isConnected))return j(null),void ae({current:null});v?Oe():Te(!0),j(o),ae({current:o}),Ae(Y)},Pe=()=>{x?De(y||100):y?De():Te(!1),Ae(X)},He=e=>{let{x:t,y:o}=e;var n;const r={getBoundingClientRect:()=>({x:t,y:o,width:0,height:0,top:o,left:t,right:t,bottom:o})};ye({place:null!==(n=null==ne?void 0:ne.place)&&void 0!==n?n:a,offset:u,elementReference:r,tooltipReference:q.current,tooltipArrowReference:U.current,strategy:p,middlewares:m,border:F}).then((e=>{Re(e)}))},Be=e=>{if(!e)return;const t=e,o={x:t.clientX,y:t.clientY};He(o),ce.current=o},We=e=>{var t;if(!Q)return;const o=e.target;o.isConnected&&((null===(t=q.current)||void 0===t?void 0:t.contains(o))||[document.querySelector(`[id='${c}']`),...de].some((e=>null==e?void 0:e.contains(o)))||(Te(!1),Ae(X)))},$e=we(Ne,50,!0),Ie=we(Pe,50,!0),je=e=>{Ie.cancel(),$e(e)},Fe=()=>{$e.cancel(),Ie()},ze=(0,n.useCallback)((()=>{var e,t;const o=null!==(e=null==ne?void 0:ne.position)&&void 0!==e?e:k;o?He(o):g?ce.current&&He(ce.current):(null==I?void 0:I.isConnected)&&ye({place:null!==(t=null==ne?void 0:ne.place)&&void 0!==t?t:a,offset:u,elementReference:I,tooltipReference:q.current,tooltipArrowReference:U.current,strategy:p,middlewares:m,border:F}).then((e=>{me.current&&Re(e)}))}),[Q,I,P,L,a,null==ne?void 0:ne.place,u,p,k,null==ne?void 0:ne.position,g]);(0,n.useEffect)((()=>{var e,t;const o=new Set(se);de.forEach((e=>{(null==N?void 0:N(e))||o.add({current:e})}));const n=document.querySelector(`[id='${c}']`);n&&!(null==N?void 0:N(n))&&o.add({current:n});const r=()=>{Te(!1)},l=Ee(I),i=Ee(q.current);_e.scroll&&(window.addEventListener("scroll",r),null==l||l.addEventListener("scroll",r),null==i||i.addEventListener("scroll",r));let s=null;_e.resize?window.addEventListener("resize",r):I&&q.current&&(s=ie(I,q.current,ze,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const a=e=>{"Escape"===e.key&&Te(!1)};_e.escape&&window.addEventListener("keydown",a),_e.clickOutsideAnchor&&window.addEventListener("click",We);const u=[],d=e=>{Q&&(null==e?void 0:e.target)===I||Ne(e)},f=e=>{Q&&(null==e?void 0:e.target)===I&&Pe()},p=["mouseover","mouseout","mouseenter","mouseleave","focus","blur"],m=["click","dblclick","mousedown","mouseup"];Object.entries(ge).forEach((e=>{let[t,o]=e;o&&(p.includes(t)?u.push({event:t,listener:je}):m.includes(t)&&u.push({event:t,listener:d}))})),Object.entries(be).forEach((e=>{let[t,o]=e;o&&(p.includes(t)?u.push({event:t,listener:Fe}):m.includes(t)&&u.push({event:t,listener:f}))})),g&&u.push({event:"pointermove",listener:Be});const h=()=>{ue.current=!0},v=()=>{ue.current=!1,Pe()};return x&&!ve&&(null===(e=q.current)||void 0===e||e.addEventListener("mouseenter",h),null===(t=q.current)||void 0===t||t.addEventListener("mouseleave",v)),u.forEach((e=>{let{event:t,listener:n}=e;o.forEach((e=>{var o;null===(o=e.current)||void 0===o||o.addEventListener(t,n)}))})),()=>{var e,t;_e.scroll&&(window.removeEventListener("scroll",r),null==l||l.removeEventListener("scroll",r),null==i||i.removeEventListener("scroll",r)),_e.resize?window.removeEventListener("resize",r):null==s||s(),_e.clickOutsideAnchor&&window.removeEventListener("click",We),_e.escape&&window.removeEventListener("keydown",a),x&&!ve&&(null===(e=q.current)||void 0===e||e.removeEventListener("mouseenter",h),null===(t=q.current)||void 0===t||t.removeEventListener("mouseleave",v)),u.forEach((e=>{let{event:t,listener:n}=e;o.forEach((e=>{var o;null===(o=e.current)||void 0===o||o.removeEventListener(t,n)}))}))}}),[I,ze,te,se,de,A,T,R,he,v,y]),(0,n.useEffect)((()=>{var e,t;let n=null!==(t=null!==(e=null==ne?void 0:ne.anchorSelect)&&void 0!==e?e:s)&&void 0!==t?t:"";!n&&o&&(n=`[data-tooltip-id='${o.replace(/'/g,"\\'")}']`);const r=new MutationObserver((e=>{const t=[],r=[];e.forEach((e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName&&(e.target.getAttribute("data-tooltip-id")===o?t.push(e.target):e.oldValue===o&&r.push(e.target)),"childList"===e.type){if(I){const t=[...e.removedNodes].filter((e=>1===e.nodeType));if(n)try{r.push(...t.filter((e=>e.matches(n)))),r.push(...t.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}t.some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,I))&&(oe(!1),Te(!1),j(null),Ae(X),Ae(Y),!0)}))}if(n)try{const o=[...e.addedNodes].filter((e=>1===e.nodeType));t.push(...o.filter((e=>e.matches(n)))),t.push(...o.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}}})),(t.length||r.length)&&pe((e=>[...e.filter((e=>!r.includes(e))),...t]))}));return r.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{r.disconnect()}}),[o,s,null==ne?void 0:ne.anchorSelect,I]),(0,n.useEffect)((()=>{ze()}),[ze]),(0,n.useEffect)((()=>{if(!(null==H?void 0:H.current))return()=>null;const e=new ResizeObserver((()=>{setTimeout((()=>ze()))}));return e.observe(H.current),()=>{e.disconnect()}}),[P,null==H?void 0:H.current]),(0,n.useEffect)((()=>{var e;const t=document.querySelector(`[id='${c}']`),o=[...de,t];I&&o.includes(I)||j(null!==(e=de[0])&&void 0!==e?e:t)}),[c,de,I]),(0,n.useEffect)((()=>(W&&Te(!0),()=>{Ae(X),Ae(Y)})),[]),(0,n.useEffect)((()=>{var e;let t=null!==(e=null==ne?void 0:ne.anchorSelect)&&void 0!==e?e:s;if(!t&&o&&(t=`[data-tooltip-id='${o.replace(/'/g,"\\'")}']`),t)try{const e=Array.from(document.querySelectorAll(t));pe(e)}catch(e){pe([])}}),[o,s,null==ne?void 0:ne.anchorSelect]),(0,n.useEffect)((()=>{X.current&&(Ae(X),Oe(v))}),[v]);const Me=null!==(V=null==ne?void 0:ne.content)&&void 0!==V?V:P,Ke=Q&&Object.keys(G.tooltipStyles).length>0;return(0,n.useImperativeHandle)(t,(()=>({open:e=>{if(null==e?void 0:e.anchorSelect)try{document.querySelector(e.anchorSelect)}catch(t){return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)}re(null!=e?e:null),(null==e?void 0:e.delay)?Oe(e.delay):Te(!0)},close:e=>{(null==e?void 0:e.delay)?De(e.delay):Te(!1)},activeAnchor:I,place:G.place,isOpen:Boolean(te&&!w&&Me&&Ke)}))),te&&!w&&Me?n.createElement(h,{id:o,role:K,className:fe("react-tooltip",ke.tooltip,Ce.tooltip,Ce[i],r,`react-tooltip__place-${G.place}`,ke[Ke?"show":"closing"],Ke?"react-tooltip__show":"react-tooltip__closing","fixed"===p&&ke.fixed,x&&ke.clickable),onTransitionEnd:e=>{Ae(Z),Q||"opacity"!==e.propertyName||(oe(!1),re(null),null==D||D())},style:{...L,...G.tooltipStyles,opacity:void 0!==z&&Ke?z:void 0},ref:q},Me,n.createElement(h,{className:fe("react-tooltip-arrow",ke.arrow,Ce.arrow,l,b&&ke.noArrow),style:{...G.tooltipArrowStyles,background:M?`linear-gradient(to right bottom, transparent 50%, ${M} 50%)`:void 0},ref:U})):null},Ne=e=>{let{content:t}=e;return n.createElement("span",{dangerouslySetInnerHTML:{__html:t}})},Pe=n.forwardRef(((e,t)=>{let{id:o,anchorId:r,anchorSelect:l,content:i,html:c,render:s,className:a,classNameArrow:u,variant:d="dark",place:f="top",offset:p=10,wrapper:m="div",children:h=null,events:v=["hover"],openOnClick:y=!1,positionStrategy:g="absolute",middlewares:w,delayShow:b=0,delayHide:x=0,float:_=!1,hidden:E=!1,noArrow:S=!1,clickable:A=!1,closeOnEsc:T=!1,closeOnScroll:R=!1,closeOnResize:O=!1,openEvents:L,closeEvents:k,globalCloseEvents:C,imperativeModeOnly:D=!1,style:N,position:P,isOpen:H,defaultIsOpen:B=!1,disableStyleInjection:W=!1,border:$,opacity:I,arrowColor:j,setIsOpen:F,afterShow:z,afterHide:M,disableTooltip:K,role:V="tooltip"}=e;const[q,U]=(0,n.useState)(i),[X,Y]=(0,n.useState)(c),[Z,G]=(0,n.useState)(f),[J,Q]=(0,n.useState)(d),[ee,te]=(0,n.useState)(p),[oe,ne]=(0,n.useState)(b),[re,le]=(0,n.useState)(x),[ie,ce]=(0,n.useState)(_),[se,ae]=(0,n.useState)(E),[ue,de]=(0,n.useState)(m),[pe,me]=(0,n.useState)(v),[he,ve]=(0,n.useState)(g),[ye,we]=(0,n.useState)(null),[be,xe]=(0,n.useState)(null),_e=(0,n.useRef)(W),{anchorRefs:Ee,activeAnchor:Se}=Le(o),Ae=e=>null==e?void 0:e.getAttributeNames().reduce(((t,o)=>{var n;return o.startsWith("data-tooltip-")&&(t[o.replace(/^data-tooltip-/,"")]=null!==(n=null==e?void 0:e.getAttribute(o))&&void 0!==n?n:null),t}),{}),Te=e=>{const t={place:e=>{var t;G(null!==(t=e)&&void 0!==t?t:f)},content:e=>{U(null!=e?e:i)},html:e=>{Y(null!=e?e:c)},variant:e=>{var t;Q(null!==(t=e)&&void 0!==t?t:d)},offset:e=>{te(null===e?p:Number(e))},wrapper:e=>{var t;de(null!==(t=e)&&void 0!==t?t:m)},events:e=>{const t=null==e?void 0:e.split(" ");me(null!=t?t:v)},"position-strategy":e=>{var t;ve(null!==(t=e)&&void 0!==t?t:g)},"delay-show":e=>{ne(null===e?b:Number(e))},"delay-hide":e=>{le(null===e?x:Number(e))},float:e=>{ce(null===e?_:"true"===e)},hidden:e=>{ae(null===e?E:"true"===e)},"class-name":e=>{we(e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((e=>{let[o,n]=e;var r;null===(r=t[o])||void 0===r||r.call(t,n)}))};(0,n.useEffect)((()=>{U(i)}),[i]),(0,n.useEffect)((()=>{Y(c)}),[c]),(0,n.useEffect)((()=>{G(f)}),[f]),(0,n.useEffect)((()=>{Q(d)}),[d]),(0,n.useEffect)((()=>{te(p)}),[p]),(0,n.useEffect)((()=>{ne(b)}),[b]),(0,n.useEffect)((()=>{le(x)}),[x]),(0,n.useEffect)((()=>{ce(_)}),[_]),(0,n.useEffect)((()=>{ae(E)}),[E]),(0,n.useEffect)((()=>{ve(g)}),[g]),(0,n.useEffect)((()=>{_e.current!==W&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")}),[W]),(0,n.useEffect)((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===W,disableBase:W}}))}),[]),(0,n.useEffect)((()=>{var e;const t=new Set(Ee);let n=l;if(!n&&o&&(n=`[data-tooltip-id='${o.replace(/'/g,"\\'")}']`),n)try{document.querySelectorAll(n).forEach((e=>{t.add({current:e})}))}catch(e){console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`)}const i=document.querySelector(`[id='${r}']`);if(i&&t.add({current:i}),!t.size)return()=>null;const c=null!==(e=null!=be?be:i)&&void 0!==e?e:Se.current,s=new MutationObserver((e=>{e.forEach((e=>{var t;if(!c||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const o=Ae(c);Te(o)}))})),a={attributes:!0,childList:!1,subtree:!1};if(c){const e=Ae(c);Te(e),s.observe(c,a)}return()=>{s.disconnect()}}),[Ee,Se,be,r,l]),(0,n.useEffect)((()=>{(null==N?void 0:N.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),$&&!ge("border",`${$}`)&&console.warn(`[react-tooltip] "${$}" is not a valid \`border\`.`),(null==N?void 0:N.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),I&&!ge("opacity",`${I}`)&&console.warn(`[react-tooltip] "${I}" is not a valid \`opacity\`.`)}),[]);let Re=h;const Oe=(0,n.useRef)(null);if(s){const e=s({content:(null==be?void 0:be.getAttribute("data-tooltip-content"))||q||null,activeAnchor:be});Re=e?n.createElement("div",{ref:Oe,className:"react-tooltip-content-wrapper"},e):null}else q&&(Re=q);X&&(Re=n.createElement(Ne,{content:X}));const ke={forwardRef:t,id:o,anchorId:r,anchorSelect:l,className:fe(a,ye),classNameArrow:u,content:Re,contentWrapperRef:Oe,place:Z,variant:J,offset:ee,wrapper:ue,events:pe,openOnClick:y,positionStrategy:he,middlewares:w,delayShow:oe,delayHide:re,float:ie,hidden:se,noArrow:S,clickable:A,closeOnEsc:T,closeOnScroll:R,closeOnResize:O,openEvents:L,closeEvents:k,globalCloseEvents:C,imperativeModeOnly:D,style:N,position:P,isOpen:H,defaultIsOpen:B,border:$,opacity:I,arrowColor:j,setIsOpen:F,afterShow:z,afterHide:M,disableTooltip:K,activeAnchor:be,setActiveAnchor:e=>xe(e),role:V};return n.createElement(De,{...ke})}));"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||ve({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||ve({css:"\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",type:"base"})}))}}]);