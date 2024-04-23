import{s as ue,n as Q,d as ce}from"../chunks/scheduler.DHKgWpgq.js";import{S as _e,i as ge,e as M,b as Z,s as K,m as Y,n as H,c as N,d as D,o as ee,f as $,h as L,p as q,g as y,q as o,r as B,j as A,k,u as W,v as de}from"../chunks/index.Cd6sGnA0.js";function S(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function te(e,t,s){const n=e.slice();return n[9]=t[s],n[11]=s,n}function le(e,t,s){const n=e.slice();return n[12]=t[s],n[14]=s,n}function se(e,t,s){const n=e.slice();return n[15]=t[s],n[17]=s,n}function ne(e,t,s){const n=e.slice();return n[12]=t[s],n[11]=s,n}function ie(e,t,s){const n=e.slice();return n[15]=t[s],n[17]=s,n}function oe(e){let t;return{c(){t=Y("line"),this.h()},l(s){t=q(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),D(t).forEach(y),this.h()},h(){o(t,"x1",e[1].vertices[e[15][0]].x),o(t,"y1",e[1].vertices[e[15][0]].y),o(t,"x2",e[1].vertices[e[15][1]].x),o(t,"y2",e[1].vertices[e[15][1]].y),o(t,"class","svelte-1f0zfcm"),B(t,"good",G(e[0],e[15])),B(t,"bad",!G(e[0],e[15]))},m(s,n){A(s,t,n)},p(s,n){n&3&&B(t,"good",G(s[0],s[15])),n&3&&B(t,"bad",!G(s[0],s[15]))},d(s){s&&y(t)}}}function re(e){let t,s,n;return{c(){t=Y("circle"),s=Y("text"),n=Z(e[11]),this.h()},l(a){t=q(a,"circle",{class:!0,cx:!0,cy:!0,r:!0}),D(t).forEach(y),s=q(a,"text",{"dominant-baseline":!0,x:!0,y:!0,class:!0});var h=D(s);n=$(h,e[11]),h.forEach(y),this.h()},h(){o(t,"class",ce("vertex"+e[11])+" svelte-1f0zfcm"),o(t,"cx",e[12].x),o(t,"cy",e[12].y),o(t,"r","16"),o(s,"dominant-baseline","middle"),o(s,"x",e[12].x),o(s,"y",e[12].y),o(s,"class","svelte-1f0zfcm")},m(a,h){A(a,t,h),A(a,s,h),k(s,n)},p:Q,d(a){a&&(y(t),y(s))}}}function fe(e){let t,s,n,a,h;return{c(){t=Y("line"),this.h()},l(r){t=q(r,"line",{x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),D(t).forEach(y),this.h()},h(){o(t,"x1",s=e[0].nodes[e[15][0]].x),o(t,"y1",n=e[0].nodes[e[15][0]].y),o(t,"x2",a=e[0].nodes[e[15][1]].x),o(t,"y2",h=e[0].nodes[e[15][1]].y),o(t,"class","svelte-1f0zfcm")},m(r,f){A(r,t,f)},p(r,f){f&1&&s!==(s=r[0].nodes[r[15][0]].x)&&o(t,"x1",s),f&1&&n!==(n=r[0].nodes[r[15][0]].y)&&o(t,"y1",n),f&1&&a!==(a=r[0].nodes[r[15][1]].x)&&o(t,"x2",a),f&1&&h!==(h=r[0].nodes[r[15][1]].y)&&o(t,"y2",h)},d(r){r&&y(t)}}}function ae(e){let t,s,n,a,h,r,f,v,u;function T(){return e[5](e[11],e[14])}function _(...g){return e[6](e[14],...g)}function c(...g){return e[7](e[14],...g)}return{c(){t=Y("circle"),a=Y("text"),h=Z(e[14]),this.h()},l(g){t=q(g,"circle",{class:!0,cx:!0,cy:!0,r:!0}),D(t).forEach(y),a=q(g,"text",{"dominant-baseline":!0,x:!0,y:!0,class:!0});var m=D(a);h=$(m,e[14]),m.forEach(y),this.h()},h(){o(t,"class",ce("vertex"+e[14])+" svelte-1f0zfcm"),o(t,"cx",s=e[2](e[9],e[14]).x),o(t,"cy",n=e[2](e[9],e[14]).y),o(t,"r","10"),B(t,"bad",!X(e[0],e[14])&&e[0].bags[e[11]].some(_)),B(t,"filigrane",!e[0].bags[e[11]].some(c)),o(a,"dominant-baseline","middle"),o(a,"x",r=e[2](e[9],e[14]).x),o(a,"y",f=e[2](e[9],e[14]).y),o(a,"class","svelte-1f0zfcm")},m(g,m){A(g,t,m),A(g,a,m),k(a,h),v||(u=de(t,"click",T),v=!0)},p(g,m){e=g,m&1&&s!==(s=e[2](e[9],e[14]).x)&&o(t,"cx",s),m&1&&n!==(n=e[2](e[9],e[14]).y)&&o(t,"cy",n),m&1&&B(t,"bad",!X(e[0],e[14])&&e[0].bags[e[11]].some(_)),m&1&&B(t,"filigrane",!e[0].bags[e[11]].some(c)),m&1&&r!==(r=e[2](e[9],e[14]).x)&&o(a,"x",r),m&1&&f!==(f=e[2](e[9],e[14]).y)&&o(a,"y",f)},d(g){g&&(y(t),y(a)),v=!1,u()}}}function he(e){let t,s,n,a,h=S(e[1].vertices),r=[];for(let f=0;f<h.length;f+=1)r[f]=ae(le(e,h,f));return{c(){t=Y("rect");for(let f=0;f<r.length;f+=1)r[f].c();a=H(),this.h()},l(f){t=q(f,"rect",{rx:!0,x:!0,y:!0,width:!0,height:!0,class:!0}),D(t).forEach(y);for(let v=0;v<r.length;v+=1)r[v].l(f);a=H(),this.h()},h(){o(t,"rx","16"),o(t,"x",s=e[9].x-48),o(t,"y",n=e[9].y-48),o(t,"width","96"),o(t,"height","96"),o(t,"class","svelte-1f0zfcm"),B(t,"badnode",e[0].bags[e[11]].length-1>U)},m(f,v){A(f,t,v);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(f,v);A(f,a,v)},p(f,v){if(v&1&&s!==(s=f[9].x-48)&&o(t,"x",s),v&1&&n!==(n=f[9].y-48)&&o(t,"y",n),v&1&&B(t,"badnode",f[0].bags[f[11]].length-1>U),v&13){h=S(f[1].vertices);let u;for(u=0;u<h.length;u+=1){const T=le(f,h,u);r[u]?r[u].p(T,v):(r[u]=ae(T),r[u].c(),r[u].m(a.parentNode,a))}for(;u<r.length;u+=1)r[u].d(1);r.length=h.length}},d(f){f&&(y(t),y(a)),W(r,f)}}}function ve(e){let t,s,n="Tree-width",a,h,r="You won!",f,v,u,T,_,c,g,m,C,E,O,P=S(e[1].edges),b=[];for(let i=0;i<P.length;i+=1)b[i]=oe(ie(e,P,i));let R=S(e[1].vertices),p=[];for(let i=0;i<R.length;i+=1)p[i]=re(ne(e,R,i));let j=S(e[0].edges),z=[];for(let i=0;i<j.length;i+=1)z[i]=fe(se(e,j,i));let F=S(e[0].nodes),w=[];for(let i=0;i<F.length;i+=1)w[i]=he(te(e,F,i));return{c(){t=M("main"),s=M("h1"),s.textContent=n,a=Z(`
    Your mission is find a tree decomposition of tree-width 2.
    `),h=M("div"),h.textContent=r,f=K(),v=M("br"),u=M("br"),T=K(),_=M("div"),c=Y("svg");for(let i=0;i<b.length;i+=1)b[i].c();g=H();for(let i=0;i<p.length;i+=1)p[i].c();m=K(),C=M("div"),E=Y("svg");for(let i=0;i<z.length;i+=1)z[i].c();O=H();for(let i=0;i<w.length;i+=1)w[i].c();this.h()},l(i){t=N(i,"MAIN",{class:!0});var d=D(t);s=N(d,"H1",{class:!0,"data-svelte-h":!0}),ee(s)!=="svelte-59dnkp"&&(s.textContent=n),a=$(d,`
    Your mission is find a tree decomposition of tree-width 2.
    `),h=N(d,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),ee(h)!=="svelte-oenm5o"&&(h.textContent=r),f=L(d),v=N(d,"BR",{class:!0}),u=N(d,"BR",{class:!0}),T=L(d),_=N(d,"DIV",{class:!0});var l=D(_);c=q(l,"svg",{class:!0,width:!0,height:!0});var V=D(c);for(let I=0;I<b.length;I+=1)b[I].l(V);g=H();for(let I=0;I<p.length;I+=1)p[I].l(V);V.forEach(y),l.forEach(y),m=L(d),C=N(d,"DIV",{class:!0});var x=D(C);E=q(x,"svg",{width:!0,height:!0,class:!0});var J=D(E);for(let I=0;I<z.length;I+=1)z[I].l(J);O=H();for(let I=0;I<w.length;I+=1)w[I].l(J);J.forEach(y),x.forEach(y),d.forEach(y),this.h()},h(){o(s,"class","svelte-1f0zfcm"),o(h,"id","youwon"),o(h,"class","svelte-1f0zfcm"),B(h,"youloose",!e[4](e[0])),B(h,"youwon",e[4](e[0])),o(v,"class","svelte-1f0zfcm"),o(u,"class","svelte-1f0zfcm"),o(c,"class","graph svelte-1f0zfcm"),o(c,"width","300"),o(c,"height","300"),o(_,"class","svelte-1f0zfcm"),o(E,"width","400"),o(E,"height","500"),o(E,"class","svelte-1f0zfcm"),o(C,"class","svelte-1f0zfcm"),o(t,"class","svelte-1f0zfcm")},m(i,d){A(i,t,d),k(t,s),k(t,a),k(t,h),k(t,f),k(t,v),k(t,u),k(t,T),k(t,_),k(_,c);for(let l=0;l<b.length;l+=1)b[l]&&b[l].m(c,null);k(c,g);for(let l=0;l<p.length;l+=1)p[l]&&p[l].m(c,null);k(t,m),k(t,C),k(C,E);for(let l=0;l<z.length;l+=1)z[l]&&z[l].m(E,null);k(E,O);for(let l=0;l<w.length;l+=1)w[l]&&w[l].m(E,null)},p(i,[d]){if(d&17&&B(h,"youloose",!i[4](i[0])),d&17&&B(h,"youwon",i[4](i[0])),d&3){P=S(i[1].edges);let l;for(l=0;l<P.length;l+=1){const V=ie(i,P,l);b[l]?b[l].p(V,d):(b[l]=oe(V),b[l].c(),b[l].m(c,g))}for(;l<b.length;l+=1)b[l].d(1);b.length=P.length}if(d&2){R=S(i[1].vertices);let l;for(l=0;l<R.length;l+=1){const V=ne(i,R,l);p[l]?p[l].p(V,d):(p[l]=re(V),p[l].c(),p[l].m(c,null))}for(;l<p.length;l+=1)p[l].d(1);p.length=R.length}if(d&1){j=S(i[0].edges);let l;for(l=0;l<j.length;l+=1){const V=se(i,j,l);z[l]?z[l].p(V,d):(z[l]=fe(V),z[l].c(),z[l].m(E,O))}for(;l<z.length;l+=1)z[l].d(1);z.length=j.length}if(d&15){F=S(i[0].nodes);let l;for(l=0;l<F.length;l+=1){const V=te(i,F,l);w[l]?w[l].p(V,d):(w[l]=he(V),w[l].c(),w[l].m(E,null))}for(;l<w.length;l+=1)w[l].d(1);w.length=F.length}},i:Q,o:Q,d(i){i&&y(t),W(b,i),W(p,i),W(z,i),W(w,i)}}}let U=2;function me(e){return Math.max(...e.bags.map(t=>t.length))-1}function G(e,t){return e.bags.some(s=>s.some(n=>t[0]==n.i)&&s.some(n=>t[1]==n.i))}function X(e,t){const s=e.nodes.map((h,r)=>r).filter(h=>e.bags[h].some(r=>r.i==t));console.log(s);const n=[];function a(h){if(n[h])return 0;n[h]=!0;let r=1;for(const f of e.edges)s.indexOf(f[0])>=0&&s.indexOf(f[1])>=0&&(f[0]==h||f[1]==h)&&(r+=a(f[0]),r+=a(f[1]));return r}return s.length==0?!0:a(s[0])==s.length}function ye(e,t,s){const n={vertices:[{x:100,y:100},{x:200,y:100},{x:250,y:150},{x:200,y:200},{x:100,y:200}],edges:[[4,0],[0,1],[1,2],[2,3],[3,4]]};let a={nodes:[{x:200,y:50},{x:200,y:200},{x:200,y:350}],bags:[[{i:0,x:0,y:0}],[],[]],edges:[[0,1],[1,2]]};function h(_,c){const g=n.vertices[c];return{x:_.x+(g.x-150)/4,y:_.y+(g.y-150)/4}}function r(_,c){function g(C,E){s(0,a.bags[C]=a.bags[C].filter(O=>O.i!=E),a),s(0,a)}function m(C,E){a.bags[C].push({i:E,x:0,y:0})}a.bags[_].some(C=>C.i==c)?g(_,c):m(_,c),s(0,a)}function f(_){const c=n.vertices.map((m,C)=>C).every(m=>X(_,m)),g=n.edges.every(m=>G(_,m));return c&&g&&U==me(_)}return[a,n,h,r,f,(_,c)=>r(_,c),(_,c)=>c.i==_,(_,c)=>c.i==_]}class ze extends _e{constructor(t){super(),ge(this,t,ye,ve,ue,{})}}export{ze as component};
