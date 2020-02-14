import { IsolatedSpecCommand } from './isolated-spec-command.class';

jest.mock('fs', () => {
  return {
    readFileSync: jest.fn().mockReturnValue('my custom tpl'),
    writeFileSync: jest.fn()
  };
});

describe('IsolatedSpecCommand', () => {
  let command: IsolatedSpecCommand;

  beforeEach(() => {});

  describe('execute()', () => {
    it('should create an isolated spec command for component creation', () => {
      command = new IsolatedSpecCommand({
        projectPath: 'test/fake-ng-project',
        treeItem: { type: 'component', name: 'broadcast/components/real-estate-card', extra: { isolatedTest: true } }
      });
      command.execute();
      expect(require('fs').writeFileSync).toHaveBeenCalledWith('./test/fake-ng-project/src/app/broadcast/components/real-estate-card/real-estate-card.component.spec.ts', 'my custom tpl');
    });
  });
});
