export interface TreeItem {
    type: 'component' | 'module' | 'interface' | 'guard' | 'enum' | 'service' | 'spec';
    name: string;
    opts?: string;
    extra?: ExtraConfig;
}
export interface ExtraConfig {
    isolatedTest: boolean;
}
