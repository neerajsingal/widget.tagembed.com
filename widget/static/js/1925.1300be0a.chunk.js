"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1925],{41925:(t,e,i)=>{i.r(e),i.d(e,{default:()=>v});var s=i(47313),n=i(43411),l=i(35179),a=i(43635),c=i(24576),o=i(46417);const d=(t,e)=>{try{return(t/e*100).toFixed(2)}catch(i){return 0}};class r extends s.PureComponent{constructor(t){var e,i,s;super(t),this.state={network:{name:"",avgRate:0,totalReviews:0,color:null===(e=this.props)||void 0===e||null===(i=e.wall)||void 0===i||null===(s=i.Banner)||void 0===s?void 0:s.title_font_color}}}render(){var t,e,i,s,n,a;const{reviewFilters:r,wall:v}=this.props,_=(null===v||void 0===v||null===(t=v.UserRule)||void 0===t?void 0:t.on_site_upload)&&v.UgcSettings.onsite_status&&(l.ig||v.UgcSettings.onsite_button_status);return(0,o.jsxs)("div",{className:"tb_c_container",children:[(0,o.jsx)("div",{className:"tb_c_title tb-cTBfont-".concat(null===v||void 0===v||null===(e=v.UgcSettings)||void 0===e?void 0:e.headerFontVariant),children:v.UgcSettings.headingText}),(0,o.jsxs)("div",{className:"tb_c_wrapper",children:[(0,o.jsx)("div",{className:"tb_c_rating",children:(0,o.jsxs)("div",{className:"tb_c_rating_wrap",children:[(0,o.jsxs)("div",{className:"tb_c_avg",children:[(0,o.jsx)("div",{className:"tb_c_rview_star",children:(0,o.jsx)(c.default,{size:20,rating:parseFloat(null===r||void 0===r||null===(i=r.reviewDetails)||void 0===i?void 0:i.avgRating)})}),(0,o.jsxs)("div",{className:"tb_c_review_total_post",children:[null===r||void 0===r||null===(s=r.reviewDetails)||void 0===s?void 0:s.avgRating," out of 5"]})]}),(0,o.jsxs)("div",{className:"tb_c_total",children:["Based on ",null===r||void 0===r||null===(n=r.reviewDetails)||void 0===n?void 0:n.totalReviewGiven," reviews"]})]})}),(0,o.jsx)("div",{className:"tb_c_avg_st",children:null===r||void 0===r?void 0:r.reviewList.map(((t,e)=>{var i;return(0,o.jsxs)("div",{className:"tb_c_avg_list",children:[(0,o.jsx)(c.default,{size:16,rating:t.rating}),(0,o.jsx)("div",{className:"tb_c_bar",children:(0,o.jsx)("div",{className:"tb_c_bar_active",style:{width:"".concat(d(t.count,null===r||void 0===r||null===(i=r.reviewDetails)||void 0===i?void 0:i.totalReviewGiven),"%")},children:(0,o.jsx)("div",{})})}),(0,o.jsx)("div",{className:"tb_c_rate_count",children:t.count})]},"rating_".concat(e))}))}),_?(0,o.jsx)("div",{className:"tb_c_banner_btn_wrap",ref:this.dropdownRef,children:(0,o.jsx)("div",{className:"tb_c_banner_btn tb-cTBfont-".concat(null===v||void 0===v||null===(a=v.UgcSettings)||void 0===a?void 0:a.buttonFontWeight),onClick:()=>this.props.onSitePopup(!0),children:v.UgcSettings.buttonText})}):null]})]})}}const v=(0,n.$j)((t=>({})),(t=>({filterPostDataAppendWebFilter:(e,i,s,n,l,c,o)=>t((0,a.GG)(e,i,s,n,l,c,o)),onSitePopup:e=>t((0,a.wg)(e))})))(r)}}]);