"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var command_util_1 = require("./command-util");
describe('CommandUtil', function () {
    var commandUtil;
    beforeEach(function () {
        return (commandUtil = new command_util_1.CommandUtil({
            projectPath: 'test/fake-ng-project',
            treeItem: { type: 'service', name: 'broadcast/components/real-estate-card' }
        }));
    });
    describe('getKebabComponentName()', function () {
        it('should return componentName in kebab case', function () {
            expect(commandUtil.getKebabComponentName()).toEqual('real-estate-card');
        });
    });
    describe('getCamelCaseComponentName()', function () {
        it('should return componentName in camel case', function () {
            expect(commandUtil.getCamelCaseComponentName()).toEqual('RealEstateCardService');
        });
    });
    describe('getPrefixPath()', function () {
        it('should return ng prefix item path without item name if not a guard or service', function () {
            expect(commandUtil.getPrefixPath()).toEqual('broadcast/components/');
        });
        it('should return ng prefix item path with item name if guard or service', function () {
            commandUtil['config'].treeItem.type = 'component';
            expect(commandUtil.getPrefixPath()).toEqual('broadcast/components/real-estate-card');
        });
    });
});
