"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9969],{32446:(t,e,o)=>{o.d(e,{A:()=>s});var l=o(9950),i=o(44414);const n=l.lazy((()=>o.e(620).then(o.bind(o,20620)))),s=t=>{let{filterIconClass:e,network:o,isDefault:s}=t;return!!s||(7===o.id||4===o.id||36===o.id)?(0,i.jsxs)(l.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:o,networkClass:e})]}):(0,i.jsx)("div",{className:`${e} tb__icon tb-${o.icon}`,children:(0,i.jsx)("div",{children:" "})})}},69969:(t,e,o)=>{o.r(e),o.d(e,{default:()=>v});var l=o(9950),i=o(80415),n=o(11127),s=o(14478),d=o(32446),a=o(44414);const r=(0,l.memo)((t=>{let{LogoImage:e,title:o,networkID:l}=t;return(0,a.jsx)("div",{className:"tb_sb__brand",children:(0,a.jsx)("div",{className:"tb_sb__brand_icon",children:(0,a.jsx)("img",{loading:"lazy",className:"tb_brand_img",height:64,width:64,src:e,alt:"",onError:t=>t.target.src=`https://ui-avatars.com/api/?name=${o}&background=${"000"}&color=${"fff"}&length=1`})})},`network_image_${l}`)}));class c extends l.Component{constructor(t){super(t),this.toggleDropdown=()=>{this.setState({isOpen:!this.state.isOpen})},this.onUpdate=t=>{const{Banner:e}=this.props,o=e.find((e=>e.networkId===t));o&&(((t,e)=>{const o=document.createElement("link");o.id=`link_${t}`,o.rel="stylesheet",o.type="text/css",o.href=`${i.tY}/web-fonts/${e}.css`,document.head.appendChild(o)})(t,null===o||void 0===o?void 0:o.title_link_font),this.setState({data:o,networkID:t}))},this.onClickWebFilters=t=>e=>{const{appData:o}=this.props;if(o){const{wall:e,postData:l}=o,i=null===l||void 0===l?void 0:l.appendData,n=Math.floor(Date.now()/1e3);let s=e.ThemeRule.numberOfPosts;this.props.filterPostDataAppendWebFilter(e.Wall.id,n,s,t,null===i||void 0===i?void 0:i.after,null===i||void 0===i?void 0:i.heightEvent,null),this.onUpdate(t)}},this.handleClickOutside=t=>{this.dropdownRef.current&&!this.dropdownRef.current.contains(t.target)&&this.setState({isOpen:!1})},this.state={networkID:0,data:null,isOpen:!1},this.dropdownRef=l.createRef()}componentDidMount(){var t;const{Banner:e}=this.props;this.onUpdate((null===e||void 0===e||null===(t=e[0])||void 0===t?void 0:t.networkId)||this.state.networkID),document.addEventListener("click",this.handleClickOutside)}componentWillUnmount(){document.removeEventListener("click",this.handleClickOutside)}render(){const{Banner:t}=this.props,{data:e,networkID:o,isOpen:i}=this.state;return e&&Object.keys(e).length>0?(0,a.jsxs)("div",{className:"tb_sb__b_cont",style:{backgroundColor:null===e||void 0===e?void 0:e.background_color},children:[(0,a.jsxs)("div",{className:"tb_sb__b_wrapper",children:[(0,a.jsxs)("div",{className:"tb_sb__profile",children:[(0,a.jsx)(r,{LogoImage:null===e||void 0===e?void 0:e.LogoImage,title:null===e||void 0===e?void 0:e.title,networkID:o}),(0,a.jsxs)("div",{className:"tb_sb___info tb-cTBfont-regular",children:[(0,a.jsx)("div",{className:"tb_sb__name","aria-label":null===e||void 0===e?void 0:e.title,style:{color:null===e||void 0===e?void 0:e.title_font_color,fontSize:parseInt(null===e||void 0===e?void 0:e.title_font_size)},children:null===e||void 0===e?void 0:e.title}),(0,a.jsx)("div",{className:"tb_sb__posts","aria-label":null===e||void 0===e?void 0:e.subTitle,style:{color:null===e||void 0===e?void 0:e.title_font_color,fontSize:parseInt(null===e||void 0===e?void 0:e.subTitle_font_size)},children:null===e||void 0===e?void 0:e.subTitle})]})]}),(0,a.jsxs)("div",{className:"tb_sb_btn_wrap_",ref:this.dropdownRef,children:[(0,a.jsx)("div",{className:"tb_sb_f_btn",onClick:0!=(null===e||void 0===e?void 0:e.networkId)?t=>window.open(null===e||void 0===e?void 0:e.followLink,"_blank"):this.toggleDropdown,style:{backgroundColor:null===e||void 0===e?void 0:e.background_color_two,color:null===e||void 0===e?void 0:e.social_icon_color,borderColor:null===e||void 0===e?void 0:e.background_color_two},children:null===e||void 0===e?void 0:e.subtitle_font_varient}),i&&(0,a.jsx)("div",{className:"tb_sb_dropdown_ "+(i?"tb_sb_dd_show":""),children:t.map(((e,o)=>0!=(null===e||void 0===e?void 0:e.networkId)?(0,a.jsx)("div",{className:"tb_sb_dd_list",onClick:e=>t&&t[o].followLink?window.open(t[o].followLink,"_blank"):null,children:null===e||void 0===e?void 0:e.networkName},o):null))})]})]}),(null===t||void 0===t?void 0:t.length)>1?(0,a.jsx)("div",{className:"tb_sb_f_wrapper",children:t.map(((t,e)=>(0,a.jsx)("div",{className:"tb_sb_f_list "+((null===t||void 0===t?void 0:t.networkId)==o?"tb_active":""),"tb-data-network":null===t||void 0===t?void 0:t.networkId,onClick:this.onClickWebFilters(null===t||void 0===t?void 0:t.networkId),children:(0,a.jsxs)("div",{className:"tb_sb_f_button tb-network-rectangular-ico-users",children:[0!=(null===t||void 0===t?void 0:t.networkId)?(0,a.jsx)(l.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(d.A,{filterIconClass:"tb_sb_f_ico",network:null===t||void 0===t?void 0:t.network,isDefault:!1})}):null,(0,a.jsx)("div",{className:"tb_sb_f_button_text",children:0==(null===t||void 0===t?void 0:t.networkId)?"All":null===t||void 0===t?void 0:t.networkName})]})},e)))}):null]},`network_${o}`):null}}const v=(0,n.Ng)((t=>({appData:t.appData})),(t=>({filterPostDataAppendWebFilter:(e,o,l,i,n,d,a)=>t((0,s.Z1)(e,o,l,i,n,d,a))})))(c)}}]);