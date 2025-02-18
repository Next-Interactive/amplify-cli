"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaString = void 0;
var array_1 = require("./array");
var integer_1 = require("./integer");
var JavaString = /** @class */ (function () {
    function JavaString(str) {
        this.value = str;
    }
    JavaString.prototype.concat = function (str) {
        return new JavaString(this.value.concat(str.toString()));
    };
    JavaString.prototype.contains = function (str) {
        return this.value.indexOf(str.toString()) !== -1;
    };
    JavaString.prototype.endsWith = function (suffix) {
        return this.value.endsWith(suffix.toString());
    };
    JavaString.prototype.equals = function (str) {
        return this.value === str.toString();
    };
    JavaString.prototype.indexOf = function (val, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        return new integer_1.JavaInteger(this.value.indexOf(val.toString(), fromIndex));
    };
    JavaString.prototype.isEmpty = function () {
        return this.value.length === 0;
    };
    JavaString.prototype.lastIndexOf = function (val, fromIndex) {
        if (fromIndex === void 0) { fromIndex = Infinity; }
        return new integer_1.JavaInteger(this.value.lastIndexOf(val.toString(), fromIndex));
    };
    JavaString.prototype.replace = function (find, replace) {
        return this.replaceAll(find, replace);
    };
    JavaString.prototype.replaceAll = function (find, replace) {
        var rep = this.value.replace(new RegExp(find, 'g'), replace);
        return new JavaString(rep);
    };
    JavaString.prototype.replaceFirst = function (find, replace) {
        var rep = this.value.replace(new RegExp(find), replace);
        return new JavaString(rep);
    };
    JavaString.prototype.matches = function (regexString) {
        var re = new RegExp(regexString.toString());
        return this.value.match(re) !== null;
    };
    JavaString.prototype.split = function (regexString, limit) {
        // WARNING: this assumes Java and JavaScript regular expressions are identical, according to
        // https://en.wikipedia.org/wiki/Comparison_of_regular_expression_engines#Language_features
        // this should be the case except for look-behind which is not implemented in JavaScript
        if (limit === void 0) { limit = undefined; }
        // java.util.String.split does not to include the separator in the result. JS does splice any capturing group
        // in the regex into the result. To remove the groups from the result we need the count of capturing groups in
        // the provided regex, the only way in JS seems to be via a match to an empty string
        var testRe = new RegExp(regexString.toString() + "|");
        var numberOfGroups = ''.match(testRe).length; // actually num of groups plus one, ie "" and the (empty) groups
        var re = new RegExp(regexString.toString());
        var result = this.value.split(re, limit).filter(function (v, ii) { return !(ii % numberOfGroups); });
        return new array_1.JavaArray(result, function (e) { return new JavaString(e.toString()); });
    };
    JavaString.prototype.startsWith = function (prefix, offset) {
        if (offset === void 0) { offset = 0; }
        return this.value.startsWith(prefix.toString(), offset);
    };
    JavaString.prototype.substring = function (beginIndex, endIndex) {
        if (endIndex === void 0) { endIndex = Infinity; }
        return this.value.substring(beginIndex, endIndex);
    };
    JavaString.prototype.toJSON = function () {
        return this.toString();
    };
    JavaString.prototype.toLowerCase = function () {
        return new JavaString(this.value.toLowerCase());
    };
    JavaString.prototype.toUpperCase = function () {
        return new JavaString(this.value.toUpperCase());
    };
    JavaString.prototype.toString = function () {
        return this.value;
    };
    JavaString.prototype.toIdString = function () {
        return this.value;
    };
    JavaString.prototype.trim = function () {
        return new JavaString(this.value.trim());
    };
    JavaString.prototype.length = function () {
        return new integer_1.JavaInteger(this.value && this.value.length);
    };
    JavaString.prototype.toJson = function () {
        return this.value;
    };
    return JavaString;
}());
exports.JavaString = JavaString;
//# sourceMappingURL=string.js.map