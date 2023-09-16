"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[946],{7047:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,i=e(7689),c=e(168),u=e(7884),s=e(1087),o=u.ZP.ul(r||(r=(0,c.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),p=(0,u.ZP)(s.rU)(a||(a=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n  color: inherit;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.14;\n  letter-spacing: 0.03em;\n\n  &:hover,\n  &:focus {\n    color: rgba(0, 209, 255, 1);\n  }\n\n  svg {\n    fill: rgba(0, 209, 255, 1);\n  }\n\n  transition: all 250ms linear;\n\n  /* padding-left: 28px; */\n  /* &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    width: 20px;\n    height: 20px;\n    color: tomato;\n    background-color: tomato;\n  } */\n"]))),f=e(2134),l=e(184);var h=function(n){var t=n.movies,e=n.path,r=void 0===e?"":e,a=(0,i.TH)();return(0,l.jsx)(o,{children:t.map((function(n){var t=n.id,e=n.title;return(0,l.jsx)("li",{children:(0,l.jsxs)(p,{to:"".concat(r).concat(t),state:{from:a},children:[(0,l.jsx)(f.sT9,{size:20}),(0,l.jsx)("span",{children:e})]})},t)}))})}},6946:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a=e(5861),i=e(9439),c=e(7757),u=e.n(c),s=e(2791),o=e(1207),p=e(7047),f=e(653),l=e(168),h=e(7884).ZP.div(r||(r=(0,l.Z)(["\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n"]))),d=e(184);function v(){var n=(0,s.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],c=(0,s.useState)(!1),l=(0,i.Z)(c,2),v=l[0],x=l[1],g=(0,s.useState)(!1),m=(0,i.Z)(g,2),Z=m[0],w=m[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,o.Df();case 4:t=n.sent,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),w(!0);case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,d.jsxs)(h,{children:[(0,d.jsx)("h1",{children:"Trending today"}),v&&(0,d.jsx)(f.Z,{}),Z&&(0,d.jsx)("p",{children:"Oops, something went wrong...Try again later!"}),e.length>0&&(0,d.jsx)(p.Z,{movies:e,path:"movies/"})]})}},1207:function(n,t,e){e.d(t,{Df:function(){return s},M1:function(){return d},TP:function(){return l},XT:function(){return p},tx:function(){return x}});var r=e(5861),a=e(7757),i=e.n(a),c=e(1243),u={params:{api_key:"5c432334b8202e077ccc8c7b5fc7d7ab",language:"en-US"}};function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day",u);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t,"&include_adult=false&page=1"),u);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t),u);case 2:return e=n.sent,console.log(e.data),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits"),u);case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?page=1"),u);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=946.9e6cfb51.chunk.js.map