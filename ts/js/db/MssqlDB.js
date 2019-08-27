"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MssqlDB = /** @class */ (function () {
    function MssqlDB() {
    }
    MssqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
        // throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.update = function (info, id) {
        return true;
        // throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.delete = function (id) {
        return true;
        // throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.get = function (id) {
        return [];
        // throw new Error("Method not implemented.");
    };
    return MssqlDB;
}());
exports.MssqlDB = MssqlDB;
