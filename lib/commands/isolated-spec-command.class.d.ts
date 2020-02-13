import { CommandConfig } from '../models/command-config.interface';
import { AbstractCommand } from './abstract-command.class';
export declare class IsolatedSpecCommand extends AbstractCommand {
    private config;
    constructor(config: CommandConfig);
    /**
     * Method which execute the isolated spec generation command.
     */
    execute(): void;
}
