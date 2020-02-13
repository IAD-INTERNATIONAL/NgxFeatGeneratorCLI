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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var abstract_command_class_1 = require("./abstract-command.class");
var chalk = require('chalk');
var IsolatedSpecCommand = /** @class */ (function (_super) {
    __extends(IsolatedSpecCommand, _super);
    function IsolatedSpecCommand(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        return _this;
    }
    /**
     * Method which execute the isolated spec generation command.
     */
    IsolatedSpecCommand.prototype.execute = function () {
        var specTpl = fs.readFileSync("./templates/isolated-spec.template.txt").toString();
        specTpl = specTpl.replace(/%component%/g, this.commandUtil.getCamelCaseComponentName());
        specTpl = specTpl.replace(/%component-path%/g, this.commandUtil.getKebabComponentName() + "." + this.config.treeItem.type);
        var specPath = "./" + this.config.projectPath + "/src/app/" + this.commandUtil.getPrefixPath() + "/" + this.commandUtil.getKebabComponentName() + "." + this.config.treeItem.type + ".spec.ts";
        fs.writeFileSync(specPath, specTpl);
        console.log(chalk.white("UPDATE " + specPath + " (isolated test)"));
    };
    return IsolatedSpecCommand;
}(abstract_command_class_1.AbstractCommand));
exports.IsolatedSpecCommand = IsolatedSpecCommand;
