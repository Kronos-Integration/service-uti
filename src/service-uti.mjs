import { UTIController } from "uti";
import { Service } from "@kronos-integration/service";
import additional from "./additional-utis.mjs";

/**
 * UTI provider
 */
export class ServiceUTI extends Service {
  /**
   * @return {string} 'uti'
   */
  static get name() {
    return "uti";
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
    this.controller.register(additional);
  }
}

export default ServiceUTI;
