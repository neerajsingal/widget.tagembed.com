"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3378],{90484:(e,t,a)=>{a.d(t,{p:()=>o});const o=e=>{const t={backgroundImage:1==e.transparent||5==e.bannerType?"none":"url(".concat(e.CustomBannerImage,")"),backgroundColor:1==e.transparent?"transparent":e.background_color,height:e.banner_height},a={backgroundColor:1==e.transparent?"transparent":e.background_color_two},o={color:e.subTitle_font_color,fontSize:e.subTitle_font_size,fontFamily:e.subtitle_css_font},l=e.subtitle_font_varient,s={color:e.title_font_color,fontSize:e.title_font_size,fontFamily:e.title_css_font},n=e.title_font_varient;var i=50;const c={height:1.8*(i=e.social_icon_size>50?50:e.social_icon_size),width:1.8*i},r={fontSize:i},_={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},b={color:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},d={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#000"},g={color:2===e.social_icon_color_status?e.social_icon_color:"#000"},h={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"},u={color:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"};return{bannerStyle:t,bannerStyleBgRight:a,subTitleStyle:o,titleStyle:s,iconAreaStyle:c,iconStyle:r,isFacebook:String(e.social_icons).includes("1"),isTwitter:String(e.social_icons).includes("2"),isInstagram:String(e.social_icons).includes("3"),facebookIconAreaStyle:_,facebookIconStyle:b,twitterIconAreaStyle:d,twitterIconStyle:g,instagramIconAreaStyle:h,instagramIconStyle:u,subTitleVarentClass:l,titleVarentClass:n}}},3378:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});a(47313);var o=a(17739),l=a(90484),s=a(98501),n=a(46417);const i=e=>{let{Banner:t}=e;const{bannerStyle:a,subTitleStyle:i,titleStyle:c,iconAreaStyle:r,iconStyle:_,isFacebook:b,isTwitter:d,isInstagram:g,facebookIconAreaStyle:h,facebookIconStyle:u,twitterIconAreaStyle:m,twitterIconStyle:y,instagramIconAreaStyle:S,instagramIconStyle:f,subTitleVarentClass:k,titleVarentClass:I}=(0,l.p)(t);var p=t.LogoImage;if(p&&String(p).length>0&&String(p).includes("banner/logo_bnr")&&String(p).includes(s.lO))p=String(t.LogoImage).replace(s.lO,"");else if(p.includes(s.lO)&&""===p.split(s.lO)[1])p=String(t.LogoImage).replace(s.lO,"");else if(p&&String(p).length>0){let e=p.split("/").pop();"logo_bnr-2.svg"!=e&&"logo_bnr-3.svg"!=e&&"logo_bnr-5.svg"!=e||(p="".concat(s.ho,"react-app/media/banner/logo_bnr-2.svg"))}var v=a;return v&&v.backgroundImage.includes("bg-bnr-3.png")&&v.backgroundImage.includes(s.lO)&&(v.backgroundImage=v.backgroundImage.replace(s.lO,"https://test.taggbox.com/widget/assets/media/banner/")),(0,n.jsx)("div",{className:"tb_wall_header_wrap__",style:v,children:(0,n.jsxs)("div",{className:"tb_header2_row__",children:[(0,n.jsx)("div",{className:"tb_header2_column_logo__",children:p?(0,n.jsx)("div",{className:"tb_header2_logo__",children:(0,n.jsx)("img",{loading:"lazy",className:"tb_header2_logo_img__",src:p,alt:(0,o.P)(p),width:180,height:52})}):""}),(0,n.jsx)("div",{className:"tb_header2_column_icons__",children:1==t.social_icon_status?(0,n.jsxs)("div",{className:"tb_header2_social_icons__",children:[b?(0,n.jsx)("a",{href:t.facebook_url?(0,o.hd)(t.facebook_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Facebook",style:{...r,...h},children:(0,n.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-facebook",style:{..._,...u},children:" "})}):"",d?(0,n.jsx)("a",{href:t.twitter_url?(0,o.hd)(t.twitter_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Twitter",style:{...r,...m},children:(0,n.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-twitter",style:{..._,...y}})}):"",g?(0,n.jsx)("a",{href:t.instagram_url?(0,o.hd)(t.instagram_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Instagram",style:{...r,...S},children:(0,n.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-instagram",style:{..._,...f},children:" "})}):""]}):null}),(0,n.jsx)("div",{className:"tb_header2_column_content__",children:(0,n.jsxs)("div",{className:"tb_header2_content__",children:[(0,n.jsx)("div",{className:"tb_header2_subtitle__ tb-cTBfont-".concat(k),style:i,children:t.subTitle}),(0,n.jsx)("div",{className:"tb_header2_title__ tb-cTBfont-".concat(I),style:c,children:t.title})]})})]})})}}}]);