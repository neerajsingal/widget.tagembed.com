(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3298,7033,7234,757],{31431:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});s(72791);var n=s(97234),a=s(23450),o=s(19036),r=s(70757),c=s(2703),i=s(46535),l=s(80184);const _=i.ZQ?null:200,d=t=>{let{itemData:e,personalization:s,ThemeRule:i,toggleDivs:d}=t;const b=e.rating>0?"tb_bt_rating_content":"tb_bt_content",u=1===e.type&&s.textDecorate?"tb_bt_text_decoration tb_bt_text_post":"",m=s.trimcontent?(0,c.Sv)(e.content,_):e.content,h=e.author.username&&e.author.username.length>0?"@".concat(e.author.username):"",p={color:i.authorColor};return(0,l.jsxs)("div",{id:"tb-bt-post-".concat(e.id),className:"tb_bt_post_in","tb-network":e.network.id,children:[(0,l.jsx)("div",{className:"tb_bt_close_btn",onClick:d,children:(0,l.jsx)("div",{className:"tb_bt_close_ico tb__icon tb-close-circle-line"})}),(0,l.jsx)(n.default,{author:e.author,network:e.network,authorClass:"tb_bt_author_profile"}),(0,l.jsxs)("div",{className:"tb_bt_post_info",children:[(0,l.jsxs)("div",{className:"tb_bt_author_info",children:[(0,l.jsx)("div",{className:"tb_bt_authorname",style:p,children:e.author.name}),(0,l.jsx)("div",{className:"tb_bt_username",style:p,children:h})]}),(0,l.jsx)("div",{className:"tb_bt_contant_wrapper",children:(0,l.jsx)(a.default,{contentClass:"".concat(b," ").concat(u),item:e,content:m,font:i,ThemeRule:i,personalization:s,contentTitle:e.contentTitle,textAlign:"left"})}),(0,l.jsx)("div",{className:"tb_bt_post_media_wrapp",children:(0,l.jsxs)("div",{className:"tb_bt_rating__",children:[(0,l.jsx)(o.Z,{rating:e.rating,network:e.network})," "]})}),(0,l.jsxs)("div",{className:"tb_bt_social_",children:[(0,l.jsx)(r.default,{networkClass:"tb_bt_social_ico",network:e.network,isDefault:1===i.iconType,ThemeRule:i}),(0,l.jsx)("div",{className:"tb_bt_network_name",children:e.network.name})]})]})]})}},97234:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var n=s(72791),a=s(2703),o=s(14496),r=s(80184);class c extends n.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,r.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});s(72791);var n=s(80184);const a=t=>{let{username:e,network:s,authorClass:a}=t;return(0,n.jsx)("img",{className:"".concat(a,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var n=s(72791),a=s(46535),o=s(2703),r=s(80184);const c=n.lazy((()=>s.e(1088).then(s.bind(s,41088))));class i extends n.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:i}=this.props,l=!!i&&(7!==t.id&&4!==t.id&&36!==t.id),_=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,r.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(_.replace(/fa-/g,"")),style:{color:(0,o.mD)(59)?null:s.iconColor},children:(0,r.jsx)("div",{})}):(0,r.jsxs)(n.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(c,{network:t,networkClass:e})]})}}},23450:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var n=s(72791),a=s(34867),o=s(2703),r=s(80184);const c=n.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class i extends n.PureComponent{constructor(t){super(t),this.contentRef=n.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:i,personalization:l,item:_,contentTitle:d,readMore:b,maxLength:u,textAlign:m,maxLines:h,isReadMore:p}=this.props,x={WebkitLineClamp:h,textAlign:s.textAlignment};m||s.textAlignment;let g=20==_.network.id?e:(0,o.Fx)(e);12==_.network.id&&(g=(0,a.ZP)(g));const f="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),v="".concat(t," ").concat(p?"":f," ").concat(s.font_varient?"tb-cTBfont-".concat(s.font_varient):"");return(0,r.jsxs)("div",{className:v,ref:this.contentRef,style:x,children:[d?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(d)}):null,(0,r.jsxs)(n.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(c,{data:_,content:g,Personalization:l})]})]})}}},19036:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var n=s(72791),a=s(46535),o=s(80184);const r=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:n,color:r}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:n,style:{color:r},"tb-network":e.id,children:(0,o.jsx)("div",{})})},c=t=>{let{ThemeID:e}=t;const{className:s,color:n}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:n},"tb-network":e})};class i extends n.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,n)=>s?(0,o.jsx)(c,{ThemeID:s},n):(0,o.jsx)(r,{network:e},n))):null})}}},50247:()=>{}}]);
//# sourceMappingURL=3298.be2a15c0.chunk.js.map