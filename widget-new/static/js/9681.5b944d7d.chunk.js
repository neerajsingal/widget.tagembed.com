"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9681],{59681:(t,n,e)=>{e.r(n),e.d(n,{default:()=>u});var o=e(72791),l=e(60173),s=e(54270),i=e(70188),a=e(2703),c=e(11225),r=e(46535),g=e(80184);const d=(0,a.CL)()+1e3*((0,a.QM)()+60*((0,a.dn)()+60*(0,a.eZ)()));class u extends o.PureComponent{constructor(t){super(t),this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(d):"",baseColor:"inherit",baseFontSize:"14px",iconColor:"",titleColor:"inherit",linkColor:"inherit",lineHeight:"1.5",titleFont:"inherit",baseFont:"inherit",btnProperties:{buttonColor:"#fff",buttonBgColor:"#000",btnBorderColor:"#000",buttonColorHover:"#fff",buttonBgColorHover:"#000",buttonBorderColorHover:"#000",btnPadding:"8px 10px",btnRadius:"3px",btnMinHeight:"44px",btnMinWidth:"115px",btnFont:"inherit",btnWeight:400,btnTransition:"all .3s ease-out 0s"},popUpProperties:{fontSize:"14px",color:"#545454",iconColor:""}}}componentDidMount(){const t=!!window.location.href.includes("hashtag_campaign"),{wall:n}=this.props,e=n.Wall.id,o=n.Wall.owner,s=window.getComputedStyle(document.body),i=document.querySelector("strong"),g=document.querySelector("p"),d=document.querySelector("h3"),u=document.querySelector("a");var h=document.querySelectorAll("button");const f=(h=h?h.length>5?h[5]:h[1]:"")?window.getComputedStyle(h):"",p=i?null!==i?window.getComputedStyle(i):window.getComputedStyle(d):"",b=window.getComputedStyle(u),_=s&&s.color?s.color:g.getPropertyValue("color"),m=s&&s["font-size"]?s["font-size"]:g.getPropertyValue("font-size"),w=s&&s["font-family"]?s["font-family"]:g.getPropertyValue("font-family"),y=s&&s["line-height"]?s["line-height"]:"1.2",k=p?p.getPropertyValue("font-family"):"",j=(f&&(f.getPropertyValue("padding-left"),f.getPropertyValue("padding-top")),f?f.getPropertyValue("border-radius"):""),x=f?f.getPropertyValue("height"):"",S=f?f.getPropertyValue("width"):"",C=f?f.getPropertyValue("font-family"):"",B=f?f.getPropertyValue("transition"):"",W=f?f.getPropertyValue("font-weight"):"",U=n.ThemeRule;n.Personalization;this.setState({baseColor:U.fontColor?U.fontColor:_,baseFontSize:U.fontSize?U.fontSize:m,iconColor:U.iconColor?U.iconColor:"",titleColor:U.authorColor?U.authorColor:p.getPropertyValue("color"),linkColor:b.getPropertyValue("color"),lineHeight:y,titleFont:U.link_font?U.link_font:k,baseFont:U.link_font?U.link_font:w,btnProperties:{buttonColor:f?f.getPropertyValue("color"):"",buttonBgColor:f?f.getPropertyValue("background-color"):"",btnBorderColor:f?f.getPropertyValue("background-color"):"",buttonColorHover:f?f.getPropertyValue("color"):"",buttonBgColorHover:f?f.getPropertyValue("background-color"):"",buttonBorderColorHover:f?f.getPropertyValue("border-color"):"",btnPadding:"8px 10px",btnRadius:j,btnMinHeight:x,btnMinWidth:S,btnWeight:W,btnFont:C,btnTransition:B},popUpProperties:{authorColor:(0,a.uu)(U.authorColor,U.cardColor),iconColor:U.iconColor?U.iconColor:"",fontSize:U.fontSize?l.tq||l.Em?U.fontSize:U.fontSize+4:m,color:U.fontColor?(0,a.uu)(U.fontColor,U.cardColor):_}}),t&&(0,c.wl)({wallId:e,domainName:r.QC?r.nX?"https://test.taggbox.com/embed-widget/lite/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://test.taggbox.com/embed-widget/lite/".concat(n.Wall.url,"?hashtag_campaign=true"):r.nX?"https://widget.taggbox.com/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://widget.taggbox.com/".concat(e),ownerId:o,screenshotSize:["1200x624"]}).then((t=>{let{data:e}=t;const{responseCode:o,responseData:l}=e;if(200==o&&l.length>0&&l[0]&&l[0].s3Url){const t=(0,a.CL)()+1e3*((0,a.QM)()+60*((0,a.dn)()+60*(0,a.eZ)()));this.setState({hashtag_campaign_image:"".concat(l[0].s3Url,"?v=").concat(t)})}else{const t=(0,a.Bq)(n.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const e=(0,a.Bq)(n.Personalization.widgetTheme);this.setState({hashtag_campaign_image:e})}))}render(){const{hashtag_campaign_image:t,baseColor:n,baseFontSize:e,iconColor:o,titleColor:l,linkColor:a,lineHeight:c,titleFont:d,baseFont:u,btnProperties:h,popUpProperties:f}=this.state,{wall:p}=this.props,b=!!(p.ThemeRule&&Object.keys(p.ThemeRule).length>0&&p.ThemeRule.link_font&&""!==p.ThemeRule.link_font),_=!(!b||"inherit"!==p.ThemeRule.link_font),m=!(!p.UgcSettings||"inherit"!==p.UgcSettings.onsite_link_font_btn),w=!(!p.UgcSettings||"inherit"!==p.UgcSettings.onsite_link_font_msg),y=!!(p.Banner&&Object.keys(p.Banner).length>0&&"inherit"===p.Banner.title_link_font),k=!!(p.Banner&&Object.keys(p.Banner).length>0&&"inherit"===p.Banner.subtitle_link_font),j=new URLSearchParams(window.location.search).get("preview"),x=p.Personalization.widgetTheme,S=!!window.location.href.includes("hashtag_campaign"),C=r.nX?"Tagbox UGC Suite":r.ZQ?"Tagembed Widget":"Taggbox";return S?(0,g.jsxs)(s.q,{children:[r.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(p.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(p.Wall.name," - ").concat(C," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(p.Wall.name," hashtag campaign created using ").concat(C," Widget.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(p.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(p.Wall.name," - ").concat(C," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(p.Wall.name," hashtag campaign created using ").concat(C," Widget.")}),(0,g.jsx)("meta",{property:"image",content:t}),j?document.body.classList.add("tb_previw_th-".concat(x)):null,(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/Inter.css"),rel:"stylesheet"}),1===p.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:p.Personalization.css}):null,p.UgcSettings&&p.UgcSettings.onsite_status&&p.UgcSettings.onsite_link_font_btn&&"Default"!=p.UgcSettings.onsite_link_font_btn?m?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.UgcSettings.onsite_link_font_btn,".css"),rel:"stylesheet"}):null,p.UgcSettings&&p.UgcSettings.onsite_status&&p.UgcSettings.onsite_link_font_msg&&"Default"!=p.UgcSettings.onsite_link_font_msg?w?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.UgcSettings.onsite_link_font_msg,".css"),rel:"stylesheet"}):null,b&&p.ThemeRule.link_font&&"Default"!=p.ThemeRule.link_font?_?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.ThemeRule.link_font,".css"),rel:"stylesheet"}):null,p.Banner&&Object.keys(p.Banner).length>0&&p.Banner.subtitle_link_font&&"Default"!=p.Banner.subtitle_link_font?k?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.Banner.subtitle_link_font,".css"),rel:"stylesheet"}):null,p.Banner&&Object.keys(p.Banner).length>0&&p.Banner.title_link_font&&"Default"!=p.Banner.title_link_font?y?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.Banner.title_link_font,".css"),rel:"stylesheet"}):null,(0,g.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),p.Wall&&p.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,p.Wall&&p.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(p.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")||window.location.href.includes("widgets.tagembed.com")?(0,g.jsxs)(s.q,{children:[r.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):r.ZQ?(0,g.jsx)("link",{rel:"icon",href:"https://widgets.tagembed.com/widget/logo192.png"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:r.ZQ?"https://widget-test.tagembed.com/".concat(p.Wall.id):"https://widget-lite.taggbox.com/".concat(p.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(p.Wall.name," - ").concat(C," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(p.Wall.name," featuring Social Feed using ").concat(C," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:r.ZQ?"https://widget-test.tagembed.com/".concat(p.Wall.id):"https://widget-lite.taggbox.com/".concat(p.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(p.Wall.name," - ").concat(C," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(p.Wall.name," featuring Social Feed using ").concat(C," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"image",content:t}),j?document.body.classList.add("tb_previw_th-".concat(x)):null,(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/Inter.css"),rel:"stylesheet"}),1===p.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:p.Personalization.css}):null,p.UgcSettings&&p.UgcSettings.onsite_status&&p.UgcSettings.onsite_link_font_btn&&"Default"!=p.UgcSettings.onsite_link_font_btn?m?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.UgcSettings.onsite_link_font_btn,".css"),rel:"stylesheet"}):null,p.UgcSettings&&p.UgcSettings.onsite_status&&p.UgcSettings.onsite_link_font_msg&&"Default"!=p.UgcSettings.onsite_link_font_msg?w?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.UgcSettings.onsite_link_font_msg,".css"),rel:"stylesheet"}):null,b&&p.ThemeRule.link_font&&"Default"!=p.ThemeRule.link_font?_?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.ThemeRule.link_font,".css"),rel:"stylesheet"}):null,p.Banner&&Object.keys(p.Banner).length>0&&p.Banner.subtitle_link_font&&"Default"!=p.Banner.subtitle_link_font?k?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.Banner.subtitle_link_font,".css"),rel:"stylesheet"}):null,p.Banner&&Object.keys(p.Banner).length>0&&p.Banner.title_link_font&&"Default"!=p.Banner.title_link_font?y?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.Banner.title_link_font,".css"),rel:"stylesheet"}):null,(0,g.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),p.Wall&&p.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,p.Wall&&p.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(p.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):(0,g.jsxs)(s.q,{children:[j?document.body.classList.add("tb_previw_th-".concat(x)):null,(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/Inter.css"),rel:"stylesheet"}),p.UgcSettings&&p.UgcSettings.onsite_status&&p.UgcSettings.onsite_button_status&&p.UgcSettings.onsite_css_font_btn?(0,g.jsx)("link",{href:"https://fonts.googleapis.com/css?family=".concat(p.UgcSettings.onsite_css_font_btn),rel:"stylesheet"}):null,1===p.Personalization.cssStatus?(0,g.jsx)("style",{type:"text/css",children:p.Personalization.css}):null,p.UgcSettings&&p.UgcSettings.onsite_status&&p.UgcSettings.onsite_link_font_btn&&"Default"!=p.UgcSettings.onsite_link_font_btn?m?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.UgcSettings.onsite_link_font_btn,".css"),rel:"stylesheet"}):null,p.UgcSettings&&p.UgcSettings.onsite_status&&p.UgcSettings.onsite_link_font_msg&&"Default"!=p.UgcSettings.onsite_link_font_msg?w?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.UgcSettings.onsite_link_font_msg,".css"),rel:"stylesheet"}):null,b&&p.ThemeRule.link_font&&"Default"!=p.ThemeRule.link_font?_?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.ThemeRule.link_font,".css"),rel:"stylesheet"}):null,p.Banner&&Object.keys(p.Banner).length>0&&p.Banner.subtitle_link_font&&"Default"!=p.Banner.subtitle_link_font?k?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.Banner.subtitle_link_font,".css"),rel:"stylesheet"}):null,p.Banner&&Object.keys(p.Banner).length>0&&p.Banner.title_link_font&&"Default"!=p.Banner.title_link_font?y?null:(0,g.jsx)("link",{href:"".concat(i.do,"/web-fonts/").concat(p.Banner.title_link_font,".css"),rel:"stylesheet"}):null,(0,g.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),p.Wall&&p.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,p.Wall&&p.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(p.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,(0,g.jsx)("style",{children:":root {\n                        --tb-base-color: ".concat(n,";\n                        --tb-base-font-size:").concat(e,";\n                        --tb-icon-color:").concat(o,";\n                        --tb-title-color: ").concat(l,";\n                        --tb-link-color: ").concat(a,";\n                        --tb-line-height: ").concat(c,";\n                        --tb-title-font: ").concat(d,";\n                        --tb-base-font: ").concat(u,";\n                        --tb-btn-color:").concat(h.buttonColor,";\n                        --tb-btn-bg-color:").concat(h.buttonBgColor,";\n                        --tb-btn-border-color:").concat(h.btnBorderColor,";\n                        --tb-btn-color-hover:").concat(h.buttonColorHover,";\n                        --tb-btn-bg-color-hover:").concat(h.buttonBgColorHover,";\n                        --tb-btn-border-color-hover:").concat(h.buttonBorderColorHover,";\n                        --tb-btn-border-radius:").concat(h.btnRadius,";\n                        --tb-btn-padding:").concat(h.btnPadding,";\n                        --tb-btn-height:").concat(h.btnMinHeight,";\n                        --tb-btn-width:").concat(h.btnMinWidth,";\n                        --tb-btn-font:").concat(h.btnFont,";\n                        --tb-btn-font-weight:").concat(h.btnWeight,";\n                        --tb-btn-transition:").concat(h.btnTransition,";\n                        --tb-popup-author-color:").concat(f.authorColor,";\n                        --tb-popup-color:").concat(f.color,";\n                        --tb-popup-font-size:").concat(f.fontSize,";\n                        --tb-popup-icon-color:").concat(f.iconColor,";\n                    }")})]})}}}}]);
//# sourceMappingURL=9681.5b944d7d.chunk.js.map