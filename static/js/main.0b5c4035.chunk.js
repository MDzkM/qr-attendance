(this["webpackJsonpqr-attendance"]=this["webpackJsonpqr-attendance"]||[]).push([[0],{24:function(e,t,a){"use strict";(function(e){var n=a(25),r=a(26),l=a(27),o=a(30),i=a(29),c=a(0),s=a.n(c),m=(a(41),a(28)),u=a.n(m),h=a(5),d=function(t){Object(o.a)(c,t);var a=Object(i.a)(c);function c(e){var t;return Object(r.a)(this,c),(t=a.call(this,e)).state={name:"",email:"",token:"",generated:!1},t}return Object(l.a)(c,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,r=t.name;this.setState(Object(n.a)({},r,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.token,n=t.name,r=t.email;""!==a&&""!==n&&""!==r&&this.setState({generated:!0})}},{key:"generateQRCode",value:function(){var t=this.state,a=t.token,n=t.name,r=t.email,l=e.from(a+n+r).toString("base64");return s.a.createElement("div",{style:{backgroundColor:"white",marginTop:"50px",padding:"10px 10px 0 10px"}},s.a.createElement(u.a,{value:"https://mdzkm.github.io/qr-attendance?key=".concat(l)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.token,n=t.name,r=t.email,l=t.generated;return s.a.createElement("div",{className:"App App-header"},s.a.createElement(h.Row,null,s.a.createElement(h.Col,{m:12,s:12},s.a.createElement(h.CardPanel,{className:"teal",style:{fontSize:"18px"}},s.a.createElement("span",{className:"white-text"},"Enter your token, name, and email in the input boxes below to unlock today's attendance QR code!")))),s.a.createElement(h.TextInput,{label:"Token",name:"token",password:!0,className:"white-text",value:a,style:{minWidth:"25vw"},onChange:function(t){return e.handleInputChange(t)}}),s.a.createElement(h.TextInput,{label:"Name",name:"name",className:"white-text",value:n,style:{minWidth:"25vw"},onChange:function(t){return e.handleInputChange(t)}}),s.a.createElement(h.TextInput,{email:!0,name:"email",error:"Enter a valid email address!",label:"Email",validate:!0,className:"white-text",value:r,style:{minWidth:"25vw"},onChange:function(t){return e.handleInputChange(t)}}),s.a.createElement(h.Button,{node:"button",type:"submit",waves:"light",style:{marginTop:"10px"},onClick:function(t){return e.handleSubmit(t)}},"Generate",s.a.createElement(h.Icon,{right:!0},"image")),l?this.generateQRCode():s.a.createElement(s.a.Fragment,null))}}]),c}(c.Component);t.a=d}).call(this,a(37).Buffer)},31:function(e,t,a){e.exports=a(91)},36:function(e,t,a){},41:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),i=(a(36),a(24));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(90);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.0b5c4035.chunk.js.map