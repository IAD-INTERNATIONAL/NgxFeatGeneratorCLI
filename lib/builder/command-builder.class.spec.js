"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command_builder_class_1 = require("./command-builder.class");
describe('CommandBuilder', function () {
    var builder;
    describe('build()', function () {
        it('should build an array of 2 ngCommands', function () {
            builder = new command_builder_class_1.CommandBuilder({
                feature: 'broadcast',
                projectPath: 'test/fake-ng-project',
                tree: [
                    {
                        type: 'module',
                        name: 'broadcast',
                        opts: '--routing=true'
                    },
                    {
                        type: 'component',
                        name: 'broadcast/components/real-estate-card',
                        opts: '--changeDetection=OnPush --module=broadcast/broadcast.module.ts'
                    }
                ]
            });
            var commands = builder.build();
            expect(commands).toHaveLength(2);
        });
        it('should build an array of 2 ngCommands & 1 isolated test command', function () {
            builder = new command_builder_class_1.CommandBuilder({
                feature: 'broadcast',
                projectPath: 'test/fake-ng-project',
                tree: [
                    {
                        type: 'module',
                        name: 'broadcast',
                        opts: '--routing=true'
                    },
                    {
                        type: 'component',
                        name: 'broadcast/components/real-estate-card',
                        opts: '--changeDetection=OnPush --module=broadcast/broadcast.module.ts',
                        extra: { isolatedTest: true }
                    }
                ]
            });
            var commands = builder.build();
            expect(commands).toHaveLength(3);
        });
    });
});
