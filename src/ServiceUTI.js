/* jslint node: true, esnext: true */

'use strict';

const path = require('path'),
	{
		UTIController
	} = require('uti');

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
		this.controller = new UTIController();
		return this.controller.initializeBuildin().then(() =>
			this.controller.loadDefinitionsFromFile(path.join(__dirname, '..', 'uti.json'))
		);
	}
}

function registerWithManager(manager) {
	return manager.registerServiceFactory(ServiceUTI);
}

export {
	registerWithManager,
	ServiceUTI
};
