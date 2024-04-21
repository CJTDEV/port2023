(()=>{var e={};e.id=931,e.ids=[931],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},57147:e=>{"use strict";e.exports=require("fs")},57310:e=>{"use strict";e.exports=require("url")},71267:e=>{"use strict";e.exports=require("worker_threads")},23004:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>_,routeModule:()=>g,tree:()=>c});var n=i(67096),s=i(16132),a=i(37284),l=i.n(a),o=i(32564),r={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(r[e]=()=>o[e]);i.d(t,r);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,33298)),"C:\\Users\\couga\\Documents\\GitHub\\port2023\\test\\app\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(i.bind(i,57816)),"C:\\Users\\couga\\Documents\\GitHub\\port2023\\test\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,9291,23)),"next/dist/client/components/not-found-error"]}],_=["C:\\Users\\couga\\Documents\\GitHub\\port2023\\test\\app\\page.jsx"],d="/page",p={require:i,loadChunk:()=>Promise.resolve()},g=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},22266:(e,t,i)=>{Promise.resolve().then(i.bind(i,33879))},33879:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Home});var n=i(30784),s=i(79816),a=i.n(s),l=i(37403),o=i.n(l),r=i(9885),c=i(6294),_=i(68717),d=i(7273),p=i(57577),g=i(54157);let getWindowDimensions=()=>({width:0,height:0}),useWindowDimensions=()=>{let[e,t]=(0,r.useState)(getWindowDimensions());return(0,r.useEffect)(()=>{let handleResize=()=>{t(getWindowDimensions)};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)}),e};function MeshComponent({data:e,onChildLoaded:t}){let i=e.filePath,s=(0,r.useRef)(null),a=(0,r.useRef)(null);(0,r.useRef)(null);let l=(0,c.D)(g.E,i),o=e.rotation,_=e.position,d=e.scale,p=e.animations,h=e.isPaused;e.isVisible;let u=e.applySceneTwo,m=e.applySceneOne;if((0,c.A)(()=>{u&&(a.current.position.x=0,a.current.position.y=-1,a.current.position.z=0,a.current.scale.x=1.2,a.current.scale.y=1.2,a.current.scale.z=1.2,a.current.rotation.x=0,a.current.rotation.y=0,a.current.rotation.z=0)}),(0,c.A)(()=>{m&&(a.current.position.x=0,a.current.position.y=0,a.current.position.z=0,a.current.scale.x=1,a.current.scale.y=1,a.current.scale.z=1)}),p.floating&&(0,c.A)(({clock:e})=>{if(!h){let t=e.getElapsedTime();a.current.position.y=.1*Math.sin(t),a.current.rotation.x=.2*Math.sin(.5*t),a.current.rotation.y=.2*Math.cos(.5*t)}}),p.tilt&&((0,r.useRef)(),(0,c.A)(({clock:e})=>{a.current.position.y=.05*Math.sin(2*e.getElapsedTime())})),p.rotation){let e=p.rotation;(0,c.A)(()=>{switch(e.axis){case"x":"pos"===e.direction?a.current.rotation.x+=e.speed:a.current.rotation.x-=e.speed;break;case"y":"pos"===e.direction?a.current.rotation.y+=e.speed:a.current.rotation.y-=e.speed;break;case"z":"pos"===e.direction?a.current.rotation.z+=e.speed:a.current.rotation.z-=e.speed}})}return n.jsx("group",{rotation:o,position:_,scale:d,ref:s,children:n.jsx("primitive",{ref:a,object:l.scene})})}let h=(0,r.forwardRef)(({onChildLoaded:e,childIndex:t,...i},s)=>{useWindowDimensions();let a=i.canvasStyles,{progress:l}=(0,d.S)();return(0,r.useEffect)(()=>{100==l&&e()},[l]),n.jsx("div",{className:o().object,children:n.jsx(_.Xz,{style:a,ref:s,children:(0,n.jsxs)(r.Suspense,{fallback:null,children:[i.hasOrbitControls?n.jsx(p.z,{enableZoom:!1}):"",n.jsx("ambientLight",{intensity:.5}),n.jsx("directionalLight",{color:"white",intensity:i.intensity,position:[i.lightX,i.lightY,i.lightZ]}),i.isVisible&&n.jsx(n.Fragment,{children:n.jsx(MeshComponent,{data:i,applySceneOne:i.applySceneOne,applySceneTwo:i.applySceneTwo,onChildLoaded:e})})]})})})}),u=JSON.parse('{"title":"Cougar J. T. B\xe9lec","subtitle":"Webdev"}');var m=i(65969),v=i(14320),x=i(91705),b=i(91961),f=i(52451),y=i.n(f),j=i(31428);let components_SvgRenderer=({src:e,size:t})=>n.jsx(j.Q,{className:"icon",src:e,style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:`${t}px`}});function SectionLanding(){let e=JSON.parse(JSON.stringify(u)),{globalState:t,setGlobalState:i}=(0,r.useContext)(b.GlobalContext);m.p8.registerPlugin(v.i,x.W);let[s,l]=(0,r.useState)(!0),o=(0,r.useRef)(null),c=(0,r.useRef)(null),[_,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{_&&(console.log("all loaded"),i(e=>({...e,dimensionalModulesLoaded:!0})))},[_]),(0,n.jsxs)("div",{ref:c,className:`${a().inner} trigger-element all-wrapper landing-trigger`,children:[n.jsx("div",{className:`${a().gradient} gradient-in`}),n.jsx("div",{className:`${a().scroll} scroll`,children:n.jsx(components_SvgRenderer,{src:"/icons/scroll.svg",size:24})}),n.jsx("div",{className:`${a().illustration} smoke-out`,children:n.jsx(y(),{src:"images/smoke.png",width:750,height:750,alt:"Smoke Image",unoptimized:!0,priority:!0})}),n.jsx("div",{className:`${a().rocket} rocket-out`,children:n.jsx(h,{ref:o,isVisible:s,isPaused:!1,filePath:"/only_rocket/Spacers.gltf",intensity:2,lightX:10,lightY:10,lightZ:10,rotation:[0,0,0],position:[0,0,0],scale:[1.4,1.4,1.4],animations:{tilt:!0},hasOrbitControls:!1,onChildLoaded:()=>{d(!0)}})}),n.jsx("div",{className:`${a().headline} text-out-1`,children:n.jsx("h1",{className:"headline",children:e.title})}),n.jsx("div",{className:`${a().headline} text-out-2`,children:n.jsx("h2",{className:"headline font--uppercase",children:e.subtitle})})]})}var w=i(1082),k=i.n(w),S=i(2156),N=i.n(S);function Button(e){let t=e.isLink,i=e.isContact,[s,a]=(0,r.useState)(!1);return n.jsx("div",{className:`${N().wrapper}`,style:e.customStyle,children:t?(0,n.jsxs)("a",{className:`${N().link} ${e.customClass} ${e.class}`,target:e.target,href:e.href,type:e.type,children:[n.jsx("span",{children:e.label}),e.icon&&n.jsx(components_SvgRenderer,{src:e.icon.src,size:e.icon.size})]}):i?(0,n.jsxs)("button",{onClick:e=>a(!s),"is-clicked":`${s}`,type:e.type,spacing:e.spacing,shadow:e.shadow,className:`${N().button} ${e.customClass} ${N().button__contact}`,children:[n.jsx("span",{className:"copy",children:e.label}),n.jsx("a",{href:e.mail,children:n.jsx(components_SvgRenderer,{src:"/icons/mail.svg",size:24})}),n.jsx("a",{href:e.linkedin,children:n.jsx(components_SvgRenderer,{src:"/icons/linkedin.svg",size:24})})]}):n.jsx("button",{type:e.type,shadow:e.shadow,spacing:e.spacing,className:`${e.customClass} ${N().button}`,children:e.href?(0,n.jsxs)("a",{href:e.href,target:e.target,children:[n.jsx("span",{className:"copy",children:e.label}),e.icon&&n.jsx("p",{children:"Test"})]}):(0,n.jsxs)("span",{className:"copy",children:[e.label,e.icon&&n.jsx(components_SvgRenderer,{src:e.icon.src,size:e.icon.size})]})})})}let $=JSON.parse('{"left_col":[{"icon":"\uD83D\uDE80","text":"3+ YOE"},{"icon":"\uD83D\uDCCD","text":"Vienna, Austria"},{"icon":"\uD83D\uDD23","text":"English, German"},{"icon":"\uD83C\uDFA8","text":"Creative Coder"},{"icon":"\uD83D\uDE4B‍♂️","text":"Available for hire"}],"image":{"src":"images/astro_chill.png","width":"500","height":"500","alt":"Astro surfing"},"right_col":[{"icon":"\uD83D\uDCCD","text":"Based in Vienna, Austria"},{"icon":"\uD83C\uDFA8","text":"Passion for Coding and UX & UI Design"},{"icon":"","text":"Available for hire","button":true}]}'),P=JSON.parse('{"title":"Journey","entries":[{"subtitle":"Jan. 2023 - Current","title":"Context | UX/UI Lead, AI Development","href":"https://www.context-verify.eu/","stack":[{"label":"Python","icon":"python.svg"},{"label":"TensorFlow","icon":"tensorflow.svg"},{"label":"Docker","icon":"docker.svg"},{"label":"Node.js","icon":"node-js.svg"},{"label":"Puppeteer","icon":"puppeteer.svg"},{"label":"Figma","icon":"figma.svg"}],"list":[{"text":"Developing a AI Product in a startup environment"},{"text":"Levraging my expierence as Frontend Developer to create an optimal user expierence"},{"text":"Gaining first-hand expierence in Data Sciene and Large Language Models"}]},{"subtitle":"Aug. 2021 - Jan. 2024","title":"Agentur LOOP | Frontend Developer","href":"https://www.agentur-loop.com/","stack":[{"label":"Python","icon":"python.svg"},{"label":"TensorFlow","icon":"tensorflow.svg"},{"label":"Docker","icon":"docker.svg"},{"label":"Node.js","icon":"node-js.svg"},{"label":"Puppeteer","icon":"puppeteer.svg"},{"label":"Figma","icon":"figma.svg"}],"list":[{"text":"Frontend integration & maintenance of UX products"},{"text":"Exposure to backend development through PHP, WordPress & Craft"},{"text":"Providing expertise & solutions for international clients"},{"text":"Fast-paced & agile work environment"}]},{"subtitle":"Jun. 2021 - Aug. 2021","title":"Agentur LOOP | Frontend Developer | Internship","href":"https://www.agentur-loop.com/","stack":[{"label":"Python","icon":"python.svg"},{"label":"TensorFlow","icon":"tensorflow.svg"},{"label":"Docker","icon":"docker.svg"},{"label":"Node.js","icon":"node-js.svg"},{"label":"Puppeteer","icon":"puppeteer.svg"},{"label":"Figma","icon":"figma.svg"}],"list":[{"text":"Frontend integration & maintenance of UX products"},{"text":"Exposure to backend development through PHP, WordPress & Craft"},{"text":"Providing expertise & solutions for international clients"},{"text":"Fast-paced & agile work environment"}]},{"subtitle":"2015 - 2021","title":"HLWM Annahof | Austrian Certificate For Higher Education (Matura)","href":"https://www.hlw-salzburg.at/","stack":[{"label":"Python","icon":"python.svg"},{"label":"TensorFlow","icon":"tensorflow.svg"},{"label":"Docker","icon":"docker.svg"},{"label":"Node.js","icon":"node-js.svg"},{"label":"Puppeteer","icon":"puppeteer.svg"},{"label":"Figma","icon":"figma.svg"}],"list":[{"text":"Frontend integration & maintenance of UX products"},{"text":"Exposure to backend development through PHP, WordPress & Craft"},{"text":"Providing expertise & solutions for international clients"},{"text":"Fast-paced & agile work environment"}]}]}');function About(){let e=JSON.parse(JSON.stringify($)),t=JSON.parse(JSON.stringify(P));return(0,n.jsxs)("div",{className:`${k().main} about-in`,id:"scroll-about",children:[n.jsx("div",{className:`${k().col}`,children:e.left_col.map((e,t)=>n.jsx("div",{"is-right":"true",style:{},className:`${k().info} ${k().info__right} info-in`,children:(0,n.jsxs)("p",{className:`${k().info__text} info-text-in copy-big light`,children:[n.jsx("span",{children:e.icon}),e.text]})},t))}),n.jsx("div",{className:`${k().col} image-in`,children:n.jsx(y(),{src:e.image.src,width:500,height:500,alt:"Astro Surfing",unoptimized:!0,style:{zIndex:1,opacity:1}})}),n.jsx("div",{className:`${k().col__mobile}`,children:e.left_col.map((e,t)=>(0,n.jsxs)("div",{className:`${k().col__pill} copy light`,children:[n.jsx("span",{children:e.icon}),e.text]},t))}),n.jsx("div",{className:`${k().col__cv}`,children:t.entries.map((e,t)=>(0,n.jsxs)("a",{href:e.href,target:"_blank",className:`${k().col__cv__entry} entry-${t+1} cv-entry-in`,children:[(0,n.jsxs)("div",{className:`${k().col__cv__entry__title}`,children:[n.jsx("div",{className:`${k().col__cv__entry__subtitle} copy-small very-light text-grey-light`,"data-active":0==t,children:e.subtitle}),n.jsx("p",{className:"copy light",children:e.title})]}),(0,n.jsxs)("div",{className:`${k().col__cv__entry__link}`,href:"#",children:[" ",n.jsx(components_SvgRenderer,{src:"/icons/link-alt.svg",size:32})]})]},t))}),n.jsx("div",{className:`${k().col}`,children:e.right_col.map((e,t)=>n.jsx("div",{style:{},className:`${k().info} info-in`,children:e.button?n.jsx(Button,{label:e.text,isContact:!0,linkedin:"www.gooogle.com",mail:"mailto:cougarbelec@hotmail.com",customClass:k().info__cta}):(0,n.jsxs)("p",{className:`${k().info__text} info-text-in copy-big light`,children:[e.text,n.jsx("span",{children:e.icon})]})},t))})]})}var C=i(4183),E=i.n(C);let A=(0,r.forwardRef)((e,t)=>{let[i,s]=(0,r.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:`${E().highlight__content} highlight-content-in-${e.highlightKey}`,children:[(0,n.jsxs)("div",{className:`${E().highlight__title}`,children:[n.jsx("h6",{className:"light very-dark",children:e.subtitle}),n.jsx("h3",{className:"light",children:e.title})]}),n.jsx("div",{className:E().highlight__tech,children:e.tech.map((e,t)=>n.jsx("span",{className:"copy-small pill bold-light",children:e},t))}),n.jsx("p",{className:`${E().highlight__copy} copy-big very-light`,children:e.copy}),n.jsx(Button,{href:e.link,label:"Learn More",spacing:"default",type:"default"})]}),(0,n.jsxs)("div",{className:`${E().highlight__image} highlight-img-in-${e.highlightKey}`,children:[(0,n.jsxs)("div",{className:`${E().highlight__content__mobile}`,children:[n.jsx("p",{className:"subtitle text-center text-black copy",children:"SES"}),n.jsx("p",{className:`${E().highlight__content__mobile__title} copy-large light text-center text-black`,children:"Interactive Shopplan"}),n.jsx("div",{className:`${E().highlight__content__mobile__hidden}`,"data-expand":i,children:(0,n.jsxs)("div",{children:[n.jsx("div",{className:E().highlight__tech,children:e.tech.map((e,t)=>n.jsx("span",{className:"copy-small pill bold-light",children:e},t))}),n.jsx("p",{className:`${E().highlight__copy} copy-big very-light`,children:e.copy})]})}),(0,n.jsxs)("div",{className:`${E().highlight__content__mobile__buttons}`,children:[n.jsx(Button,{href:e.link,shadow:"true",label:"View Site",spacing:"default",type:"default"}),n.jsx("div",{onClick:()=>{s(!i)},className:`${E().highlight__content__mobile__icon}`,children:n.jsx(components_SvgRenderer,{src:"icons/info.svg",size:24})})]})]}),n.jsx(y(),{src:e.imgSrc,alt:"Product Image",unoptimized:!0,width:"350",height:"750"})]})]})}),z=JSON.parse('{"entries":[{"id":1,"highlight":false,"subtitle":"Context","img":"/images/context-final.png","title":"AI Chatbot","description":"Designed and implemented a fully dynamic and scalable digital map interface for a client\'s portfolio of 31+ shopping centers, integrated with advanced search and filter capabilities to enhance user experience and navigation.","href":"https://www.europark.at/de/essen-trinken/?overlay=shop-plan","tech":["SVG","JavsScript","SASS","PHP"]},{"id":2,"highlight":false,"subtitle":"SES","img":"/images/sp-final-2.png","title":"Interactive Map","description":"Designed and implemented a fully dynamic and scalable digital map interface for a client\'s portfolio of 31+ shopping centers, integrated with advanced search and filter capabilities to enhance user experience and navigation.","href":"https://www.europark.at/de/essen-trinken/?overlay=shop-plan","tech":["SVG","JavsScript","SASS","PHP"]},{"id":3,"highlight":false,"subtitle":"Salewa Ortles","img":"/images/sal-final.png","title":"Salewa X Ortles","description":"Designed and implemented a fully dynamic and scalable digital map interface for a client\'s portfolio of 31+ shopping centers, integrated with advanced search and filter capabilities to enhance user experience and navigation.","href":"https://www.europark.at/de/essen-trinken/?overlay=shop-plan","tech":["SVG","JavsScript","SASS","PHP"]},{"id":3,"highlight":false,"subtitle":"GATX","img":"/images/gatx-final.png","title":"Interactive Map","description":"Designed and implemented a fully dynamic and scalable digital map interface for a client\'s portfolio of 31+ shopping centers, integrated with advanced search and filter capabilities to enhance user experience and navigation.","href":"https://www.europark.at/de/essen-trinken/?overlay=shop-plan","tech":["SVG","JavsScript","SASS","PHP"]},{"id":3,"highlight":false,"subtitle":"Sacher","img":"/images/sacher-final.png","title":"Interactive Map","description":"Designed and implemented a fully dynamic and scalable digital map interface for a client\'s portfolio of 31+ shopping centers, integrated with advanced search and filter capabilities to enhance user experience and navigation.","href":"https://www.europark.at/de/essen-trinken/?overlay=shop-plan","tech":["SVG","JavsScript","SASS","PHP"]}]}');var I=i(68317),M=i(89448),D=i.n(M),O=i(22323);function Projects(){let e=JSON.parse(JSON.stringify(z)),{globalState:t}=(0,r.useContext)(b.GlobalContext);m.p8.registerPlugin(v.i);let[i,s]=(0,r.useState)(2),[a,l]=(0,r.useState)(1),o=(0,r.createRef)();(0,r.useEffect)(()=>{0==i?l(9):i&&l(i)},[i]);let[c,_]=(0,r.useState)(!0),[d,p]=(0,r.useState)(!1),handleSlideChange=e=>{s(e.realIndex),_(e.isBeginning),p(e.isEnd)};return n.jsx("div",{className:`${E().wrapper} projects-trigger`,children:(0,n.jsxs)("div",{className:`${E().inner}`,children:[n.jsx(I.tq,{modules:[O.W_],className:`${E().slider}`,slidesPerView:"auto",centeredSlides:!0,spaceBetween:0,initialSlide:2,speed:1e3,effect:"fade",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},onSwiper:e=>e,onSlideChange:e=>handleSlideChange(e),onBeforeInit:e=>{o.current=e},children:e.entries.map((e,t)=>n.jsx(I.o5,{"data-active":t==i,style:{opacity:t!==i?.5:1},className:`${E().highlight}`,children:n.jsx("div",{frame:"1",className:`${E().highlight__frame} highlight-frame-1`,children:n.jsx(A,{imgSrc:e.img,highlightKey:e.id,subtitle:e.subtitle,title:e.title,tech:e.tech,copy:e.description,link:e.href,buttonLink:e.href})})},t))}),n.jsx("div",{className:`${E().disclaimer} copy-tiny text-grey-dark`,children:"The projects highlighted here were primarily driven by my expertise and efforts, yet they may also reflect the collaborative spirit of an agency environment where various talents converge."}),(0,n.jsxs)("div",{className:`${D().pagination}`,children:[a," / ",e.entries.length]}),(0,n.jsxs)("div",{className:`${D().navigation} ${E().navigation}`,children:[n.jsx("div",{className:`${D().navigation__button} ${E().slider__button} ${D().navigation__button__prev}  swiper-button-prev`,onClick:()=>{console.log("1"),o.current&&(console.log("2"),o.current.slidePrev())},style:{visibility:c?"hidden":"visible"},children:n.jsx(components_SvgRenderer,{src:"icons/arrow-left.svg",size:24})}),n.jsx("div",{className:`${D().navigation__button} ${E().slider__button} ${D().navigation__button__next}  swiper-button-next`,onClick:()=>{o.current&&o.current.slideNext()},style:{visibility:d?"hidden":"visible"},children:n.jsx(components_SvgRenderer,{src:"icons/arrow.svg",size:24})})]})]})})}var L=i(60758),R=i.n(L);let F=JSON.parse('{"title":"Services","cards":[{"title":"Development","subtitle":"UX & UI \uD83C\uDFA8","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","img":"truck.png","tags":[{"label":"At Context","active":true},{"label":"At Agentur LOOP"}],"stack":[{"label":"HTML","icon":"html5.svg"},{"label":"(S)CSS","icon":"sass.svg"},{"label":"JavaScript","icon":"js.svg"},{"label":"TypeScript","icon":"typescript.svg"},{"label":"React.js","icon":"react.svg"},{"label":"Vue.js","icon":"vuejs.svg"},{"label":"Next.js","icon":"nextjs.svg"},{"label":"PHP","icon":"php.svg"},{"label":"Analytics","icon":"ga.svg"},{"label":"Three.js","icon":"threejs.svg"},{"label":"GSAP","icon":"gsap.svg"}]},{"title":"Design","subtitle":"UX & UI \uD83C\uDFA8","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","img":"gun.png","tags":[{"label":"At Context","active":true}],"stack":[{"label":"Figma","icon":"figma.svg"},{"label":"Adobe Creative Cloud","icon":"adobe.svg"}]},{"title":"Development","subtitle":"Backend \uD83D\uDEE0️","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","img":"server.png","tags":[{"label":"At Context","active":true},{"label":"At Agentur LOOP"}],"stack":[{"label":"Node.js","icon":"node-js.svg"},{"label":"MongoDB","icon":"leaf-solid.svg"},{"label":"Docker","icon":"docker.svg"},{"label":"PHP","icon":"php.svg"},{"label":"Wordpress","icon":"wordpress.svg"},{"label":"Algolia","icon":"algolia.svg"},{"label":"Express.js","icon":"truck-fast-solid.svg"},{"label":"Puppeteer","icon":"pupeteer.svg"},{"label":"AWS","icon":"aws.svg"}]},{"title":"Consulting","subtitle":"AI ✨","text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","img":"scope.png","tags":[{"label":"At Context","active":true}],"stack":[{"label":"Python","icon":"python.svg"},{"label":"TensorFlow","icon":"tensorflow.svg"},{"label":"ChatGPT","icon":"chatgpt.svg"}]}]}');var B=i(93533),J=i.n(B);function ServiceCard(e){let t=e.card;return n.jsx("div",{className:`${R().card} service-card-in`,children:(0,n.jsxs)("div",{className:`${R().card__inner}`,children:[n.jsx("div",{className:`${R().card__mask}`}),(0,n.jsxs)("div",{className:`${R().card__content}`,children:[(0,n.jsxs)("div",{className:`${R().card__header}`,children:[n.jsx("h6",{className:"very-light",children:t.subtitle}),n.jsx("h4",{className:"light",children:t.title})]}),(0,n.jsxs)("div",{className:`${R().card__body}`,children:[n.jsx("p",{className:"copy very-light",children:t.text}),n.jsx("div",{className:`${R().card__stack}`,children:t.stack.map((e,t)=>(0,n.jsxs)("div",{className:`${R().card__pill} ${J().pill} ${J().transparent} copy-tiny`,children:[n.jsx(components_SvgRenderer,{src:`icons/${e.icon}`,size:16}),n.jsx("span",{className:"copy-tiny",children:e.label})]},t))})]})]}),t.tags&&n.jsx("div",{className:`${R().card__tags}`,children:t.tags.map((e,t)=>(0,n.jsxs)("div",{className:`${R().card__tag} ${J().pill} ${e.active?J().green:""}`,children:[n.jsx(components_SvgRenderer,{src:"icons/work.svg",size:24}),n.jsx("span",{className:"copy-tiny",children:e.label})]},t))}),n.jsx("div",{className:`${R().card__img}`,children:n.jsx(y(),{src:`/images/${t.img}`,alt:"Illustration",unoptimized:!0,width:"250",height:"250"})})]})})}function Services(){let e=JSON.parse(JSON.stringify(F));return m.p8.registerPlugin(v.i),n.jsx("div",{className:`${R().wrapper} services-trigger`,children:n.jsx("div",{className:`${R().inner}`,children:e.cards.map((e,t)=>n.jsx(ServiceCard,{card:e},t))})})}var G=i(39483),T=i.n(G);function PageBackground(){return(0,r.useEffect)(()=>{m.p8.to(".rotate img",{duration:30,rotation:-360,repeat:-1,ease:"linear"}),m.p8.to(".rotate-counter img",{duration:30,rotation:360,repeat:-1,ease:"linear"}),m.p8.to(".rotate-45 img",{duration:5,rotation:20,yoyo:!0,repeat:-1,ease:"linear"}),m.p8.to(".bounce img",{duration:5,x:-100,y:-100,yoyo:!0,repeat:-1,ease:"linear"}),m.p8.to(".scroll",{"--top":"200%",duration:2,repeat:-1,ease:"linear"})},[]),(0,r.useEffect)(()=>{let e=window.innerWidth/2,t=window.innerHeight/2,i=0,n=0,handleMouseMove=s=>{let{clientX:a,clientY:l}=s;a<e?i-=.05:a>e&&(i+=.05),l<t?n-=.05:l>t&&(n+=.05),m.p8.to(".background-move",{x:i,y:n}),e=a,t=l};return window.addEventListener("mousemove",handleMouseMove),()=>{window.removeEventListener("mousemove",handleMouseMove)}},[]),(0,n.jsxs)("div",{className:`${T().main}`,children:[n.jsx("div",{className:`${T().gradient} gradient-change`}),n.jsx("div",{className:`${T().illustration}`,style:{top:"50%",left:"10%"},children:n.jsx(y(),{src:"/images/stars.png",width:100,height:100,alt:"Smoke Image",style:{mixBlendMode:"screen"}})}),n.jsx("div",{className:`${T().illustration}`,style:{top:"10%",left:"90%"},children:n.jsx(y(),{src:"/images/stars.png",width:100,height:100,alt:"Smoke Image",style:{mixBlendMode:"screen"}})}),n.jsx("div",{className:`${T().illustration}`,style:{top:"40%",left:"90%"},children:n.jsx(y(),{src:"/images/star-small-glow.png",width:100,height:100,alt:"Smoke Image",style:{mixBlendMode:"screen"}})}),n.jsx("div",{className:`${T().illustration}`,style:{top:"80%",left:"80%"},children:n.jsx(y(),{src:"/images/star-small-glow.png",width:50,height:50,alt:"Smoke Image",style:{mixBlendMode:"screen"}})}),n.jsx("div",{className:`${T().illustration}`,style:{top:"90%",left:"20%"},children:n.jsx(y(),{src:"/images/falling_star.png",width:50,height:50,alt:"Smoke Image",style:{mixBlendMode:"screen"}})}),n.jsx("div",{className:`${T().illustration}`,style:{top:"30%",left:"70%"},children:n.jsx(y(),{src:"/images/star-small-glow.png",width:50,height:50,alt:"Smoke Image",style:{mixBlendMode:"screen"}})}),n.jsx("div",{className:`${T().illustration} rotate-45 background-move illustration-out`,style:{top:"15%",left:"7%"},children:n.jsx(y(),{src:"/images/Satellite.png",width:250,height:250,alt:"Smoke Image"})}),n.jsx("div",{className:`${T().illustration} bounce background-move illustration-out`,style:{top:"3%",left:"88%"},children:n.jsx(y(),{src:"/images/small_satellite.png",width:150,height:150,alt:"Smoke Image",style:{transform:"rotate(120deg)"}})}),n.jsx("div",{className:`${T().illustration} rotate-counter background-move illustration-out`,style:{top:"44%",left:"12%"},children:n.jsx(y(),{src:"/images/black_planet.png",width:175,height:175,alt:"Smoke Image",unoptimized:!0})}),n.jsx("div",{className:`${T().illustration} rotate background-move illustration-out  `,style:{top:"42%",left:"82%"},children:n.jsx(y(),{src:"/images/planet_shine.png",width:200,height:200,alt:"Smoke Image"})})]})}var W=i(46035),H=i.n(W),X=i(17331),q=i(54716),U=i(97645),V=i.n(U),Y=i(11440),Z=i.n(Y),K=i(8481);function Navigation(){m.p8.registerPlugin(K.L);let[e,t]=(0,r.useState)(1),[i,s]=(0,r.useState)(!1),[a,l]=(0,r.useState)(!0),[o,c]=(0,r.useState)(0);return(0,r.useEffect)(()=>{1==e&&m.p8.to(window,{duration:3,scrollTo:0,ease:"power3"}),2==e&&m.p8.to(window,{duration:3,scrollTo:5e3,ease:"power3"}),3==e&&m.p8.to(window,{duration:3,scrollTo:10500,ease:"power3"})},[e]),n.jsx("nav",{className:`${V().nav}`,"data-top":a,"data-hidden":i,children:(0,n.jsxs)("div",{className:`${V().center}`,children:[n.jsx("div",{className:`${V().left}`,children:n.jsx(y(),{alt:"logo",style:{objectFit:"contain"},width:120,height:30,src:"/images/logomod.png"})}),(0,n.jsxs)("ul",{children:[n.jsx("li",{children:n.jsx(Z(),{onClick:()=>t(1),"data-active":1==e,href:"#",className:"copy",children:"Home"})}),n.jsx("li",{children:n.jsx(Z(),{onClick:()=>t(2),"data-active":2==e,href:"#",className:"copy",children:"About"})}),n.jsx("li",{children:n.jsx(Z(),{onClick:()=>t(3),"data-active":3==e,href:"#",className:"copy",children:"Projects"})}),n.jsx("li",{children:n.jsx(Z(),{onClick:()=>t(4),"data-active":4==e,href:"#stack",className:"copy",children:"Services"})})]}),n.jsx("div",{className:V().center__ctas,children:n.jsx(Button,{label:"Contact Me",type:"default",spacing:"default",isContact:!0,linkedin:"www.gooogle.com",mail:"mailto:cougarbelec@hotmail.com",href:"#"})})]})})}function Frame({children:e}){m.p8.registerPlugin(v.i,x.W,X.X,q.W);let[t,i]=(0,r.useState)(!1),[s,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=m.p8.timeline({scrollTrigger:{id:"first-scene-trigger",trigger:"body",start:"top+=100 top",end:"bottom bottom",scrub:1,preventOverlaps:!0}});e.to(".scroll",{duration:1,opacity:0}),e.to(".smoke-out",{duration:1,opacity:0},"<"),e.to(".text-out-2",{duration:1,x:-100,opacity:0}),e.to(".rocket-out",{duration:1,y:50},"<"),e.to(".rocket-out",{duration:1,y:-1e3,opacity:0}),e.to(".text-out-1",{duration:1,top:"20%"},"<"),e.to(".landing-trigger",{opacity:0,pointerEvents:"none",onReverseComplete:()=>{m.p8.to(".about-in",{opacity:0,pointerEvents:"none"})},onComplete:()=>{m.p8.to(".about-in",{opacity:1,pointerEvents:"all"})}});let t=m.p8.utils.toArray(".info-in"),i=.1;t.forEach((t,n)=>{4==n&&(e.to(t,{delay:i,duration:.5,visibility:"visible"}),i+=.1),n>=3&&4!=n?(e.to(t,{delay:i,duration:.5,visibility:"visible"}),i+=.1):4!=n&&(e.to(t,{delay:i,duration:.5,visibility:"visible"}),i+=.1)}),e.to(".about-in",{opacity:0,pointerEvents:"none",onReverseComplete:()=>{m.p8.to(".journey-trigger",{opacity:0,pointerEvents:"none"})},onComplete:()=>{m.p8.to(".journey-trigger",{opacity:1,pointerEvents:"all"})}});let n=m.p8.utils.toArray(".cv-entry-in");n.forEach((t,i)=>{e.to(t,{delay:1,duration:.5,opacity:1})}),e.to(".journey-trigger",{opacity:0,pointerEvents:"none",onReverseComplete:()=>{m.p8.to(".projects-trigger",{opacity:0,pointerEvents:"none"})}}),e.to(".projects-trigger",{duration:1,zIndex:99,opacity:1,pointerEvents:"all"}),e.to(".projects-trigger",{duration:1,opacity:0,pointerEvents:"none"}),e.to(".services-trigger",{duration:1,opacity:1})}),n.jsx("div",{className:`${H().main} frame-trigger`,children:e})}function Home(){let{globalState:e,setGlobalState:t}=(0,r.useContext)(b.GlobalContext),[i,s]=(0,r.useState)(!0),[a,l]=(0,r.useState)(!1),{width:o,height:c}=useWindowDimensions();return(0,r.useEffect)(()=>{("ontouchstart"in window||navigator.maxTouchPoints)&&l(!0)},[]),(0,r.useEffect)(()=>{e.dimensionalModulesLoaded&&s(!1)},[e]),(0,r.useEffect)(()=>{document.documentElement.style.setProperty("--screen",`${o}px`)},[o,c]),(0,n.jsxs)("div",{"data-touch":a,children:[n.jsx("header",{children:n.jsx(Navigation,{})}),(0,n.jsxs)("main",{className:"gsap-main-trigger",children:[n.jsx(PageBackground,{}),(0,n.jsxs)(Frame,{children:[n.jsx(SectionLanding,{}),n.jsx(About,{}),n.jsx(Projects,{}),n.jsx(Services,{})]})]})]})}},1082:e=>{e.exports={"pill--default":"about_pill--default__WVjWw","pill--small":"about_pill--small__3qGly",main:"about_main___k_a8",col:"about_col__WQPuI",col__cv:"about_col__cv__V_XRy",col__cv__entry:"about_col__cv__entry__6VzKN",col__cv__entry__link:"about_col__cv__entry__link__asgGl",col__mobile:"about_col__mobile__DnwWb",col__pill:"about_col__pill__9THoa",info:"about_info__U6el2",info__right:"about_info__right__m6Qz2",info__text:"about_info__text__jWE1q",info__cta:"about_info__cta__4TneI","blink-1":"about_blink-1__pCpOj","bounce-top":"about_bounce-top__vMfaE"}},39483:e=>{e.exports={"pill--default":"background_pill--default__Z2jdJ","pill--small":"background_pill--small__0Db3E",main:"background_main__FDCSx",journey:"background_journey__353KO",journey__svgEl:"background_journey__svgEl__UBWyr",journey__overlay:"background_journey__overlay__LSPSm",journey__ball:"background_journey__ball__gA91g",journey__gradient:"background_journey__gradient__BFV2G",journey__stop:"background_journey__stop__0QCW5",journey__stop__img:"background_journey__stop__img__4FwNR",gradient:"background_gradient__XaovX",illustration:"background_illustration__7BUKj"}},2156:e=>{e.exports={"pill--default":"button_pill--default__St78y","pill--small":"button_pill--small__fuGA1",wrapper:"button_wrapper__ray7z",link:"button_link__lkn7Y",button:"button_button__y8_6D",button__contact:"button_button__contact__FjfLR",expand:"button_expand__v2mVo",expand__content:"button_expand__content__l6Gav",default:"button_default__weo2w",transparent:"button_transparent__k_9rT",fixed_bottom:"button_fixed_bottom__ceGk4"}},37403:e=>{e.exports={"pill--default":"dimensional_pill--default__BJPQ2","pill--small":"dimensional_pill--small__4bKBm"}},46035:e=>{e.exports={"pill--default":"frame_pill--default__TTyAy","pill--small":"frame_pill--small__PywbZ",main:"frame_main__nRIZk"}},79816:e=>{e.exports={"pill--default":"landing_pill--default__uznZr","pill--small":"landing_pill--small__t96Tj",inner:"landing_inner__KIJOs",gradient:"landing_gradient__thk3c",scroll:"landing_scroll__NI4X_",background__illustrations:"landing_background__illustrations__UzhJS",background__illustration:"landing_background__illustration__EcNjI",headline:"landing_headline__zlWZy",rocket:"landing_rocket__ebod5",illustration:"landing_illustration__Dl6aa",about:"landing_about__8ucBD",about__col:"landing_about__col__Dtj_j","bounce-top":"landing_bounce-top__hJrOl",about__info:"landing_about__info___zmn8",about__info__right:"landing_about__info__right__DMEtB",about__info__text:"landing_about__info__text__yMuts",about__info__cta:"landing_about__info__cta__C69jk","blink-1":"landing_blink-1___BYt0","pulsate-fwd":"landing_pulsate-fwd__WswpJ"}},97645:e=>{e.exports={"pill--default":"navigation_pill--default__dVf_Q","pill--small":"navigation_pill--small__qHRoz",left:"navigation_left__g_gwv",center:"navigation_center__t5VB_",center__ctas:"navigation_center__ctas__ZmU2F"}},93533:e=>{e.exports={"pill--default":"pill_pill--default__vgk5a","pill--small":"pill_pill--small__x_yhW",pill:"pill_pill__MV5JF",green:"pill_green__wRgHv",transparent:"pill_transparent__B0_50"}},4183:e=>{e.exports={"pill--default":"projects_pill--default__B1waD","pill--small":"projects_pill--small__0OY7F",wrapper:"projects_wrapper__pW__Q",inner:"projects_inner__YpevA",slider:"projects_slider__9rjYc",disclaimer:"projects_disclaimer__zLhhx",highlight:"projects_highlight__Y82FP",highlight__frame:"projects_highlight__frame__ePYGG",highlight__content:"projects_highlight__content__nSE6r",highlight__content__mobile:"projects_highlight__content__mobile__kbXZM",highlight__content__mobile__title:"projects_highlight__content__mobile__title___zuvf",highlight__content__mobile__buttons:"projects_highlight__content__mobile__buttons__rBYXC",highlight__content__mobile__icon:"projects_highlight__content__mobile__icon__5_ON_",highlight__content__mobile__hidden:"projects_highlight__content__mobile__hidden__5AYxN",highlight__title:"projects_highlight__title__IbRE7",highlight__tech:"projects_highlight__tech__9Yoi0",highlight__copy:"projects_highlight__copy__C0wlq",highlight__image:"projects_highlight__image__WQXmv",highlight__image__button:"projects_highlight__image__button__rqKLH",navigation:"projects_navigation__HaMe4"}},60758:e=>{e.exports={"pill--default":"services_pill--default__O8t9S","pill--small":"services_pill--small__PElpx",wrapper:"services_wrapper__sKlgC",inner:"services_inner__uHTGd",card:"services_card__Glee_",card__pill:"services_card__pill__MQiXJ",card__mask:"services_card__mask__5waZm",card__content:"services_card__content__mF4Oe",card__body:"services_card__body__L38aQ",card__stack:"services_card__stack__XB0_F",card__img:"services_card__img__h42z7",card__tags:"services_card__tags__lBUG5"}},89448:e=>{e.exports={"pill--default":"slider_pill--default__3IugM","pill--small":"slider_pill--small__wm003",main:"slider_main___9ynm",pagination:"slider_pagination__o_Eq5",navigation:"slider_navigation__Hcq6d",navigation__button:"slider_navigation__button__5m62k",navigation__button__next:"slider_navigation__button__next__a8yY4",navigation__button__prev:"slider_navigation__button__prev__lLWHq"}},33298:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>l,__esModule:()=>a,default:()=>r});var n=i(95153);let s=(0,n.createProxy)(String.raw`C:\Users\couga\Documents\GitHub\port2023\test\app\page.jsx`),{__esModule:a,$$typeof:l}=s,o=s.default,r=o}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),i=t.X(0,[502,893,554],()=>__webpack_exec__(23004));module.exports=i})();