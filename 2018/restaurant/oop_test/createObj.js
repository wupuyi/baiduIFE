/**
 * 
 * 
 *工厂模式
 * 
 * 
 */
function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}

var person1 = createPerson('Nicholas', 29, 'Software Engineer');
var person2 = createPerson('Greg', 27, 'Doctor');

/***
 * 
 * 
 * 构造函数模式
 * 
 * 
 */

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    console.log(this.name);
  }
}

var person3 = new Person('Nicholas', 29, 'Software Engineer');
var person4 = new Person('Greg', 27, 'Doctor');


/***
 *
 * 
 * 原型模式
 * 
 *  
 */
function Person2() {}

Person2.prototype.name = 'Nicholas';
Person2.prototype.age = 29;
Person2.prototype.job = 'Software Engineer';
Person2.prototype.sayName = function () {
  console.log(this.name);
}

var person5 = new Person2();
var person6 = new Person2();


/***
 * 
 * 
 * 组合使用构造函数模式和原型模式
 * 
 * 
 */
function Person3(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.firends = ['Shelby', 'Court'];
}

Person3.prototype = {
  constructor : Person3,
  sayName : function () {
    console.log(this.name);
  }
}

/***
 * 
 * 
 * 动态原型模式
 * 
 * 
 */
function Person6(name, age, job) {
  // 属性
  this.name = name;
  this.age = age;
  this.job = job;

  // 方法
  if (typeof this.sayName != 'function') {
    Person6.prototype.sayName = function () {
      console.log(this.name);
    };
  }
}


/***
 * 
 * 
 * 寄生构造函数模式
 * 
 * 
 */
function Person7(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function () {
    console.log(this.name);
  };
  return o;
}

// 可以在特殊情况下用来为对象创建构造函数，假设想创建一个具有额外方法的特殊数组

function SpecialArray() {
  // 创建数组
  var values = new Array();

  // 添加值
  values.push.apply(valuse, arguments);

  // 添加方法
  values.toPipedString = function () {
    return this.join('|');
  }

  // 返回数组
  return values;
}

var colors = new SpecialArray('red', 'blue', 'green');
console.log(colors.toPipedString());         // 'red|blue|green'


/***
 * 
 * 
 * 稳妥构造函数模式
 * 
 * 
 */
function Person8(name, age, job) {
  // 创建要返回的对象
  var o = new Object();

  // 可以在这里定义私有变量和函数

  // 添加方法
  o.sayName = function () {
    console.log(name)      // 没有了this
  }

  // 返回对象
  return o;
}
