'use strict';

var ArrayBufferCopyAndDetach = require('./aos/ArrayBufferCopyAndDetach');

module.exports = function transfer() {
	var newLength = arguments.length > 0 ? arguments[0] : void undefined;
	var O = this; // step 1
	return ArrayBufferCopyAndDetach(O, newLength, 'preserve-resizability'); // step 2
};
