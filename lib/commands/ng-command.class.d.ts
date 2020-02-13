import { AbstractCommand } from './abstract-command.class';
import { CommandConfig } from '../models/command-config.interface';
export declare class NgCommand extends AbstractCommand {
    private config;
    constructor(config: CommandConfig);
    /**
     * Method which execute the ng command.
     */
    execute(): void;
}
