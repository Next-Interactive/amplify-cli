"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
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
exports.DynamoDBDataLoader = void 0;
var aws_sdk_1 = require("aws-sdk");
var utils_1 = require("./utils");
var DynamoDBDataLoader = /** @class */ (function () {
    function DynamoDBDataLoader(ddbConfig) {
        this.ddbConfig = ddbConfig;
        var _a = ddbConfig.config, tableName = _a.tableName, endpoint = _a.endpoint;
        if (!tableName || !endpoint) {
            throw new Error("Invalid DynamoDBConfig " + JSON.stringify(ddbConfig, null, 4));
        }
        this.tableName = tableName;
        this.client = new aws_sdk_1.DynamoDB(__assign(__assign({}, ddbConfig.config), ddbConfig.options));
    }
    DynamoDBDataLoader.prototype.load = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 20, , 21]);
                        _a = payload.operation;
                        switch (_a) {
                            case "GetItem": return [3 /*break*/, 1];
                            case "PutItem": return [3 /*break*/, 3];
                            case "UpdateItem": return [3 /*break*/, 5];
                            case "DeleteItem": return [3 /*break*/, 7];
                            case "Query": return [3 /*break*/, 9];
                            case "Scan": return [3 /*break*/, 11];
                            case "DeleteAllItems": return [3 /*break*/, 13];
                            case "BatchGetItem": return [3 /*break*/, 15];
                            case "BatchPutItem": return [3 /*break*/, 17];
                            case "BatchDeleteItem": return [3 /*break*/, 17];
                        }
                        return [3 /*break*/, 18];
                    case 1: return [4 /*yield*/, this.getItem(payload)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, this.putItem(payload)];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [4 /*yield*/, this.updateItem(payload)];
                    case 6: return [2 /*return*/, _b.sent()];
                    case 7: return [4 /*yield*/, this.deleteItem(payload)];
                    case 8: return [2 /*return*/, _b.sent()];
                    case 9: return [4 /*yield*/, this.query(payload)];
                    case 10: return [2 /*return*/, _b.sent()];
                    case 11: return [4 /*yield*/, this.scan(payload)];
                    case 12: return [2 /*return*/, _b.sent()];
                    case 13: return [4 /*yield*/, this.deleteAllItems()];
                    case 14: return [2 /*return*/, _b.sent()];
                    case 15: return [4 /*yield*/, this.batchGetItem(payload)];
                    case 16: return [2 /*return*/, _b.sent()];
                    case 17: throw new Error("Operation  " + payload.operation + " not implemented");
                    case 18: throw new Error("Unknown operation name: " + payload.operation);
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        e_1 = _b.sent();
                        if (e_1.code) {
                            console.log("Error while executing Local DynamoDB");
                            console.log(JSON.stringify(payload, null, 4));
                            console.log(e_1);
                            e_1.extensions = { errorType: "DynamoDB:" + e_1.code };
                        }
                        throw e_1;
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    // Deletes all records from the DynamoDB local table
    DynamoDBDataLoader.prototype.deleteAllItems = function () {
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function () {
            var items, items_1, items_1_1, item, e_2_1, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 15, , 16]);
                        return [4 /*yield*/, this.getAllItems()];
                    case 1:
                        items = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 8, 9, 14]);
                        items_1 = __asyncValues(items);
                        _b.label = 3;
                    case 3: return [4 /*yield*/, items_1.next()];
                    case 4:
                        if (!(items_1_1 = _b.sent(), !items_1_1.done)) return [3 /*break*/, 7];
                        item = items_1_1.value;
                        return [4 /*yield*/, this.client
                                .deleteItem({
                                TableName: this.tableName,
                                Key: { id: item.id },
                                ReturnValues: "ALL_OLD"
                            })
                                .promise()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 3];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(items_1_1 && !items_1_1.done && (_a = items_1.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(items_1)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        e_3 = _b.sent();
                        throw new Error("Error while deleting all items from " + this.tableName);
                    case 16: return [2 /*return*/, [this.tableName]];
                }
            });
        });
    };
    // Gets all the records from the DynamoDB local table
    DynamoDBDataLoader.prototype.getAllItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var items, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = [];
                        return [4 /*yield*/, this.client.scan({ TableName: this.tableName }).promise()];
                    case 1:
                        data = _a.sent();
                        items = __spreadArray(__spreadArray([], items, true), data.Items, true);
                        _a.label = 2;
                    case 2:
                        if (!(typeof data.LastEvaluatedKey !== "undefined")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.client
                                .scan({
                                TableName: this.tableName,
                                ExclusiveStartKey: data.LastEvaluatedKey
                            })
                                .promise()];
                    case 3:
                        data = _a.sent();
                        items = __spreadArray(__spreadArray([], items, true), data.Items, true);
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/, items];
                }
            });
        });
    };
    DynamoDBDataLoader.prototype.batchGetItem = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, Responses, UnprocessedKeys;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.client
                            .batchGetItem({
                            RequestItems: (0, utils_1.mapTableObject)(payload.tables, function (request) {
                                var keys = request.keys, _a = request.consistentRead, consistentRead = _a === void 0 ? false : _a;
                                return { Keys: keys, ConsistentRead: consistentRead };
                            })
                        })
                            .promise()];
                    case 1:
                        _a = _b.sent(), Responses = _a.Responses, UnprocessedKeys = _a.UnprocessedKeys;
                        return [2 /*return*/, {
                                data: (0, utils_1.mapTableObject)(Responses, function (items) {
                                    return items.map(function (item) { return (0, utils_1.unmarshall)(item); });
                                }),
                                unprocessedKeys: (0, utils_1.mapTableObject)(UnprocessedKeys || {}, function (request) {
                                    return request.Keys.map(function (key) { return (0, utils_1.unmarshall)(key); });
                                })
                            }];
                }
            });
        });
    };
    DynamoDBDataLoader.prototype.getItem = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, consistentRead, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = payload.consistentRead, consistentRead = _a === void 0 ? false : _a;
                        return [4 /*yield*/, this.client
                                .getItem({
                                TableName: this.tableName,
                                Key: payload.key,
                                ConsistentRead: consistentRead
                            })
                                .promise()];
                    case 1:
                        result = _b.sent();
                        if (!result.Item)
                            return [2 /*return*/, null];
                        return [2 /*return*/, (0, utils_1.unmarshall)(result.Item)];
                }
            });
        });
    };
    DynamoDBDataLoader.prototype.putItem = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var key, attributeValues, _a, _b, _c, 
            // we only provide limited support for condition update expressions.
            expression, _d, expressionNames, _e, expressionValues;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        key = payload.key, attributeValues = payload.attributeValues, _a = payload.condition, _b = _a === void 0 ? {} : _a, _c = _b.expression, expression = _c === void 0 ? null : _c, _d = _b.expressionNames, expressionNames = _d === void 0 ? null : _d, _e = _b.expressionValues, expressionValues = _e === void 0 ? null : _e;
                        return [4 /*yield*/, this.client
                                .putItem({
                                TableName: this.tableName,
                                Item: __assign(__assign({}, attributeValues), key),
                                ConditionExpression: expression,
                                ExpressionAttributeNames: expressionNames,
                                ExpressionAttributeValues: expressionValues
                            })
                                .promise()];
                    case 1:
                        _f.sent();
                        // put does not return us anything useful so we need to fetch the object.
                        return [2 /*return*/, this.getItem({ key: key, consistentRead: true })];
                }
            });
        });
    };
    DynamoDBDataLoader.prototype.query = function (_a) {
        var keyCondition = _a.query, filter = _a.filter, index = _a.index, nextToken = _a.nextToken, limit = _a.limit, _b = _a.scanIndexForward, scanIndexForward = _b === void 0 ? true : _b, _c = _a.consistentRead, consistentRead = _c === void 0 ? false : _c, select = _a.select;
        return __awaiter(this, void 0, void 0, function () {
            var params, _d, items, scannedCount, _e, resultNextToken;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        keyCondition = keyCondition || { expression: null };
                        filter = filter || { expression: null };
                        params = {
                            TableName: this.tableName,
                            KeyConditionExpression: keyCondition.expression,
                            FilterExpression: filter.expression,
                            ExpressionAttributeValues: (0, utils_1.nullIfEmpty)(__assign(__assign({}, (filter.expressionValues || {})), (keyCondition.expressionValues || {}))),
                            ExpressionAttributeNames: (0, utils_1.nullIfEmpty)(__assign(__assign({}, (filter.expressionNames || {})), (keyCondition.expressionNames || {}))),
                            ExclusiveStartKey: nextToken
                                ? JSON.parse(Buffer.from(nextToken, "base64").toString())
                                : null,
                            IndexName: index,
                            Limit: limit,
                            ConsistentRead: consistentRead,
                            ScanIndexForward: scanIndexForward,
                            Select: select || "ALL_ATTRIBUTES"
                        };
                        return [4 /*yield*/, this.client.query(params).promise()];
                    case 1:
                        _d = _f.sent(), items = _d.Items, scannedCount = _d.ScannedCount, _e = _d.LastEvaluatedKey, resultNextToken = _e === void 0 ? null : _e;
                        return [2 /*return*/, {
                                items: items.map(function (item) { return (0, utils_1.unmarshall)(item); }),
                                scannedCount: scannedCount,
                                nextToken: resultNextToken
                                    ? Buffer.from(JSON.stringify(resultNextToken)).toString("base64")
                                    : null
                            }];
                }
            });
        });
    };
    DynamoDBDataLoader.prototype.updateItem = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var key, _a, update, _b, condition, params, updated;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        key = payload.key, _a = payload.update, update = _a === void 0 ? {} : _a, _b = payload.condition, condition = _b === void 0 ? {} : _b;
                        params = {
                            TableName: this.tableName,
                            Key: key,
                            UpdateExpression: update.expression,
                            ConditionExpression: condition.expression,
                            ReturnValues: "ALL_NEW",
                            ExpressionAttributeNames: (0, utils_1.nullIfEmpty)(__assign(__assign({}, (condition.expressionNames || {})), (update.expressionNames || {}))),
                            ExpressionAttributeValues: (0, utils_1.nullIfEmpty)(__assign(__assign({}, (condition.expressionValues || {})), (update.expressionValues || {})))
                        };
                        return [4 /*yield*/, this.client
                                .updateItem(params)
                                .promise()];
                    case 1:
                        updated = (_c.sent()).Attributes;
                        return [2 /*return*/, (0, utils_1.unmarshall)(updated)];
                }
            });
        });
    };
    DynamoDBDataLoader.prototype.deleteItem = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var key, _a, _b, _c, 
            // we only provide limited support for condition update expressions.
            expression, _d, expressionNames, _e, expressionValues, deleted;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        key = payload.key, _a = payload.condition, _b = _a === void 0 ? {} : _a, _c = _b.expression, expression = _c === void 0 ? null : _c, _d = _b.expressionNames, expressionNames = _d === void 0 ? null : _d, _e = _b.expressionValues, expressionValues = _e === void 0 ? null : _e;
                        return [4 /*yield*/, this.client
                                .deleteItem({
                                TableName: this.tableName,
                                Key: key,
                                ReturnValues: "ALL_OLD",
                                ConditionExpression: expression,
                                ExpressionAttributeNames: expressionNames,
                                ExpressionAttributeValues: expressionValues
                            })
                                .promise()];
                    case 1:
                        deleted = (_f.sent()).Attributes;
                        return [2 /*return*/, (0, utils_1.unmarshall)(deleted)];
                }
            });
        });
    };
    DynamoDBDataLoader.prototype.scan = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, index, limit, _a, consistentRead, nextToken, select, totalSegments, segment, params, _b, items, scannedCount, _c, resultNextToken;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        filter = payload.filter, index = payload.index, limit = payload.limit, _a = payload.consistentRead, consistentRead = _a === void 0 ? false : _a, nextToken = payload.nextToken, select = payload.select, totalSegments = payload.totalSegments, segment = payload.segment;
                        params = {
                            TableName: this.tableName,
                            ExclusiveStartKey: nextToken
                                ? JSON.parse(Buffer.from(nextToken, "base64").toString())
                                : null,
                            IndexName: index,
                            Limit: limit,
                            ConsistentRead: consistentRead,
                            Select: select || "ALL_ATTRIBUTES",
                            Segment: segment,
                            TotalSegments: totalSegments
                        };
                        if (filter) {
                            Object.assign(params, {
                                FilterExpression: filter.expression,
                                ExpressionAttributeNames: (0, utils_1.nullIfEmpty)(__assign({}, (filter.expressionNames || undefined))),
                                ExpressionAttributeValues: __assign({}, (filter.expressionValues || undefined))
                            });
                        }
                        return [4 /*yield*/, this.client.scan(params).promise()];
                    case 1:
                        _b = _d.sent(), items = _b.Items, scannedCount = _b.ScannedCount, _c = _b.LastEvaluatedKey, resultNextToken = _c === void 0 ? null : _c;
                        return [2 /*return*/, {
                                items: items.map(function (item) { return (0, utils_1.unmarshall)(item); }),
                                scannedCount: scannedCount,
                                nextToken: resultNextToken
                                    ? Buffer.from(JSON.stringify(resultNextToken)).toString("base64")
                                    : null
                            }];
                }
            });
        });
    };
    return DynamoDBDataLoader;
}());
exports.DynamoDBDataLoader = DynamoDBDataLoader;
//# sourceMappingURL=index.js.map