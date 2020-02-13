import { CommandUtil } from '../utils/command-util';
import { CommandConfig } from '../models/command-config.interface';
export declare abstract class AbstractCommand {
    protected commandUtil: CommandUtil;
    constructor(config: CommandConfig);
    abstract execute(): void;
}
