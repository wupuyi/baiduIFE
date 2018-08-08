function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
// 即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。
// 不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。
function inheritPrototype(subType, superType) {
  // 创建对象
  var prototype = object(superType.prototype);
  // 增强对象
  prototype.constructor = subType;
  // 指定对象
  subType.prototype = prototype;
}

// 对上面两个函数进行合并
function myExtend(subType, superType) {
   function F() {}
   F.prototype = superType.prototype;
   var prototype = new F();
   prototype.constructor = subType;
   subType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
}

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

inheritPrototype(subType, superType);

subType.prototype.sayAge = function () {
  console.log(this.age);
}