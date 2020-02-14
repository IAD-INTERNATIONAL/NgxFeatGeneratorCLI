"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isolated_spec_command_class_1 = require("./isolated-spec-command.class");
jest.mock('fs', function () {
    return {
        readFileSync: jest.fn().mockReturnValue('my custom tpl'),
        writeFileSync: jest.fn()
    };
});
describe('IsolatedSpecCommand', function () {
    var command;
    beforeEach(function () { });
    describe('execute()', function () {
        it('should create an isolated spec command for component creation', function () {
            command = new isolated_spec_command_class_1.IsolatedSpecCommand({
                projectPath: 'test/project',
                treeItem: { type: 'component', name: 'broadcast/components/real-estate-card', extra: { isolatedTest: true } }
            });
            command.execute();
            expect(require('fs').writeFileSync).toHaveBeenCalledWith('./test/project/src/app/broadcast/components/real-estate-card/real-estate-card.component.spec.ts', 'my custom tpl');
        });
    });
});
