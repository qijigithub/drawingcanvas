(this.webpackJsonpdrawingcanvas=this.webpackJsonpdrawingcanvas||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),c=t(12),r=t.n(c),a=(t(18),t(3)),s=(t(19),t(1)),l=function(e){var n=e.onStart,t=e.onDraw,o=e.onEnd,c=e.onStop,r=e.height,l=e.width,u=e.className,d=i.a.useRef(null),f=i.a.useState({x:0,y:0}),h=Object(a.a)(f,2),v=h[0],g=h[1];i.a.useEffect((function(){var e=d.current;e&&(e.height=r,e.width=l,e.style.width="100vw",e.style.height="100vh")}),[l,r]);var w=function(e){var t=e.nativeEvent,o=t.offsetX,i=t.offsetY,c=d.current;if(c){var r;if(window.TouchEvent)(null===(r=t.changedTouches)||void 0===r?void 0:r.length)&&(o=t.changedTouches[0].clientX-c.offsetLeft,i=t.changedTouches[0].clientY-c.offsetTop);var a=c.getBoundingClientRect(),s=o/a.width,l=i/a.height;g({x:s,y:l}),n()}},b=function(){o()},k=function(e){var n=e.nativeEvent,o=n.offsetX,i=n.offsetY,c=d.current;if(c){var r;if(window.TouchEvent)(null===(r=n.changedTouches)||void 0===r?void 0:r.length)&&(o=n.changedTouches[0].clientX-c.offsetLeft,i=n.changedTouches[0].clientY-c.offsetTop);var a=c.getContext("2d"),s=c.getBoundingClientRect(),l=o/s.width,u=i/s.height;t(a,v.x,v.y,l,u),g({x:l,y:u})}};return Object(s.jsx)("canvas",{ref:d,onMouseDown:w,onMouseMove:k,onMouseUp:b,onMouseLeave:function(){c()},onTouchStart:w,onTouchEnd:b,onTouchMove:k,className:u})},u=t(33),d=function(){/iPad|iPhone|iPod/.test(navigator.userAgent)&&window.MSStream;var e=i.a.useState(!1),n=Object(a.a)(e,2),t=n[0],o=n[1],c=i.a.useState(0),r=Object(a.a)(c,2),d=r[0],f=r[1],h=i.a.useState(window.innerHeight),v=Object(a.a)(h,2),g=v[0],w=v[1],b=i.a.useState(window.innerWidth),k=Object(a.a)(b,2),j=k[0],p=k[1],S=i.a.useRef(null),x=function(e){f(e)};return i.a.useEffect((function(){return window.addEventListener("resize",(function(e){p(window.innerWidth),w(window.innerHeight)})),function(){window.removeEventListener("resize",(function(){}))}}),[S.current]),Object(s.jsxs)(u.a,{fixed:!0,children:[Object(s.jsx)("div",{ref:S,children:Object(s.jsx)(l,{id:"canvas",onDraw:function(e,n,o,i,c){if(t)if(0===d)i*=j,c*=g,e.fillStyle="white",e.fillRect(i,c,100,100);else{switch(n*=j,o*=g,i*=j,c*=g,e.beginPath(),e.moveTo(n,o),e.lineTo(i,c),d){case 1:e.strokeStyle="black";break;case 2:e.strokeStyle="red";break;case 3:e.strokeStyle="blue";break;case 4:e.strokeStyle="green";break;case 5:e.strokeStyle="yellow";break;case 6:e.strokeStyle="purple";break;case 7:e.strokeStyle="grey"}e.lineWidth=3,e.stroke()}},onStart:function(){return o(!0)},onStop:function(){return o(!1)},onEnd:function(){t&&o(!1)},height:g,width:j})}),Object(s.jsxs)("div",{id:"colorButtonBox",children:[Object(s.jsx)("div",{id:"colorButton",className:"black",onClick:function(){f(1)}}),Object(s.jsx)("div",{id:"colorButton",className:"red",onClick:function(){return x(2)}}),Object(s.jsx)("div",{id:"colorButton",className:"blue",onClick:function(){return x(3)}}),Object(s.jsx)("div",{id:"colorButton",className:"green",onClick:function(){return x(4)}}),Object(s.jsx)("div",{id:"colorButton",className:"yellow",onClick:function(){return x(5)}}),Object(s.jsx)("div",{id:"colorButton",className:"purple",onClick:function(){return x(6)}}),Object(s.jsx)("div",{id:"colorButton",className:"grey",onClick:function(){return x(7)}}),Object(s.jsx)("div",{id:"eraserButton",className:"white",onClick:function(){return f(0)}})]})]})},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){console.log("regist"),navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("installed work"),console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),o(e),i(e),c(e),r(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){console.log("serviceWorker register");var n=new URL(".",window.location.href);if(console.log(n.origin,window.location.origin),n.origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(".","/service-worker.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):(console.log("serviceWorker registerValidSW"),h(n,e))}))}}(),v()}},[[24,1,2]]]);
//# sourceMappingURL=main.3f568b4c.chunk.js.map