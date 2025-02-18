"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSyncPipelineResolver = void 0;
var base_resolver_1 = require("./base-resolver");
var AppSyncPipelineResolver = /** @class */ (function (_super) {
    __extends(AppSyncPipelineResolver, _super);
    function AppSyncPipelineResolver(config, simulatorContext) {
        var _this = _super.call(this, config, simulatorContext) || this;
        _this.config = config;
        try {
            config.functions.map(function (fn) { return simulatorContext.getFunction(fn); });
        }
        catch (e) {
            throw new Error("Invalid config for PIPELINE_RESOLVER " + JSON.stringify(config));
        }
        var fieldName = config.fieldName, typeName = config.typeName;
        if (!fieldName || !typeName) {
            throw new Error("Invalid config for PIPELINE_RESOLVER.FieldName or typeName is missing.\n " + JSON.stringify(config));
        }
        _this.config = config;
        return _this;
    }
    AppSyncPipelineResolver.prototype.resolve = function (source, args, context, info) {
        return __awaiter(this, void 0, void 0, function () {
            var requestMappingTemplate, responseMappingTemplate, result, stash, templateErrors, isReturn, hadException, prevResult, _i, _a, fnName, fnResolver;
            var _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        requestMappingTemplate = this.getRequestMappingTemplate();
                        responseMappingTemplate = this.getResponseMappingTemplate();
                        result = {};
                        stash = {};
                        // Pipeline request mapping template
                        (_b = requestMappingTemplate.render({ source: source, arguments: args, stash: stash }, context, info), result = _b.result, stash = _b.stash, templateErrors = _b.errors, isReturn = _b.isReturn, hadException = _b.hadException, args = _b.args);
                        context.appsyncErrors = __spreadArray(__spreadArray([], context.appsyncErrors, true), (templateErrors || []), true);
                        if (isReturn || hadException) {
                            //Request mapping template called #return or an exception occurred, don't process further
                            return [2 /*return*/, result];
                        }
                        prevResult = result;
                        _i = 0, _a = this.config.functions;
                        _e.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        fnName = _a[_i];
                        fnResolver = this.simulatorContext.getFunction(fnName);
                        return [4 /*yield*/, fnResolver.resolve(source, args, stash, prevResult, context, info)];
                    case 2:
                        (_c = _e.sent(), prevResult = _c.result, stash = _c.stash, hadException = _c.hadException, args = _c.args);
                        // If an exception occurred, do not continue processing.
                        if (hadException) {
                            return [2 /*return*/, prevResult];
                        }
                        _e.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        // pipeline response mapping template
                        (_d = responseMappingTemplate.render({ source: source, arguments: args, result: prevResult, prevResult: prevResult, stash: stash }, context, info), result = _d.result, templateErrors = _d.errors);
                        context.appsyncErrors = __spreadArray(__spreadArray([], context.appsyncErrors, true), (templateErrors || []), true);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return AppSyncPipelineResolver;
}(base_resolver_1.AppSyncBaseResolver));
exports.AppSyncPipelineResolver = AppSyncPipelineResolver;
//# sourceMappingURL=pipeline-resolver.js.map