import { UTIController } from 'uti';
import { Service } from 'kronos-service';

const path = require('path');

/**
 *
 */
export class ServiceUTI extends Service {
  static get name() {
    return 'uti';
  }

  get autostart() {
    return true;
  }

  async _start() {
    this.controller = new UTIController();
    await this.controller.initializeBuildin();

    await this.controller.loadDefinitionsFromFile(
      path.join(__dirname, '..', 'uti.json')
    );
  }
}

export function registerWithManager(manager) {
  return manager.registerServiceFactory(ServiceUTI);
}
