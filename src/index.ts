#!/usr/bin/env node

import * as fs from 'fs';
import { CommandBuilder } from './builder/command-builder.class';
import { AbstractCommand } from './commands/abstract-command.class';

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();
console.log(chalk.green(figlet.textSync('ngx-feat-gen-cli', { horizontalLayout: 'full' })));

program
  .version('0.0.1')
  .description('Ngx CLI for generating Angular feature directory from a json config input file')
  .option('-f, --file-config <type>', 'JSON input config file', (value: string) => JSON.parse(fs.readFileSync(value).toString()))
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
} else {
  const builder = new CommandBuilder(program.fileConfig);
  builder.build().forEach((command: AbstractCommand) => command.execute());
}
