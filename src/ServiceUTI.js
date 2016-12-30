/* jslint node: true, esnext: true */

'use strict';

const path = require('path'),
	uti = require('uti');

import {
	Service
}
from 'kronos-service';

/**
 *
 */
class ServiceUTI extends Service {
	static get name() {
		return 'uti';
	}

	get autostart() {
		return true;
	}

	_start() {
		return uti.initialize({
			definitionFileName: path.join(__dirname, '..', 'uti.json')
		});
	}
}

function registerWithManager(manager) {
	return manager.registerServiceFactory(ServiceUTI);
}

export {
	registerWithManager,
	ServiceUTI
};
