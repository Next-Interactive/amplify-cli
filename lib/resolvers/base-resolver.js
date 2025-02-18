"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSyncBaseResolver = void 0;
var velocity_1 = require("../velocity");
var AppSyncBaseResolver = /** @class */ (function () {
    function AppSyncBaseResolver(config, simulatorContext) {
        this.config = config;
        this.simulatorContext = simulatorContext;
        try {
            this.getResponseMappingTemplate();
        }
        catch (e) {
            throw new Error("Missing response mapping template " + e.message);
        }
        try {
            this.getRequestMappingTemplate();
        }
        catch (e) {
            throw new Error("Missing request mapping template " + e.message);
        }
    }
    // abstract async resolve(source, args, context, info): Promise<any>;
    AppSyncBaseResolver.prototype.getResponseMappingTemplate = function () {
        if (this.config.responseMappingTemplate) {
            return new velocity_1.VelocityTemplate({
                path: 'INLINE_TEMPLATE',
                content: this.config.responseMappingTemplate,
            }, this.simulatorContext);
        }
        return this.simulatorContext.getMappingTemplate(this.config.responseMappingTemplateLocation);
    };
    AppSyncBaseResolver.prototype.getRequestMappingTemplate = function () {
        if (this.config.requestMappingTemplate) {
            return new velocity_1.VelocityTemplate({
                path: 'INLINE_TEMPLATE',
                content: this.config.requestMappingTemplate,
            }, this.simulatorContext);
        }
        return this.simulatorContext.getMappingTemplate(this.config.requestMappingTemplateLocation);
    };
    return AppSyncBaseResolver;
}());
exports.AppSyncBaseResolver = AppSyncBaseResolver;
//# sourceMappingURL=base-resolver.js.map