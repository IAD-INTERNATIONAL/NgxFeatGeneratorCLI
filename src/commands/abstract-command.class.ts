import { CommandUtil } from '../utils/command-util';
import { CommandConfig } from '../models/command-config.interface';

export abstract class AbstractCommand {
  protected commandUtil: CommandUtil;

  constructor(config: CommandConfig) {
    this.commandUtil = new CommandUtil(config);
  }

  abstract execute(): void;
}
