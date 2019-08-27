// // class Person {
// //   protected name: string;

// //   constructor(name: string) {
// //     this.name = name;
// //   }
// //   run(): string {
// //     return `${this.name} is moving`;
// //   }
// // }

// // // var p:Person = new Person('zs');
// // // console.log(p.run());

// // class Web extends Person {
// //   constructor(name: string) {
// //     super(name);
// //   }
// //   public work() {
// //     console.log(this.name);
// //   }
// // }

// // var w: Web = new Web('ls');
// // console.log(w.run());

// // w.work()

// // class Person {
// //   public name: string;
// //   static sex: 'nan';
// //   constructor(name: string) {
// //     this.name = name;
// //   }
// //   run() {
// //     console.log(`${this.name} is running`);
// //   }

// //   work() {
// //     console.log(`${this.name} is working`);
// //   }

// //   static print() {
// //     console.log('print ' + Person.sex);
// //   }

// // }

// // Person.print();


// // abstract class Animal {
// //   public name: string;
// //   constructor(name: string) {
// //     this.name = name;
// //   }
// //   abstract eat(): string;
// // }

// // class Dog extends Animal {
// //   constructor(name: string) {
// //     super(name)
// //   }
// //   eat() {
// //     return 'dog ' + this.name + ' meal'
// //   }
// // }

// // class Cat extends Animal {

// //   constructor(name: string) {
// //     super(name);
// //   }
// //   eat() {
// //     return 'cat ' + this.name + ' mice'
// //   }
// // }

// // var d: Dog = new Dog('111');
// // console.log(d.eat());


// // var c: Cat = new Cat('222');
// // console.log(c.eat());

// // function printLabel(): void {
// //   console.log('printLabel');
// // }
// // printLabel();
// // function printLabel(label:string): void {
// //   console.log('printLabel');
// // }
// // printLabel('sss');

// // function printLabel(labelInfo: { label: string }): void {
// //   console.log('printLabel');
// // }
// // printLabel({ label: '3' });

// // interface FullName {
// //   firstName: string;
// //   lastName?: string;
// // }

// // function printName(name: FullName): void {
// //   console.log(name.firstName + '--' + name.lastName);
// // }

// // // 只能包含firstName，lastName
// // printName({ firstName: 'json' })

// // interface encrypt {
// //   (key: string, value: string): string;
// // }

// // var md5 = function (key: string, value: string): string {
// //   return key + value;
// // }

// // console.log(md5('name','zs'));


// // interface UserArr {
// //   [index: number]: string
// // }

// // var user: UserArr = ['cc', 'dd']

// // interface UserOb {
// //   [index: string]: string
// // }

// // var user: UserOb = {
// //   "name": 'son',
// //   age: '12',
// //   2: 'd'
// // }



// // interface Animal {
// //   eat(): void;
// // }

// // interface Person extends Animal {
// //   work(): void;
// // }

// // class Web implements Person {

// //   private name: string;

// //   constructor(name: string) {
// //     this.name = name;
// //   }

// //   work(): void {
// //     console.log(this.name + '  ccc');

// //   }

// //   eat(): void {
// //     console.log(this.name + ' dd');

// //   }

// // }

// // var web:Web = new Web('xx');
// // web.eat();
// // web.work();


// // 只能返回 string 类型的数据
// // function getData1(value: string): string {
// //   return value;
// // }

// // // 同时返回 string 类型和 number 类型
// // function getData<T>(value: T): T {
// //   return value;
// // }
// // console.log(getData<number>(221));
// // console.log(getData<string>('1dd23'));

// // class MinClass<T> {
// //   public list: T[] = [];

// //   add(num: T): void {
// //     this.list.push(num);
// //   }

// //   min(): T {
// //     var minNum = this.list[0];
// //     for (let i = 0; i < this.list.length; i++) {
// //       if (minNum > this.list[i]) {
// //         minNum = this.list[i];
// //       }
// //     }
// //     return minNum;
// //   }
// // }

// // var m = new MinClass<string>();
// // m.add('b');
// // m.add('a');
// // m.add('e');
// // console.log(m.min());


// // 函数类型接口
// // interface ConfigFn<T> {
// //   (value: T): T;
// // }

// // var getData: ConfigFn = function <T>(value: T) {
// //   return value;
// // }

// // function _getData<T>(value: T): T {
// //   return value;
// // }

// // var getData:ConfigFn<string>  = _getData;

// // console.log(getData('zs')); // yes
// // console.log(getData(11));   // no

// class User {
//   private _username: string = '';
//   private _password: string = '';

//   get username(): string {
//     return this._username;
//   }

//   set username(value: string) {
//     this._username = value;
//   }

//   get password(): string {
//     return this._password;
//   }

//   set password(value: string) {
//     this._password = value;
//   }
// }

// class ArticleCate {
//   title: string | undefined;
//   desc: string | undefined;
//   status: number | undefined;
//   constructor(params: { title: string | undefined, desc: string | undefined, status?: number | undefined, }) {
//     this.title = params.title;
//     this.desc = params.desc;
//     this.status = params.status;
//   }
// }

// class MysqlDb<T> {
//   add(t: T): boolean {
//     console.log(t);

//     return true;
//   }
// }

// var u = new User();
// u.username = 'zz'
// u.password = '222'

// var a = new ArticleCate({
//   title: 'rr',
//   desc: '333',
//   status: 2
// });
// // a.desc = 'xxx'
// // a.title = "zz"
// // a.status = 1

// var db = new MysqlDb<ArticleCate>();
// // db.add(u);
// db.add(a);




