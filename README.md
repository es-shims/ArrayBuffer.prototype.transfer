# ArrayBuffer.prototype.transfer <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES6 spec-compliant `ArrayBuffer.prototype.transfer` shim. Invoke its "shim" method to shim ArrayBuffer.prototype.transfer if it is unavailable.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES5-supported environment and complies with the proposed [spec](https://tc39.es/proposal-arraybuffer-transfer/#sec-get-arraybuffer.prototype.transfer).

Most common usage:
```js
var assert = require('assert');
var transfer = require('arraybuffer.prototype.transfer');
var IsDetachedBuffer = require('es-abstract/2023/IsDetachedBuffer');

var ab = new ArrayBuffer('a');

assert.equal(IsDetachedBuffer(ab), false);
transfer(ab);
assert.equal(IsDetachedBuffer(ab), true);

if (!ArrayBuffer.prototype.transfer) {
	transfer.shim();
}

var ab2 = new ArrayBuffer('a');
assert.equal(IsDetachedBuffer(ab2), false);
ab2.transfer();
assert.equal(IsDetachedBuffer(ab2), true);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/arraybuffer.prototype.transfer
[npm-version-svg]: https://versionbadg.es/es-shims/ArrayBuffer.prototype.transfer.svg
[deps-svg]: https://david-dm.org/es-shims/ArrayBuffer.prototype.transfer.svg
[deps-url]: https://david-dm.org/es-shims/ArrayBuffer.prototype.transfer
[dev-deps-svg]: https://david-dm.org/es-shims/ArrayBuffer.prototype.transfer/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/ArrayBuffer.prototype.transfer#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/arraybuffer.prototype.transfer.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/arraybuffer.prototype.transfer.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/arraybuffer.prototype.transfer.svg
[downloads-url]: https://npm-stat.com/charts.html?package=arraybuffer.prototype.transfer
[codecov-image]: https://codecov.io/gh/es-shims/ArrayBuffer.prototype.transfer/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/ArrayBuffer.prototype.transfer/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/ArrayBuffer.prototype.transfer
[actions-url]: https://github.com/es-shims/ArrayBuffer.prototype.transfer/actions
