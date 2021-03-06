IndexDB是浏览器提供的本地数据库，允许存储大量数据，提供查找接口，还能建立索引。
IndexDB更接近NoSql。

特点：
+ 键值对存储：IndexDB内部采用对象仓库（object store）存储数据。所有类型的数据都可以直接存入。数据以键值对的形式保存，每一条数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出异常。
+ 异步：IndexDB操作时不会锁死浏览器用户依旧可以进行其他操作。目的：防止大量数据读写，拖慢网页速度。
+ 支持事务：只要有一步操作失败，,整个事务就都可以取消，不存在只改写一部分数据的情况。
+ 同源限制：IndexDB受同源限制，每一个数据库对应他创建的域名。网页只能访问自生域名下的数据库，而不能 访问跨域下的数据库。
+ 存储空间大：没有限制
+ 支持二进制数据存储

### 概念

####数据库
数据库是一系列相关数据的容器。每个域名（严格的说，是协议 + 域名 + 端口）都可以新建任意多个数据库。
IndexedDB 数据库有版本的概念。同一个时刻，只能有一个版本的数据库存在。如果要修改数据库结构（新增或删除表、索引或者主键），只能通过升级数据库版本完成。

####对象仓库
每个数据库包含若干个仓库，类似于关系型数据库的表格
####数据记录
对象仓库保存的是数据记录。每条记录类似于关系型数据库的行，但是只有主键和数据体两部分。主键用来建立默认的索引，必须是不同的，否则会报错。主键可以是数据记录里面的一个属性，也可以指定为一个递增的整数编号。
```
{ id: 1, text: 'foo' }
```
上面的对象中，id属性可以当作主键。数据体可以是任意数据类型，不限于对象。

####索引
为了加速数据的检索，可以在对象仓库里面，为不同的属性建立索引。

####事务
数据记录的读写和删改，都要通过事务完成。事务对象提供`error`、`abort`和`complete`三个事件，用来监听操作结果。

###操作流程
####打开数据库
使用 IndexedDB 的第一步是打开数据库，使用`indexedDB.open()`方法
```
var request = window.indexDB.open(databaseName, version);
```
open(databaseName, version)     
string databaseName：数据库名   
int version：版本  
  
若数据库不存在就会新建数据库。如果version省略，默认为1     

open方法返回一个 `IDBRequest` 对象，这个对象通过三种事件error、success、upgradeneeded，处理打开数据库的操作结果。

#### error事件
error事件表示打开数据库失败
```
request.onerror = function(event){
    console.log('打开数据库失败');
}
```
#### success事件
success事件表示成功打开数据库
```
var db;
request.onsuccess = function(event){
    //拿到数据库对象
    db = request.result;    
    console.log('数据库打开成功');
}
```
#### upgradeneeded事件
```
```

