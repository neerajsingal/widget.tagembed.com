"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[752,5867],{98511:(t,i,c)=>{c.d(i,{Z:()=>o});var s=c(98501),e=c(17739),a=c(46417);const o=t=>{let{size:i}=t;const c=t=>!(!(0,e.mD)(t)||1!=i);return(0,a.jsx)("div",{ref:t=>{t&&(t.style.setProperty("opacity","0.8","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("width","".concat(2==i?"110px":"75px"),"important"),t.style.setProperty("height","".concat(2==i?"25px":"18px"),"important"),t.style.setProperty("max-width","".concat(2==i?"110px":"75px"),"important"),t.style.setProperty("max-height","".concat(2==i?"25px":"18px"),"important"),t.style.setProperty("top","".concat(c(55)||c(62)||c(61)?"auto":"14px"),"important"),t.style.setProperty("left","".concat(c(62)||c(61)?"auto":"14px"),"important"),t.style.setProperty("right","".concat(c(55)||c(62)||c(61)?"14px":"auto"),"important"),t.style.setProperty("bottom","".concat(c(55)||c(62)||c(61)?"14px":"auto"),"important"),t.style.setProperty("margin","0 auto","important"),t.style.setProperty("position","absolute","important"),t.style.setProperty("visibility","visible","important"),t.style.setProperty("z-index","3","important"),t.style.setProperty("background-image","url(".concat(s.do,"/media/images/tagshop-light.svg)"),"important"),t.style.setProperty("background-repeat","no-repeat","important"),t.style.setProperty("background-size","contain","important"),t.style.setProperty("clip-path","initial","important"))},children:(0,a.jsx)("div",{children:" "})})}},97915:(t,i,c)=>{c.d(i,{Z:()=>p});var s=c(47313),e=c(43411),a=c(83773),o=c(6119),d=c(17739),r=c(43635),l=c(46417);const n=(0,a.componentWillAppendToBody)((t=>{let{children:i}=t;return i})),_=t=>{const i=t.product_discount>0?t.product_discount:t.product_price,c=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(c,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(i,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t,this.tracking=t=>{const{appData:i,dataItem:c}=this.props;if(i&&Object.keys(i).length>0){var s,e;const{wall:a}=i;(0,r.S5)({type:1,action:2,wall:null===a||void 0===a||null===(s=a.Wall)||void 0===s?void 0:s.id,product_id:t.id,post:c.referenceId,owner:null===a||void 0===a||null===(e=a.Wall)||void 0===e?void 0:e.owner,feed:c.feedId,currency:t.price_currency,price:t.product_discount>0?t.product_discount:t.product_price})}}}render(){const{product:t,appData:i}=this.props,{activeMouse:c}=this.state,s=i&&Object.keys(i).length>0?i.wall.ProductSetting.Hotspot:"";return s.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,i)=>{const e=(0,d.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(e),onClick:i=>{this.tracking(t.UgcProduct),i.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(i),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(c==i?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:i=>window.open(t.UgcProduct.product_url,"_blank"),children:i+1}),(0,l.jsx)(n,{children:(0,l.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(e),clickable:!0,html:_(t.UgcProduct)})})]},i)}))}):null}}const p=(0,e.$j)((t=>({appData:t.appData})))(h)},81349:(t,i,c)=>{c.d(i,{Z:()=>o});c(47313);var s=c(35179),e=c(95867),a=c(46417);const o=t=>{const{itemData:i,IconClass:c,isCenter:o,hideVideo:d,show:r}=t,l=3===i.type||5===i.type,n=7===i.network.id,_=!!(i.imageList&&i.imageList.length>0),h=1===i.isAudio,p=!!(i.ugc_products&&i.ugc_products.length>0),b=(0,a.jsx)(e.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),v=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,a.jsx)("div",{})}),x=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,a.jsx)("div",{})}),m=(0,a.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,a.jsx)("div",{})}),u=(0,a.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,a.jsx)("div",{})}),j=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,a.jsx)("div",{})}),g=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,a.jsx)("div",{})});return r?(0,a.jsxs)(a.Fragment,{children:[o&&(n||l)?(0,a.jsxs)("div",{className:"".concat(c," tb__media_ico_c"),children:[l&&!n?g:"",l&&n?b:""]}):null,p||_||l?(0,a.jsxs)("div",{className:"".concat(c," tb__media_ico_"),children:[p?j:"",_?v:"",o||!l||n||d?"":h?x:s.ZQ?u:m]}):null]}):null}},84261:(t,i,c)=>{c.r(i),c.d(i,{default:()=>n});var s=c(47313),e=c(43635),a=c(97915),o=c(2406),d=c(17739),r=c(98501),l=(c(35179),c(98511),c(46417));class n extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,i)=>{const c=document.querySelector(".track".concat(this.props.data.id));c&&(c.setAttribute("data-height",i),c.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:i}=this.props;if(i&&Object.keys(i).length>0&&[2,4,5,3].includes(i.type))if(i.mediaHeight&&""!=i.mediaHeight&&i.mediaWidth&&""!=i.mediaWidth)this.setState({paddingBottom:100*i.mediaHeight/i.mediaWidth,size:{height:parseInt(i.mediaHeight),width:parseInt(i.mediaWidth)}});else try{const{width:t,height:c}=await(0,o.Ad)(i.postFileNew);this.setState({paddingBottom:100*c/t,size:{height:parseInt(c),width:parseInt(t)}})}catch(c){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:i}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src});try{i.mediaHeight&&""!=i.mediaHeight&&i.mediaWidth&&""!=i.mediaWidth?this.onSetHeightWithWidth(i.mediaWidth,i.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(c){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:i,size:c}=this.props;t.hotspot&&t.ugc_products.length>0&&i?this.onMediaLoad():this.setState({paddingBottom:c})}componentDidMount(){const{data:t,hotspot:i,size:c}=this.props;!c||t.hotspot&&t.ugc_products.length>0&&i?this.onMediaLoad():this.setState({fixedPaddingBottom:c})}render(){const{ImageClass:t,data:i,wallID:c,themeID:s,ownerId:o,hotspot:n}=this.props,{imgUrl:_,paddingBottom:h,size:p,fixedPaddingBottom:b}=this.state,v={paddingBottom:"".concat(this.props.size?1==this.props.size?null:b:h,"%")},x={backgroundImage:"url(".concat(_,")")};if(p.width>p.height)var m="100%",u="".concat(p.height/p.width*100,"%");else u="100%",m="".concat(p.width/p.height*100,"%");const j=!!(i.hotspot&&i.ugc_products.length>0&&n),g={width:j&&this.props.size?m:null,height:j&&this.props.size?u:null};return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(i.id),style:v,children:[j?(0,l.jsx)("div",{className:"tb_blur_bg_",style:x}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:g,children:[j?(0,l.jsx)(a.Z,{product:i.ugc_products,dataItem:i}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(i.id),role:"img",src:_,height:300,width:300,"data-link":i.link,"data-load":"0","data-network":i.network.id,"data-wall-id":c,"data-owner-id":o,"data-item-id":i.id,"data-feed-id":i.feedId?i.feedId:"","data-filter-id":i.filterId,"theme-id":s,onLoad:this.onLoad,onError:i.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,e.ht)(t)},alt:(0,d.F$)(i.content)})]})]})}}},95867:(t,i,c)=>{c.r(i),c.d(i,{default:()=>d});var s=c(47313),e=c(35179),a=c(46417);const o=s.memo((t=>{let{network:i,networkClass:c}=t;const s="".concat(c," tb__icon tb_ico_default");switch(i.id){case 1:return(0,a.jsx)("div",{className:"".concat(s," tb-twitter")});case 2:case 18:return(0,a.jsx)("div",{className:"".concat(s," tb-instagram-default"),children:(0,a.jsx)("div",{})});case 3:return(0,a.jsx)("div",{className:"".concat(s," tb-facebook"),children:(0,a.jsx)("div",{})});case 4:return(0,a.jsxs)("div",{className:"".concat(s," tb-google-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});case 5:return(0,a.jsx)("div",{className:"".concat(s," tb-pinterest"),children:(0,a.jsx)("div",{})});case 6:return(0,a.jsxs)("div",{className:"".concat(s," tb-flickr-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 7:return(0,a.jsxs)("div",{className:"".concat(s," tb-youtube-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 8:return(0,a.jsx)("div",{className:"".concat(s," tb-vimeo"),children:(0,a.jsx)("div",{})});case 10:return(0,a.jsx)("div",{className:"".concat(s," tb-linkedin"),children:(0,a.jsx)("div",{})});case 11:return(0,a.jsx)("div",{className:"".concat(s," tb-tumblr"),children:(0,a.jsx)("div",{})});case 12:return(0,a.jsx)("div",{className:"".concat(s," tb-rss"),children:(0,a.jsx)("div",{})});case 15:return(0,a.jsx)("div",{className:"".concat(s," tb-workplace"),children:(0,a.jsx)("div",{})});case 19:return(0,a.jsx)("div",{className:"".concat(s," tb-yelp"),children:(0,a.jsx)("div",{})});case 20:return(0,a.jsxs)("div",{className:"".concat(s," tb-slack-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,a.jsx)("div",{})})]});case 21:return(0,a.jsx)("div",{className:"".concat(s," tb-yammer"),children:(0,a.jsx)("div",{})});case 23:return(0,a.jsx)("div",{className:"".concat(s," tb-airbnb"),children:(0,a.jsx)("div",{})});case 25:return(0,a.jsx)("div",{className:"".concat(s," tb-soundcloud"),children:(0,a.jsx)("div",{})});case 26:return(0,a.jsxs)("div",{className:"".concat(s," tb-giphy-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 28:return e.ZQ?(0,a.jsxs)("div",{className:"".concat(s," tb-capterra-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,a.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 29:return e.ZQ?(0,a.jsx)("div",{className:"".concat(s," tb-etsy"),children:(0,a.jsx)("div",{})}):(0,a.jsx)("div",{className:"".concat(s," tb-onsite-upload"),children:(0,a.jsx)("div",{})});case 30:case 32:return(0,a.jsx)("div",{className:"".concat(s," tb-vk"),children:(0,a.jsx)("div",{})});case 31:return(0,a.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 33:return(0,a.jsxs)("div",{className:"".concat(s," tb-trustpilot-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 34:return(0,a.jsxs)("div",{className:"".concat(s," tb-amazon-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 35:return(0,a.jsx)("div",{className:"".concat(s," tb-tripadvisor"),children:(0,a.jsx)("div",{})});case 36:return(0,a.jsxs)("div",{className:"".concat(s," tb-tagembed-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})})]});case 37:return(0,a.jsxs)("div",{className:"".concat(s," tb-aliexpress-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});case 38:return(0,a.jsxs)("div",{className:"".concat(s," tb-booking-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})})]});default:return""}}));class d extends s.PureComponent{render(){return(0,a.jsx)(o,{...this.props})}}}}]);