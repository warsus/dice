(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),i=a.n(r),s=(a(15),a(4)),c=a(5),l=a(7),h=a(6),u=a(8),d=a(1);a(16);var m=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={sides:6,roll:1},a.roll=a.roll.bind(Object(d.a)(Object(d.a)(a))),a.changeSides=a.changeSides.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"roll",value:function(){var e;this.setState({roll:(e=this.state.sides,Math.floor(Math.random()*Math.floor(e))+1)})}},{key:"changeSides",value:function(e){this.setState({sides:parseInt(e.target.value)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"result"},this.state.roll),o.a.createElement("button",{onClick:this.roll},"Roll"),o.a.createElement("input",{type:"number",onChange:this.changeSides,value:this.state.sides})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.3c0d5431.chunk.js.map