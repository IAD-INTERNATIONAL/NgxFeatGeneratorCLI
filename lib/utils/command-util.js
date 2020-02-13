"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var CommandUtil = /** @class */ (function () {
    function CommandUtil(config) {
        this.config = config;
    }
    /**
     * Return the component name in kebab.
     */
    CommandUtil.prototype.getKebabComponentName = function () {
        return this.config.treeItem.name.substring(this.config.treeItem.name.lastIndexOf('/') + 1);
    };
    /**
     * Return the component name in camel case.
     */
    CommandUtil.prototype.getCamelCaseComponentName = function () {
        var compoCamel = lodash_1.camelCase(this.getKebabComponentName());
        compoCamel = "" + compoCamel.charAt(0).toUpperCase() + compoCamel.slice(1) + lodash_1.capitalize(this.config.treeItem.type);
        return compoCamel;
    };
    /**
     * Return the ng prefix path according tree type.
     */
    CommandUtil.prototype.getPrefixPath = function () {
        var prefix = this.config.treeItem.name;
        switch (this.config.treeItem.type) {
            case 'service':
            case 'guard':
                prefix = this.config.treeItem.name.substring(0, this.config.treeItem.name.lastIndexOf('/') + 1);
                break;
        }
        return prefix;
    };
    return CommandUtil;
}());
exports.CommandUtil = CommandUtil;
