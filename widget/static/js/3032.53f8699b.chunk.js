"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3032],{53032:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var a=t(47313),o=t(98501),s=t(35179),n=t(17739),l=t(46417);const i=a.lazy((()=>Promise.all([t.e(7914),t.e(6538)]).then(t.bind(t,66538)))),c=a.lazy((()=>Promise.all([t.e(6390),t.e(6574)]).then(t.bind(t,15929)))),d=a.lazy((()=>Promise.all([t.e(6390),t.e(33)]).then(t.bind(t,1265)))),h=a.memo((e=>{let{error:r,wall:t}=e,i=r.errorWithMessage,h=!!window.editor||window.location.pathname.includes("/editor");if(i)return i&&Object.keys(i).length>0?"VISITOR_LIMIT_EXCEEDED"==i.type?(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{title:"Page Views Limit Exceeded",description:"Oops! Seems Page Views Limit for the plan exceeded. If you are the owner of this Taggbox account, please click below link to access your account.",utm:"widgetinactive",button:'<a href="'.concat(o._r).concat(o.yL,'viewlimit" target="_blank" class="tb_error_btn_primary">Update Now</a>')})}):s.ZQ?(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[(0,l.jsx)(d,{title:i&&i.errorData?i.errorData.errorHeading:"Wall Not exist",description:i&&i.errorData?i.errorData.errorMessage:"",utm:"widgetinactive",button:i&&i.errorData&&i.errorData.errorBtnLink&&i.errorData.errorBtnTxt?'<a href="'.concat(i&&i.errorData?i.errorData.errorBtnLink:"#",'" target="_blank" class="tb_error_btn_primary">').concat(i&&i.errorData?i.errorData.errorBtnTxt:"","</a>"):""})," "]}):(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[(0,l.jsx)(d,{title:null!==i&&void 0!==i&&i.message?i.message:"Wall Not exist",description:"Oops! Seems like something went wrong. If you are the owner of this Taggbox account, please click below link to access your account.",utm:"widgetinactive",button:'<a href = "'.concat(o._r).concat(o.yL,'widgetinactive" target = "_blank" class="tb_error_btn_primary"> Access Now</a > ')})," "]}):null;if(r.planLimit)return(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[(0,l.jsx)(d,{title:"You're Running Extra Widgets/Feeds!",description:"To enjoy uninterrupted services, kindly revoke the additional widget / feed or upgrade your plan.",utm:"widgetinactive",button:'<a href="'.concat(o._r).concat(o.yL,'feedlimit" target="_blank" class="tb_error_btn_primary">Update Now</a>')})," "]});if(!r.themeError||!Object.keys(r.themeError).length)return i&&Object.keys(i).length>0?(0,l.jsx)(c,{error:r}):null;switch(r.themeError.error_code){case 201:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...r.themeError,wall:t,editor:h,title:"No Posts!",description:"If the Moderation is ON, approve the posts from the moderation section to make them appear on your widget. Else, there won\u2019t be any posts on your added feeds.",utm:"noposts"})});case 202:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...r.themeError,wall:t,editor:h,title:"No Feeds!",description:"Seems like you have not added any feed. Kindly add feed from your preferred social network",utm:"nofeeds"})});case 203:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...r.themeError,wall:t,editor:h,title:"Feed Not Activated!",description:'Looks like your feed status is off. <a href="'.concat(o._r,"/wall/index/").concat(t.Wall.id,'" target="blank">Click here</a> to turn the status on! Or add another feed'),utm:"feedinactive"})});case 204:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...r.themeError,wall:t,editor:h,title:"Feed Not Authorized!",description:'It appears that you have not authorized any Feed. Please <a target="_blank" href="'.concat(o._r,"/wall/index/").concat(t.Wall.id,'" rel="noopener noreferrer">Click here</a> to authorize now!'),utm:"feednotauthorized"})});case 205:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...r.themeError,wall:t,editor:h,title:"No Tweets/Posts!",description:'Currently, No Tweets/Posts are available on the entered <div class="tb_error_highlight">'.concat(n.QE[r.themeError.older_post]," ").concat(r.themeError.older_days,"</div>. The new Tweets/Posts will start appearing here."),utm:"notweets-posts"})});case 206:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...r.themeError,wall:t,editor:h,title:"No Tweets!",description:'No Tweets are available on the entered <div class="tb_error_highlight">'.concat(n.QE[r.themeError.older_post]," ").concat(r.themeError.older_days,"</div> All the upcoming tweets will appear here. <br>The Tweets are older than your chosen ").concat(2===r.themeError.older_post?7:1===r.themeError.older_post?30:null," days."),utm:"notweets-posts"})});case 207:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...r.themeError,wall:t,editor:h,title:"No Posts!",description:'It appears that all your posts are private. Please go to <a href="'.concat(o._r,"moderation/index/").concat(t.Wall.id,'" target="_blank" rel="noopener noreferrer">Moderation</a> and make them public.'),utm:"noposts"})});case 208:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...r.themeError,wall:t,editor:h,title:"No Posts!",description:"It appears that the available posts are older than your chosen ".concat(8!==r.themeError.older_days?r.themeError.older_days+" Days":(0,n.w5)(r.themeError.older_post),". All the new posts will start to appear here."),utm:"posts-days"})});case 209:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...r.themeError,wall:t,editor:h,title:"No Posts!",description:"It appears that there are no posts available with images or videos. The theme doesn\u2019t support text content.",utm:"nomedia-content"})});case 211:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...r.themeError,wall:t,editor:h,title:"No Posts!",description:"No posts are available on the entered ".concat(n.QE[r.themeError.older_post]," ").concat(r.themeError.older_days,". All Upcoming posts will appear here."),utm:"noposts"})});case 212:return(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{...r.themeError,wall:t,editor:h,title:"No Posts!",description:"Only new posts from Instagram ".concat(n.QE[r.themeError.older_post]," ").concat(r.themeError.older_days," will appear here. Existing posts from Instagram ").concat(n.QE[r.themeError.older_post]," ").concat(r.themeError.older_days," can not be retrieved."),utm:"noinstagram-posts"})});default:return""}}));class p extends a.PureComponent{render(){const e={backgroundImage:"url(".concat(o.do,"/media/images/nopost.png?v=3)")},{error:r,wall:t}=this.props,n=new URLSearchParams(window.location.search).get("preview");return(0,l.jsxs)(l.Fragment,{children:[n?document.body.classList.add("tb_previw-error"):null,(0,l.jsxs)("div",{className:"tb_error_page tb_error_theme_".concat(null!=t&&t?t.Personalization.widgetTheme:"wall_error"," ").concat(s.ZQ?"tb_tagEmbed":""," ").concat(s.ig?"tb_tagshop":""),children:[(0,l.jsx)("div",{className:"tb_error_page_bg",style:e,children:" "}),t&&Object.keys(t).length>0&&t.UserRule.on_site_upload&&t.UgcSettings.onsite_status?(0,l.jsx)("div",{className:"tb_error_onsite_btn",children:(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(i,{UgcSettings:t.UgcSettings,id:t.Wall.id,tagShopWallId:t.Wall.wallId})})}):null,(0,l.jsx)(h,{error:r,wall:t})]})]})}}}}]);