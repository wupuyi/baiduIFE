function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
// 即创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真地是它做了所有工作一样返回对象。
function createAnother(original) {
  var clone = object(original);     // 通过调用函数创建一个新对象
  clone.sayHi = function () {       // 以某种方式来增强这个对象
    console.log('hi');
  };
  return clone;           // 返回这个对象
}

var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}

var anotherPerson = createAnother(person);
anotherPerson.sayHi();    // 'hi'