import * as fs from 'fs';
import { CommandConfig } from '../models/command-config.interface';
import { AbstractCommand } from './abstract-command.class';

const chalk = require('chalk');

export class IsolatedSpecCommand extends AbstractCommand {
  constructor(private config: CommandConfig) {
    super(config);
  }

  /**
   * Method which execute the isolated spec generation command.
   */
  execute(): void {
    let specTpl = fs.readFileSync(`./templates/isolated-spec.template.txt`).toString();
    specTpl = specTpl.replace(/%component%/g, this.commandUtil.getCamelCaseComponentName());
    specTpl = specTpl.replace(/%component-path%/g, `${this.commandUtil.getKebabComponentName()}.${this.config.treeItem.type}`);
    const specPath = `./${this.config.projectPath}/src/app/${this.commandUtil.getPrefixPath()}/${this.commandUtil.getKebabComponentName()}.${
      this.config.treeItem.type
    }.spec.ts`;
    fs.writeFileSync(specPath, specTpl);
    console.log(chalk.white(`UPDATE ${specPath} (isolated test)`));
  }
}
