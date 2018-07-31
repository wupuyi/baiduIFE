// 餐厅类
// 属性：金钱，座位数量、职员列表
// 方法：招聘职员，解雇职员
class Restaurant {
  constructor (money, seat, staff) {
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
  hire (worker) {
    this.staff.push(worker);
  }
  // 解雇
  fire (id) {
    this.staff.splice(id, 1);
  }
}

// 职员类
// 属性：ID，姓名，工资
// 方法：完成一次工作
class Staff {
  constructor (id, name, wage) {
    this.id = id;
    this.name = name;
    this.wage = wage;
  }
  // 完成一次工作
  finishWork () {
  }
}

// 服务员类，继承自职员
// 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
class Waiter extends Staff {
  constructor (id, name, wage) {
    super(id, name, wage);
  }
  // 完成一次工作
  finishWork () {
  }
}

// 厨师类，继承自职员
// 完成一次工作：烹饪出菜品
class Cook extends Staff {
  constructor (id, name, wage) {
    super(id, name, wage);
  }
  // 完成一次工作
  finishWork () {
  }
}

// 顾客类
// 方法：点菜，吃
class Customer {
  constructor() {
  }
  // 点菜
  orderDishes () {
  }
  // 吃
  eat () {
  }
}

// 菜品类
// 属性：名字、烹饪成本、价格
class Dishes {
  constructor (name, cost, price) {
    this.name = name;
    this.cost = cost;
    this,price = price;
  }
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