(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3778:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var r=n(2962),i=n(7294),o=n(2777),s=n(9499),c={sectors:[{text:"100%",color:"#7deda5"},{text:"200%",color:"#e17ded"},{text:"10%",color:"#7d95ed"},{text:"50%",color:"#e0e94b"},{text:"70%",color:"#ed1d8d"},{text:"300%",color:"#7dada5"},{text:"800%",color:"#e10ded"},{text:"40%",color:"#7d15ed"},{text:"0%",color:"#e8e94b"}]};function a(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}var d=function t(e){var n=this;(0,o.Z)(this,t),(0,s.Z)(this,"config",c),(0,s.Z)(this,"container",void 0),(0,s.Z)(this,"svg",void 0),(0,s.Z)(this,"wheel",void 0),(0,s.Z)(this,"marker",void 0),(0,s.Z)(this,"spinning",!1),(0,s.Z)(this,"spinningTime",12),(0,s.Z)(this,"createWheel",(function(){var t=a("g");Object.assign(t.style,{cursor:"pointer",transformBox:"fill-box",transformOrigin:"50% 50%"});var e=2*n.config.sectors.length;return n.svg.appendChild(t),n.config.sectors.forEach((function(r,i){n.drSegment(t,"fill:".concat(r.color,"; stroke:black; stroke-width:1;"),2*i/e,(2*i+2)/e,r.text,n.config.sectors.length,i)})),t.addEventListener("click",n.onStart),t})),(0,s.Z)(this,"createMarker",(function(){var t=a("polygon");return t.setAttribute("points","340,".concat(5," 360,").concat(5," 350,").concat(45)),Object.assign(t.style,{fill:"brown"}),n.svg.appendChild(t),t})),(0,s.Z)(this,"createSvg",(function(){var t=a("svg");return t.setAttributeNS(null,"viewBox","0 0 700 700"),t.setAttributeNS(null,"width","100%"),n.container.appendChild(t),t})),(0,s.Z)(this,"drSegment",(function(t,e,n,r,i,o,s){var c=2*Math.PI*n,d=2*Math.PI*r,h=360/o,l=h*s+h/2,u=300,f=Math.sin(c)*u+350,g=-Math.cos(c)*u+350,v=Math.sin(d)*u+350,p=-Math.cos(d)*u+350,m=a("path");m.setAttribute("style",e),m.setAttribute("d"," M "+f+","+g+" A "+"300,"+"300 0 0 1 "+v+","+p+" L 350,350 Z"),t.appendChild(m);var b=a("text");b.innerHTML=i,b.setAttribute("x","350"),b.setAttribute("y","80"),Object.assign(b.style,{transform:"rotate(".concat(l,"deg)"),transformOrigin:"50% 50%",textAnchor:"middle"}),t.appendChild(b)})),(0,s.Z)(this,"onStart",(function(){var t=n.wheel;if(!n.spinning){n.spinning=!0;var e=n.spinningTime-2*Math.random(),r=Math.floor(Math.random()*n.config.sectors.length),i=360/n.config.sectors.length,o=-1*(i*r+i/2),s=3*n.config.sectors.length*360+o;t.style.transition="transform ".concat(e,"s cubic-bezier(0.2, 0.1, 0.2, 1)"),t.style.transform="rotate(".concat(s,"deg)"),t.addEventListener("transitionend",(function(){n.spinning=!1,t.attributeStyleMap.delete("transition"),t.style.transform="rotate(".concat(o,"deg)")}),{once:!0})}}));var r=document.querySelector(e);if(!r||!(r instanceof HTMLDivElement))throw new Error("Can not get container");this.container=r,this.container.innerHTML="",this.container.classList.add("spinner-container"),this.svg=this.createSvg(),this.wheel=this.createWheel(),this.marker=this.createMarker()},h=n(5893),l="spinner-container",u=function(){return(0,i.useEffect)((function(){try{new d("#".concat(l))}catch(t){console.error(t)}}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.PB,{title:"Spinner",description:""}),(0,h.jsx)("div",{id:l})]})};u.getInitialProps=function(){return{statusCode:200}};var f=u},8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3778)}])}},function(t){t.O(0,[774,888,179],(function(){return e=8312,t(t.s=e);var e}));var e=t.O();_N_E=e}]);