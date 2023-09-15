"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[67],{209:function(t,e,n){var r=n(184);e.Z=function(t){var e=t.children;return(0,r.jsx)("b",{children:e})}},906:function(t,e,n){var r=n(689),a=n(87),u=n(184);e.Z=function(t){var e=t.movies,n=t.path,c=void 0===n?"":n,i=(0,r.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"".concat(c).concat(e),state:{from:i},children:n})},e)}))})}},67:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),s=n(87),o=n(207),p=n(184);var f=function(t){var e=t.onSubmit,n=t.isLoading,r=(0,i.useState)(""),u=(0,a.Z)(r,2),c=u[0],s=u[1];return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c?(e(c),s("")):alert("Enter something!")},children:[(0,p.jsx)("input",{name:"query",type:"text",value:c,onChange:function(t){return s(t.target.value)},placeholder:"Search movies",autoComplete:"off",autoFocus:!0}),(0,p.jsx)("button",{type:"submit",disabled:n,children:"Search"})]})})},l=n(906),h=n(209);function d(){var t,e=(0,i.useState)([]),n=(0,a.Z)(e,2),u=n[0],d=n[1],v=(0,i.useState)(!1),m=(0,a.Z)(v,2),x=m[0],g=m[1],b=(0,i.useState)(!1),y=(0,a.Z)(b,2),Z=y[0],w=y[1],k=(0,s.lr)(),j=(0,a.Z)(k,2),S=j[0],_=j[1],C=null!==(t=S.get("query"))&&void 0!==t?t:"";return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(!0),n=e.toLowerCase().trim(),t.next=5,o.XT(n);case 5:if((r=t.sent).length||!n){t.next=9;break}return alert("No movies found"),t.abrupt("return");case 9:d(r),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),w(!0);case 15:return t.prev=15,g(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})));return function(e){return t.apply(this,arguments)}}();C&&t(C)}),[C]),(0,p.jsxs)("div",{children:[(0,p.jsx)(f,{onSubmit:function(t){t!==C?(_(t?{query:t}:{}),d([]),w(!1)):alert("You already searching ".concat(t))},value:C,isLoading:x}),u.length>0&&(0,p.jsx)(l.Z,{movies:u}),x&&(0,p.jsx)("p",{children:"Loading..."}),Z&&(0,p.jsx)(h.Z,{children:"Oops, something went wrong...Try again later!"})]})}},207:function(t,e,n){n.d(e,{Df:function(){return s},M1:function(){return d},TP:function(){return l},XT:function(){return p},tx:function(){return m}});var r=n(861),a=n(757),u=n.n(a),c=n(243),i={params:{api_key:"5c432334b8202e077ccc8c7b5fc7d7ab",language:"en-US"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day",i);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(e,"&include_adult=false&page=1"),i);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e),i);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits"),i);case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?page=1"),i);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=67.f07a32b8.chunk.js.map