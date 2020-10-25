(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),s=n(2),i=n.n(s),c=n(5),u=n(1),l=n(14),d=n(15),m=(n(26),n(3)),h=n(4),p=n(7),g=n(6),b=["light-purple","gold","hot-pink","orange"],E=function(e){var t,n=e.idx,a=e.id,r=e.name,s=e.getSomething,i="f6 link ma1 dim br3 ph3 pv2 mb2 dib white shadow-3 bg-".concat(b[n]?b[n]:"hot-pink");return o.a.createElement("a",{href:"#0",className:i,onClick:(t=a,function(){return s(t)})},r)},f=function(e){var t=e.buttons,n=e.onClick;return o.a.createElement("div",{className:"tc bg-washed-yellow br3 pa3 ma2 bw2 shadow-5"},t.map((function(e,t){return o.a.createElement(E,{key:t,idx:t,name:e.name,id:e.id,getSomething:n})})))},v=function(e){var t=e.text,n=e.name,a="bubble chat-box br4 pa3 bg-white shadow-3";return e.isWaiting?function(){var e=document.querySelector(".bubble");e&&e.classList.add("scale-out-center")}():function(){var e=document.querySelector(".bubble");e&&(e.classList.remove("scale-up-center"),e.classList.remove("scale-out-center"),e.offsetWidth,e.classList.add("scale-up-center"))}(),t?o.a.createElement("div",{className:a},o.a.createElement("p",null,t)):o.a.createElement("div",{className:a},o.a.createElement("p",null,"Hi stranger!",o.a.createElement("br",null),"My name is ",o.a.createElement("strong",null,n)," and I'm honored to be your host today.",o.a.createElement("br",null)," How can I entertain you ?"))},O=function(e){var t=e.id;return o.a.createElement("div",{className:"tc"},o.a.createElement("img",{alt:"avatar",src:"https://robohash.org/".concat(t,"?size=200x200")}),o.a.createElement("div",{className:"bar-top"},o.a.createElement("div",{className:"beer"})))},y=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),n}(r.Component),S=(n(27),"joke"),w="quote",j="facts",R="cats",T=[{id:S,name:"Joke"},{id:w,name:"Programming"},{id:j,name:"Fact"},{id:R,name:"Meow"}],_=function(e){return function(t){console.log("dbg request wisdom",e),t({type:"REQUEST_TOPIC_PENDING"}),fetch(function(e){switch(console.log("dbg get uri for topic",e),e){case S:return"https://sv443.net/jokeapi/v2/joke/Any";case w:return"https://programming-quotes-api.herokuapp.com/quotes/random";case j:return"https://uselessfacts.jsph.pl/random.json?language=en";case R:return"https://meowfacts.herokuapp.com/";default:return""}}(e)).then((function(e){return e.json()})).then((function(t){return function(e,t){switch(console.log("dbg data to wisdom",e,t),e){case S:return"single"===t.type?t.joke:t.setup+" "+t.delivery;case w:return t.en+" - "+t.author;case j:return t.text;case R:return t.data[0];default:return""}}(e,t)})).then((function(e){console.log("dbg after convert",e),t({type:"REQUEST_TOPIC_SUCCESS",payload:e})})).catch((function(e){return t({type:"REQUEST_TOPIC_FAILED",payload:e})}))}},k=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){console.log("render app, props:",this.props);var e=this.props,t=e.robots,n=e.isPending,r=e.onRequestWisdom,s=e.wisdom,i=e.isWaiting;return t.length&&!a&&(a=t[Math.floor(Math.random()*t.length)]),n||!a?o.a.createElement("h1",{className:"tc"},"Loading..."):o.a.createElement("div",{className:"tc "},o.a.createElement("h1",{className:"f1"},"API-bar"),o.a.createElement("div",{className:"tc bg-light-green br3 pa3 ma2 bw2 shadow-5"},o.a.createElement(y,null,o.a.createElement(v,{text:s,name:a.name,isWaiting:i}),o.a.createElement(O,{id:a.id}))),o.a.createElement(f,{buttons:T,onClick:r}))}}]),n}(o.a.Component),C=Object(c.b)((function(e){return console.log("dbg mapStateToProps",e),{robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error,wisdom:e.requestWisdom.wisdom,isWaiting:e.requestWisdom.isWaiting}}),(function(e){return{onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))},onRequestWisdom:function(t){return e(_(t))}}}))(k);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P={isPending:!1,robots:[],error:""},N={isWaiting:!1,wisdom:"",error:""},I=(n(28),Object(l.createLogger)()),q=Object(u.c)({requestWisdom:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_TOPIC_PENDING":return Object.assign({},e,{isWaiting:!0});case"REQUEST_TOPIC_SUCCESS":return Object.assign({},e,{wisdom:t.payload,isWaiting:!1});case"REQUEST_TOPIC_FAILED":return Object.assign({},e,{error:t.payload,isWaiting:!1});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),W=Object(u.d)(q,Object(u.a)(d.a,I));i.a.render(o.a.createElement(c.a,{store:W},o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.32b081a1.chunk.js.map