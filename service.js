/* jslint node: true, esnext: true */

"use strict";

const path = require('path'),
	uti = require('uti'),
	Service = require('kronos-service').Service;

/**
 * collects health state form all components
 */
class ServiceUTI extends Service {

	constructor(config) {
		super(config);

		// TODO how to broadcast health state
	}

	static get name() {
		return "uti";
	}

	get type() {
		return ServiceUTI.name;
	}

	get autostart() {
		return true;
	}
}

module.exports.registerWithManager = manager => {
	manager.registerService(new ServiceUTI());
};
