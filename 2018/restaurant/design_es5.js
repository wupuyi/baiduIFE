// 继承原型
function myExtend (sub, sup) {
  function F() {};
  F.prototype = sup.prototype;

  var prototype = new F();
  prototype.constructor = sub;
  sub.prototype = prototype;
}



// 餐厅类
// 属性：金钱，座位数量、职员列表
// 方法：招聘职员，解雇职员
function Restaurant(cash, seats, staff) {
  if (typeof arguments[0] === 'object') {
    this.cash = arguments[0].cash;
    this.seats = arguments[0].seats;
    this.staff = arguments[0].staff;
  } else {
    this.cash = cash;
    this.seats = seats;
    this.staff = staff;
  }
}
// 招聘
Restaurant.prototype.hire = function (worker) {
  this.staff.push(worker);
}
// 解雇
Restaurant.prototype.fire = function (id) {
  this.staff.splice(id, 1);
}



// 职员类
// 属性：ID，姓名，工资
// 方法：完成一次工作
function Staff(id, name, wage) {
  this.id = id;
  this.name = name;
  this.wage = wage;
}
// 完成一次工作
Staff.prototype.finishWork = function () {
}



// 服务员类，继承自职员
// 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
function Waiter(id, name, wage) {
  Staff.call(this, id, name, wage);
}
// 继承
myExtend(Waiter, Staff);
// 完成一次工作
Waiter.prototype.finishWork = function (params) {
  if (params instanceof Array) {
  } else {
  }
}



// 厨师类，继承自职员
// 完成一次工作：烹饪出菜品
function Cook(id, name, wage) {
  Staff.call(this, id, name, wage);
}
// 继承
myExtend(Cook, Staff);
// 完成一次工作
Cook.prototype.finishWork = function () {
}



// 顾客类
// 方法：点菜，吃
function Customer() {
}
// 点菜
Customer.prototype.orderDishes = function () {
}
// 吃
Customer.prototype.eat = function () {
}



// 菜品类
// 属性：名字、烹饪成本、价格
function dishes(name, cost, price) {
  this.name = name;
  this.cost = cost;
  this.price = price;
}

var ifeRestaurant = new Restaurant({
  cash: 1000000,
  seats: 20,
  staff: []
});

var newCook = new Cook(ifeRestaurant.staff.length, "Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);