'use strict';

var $SyntaxError = require('es-errors/syntax');

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimTransfer() {
	if (typeof ArrayBuffer !== 'function') {
		throw new $SyntaxError('ArrayBuffer is not available in this environment');
	}

	var polyfill = getPolyfill();
	define(
		ArrayBuffer.prototype,
		{ transfer: polyfill },
		{ transfer: function () { return ArrayBuffer.prototype.transfer !== polyfill; } }
	);

	return polyfill;
};
