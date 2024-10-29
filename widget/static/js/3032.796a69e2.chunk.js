"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3032],{53032:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var a=t(47313),o=t(98501),s=t(35179),n=t(17739),l=t(46417);const i=a.lazy((()=>Promise.all([t.e(7914),t.e(589)]).then(t.bind(t,66538)))),c=a.lazy((()=>Promise.all([t.e(6390),t.e(6574)]).then(t.bind(t,15929)))),d=a.lazy((()=>Promise.all([t.e(6390),t.e(33)]).then(t.bind(t,1265)))),h=a.memo((e=>{var r;let{error:t,wall:i}=e,h=t.errorWithMessage,p=!!window.editor||window.location.pathname.includes("/editor");const u="tagembed"==(null===i||void 0===i||null===(r=i.User)||void 0===r?void 0:r.userDatabaseType)||window.location.href.includes("tagembed");if(h)return h&&Object.keys(h).length>0?"VISITOR_LIMIT_EXCEEDED"==h.type?(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{title:"Page Views Limit Exceeded",description:"Oops! Seems Page Views Limit for the plan exceeded. If you are the owner of this Taggbox account, please click below link to access your account.",button:'<a href="'.concat(u?s.qu:o._r,'" target="_blank" class="tb_error_btn_primary">Update Now</a>')})}):s.ZQ?(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[(0,l.jsx)(d,{title:h&&h.errorData?h.errorData.errorHeading:"Wall Not exist",description:h&&h.errorData?h.errorData.errorMessage:"",isLink:h&&h.errorData?h.errorData.errorBtnLink:"#",button:h&&h.errorData&&h.errorData.errorBtnLink&&h.errorData.errorBtnTxt?'<a href="'.concat(h&&h.errorData?h.errorData.errorBtnLink:"#",'" target="_blank" class="tb_error_btn_primary">').concat(h&&h.errorData?h.errorData.errorBtnTxt:"","</a>"):""})," "]}):(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[(0,l.jsx)(d,{title:null!==h&&void 0!==h&&h.message?h.message:"Wall Not exist",description:"Oops! Seems like something went wrong. If you are the owner of this Taggbox account, please click below link to access your account.",button:'<a href = "'.concat(u?s.qu:o._r,'" target = "_blank" class="tb_error_btn_primary"> Access Now</a > ')})," "]}):null;if(t.planLimit)return(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[(0,l.jsx)(d,{title:"You're Running Extra Widgets/Feeds!",description:"To enjoy uninterrupted services, kindly revoke the additional widget / feed or upgrade your plan.",button:'<a href="'.concat(o._r,'" target="_blank" class="tb_error_btn_primary">Update Now</a>')})," "]});if(!t.themeError||!Object.keys(t.themeError).length)return h&&Object.keys(h).length>0?(0,l.jsx)(c,{error:t}):null;switch(t.themeError.error_code){case 201:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:"If the Moderation is ON, approve the posts from the moderation section to make them appear on your widget. Else, there won\u2019t be any posts on your added feeds."})});case 202:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...t.themeError,wall:i,editor:p,title:"No Feeds!",description:"Seems like you have not added any feed. Kindly add feed from your preferred social network"})});case 203:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...t.themeError,wall:i,editor:p,title:"Feed Not Activated!",description:'Looks like your feed status is off. <a href="'.concat(o._r,"/wall/index/").concat(i.Wall.id,'" target="blank">Click here</a> to turn the status on! Or add another feed')})});case 204:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...t.themeError,wall:i,editor:p,title:"Feed Not Authorized!",description:'It appears that you have not authorized any Feed. Please <a target="_blank" href="'.concat(o._r,"/wall/index/").concat(i.Wall.id,'" rel="noopener noreferrer">Click here</a> to authorize now!')})});case 205:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...t.themeError,wall:i,editor:p,title:"No Tweets/Posts!",description:'Currently, No Tweets/Posts are available on the entered <div class="tb_error_highlight">'.concat(n.QE[t.themeError.older_post]," ").concat(t.themeError.older_days,"</div>. The new Tweets/Posts will start appearing here.")})});case 206:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...t.themeError,wall:i,editor:p,title:"No Tweets!",description:'No Tweets are available on the entered <div class="tb_error_highlight">'.concat(n.QE[t.themeError.older_post]," ").concat(t.themeError.older_days,"</div> All the upcoming tweets will appear here. <br>The Tweets are older than your chosen ").concat(2===t.themeError.older_post?7:1===t.themeError.older_post?30:null," days.")})});case 207:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:'It appears that all your posts are private. Please go to <a href="'.concat(o._r,"moderation/index/").concat(i.Wall.id,'" target="_blank" rel="noopener noreferrer">Moderation</a> and make them public.')})});case 208:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:"It appears that the available posts are older than your chosen ".concat(8!==t.themeError.older_days?t.themeError.older_days+" Days":(0,n.w5)(t.themeError.older_post),". All the new posts will start to appear here.")})});case 209:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:"It appears that there are no posts available with images or videos. The theme doesn\u2019t support text content."})});case 211:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:"No posts are available on the entered ".concat(n.QE[t.themeError.older_post]," ").concat(t.themeError.older_days,". All Upcoming posts will appear here.")})});case 212:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...t.themeError,wall:i,editor:p,title:"No Posts!",description:"Only new posts from Instagram ".concat(n.QE[t.themeError.older_post]," ").concat(t.themeError.older_days," will appear here. Existing posts from Instagram ").concat(n.QE[t.themeError.older_post]," ").concat(t.themeError.older_days," can not be retrieved.")})});default:return""}}));class p extends a.PureComponent{render(){var e;const r={backgroundImage:"url(".concat(o.do,"/media/images/nopost.png?v=3)")},{error:t,wall:n}=this.props,c=new URLSearchParams(window.location.search).get("preview"),d="tagembed"==(null===n||void 0===n||null===(e=n.User)||void 0===e?void 0:e.userDatabaseType)||window.location.href.includes("tagembed");return(0,l.jsxs)(l.Fragment,{children:[c?document.body.classList.add("tb_previw-error"):null,(0,l.jsxs)("div",{className:"tb_error_page tb_error_theme_".concat(null!=n&&n?n.Personalization.widgetTheme:"wall_error"," ").concat(s.ZQ||d?"tb_tagEmbed":""," ").concat(s.ig?"tb_tagshop":""),children:[(0,l.jsx)("div",{className:"tb_error_page_bg",style:r,children:" "}),n&&Object.keys(n).length>0&&n.UserRule.on_site_upload&&n.UgcSettings.onsite_status?(0,l.jsx)("div",{className:"tb_error_onsite_btn",children:(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(i,{UgcSettings:n.UgcSettings,id:n.Wall.id,tagShopWallId:n.Wall.wallId})})}):null,(0,l.jsx)(h,{error:t,wall:n})]})]})}}}}]);