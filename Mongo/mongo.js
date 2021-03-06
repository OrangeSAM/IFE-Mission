// 往数据库中插入数据

// let userName = "sam";
// let timeStamp = Date.parse(new Date());
// let jsonDataBase = { loginName: userName, loginTime: timeStamp };

// var db = connect("log");
// db.login.insert(jsonDataBase);

// 往数据库中批量插入数据
// 循环单个插入 和 单次批量插入

var startTime = new Date().getTime();
var db = connect("log");

// 循环操作  时间 358ms
// for (let i = 0; i < 1000; i++) {
//   db.test.insert({ num: 1 });
// }

// 批量操作  时间 27ms
var tempArr = [];
for (let i = 0; i < 1000; i++) {
  tempArr.push({ num: 1 });
}
db.test.insert(tempArr);

var runTime = new Date().getTime() - startTime;

print("i am done the run is " + runTime + "ms");
