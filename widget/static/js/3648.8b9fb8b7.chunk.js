"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3648],{31898:(e,t,a)=>{a.d(t,{V:()=>o});const o=e=>{const t={backgroundImage:1==e.transparent||5==e.bannerType?"none":"url(".concat(e.CustomBannerImage,")"),backgroundColor:1==e.transparent?"transparent":e.background_color,height:e.banner_height+"px"},a={backgroundColor:1==e.transparent?"transparent":e.background_color_two},o={color:e.subTitle_font_color,fontSize:e.subTitle_font_size,fontFamily:e.subtitle_css_font},l=e.subtitle_font_varient,s={color:e.title_font_color,fontSize:e.title_font_size,fontFamily:e.title_css_font},n=e.title_font_varient;var i=50;const c={height:1.8*(i=e.social_icon_size>50?50:e.social_icon_size),width:1.8*i},r={fontSize:i},_={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},b={color:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},d={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#000"},g={color:2===e.social_icon_color_status?e.social_icon_color:"#000"},u={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"},h={color:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"};return{bannerStyle:t,bannerStyleBgRight:a,subTitleStyle:o,titleStyle:s,iconAreaStyle:c,iconStyle:r,isFacebook:String(e.social_icons).includes("1"),isTwitter:String(e.social_icons).includes("2"),isInstagram:String(e.social_icons).includes("3"),facebookIconAreaStyle:_,facebookIconStyle:b,twitterIconAreaStyle:d,twitterIconStyle:g,instagramIconAreaStyle:u,instagramIconStyle:h,subTitleVarentClass:l,titleVarentClass:n}}},13648:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var o=a(89379),l=(a(9950),a(52867)),s=a(31898),n=a(80415),i=a(44414);const c=e=>{let{Banner:t}=e;const{bannerStyle:a,subTitleStyle:c,titleStyle:r,iconAreaStyle:_,iconStyle:b,isFacebook:d,isTwitter:g,isInstagram:u,facebookIconAreaStyle:h,facebookIconStyle:m,twitterIconAreaStyle:y,twitterIconStyle:S,instagramIconAreaStyle:f,instagramIconStyle:k,subTitleVarentClass:v,titleVarentClass:I}=(0,s.V)(t);var p=t.LogoImage;if(p&&String(p).length>0&&String(p).includes("banner/logo_bnr")&&String(p).includes(n.Vy))p=String(t.LogoImage).replace(n.Vy,"");else if(p.includes(n.Vy)&&""===p.split(n.Vy)[1])p=String(t.LogoImage).replace(n.Vy,"");else if(p&&String(p).length>0){let e=p.split("/").pop();"logo_bnr-2.svg"!=e&&"logo_bnr-3.svg"!=e&&"logo_bnr-5.svg"!=e||(p="".concat(n.vr,"react-app/media/banner/logo_bnr-2.svg"))}var w=a;return w&&w.backgroundImage.includes("bg-bnr-3.png")&&w.backgroundImage.includes(n.Vy)&&(w.backgroundImage=w.backgroundImage.replace(n.Vy,"https://test.taggbox.com/widget/assets/media/banner/")),(0,i.jsx)("div",{className:"tb_wall_header_wrap__",style:w,children:(0,i.jsxs)("div",{className:"tb_header2_row__",children:[(0,i.jsx)("div",{className:"tb_header2_column_logo__",children:p?(0,i.jsx)("div",{className:"tb_header2_logo__",children:(0,i.jsx)("img",{loading:"lazy",className:"tb_header2_logo_img__",src:p,alt:(0,l.wG)(p),width:180,height:52})}):""}),(0,i.jsx)("div",{className:"tb_header2_column_icons__",children:1==t.social_icon_status?(0,i.jsxs)("div",{className:"tb_header2_social_icons__",children:[d?(0,i.jsx)("a",{href:t.facebook_url?(0,l.C9)(t.facebook_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Facebook",style:(0,o.A)((0,o.A)({},_),h),children:(0,i.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-facebook",style:(0,o.A)((0,o.A)({},b),m),children:" "})}):"",g?(0,i.jsx)("a",{href:t.twitter_url?(0,l.C9)(t.twitter_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Twitter",style:(0,o.A)((0,o.A)({},_),y),children:(0,i.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-twitter",style:(0,o.A)((0,o.A)({},b),S)})}):"",u?(0,i.jsx)("a",{href:t.instagram_url?(0,l.C9)(t.instagram_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Instagram",style:(0,o.A)((0,o.A)({},_),f),children:(0,i.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-instagram",style:(0,o.A)((0,o.A)({},b),k),children:" "})}):""]}):null}),(0,i.jsx)("div",{className:"tb_header2_column_content__",children:(0,i.jsxs)("div",{className:"tb_header2_content__",children:[(0,i.jsx)("div",{className:"tb_header2_subtitle__ tb-cTBfont-".concat(v),style:c,children:t.subTitle}),(0,i.jsx)("div",{className:"tb_header2_title__ tb-cTBfont-".concat(I),style:r,children:t.title})]})})]})})}}}]);