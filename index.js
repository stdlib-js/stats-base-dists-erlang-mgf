// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function y(r){return l(r)===r&&r>=0}function p(r){return r!=r}function v(r){return l(r)===r}function s(r){return v(r/2)}function b(r){return s(r>0?r-1:r+1)}var w=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;function A(r){return r===w||r===d}var _=Math.sqrt;function m(r){return Math.abs(r)}var g,h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),U=Object.prototype.toString,j=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",I=h&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return U.call(r);t=r[N],i=N,n=null!=(o=r)&&j.call(o,i);try{r[N]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[N]=t:delete r[N],e}:function(r){return U.call(r)},O="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(O&&t instanceof Uint32Array||"[object Uint32Array]"===I(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=g,H="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===I(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,V=F,W="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),t=n,r=(W&&t instanceof Uint8Array||"[object Uint8Array]"===I(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var k,Y=L,q="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),t=n,r=(q&&t instanceof Uint16Array||"[object Uint16Array]"===I(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:k,uint8:Y};(B=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(B.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var R={HIGH:J,LOW:K},X=new V(1),Z=new T(X.buffer),$=R.HIGH,rr=R.LOW;function nr(r,n,t,e){return X[0]=r,n[e]=Z[$],n[e+t]=Z[rr],n}function tr(r){return nr(r,[0,0],1,0)}c(tr,"assign",nr);var er=!0===Q?0:1,or=new V(1),ir=new T(or.buffer);function ur(r,n){return or[0]=r,ir[er]=n>>>0,or[0]}function fr(r){return 0|r}var ar,cr,lr=2147483647,yr=!0===Q?1:0,pr=new V(1),vr=new T(pr.buffer);function sr(r){return pr[0]=r,vr[yr]}!0===Q?(ar=1,cr=0):(ar=0,cr=1);var br={HIGH:ar,LOW:cr},wr=new V(1),dr=new T(wr.buffer),Ar=br.HIGH,_r=br.LOW;function mr(r,n){return dr[Ar]=r,dr[_r]=n,wr[0]}var gr=[0,0];function hr(r,n){var t,e;return tr.assign(r,gr,1,0),t=gr[0],t&=lr,e=sr(n),mr(t|=e&=2147483648,gr[1])}var Ur=!0===Q?1:0,jr=new V(1),Nr=new T(jr.buffer);function Ir(r,n){return jr[0]=r,Nr[Ur]=n>>>0,jr[0]}var Or=1023,Sr=1048576,Er=[1,1.5],Fr=[0,.5849624872207642],Tr=[0,1.350039202129749e-8];function Hr(r,n,t,e){return p(r)||A(r)?(n[e]=r,n[e+t]=0,n):0!==r&&m(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Hr(r,[0,0],1,0)}),"assign",Hr);var Gr=[0,0],Pr=[0,0];function Lr(r,n){var t,e;return 0===n||0===r||p(r)||A(r)?r:(Hr(r,Gr,1,0),n+=Gr[1],n+=function(r){var n=sr(r);return(n=(2146435072&n)>>>20)-Or|0}(r=Gr[0]),n<-1074?hr(0,r):n>1023?r<0?d:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tr.assign(r,Pr,1,0),t=Pr[0],t&=2148532223,e*mr(t|=n+Or<<20,Pr[1])))}var Vr=1048575,Wr=1048576,xr=1083179008,Mr=1e300,kr=1e-300,Yr=[0,0],qr=[0,0];function Cr(r,n){var t,e,o,i,u,f,a,c,l,y,s,g,h,U;if(p(r)||p(n))return NaN;if(tr.assign(n,Yr,1,0),u=Yr[0],0===Yr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return _(r);if(-.5===n)return 1/_(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:m(r)<1==(n===w)?0:w}(r,n)}if(tr.assign(r,Yr,1,0),i=Yr[0],0===Yr[1]){if(0===i)return function(r,n){return n===d?w:n===w?0:n>0?b(n)?r:0:b(n)?hr(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&b(n))return-1;if(A(r))return r===d?Cr(-0,-n):n<0?0:w}if(r<0&&!1===v(n))return(r-r)/(r-r);if(o=m(r),t=i&lr|0,e=u&lr|0,a=u>>>31|0,f=(f=i>>>31|0)&&b(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(sr(r)&lr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Mr*Mr:f*kr*kr;if(t>1072693248)return 0===a?f*Mr*Mr:f*kr*kr;s=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ur(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(qr,o)}else s=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,w,d,A,_,m,g,h,U;return m=0,t<Sr&&(m-=53,t=sr(n*=9007199254740992)),m+=(t>>20)-Or|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,m+=1,t-=Sr),u=ur(o=(A=(n=Ir(n,t))-(c=Er[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=Ir(0,e+=h<<18),d=(i=o*o)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=ur(a=3+(i=u*u)+(d+=(f=_*(A-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=ur(y=(A=u*a)+(_=f*a+(d-(a-3-i))*o),0))+.9617966939259756*(_-(y-A))+Tr[h])-((s=ur(s=(p=.9617967009544373*y)+v+(l=Fr[h])+(w=m),0))-w-l-p),r[0]=s,r[1]=b,r}(qr,o,t);if(g=(y=(n-(c=ur(n,0)))*s[0]+n*s[1])+(l=c*s[0]),tr.assign(g,Yr,1,0),h=fr(Yr[0]),U=fr(Yr[1]),h>=xr){if(0!=(h-xr|U))return f*Mr*Mr;if(y+8008566259537294e-32>g-l)return f*Mr*Mr}else if((h&lr)>=1083231232){if(0!=(h-3230714880|U))return f*kr*kr;if(y<=g-l)return f*kr*kr}return g=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&lr|0)>>20)-Or|0,c=0,l>1071644672&&(o=Ir(0,((c=r+(Wr>>y+1)>>>0)&~(Vr>>(y=((c&lr)>>20)-Or|0)))>>>0),c=(c&Vr|Wr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=fr(r=sr(a=1-((a=(i=.6931471824645996*(o=ur(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Lr(a,c):Ir(a,r)}(h,l,y),f*g}function zr(r,n,t){return p(r)||!y(n)||p(t)||t<0||r>=t?NaN:Cr(1-r/t,-n)}return c(zr,"factory",(function(r,n){return!y(r)||p(n)||n<0?(t=NaN,function(){return t}):function(t){return p(t)||t>=n?NaN:Cr(1-t/n,-r)};var t})),zr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=n();
//# sourceMappingURL=index.js.map
