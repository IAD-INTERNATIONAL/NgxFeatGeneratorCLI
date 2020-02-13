import { CommandConfig } from '../models/command-config.interface';
import { camelCase, capitalize } from 'lodash';

export class CommandUtil {
  constructor(private config: CommandConfig) {}

  /**
   * Return the component name in kebab.
   */
  getKebabComponentName(): string {
    return this.config.treeItem.name.substring(this.config.treeItem.name.lastIndexOf('/') + 1);
  }

  /**
   * Return the component name in camel case.
   */
  getCamelCaseComponentName(): string {
    let compoCamel = camelCase(this.getKebabComponentName());
    compoCamel = `${compoCamel.charAt(0).toUpperCase()}${compoCamel.slice(1)}${capitalize(this.config.treeItem.type)}`;
    return compoCamel;
  }

  /**
   * Return the ng prefix path according tree type.
   */
  getPrefixPath(): string {
    let prefix = this.config.treeItem.name;
    switch (this.config.treeItem.type) {
      case 'service':
      case 'guard':
        prefix = this.config.treeItem.name.substring(0, this.config.treeItem.name.lastIndexOf('/') + 1);
        break;
    }
    return prefix;
  }
}
