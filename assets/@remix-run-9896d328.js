/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}var y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(y||(y={}));const L="popstate";function se(e){e===void 0&&(e={});function t(a,r){let{pathname:i,search:l,hash:s}=a.location;return I("",{pathname:i,search:l,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:j(r)}return k(t,n,null,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function W(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function V(){return Math.random().toString(36).substr(2,8)}function U(e,t){return{usr:e.state,key:e.key,idx:t}}function I(e,t,n,a){return n===void 0&&(n=null),w({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?P(t):t,{state:n,key:t&&t.key||a||V()})}function j(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function P(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function k(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:i=!1}=a,l=r.history,s=y.Pop,o=null,h=u();h==null&&(h=0,l.replaceState(w({},l.state,{idx:h}),""));function u(){return(l.state||{idx:null}).idx}function d(){s=y.Pop;let c=u(),f=c==null?null:c-h;h=c,o&&o({action:s,location:m.location,delta:f})}function g(c,f){s=y.Push;let p=I(m.location,c,f);n&&n(p,c),h=u()+1;let R=U(p,h),x=m.createHref(p);try{l.pushState(R,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;r.location.assign(x)}i&&o&&o({action:s,location:m.location,delta:1})}function H(c,f){s=y.Replace;let p=I(m.location,c,f);n&&n(p,c),h=u();let R=U(p,h),x=m.createHref(p);l.replaceState(R,"",x),i&&o&&o({action:s,location:m.location,delta:0})}function b(c){let f=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof c=="string"?c:j(c);return v(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let m={get action(){return s},get location(){return e(r,l)},listen(c){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(L,d),o=c,()=>{r.removeEventListener(L,d),o=null}},createHref(c){return t(r,c)},createURL:b,encodeLocation(c){let f=b(c);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:H,go(c){return l.go(c)}};return m}var B;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(B||(B={}));function oe(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?P(t):t,r=ee(a.pathname||"/",n);if(r==null)return null;let i=C(e);A(i);let l=null;for(let s=0;l==null&&s<i.length;++s)l=F(i[s],Y(r));return l}function C(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let r=(i,l,s)=>{let o={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};o.relativePath.startsWith("/")&&(v(o.relativePath.startsWith(a),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(a.length));let h=S([a,o.relativePath]),u=n.concat(o);i.children&&i.children.length>0&&(v(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),C(i.children,t,u,h)),!(i.path==null&&!i.index)&&t.push({path:h,score:J(h,i.index),routesMeta:u})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))r(i,l);else for(let o of M(i.path))r(i,l,o)}),t}function M(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(a.length===0)return r?[i,""]:[i];let l=M(a.join("/")),s=[];return s.push(...l.map(o=>o===""?i:[i,o].join("/"))),r&&s.push(...l),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function A(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const D=/^:\w+$/,z=3,_=2,q=1,N=10,G=-2,O=e=>e==="*";function J(e,t){let n=e.split("/"),a=n.length;return n.some(O)&&(a+=G),t&&(a+=_),n.filter(r=>!O(r)).reduce((r,i)=>r+(D.test(i)?z:i===""?q:N),a)}function K(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function F(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let l=0;l<n.length;++l){let s=n[l],o=l===n.length-1,h=r==="/"?t:t.slice(r.length)||"/",u=Q({path:s.relativePath,caseSensitive:s.caseSensitive,end:o},h);if(!u)return null;Object.assign(a,u.params);let d=s.route;i.push({params:a,pathname:S([r,u.pathname]),pathnameBase:re(S([r,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(r=S([r,u.pathnameBase]))}return i}function Q(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=X(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:a.reduce((h,u,d)=>{if(u==="*"){let g=s[d]||"";l=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return h[u]=Z(s[d]||"",u),h},{}),pathname:i,pathnameBase:l,pattern:e}}function X(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),W(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(a.push(s),"/([^\\/]+)"));return e.endsWith("*")?(a.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function Y(e){try{return decodeURI(e)}catch(t){return W(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Z(e,t){try{return decodeURIComponent(e)}catch(n){return W(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ee(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function te(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?P(e):e;return{pathname:n?n.startsWith("/")?n:ne(n,t):t,search:ae(a),hash:ie(r)}}function ne(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function $(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ce(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function he(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=P(e):(r=w({},e),v(!r.pathname||!r.pathname.includes("?"),$("?","pathname","search",r)),v(!r.pathname||!r.pathname.includes("#"),$("#","pathname","hash",r)),v(!r.search||!r.search.includes("#"),$("#","search","hash",r)));let i=e===""||r.pathname==="",l=i?"/":r.pathname,s;if(a||l==null)s=n;else{let d=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;r.pathname=g.join("/")}s=d>=0?t[d]:"/"}let o=te(r,s),h=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(h||u)&&(o.pathname+="/"),o}const S=e=>e.join("/").replace(/\/\/+/g,"/"),re=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ae=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ie=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ue(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const T=["post","put","patch","delete"];new Set(T);const le=["get",...T];new Set(le);export{y as A,ue as a,se as c,ce as g,v as i,S as j,oe as m,P as p,he as r,ee as s};