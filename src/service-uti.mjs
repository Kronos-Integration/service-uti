import { join,dirname } from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { UTIController } from "uti";
import { Service } from '@kronos-integration/service';

/**
 * UTI provider
 */
export default class ServiceUTI extends Service {
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

    this.controller.register(
      JSON.parse(
        await fs.promises.readFile(join(dirname(fileURLToPath(import.meta.url)), "..", "uti.json"), {
          encoding: "utf8"
        })
      )
    );
  }
}
