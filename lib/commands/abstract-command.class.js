"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCommand = void 0;
var command_util_1 = require("../utils/command-util");
var AbstractCommand = /** @class */ (function () {
    function AbstractCommand(config) {
        this.commandUtil = new command_util_1.CommandUtil(config);
    }
    return AbstractCommand;
}());
exports.AbstractCommand = AbstractCommand;
