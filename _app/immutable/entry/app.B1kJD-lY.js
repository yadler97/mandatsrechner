const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.JP8z43cg.js","../chunks/scheduler.dHZNQyIW.js","../chunks/index.BrxJHLNJ.js","../chunks/entry.ChbiTmtu.js","../chunks/stores.B1yb9IQC.js","../assets/0.C7i_L0Vl.css","../nodes/1.YsqjJQ4E.js","../nodes/2.DHTH0_cu.js","../nodes/3.CZzGDCm4.js","../chunks/ElectionCharts.Uml18nam.js","../nodes/4.1xjOf7Rv.js","../nodes/5.DcWJBchG.js","../nodes/6.BTcDhxbV.js","../nodes/7.CSGJP8mq.js"])))=>i.map(i=>d[i]);
import{s as N,b as B,o as U,d as I,t as j}from"../chunks/scheduler.dHZNQyIW.js";import{S as W,i as z,s as F,r as p,f as G,g as v,p as w,u as V,o as g,d as b,e as H,c as J,a as K,v as O,w as d,t as Q,b as X,j as Y,x as D,y as P,l as R,m as S,n as L,q as A}from"../chunks/index.BrxJHLNJ.js";const Z="modulepreload",M=function(o,e){return new URL(o,e).href},T={},h=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(n.map(f=>{if(f=M(f,r),f in T)return;T[f]=!0;const a=f.endsWith(".css"),_=a?'[rel="stylesheet"]':"";if(!!r)for(let k=t.length-1;k>=0;k--){const y=t[k];if(y.href===f&&(!a||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${_}`))return;const m=document.createElement("link");if(m.rel=a?"stylesheet":Z,a||(m.as="script"),m.crossOrigin="",m.href=f,l&&m.setAttribute("nonce",l),document.head.appendChild(m),a)return new Promise((k,y)=>{m.addEventListener("load",k),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${f}`)))})}))}function u(t){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t}return s.then(t=>{for(const i of t||[])i.status==="rejected"&&u(i.reason);return e().catch(u)})},se={};function $(o){let e,n,r;var s=o[1][0];function u(t,i){return{props:{data:t[3],form:t[2]}}}return s&&(e=P(s,u(o)),o[12](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&S(e.$$.fragment,t),n=p()},m(t,i){e&&L(e,t,i),v(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){D();const l=e;w(l.$$.fragment,1,0,()=>{A(l,1)}),V()}s?(e=P(s,u(t)),t[12](e),R(e.$$.fragment),g(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&w(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[12](null),e&&A(e,t)}}}function x(o){let e,n,r;var s=o[1][0];function u(t,i){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=P(s,u(o)),o[11](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&S(e.$$.fragment,t),n=p()},m(t,i){e&&L(e,t,i),v(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){D();const l=e;w(l.$$.fragment,1,0,()=>{A(l,1)}),V()}s?(e=P(s,u(t)),t[11](e),R(e.$$.fragment),g(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&8215&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&w(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[11](null),e&&A(e,t)}}}function ee(o){let e,n,r;var s=o[1][1];function u(t,i){return{props:{data:t[4],form:t[2]}}}return s&&(e=P(s,u(o)),o[10](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&S(e.$$.fragment,t),n=p()},m(t,i){e&&L(e,t,i),v(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][1])){if(e){D();const l=e;w(l.$$.fragment,1,0,()=>{A(l,1)}),V()}s?(e=P(s,u(t)),t[10](e),R(e.$$.fragment),g(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&16&&(l.data=t[4]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&g(e.$$.fragment,t),r=!0)},o(t){e&&w(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[10](null),e&&A(e,t)}}}function q(o){let e,n=o[6]&&C(o);return{c(){e=H("div"),n&&n.c(),this.h()},l(r){e=J(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(b),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(r,s){v(r,e,s),n&&n.m(e,null)},p(r,s){r[6]?n?n.p(r,s):(n=C(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&b(e),n&&n.d()}}}function C(o){let e;return{c(){e=Q(o[7])},l(n){e=X(n,o[7])},m(n,r){v(n,e,r)},p(n,r){r&128&&Y(e,n[7])},d(n){n&&b(e)}}}function te(o){let e,n,r,s,u;const t=[x,$],i=[];function l(a,_){return a[1][1]?0:1}e=l(o),n=i[e]=t[e](o);let f=o[5]&&q(o);return{c(){n.c(),r=F(),f&&f.c(),s=p()},l(a){n.l(a),r=G(a),f&&f.l(a),s=p()},m(a,_){i[e].m(a,_),v(a,r,_),f&&f.m(a,_),v(a,s,_),u=!0},p(a,[_]){let E=e;e=l(a),e===E?i[e].p(a,_):(D(),w(i[E],1,1,()=>{i[E]=null}),V(),n=i[e],n?n.p(a,_):(n=i[e]=t[e](a),n.c()),g(n,1),n.m(r.parentNode,r)),a[5]?f?f.p(a,_):(f=q(a),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(a){u||(g(n),u=!0)},o(a){w(n),u=!1},d(a){a&&(b(r),b(s)),i[e].d(a),f&&f.d(a)}}}function ne(o,e,n){let{stores:r}=e,{page:s}=e,{constructors:u}=e,{components:t=[]}=e,{form:i}=e,{data_0:l=null}=e,{data_1:f=null}=e;B(r.page.notify);let a=!1,_=!1,E=null;U(()=>{const c=r.page.subscribe(()=>{a&&(n(6,_=!0),j().then(()=>{n(7,E=document.title||"untitled page")}))});return n(5,a=!0),c});function m(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function k(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function y(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return o.$$set=c=>{"stores"in c&&n(8,r=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,u=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,i=c.form),"data_0"in c&&n(3,l=c.data_0),"data_1"in c&&n(4,f=c.data_1)},o.$$.update=()=>{o.$$.dirty&768&&r.page.set(s)},[t,u,i,l,f,a,_,E,r,s,m,k,y]}class oe extends W{constructor(e){super(),z(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>h(()=>import("../nodes/0.JP8z43cg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>h(()=>import("../nodes/1.YsqjJQ4E.js"),__vite__mapDeps([6,1,2,4,3]),import.meta.url),()=>h(()=>import("../nodes/2.DHTH0_cu.js"),__vite__mapDeps([7,1,2]),import.meta.url),()=>h(()=>import("../nodes/3.CZzGDCm4.js"),__vite__mapDeps([8,1,2,9]),import.meta.url),()=>h(()=>import("../nodes/4.1xjOf7Rv.js"),__vite__mapDeps([10,1,2,9]),import.meta.url),()=>h(()=>import("../nodes/5.DcWJBchG.js"),__vite__mapDeps([11,1,2,9]),import.meta.url),()=>h(()=>import("../nodes/6.BTcDhxbV.js"),__vite__mapDeps([12,1,2,9]),import.meta.url),()=>h(()=>import("../nodes/7.CSGJP8mq.js"),__vite__mapDeps([13,1,2,9]),import.meta.url)],le=[],fe={"/":[2],"/bundestagswahl2025":[3],"/europawahl2024":[4],"/landtagswahlSteiermark2024":[5],"/landtagswahlVorarlberg2024":[6],"/nationalratswahl2024":[7]},ce={handleError:({error:o})=>{console.error(o)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};