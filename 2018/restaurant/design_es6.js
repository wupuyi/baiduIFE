// 餐厅类
// 属性：金钱，座位数量、职员列表
// 方法：招聘职员，解雇职员
class Rastaurant {
  constructor (money, seat, staff) {
    this.money = money;
    this.seat = seat;
    this.staff = staff;
  }
  // 招聘
  recruitment () {
  }
  // 解雇
  dismissal () {
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
class Chef extends Staff {
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