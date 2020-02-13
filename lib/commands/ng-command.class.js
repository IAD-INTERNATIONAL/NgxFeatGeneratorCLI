"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var abstract_command_class_1 = require("./abstract-command.class");
var NgCommand = /** @class */ (function (_super) {
    __extends(NgCommand, _super);
    function NgCommand(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        return _this;
    }
    /**
     * Method which execute the ng command.
     */
    NgCommand.prototype.execute = function () {
        var _a;
        var command = "cd " + this.config.projectPath + " && ng g " + this.config.treeItem.type + " " + this.config.treeItem.name + " " + (_a = this.config.treeItem
            .opts, (_a !== null && _a !== void 0 ? _a : ''));
        child_process_1.execSync(command, { stdio: 'inherit' });
    };
    return NgCommand;
}(abstract_command_class_1.AbstractCommand));
exports.NgCommand = NgCommand;
