(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],[,,,,,,,function(t,e,o){t.exports=o(15)},,,,,function(t,e,o){},function(t,e,o){t.exports=o.p+"static/media/logo.5d5d9eef.svg"},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),a=o(2),u=o.n(a),c=(o(12),o(3)),s=o(4),i=o(6),l=o(5),h=(o(13),o(14),function(t){Object(i.a)(o,t);var e=Object(l.a)(o);function o(t){var n;return Object(c.a)(this,o),(n=e.call(this,t)).randomQuote=function(){console.log("we'regenetaring a random quote"),n.colorGenerator(),n.setState({currentQuote:n.state.quotes[Math.floor(Math.random()*n.state.quotes.length)]})},n.getQuotes=function(){fetch("quotes.json").then((function(t){return t.json()})).then((function(t){console.log(t),n.setState({quotes:t})})).then(n.randomQuote)},n.colorGenerator=function(){var t="#DBFE87, #DBFE87, #788475, #BBBDF6, #B2FF9E, #1DD3B0, #1DD3B0, #C59849, #9DC7C8, #BEEF9E, #EBF38B, #75ABBC, #A2AEBB, #E0B0D5, #E7E5E5";t=t.split(","),console.log(t);var e=Math.floor(Math.random()*t.length);console.log(e),n.setState({color:t[e]})},n.state={quotes:{},currentQuote:{},color:"gray"},n}return Object(s.a)(o,[{key:"componentDidMount",value:function(){document.getElementById("new-quote").focus(),this.getQuotes()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:{backgroundColor:this.state.color}},r.a.createElement("div",{id:"quote-box"},r.a.createElement("div",{id:"text-group"},r.a.createElement("div",{id:"text"},this.state.currentQuote.quoteText),r.a.createElement("div",{id:"author"},this.state.currentQuote.quoteAuthor)),r.a.createElement("div",{id:"button-group"},r.a.createElement("button",{id:"new-quote",onClick:this.randomQuote,onKeyPress:this.handleKeyPress},"New Quote"),r.a.createElement("a",{href:"https://twitter.com/intent/tweet?text="+this.state.currentQuote.quoteText+" - "+this.state.currentQuote.quoteAuthor,id:"tweet-quote",alt:"Tweet this Quote"},"Tweet this Quote"))))}}]),o}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.beb6b458.chunk.js.map