(this["webpackJsonptensei-shitara-slime-datta-ken-mangasite"]=this["webpackJsonptensei-shitara-slime-datta-ken-mangasite"]||[]).push([[8],{112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},117:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},126:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(0),c=n(13),o=n(78),i=n(84),s=n(18),l=n(132),d=n(86),u=function(){var e=new Date;e.setSeconds(e.getSeconds()+2),window.sessionStorage.setItem("asdf",e.getTime().toString())},p=n(88),h=n(11),m=(n(112),n(1)),f=function(){var e=Object(r.useContext)(o.a).translations,t=Object(r.useState)((function(){return window.Notification.permission||"default"})),n=Object(a.a)(t,2),c=n[0],i=n[1];function s(){window.Notification?Notification.requestPermission((function(e){return function(e){window.OneSignal&&window.OneSignal.isPushNotificationsEnabled().then((function(e){e||window.OneSignal.push(["registerForPushNotifications"])})),i(e)}(e)})):i("denied")}return Object(m.jsx)("h3",{className:"flipInY",children:"granted"===c?Object(m.jsx)(m.Fragment,{children:e.weWillNotifyYou}):"denied"===c?Object(m.jsx)(m.Fragment,{children:e.activateNotifications}):Object(m.jsx)("button",{className:"headerbtn",type:"button",onClick:s,children:e.weCanNotifyYou})})},j=(n(113),function(e){var t=e.chapterName,n=e.subscribe,a=e.link,c=e.serieNameWithManga,i=Object(r.useContext)(o.a).translations;return Object(m.jsxs)("header",{className:"bg95",children:[Object(m.jsx)("h1",{className:"flipInY ".concat(a?"link":""),children:a?Object(m.jsx)(h.b,{to:a,children:c}):c}),Object(m.jsxs)("h2",{className:"flipInY",children:[i.chapter," ",t,n&&": ".concat(i.notReleasedYet)]}),n&&"Notification"in window&&Object(m.jsx)(f,{})]})}),g=n(115),b=n.n(g),x=n(116),O=n.n(x),v={position:"relative",display:"inline-block",borderRadius:5,userSelect:"none",boxSizing:"border-box",height:10,width:"100%",cursor:"pointer"},y={position:"absolute",borderRadius:5,userSelect:"none",boxSizing:"border-box",top:0,height:"100%",cursor:"pointer"},w={position:"relative",display:"block",content:'""',width:18,height:18,backgroundColor:"#fff",borderRadius:"50%",boxShadow:"0 1px 1px rgba(0,0,0,.5)",userSelect:"none",cursor:"pointer",boxSizing:"border-box"};function N(e){var t=e.touches;if(t&&t.length){var n=t[0];return{x:n.clientX,y:n.clientY}}return{x:e.clientX,y:e.clientY}}var C=function(e){var t=e.axis,n=e.x,a=e.xmin,c=e.xmax,o=e.xstep,i=e.onChange,l=e.styles,d=Object(r.useRef)(null),u=Object(r.useRef)(null),p=Object(r.useRef)({}),h=Object(r.useRef)({});function f(e){var n=e.left;if(i){var r=d.current.getBoundingClientRect().width,s=0;n<0&&(n=0),n>r&&(n=r),"x"!==t&&"xy"!==t||(s=n/r*(c-a)),i({x:(0!==s?parseInt(s/o,10)*o:0)+a,y:0})}}function j(e){e.preventDefault(),f(function(e){var t=N(e),n=t.x+p.current.x-h.current.x,a=t.y+p.current.y-h.current.y;return{left:n,top:a}}(e))}function g(e){e.preventDefault(),document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",j,{passive:!1}),document.removeEventListener("touchend",g),document.removeEventListener("touchcancel",g)}function b(e){e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation();var t=u.current,n=N(e);p.current={x:t.offsetLeft,y:t.offsetTop},h.current={x:n.x,y:n.y},document.addEventListener("mousemove",j),document.addEventListener("mouseup",g),document.addEventListener("touchmove",j,{passive:!1}),document.addEventListener("touchend",g),document.addEventListener("touchcancel",g)}function x(e){e.preventDefault();var t=N(e),n=d.current.getBoundingClientRect();p.current={x:t.x-n.left,y:t.y-n.top},h.current={x:t.x,y:t.y},document.addEventListener("mousemove",j),document.addEventListener("mouseup",g),document.addEventListener("touchmove",j,{passive:!1}),document.addEventListener("touchend",g),document.addEventListener("touchcancel",g),f({left:t.x-n.left,top:t.y-n.top})}var O=function(){var e=(n-a)/(c-a)*100;return e>100&&(e=100),e<0&&(e=0),{top:0,left:e}}(),C={width:"".concat(O.left,"%")},k={position:"absolute",transform:"translate(-50%, -50%)",left:"".concat(O.left,"%"),top:"50%"};return Object(m.jsxs)("div",{ref:d,style:Object(s.a)(Object(s.a)({},v),l.track),onTouchStart:x,onMouseDown:x,children:[Object(m.jsx)("div",{style:Object(s.a)(Object(s.a)(Object(s.a)({},y),l.active),C)}),Object(m.jsx)("div",{ref:u,style:k,onTouchStart:b,onMouseDown:b,onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},children:Object(m.jsx)("div",{style:w})})]})};C.defaultProps={axis:"x",x:50,xmin:0,xmax:100,xstep:1,styles:{}};var k=C;n(114);var S=function(e){var t=e.mangaPageWidth,n=e.setMangaPageWidth,a=e.mode;function r(e){e!==t&&(n(e),localStorage.setItem("mangaPageWidth","".concat(e)))}return Object(m.jsxs)("div",{className:"slider-container bg95 fadeInUp",children:[Object(m.jsxs)("div",{className:"slider-uppersection",children:[Object(m.jsx)("div",{className:"zoom-icon",onClick:function(){return t>10&&r(t-10)},children:Object(m.jsx)(b.a,{})}),Object(m.jsxs)("span",{className:"slider-value-show",children:[t,"%"]}),Object(m.jsx)("div",{className:"zoom-icon",onClick:function(){return t<100&&r(t+10)},children:Object(m.jsx)(O.a,{})})]}),Object(m.jsx)(k,{axis:"x",xstep:10,xmin:10,xmax:100,x:t,onChange:function(e){return r(e.x)},styles:{track:{backgroundColor:"light"===a?"rgb(63,81,181, 0.4)":"rgb(0,0,0, 0.4)"},active:{backgroundColor:"light"===a?"rgb(63,81,181, 1)":"orange"}}})]})},I=n(85),M=n(36),P=n.n(M),W=n(26);var E=function(e){var t=e.fullscreen,n=e.set,a=Object(r.useContext)(o.a).translations;return Object(m.jsxs)("div",{className:"switch-container",children:[Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){e.target.checked?(n.fullscreenOn(),Object(W.b)(),sessionStorage.setItem("fullscreen","true")):(n.fullscreenOff(),Object(W.a)(),sessionStorage.setItem("fullscreen","false"))}}),Object(m.jsx)("span",{className:"slider round switchslider"})]}),Object(m.jsx)(P.a,{className:"switch",title:t?"".concat(a.deactivate," ").concat(a.fullscreen):"".concat(a.activate," ").concat(a.fullscreen)})]})},L=n(35),z=n.n(L);var B=function(e){var t=e.darkmode,n=e.set,a=Object(r.useContext)(o.a).translations;return Object(m.jsxs)("div",{className:"switch-container",children:[Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",checked:!t,onChange:function(e){e.target.checked?n.darkmodeOff():n.darkmodeOn(),localStorage.setItem("darkmode","".concat(!e.target.checked))}}),Object(m.jsx)("span",{className:"slider round switchslider"})]}),Object(m.jsx)(z.a,{className:"switch",title:t?"".concat(a.activate," ").concat(a.lightmode):"".concat(a.activate," ").concat(a.darkmode)})]})},T=n(90),D=n.n(T),R=n(118),U=n.n(R),Y=(n(117),function(){return document&&document.body.classList.remove("scroll-down")});var F=function(e){var t=e.nextChapter,n=e.previousChapter,a=Object(r.useContext)(o.a).translations,c=function(e,a){e.preventDefault();var r="prev"===a?n:t,c=window.sessionStorage.getItem("asdf");c&&Number(c)<(new Date).getTime()&&r.callback()};return Object(m.jsxs)("nav",{className:"otherchapter fadeInUp small",children:[Object(m.jsxs)(h.b,{className:"prevchapter bg95 ".concat(n.name&&n.link?"":"hidden"),to:n.link||!1,title:n.name||!1,onClick:function(e){return c(e,"prev")},onMouseDown:Y,children:[Object(m.jsx)(D.a,{alt:n.name}),window.innerWidth>1199&&Object(m.jsx)("span",{children:a.prevChapter})]}),window.innerWidth>1199&&Object(m.jsx)("iframe",{className:"lazy topAdFadeIn","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4154168&output=noscript",src:"",width:"728",height:"90",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0"}),Object(m.jsxs)(h.b,{className:"nextchapter bg95 ".concat(t.name&&t.link?"":"hidden"),to:t.link||!1,title:t.name||!1,onClick:function(e){return c(e,"next")},onMouseDown:Y,children:[window.innerWidth>1199&&Object(m.jsx)("span",{children:a.nextChapter}),Object(m.jsx)(U.a,{alt:t.name})]})]})},_=n(119),A=(n(123),function(e){var t=e.title,n=e.slug,a=e.fullUrl,i=Object(r.useContext)(c.a).siteMetadata,l=Object(r.useContext)(o.a).translations,d=i.lang,u={shortname:"manganyaa",config:{url:a,identifier:n,title:t,language:"en"===d?"en_US":"pt"===d?"pt_BR":"es_MX"}};return console.log("asdf disqus disqusConfig ",u),Object(m.jsxs)("div",{className:"box-wrapper disqus-wrapper bg95",children:[Object(m.jsx)("h5",{children:l.chapterOpinions}),Object(m.jsx)("div",{className:"disqus-container ",children:Object(m.jsx)(_.DiscussionEmbed,Object(s.a)({},u))})]})}),q={darkmode:function(){return!localStorage.getItem("darkmode")||JSON.parse(localStorage.getItem("darkmode"))},fullscreen:function(){return!!sessionStorage.getItem("fullscreen")&&JSON.parse(sessionStorage.getItem("fullscreen"))},mangaPageWidth:function(){return NaN!==Number(localStorage.getItem("mangaPageWidth"))&&0!==Number(localStorage.getItem("mangaPageWidth"))?Number(localStorage.getItem("mangaPageWidth")):70}},H=n(133),J=n(135),G=n(136),X=n(137),K=n(138),Q=n(139),V=n(140),Z=n(141),$=n(142),ee=n(143),te=n(144),ne=n(145),ae=n(146),re=n(147),ce=n(148),oe=n(149),ie=n(150),se=(n(124),function(e){var t=e.siteUrl,n=e.fullUrl,c=e.imgs,i=Object(r.useContext)(o.a).translations.share,l=function(e,t){if(t){var n=Object(a.a)(t,3),r=n[0],c=n[1],o=n[2];if(o)return o.props["data-src"];if(c)return c.props["data-src"];if(r)return r.props["data-src"]}return"".concat(e,"/description.jpg")}(t,c),d=[{name:"Facebook",Button:J.a,Icon:G.a},{name:"Twitter",Button:X.a,Icon:K.a},{name:"Pinterest",Button:Q.a,Icon:V.a,media:l},{name:"Reddit",Button:Z.a,Icon:$.a},{name:"WhatsApp",Button:ee.a,Icon:te.a},{name:"Telegram",Button:ne.a,Icon:ae.a},{name:"Line",Button:re.a,Icon:ce.a},{name:"Tumblr",Button:oe.a,Icon:ie.a}];return Object(m.jsxs)("div",{className:"box-wrapper sharebuttons-wrapper bg95",children:[Object(m.jsx)("h5",{children:i}),Object(m.jsx)("div",{className:"box-container sharebuttons-container ",children:d.map((function(e){var t=e.name,a=e.Button,r=e.Icon,c=Object(H.a)(e,["name","Button","Icon"]);return Object(m.jsx)("div",{title:t,children:Object(m.jsx)(a,Object(s.a)(Object(s.a)({url:n},c),{},{className:"sharebutton",children:Object(m.jsx)(r,{round:!0,size:40})}))},t)}))})]})}),le=function(e){var t=e.toString();return t.includes(".")?"".concat(t.split(".")[0],"-").concat(t.split(".")[1]):t},de=function(e,t,n,a){var r=a.translations,c=a.serie,o=a.siteMetadata,i=o.storage,s=o.lang,l=c.folderName,d={nextChapter:0!==e?t[e-1]:null,previousChapter:t[e+1]?t[e+1]:null},u=d.nextChapter?d.nextChapter.url:null,p=d.nextChapter?"".concat(r.chapter," ").concat(d.nextChapter.orderNumber):null,h=n&&d.nextChapter?function(e,t,n,a,r){for(var c=[],o=0;o<r;o++){var i="".concat(e).concat(t,"/").concat(n,"/").concat(a,"/").concat(o+1,".jpg");c.push(Object(m.jsx)("link",{rel:"prefetch",href:"".concat(i),as:"image"}))}return c}(i.fullPath,l,s,le(d.nextChapter.orderNumber),d.nextChapter.pages):[],f=d.previousChapter?d.previousChapter.url:null;return{otherChapters:d,nextChapter:{name:p,link:u,imgsPreload:h},previousChapter:{name:d.previousChapter?"".concat(r.chapter," ").concat(d.previousChapter.orderNumber):null,link:f}}},ue=function(e,t,n){for(var a=e.pages,r=e.orderNumber,c=e.chapterTitle,o=n.translations,i=n.siteMetadata,s=n.serie,l=i.lang,d=i.storage,u=s.folderName,p=s.serieNameWithManga,h=[],f=[],j=le(r),g=0;g<a;g++){var b="".concat(u,"|").concat(l,"|").concat(j,"|").concat(g+1);h.push(Object(m.jsx)("img",{className:"chimgs-lazy","data-src":b,src:"".concat(d.fullPath,"placeholder.gif"),onContextMenu:function(e){return e.preventDefault()},alt:"".concat(p," ").concat(o.langName," ").concat(o.chapter," ").concat(c||r," ").concat(o.page," ").concat(g+1)},"".concat(p," ").concat(o.langName," ").concat(o.chapter," ").concat(c||r," ").concat(o.page," ").concat(g+1))),t&&f.push(Object(m.jsx)("link",{rel:"preload",href:b,as:"image"}))}return{components:h,preloads:f}},pe=function(e,t){for(var n=null,a=0;a<(null===t||void 0===t?void 0:t.length);a++){if(t[a].orderNumber===e){n=a;break}}return n},he=n(127),me=n.n(he),fe=(n(126),function(){var e=function(){return window.print()},t=Object(r.useContext)(o.a).translations;return Object(m.jsxs)("div",{className:"box-wrapper downloadchapter-wrapper bg95",children:[Object(m.jsx)("h5",{children:t.downloadChapter}),Object(m.jsx)("div",{className:"box-container",children:Object(m.jsx)("div",{className:"downloadChBtn",role:"button",tabIndex:0,"aria-label":t.translate,onClick:e,onKeyPress:function(t){13!==t.which&&13!==t.keyCode&&13!==t.code||e()},children:Object(m.jsx)(me.a,{})})})]})}),je=(n(128),n(129),function(e){return{en:"English",es:"Espa\xf1ol",pt:"Portugu\xeas"}[e]}),ge=function(e){var t=e.serie,n=Object(r.useContext)(c.a),h=n.siteMetadata,f=n.siteUrl,g=n.darkmode,b=n.fullscreen,x=n.set,O=Object(r.useContext)(o.a).translations,v=x.darkmodeOn,y=x.darkmodeOff,w=x.fullscreenOn,N=x.fullscreenOff,C=h.lang,k=h.currentPath,M=h.storage,P=h.isMainSite,W=t.folderName,L=t.serieName,z=t.serieNameWithManga,T=t.chapters,D=t.completed,R=P||"Completed"===D?T.list.filter((function(e){return 0!==e.pages})):[T.upcoming].concat(Object(l.a)(T.list.filter((function(e){return 0!==e.pages})))),U=Object(r.useState)((function(){return q.mangaPageWidth()})),Y=Object(a.a)(U,2),_=Y[0],H=Y[1],J=g?"dark":"light",G=Number(k.split("/").pop()),X=pe(G,R);null===X&&window.location.replace("/".concat(C));var K=Object(r.useState)(R[X]),Q=Object(a.a)(K,2),V=Q[0],Z=Q[1],$=V.orderNumber,ee=V.chapterTitle,te=V.pages,ne=V.url,ae=ee&&ee.split(":")[1],re=ae&&ae.trim()?ee:$,ce=Object(d.a)(),oe=ue(V,ce,{translations:{langName:O.langName,chapter:O.chapter,page:O.page},serie:{folderName:W,serieNameWithManga:z},siteMetadata:{lang:C,storage:M}});Object(p.a)(".chimgs-lazy",V),Object(p.a)(".lazy",V),0!==te&&localStorage.setItem("lastChChecked-".concat(W),JSON.stringify({url:ne,orderNumber:$,mangaName:L,time:(new Date).getTime()}));var ie=pe(V.orderNumber,R),le=de(ie,R,ce,{siteMetadata:{lang:C,storage:M},serie:{folderName:W},translations:{chapter:O.chapter}}),he=le.otherChapters,me=le.nextChapter,ge=le.previousChapter;Object(r.useEffect)((function(){u()}),[]);var be=function(e){history.pushState("","","previous"===e?ge.link.replace("https://manganyaa.com",""):me.link.replace("https://manganyaa.com","")),window.scrollTo({top:0}),u(),Z("previous"===e?Object(s.a)({},he.previousChapter):Object(s.a)({},he.nextChapter))},xe={chapterTitle:re,nextChapter:{name:me.name,link:me.link,callback:function(){return be("next")}},previousChapter:{name:ge.name,link:ge.link,callback:function(){return be("previous")}}};console.log("otherChaptersProps ",xe);var Oe="".concat(f).concat(ne),ve=Object(m.jsx)(se,{siteUrl:f,fullUrl:Oe,imgs:oe.components},"".concat(ne,"-sharebtns")),ye=$.toString();if(ye.includes(".")){var we=ye.split(".");ye="".concat(we[0],"(").concat(we[1],")")}var Ne={en:"/read-".concat(W,"-manga-chapter-").concat(ye,"/"),es:"/leer-".concat(W,"-manga-capitulo-").concat(ye,"/"),pt:"/ler-".concat(W,"-manga-capitulo-").concat(ye,"/")},Ce=Object(m.jsx)(A,{title:"".concat(L," ").concat($," ").concat(je(C)),slug:Ne[C],fullUrl:Oe}),ke=Object(m.jsx)(I.a,{page:"chapter",serie:t}),Se=Object(m.jsx)(fe,{});return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i.a,{fullUrl:"".concat(f).concat(k),mode:J,chapterTitle:$,serie:t}),Object(m.jsxs)("main",{className:"page-chapter","data-testfirstchapter":he.previousChapter?"false":"true","data-testlastchapter":he.nextChapter?"false":"true",children:[Object(m.jsx)(j,{chapterName:re,subscribe:0===te,link:k.split("en"===C?"/chapter":"/capitulo")[0],serieNameWithManga:z},"".concat(ne,"-header")),Object(r.createElement)(F,Object(s.a)(Object(s.a)({},xe),{},{key:"".concat(ne,"-otherchs")})),0!==te&&Object(m.jsxs)("section",{id:"settings",className:"settings-container noprint",children:[Object(m.jsx)("div",{children:Object(m.jsx)(S,{mangaPageWidth:_,setMangaPageWidth:H,mode:J})}),Object(m.jsxs)("div",{className:"switches-container bg95 fadeInUp",children:[Object(m.jsx)(E,{fullscreen:b,set:{fullscreenOn:w,fullscreenOff:N}}),Object(m.jsx)(B,{darkmode:g,set:{darkmodeOn:v,darkmodeOff:y}})]})]},"".concat(ne,"-settings")),Object(m.jsx)("section",{className:"imgsList fadeInUp width-".concat(_||70),children:oe.components},"".concat(ne,"-chlist")),Object(m.jsx)("article",{style:{width:"100vw",display:"flex",justifyContent:"center",marginBottom:"1vh"},children:window.innerWidth<1200?Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153962&output=noscript",src:"",width:"300",height:"100",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-mobile"},"".concat(ne,"-ad1")):Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153946&output=noscript",src:"",width:"900",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(ne,"-ad1"))}),Object(m.jsx)(F,Object(s.a)(Object(s.a)({},xe),{},{inferior:!0})),window.innerWidth>1199&&Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("section",{id:"desktop-subchapter",className:"desktop-only bottom-layout",children:[Object(m.jsxs)("div",{style:{width:"72vw"},children:[Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[ve,Se]}),window.innerWidth>1199&&Ce,window.innerWidth>1199&&Object(m.jsx)("article",{style:{display:"flex",justifyContent:"center",marginTop:"1vh"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153946&output=noscript",src:"",width:"900",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(ne,"-ad2"))})]}),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[ke,window.innerWidth>1199&&Object(m.jsx)("article",{style:{display:"flex",justifyContent:"center"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4155050&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"top-banner-desktop"},"".concat(ne,"-ad2"))})]})]})}),window.innerWidth<1200&&Object(m.jsxs)("section",{id:"mobile-subchapter",className:"mobile-only bottom-layout",children:[ve,Object(m.jsx)("article",{style:{display:"flex",width:"100vw",justifyContent:"center",marginTop:"1vh",marginBottom:"1vh"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"},"".concat(ne,"-ad3"))}),Ce,ke,Object(m.jsx)("article",{style:{display:"flex",width:"100vw",justifyContent:"center",marginTop:"1vh",marginBottom:"1vh"},children:Object(m.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"},"".concat(ne,"-ad3"))})]}),Object(m.jsx)("br",{})]})]})},be=n(20),xe=n(14);n(130),t.default=function(){window.scrollTo({top:0});var e=Object(r.useState)({}),t=Object(a.a)(e,2),s=t[0],l=t[1],d=Object(r.useContext)(c.a),u=d.siteMetadata,p=d.siteUrl,h=d.darkmode,f=s.chapters,j=u.currentPath,g=u.isMainSite,b=u.lang,x=h?"dark":"light",O=g?j.split("/")[1]:xe.folderName;return Object(r.useEffect)((function(){n(89)("./".concat(b,".json")).then((function(e){var t=e.default,n=t.mangaName,a=t.completed,r=t.chs;l({serieName:n,serieNameWithManga:"".concat(n," Manga"),completed:a,folderName:O,chapters:Object(c.c)(b,O,r,a)})}))}),[b,O]),f?Object(m.jsx)(o.b,{pageTranslations:n(83)["".concat(b,"i18nChapter")],children:Object(m.jsx)(ge,{serie:s})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i.a,{fullUrl:"".concat(p).concat(j),mode:x,serie:s}),Object(m.jsx)(be.a,{})]})}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(18),r=n(0),c=n(13),o=n(1),i=Object(r.createContext)();t.b=function(e){var t=e.children,n=e.pageTranslations,s=Object(r.useContext)(c.a).genericTranslations,l={translations:Object(a.a)(Object(a.a)({},s),n)};return Object(o.jsx)(i.Provider,{value:l,children:t})}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"eni18nChapter",(function(){return a})),n.d(t,"esi18nChapter",(function(){return r})),n.d(t,"pti18nChapter",(function(){return c}));var a={weCanNotifyYou:"We can notify you when new chapters get released",weWillNotifyYou:"We will notify you when this chapter gets released",activateNotifications:"If you enable notifications, we can notify you when new chapters get released",notReleasedYet:"Not released yet",langName:"English",page:"Page",share:"Share Chapter",chapterOpinions:"Chapter's Opinions",downloadChapter:"Download Chapter"},r={weCanNotifyYou:"Podemos notificarte cuando nuevos capitulos son publicados",weWillNotifyYou:"Te notificaremos cuando este capitulo sea publicado",activateNotifications:"Si habilitas las notificaciones, podemos notificarte cuando nuevos capitulos son publicados",notReleasedYet:"Aun no publicado",langName:"Espa\xf1ol",page:"Pagina",share:"Compartir Capitulo",chapterOpinions:"Opiniones del Capitulo",downloadChapter:"Descargar Capitulo"},c={weCanNotifyYou:"Podemos notific\xe1-lo quando novos cap\xedtulos forem lan\xe7ados",weWillNotifyYou:"Iremos notific\xe1-lo quando este cap\xedtulo foi publicado",activateNotifications:"Se voc\xea ativar as notifica\xe7\xf5es, podemos notific\xe1-lo quando novos cap\xedtulos forem lan\xe7ados",notReleasedYet:"Ainda n\xe3o publicado",langName:"Portugu\xeas",page:"P\xe1gina",share:"Compartilhar Cap\xedtulo",chapterOpinions:"Opini\xf5es do Cap\xedtulo",downloadChapter:"Baixar Cap\xedtulo"}},84:function(e,t,n){"use strict";var a=n(0),r=n(94);n(83);var c=n(13),o=n(1),i=function(e,t,n,a,r,c,o,i,s){var l=a?"".concat(n," ").concat(a.split(":")[0]):"";return l?"".concat(s&&"serie"!==i&&"chapter"!==i?"MangaNyaa - ":"").concat(r," ").concat(e," ").concat(l," ").concat(c," ").concat(t," ").concat(o," Online"):"".concat(s&&"serie"!==i&&"chapter"!==i?"MangaNyaa - ":"").concat(r," ").concat(e," ").concat(c," ").concat(t).concat(l," ").concat(o," Online")},s=function(e,t,n){var a={en:"Read ".concat(t," Online Free"),es:"Leer ".concat(t," Online Gratis"),pt:"Leia ".concat(t," Online Gr\xe1tis")};return"home"===n?"MangaNyaa ~ ".concat(a[e]):a[e]},l=function(e,t,n,a,r){var c="chapter"===r&&a?"".concat(n," ").concat(function(e){var t=e.split(":")[1];return!t||!t.trim()||t.includes("released")||t.includes("publicado")||t.includes("lan\xe7ado")?e.split(":")[0]:e}(a)," "):"";return{en:"Read ".concat(t," ").concat(c,"Online Free in English with the best High Quality (Mobile App, Darkmode, Fullscreen, Image Resizing) at Manga Nyaa."),es:"Leer ".concat(t," ").concat(c,"Online Gratis en Espa\xf1ol con la mejor calidad (App Mobile, Modo Oscuro, Pantalla Completa, Ajuste de Imagen) en Manga Nyaa."),pt:"Leia ".concat(t," ").concat(c,"Online Gr\xe1tis em Portugu\xeas com a melhor qualidade (App Mobile, Modo Escuro, Ajuste de Imagem, Tela Cheia) em Manga Nyaa.")}[e]},d=function(e){return{en:"English",es:"Espa\xf1ol",pt:"Portugu\xeas"}[e]},u=function(e){return{en:"en_US",es:"es_ES",pt:"pt_BR"}[e]},p=function(e,t){if("en"===e){var n=t.replace("chapter","capitulo").replace("read","leer").replace("free","gratis").replace("english","espanol").replace("/en","/es"),a=t.replace("chapter","capitulo").replace("read","ler").replace("free","gratis").replace("english","portugues").replace("/en","/pt");return[Object(o.jsx)("link",{rel:"alternate",hrefLang:"es",href:n},n),Object(o.jsx)("link",{rel:"alternate",hrefLang:"pt",href:a},a)]}if("es"===e){var r=t.replace("capitulo","chapter").replace("leer","read").replace("gratis","free").replace("espanol","english").replace("/es","/en"),c=t.replace("leer","ler").replace("espanol","portugues").replace("/es","/pt");return[Object(o.jsx)("link",{rel:"alternate",hrefLang:"en",href:r},r),Object(o.jsx)("link",{rel:"alternate",hrefLang:"pt",href:c},c)]}if("pt"===e){var i=t.replace("capitulo","chapter").replace("ler","read").replace("gratis","free").replace("portugues","english").replace("/pt","/en"),s=t.replace("ler","leer").replace("portugues","espanol").replace("/pt","/es");return[Object(o.jsx)("link",{rel:"alternate",hrefLang:"en",href:i},i),Object(o.jsx)("link",{rel:"alternate",hrefLang:"es",href:s},s)]}return Object(o.jsx)(o.Fragment,{})};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mode:"dark"},t=e.fullUrl,n=e.chapterTitle,h=e.mode,m=e.serie,f=e.preloads,j=void 0===f?[]:f,g=Object(a.useContext)(c.a),b=g.genericTranslations,x=g.siteMetadata,O=b.chapter,v=b.read,y=b.in,w=b.free,N=x.siteUrl,C=x.lang,k=void 0===C?"en":C,S=x.page,I=x.storage,M=x.isMainSite,P=m||{},W=P.serieNameWithManga,E=void 0===W?"Manga":W,L=P.folderName,z=d(k),B=l(k,E,O,n&&n.toString(),S),T=u(k),D=s(k,E,S),R=i(E,z,O,n&&n.toString(),v,y,w,S,M),U=p(k,t),Y="home"===S?"".concat(N,"/ogimg.jpg"):"".concat(I.fullPath).concat(L,"/description/1.jpg");return Object(o.jsxs)(r.a,{htmlAttributes:{lang:k,mode:h,page:S},children:[Object(o.jsx)("title",{children:R}),Object(o.jsx)("meta",{property:"og:title",content:R}),Object(o.jsx)("meta",{name:"twitter:title",content:R}),Object(o.jsx)("meta",{name:"description",content:B}),Object(o.jsx)("meta",{property:"og:description",content:B}),Object(o.jsx)("meta",{name:"twitter:description",content:B}),Object(o.jsx)("link",{rel:"manifest",href:"/manifest_".concat(k,".webmanifest")}),U,Object(o.jsx)("meta",{property:"og:locale",content:T}),Object(o.jsx)("meta",{property:"og:type",content:"article"}),Object(o.jsx)("meta",{property:"og:url",content:t}),Object(o.jsx)("meta",{property:"og:site_name",content:D}),Object(o.jsx)("meta",{property:"article:section",content:"Manga"}),Object(o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(o.jsx)("meta",{name:"twitter:image",content:Y}),Object(o.jsx)("meta",{property:"og:image",content:Y}),Object(o.jsx)("meta",{property:"og:image:secure_url",content:Y}),j]})}},85:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(31);var o=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e},i=n(13),s=n(78),l=(n(87),n(1));t.a=function(e){var t=e.limit,n=void 0===t?3:t,d=e.page,u=e.serie,p=Object(a.useContext)(i.a).siteMetadata,h=Object(a.useContext)(s.a).translations,m=p.lang,f=p.homes,j=u.serieName,g=function(e,t,n,a){return o(c.filter((function(e){return e.name!==t}))).slice(0,n).map((function(t,n){var c=t.name,o=t.subdomain;return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)("a",{"data-src":"https://".concat(o,".manganyaa.com/ogimg.jpg"),"data-lazybg":!0,className:"other-manga-item ".concat(a," lazy"),href:"https://".concat(o,".manganyaa.com").concat(e),children:Object(l.jsx)("h6",{className:"other-manga-item-text bg70",children:c},"".concat(c,"-h6"))},"".concat(c,"-a")),2===n&&"serie"===a&&window.innerWidth<1200&&Object(l.jsx)("article",{style:{display:"flex",justifyContent:"center",marginBottom:"2.5vh"},children:Object(l.jsx)("iframe",{className:"lazy","data-src":"https://syndication.exdynsrv.com/ads-iframe-display.php?idzone=4153606&output=noscript",src:"",width:"300",height:"250",scrolling:"no",marginWidth:"0",marginHeight:"0",frameBorder:"0",title:"bottom-banner"})})]},c)}))}(f[m],j,n,d);return Object(l.jsxs)("section",{className:"box-wrapper other-manga-wrapper ".concat(d," bg95 "),children:[Object(l.jsx)("h5",{children:h.otherPopularSeries}),Object(l.jsx)("div",{className:"box-container other-manga-container ".concat(d),children:g})]})}},86:function(e,t,n){"use strict";t.a=function(){var e=!0;if("undefined"!==typeof navigator){var t=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(t){var n=t.effectiveType,a=t.saveData;("slow-2g"===n||"2g"===n||"3g"===n||a)&&(e=!1)}}return e}},87:function(e,t,n){},88:function(e,t,n){"use strict";var a=n(0),r=n(13);t.a=function(e,t){var n=Object(a.useContext)(r.a).siteMetadata,c=n.storage,o=n.lang,i=n.page,s=n.currentPath;Object(a.useEffect)((function(){if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var t=[].slice.call(document.querySelectorAll(e));if(t.length>0){var n=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){var a=t.target;!function(e,t,n){if(e.dataset.lazybg)e.style.backgroundImage="url(".concat(e.dataset.src,")");else if(e.dataset.src.includes("/iframe.")||e.dataset.src.includes("/flags/")||e.dataset.src.includes("ogimg")||!e.dataset.src.includes("|"))e.src=e.dataset.src;else{var a="".concat(n.fullPath).concat(e.dataset.src.replaceAll("|","/"),".jpg");e.src=a}e.classList.remove(t.replace(".")),(t.includes("chs-")||t.includes("chimgs-"))&&e.classList.add("fadeIn")}(a,e,c),n.unobserve(a)}}))}));t.forEach((function(e){n.observe(e)}))}}}),[i,s,o,c,t])}},89:function(e,t,n){var a={"./desc-en.json":[91,1],"./desc-es.json":[92,2],"./desc-pt.json":[93,3],"./en.json":[96,12],"./es.json":[97,13],"./pt.json":[98,14]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(a)},r.id=89,e.exports=r}}]);