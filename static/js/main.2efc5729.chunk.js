(this.webpackJsonpdrawingcanvas=this.webpackJsonpdrawingcanvas||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(4),r=n.n(o),s=(n(9),n(3)),a=n(1),u=function(){var e=Object(c.useState)([{}]),t=Object(s.a)(e,2),n=t[0],i=(t[1],Object(c.useRef)(null)),o=Object(c.useRef)(null),r=Object(c.useState)(!1),u=Object(s.a)(r,2),d=u[0],f=u[1];Object(c.useEffect)((function(){var e=i.current;e.width=2*window.innerWidth,e.height=2*window.innerHeight,e.style.width="".concat(window.innerWidth,"px"),e.style.height="".concat(window.innerHeight,"px");var t=e.getContext("2d");t.scale(2,2),t.lineCap="round",t.strokeStyle="black",t.lineWidth=5,o.current=t}),[]);return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("canvas",{style:{border:"1px solid #000000"},onMouseDown:function(e){var t=e.nativeEvent,n=t.offsetX,c=t.offsetY;o.current.beginPath(),o.current.moveTo(n,c),f(!0)},onMouseUp:function(){o.current.closePath(),f(!1)},onMouseMove:function(e){var t=e.nativeEvent;if(d){var n=t.offsetX,c=t.offsetY;o.current.lineTo(n,c),o.current.stroke()}},ref:i}),Object(a.jsx)("h1",{children:n.completed})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.2efc5729.chunk.js.map