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
var lodash_1 = require("lodash");
var abstract_command_class_1 = require("./abstract-command.class");
var SpecCommand = /** @class */ (function (_super) {
    __extends(SpecCommand, _super);
    function SpecCommand(config) {
        var _this = _super.call(this) || this;
        _this.config = config;
        return _this;
    }
    /**
     * Method which execute the isolated spec generation command.
     */
    SpecCommand.prototype.execute = function () {
        var specTpl = fs.readFileSync("./templates/isolated-spec.template.txt").toString();
        specTpl = specTpl.replace(/%component%/g, this.getCamelCaseComponentName());
        specTpl = specTpl.replace(/%component-path%/g, this.getKebabComponentName() + "." + this.config.treeItem.type);
        fs.writeFileSync("./" + this.config.projectPath + "/src/app/" + this.getPrefixPath() + "/" + this.getKebabComponentName() + "." + this.config.treeItem.type + ".spec.ts", specTpl);
    };
    /**
     * Return the component name in kebab.
     */
    SpecCommand.prototype.getKebabComponentName = function () {
        return this.config.treeItem.name.substring(this.config.treeItem.name.lastIndexOf('/') + 1);
    };
    /**
     * Return the component name in camel case.
     */
    SpecCommand.prototype.getCamelCaseComponentName = function () {
        var compoCamel = lodash_1.camelCase(this.getKebabComponentName());
        compoCamel = "" + compoCamel.charAt(0).toUpperCase() + compoCamel.slice(1) + lodash_1.capitalize(this.config.treeItem.type);
        return compoCamel;
    };
    /**
     * Return the ng prefix path according tree type.
     */
    SpecCommand.prototype.getPrefixPath = function () {
        var prefix = this.config.treeItem.name;
        switch (this.config.treeItem.type) {
            case 'service':
            case 'guard':
                prefix = this.config.treeItem.name.substring(0, this.config.treeItem.name.lastIndexOf('/') + 1);
                break;
        }
        return prefix;
    };
    return SpecCommand;
}(abstract_command_class_1.AbstractCommand));
exports.SpecCommand = SpecCommand;
