import { CommandUtil } from './command-util';

describe('CommandUtil', () => {
  let commandUtil: CommandUtil;

  beforeEach(
    () =>
      (commandUtil = new CommandUtil({
        projectPath: 'test/fake-ng-project',
        treeItem: { type: 'service', name: 'broadcast/components/real-estate-card' }
      }))
  );

  describe('getKebabComponentName()', () => {
    it('should return componentName in kebab case', () => {
      expect(commandUtil.getKebabComponentName()).toEqual('real-estate-card');
    });
  });

  describe('getCamelCaseComponentName()', () => {
    it('should return componentName in camel case', () => {
      expect(commandUtil.getCamelCaseComponentName()).toEqual('RealEstateCardService');
    });
  });

  describe('getPrefixPath()', () => {
    it('should return ng prefix item path without item name if not a guard or service', () => {
      expect(commandUtil.getPrefixPath()).toEqual('broadcast/components/');
    });

    it('should return ng prefix item path with item name if guard or service', () => {
        commandUtil['config'].treeItem.type = 'component';
        expect(commandUtil.getPrefixPath()).toEqual('broadcast/components/real-estate-card');
      });
  });  
});
