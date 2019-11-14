import { UTIController } from "uti";
import { Service } from "kronos-service";
import { join } from "path";
import fs from "fs";

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
        await fs.promises.readFile(join(__dirname, "..", "uti.json"), {
          encoding: "utf8"
        })
      )
    );
  }
}
