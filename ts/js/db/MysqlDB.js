"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    MysqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
        // throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.update = function (info, id) {
        return true;
        // throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.delete = function (id) {
        return true;
        // throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.get = function (id) {
        return [];
        // throw new Error("Method not implemented.");
    };
    return MysqlDB;
}());
exports.MysqlDB = MysqlDB;
