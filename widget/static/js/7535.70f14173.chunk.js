"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7535],{37535:(e,n,a)=>{a.r(n),a.d(n,{default:()=>d});var s=a(47313),r=a(98501),t=a(46417);const l=s.lazy((()=>a.e(3378).then(a.bind(a,3378)))),g=s.lazy((()=>a.e(3854).then(a.bind(a,83854)))),i=s.lazy((()=>a.e(7120).then(a.bind(a,87120)))),m=s.lazy((()=>a.e(5883).then(a.bind(a,65883)))),c=s.lazy((()=>a.e(704).then(a.bind(a,704)))),u=e=>{let{Banner:n}=e;switch(n.bannerType){case 2:return(0,t.jsxs)(s.Suspense,{fallback:(0,t.jsx)(t.Fragment,{}),children:[" ",(0,t.jsx)(l,{Banner:n})]});case 3:return(0,t.jsxs)(s.Suspense,{fallback:(0,t.jsx)(t.Fragment,{}),children:[" ",(0,t.jsx)(g,{Banner:n})]});case 4:return(0,t.jsxs)(s.Suspense,{fallback:(0,t.jsx)(t.Fragment,{}),children:[" ",(0,t.jsx)(i,{Banner:n})]});case 5:return(0,t.jsxs)(s.Suspense,{fallback:(0,t.jsx)(t.Fragment,{}),children:[" ",(0,t.jsx)(m,{Banner:n})]});default:return(0,t.jsx)(t.Fragment,{})}};class d extends s.PureComponent{render(){const{Banner:e,BannerImage:n}=this.props;return e.CustomBannerImage&&e.CustomBannerImage.includes(r.ho)&&(e.CustomBannerImage=String(e.CustomBannerImage).replace(r.lO,"")),e.LogoImage&&e.LogoImage.includes(r.ho)&&(e.LogoImage=String(e.LogoImage).replace(r.lO,"")),n.image&&n.image.includes(r.ho)&&(n.image=String(n.image).replace(r.lO,"")),(0,t.jsxs)("div",{className:"tb_wall_header__",children:[1===e.status?(0,t.jsx)(u,{Banner:e}):"",1===n.status&&""!==n.image&&""!==n.image.split(r.lO)[1]?(0,t.jsxs)(s.Suspense,{fallback:(0,t.jsx)(t.Fragment,{}),children:[" ",(0,t.jsx)(c,{ImageUrl:n.image})]}):""]})}}}}]);