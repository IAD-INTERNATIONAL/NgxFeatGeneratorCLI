import { CommandConfig } from '../models/command-config.interface';
export declare class CommandUtil {
    private config;
    constructor(config: CommandConfig);
    /**
     * Return the component name in kebab.
     */
    getKebabComponentName(): string;
    /**
     * Return the component name in camel case.
     */
    getCamelCaseComponentName(): string;
    /**
     * Return the ng prefix path according tree type.
     */
    getPrefixPath(): string;
}
