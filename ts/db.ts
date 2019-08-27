import { MssqlDB } from "./db/MssqlDB";
import { User } from "./modle/User";

var u = new User();
u.username = 'zs';
u.password = 'zs123';

var mysql = new MssqlDB<User>();

mysql.add(u);


