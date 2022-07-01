// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},v=n()?c:l;var y=function(r,n,t){v(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},p=Math.floor,b=p;var w=function(r){return b(r)===r&&r>=0};var A=function(r){return r!=r},_=p;var m=function(r){return _(r)===r},d=m;var s=function(r){return d(r/2)};var U=function(r){return s(r>0?r-1:r+1)},h=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY,j=h,g=N;var I=function(r){return r===j||r===g},O=Math.sqrt;var S=function(r){return Math.abs(r)};var E=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var F=function(){return E&&"symbol"==typeof Symbol.toStringTag},H=Object.prototype.toString,T=H;var G=function(r){return T.call(r)},P=Object.prototype.hasOwnProperty;var L=function(r,n){return null!=r&&P.call(r,n)},V="function"==typeof Symbol?Symbol.toStringTag:"",W=L,M=V,k=H;var x=G,Y=function(r){var n,t,e;if(null==r)return k.call(r);t=r[M],n=W(r,M);try{r[M]=void 0}catch(n){return k.call(r)}return e=k.call(r),n?r[M]=t:delete r[M],e},q=F()?Y:x,C=q,z="function"==typeof Uint32Array;var B="function"==typeof Uint32Array?Uint32Array:null,D=function(r){return z&&r instanceof Uint32Array||"[object Uint32Array]"===C(r)},J=B;var K=function(){var r,n;if("function"!=typeof J)return!1;try{n=new J(n=[1,3.14,-3.14,4294967296,4294967297]),r=D(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Q="function"==typeof Uint32Array?Uint32Array:void 0,R=function(){throw new Error("not implemented")},X=K()?Q:R,Z=q,$="function"==typeof Float64Array;var rr="function"==typeof Float64Array?Float64Array:null,nr=function(r){return $&&r instanceof Float64Array||"[object Float64Array]"===Z(r)},tr=rr;var er=function(){var r,n;if("function"!=typeof tr)return!1;try{n=new tr([1,3.14,-3.14,NaN]),r=nr(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var ur="function"==typeof Float64Array?Float64Array:void 0,or=function(){throw new Error("not implemented")},ir=er()?ur:or,ar=q,fr="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null,lr=function(r){return fr&&r instanceof Uint8Array||"[object Uint8Array]"===ar(r)},vr=cr;var yr=function(){var r,n;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,256,257]),r=lr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var pr="function"==typeof Uint8Array?Uint8Array:void 0,br=function(){throw new Error("not implemented")},wr=yr()?pr:br,Ar=q,_r="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null,dr=function(r){return _r&&r instanceof Uint16Array||"[object Uint16Array]"===Ar(r)},sr=mr;var Ur=function(){var r,n;if("function"!=typeof sr)return!1;try{n=new sr(n=[1,3.14,-3.14,65536,65537]),r=dr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var hr,Nr="function"==typeof Uint16Array?Uint16Array:void 0,jr=function(){throw new Error("not implemented")},gr={uint16:Ur()?Nr:jr,uint8:wr};(hr=new gr.uint16(1))[0]=4660;var Ir,Or,Sr=52===new gr.uint8(hr.buffer)[0];!0===Sr?(Ir=1,Or=0):(Ir=0,Or=1);var Er=X,Fr={HIGH:Ir,LOW:Or},Hr=new ir(1),Tr=new Er(Hr.buffer),Gr=Fr.HIGH,Pr=Fr.LOW;var Lr=function(r,n){return Hr[0]=n,r[0]=Tr[Gr],r[1]=Tr[Pr],r};var Vr=function(r,n){return 1===arguments.length?Lr([0,0],r):Lr(r,n)},Wr=X,Mr=!0===Sr?0:1,kr=new ir(1),xr=new Wr(kr.buffer);var Yr=function(r,n){return kr[0]=r,xr[Mr]=n>>>0,kr[0]},qr=Yr;var Cr=function(r){return 0|r},zr=X,Br=!0===Sr?1:0,Dr=new ir(1),Jr=new zr(Dr.buffer);var Kr,Qr,Rr=function(r){return Dr[0]=r,Jr[Br]};!0===Sr?(Kr=1,Qr=0):(Kr=0,Qr=1);var Xr=X,Zr={HIGH:Kr,LOW:Qr},$r=new ir(1),rn=new Xr($r.buffer),nn=Zr.HIGH,tn=Zr.LOW;var en=function(r,n){return rn[nn]=r,rn[tn]=n,$r[0]},un=en,on=Vr,an=Rr,fn=un,cn=[0,0];var ln=function(r,n){var t,e;return on(cn,r),t=cn[0],t&=2147483647,e=an(n),fn(t|=e&=2147483648,cn[1])},vn=U,yn=ln,pn=N,bn=h;var wn=function(r,n){return n===pn?bn:n===bn?0:n>0?vn(n)?r:0:vn(n)?yn(bn,r):bn},An=Rr;var _n=function(r,n){return(2147483647&An(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},mn=S,dn=h;var sn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:mn(r)<1==(n===dn)?0:dn},Un=X,hn=!0===Sr?1:0,Nn=new ir(1),jn=new Un(Nn.buffer);var gn=function(r,n){return Nn[0]=r,jn[hn]=n>>>0,Nn[0]};var In=Rr,On=qr,Sn=gn,En=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Fn=[1,1.5],Hn=[0,.5849624872207642],Tn=[0,1.350039202129749e-8];var Gn=qr,Pn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Ln=I,Vn=A,Wn=S;var Mn=function(r,n){return Vn(n)||Ln(n)?(r[0]=n,r[1]=0,r):0!==n&&Wn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var kn=Rr;var xn=function(r){var n=kn(r);return(n=(2146435072&n)>>>20)-1023|0},Yn=h,qn=N,Cn=A,zn=I,Bn=ln,Dn=function(r,n){return 1===arguments.length?Mn([0,0],r):Mn(r,n)},Jn=xn,Kn=Vr,Qn=un,Rn=[0,0],Xn=[0,0];var Zn=function(r,n){var t,e;return 0===n||0===r||Cn(r)||zn(r)?r:(Dn(Rn,r),n+=Rn[1],(n+=Jn(r=Rn[0]))<-1074?Bn(0,r):n>1023?r<0?qn:Yn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Kn(Xn,r),t=Xn[0],t&=2148532223,e*Qn(t|=n+1023<<20,Xn[1])))};var $n=Rr,rt=gn,nt=qr,tt=Cr,et=Zn,ut=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ot=A,it=U,at=I,ft=m,ct=O,lt=S,vt=Vr,yt=qr,pt=Cr,bt=N,wt=h,At=wn,_t=_n,mt=sn,dt=function(r,n,t){var e,u,o,i,a,f,c,l,v,y,p,b,w,A,_,m,d,s,U,h;return s=0,t<1048576&&(s-=53,t=In(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?h=0:U<767610?h=1:(h=0,s+=1,t-=1048576),e=524288+(t>>1|536870912),a=(d=1/((n=Sn(n,t))+(c=Fn[h])))*((m=n-c)-(i=On(u=m*d,0))*(f=Sn(0,e+=h<<18))-i*(n-(f-c))),_=(o=u*u)*o*En(o),f=On(f=3+(o=i*i)+(_+=a*(i+u)),0),w=(p=-7.028461650952758e-9*(v=On(v=(m=i*f)+(d=a*f+(_-(f-3-o))*u),0))+.9617966939259756*(d-(v-m))+Tn[h])-((b=On(b=(y=.9617967009544373*v)+p+(l=Hn[h])+(A=s),0))-A-l-y),r[0]=b,r[1]=w,r},st=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Pn(u)))-((e=Gn(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},Ut=function(r,n,t){var e,u,o,i,a,f,c,l,v,y;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=o=rt(0,e)),f=(a=.6931471805599453*(t-((o=nt(o=t+n,0))-n))+-1.904654299957768e-9*o)-((c=(i=.6931471824645996*o)+a)-i),u=c-(o=c*c)*ut(o),r=$n(c=1-(c*u/(u-2)-(f+c*f)-c)),r=tt(r),c=(r+=l<<20>>>0)>>20<=0?et(c,l):rt(c,r)},ht=1e300,Nt=1e-300,jt=[0,0],gt=[0,0];var It=function r(n,t){var e,u,o,i,a,f,c,l,v,y,p,b,w,A;if(ot(n)||ot(t))return NaN;if(vt(jt,t),a=jt[0],0===jt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return ct(n);if(-.5===t)return 1/ct(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(at(t))return mt(n,t)}if(vt(jt,n),i=jt[0],0===jt[1]){if(0===i)return At(n,t);if(1===n)return 1;if(-1===n&&it(t))return-1;if(at(n))return n===bt?r(-0,-t):t<0?0:wt}if(n<0&&!1===ft(t))return(n-n)/(n-n);if(o=lt(n),e=2147483647&i|0,u=2147483647&a|0,c=a>>>31|0,f=(f=i>>>31|0)&&it(t)?-1:1,u>1105199104){if(u>1139802112)return _t(n,t);if(e<1072693247)return 1===c?f*ht*ht:f*Nt*Nt;if(e>1072693248)return 0===c?f*ht*ht:f*Nt*Nt;p=st(gt,o)}else p=dt(gt,o,e);if(y=(t-(l=yt(t,0)))*p[0]+t*p[1],v=l*p[0],vt(jt,b=y+v),w=pt(jt[0]),A=pt(jt[1]),w>=1083179008){if(0!=(w-1083179008|A))return f*ht*ht;if(y+8008566259537294e-32>b-v)return f*ht*ht}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|A))return f*Nt*Nt;if(y<=b-v)return f*Nt*Nt}return f*(b=Ut(w,v,y))},Ot=It;function St(r,n,t){return A(r)||!w(n)||A(t)||t<0||r>=t?NaN:Ot(1-r/t,-n)}var Et=function(r){return function(){return r}};function Ft(r,n){return!w(r)||A(n)||n<0?Et(NaN):function(t){if(A(t)||t>=n)return NaN;return Ot(1-t/n,-r)}}y(St,"factory",Ft);export{St as default,Ft as factory};
//# sourceMappingURL=mod.js.map
