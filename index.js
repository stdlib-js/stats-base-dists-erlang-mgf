// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&f&&f.call(r,t,n.set),r};var l=t,y=Math.floor;function p(r){return y(r)===r&&r>=0}function v(r){return r!=r}function b(r){return y(r)===r}function d(r){return b(r/2)}function w(r){return d(r>0?r-1:r+1)}var s=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY;function A(r){return r===s||r===_}var m=Math.sqrt;function h(r){return Math.abs(r)}var U,g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),j=Object.prototype.toString,N=Object.prototype.hasOwnProperty,I="function"==typeof Symbol?Symbol.toStringTag:"";U=g&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,u;if(null==r)return j.call(r);n=r[I],u=I,t=null!=(o=r)&&N.call(o,u);try{r[I]=void 0}catch(t){return j.call(r)}return e=j.call(r),t?r[I]=n:delete r[I],e}:function(r){return j.call(r)};var O,S=U,E="function"==typeof Uint32Array,F="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;O=function(){var r,t,n;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(E&&n instanceof Uint32Array||"[object Uint32Array]"===S(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Float64Array,x="function"==typeof Float64Array?Float64Array:null,L="function"==typeof Float64Array?Float64Array:void 0;H=function(){var r,t,n;if("function"!=typeof x)return!1;try{t=new x([1,3.14,-3.14,NaN]),n=t,r=(P&&n instanceof Float64Array||"[object Float64Array]"===S(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,V=H,W="function"==typeof Uint8Array,k="function"==typeof Uint8Array?Uint8Array:null,Y="function"==typeof Uint8Array?Uint8Array:void 0;M=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,256,257]),n=t,r=(W&&n instanceof Uint8Array||"[object Uint8Array]"===S(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var q,C=M,z="function"==typeof Uint16Array,B="function"==typeof Uint16Array?Uint16Array:null,D="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,t,n;if("function"!=typeof B)return!1;try{t=new B(t=[1,3.14,-3.14,65536,65537]),n=t,r=(z&&n instanceof Uint16Array||"[object Uint16Array]"===S(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K={uint16:q,uint8:C};(J=new K.uint16(1))[0]=4660;var Q,R,X=52===new K.uint8(J.buffer)[0];!0===X?(Q=1,R=0):(Q=0,R=1);var Z={HIGH:Q,LOW:R},$=new V(1),rr=new G($.buffer),tr=Z.HIGH,nr=Z.LOW;function er(r,t){return $[0]=t,r[0]=rr[tr],r[1]=rr[nr],r}function or(r,t){return 1===arguments.length?er([0,0],r):er(r,t)}var ur=!0===X?0:1,ir=new V(1),fr=new G(ir.buffer);function ar(r,t){return ir[0]=r,fr[ur]=t>>>0,ir[0]}function cr(r){return 0|r}var lr,yr,pr=!0===X?1:0,vr=new V(1),br=new G(vr.buffer);function dr(r){return vr[0]=r,br[pr]}!0===X?(lr=1,yr=0):(lr=0,yr=1);var wr={HIGH:lr,LOW:yr},sr=new V(1),_r=new G(sr.buffer),Ar=wr.HIGH,mr=wr.LOW;function hr(r,t){return _r[Ar]=r,_r[mr]=t,sr[0]}var Ur=[0,0];function gr(r,t){var n,e;return or(Ur,r),n=Ur[0],n&=2147483647,e=dr(t),hr(n|=e&=2147483648,Ur[1])}var jr=!0===X?1:0,Nr=new V(1),Ir=new G(Nr.buffer);function Or(r,t){return Nr[0]=r,Ir[jr]=t>>>0,Nr[0]}var Sr=1023,Er=1048576,Fr=[1,1.5],Tr=[0,.5849624872207642],Hr=[0,1.350039202129749e-8];function Gr(r,t){return v(t)||A(t)?(r[0]=t,r[1]=0,r):0!==t&&h(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Pr=[0,0],xr=[0,0];function Lr(r,t){var n,e;return 0===t||0===r||v(r)||A(r)?r:(function(r,t){1===arguments.length?Gr([0,0],r):Gr(r,t)}(Pr,r),t+=Pr[1],t+=function(r){var t=dr(r);return(t=(2146435072&t)>>>20)-Sr|0}(r=Pr[0]),t<-1074?gr(0,r):t>1023?r<0?_:s:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,or(xr,r),n=xr[0],n&=2148532223,e*hr(n|=t+Sr<<20,xr[1])))}var Mr=2147483647,Vr=1048575,Wr=1048576,kr=2147483647,Yr=1083179008,qr=1e300,Cr=1e-300,zr=[0,0],Br=[0,0];function Dr(r,t){var n,e,o,u,i,f,a,c,l,y,p,d,U,g;if(v(r)||v(t))return NaN;if(or(zr,t),i=zr[0],0===zr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return m(r);if(-.5===t)return 1/m(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(A(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:h(r)<1==(t===s)?0:s}(r,t)}if(or(zr,r),u=zr[0],0===zr[1]){if(0===u)return function(r,t){return t===_?s:t===s?0:t>0?w(t)?r:0:w(t)?gr(s,r):s}(r,t);if(1===r)return 1;if(-1===r&&w(t))return-1;if(A(r))return r===_?Dr(-0,-t):t<0?0:s}if(r<0&&!1===b(t))return(r-r)/(r-r);if(o=h(r),n=u&kr|0,e=i&kr|0,a=i>>>31|0,f=(f=u>>>31|0)&&w(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&dr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*qr*qr:f*Cr*Cr;if(n>1072693248)return 0===a?f*qr*qr:f*Cr*Cr;p=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ar(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(Br,o)}else p=function(r,t,n){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,s,_,A,m,h,U,g;return m=0,n<Er&&(m-=53,n=dr(t*=9007199254740992)),m+=(n>>20)-Sr|0,n=1072693248|(h=1048575&n|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,n-=Er),i=ar(o=(_=(t=Or(t,n))-(c=Fr[U]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),a=Or(0,e+=U<<18),s=(u=o*o)*u*(0===(g=u)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=ar(a=3+(u=i*i)+(s+=(f=A*(_-i*a-i*(t-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=ar(y=(_=i*a)+(A=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(A-(y-_))+Hr[U])-((b=ar(b=(p=.9617967009544373*y)+v+(l=Tr[U])+(w=m),0))-w-l-p),r[0]=b,r[1]=d,r}(Br,o,n);if(y=(t-(c=ar(t,0)))*p[0]+t*p[1],l=c*p[0],or(zr,d=y+l),U=cr(zr[0]),g=cr(zr[1]),U>=Yr){if(0!=(U-Yr|g))return f*qr*qr;if(y+8008566259537294e-32>d-l)return f*qr*qr}else if((U&kr)>=1083231232){if(0!=(U-3230714880|g))return f*Cr*Cr;if(y<=d-l)return f*Cr*Cr}return d=function(r,t,n){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&Mr|0)>>20)-Sr|0,c=0,l>1071644672&&(o=Or(0,((c=r+(Wr>>y+1)>>>0)&~(Vr>>(y=((c&Mr)>>20)-Sr|0)))>>>0),c=(c&Vr|Wr)>>20-y>>>0,r<0&&(c=-c),t-=o),r=cr(r=dr(a=1-((a=(u=.6931471824645996*(o=ar(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Lr(a,c):Or(a,r)}(U,l,y),f*d}function Jr(r,t,n){return v(r)||!p(t)||v(n)||n<0||r>=n?NaN:Dr(1-r/n,-t)}function Kr(r,t){return!p(r)||v(t)||t<0?(n=NaN,function(){return n}):function(n){return v(n)||n>=t?NaN:Dr(1-n/t,-r)};var n}l(Jr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Kr}),r.default=Jr,r.factory=Kr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).mgf={});
//# sourceMappingURL=index.js.map
