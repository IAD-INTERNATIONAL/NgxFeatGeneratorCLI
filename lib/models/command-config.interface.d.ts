import { FeatureConfig } from './feature-config.interface';
import { TreeItem } from './tree-item.interface';
export declare type CommandConfig = Pick<FeatureConfig, 'projectPath'> & {
    treeItem: TreeItem;
};
