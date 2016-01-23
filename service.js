/* jslint node: true, esnext: true */

"use strict";

const path = require('path'),
	uti = require('uti'),
	Service = require('kronos-service').Service;

/**
 *
 */
class ServiceUTI extends Service {

	constructor(config) {
		super(config);
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
