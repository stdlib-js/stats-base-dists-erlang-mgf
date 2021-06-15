<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Erlang][erlang-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for an [Erlang][erlang-distribution] random variable is

<!-- <equation class="equation" label="eq:erlang_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] =  \left(1 \,-\, \frac{t}{\lambda}\right)^{-k}" alt="Moment-generating function (MGF) for an Erlang distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] =  \left(1 \,-\, \frac{t}{\lambda}\right)^{-k}" data-equation="eq:erlang_mgf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/erlang/mgf/docs/img/equation_erlang_mgf.svg" alt="Moment-generating function (MGF) for an Erlang distribution.">
    <br>
</div>

<!-- </equation> -->

for `t < lambda`, where the nonnegative integer `k` is the shape parameter and `lambda > 0` is the rate parameter of the distribution. In the case that `t >= lambda`, the MGF is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-erlang-mgf
```

</section>

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats-base-dists-erlang-mgf' );
```

#### mgf( t, k, lambda )

Evaluates the [moment-generating function][mgf] (mgf) for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var y = mgf( 0.3, 1, 1.0 );
// returns ~1.429

y = mgf( 2.0, 2, 3.0 );
// returns ~9.0

y = mgf( -1.0, 2, 2.0 );
// returns ~0.444
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 1, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 1, NaN );
// returns NaN
```

If not provided a nonnegative integer for `k`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, -2, 0.5 );
// returns NaN

y = mgf( 0.2, 0.5, 0.5 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 1, 0.0 );
// returns NaN

y = mgf( 0.2, 1, -5.0 );
// returns NaN
```

#### mgf.factory( k, lambda )

Returns a function for evaluating the [moment-generating function][mgf] for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var myMGF = mgf.factory( 2, 0.5 );

var y = myMGF( 0.2 );
// returns ~2.778

y = myMGF( -0.5 );
// returns 0.25
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var mgf = require( '@stdlib/stats-base-dists-erlang-mgf' );

var lambda;
var k;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    k = round( randu() * 10.0 );
    lambda = randu() * 10.0;
    t = randu() * lambda;
    y = mgf( t, k, lambda );
    console.log( 't: %d, k: %d, λ: %d, M_X(t;k,λ): %d', t.toFixed( 4 ), k, lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-erlang-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-erlang-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-erlang-mgf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-erlang-mgf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-erlang-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-erlang-mgf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-erlang-mgf
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-erlang-mgf/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-erlang-mgf/main/LICENSE

[erlang-distribution]: https://en.wikipedia.org/wiki/Erlang_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
