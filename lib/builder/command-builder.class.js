"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandBuilder = void 0;
var ng_command_class_1 = require("../commands/ng-command.class");
var isolated_spec_command_class_1 = require("../commands/isolated-spec-command.class");
var CommandBuilder = /** @class */ (function () {
    function CommandBuilder(config) {
        this.config = config;
        this.commands = [];
    }
    /**
     * Build commands from feature config input file.
     */
    CommandBuilder.prototype.build = function () {
        var _this = this;
        this.config.tree.forEach(function (tree) {
            var _a;
            var commandConfig = {
                projectPath: _this.config.projectPath,
                treeItem: tree
            };
            _this.commands.push(new ng_command_class_1.NgCommand(commandConfig));
            // add extra command if test isolated is specified.
            ((_a = tree.extra) === null || _a === void 0 ? void 0 : _a.isolatedTest) && _this.commands.push(new isolated_spec_command_class_1.IsolatedSpecCommand(commandConfig));
        });
        return this.commands;
    };
    return CommandBuilder;
}());
exports.CommandBuilder = CommandBuilder;
