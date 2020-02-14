import { CommandBuilder } from './command-builder.class';

describe('CommandBuilder', () => {
  let builder: CommandBuilder;

  describe('build()', () => {
    it('should build an array of 2 ngCommands', () => {
      builder = new CommandBuilder({
        feature: 'broadcast',
        projectPath: 'test/project',
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

      const commands = builder.build();

      expect(commands).toHaveLength(2);
    });

    it('should build an array of 2 ngCommands & 1 isolated test command', () => {
      builder = new CommandBuilder({
        feature: 'broadcast',
        projectPath: 'test/project',
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

      const commands = builder.build();

      expect(commands).toHaveLength(3);
    });
  });
});
