"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8167],{78167:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var a=t(9950),s=(t(52867),t(93662)),c=t(44414);class o extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:r,network:t,size:a}=this.props;return(0,c.jsx)("div",{className:r,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(r,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),srcSet:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:e.name,width:a||44,height:a||44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,c.jsx)(s.A,{authorClass:r,username:e.name,network:t,color:null===t.id?"#000":t.color,errorPic:e.errorPic})},Math.random())}}},93662:(e,r,t)=>{t.d(r,{A:()=>o});var a=t(9950),s=t(44414);const c=e=>{let{username:r,network:t,authorClass:a,errorPic:c}=e;const o="#ffffff"==t.color?"#000":t.color;return(0,s.jsx)("img",{className:"".concat(a,"__"),src:c||"https://ui-avatars.com/api/?name=".concat(r.replace(/\s/g,""),"&background=").concat(String(null===t.id?"#000":o).replace("#",""),"&color=fff&length=1"),alt:r,width:45,height:45,"aria-label":"author image"})},o=(0,a.memo)(c)}}]);