"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MssqlDB_1 = require("./db/MssqlDB");
var User_1 = require("./modle/User");
var u = new User_1.User();
u.username = 'zs';
u.password = 'zs123';
var mysql = new MssqlDB_1.MssqlDB();
mysql.add(u);
