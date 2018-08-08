// 本质上讲，object对传入其中的对象执行了一次浅复制
function object(o) {
  function F() {}
  F.prototype = o;
  return new F(); 
}

var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}

var anotherPerson = object(person);
anotherPerson.name = 'Greg';
anotherPerson.friends.push('Rob');

// Object.create()

var person2 = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}

var anotherPerson2 = Object.create(person);
anotherPerson2.name = 'Greg';
anotherPerson2.friends.push('Rob');