/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

export default (fn, msg) => {
	let once = true;
	return function() {
		if (once) {
			console.warn("DeprecationWarning: " + msg);
			once = false;
		}
		return fn.apply(this, arguments);
	};
};
