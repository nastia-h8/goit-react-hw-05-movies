"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{906:function(t,n,e){var r=e(689),a=e(87),u=e(184);n.Z=function(t){var n=t.movies,e=t.path,c=void 0===e?"":e,s=(0,r.TH)();return(0,u.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"".concat(c).concat(n),state:{from:s},children:e})},n)}))})}},415:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(861),a=e(439),u=e(757),c=e.n(u),s=e(791),i=e(207),o=e(906),p=e(184);function f(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),e=n[0],u=n[1],f=(0,s.useState)(!1),h=(0,a.Z)(f,2),l=h[0],d=h[1],v=(0,s.useState)(!1),m=(0,a.Z)(v,2),x=m[0],w=m[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,i.Df();case 4:n=t.sent,u(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&w(!0);case 11:return t.prev=11,d(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){}}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),l&&(0,p.jsx)("p",{children:"Loading..."}),x&&(0,p.jsx)("p",{children:"Oops, something went wrong...Try again later!"}),e.length>0&&(0,p.jsx)(o.Z,{movies:e,path:"movies/"})]})}},207:function(t,n,e){e.d(n,{Df:function(){return i},M1:function(){return d},TP:function(){return h},XT:function(){return p},tx:function(){return m}});var r=e(861),a=e(757),u=e.n(a),c=e(243),s={params:{api_key:"5c432334b8202e077ccc8c7b5fc7d7ab",language:"en-US"}};function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day",s);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(n,"&include_adult=false&page=1"),s);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n),s);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits"),s);case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews?page=1"),s);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=415.bc8b9bec.chunk.js.map