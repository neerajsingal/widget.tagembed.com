"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5807],{75807:(t,o,n)=>{n.r(o),n.d(o,{default:()=>v});var e=n(47313),i=n(31172),a=(n(34862),n(90182)),c=n(98501),l=n(17739),r=(n(43635),n(35179));var s=n(46417);const d=(0,l.CL)()+1e3*((0,l.QM)()+60*((0,l.dn)()+60*(0,l.eZ)())),u=()=>(0,s.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),g=t=>{var o,n;const{cardStyle:e,ctaBtn:i,button:a,popUpProperties:c,ProductSettings:s,UgcSettings:d,heading:u,subheading:g,headerLayout:p,headerBtnLayout:h,headerStar:b}=(t=>{var o;const{ThemeRule:n,Personalization:e,ProductSetting:i,UgcSettings:a,Wall:c}=t,s="#ffffff",d="#000000",u="inherit";let g,p,h,b,f;"undefined"!==typeof i&&i?({Button:g,CatalogueTitle:p,Price:h,ProductTitle:b,Hotspot:f}=i):(p={fontLink:"",font:"",varient:"",size:"",color:"",text:""},b={fontLink:"",font:"",varient:"",size:"",color:""},h={fontLink:"",font:"",varient:"",size:"",color:""},g={fontLink:"",font:"",varient:"",size:"",background:"",color:"",text:"",newTab:""},f={type:"",background:"",color:"",status:""}),e.widgetTheme;const v=t=>{var o=[],i=[];r.ig&&(o=[61,16,53],i=[4,55,50]),r.ZQ&&(i=[4,55,16,56,50]);const a=!!o.includes(e.widgetTheme),c=!!i.includes(e.widgetTheme),u=a&&1==n.postHover||c?d:a&&0==n.postHover?s:S;return(0,l.uu)(t,u)},w=t=>{const o=t?t.split("-"):"";return{weight:o[0]?o[0]:"",style:o[1]?o[1]:""}},m=(t,o,n,e,i)=>t?n:""!=o?o:i,y=n.ctaData&&Object.keys(n.ctaData).length>0?n.ctaData:{},_=!(!n.inheritStyles||1!=n.inheritStyles),{authorColor:x,postHover:k,cardColor:S,iconColor:z,fontColor:P,css_font:W,fontSize:C,font_varient:j}=n;var L=document.querySelector("body"),T=document.querySelector("p"),B=L?window.getComputedStyle(L):T?window.getComputedStyle(T):"",F=B?B.getPropertyValue("font-size"):"",H=B&&!r.Jc?B.getPropertyValue("color"):"#2b2b2b",U=B?B.getPropertyValue("font-family"):"",V=B?B.getPropertyValue("line-height"):"",q=B?B.getPropertyValue("font-weight"):"",E=B?B.getPropertyValue("font-style"):"",D=(L=document.querySelector("body"),T=document.querySelector("p"),document.querySelector("strong")),R=document.querySelector("h2"),I=document.querySelector("h3"),A=document.querySelector("h1"),M=D?window.getComputedStyle(D):R?window.getComputedStyle(R):I?window.getComputedStyle(I):"",Q=document.querySelector(".tb_theme_title");if(Q)var Z=Q.tagName;var N=document.querySelector(".tb_theme_sub_title");if(N)var O=N.tagName;var G=[],J=[];!function(t,o){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_title")||o(t)}))}(Z,(function(t){var o=window.getComputedStyle(t),n=v(o.color),e=o.fontSize,i=o.fontWeight,a=o.fontFamily,c=o.textAlign;G.push(n,e,i,a,c)}));var X=G[0]?G[0]:u,$=G[1]?G[1]:u,K=G[2]?G[2]:u,Y=G[3]?G[3]:u,tt=G[4]?G[4]:u;!function(t,o){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_sub_title")||o(t)}))}(O,(function(t){var o=window.getComputedStyle(t),n=v(o.color),e=o.fontSize,i=o.fontWeight,a=o.fontFamily,c=o.textAlign;J.push(n,e,i,a,c)}));var ot,nt=J[0]?J[0]:u,et=J[1]?J[1]:u,it=J[2]?J[2]:u,at=J[3]?J[3]:u,ct=J[4]?J[4]:u,lt=D?window.getComputedStyle(D):A?window.getComputedStyle(A):R?window.getComputedStyle(R):I?window.getComputedStyle(I):"",rt=(lt&&lt.getPropertyValue("font-size"),M?M.getPropertyValue("color"):""),st=M?M.getPropertyValue("font-family"):"",dt=(M&&M.getPropertyValue("line-height"),M?M.getPropertyValue("font-weight"):""),ut=M?M.getPropertyValue("font-style"):"",gt=(M&&M.getPropertyValue("text-align"),document.querySelector("a")),pt=document.getElementsByTagName("button"),ht=((ot=gt?window.getComputedStyle(gt):pt.length>0?window.getComputedStyle(pt[0]):"")&&ot.getPropertyValue("font-size"),ot?ot.getPropertyValue("color"):""),bt=ot?ot.getPropertyValue("font-family"):"",ft=(ot&&ot.getPropertyValue("line-height"),ot&&ot.getPropertyValue("font-weight"),ot&&ot.getPropertyValue("font-style"),ot?ot.getPropertyValue("background-color"):""),vt=ot?ot.getPropertyValue("border-color"):"",wt=v(_?H||d:n.fontColor),mt=_?F||"14px":C&&String(C).includes("px")?C:"".concat(C,"px"),yt=_||""==W?U||u:W||u,_t=m(_,q||"400",q,0,"regular"),xt=m(_,E||"normal",E,0,"normal"),kt=v(z),St=_&&V||"1.5",zt=v(rt||d),Pt=n.aspectImageRatio?"".concat(n.aspectImageRatio,"%"):"100%",Wt=v(_?H||d:x),Ct=_||""==W?st||u:W||u,jt=_?(0,l.uu)(H||d,S):(0,l.uu)(P,S),Lt=_?16:C,Tt=_?(0,l.uu)(H||d,S):(0,l.uu)(z,S),Bt=_?Ct:""!=W?W:U||u,Ft=_?(0,l.uu)(rt||d,S):(0,l.uu)(x,S),Ht=_||""==(null===i||void 0===i||null===(o=i.CatalogueTitle)||void 0===o?void 0:o.font)?st||u:p.font,Ut=m(_,w(p.varient).style,ut,0,"normal"),Vt=m(_,w(p.varient).weight,dt,0,"600"),qt=_?"16px":"".concat(p.size,"px"),Et=_?(0,l.uu)(rt||d,S):(0,l.uu)(p.color,S),Dt=_||""==b.font?st||u:b.font?b.font:u,Rt=m(_,w(b.varient).style,ut,0,"normal"),It=m(_,w(b.varient).weight,dt,0,"600"),At=_?"14px":"".concat(b.size,"px"),Mt=_?(0,l.uu)(rt||d,S):(0,l.uu)(b.color,S),Qt=_||""==h.font?st||u:h.font?h.font:u,Zt=m(_,w(h.varient).style,ut,0,"normal"),Nt=m(_,w(h.varient).weight,dt,0,"600"),Ot=_?"14px":"".concat(h.size,"px"),Gt=_?(0,l.uu)(rt||d,S):(0,l.uu)(h.color,S),Jt=_||""==g.font?st||u:g.font?g.font:u,Xt=m(_,w(g.varient).style,ut,0,"normal"),$t=m(_,w(g.varient).weight,dt,0,"600"),Kt=_?"14px":"".concat(g.size,"px"),Yt=g.color,to=g.background,oo=_&&bt||u,no=m(_,w(g.varient).style,ut,0,"normal"),eo=m(_,w(g.varient).weight,dt,0,"600"),io=_&&ht?d:"#545454",ao=_&&ft||s,co=_&&vt?d:"#545454",lo=_||""==(null===y||void 0===y?void 0:y.font)?st||u:null===y||void 0===y?void 0:y.font,ro=m(_,w(null===y||void 0===y?void 0:y.varient).style,ut,0,"normal"),so=m(_,w(null===y||void 0===y?void 0:y.varient).weight,dt,0,"600"),uo=_?"14px":"".concat(null===y||void 0===y?void 0:y.size,"px"),go=null===y||void 0===y?void 0:y.color,po=null===y||void 0===y?void 0:y.background,ho=f.color,bo=f.background,fo=_?st||u:(null===a||void 0===a?void 0:a.onsite_css_font_btn)||(null===a||void 0===a?void 0:a.font),vo=m(_,w((null===a||void 0===a?void 0:a.onsite_font_varient_btn)||(null===a||void 0===a?void 0:a.varient)).style,ut,0,"normal"),wo=m(_,w((null===a||void 0===a?void 0:a.onsite_font_varient_btn)||(null===a||void 0===a?void 0:a.varient)).weight,dt,0,"600"),mo=_?"14px":"".concat((null===a||void 0===a?void 0:a.btn_fontSize)||(null===a||void 0===a?void 0:a.size),"px"),yo=(null===a||void 0===a?void 0:a.onsite_btn_txt_color)||(null===a||void 0===a?void 0:a.color),_o=(null===a||void 0===a?void 0:a.onsite_btn_color)||(null===a||void 0===a?void 0:a.background),xo=_?st||u:null===a||void 0===a?void 0:a.headerFont,ko=m(_,w(null===a||void 0===a?void 0:a.headerFontVariant).style,ut,0,"normal"),So=m(_,w(null===a||void 0===a?void 0:a.headerFontVariant).weight,dt,0,"600"),zo=_?"14px":"".concat(null===a||void 0===a?void 0:a.headerFontSize,"px"),Po=null===a||void 0===a?void 0:a.headerFontColor,Wo=_?st||u:null===a||void 0===a?void 0:a.buttonFontFamily,Co=m(_,w(null===a||void 0===a?void 0:a.buttonFontWeight).style,ut,0,"normal"),jo=m(_,w(null===a||void 0===a?void 0:a.buttonFontWeight).weight,dt,0,"600"),Lo=_?"14px":"".concat(null===a||void 0===a?void 0:a.buttonFontSize,"px"),To=null===a||void 0===a?void 0:a.buttonTextColor,Bo=null===a||void 0===a?void 0:a.buttonColor,Fo=null===a||void 0===a?void 0:a.ratingColor;return{cardStyle:{color:wt,fontSize:mt,font:yt,fontWeight:_t,fontStyle:xt,iconColor:kt,lineHeight:St,linkColor:zt,background:S,authorColor:Wt,authorFont:Ct,radius:[55].includes(e.widgetTheme)?"50%":"".concat(n.radius,"px"),iconPosition:"".concat(12+(n.radius?n.radius/3.5:0),"px"),cardSize:Pt},ctaBtn:{font:lo,varient:ro,weight:so,size:uo,color:go,background:po,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:go,backgroundHover:po},button:{font:oo,varient:no,weight:eo,size:"14px",color:io,borderColor:co,background:ao,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:io,backgroundHover:ao},popUpProperties:{background:S,font:yt,fontSize:"".concat(Lt,"px"),color:jt,iconColor:Tt,fontWeight:_t,fontStyle:xt,authorFont:Bt,authorFontSize:"14px",authorColor:Ft,authorfontWeight:"600"},ProductSettings:{CatalogueTitle:{font:Ht,varient:Ut,weight:Vt,size:qt,color:Et},ProductTitle:{font:Dt,varient:Rt,weight:It,size:At,color:Mt},Price:{font:Qt,varient:Zt,weight:Nt,size:Ot,color:Gt},Button:{font:Jt,varient:Xt,weight:$t,size:Kt,color:Yt,background:to},Hotspot:{color:ho,background:bo,status:1}},UgcSettings:{font:fo,varient:vo,weight:wo,size:mo,color:yo,background:_o},heading:{title:{size:$,font:Y,fontWeight:K,color:X,textalign:tt}},subheading:{subtitle:{size:et,font:at,fontWeight:it,color:nt,textalign:ct}},headerLayout:{font:xo,varient:ko,weight:So,size:zo,color:Po},headerBtnLayout:{font:Wo,varient:Co,weight:jo,size:Lo,color:To,background:Bo},headerStar:{color:Fo}}})(t),f="style-root-".concat(t.Wall.id),v=!window.location.href.includes("editor")&&((null===(o=document.querySelectorAll("[data-wall-id]"))||void 0===o?void 0:o.length)>0||(null===(n=document.querySelectorAll("[data-widget-id]"))||void 0===n?void 0:n.length)>0),w="".concat(v?"[data-wall-id],[data-widget-id]":":root,[data-widget-id]"," {\n                        --tb-color: ").concat(e.color,";\n                        --tb-font-size:").concat(e.fontSize,";\n                        --tb-font: ").concat(e.font,";\n                        --tb-font-weight: ").concat(e.fontWeight,";\n                        --tb-font-style: ").concat(e.fontStyle,";\n                        --tb-icon-color:").concat(e.iconColor,";\n                        --tb-line-height: ").concat(e.lineHeight,";\n                        --tb-link-color: ").concat(e.linkColor,";\n                        --tb-bg-color: ").concat(e.background,";\n                        --tb-author-color: ").concat(e.authorColor,";\n                        --tb-author-font: ").concat(e.authorFont,";\n                        --tb-border-radius: ").concat(e.radius,";\n                        --tb-icon-position:").concat(e.iconPosition,";\n                        --tb-media-size:").concat(e.cardSize,";\n\n                        --tb-cta-color:").concat(i.color,";\n                        --tb-cta-bg-color:").concat(i.background,";\n                        --tb-cta-border-color:").concat(i.borderColor,";\n                        --tb-cta-color-hover:").concat(i.colorHover,";\n                        --tb-cta-bg-color-hover:").concat(i.backgroundHover,";\n                        --tb-cta-border-color-hover:").concat(i.borderHover,";\n                        --tb-cta-border-radius:").concat(i.radius,";\n                        --tb-cta-padding:").concat(i.padding,";\n                        --tb-cta-height:").concat(i.minHeight,";\n                        --tb-cta-width:").concat(i.minWidth,";\n                        --tb-cta-font:").concat(i.font,";\n                        --tb-cta-font-weight:").concat(i.weight,";\n                        --tb-cta-transition:").concat(i.transition,";\n\n                        --tb-btn-color:").concat(a.color,";\n                        --tb-btn-bg-color:").concat(a.background,";\n                        --tb-btn-border-color:").concat(a.borderColor,";\n                        --tb-btn-color-hover:").concat(a.colorHover,";\n                        --tb-btn-bg-color-hover:").concat(a.backgroundHover,";\n                        --tb-btn-border-color-hover:").concat(a.borderHover,";\n                        --tb-btn-border-radius:").concat(a.radius,";\n                        --tb-btn-padding:").concat(a.padding,";\n                        --tb-btn-height:").concat(a.minHeight,";\n                        --tb-btn-width:").concat(a.minWidth,";\n                        --tb-btn-font:").concat(a.font,";\n                        --tb-btn-font-weight:").concat(a.weight,";\n                        --tb-btn-transition:").concat(a.transition,";\n\n                        --tb-popup-color:").concat(c.color,";\n                        --tb-popup-bg-color:").concat(c.background,";\n                        --tb-popup-font:").concat(c.font,";\n                        --tb-popup-font-size:").concat(c.fontSize,";\n                        --tb-popup-icon-color:").concat(c.iconColor,";\n                        --tb-popup-font-weight:").concat(c.fontWeight,";\n                        --tb-popup-font-style: ").concat(c.fontStyle,";\n\n                        --tb-popup-author-font:").concat(c.authorFont,";\n                        --tb-popup-author-font-size:").concat(c.authorFontSize,";\n                        --tb-popup-author-font-weight:").concat(c.authorfontWeight,";\n                        --tb-popup-author-color:").concat(c.authorColor,";\n\n\n                        --tb-catalogue-font:").concat(s.CatalogueTitle.font,";\n                        --tb-catalogue-varient:").concat(s.CatalogueTitle.varient,";\n                        --tb-catalogue-weight:").concat(s.CatalogueTitle.weight,";\n                        --tb-catalogue-size:").concat(s.CatalogueTitle.size,";\n                        --tb-catalogue-color:").concat(s.CatalogueTitle.color,";\n\n                        --tb-product-font:").concat(s.ProductTitle.font,";\n                        --tb-product-varient:").concat(s.ProductTitle.varient,";\n                        --tb-product-size:").concat(s.ProductTitle.size,";\n                        --tb-product-color:").concat(s.ProductTitle.color,";\n\n                        --tb-price-font:").concat(s.Price.font,";\n                        --tb-price-weight:").concat(s.Price.weight,";\n                        --tb-price-varient:").concat(s.Price.varient,";\n                        --tb-price-size:").concat(s.Price.size,";\n                        --tb-price-color:").concat(s.Price.color,";\n\n                        --tb-shop-btn-font:").concat(s.Button.font,";\n                        --tb-shop-btn-weight:").concat(s.Button.weight,";\n                        --tb-shop-btn-varient:").concat(s.Button.varient,";\n                        --tb-shop-btn-size:").concat(s.Button.size,";\n                        --tb-shop-btn-color:").concat(s.Button.color,";\n                        --tb-shop-btn-bg-color:").concat(s.Button.background,";\n\n                        --tb-hotspot-color:").concat(s.Hotspot.color,";\n                        --tb-hotspot-bg-color:").concat(s.Hotspot.background,";\n\n\n                        --tb-snap-font:").concat(d.font,";\n                        --tb-snap-varient:").concat(d.varient,";\n                        --tb-snap-size:").concat(d.size,";\n                        --tb-snap-color:").concat(d.color,";\n                        --tb-snap-bg-color:").concat(d.background,";\n\n                        --tb-t-font-size:").concat(u.title.size,";\n                        --tb-t-font-family:").concat(u.title.font,";\n                        --tb-t-font-weight:").concat(u.title.fontWeight,";\n                        --tb-t-color:").concat(u.title.color,";\n                        --tb-t-text-align:").concat(u.title.textalign,";\n\n                        --tb-st-font-size:").concat(g.subtitle.size,";\n                        --tb-st-font-family:").concat(g.subtitle.font,";\n                        --tb-st-font-weight:").concat(g.subtitle.fontWeight,";\n                        --tb-st-color:").concat(g.subtitle.color,";\n                        --tb-st-text-align:").concat(g.subtitle.textalign,";\n\n\n                        --tb-header-review-font:").concat(p.font,";\n                        --tb-header-review-varient:").concat(p.varient,";\n                        --tb-header-review-size:").concat(p.size,";\n                        --tb-header-review-color:").concat(p.color,";\n\n                        --tb-btn-review-font:").concat(h.font,";\n                        --tb-btn-review-varient:").concat(h.varient,";\n                        --tb-btn-review-size:").concat(h.size,";\n                        --tb-btn-review-color:").concat(h.color,";\n                        --tb-btn-review-bg-color:").concat(h.background,";\n                        \n                         --tb-review-start-color:").concat(b.color,";\n\n                        \n                    }");if(!document.getElementById(f)){const t=document.createElement("style");t.type="text/css",t.id=f,t.innerHTML=w,document.head.appendChild(t)}},p=t=>{try{["#style-root-".concat(t),"#css-".concat(t)].forEach((t=>{var o;return null===(o=document.querySelector(t))||void 0===o?void 0:o.remove()}))}catch(o){}},h=t=>{const o="css-".concat(t.Wall.id);if(!document.getElementById(o)&&1===t.Personalization.cssStatus){const n=document.createElement("style");n.type="text/css",n.id=o,n.innerHTML=t.Personalization.css,document.head.appendChild(n)}},b=()=>{try{const o=i.parse(window.location.search);var t=document.documentElement;o&&o.lang?t.setAttribute("lang",o.lang):t.setAttribute("lang","de")}catch(o){console.error(o)}};class f extends e.Component{constructor(t){super(t),this.onLoadModule=t=>{const o=(window.location.href.includes("hashtag_campaign"),!1),{wall:n}=t;n.Wall.id,n.Wall.owner;if(o){const t=(0,l.Bq)(n.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}};this.props.wall.ThemeRule.ctaData&&Object.keys(this.props.wall.ThemeRule.ctaData).length>0&&this.props.wall.ThemeRule.ctaData;this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(d):""}}componentDidMount(){this.onLoadModule(this.props)}componentWillReceiveProps(t){var o,n;if(t!=this.props&&r.Jc)p(null===t||void 0===t||null===(o=t.wall)||void 0===o||null===(n=o.Wall)||void 0===n?void 0:n.id),this.onLoadModule(t);else if(t!=this.props&&window.location.href.includes("addfeedload=load")){var e,i;p(null===t||void 0===t||null===(e=t.wall)||void 0===e||null===(i=e.Wall)||void 0===i?void 0:i.id),this.onLoadModule(t)}}render(){var t,o,n,e,i,l;const{hashtag_campaign_image:d}=this.state,{wall:p}=this.props,f=new URLSearchParams(window.location.search).get("preview"),v=p.Personalization.widgetTheme,w=(window.location.href.includes("hashtag_campaign"),!1),m=r.nX?"Tagbox UGC Suite":r.ZQ?"Tagembed Widget":"Taggbox";var y=["inherit","Default"],_=["Inter"];return p.UgcSettings&&p.UgcSettings.onsite_link_font_btn&&!y.includes(p.UgcSettings.onsite_link_font_btn)&&_.push(p.UgcSettings.onsite_link_font_btn),p.UgcSettings&&p.UgcSettings.onsite_link_font_msg&&!y.includes(p.UgcSettings.onsite_link_font_msg)&&_.push(p.UgcSettings.onsite_link_font_msg),p.ThemeRule.link_font&&!y.includes(p.ThemeRule.link_font)&&_.push(p.ThemeRule.link_font),p.Banner&&Object.keys(p.Banner).length&&(p.Banner.subtitle_link_font&&!y.includes(p.Banner.subtitle_link_font)&&_.push(p.Banner.subtitle_link_font),p.Banner.title_link_font&&!y.includes(p.Banner.title_link_font)&&_.push(p.Banner.title_link_font)),p.ProductSetting&&Object.keys(p.ProductSetting).length&&(p.ProductSetting.Button.fontLink&&!y.includes(p.ProductSetting.Button.fontLink)&&_.push(p.ProductSetting.Button.fontLink),p.ProductSetting.CatalogueTitle.fontLink&&!y.includes(p.ProductSetting.CatalogueTitle.fontLink)&&_.push(p.ProductSetting.CatalogueTitle.fontLink),p.ProductSetting.Price.fontLink&&!y.includes(p.ProductSetting.Price.fontLink)&&_.push(p.ProductSetting.Price.fontLink),p.ProductSetting.ProductTitle.fontLink&&!y.includes(p.ProductSetting.ProductTitle.fontLink)&&_.push(p.ProductSetting.ProductTitle.fontLink)),null!==p&&void 0!==p&&null!==(t=p.UgcSettings)&&void 0!==t&&t.buttonFontLink&&!y.includes(null===p||void 0===p||null===(o=p.UgcSettings)||void 0===o?void 0:o.buttonFontLink)&&_.push(null===p||void 0===p||null===(n=p.UgcSettings)||void 0===n?void 0:n.buttonFontLink),null!==p&&void 0!==p&&null!==(e=p.UgcSettings)&&void 0!==e&&e.headerFontLink&&!y.includes(null===p||void 0===p||null===(i=p.UgcSettings)||void 0===i?void 0:i.headerFontLink)&&_.push(null===p||void 0===p||null===(l=p.UgcSettings)||void 0===l?void 0:l.headerFontLink),_=_.filter(((t,o,n)=>n&&n.indexOf(t)===o)),(0,s.jsxs)(s.Fragment,{children:[w?(0,s.jsxs)(a.q,{children:[r.nX?(0,s.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(p.Wall.id)}),(0,s.jsx)("meta",{property:"og:title",content:"".concat(p.Wall.name," - ").concat(m," Widget")}),(0,s.jsx)("meta",{property:"og:description",content:"".concat(p.Wall.name," hashtag campaign created using ").concat(m," Widget.")}),(0,s.jsx)("meta",{property:"og:image",content:d}),(0,s.jsx)("meta",{property:"type",content:"website"}),(0,s.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(p.Wall.id)}),(0,s.jsx)("meta",{property:"title",content:"".concat(p.Wall.name," - ").concat(m," Widget")}),(0,s.jsx)("meta",{property:"description",content:"".concat(p.Wall.name," hashtag campaign created using ").concat(m," Widget.")}),(0,s.jsx)("meta",{property:"image",content:d}),f?document.body.classList.add("tb_previw_th-".concat(v)):null,_.map((function(t,o){return"0"!=t?(0,s.jsx)("link",{href:"".concat(c.$p,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),u(),p.Wall&&p.Wall.google_tacking_status?(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,p.Wall&&p.Wall.google_tacking_status?(0,s.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(p.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")||window.location.href.includes("widgets.tagembed.com")||window.location.href.includes("widget-test.tagshop.ai")||window.location.href.includes("widget.tagshop.ai")?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.q,{children:[r.nX?(0,s.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):r.ZQ?(0,s.jsx)("link",{rel:"icon",href:"https://tagembed.com/wp-content/uploads/2020/09/favicon.ico"}):null,(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:url",content:r.ZQ?"https://widget.tagembed.com/".concat(p.Wall.id):"https://widget-lite.taggbox.com/".concat(p.Wall.id)}),(0,s.jsx)("meta",{property:"og:title",content:"".concat(p.Wall.name," - ").concat(m," Widget")}),(0,s.jsx)("meta",{property:"og:description",content:"".concat(p.Wall.name," featuring Social Feed using ").concat(m," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,s.jsx)("meta",{property:"og:image",content:d}),(0,s.jsx)("meta",{property:"type",content:"website"}),(0,s.jsx)("meta",{property:"url",content:r.ZQ?"https://widget.tagembed.com/".concat(p.Wall.id):"https://widget-lite.taggbox.com/".concat(p.Wall.id)}),(0,s.jsx)("meta",{property:"title",content:"".concat(p.Wall.name," - ").concat(m," Widget")}),(0,s.jsx)("meta",{property:"description",content:"".concat(p.Wall.name," featuring Social Feed using ").concat(m," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,s.jsx)("meta",{property:"image",content:d}),f?document.body.classList.add("tb_previw_th-".concat(v)):null,_.map((function(t,o){return"0"!=t?(0,s.jsx)("link",{href:"".concat(c.$p,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),u(),p.Wall&&p.Wall.google_tacking_status?(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,p.Wall&&p.Wall.google_tacking_status?(0,s.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(p.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}),132857==p.Wall.owner&&r.Jx?b():null]}):(0,s.jsxs)(a.q,{children:[f?document.body.classList.add("tb_previw_th-".concat(v)):null,_.map((function(t,o){return"0"!=t?(0,s.jsx)("link",{href:"".concat(c.$p,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),u(),p.Wall&&p.Wall.google_tacking_status?(0,s.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,p.Wall&&p.Wall.google_tacking_status?(0,s.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(p.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}),g(p),h(p)]})}}const v=(0,e.memo)(f)}}]);