import{S as q,i as O,s as B,k as d,a as N,q as T,l as b,m as k,c as y,r as I,h as c,n as g,J as D,b as A,G as h,K as P,H as R,o as F,L as K,M as U,u as S}from"../chunks/index.17e43df8.js";import{G as V,R as $}from"../chunks/App.322c57dd.js";import{C as J,F as W,T as j}from"../chunks/store.9597556e.js";import{g as z}from"../chunks/navigation.55574aa1.js";const Q=""+new URL("../assets/logo-universal.157a874a.png",import.meta.url).href;function H(i,e,o){const r=i.slice();return r[3]=e[o],r}function X(i){let e,o,r,u,n,t,l;return{c(){e=d("p"),o=T("No Accounts available..."),r=N(),u=d("br"),n=N(),t=d("a"),l=T("Create one!"),this.h()},l(a){e=b(a,"P",{});var s=k(e);o=I(s,"No Accounts available..."),s.forEach(c),r=y(a),u=b(a,"BR",{}),n=y(a),t=b(a,"A",{href:!0,class:!0});var f=k(t);l=I(f,"Create one!"),f.forEach(c),this.h()},h(){g(t,"href","/newAccount"),g(t,"class","create-button red-button svelte-2relrm")},m(a,s){A(a,e,s),h(e,o),A(a,r,s),A(a,u,s),A(a,n,s),A(a,t,s),h(t,l)},p:R,d(a){a&&c(e),a&&c(r),a&&c(u),a&&c(n),a&&c(t)}}}function Y(i){let e,o,r,u,n=i[0],t=[];for(let l=0;l<n.length;l+=1)t[l]=M(H(i,n,l));return{c(){e=d("div");for(let l=0;l<t.length;l+=1)t[l].c();o=N(),r=d("a"),u=T("Create New Account"),this.h()},l(l){e=b(l,"DIV",{class:!0});var a=k(e);for(let f=0;f<t.length;f+=1)t[f].l(a);a.forEach(c),o=y(l),r=b(l,"A",{href:!0,class:!0});var s=k(r);u=I(s,"Create New Account"),s.forEach(c),this.h()},h(){g(e,"class","accounts-list svelte-2relrm"),g(r,"href","/newAccount"),g(r,"class","create-button red-button svelte-2relrm")},m(l,a){A(l,e,a);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null);A(l,o,a),A(l,r,a),h(r,u)},p(l,a){if(a&3){n=l[0];let s;for(s=0;s<n.length;s+=1){const f=H(l,n,s);t[s]?t[s].p(f,a):(t[s]=M(f),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=n.length}},d(l){l&&c(e),K(t,l),l&&c(o),l&&c(r)}}}function M(i){let e,o,r=i[3].callsign+"",u,n,t,l=i[3].faction+"",a,s,f,L;return{c(){e=d("div"),o=d("h3"),u=T(r),n=N(),t=d("h5"),a=T(l),s=N(),this.h()},l(E){e=b(E,"DIV",{class:!0});var m=k(e);o=b(m,"H3",{});var C=k(o);u=I(C,r),C.forEach(c),n=y(m),t=b(m,"H5",{});var _=k(t);a=I(_,l),_.forEach(c),s=y(m),m.forEach(c),this.h()},h(){g(e,"class","account svelte-2relrm")},m(E,m){A(E,e,m),h(e,o),h(o,u),h(e,n),h(e,t),h(t,a),h(e,s),f||(L=P(e,"click",function(){U(i[1](i[3]))&&i[1](i[3]).apply(this,arguments)}),f=!0)},p(E,m){i=E,m&1&&r!==(r=i[3].callsign+"")&&S(u,r),m&1&&l!==(l=i[3].faction+"")&&S(a,l)},d(E){E&&c(e),f=!1,L()}}}function Z(i){let e,o,r,u,n,t,l,a,s,f,L,E;function m(v,p){return v[0]!=null&&v[0].length>0?Y:X}let C=m(i),_=C(i);return{c(){e=d("main"),o=d("img"),u=N(),n=d("h1"),t=T("Login Page"),l=N(),_.c(),a=N(),s=d("button"),f=T("RESET"),this.h()},l(v){e=b(v,"MAIN",{});var p=k(e);o=b(p,"IMG",{alt:!0,id:!0,src:!0,class:!0}),u=y(p),n=b(p,"H1",{});var w=k(n);t=I(w,"Login Page"),w.forEach(c),l=y(p),_.l(p),a=y(p),s=b(p,"BUTTON",{class:!0});var G=k(s);f=I(G,"RESET"),G.forEach(c),p.forEach(c),this.h()},h(){g(o,"alt","Wails logo"),g(o,"id","logo"),D(o.src,r=Q)||g(o,"src",r),g(o,"class","svelte-2relrm"),g(s,"class","reset-button svelte-2relrm")},m(v,p){A(v,e,p),h(e,o),h(e,u),h(e,n),h(n,t),h(e,l),_.m(e,null),h(e,a),h(e,s),h(s,f),L||(E=P(s,"click",i[2]),L=!0)},p(v,[p]){C===(C=m(v))&&_?_.p(v,p):(_.d(1),_=C(v),_&&(_.c(),_.m(e,a)))},i:R,o:R,d(v){v&&c(e),_.d(),L=!1,E()}}}function x(i,e,o){let r=[];F(async()=>{V().then(t=>o(0,r=t))});function u(t){J.update(l=>t.callsign),W.update(l=>t.faction),j.update(l=>t.token),z("/home",!0)}function n(){$(),o(0,r=[])}return[r,u,n]}class ae extends q{constructor(e){super(),O(this,e,x,Z,B,{})}}export{ae as component};
