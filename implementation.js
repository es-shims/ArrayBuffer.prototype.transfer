'use strict';

var ArrayBufferCopyAndDetach = require('es-abstract/2024/ArrayBufferCopyAndDetach');

module.exports = function transfer() {
	var newLength = arguments.length > 0 ? arguments[0] : void undefined;
	var O = this; // step 1
	return ArrayBufferCopyAndDetach(O, newLength, 'PRESERVE-RESIZABILITY'); // step 2
};
