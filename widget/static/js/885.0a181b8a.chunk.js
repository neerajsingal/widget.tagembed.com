"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[885],{49071:()=>{},80045:(e,i,t)=>{t.d(i,{A:()=>r});var s=t(98587);function r(e,i){if(null==e)return{};var t,r,a=(0,s.A)(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],-1===i.indexOf(t)&&{}.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},79175:(e,i,t)=>{t.d(i,{kz:()=>F});var s=t(89379),r=t(69863),a=t(31444),o=t(51568),n=t(3385),p=t(58825),l=t(89883),d=t(26487),w=t(58658),c=t(81706),h=t(51411),g=t(98419),b=t(11297),u=t(88246),f=t(86864),v=t(59276),m=t(57347);function y(e){const i=this,{params:t,slidesEl:s}=i;t.loop&&i.loopDestroy();const r=e=>{if("string"===typeof e){const i=document.createElement("div");i.innerHTML=e,s.append(i.children[0]),i.innerHTML=""}else s.append(e)};if("object"===typeof e&&"length"in e)for(let a=0;a<e.length;a+=1)e[a]&&r(e[a]);else r(e);i.recalcSlides(),t.loop&&i.loopCreate(),t.observer&&!i.isElement||i.update()}function x(e){const i=this,{params:t,activeIndex:s,slidesEl:r}=i;t.loop&&i.loopDestroy();let a=s+1;const o=e=>{if("string"===typeof e){const i=document.createElement("div");i.innerHTML=e,r.prepend(i.children[0]),i.innerHTML=""}else r.prepend(e)};if("object"===typeof e&&"length"in e){for(let i=0;i<e.length;i+=1)e[i]&&o(e[i]);a=s+e.length}else o(e);i.recalcSlides(),t.loop&&i.loopCreate(),t.observer&&!i.isElement||i.update(),i.slideTo(a,0,!1)}function S(e,i){const t=this,{params:s,activeIndex:r,slidesEl:a}=t;let o=r;s.loop&&(o-=t.loopedSlides,t.loopDestroy(),t.recalcSlides());const n=t.slides.length;if(e<=0)return void t.prependSlide(i);if(e>=n)return void t.appendSlide(i);let p=o>e?o+1:o;const l=[];for(let d=n-1;d>=e;d-=1){const e=t.slides[d];e.remove(),l.unshift(e)}if("object"===typeof i&&"length"in i){for(let e=0;e<i.length;e+=1)i[e]&&a.append(i[e]);p=o>e?o+i.length:o}else a.append(i);for(let d=0;d<l.length;d+=1)a.append(l[d]);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),s.loop?t.slideTo(p+t.loopedSlides,0,!1):t.slideTo(p,0,!1)}function z(e){const i=this,{params:t,activeIndex:s}=i;let r=s;t.loop&&(r-=i.loopedSlides,i.loopDestroy());let a,o=r;if("object"===typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)a=e[t],i.slides[a]&&i.slides[a].remove(),a<o&&(o-=1);o=Math.max(o,0)}else a=e,i.slides[a]&&i.slides[a].remove(),a<o&&(o-=1),o=Math.max(o,0);i.recalcSlides(),t.loop&&i.loopCreate(),t.observer&&!i.isElement||i.update(),t.loop?i.slideTo(o+i.loopedSlides,0,!1):i.slideTo(o,0,!1)}function k(){const e=this,i=[];for(let t=0;t<e.slides.length;t+=1)i.push(t);e.removeSlide(i)}var A=t(93547),C=t(73738),E=t(41816),M=t(75682),P=t(84162),L=t(60918);const j=[a.A,o.A,n.A,p.A,l.A,d.A,w.A,c.A,h.A,g.A,b.A,u.A,f.A,v.A,m.A,function(e){let i,t,s,r,{swiper:a,extendParams:o,on:n}=e;o({grid:{rows:1,fill:"column"}});const p=()=>{let e=a.params.spaceBetween;return"string"===typeof e&&e.indexOf("%")>=0?e=parseFloat(e.replace("%",""))/100*a.size:"string"===typeof e&&(e=parseFloat(e)),e};n("init",(()=>{r=a.params.grid&&a.params.grid.rows>1})),n("update",(()=>{const{params:e,el:i}=a,t=e.grid&&e.grid.rows>1;r&&!t?(i.classList.remove("".concat(e.containerModifierClass,"grid"),"".concat(e.containerModifierClass,"grid-column")),s=1,a.emitContainerClasses()):!r&&t&&(i.classList.add("".concat(e.containerModifierClass,"grid")),"column"===e.grid.fill&&i.classList.add("".concat(e.containerModifierClass,"grid-column")),a.emitContainerClasses()),r=t})),a.grid={initSlides:e=>{const{slidesPerView:r}=a.params,{rows:o,fill:n}=a.params.grid,p=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:e.length;s=Math.floor(p/o),i=Math.floor(p/o)===p/o?p:Math.ceil(p/o)*o,"auto"!==r&&"row"===n&&(i=Math.max(i,r*o)),t=i/o},unsetSlides:()=>{a.slides&&a.slides.forEach((e=>{e.swiperSlideGridSet&&(e.style.height="",e.style[a.getDirectionLabel("margin-top")]="")}))},updateSlide:(e,r,o)=>{const{slidesPerGroup:n}=a.params,l=p(),{rows:d,fill:w}=a.params.grid,c=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:o.length;let h,g,b;if("row"===w&&n>1){const t=Math.floor(e/(n*d)),s=e-d*n*t,a=0===t?n:Math.min(Math.ceil((c-t*d*n)/d),n);b=Math.floor(s/a),g=s-b*a+t*n,h=g+b*i/d,r.style.order=h}else"column"===w?(g=Math.floor(e/d),b=e-g*d,(g>s||g===s&&b===d-1)&&(b+=1,b>=d&&(b=0,g+=1))):(b=Math.floor(e/t),g=e-b*t);r.row=b,r.column=g,r.style.height="calc((100% - ".concat((d-1)*l,"px) / ").concat(d,")"),r.style[a.getDirectionLabel("margin-top")]=0!==b?l&&"".concat(l,"px"):"",r.swiperSlideGridSet=!0},updateWrapperSize:(e,t)=>{const{centeredSlides:s,roundLengths:r}=a.params,o=p(),{rows:n}=a.params.grid;if(a.virtualSize=(e+o)*i,a.virtualSize=Math.ceil(a.virtualSize/n)-o,a.params.cssMode||(a.wrapperEl.style[a.getDirectionLabel("width")]="".concat(a.virtualSize+o,"px")),s){const e=[];for(let i=0;i<t.length;i+=1){let s=t[i];r&&(s=Math.floor(s)),t[i]<a.virtualSize+t[0]&&e.push(s)}t.splice(0,t.length),t.push(...e)}}}},function(e){let{swiper:i}=e;Object.assign(i,{appendSlide:y.bind(i),prependSlide:x.bind(i),addSlide:S.bind(i),removeSlide:z.bind(i),removeAllSlides:k.bind(i)})},A.A,C.A,E.A,M.A,P.A,L.A];r.S.use(j);var O=t(84023);const T=e=>{if(parseFloat(e)===Number(e))return Number(e);if("true"===e)return!0;if(""===e)return!0;if("false"===e)return!1;if("null"===e)return null;if("undefined"!==e){if("string"===typeof e&&e.includes("{")&&e.includes("}")&&e.includes('"')){let t;try{t=JSON.parse(e)}catch(i){t=e}return t}return e}},R=["a11y","autoplay","controller","cards-effect","coverflow-effect","creative-effect","cube-effect","fade-effect","flip-effect","free-mode","grid","hash-navigation","history","keyboard","mousewheel","navigation","pagination","parallax","scrollbar","thumbs","virtual","zoom"];function D(e,i,t){const a={},o={};(0,O.e)(a,r.d);const n=[...O.p,"on"],p=n.map((e=>e.replace(/_/,"")));n.forEach((i=>{i=i.replace("_",""),"undefined"!==typeof e[i]&&(o[i]=e[i])}));const l=[...e.attributes];return"string"===typeof i&&"undefined"!==typeof t&&l.push({name:i,value:(0,O.i)(t)?(0,s.A)({},t):t}),l.forEach((e=>{const i=R.find((i=>e.name.startsWith("".concat(i,"-"))));if(i){const t=(0,O.c)(i),s=(0,O.c)(e.name.split("".concat(i,"-"))[1]);"undefined"===typeof o[t]&&(o[t]={}),!0===o[t]&&(o[t]={enabled:!0}),o[t][s]=T(e.value)}else{const i=(0,O.c)(e.name);if(!p.includes(i))return;const t=T(e.value);o[i]&&R.includes(e.name)&&!(0,O.i)(t)?(o[i].constructor!==Object&&(o[i]={}),o[i].enabled=!!t):o[i]=t}})),(0,O.e)(a,o),a.navigation?a.navigation=(0,s.A)({prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},!0!==a.navigation?a.navigation:{}):!1===a.navigation&&delete a.navigation,a.scrollbar?a.scrollbar=(0,s.A)({el:".swiper-scrollbar"},!0!==a.scrollbar?a.scrollbar:{}):!1===a.scrollbar&&delete a.scrollbar,a.pagination?a.pagination=(0,s.A)({el:".swiper-pagination"},!0!==a.pagination?a.pagination:{}):!1===a.pagination&&delete a.pagination,{params:a,passedParams:o}}const H=":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}";const _="undefined"===typeof window||"undefined"===typeof HTMLElement?class{}:HTMLElement,B='<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>\n    ',I=(e,i)=>{if("undefined"!==typeof CSSStyleSheet&&e.adoptedStyleSheets){const t=new CSSStyleSheet;t.replaceSync(i),e.adoptedStyleSheets=[t]}else{const t=document.createElement("style");t.rel="stylesheet",t.textContent=i,e.appendChild(t)}};class q extends _{constructor(){super(),this.attachShadow({mode:"open"})}static get nextButtonSvg(){return B}static get prevButtonSvg(){return B.replace("/></svg>",' transform-origin="center" transform="rotate(180)"/></svg>')}cssStyles(){return[H,...this.injectStyles&&Array.isArray(this.injectStyles)?this.injectStyles:[]].join("\n")}cssLinks(){return this.injectStylesUrls||[]}calcSlideSlots(){const e=this.slideSlots||0,i=[...this.querySelectorAll("[slot^=slide-]")].map((e=>parseInt(e.getAttribute("slot").split("slide-")[1],10)));if(this.slideSlots=i.length?Math.max(...i)+1:0,this.rendered)if(this.slideSlots>e)for(let t=e;t<this.slideSlots;t+=1){const e=document.createElement("swiper-slide");e.setAttribute("part","slide slide-".concat(t+1));const i=document.createElement("slot");i.setAttribute("name","slide-".concat(t+1)),e.appendChild(i),this.shadowRoot.querySelector(".swiper-wrapper").appendChild(e)}else if(this.slideSlots<e){const e=this.swiper.slides;for(let i=e.length-1;i>=0;i-=1)i>this.slideSlots&&e[i].remove()}}render(){if(this.rendered)return;this.calcSlideSlots();let e=this.cssStyles();this.slideSlots>0&&(e=e.replace(/::slotted\(([a-z-0-9.]*)\)/g,"$1")),e.length&&I(this.shadowRoot,e),this.cssLinks().forEach((e=>{if(this.shadowRoot.querySelector('link[href="'.concat(e,'"]')))return;const i=document.createElement("link");i.rel="stylesheet",i.href=e,this.shadowRoot.appendChild(i)}));const i=document.createElement("div");i.classList.add("swiper"),i.part="container",i.innerHTML='\n      <slot name="container-start"></slot>\n      <div class="swiper-wrapper" part="wrapper">\n        <slot></slot>\n        '.concat(Array.from({length:this.slideSlots}).map(((e,i)=>'\n        <swiper-slide part="slide slide-'.concat(i,'">\n          <slot name="slide-').concat(i,'"></slot>\n        </swiper-slide>\n        '))).join(""),'\n      </div>\n      <slot name="container-end"></slot>\n      ').concat((0,O.n)(this.passedParams)?'\n        <div part="button-prev" class="swiper-button-prev">'.concat(this.constructor.prevButtonSvg,'</div>\n        <div part="button-next" class="swiper-button-next">').concat(this.constructor.nextButtonSvg,"</div>\n      "):"","\n      ").concat((0,O.a)(this.passedParams)?'\n        <div part="pagination" class="swiper-pagination"></div>\n      ':"","\n      ").concat((0,O.b)(this.passedParams)?'\n        <div part="scrollbar" class="swiper-scrollbar"></div>\n      ':"","\n    "),this.shadowRoot.appendChild(i),this.rendered=!0}initialize(){var e=this;if(this.initialized)return;this.initialized=!0;const{params:i,passedParams:t}=D(this);this.swiperParams=i,this.passedParams=t,delete this.swiperParams.init,this.render(),this.swiper=new r.S(this.shadowRoot.querySelector(".swiper"),(0,s.A)((0,s.A)((0,s.A)({},i.virtual?{}:{observer:!0}),i),{},{touchEventsTarget:"container",onAny:function(t){"observerUpdate"===t&&e.calcSlideSlots();const s=i.eventsPrefix?"".concat(i.eventsPrefix).concat(t.toLowerCase()):t.toLowerCase();for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];const n=new CustomEvent(s,{detail:a,bubbles:"hashChange"!==t,cancelable:!0});e.dispatchEvent(n)}}))}connectedCallback(){this.initialized&&this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||!1!==this.init&&"false"!==this.getAttribute("init")&&this.initialize()}disconnectedCallback(){this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||(this.swiper&&this.swiper.destroy&&this.swiper.destroy(),this.initialized=!1)}updateSwiperOnPropChange(e,i){const{params:t,passedParams:r}=D(this,e,i);this.passedParams=r,this.swiperParams=t,this.swiper&&this.swiper.params[e]===i||(0,O.u)((0,s.A)((0,s.A)((0,s.A)({swiper:this.swiper,passedParams:this.passedParams,changedParams:[(0,O.c)(e)]},"navigation"===e&&r[e]?{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}:{}),"pagination"===e&&r[e]?{paginationEl:".swiper-pagination"}:{}),"scrollbar"===e&&r[e]?{scrollbarEl:".swiper-scrollbar"}:{}))}attributeChangedCallback(e,i,t){this.initialized&&("true"===i&&null===t&&(t=!1),this.updateSwiperOnPropChange(e,t))}static get observedAttributes(){return O.p.filter((e=>e.includes("_"))).map((e=>e.replace(/[A-Z]/g,(e=>"-".concat(e))).replace("_","").toLowerCase()))}}O.p.forEach((e=>{"init"!==e&&(e=e.replace("_",""),Object.defineProperty(q.prototype,e,{configurable:!0,get(){return(this.passedParams||{})[e]},set(i){this.passedParams||(this.passedParams={}),this.passedParams[e]=i,this.initialized&&this.updateSwiperOnPropChange(e,i)}}))}));class Z extends _{constructor(){super(),this.attachShadow({mode:"open"})}render(){const e=this.lazy||""===this.getAttribute("lazy")||"true"===this.getAttribute("lazy");if(I(this.shadowRoot,"::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}"),this.shadowRoot.appendChild(document.createElement("slot")),e){const e=document.createElement("div");e.classList.add("swiper-lazy-preloader"),e.part.add("preloader"),this.shadowRoot.appendChild(e)}}initialize(){this.render()}connectedCallback(){this.initialize()}}const F=()=>{"undefined"!==typeof window&&(window.customElements.get("swiper-container")||window.customElements.define("swiper-container",q),window.customElements.get("swiper-slide")||window.customElements.define("swiper-slide",Z))};"undefined"!==typeof window&&(window.SwiperElementRegisterParams=e=>{O.p.push(...e)})}}]);