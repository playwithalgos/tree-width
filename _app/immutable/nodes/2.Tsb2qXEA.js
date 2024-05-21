import{s as Ge,n as Ne,r as Je,d as He}from"../chunks/scheduler.DHKgWpgq.js";import{S as Ke,i as Qe,e as E,b as j,s as S,m as H,n as ie,c as T,d as w,f as F,o as X,h as Y,g as y,p as G,q as o,r as b,j as J,k as _,u as ce,l as Oe,v as ue}from"../chunks/index.C3RB0HBA.js";function M(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ue(e,t,a){const r=e.slice();return r[21]=t[a],r[23]=a,r}function De(e,t,a){const r=e.slice();return r[24]=t[a],r[26]=a,r}function Ae(e,t,a){const r=e.slice();return r[27]=t[a],r[29]=a,r}function Se(e,t,a){const r=e.slice();return r[24]=t[a],r[23]=a,r}function Ye(e,t,a){const r=e.slice();return r[27]=t[a],r[29]=a,r}function Me(e){let t,a,r,c,f;return{c(){t=H("line"),this.h()},l(s){t=G(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),w(t).forEach(y),this.h()},h(){o(t,"x1",a=e[0].vertices[e[27][0]].x),o(t,"y1",r=e[0].vertices[e[27][0]].y),o(t,"x2",c=e[0].vertices[e[27][1]].x),o(t,"y2",f=e[0].vertices[e[27][1]].y),o(t,"class","svelte-nqczas"),b(t,"good",he(e[1],e[27])),b(t,"bad",!he(e[1],e[27]))},m(s,n){J(s,t,n)},p(s,n){n[0]&1&&a!==(a=s[0].vertices[s[27][0]].x)&&o(t,"x1",a),n[0]&1&&r!==(r=s[0].vertices[s[27][0]].y)&&o(t,"y1",r),n[0]&1&&c!==(c=s[0].vertices[s[27][1]].x)&&o(t,"x2",c),n[0]&1&&f!==(f=s[0].vertices[s[27][1]].y)&&o(t,"y2",f),n[0]&3&&b(t,"good",he(s[1],s[27])),n[0]&3&&b(t,"bad",!he(s[1],s[27]))},d(s){s&&y(t)}}}function Pe(e){let t,a,r,c,f,s,n;return{c(){t=H("circle"),c=H("text"),f=j(e[23]),this.h()},l(u){t=G(u,"circle",{class:!0,cx:!0,cy:!0,r:!0}),w(t).forEach(y),c=G(u,"text",{"dominant-baseline":!0,x:!0,y:!0,class:!0});var h=w(c);f=F(h,e[23]),h.forEach(y),this.h()},h(){o(t,"class",He("vertex"+e[23])+" svelte-nqczas"),o(t,"cx",a=e[24].x),o(t,"cy",r=e[24].y),o(t,"r","16"),o(c,"dominant-baseline","middle"),o(c,"x",s=e[24].x),o(c,"y",n=e[24].y),o(c,"class","svelte-nqczas")},m(u,h){J(u,t,h),J(u,c,h),_(c,f)},p(u,h){h[0]&1&&a!==(a=u[24].x)&&o(t,"cx",a),h[0]&1&&r!==(r=u[24].y)&&o(t,"cy",r),h[0]&1&&s!==(s=u[24].x)&&o(c,"x",s),h[0]&1&&n!==(n=u[24].y)&&o(c,"y",n)},d(u){u&&(y(t),y(c))}}}function Re(e){let t,a,r,c,f;return{c(){t=H("line"),this.h()},l(s){t=G(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),w(t).forEach(y),this.h()},h(){o(t,"x1",a=e[1].nodes[e[27][0]].x),o(t,"y1",r=e[1].nodes[e[27][0]].y),o(t,"x2",c=e[1].nodes[e[27][1]].x),o(t,"y2",f=e[1].nodes[e[27][1]].y),o(t,"class","svelte-nqczas")},m(s,n){J(s,t,n)},p(s,n){n[0]&2&&a!==(a=s[1].nodes[s[27][0]].x)&&o(t,"x1",a),n[0]&2&&r!==(r=s[1].nodes[s[27][0]].y)&&o(t,"y1",r),n[0]&2&&c!==(c=s[1].nodes[s[27][1]].x)&&o(t,"x2",c),n[0]&2&&f!==(f=s[1].nodes[s[27][1]].y)&&o(t,"y2",f)},d(s){s&&y(t)}}}function je(e){let t,a,r,c,f,s,n,u,h;function m(){return e[18](e[23],e[26])}function K(...g){return e[19](e[26],...g)}function P(...g){return e[20](e[26],...g)}return{c(){t=H("circle"),c=H("text"),f=j(e[26]),this.h()},l(g){t=G(g,"circle",{class:!0,cx:!0,cy:!0,r:!0}),w(t).forEach(y),c=G(g,"text",{"dominant-baseline":!0,x:!0,y:!0,class:!0});var x=w(c);f=F(x,e[26]),x.forEach(y),this.h()},h(){o(t,"class",He("vertex"+e[26])+" svelte-nqczas"),o(t,"cx",a=e[8](e[21],e[26]).x),o(t,"cy",r=e[8](e[21],e[26]).y),o(t,"r","10"),b(t,"bad",!we(e[1],e[26])&&e[1].bags[e[23]].some(K)),b(t,"filigrane",!e[1].bags[e[23]].some(P)),o(c,"dominant-baseline","middle"),o(c,"x",s=e[8](e[21],e[26]).x),o(c,"y",n=e[8](e[21],e[26]).y),o(c,"class","svelte-nqczas")},m(g,x){J(g,t,x),J(g,c,x),_(c,f),u||(h=ce(t,"click",m),u=!0)},p(g,x){e=g,x[0]&2&&a!==(a=e[8](e[21],e[26]).x)&&o(t,"cx",a),x[0]&2&&r!==(r=e[8](e[21],e[26]).y)&&o(t,"cy",r),x[0]&2&&b(t,"bad",!we(e[1],e[26])&&e[1].bags[e[23]].some(K)),x[0]&2&&b(t,"filigrane",!e[1].bags[e[23]].some(P)),x[0]&2&&s!==(s=e[8](e[21],e[26]).x)&&o(c,"x",s),x[0]&2&&n!==(n=e[8](e[21],e[26]).y)&&o(c,"y",n)},d(g){g&&(y(t),y(c)),u=!1,h()}}}function Fe(e){let t,a,r,c,f=M(e[0].vertices),s=[];for(let n=0;n<f.length;n+=1)s[n]=je(De(e,f,n));return{c(){t=H("rect");for(let n=0;n<s.length;n+=1)s[n].c();c=ie(),this.h()},l(n){t=G(n,"rect",{rx:!0,x:!0,y:!0,width:!0,height:!0,class:!0}),w(t).forEach(y);for(let u=0;u<s.length;u+=1)s[u].l(n);c=ie(),this.h()},h(){o(t,"rx","16"),o(t,"x",a=e[21].x-48),o(t,"y",r=e[21].y-48),o(t,"width","96"),o(t,"height","96"),o(t,"class","svelte-nqczas"),b(t,"badnode",e[1].bags[e[23]].length-1>e[2])},m(n,u){J(n,t,u);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(n,u);J(n,c,u)},p(n,u){if(u[0]&2&&a!==(a=n[21].x-48)&&o(t,"x",a),u[0]&2&&r!==(r=n[21].y-48)&&o(t,"y",r),u[0]&6&&b(t,"badnode",n[1].bags[n[23]].length-1>n[2]),u[0]&771){f=M(n[0].vertices);let h;for(h=0;h<f.length;h+=1){const m=De(n,f,h);s[h]?s[h].p(m,u):(s[h]=je(m),s[h].c(),s[h].m(c.parentNode,c))}for(;h<s.length;h+=1)s[h].d(1);s.length=f.length}},d(n){n&&(y(t),y(c)),ue(s,n)}}}function Xe(e){let t,a,r,c,f="Level 1",s,n,u="Level 2",h,m,K="Level 3",P,g,x="Level 4",Z,R,re,fe,_e,O,D,be=`Endpoints of each edge should appear in a same bag of the tree
            decomposition.`,de,d,p,L=e[2]+1+"",$,A,Q,U,Ie=`The bags containing a given vertex should form a connected component
            in the tree decomposition.`,xe,V,Be="You won!",qe,ve,ge,Ce,ee,W,ye,ze,te,N,me,ke,Le,le=M(e[0].edges),q=[];for(let i=0;i<le.length;i+=1)q[i]=Me(Ye(e,le,i));let se=M(e[0].vertices),C=[];for(let i=0;i<se.length;i+=1)C[i]=Pe(Se(e,se,i));let ne=M(e[1].edges),z=[];for(let i=0;i<ne.length;i+=1)z[i]=Re(Ae(e,ne,i));let oe=M(e[1].nodes),k=[];for(let i=0;i<oe.length;i+=1)k[i]=Fe(Ue(e,oe,i));return{c(){t=E("main"),a=E("h1"),r=j(`Tree-width
        `),c=E("button"),c.textContent=f,s=S(),n=E("button"),n.textContent=u,h=S(),m=E("button"),m.textContent=K,P=S(),g=E("button"),g.textContent=x,Z=j(`
    Your mission is find a tree decomposition of tree-width
    `),R=E("div"),re=j(e[2]),fe=j(":"),_e=S(),O=E("ul"),D=E("li"),D.textContent=be,de=S(),d=E("li"),p=j(`Each bag should contain at most
            `),$=j(L),A=j(`
            vertices.`),Q=S(),U=E("li"),U.textContent=Ie,xe=S(),V=E("div"),V.textContent=Be,qe=S(),ve=E("br"),ge=E("br"),Ce=S(),ee=E("div"),W=H("svg");for(let i=0;i<q.length;i+=1)q[i].c();ye=ie();for(let i=0;i<C.length;i+=1)C[i].c();ze=S(),te=E("div"),N=H("svg");for(let i=0;i<z.length;i+=1)z[i].c();me=ie();for(let i=0;i<k.length;i+=1)k[i].c();this.h()},l(i){t=T(i,"MAIN",{class:!0});var v=w(t);a=T(v,"H1",{class:!0});var l=w(a);r=F(l,`Tree-width
        `),c=T(l,"BUTTON",{class:!0,"data-svelte-h":!0}),X(c)!=="svelte-1t1qu7f"&&(c.textContent=f),s=Y(l),n=T(l,"BUTTON",{class:!0,"data-svelte-h":!0}),X(n)!=="svelte-elqcof"&&(n.textContent=u),h=Y(l),m=T(l,"BUTTON",{class:!0,"data-svelte-h":!0}),X(m)!=="svelte-1wiftbz"&&(m.textContent=K),P=Y(l),g=T(l,"BUTTON",{class:!0,"data-svelte-h":!0}),X(g)!=="svelte-f323vf"&&(g.textContent=x),l.forEach(y),Z=F(v,`
    Your mission is find a tree decomposition of tree-width
    `),R=T(v,"DIV",{class:!0});var I=w(R);re=F(I,e[2]),fe=F(I,":"),I.forEach(y),_e=Y(v),O=T(v,"UL",{class:!0});var ae=w(O);D=T(ae,"LI",{class:!0,"data-svelte-h":!0}),X(D)!=="svelte-1pm29ha"&&(D.textContent=be),de=Y(ae),d=T(ae,"LI",{class:!0});var pe=w(d);p=F(pe,`Each bag should contain at most
            `),$=F(pe,L),A=F(pe,`
            vertices.`),pe.forEach(y),Q=Y(ae),U=T(ae,"LI",{class:!0,"data-svelte-h":!0}),X(U)!=="svelte-ulueu3"&&(U.textContent=Ie),ae.forEach(y),xe=Y(v),V=T(v,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),X(V)!=="svelte-1gh314c"&&(V.textContent=Be),qe=Y(v),ve=T(v,"BR",{class:!0}),ge=T(v,"BR",{class:!0}),Ce=Y(v),ee=T(v,"DIV",{class:!0});var Ve=w(ee);W=G(Ve,"svg",{class:!0,width:!0,height:!0});var Ee=w(W);for(let B=0;B<q.length;B+=1)q[B].l(Ee);ye=ie();for(let B=0;B<C.length;B+=1)C[B].l(Ee);Ee.forEach(y),Ve.forEach(y),ze=Y(v),te=T(v,"DIV",{class:!0});var We=w(te);N=G(We,"svg",{width:!0,height:!0,class:!0});var Te=w(N);for(let B=0;B<z.length;B+=1)z[B].l(Te);me=ie();for(let B=0;B<k.length;B+=1)k[B].l(Te);Te.forEach(y),We.forEach(y),v.forEach(y),this.h()},h(){o(c,"class","svelte-nqczas"),o(n,"class","svelte-nqczas"),o(m,"class","svelte-nqczas"),o(g,"class","svelte-nqczas"),o(a,"class","svelte-nqczas"),o(R,"class","svelte-nqczas"),o(D,"class","svelte-nqczas"),b(D,"good",e[10](e[1])),o(d,"class","svelte-nqczas"),b(d,"good",e[12](e[1])),o(U,"class","svelte-nqczas"),b(U,"good",e[11](e[1])),o(O,"class","svelte-nqczas"),o(V,"id","youwon"),o(V,"class","svelte-nqczas"),b(V,"youloose",!e[13](e[1])),b(V,"youwon",e[13](e[1])),o(ve,"class","svelte-nqczas"),o(ge,"class","svelte-nqczas"),o(W,"class","graph svelte-nqczas"),o(W,"width","300"),o(W,"height","300"),o(ee,"class","svelte-nqczas"),o(N,"width","400"),o(N,"height","500"),o(N,"class","svelte-nqczas"),o(te,"class","svelte-nqczas"),o(t,"class","svelte-nqczas")},m(i,v){J(i,t,v),_(t,a),_(a,r),_(a,c),_(a,s),_(a,n),_(a,h),_(a,m),_(a,P),_(a,g),_(t,Z),_(t,R),_(R,re),_(R,fe),_(t,_e),_(t,O),_(O,D),_(O,de),_(O,d),_(d,p),_(d,$),_(d,A),_(O,Q),_(O,U),_(t,xe),_(t,V),_(t,qe),_(t,ve),_(t,ge),_(t,Ce),_(t,ee),_(ee,W);for(let l=0;l<q.length;l+=1)q[l]&&q[l].m(W,null);_(W,ye);for(let l=0;l<C.length;l+=1)C[l]&&C[l].m(W,null);_(t,ze),_(t,te),_(te,N);for(let l=0;l<z.length;l+=1)z[l]&&z[l].m(N,null);_(N,me);for(let l=0;l<k.length;l+=1)k[l]&&k[l].m(N,null);ke||(Le=[ce(c,"click",e[14]),ce(n,"click",e[15]),ce(m,"click",e[16]),ce(g,"click",e[17])],ke=!0)},p(i,v){if(v[0]&4&&Oe(re,i[2]),v[0]&1026&&b(D,"good",i[10](i[1])),v[0]&4&&L!==(L=i[2]+1+"")&&Oe($,L),v[0]&4098&&b(d,"good",i[12](i[1])),v[0]&2050&&b(U,"good",i[11](i[1])),v[0]&8194&&b(V,"youloose",!i[13](i[1])),v[0]&8194&&b(V,"youwon",i[13](i[1])),v[0]&3){le=M(i[0].edges);let l;for(l=0;l<le.length;l+=1){const I=Ye(i,le,l);q[l]?q[l].p(I,v):(q[l]=Me(I),q[l].c(),q[l].m(W,ye))}for(;l<q.length;l+=1)q[l].d(1);q.length=le.length}if(v[0]&1){se=M(i[0].vertices);let l;for(l=0;l<se.length;l+=1){const I=Se(i,se,l);C[l]?C[l].p(I,v):(C[l]=Pe(I),C[l].c(),C[l].m(W,null))}for(;l<C.length;l+=1)C[l].d(1);C.length=se.length}if(v[0]&2){ne=M(i[1].edges);let l;for(l=0;l<ne.length;l+=1){const I=Ae(i,ne,l);z[l]?z[l].p(I,v):(z[l]=Re(I),z[l].c(),z[l].m(N,me))}for(;l<z.length;l+=1)z[l].d(1);z.length=ne.length}if(v[0]&775){oe=M(i[1].nodes);let l;for(l=0;l<oe.length;l+=1){const I=Ue(i,oe,l);k[l]?k[l].p(I,v):(k[l]=Fe(I),k[l].c(),k[l].m(N,null))}for(;l<k.length;l+=1)k[l].d(1);k.length=oe.length}},i:Ne,o:Ne,d(i){i&&y(t),ue(q,i),ue(C,i),ue(z,i),ue(k,i),ke=!1,Je(Le)}}}function Ze(e){return Math.max(...e.bags.map(t=>t.length))-1}function he(e,t){return e.bags.some(a=>a.some(r=>t[0]==r.i)&&a.some(r=>t[1]==r.i))}function we(e,t){const a=e.nodes.map((f,s)=>s).filter(f=>e.bags[f].some(s=>s.i==t));console.log(a);const r=[];function c(f){if(r[f])return 0;r[f]=!0;let s=1;for(const n of e.edges)a.indexOf(n[0])>=0&&a.indexOf(n[1])>=0&&(n[0]==f||n[1]==f)&&(s+=c(n[0]),s+=c(n[1]));return s}return a.length==0?!0:c(a[0])==a.length}function $e(e,t,a){const r={graph:{vertices:[{x:100,y:100},{x:200,y:100},{x:250,y:150},{x:200,y:200},{x:100,y:200}],edges:[[4,0],[0,1],[1,2],[2,3],[3,4]]},decomposition:{nodes:[{x:200,y:50},{x:200,y:200},{x:200,y:350}],bags:[[{i:0,x:0,y:0}],[],[]],edges:[[0,1],[1,2]]},expectedTreeWidth:2},c={graph:{vertices:[{x:50,y:50},{x:150,y:50},{x:250,y:50},{x:50,y:150},{x:150,y:150},{x:250,y:150},{x:50,y:250},{x:150,y:250},{x:250,y:250}],edges:[[0,1],[1,2],[3,4],[4,5],[6,7],[7,8],[0,3],[3,6],[1,4],[4,7],[2,5],[5,8]]},decomposition:{nodes:[{x:50,y:50},{x:50,y:200},{x:50,y:350},{x:200,y:350},{x:200,y:200},{x:200,y:50}],bags:[[{i:0,x:0,y:0}],[],[],[],[],[],[],[],[],[],[],[],[],[]],edges:[[0,1],[1,2],[2,3],[3,4],[4,5]]},expectedTreeWidth:3},f={graph:{vertices:[{x:150,y:20},{x:150,y:120},{x:100,y:200},{x:200,y:200},{x:50,y:280},{x:150,y:280},{x:250,y:280}],edges:[[0,1],[1,2],[1,3],[2,4],[2,5],[3,5],[3,6],[4,5],[5,6]]},decomposition:{nodes:[{x:200,y:50},{x:200,y:180},{x:200,y:300},{x:100,y:420},{x:300,y:420}],bags:[[{i:0,x:0,y:0}],[],[],[],[]],edges:[[0,1],[1,2],[2,3],[2,4]]},expectedTreeWidth:2},s={graph:{vertices:[{x:150,y:20},{x:110,y:90},{x:190,y:90},{x:50,y:160},{x:100,y:160},{x:200,y:160},{x:250,y:160},{x:110,y:220},{x:190,y:220},{x:150,y:280}],edges:[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,4],[4,5],[5,6],[9,8],[9,7],[7,3],[7,4],[8,5],[8,6]]},decomposition:{nodes:[{x:200,y:100},{x:100,y:220},{x:300,y:220},{x:100,y:390},{x:300,y:390}],bags:[[{i:0,x:0,y:0}],[],[],[],[]],edges:[[0,1],[0,2],[1,3],[2,4]]},expectedTreeWidth:4};let n,u,h;function m(d){a(0,n=d.graph),a(1,u=d.decomposition),a(2,h=d.expectedTreeWidth)}m(r);function K(d,p){const L=n.vertices[p];return{x:d.x+(L.x-150)/4,y:d.y+(L.y-150)/4}}function P(d,p){function L(A,Q){a(1,u.bags[A]=u.bags[A].filter(U=>U.i!=Q),u),a(1,u)}function $(A,Q){u.bags[A].push({i:Q,x:0,y:0})}u.bags[d].some(A=>A.i==p)?L(d,p):$(d,p),a(1,u)}function g(d){return n.edges.every(p=>he(d,p))}function x(d){return n.vertices.map((p,L)=>L).every(p=>we(d,p))}function Z(d){return Ze(d)<=h}function R(d){return x(d)&&g(d)&&Z(d)}return[n,u,h,r,c,f,s,m,K,P,g,x,Z,R,()=>m(r),()=>m(c),()=>m(f),()=>m(s),(d,p)=>P(d,p),(d,p)=>p.i==d,(d,p)=>p.i==d]}class lt extends Ke{constructor(t){super(),Qe(this,t,$e,Xe,Ge,{},null,[-1,-1])}}export{lt as component};
