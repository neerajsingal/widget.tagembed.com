"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7120],{90484:(t,e,a)=>{a.d(e,{p:()=>o});const o=t=>{const e={backgroundImage:1==t.transparent||5==t.bannerType?"none":"url(".concat(t.CustomBannerImage,")"),backgroundColor:1==t.transparent?"transparent":t.background_color,height:t.banner_height},a={backgroundColor:1==t.transparent?"transparent":t.background_color_two},o={color:t.subTitle_font_color,fontSize:t.subTitle_font_size,fontFamily:t.subtitle_css_font},l=t.subtitle_font_varient,s={color:t.title_font_color,fontSize:t.title_font_size,fontFamily:t.title_css_font},c=t.title_font_varient;var n=50;const i={height:1.8*(n=t.social_icon_size>50?50:t.social_icon_size),width:1.8*n},r={fontSize:n},_={borderColor:2===t.social_icon_color_status?t.social_icon_color:"#1b74e4"},b={color:2===t.social_icon_color_status?t.social_icon_color:"#1b74e4"},d={borderColor:2===t.social_icon_color_status?t.social_icon_color:"#000"},u={color:2===t.social_icon_color_status?t.social_icon_color:"#000"},g={borderColor:2===t.social_icon_color_status?t.social_icon_color:"#E2306C"},h={color:2===t.social_icon_color_status?t.social_icon_color:"#E2306C"};return{bannerStyle:e,bannerStyleBgRight:a,subTitleStyle:o,titleStyle:s,iconAreaStyle:i,iconStyle:r,isFacebook:String(t.social_icons).includes("1"),isTwitter:String(t.social_icons).includes("2"),isInstagram:String(t.social_icons).includes("3"),facebookIconAreaStyle:_,facebookIconStyle:b,twitterIconAreaStyle:d,twitterIconStyle:u,instagramIconAreaStyle:g,instagramIconStyle:h,subTitleVarentClass:l,titleVarentClass:c}}},87120:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var o=a(90484),l=a(98501),s=a(46417);const c=t=>{let{Banner:e}=t;const{bannerStyle:a,subTitleStyle:c,titleStyle:n,iconAreaStyle:i,iconStyle:r,isFacebook:_,isTwitter:b,isInstagram:d,facebookIconAreaStyle:u,facebookIconStyle:g,twitterIconAreaStyle:h,twitterIconStyle:m,instagramIconAreaStyle:y,instagramIconStyle:S,subTitleVarentClass:f,titleVarentClass:k}=(0,o.p)(e);var I=a;return I&&I.backgroundImage.includes("bg-bnr-3.png")&&I.backgroundImage.includes(l.lO)&&(I.backgroundImage=I.backgroundImage.replace(l.lO,"https://test.taggbox.com/widget/assets/media/banner/")),(0,s.jsx)("div",{className:"tb_wall_header_wrap__",style:I,children:(0,s.jsxs)("div",{className:"tb_header4_row__",children:[(0,s.jsx)("div",{className:"tb_header4_column_content__",children:(0,s.jsxs)("div",{className:"tb_header4_content__",children:[(0,s.jsx)("div",{className:"tb_header4_subtitle__ tb-cTBfont-".concat(f),style:c,children:e.subTitle}),(0,s.jsx)("div",{className:"tb_header4_title__ tb-cTBfont-".concat(k),style:n,children:e.title})]})}),(0,s.jsx)("div",{className:"tb_header4_column_icons__",children:1==e.social_icon_status?(0,s.jsxs)("div",{className:"tb_header4_social_icons__",children:[_?(0,s.jsx)("a",{href:e.facebook_url?e.facebook_url:null,target:"_blank",className:"tb_header4_social_icon_list__","aria-label":"Facebook",style:{...i,...u},children:(0,s.jsx)("div",{className:"tb_header4_social_icon__ tb__icon tb-facebook",style:{...r,...g},children:" "})}):"",b?(0,s.jsx)("a",{href:e.twitter_url?e.twitter_url:null,target:"_blank",className:"tb_header4_social_icon_list__","aria-label":"Twitter",style:{...i,...h},children:(0,s.jsx)("div",{className:"tb_header4_social_icon__ tb__icon tb-twitter",style:{...r,...m}})}):"",d?(0,s.jsx)("a",{href:e.instagram_url?e.instagram_url:null,target:"_blank",className:"tb_header4_social_icon_list__","aria-label":"Instagram",style:{...i,...y},children:(0,s.jsx)("div",{className:"tb_header4_social_icon__ tb__icon tb-instagram",style:{...r,...S},children:" "})}):""]}):null})]})})}}}]);