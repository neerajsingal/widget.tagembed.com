"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9208,3108,8764],{53108:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var a=i(72791),d=i(11225),s=i(2703),o=i(80184);const r=JSON.parse(window.localStorage.getItem("mediaDimension"));class l extends a.PureComponent{constructor(e){super(e),this.updateImageDimensions=()=>{if(this.mediaRef.current){1===this.mediaRef.current.getAttribute("data-load")&&this.setState({imgUrl:this.mediaRef.current.src});const e=[this.mediaRef.current.offsetHeight,this.mediaRef.current.offsetWidth];window.localStorage.setItem("mediaDimension",JSON.stringify(e)),this.setState({largerHeight:e[0]>this.state.largerHeight?e[0]:this.state.largerHeight,mediaLoaded:!0,mediaSize:{height:this.mediaRef.current.offsetHeight,width:this.mediaRef.current.offsetWidth}},(()=>this.props.mediaSizeCallback({height:this.state.mediaSize.height,width:this.state.mediaSize.width})))}},this.state={mediaSize:{height:null!=r?r[0]:"85vh",width:null!=r?r[1]:"85vh"},mediaLoaded:!1,imgUrl:e.ImageUrl,largerHeight:0},this.mediaRef=a.createRef()}componentWillReceiveProps(e){const{ImageUrl:t}=e;this.state.imgUrl!==t&&this.setState({imgUrl:t,mediaLoaded:!1})}componentDidMount(){window.addEventListener&&window.addEventListener("resize",this.updateImageDimensions)}componentWillUnmount(){window.removeEventListener("resize",this.updateImageDimensions)}render(){const{data:e,wall:t,opacity:i}=this.props,{imgUrl:a,mediaSize:r,mediaLoaded:l}=this.state;return(0,o.jsx)("div",{className:"tb_post_modal_img_holder".concat(l?"":" tb_media_modal_spinner"),style:{minHeight:l?null:r.height,minWidth:l?null:r.width},children:(0,o.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:a,alt:(0,s.P)(a),"data-link":e.link,"data-network":e.network.id,"data-wall-id":t.Wall.id,"data-owner-id":t.Wall.owner,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"data-load":"0",onLoad:this.updateImageDimensions,onError:e.stories?null:e=>{(0,d.ht)(e)},loading:"lazy",draggable:"false",style:{opacity:l?i:0}},a)})}}},89208:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var a=i(72791),d=i(53108),s=i(78764),o=i(48282),r=i(46535),l=i(80184);const n=JSON.parse(window.localStorage.getItem("mediaDimension"));class m extends a.PureComponent{constructor(e){super(e),this.mediaSize=e=>{this.props.mediaSizeCallback(e)},this.state={mediaSize:{height:null!=n?n[0]:"85vh",width:null!=n?n[1]:"85vh"}}}render(){const{imageList:e,data:t,wall:i}=this.props,{mediaSize:a}=this.state;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.default,{ImageUrl:t.postFile,data:{link:t.link,network:{id:t.networkId},id:t.id,filterId:t.filterId,stories:t.stories,feedId:t.feedId},wall:i,mediaSizeCallback:this.mediaSize,opacity:0}),(0,l.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,l.jsxs)(o.tv,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{rewind:!0,speed:1e3,gap:0,autoplay:!1,autoHeight:!0,padding:0,pagination:!0,arrows:!0,classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},children:[(0,l.jsx)(o.Gj,{children:e.map(((e,a)=>(0,l.jsxs)(o.jw,{style:{margin:0},children:[console.log("dg_1",e.networkId),2===e.type||4===e.type?(0,l.jsx)(d.default,{ImageUrl:r.ZQ?e.file:e.postFile,data:{link:t.link,network:{id:t.network.id},id:e.id,filterId:t.filterId,stories:e.stories,feedId:t.feedId},wall:i,mediaSizeCallback:this.mediaSize,opacity:1},"multi-slider".concat(a)):3===e.type||5===e.type?(0,l.jsx)(s.default,{data:{mediaUrl:r.ZQ?e.media:e.mediaFile,link:t.link,network:{id:r.ZQ?e.networkId:t.networkId},id:e.id,filterId:t.filterId,stories:e.stories?e.stories:0,postFileNew:r.ZQ?e.file:e.postFile,feedId:t.feedId},wall:i,mediaSizeCallback:this.mediaSize,opacity:1}):null]},a)))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,l.jsx)("div",{})})]})]})})]})}}},78764:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var a=i(72791),d=i(96710),s=i.n(d),o=i(11225),r=i(80184);const l=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class n extends a.PureComponent{constructor(e){super(e),this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={videoLoaded:!1},this.VideoWrap=a.createRef()}render(){const{data:e,wall:t}=this.props,{videoLoaded:i}=this.state;return(0,r.jsx)("div",{className:"tb_post_modal_video_holder".concat(i?" tb_post_video_loaded":""),ref:this.VideoWrap,children:(0,r.jsx)(s(),{className:"tb_post_modal_video video".concat(e.id),url:l(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":t.Wall.id,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,o.ib)(t,e.id)},autoPlay:!0,muted:!0,volume:0,playsinline:!0,onReady:e=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!0,style:{backgroundImage:"url(".concat(e.postFileNew,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})},e.mediaUrl)}}}}]);
//# sourceMappingURL=9208.b92e6f23.chunk.js.map