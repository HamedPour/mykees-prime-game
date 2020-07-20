(this["webpackJsonpmykees-prime-game"]=this["webpackJsonpmykees-prime-game"]||[]).push([[0],{23:function(e,n,t){e.exports=t(36)},28:function(e,n,t){},31:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(19),c=t.n(o),i=(t(28),t(3)),l=t(9),u=t(1),m=t(2);function s(){var e=Object(u.a)(["\n  height: 100vh;\n  background-color: #000;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);return s=function(){return e},e}var f=m.a.div(s());function g(){var e=Object(u.a)(["\n  font-size: 5rem;\n  font-weight: 300;\n"]);return g=function(){return e},e}var v=m.a.h1(g());function p(){var e=Object(u.a)(["\n  & a {\n    color: #fff;\n    text-decoration: none;\n    cursor: pointer;\n    border-radius: 5px;\n    background-color: rgba(0, 129, 255, 0.6);\n    font-size: 4rem;\n    padding: 10px 30px 20px 30px;\n    transition: box-shadow 0.3s ease-in-out;\n\n    :hover {\n      box-shadow: 0px 0px 5px rgb(250, 250, 250);\n    }\n  }\n"]);return p=function(){return e},e}var d=m.a.div(p());function h(){var e=Object(u.a)(["\n  margin: 7% 0;\n"]);return h=function(){return e},e}var b=m.a.div(h());t(31);var E=function(){return r.a.createElement(f,null,r.a.createElement(v,null,"Welcome to",r.a.createElement("div",{className:"neon"},r.a.createElement("span",{className:"text","data-text":"Mykee's"},"Mykee's"),r.a.createElement("span",{className:"gradient"}),r.a.createElement("span",{className:"spotlight"})),"Prime Game"),r.a.createElement(b,null),r.a.createElement(d,null,r.a.createElement(l.b,{to:"/mykees-prime-game/game"},"Start Game")))},x=t(7);function O(){var e=Object(u.a)(["\n  background-color: #000;\n  color: #fff;\n  height: 100vh;\n  text-align: center;\n"]);return O=function(){return e},e}var j=m.a.div(O());function k(){var e=Object(u.a)(["\n  font-size: 6rem;\n  margin: 5% 0;\n"]);return k=function(){return e},e}var y=m.a.div(k());function w(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return w=function(){return e},e}var S=m.a.div(w());function I(){var e=Object(u.a)(["\n  background-color: green;\n  border: 3px solid green;\n  cursor: pointer;\n  margin: 0 30px;\n  padding: 0 0 10px 0;\n  text-align: center;\n  font-size: 4rem;\n  color: white;\n  flex: 1;\n  max-width: 500px;\n"]);return I=function(){return e},e}var z=m.a.div(I());function M(){var e=Object(u.a)(["\n  margin: 0 30px;\n  background-color: red;\n  text-align: center;\n  cursor: pointer;\n  padding: 0 0 10px 0;\n  border: 3px solid red;\n  font-size: 4rem;\n  color: white;\n  flex: 1;\n  max-width: 500px;\n"]);return M=function(){return e},e}var G=m.a.div(M());function N(){var e=Object(u.a)(["\n  font-size: 4rem;\n  padding: 5% 0 5% 0;\n"]);return N=function(){return e},e}var C=m.a.div(N());function D(e){return Object(a.useEffect)((function(){}),[e.score]),r.a.createElement(C,null,"Score: ",e.score)}function L(){var e=Object(u.a)(["\n  font-size: 5rem;\n  font-weight: 300;\n"]);return L=function(){return e},e}var P=m.a.div(L());function W(e){var n,t=Object(a.useState)(0),o=Object(x.a)(t,2),c=o[0],i=o[1],l=e.timeLimit;return Object(a.useEffect)((function(){return function(){var t=(new Date).getTime()+1e3*l;n=setInterval((function(){var a=(new Date).getTime(),r=t-a,o=Math.floor(r%864e5/1e3);r<0?(e.timeIsUp(),clearInterval(n)):(console.log(o),i(o))}),1e3)}(),function(){console.log("CLEARED!"),clearInterval(n)}}),[]),r.a.createElement(P,null,r.a.createElement("b",null,c),"s remaining")}var A=function(e){for(var n=[],t=e,a=3;a<=t;a++){for(var r=0,o=1;o<=a;o++)a%o===0&&r++;2===r&&n.push(a)}return n}(1e3),R=function(){return A[Math.floor(Math.random()*A.length)]};var T=function(e){var n=Object(a.useState)(32),t=Object(x.a)(n,1)[0],o=Object(a.useState)(!1),c=Object(x.a)(o,2),i=c[0],l=c[1],u=Object(a.useState)(R()),m=Object(x.a)(u,2),s=m[0],f=m[1],g=Object(a.useState)(s),v=Object(x.a)(g,2),p=v[0],d=v[1],h=Object(a.useState)(!1),b=Object(x.a)(h,2),E=b[0],O=b[1],k=Object(a.useState)(0),w=Object(x.a)(k,2),I=w[0],M=w[1];function N(n){localStorage.setItem("score",I),localStorage.setItem("gameOverReason",n),e.history.push("/mykees-prime-game/game-over")}return Object(a.useEffect)((function(){i&&N("Time ran out!"),Math.floor(2*Math.random())?(d(s+1),O(!1)):(d(s),O(!0))})),r.a.createElement(j,null,r.a.createElement(D,{score:I}),r.a.createElement(W,{timeIsUp:function(){l(!0)},timeLimit:t}),r.a.createElement(y,null,"is ",r.a.createElement("b",null,p)," prime?"),r.a.createElement(S,null,r.a.createElement(z,{onClick:function(){E||N("".concat(s+1," is not prime!")),M(I+1),localStorage.setItem("score",I),f(R())}},"Yes"),r.a.createElement(G,{onClick:function(){E&&N("".concat(s," is prime!")),M(I+1),localStorage.setItem("score",I),f(R())}},"No")))};function B(){var e=Object(u.a)(["\n  height: 100vh;\n  background-color: #000;\n  color: rgb(255, 102, 102);\n  text-align: center;\n\n  h1 {\n    font-size: 8rem;\n    font-weight: 400;\n    padding: 50px 0;\n  }\n\n  p {\n    font-size: 4rem;\n    padding: 30px 0;\n    font-weight: 300;\n  }\n"]);return B=function(){return e},e}var J=m.a.div(B());function U(){var e=Object(u.a)(["\n  margin-top: 60px;\n"]);return U=function(){return e},e}var Y=Object(m.a)(d)(U());var $=[{path:"/mykees-prime-game",name:"LandingPage",component:E,exact:!0},{path:"/mykees-prime-game/game",name:"GamePage",component:T,exact:!0},{path:"/mykees-prime-game/game-over",name:"GameOverPage",component:function(){var e=Object(a.useState)("Gods of Math said no!"),n=Object(x.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(0),i=Object(x.a)(c,2),u=i[0],m=i[1];return Object(a.useEffect)((function(){return function(){var e=localStorage.getItem("score");m(e)}(),function(){var e=localStorage.getItem("gameOverReason");o(e)}(),function(){localStorage.clear()}}),[]),r.a.createElement(J,null,r.a.createElement("h1",null,"Game Over"),r.a.createElement("p",null,t),r.a.createElement("p",null,"You got ",u," right!"),r.a.createElement(Y,null,r.a.createElement(l.b,{to:"/mykees-prime-game/game"},"Start Again")))},exact:!0},{path:"*",component:function(){return r.a.createElement("div",{style:{width:"100%",height:"70vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",null,r.a.createElement("h2",{style:{fontSize:"3rem",fontWeight:"300"}},"I think you've taken a wrong turn somewhere!")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("a",{style:{fontSize:"1.6rem",color:"lightblue",textDecoration:"none"},href:"/mykees-prime-game/"},"Click here to get to safety")))}}];function q(e){return r.a.createElement(i.a,{path:e.path,render:function(n){return r.a.createElement(e.component,Object.assign({},n,{routes:e.routes}))}})}var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("main",null,r.a.createElement(i.c,null,$.map((function(e,n){return r.a.createElement(q,Object.assign({key:n},e))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.4ce0ea24.chunk.js.map