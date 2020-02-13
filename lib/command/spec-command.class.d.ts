import { CommandConfig } from '../models/command-config.interface';
import { AbstractCommand } from './abstract-command.class';
export declare class SpecCommand extends AbstractCommand {
    private config;
    constructor(config: CommandConfig);
    /**
     * Method which execute the isolated spec generation command.
     */
    execute(): void;
    /**
     * Return the component name in kebab.
     */
    private getKebabComponentName;
    /**
     * Return the component name in camel case.
     */
    private getCamelCaseComponentName;
    /**
     * Return the ng prefix path according tree type.
     */
    private getPrefixPath;
}
