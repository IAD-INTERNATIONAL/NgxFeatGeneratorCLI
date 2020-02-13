import { execSync } from 'child_process';
import { AbstractCommand } from './abstract-command.class';
import { CommandConfig } from '../models/command-config.interface';

export class NgCommand extends AbstractCommand {
  constructor(private config: CommandConfig) {
    super(config);
  }

  /**
   * Method which execute the ng command.
   */
  execute(): void {
    const command = `cd ${this.config.projectPath} && ng g ${this.config.treeItem.type} ${this.config.treeItem.name} ${this.config.treeItem
      .opts ?? ''}`;
    execSync(command, { stdio: 'inherit' });
  }
}
