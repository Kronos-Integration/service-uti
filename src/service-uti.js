import { UTIController } from 'uti';
import { Service } from 'kronos-service';
import { join } from 'path';

/**
 * UTI provider
 */
export class ServiceUTI extends Service {
  /**
   * @return {string} 'uti'
   */
  static get name() {
    return 'uti';
  }

  /**
   * Always start
   * @return {boolean} true
   */
  get autostart() {
    return true;
  }

  async _start() {
    this.controller = new UTIController();
    await this.controller.initializeBuildin();

    await this.controller.loadDefinitionsFromFile(
      join(__dirname, '..', 'uti.json')
    );
  }
}

export function registerWithManager(manager) {
  return manager.registerServiceFactory(ServiceUTI);
}
