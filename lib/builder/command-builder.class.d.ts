import { FeatureConfig } from '../models/feature-config.interface';
import { AbstractCommand } from '../commands/abstract-command.class';
export declare class CommandBuilder {
    private config;
    private commands;
    constructor(config: FeatureConfig);
    /**
     * Build commands from feature config input file.
     */
    build(): AbstractCommand[];
}
