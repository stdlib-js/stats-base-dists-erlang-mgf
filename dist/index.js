"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(R,o){
var q=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-pow/dist');function g(e,r,i){return u(e)||!q(r)||u(i)||i<0||e>=i?NaN:N(1-e/i,-r)}o.exports=g
});var c=t(function(h,a){
var p=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/utils-constant-function/dist'),x=require('@stdlib/math-base-special-pow/dist');function w(e,r){if(!p(e)||v(r)||r<0)return y(NaN);return i;function i(n){return v(n)||n>=r?NaN:x(1-n/r,-e)}}a.exports=w
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=s(),F=c();I(f,"factory",F);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
