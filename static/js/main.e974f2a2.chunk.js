(this.webpackJsonpsuvirepublic=this.webpackJsonpsuvirepublic||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),s=n.n(r),l=(n(12),n(2)),u=Object(a.createContext)(),j=n(0);var i=function(e){var t=e.children,n=Object(a.useState)(0),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(0),b=Object(l.a)(i,2),O=b[0],o={wallOne:r,setWallOne:s,setWallOneH:b[1],wallOneH:O};return Object(j.jsx)(u.Provider,{value:o,children:t})};var b=function(e){var t=e.Style;return Object(j.jsx)("div",{className:t})};var O=function(e){var t=e.Style;return Object(j.jsx)("div",{className:t})},o=n(7);function d(e){var t=e.testId,n=e.type,a=e.name,c=e.value,r=e.change,s=e.inputclass;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:n,placeholder:a,value:c,onChange:function(e){return r(e.target.value)},className:s,"data-testid":t})," ",a]})}var v=function(e){var t=e.InputClass,n=Object(a.useState)(0),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(j.jsx)("div",{children:Object(j.jsx)(d,{type:"number",name:"Portas",inputclass:t,value:r,change:s})})};var h=function(e){var t=e.InputClass,n=Object(a.useState)(0),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(j.jsx)("div",{children:Object(j.jsx)(d,{type:"number",name:"Janelas",inputclass:t,value:r,change:s})})};var p=function(e){var t=e.Style,n=e.InputClass,c=Object(a.useState)(0),r=Object(l.a)(c,2),s=r[0],u=r[1],i=Object(a.useState)(0),b=Object(l.a)(i,2),O=b[0],o=b[1];return Object(j.jsxs)("div",{className:t,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(v,{Style:"wall-holder",InputClass:"input-door"}),Object(j.jsx)(h,{Style:"wall-holder",InputClass:"input-door"})]}),Object(j.jsx)(d,{type:"number",name:"Altura",inputclass:n,value:s,change:u}),Object(j.jsx)(d,{type:"number",name:"Largura",inputclass:n,value:O,change:o})]})};var x=function(e){var t=e.Title,n=e.Style,a=e.onClick;return Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:n,onClick:a,children:t})})};var S=function(e){var t=e.Style,n=Object(a.useState)(4),c=Object(l.a)(n,1)[0],r=Object(a.useState)(!1),s=Object(l.a)(r,1)[0];return Object(j.jsxs)("div",{className:t,children:[s?"Carregando":Object(o.a)(Array(c)).map((function(e){return Object(j.jsx)(p,{Style:"wall-holder",InputClass:"input-height"},e)})),Object(j.jsx)(x,{Title:"CALCULAR",Style:"btn",onClick:function(){return console.log("data")}})]})};n(14);var f=function(){return Object(j.jsxs)("div",{className:"overlay",children:[Object(j.jsx)(O,{Style:"header"}),Object(j.jsx)(S,{Style:"main-card"}),Object(j.jsx)(b,{Style:"footer"})]})};var y=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(i,{children:Object(j.jsx)(f,{})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.e974f2a2.chunk.js.map