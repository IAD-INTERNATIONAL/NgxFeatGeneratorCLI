import { NgCommand } from './ng-command.class';

jest.mock('child_process', () => {
  return {
    execSync: jest.fn()
  };
});

describe('NgCommand', () => {
  let ngCommand: NgCommand;

  beforeEach(() => {});

  describe('execute()', () => {
    it('should create a command line for component creation', () => {
      ngCommand = new NgCommand({
        projectPath: 'test/project',
        treeItem: { type: 'component', name: 'broadcast/components/real-estate-card' }
      });
      ngCommand.execute();
      expect(
        require('child_process').execSync
      ).toHaveBeenCalledWith('cd test/project && ng g component broadcast/components/real-estate-card', { stdio: 'inherit' });
    });

    it('should create a command line for component creation with options', () => {
      ngCommand = new NgCommand({
        projectPath: 'test/project',
        treeItem: {
          type: 'component',
          name: 'broadcast/components/real-estate-card',
          opts: '--changeDetection=OnPush --module=broadcast/broadcast.module.ts'
        }
      });
      ngCommand.execute();
      expect(
        require('child_process').execSync
      ).toHaveBeenCalledWith(
        'cd test/project && ng g component broadcast/components/real-estate-card --changeDetection=OnPush --module=broadcast/broadcast.module.ts',
        { stdio: 'inherit' }
      );
    });

    it('should create a command line for service creation', () => {
      ngCommand = new NgCommand({
        projectPath: 'test/project',
        treeItem: {
          type: 'component',
          name: 'broadcast/service/broadcast'
        }
      });
      ngCommand.execute();
      expect(require('child_process').execSync).toHaveBeenCalledWith('cd test/project && ng g component broadcast/service/broadcast', {
        stdio: 'inherit'
      });
    });
  });

  it('should create a command line for guard creation', () => {
    ngCommand = new NgCommand({
      projectPath: 'test/project',
      treeItem: {
        type: 'guard',
        name: 'broadcast/shared/guard/elysium-guard'
      }
    });
    ngCommand.execute();
    expect(require('child_process').execSync).toHaveBeenCalledWith('cd test/project && ng g guard broadcast/shared/guard/elysium-guard', {
      stdio: 'inherit'
    });
  });

  it('should create a command line for guard creation with options', () => {
    ngCommand = new NgCommand({
      projectPath: 'test/project',
      treeItem: {
        type: 'guard',
        name: 'broadcast/shared/guard/elysium-guard',
        opts: "--implements=CanActivate",
      }
    });
    ngCommand.execute();
    expect(require('child_process').execSync).toHaveBeenCalledWith('cd test/project && ng g guard broadcast/shared/guard/elysium-guard --implements=CanActivate', {
      stdio: 'inherit'
    });
  });

  it('should create a command line for interface creation', () => {
    ngCommand = new NgCommand({
      projectPath: 'test/project',
      treeItem: {
        type: 'interface',
        name: 'broadcast/shared/models/cart-item',
      }
    });
    ngCommand.execute();
    expect(require('child_process').execSync).toHaveBeenCalledWith('cd test/project && ng g interface broadcast/shared/models/cart-item', {
      stdio: 'inherit'
    });
  });

  it('should create a command line for enum creation', () => {
    ngCommand = new NgCommand({
      projectPath: 'test/project',
      treeItem: {
        type: 'enum',
        name: 'broadcast/shared/models/cart-item-type',
      }
    });
    ngCommand.execute();
    expect(require('child_process').execSync).toHaveBeenCalledWith('cd test/project && ng g enum broadcast/shared/models/cart-item-type', {
      stdio: 'inherit'
    });
  });
});
