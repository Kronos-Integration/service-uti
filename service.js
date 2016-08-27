/* jslint node: true, esnext: true */

'use strict';

const path = require('path'),
	uti = require('uti'),
	Service = require('kronos-service').Service;

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
			definitionFileName: path.join(__dirname, 'uti.json')
		});
	}
}

module.exports.registerWithManager = manager => manager.registerServiceFactory(ServiceUTI);
