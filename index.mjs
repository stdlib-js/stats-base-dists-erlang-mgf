// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@v0.1.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function r(t,i,r){return e(t)||!s(i)||e(r)||r<0||t>=r?NaN:n(1-t/r,-i)}function m(t,r){return!s(t)||e(r)||r<0?i(NaN):function(s){if(e(s)||s>=r)return NaN;return n(1-s/r,-t)}}t(r,"factory",m);export{r as default,m as factory};
//# sourceMappingURL=index.mjs.map
