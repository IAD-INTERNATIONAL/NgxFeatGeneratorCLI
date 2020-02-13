import { FeatureConfig } from '../models/feature-config.interface';
import { NgCommand } from '../commands/ng-command.class';
import { TreeItem } from '../models/tree-item.interface';
import { AbstractCommand } from '../commands/abstract-command.class';
import { IsolatedSpecCommand } from '../commands/isolated-spec-command.class';

export class CommandBuilder {
  private commands: AbstractCommand[];

  constructor(private config: FeatureConfig) {
    this.commands = [];
  }

  /**
   * Build commands from feature config input file.
   */
  build(): AbstractCommand[] {
    this.config.tree.forEach((tree: TreeItem) => {
      const commandConfig = {
        projectPath: this.config.projectPath,
        treeItem: tree
      };

      this.commands.push(new NgCommand(commandConfig));

      // add extra command if test isolated is specified.
      tree.extra?.isolatedTest && this.commands.push(new IsolatedSpecCommand(commandConfig));
    });
    return this.commands;
  }
}
