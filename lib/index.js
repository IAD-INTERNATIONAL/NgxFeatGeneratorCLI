#!/usr/bin/env node
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var command_builder_class_1 = require("./builder/command-builder.class");
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
clear();
console.log(chalk.green(figlet.textSync('ngx-feat-gen-cli', { horizontalLayout: 'full' })));
program
    .version('0.0.3')
    .description('Ngx CLI for generating Angular feature directory from a json config input file')
    .option('-f, --file-config <type>', 'JSON input config file', function (value) { return JSON.parse(fs.readFileSync(value).toString()); })
    .parse(process.argv);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
else {
    var builder = new command_builder_class_1.CommandBuilder(program.fileConfig);
    builder.build().forEach(function (command) { return command.execute(); });
}
