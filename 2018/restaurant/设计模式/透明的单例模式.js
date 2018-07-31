// 反面的单例模式的例子

// 这样编写单例模式的缺点：

// 为了把instance封装起来，我们使用了自执行的匿名函数和闭包，并且让这个匿名函数返回真正的Singleton构造方法，这增加了一些程序的复杂度。

// CreateDiv的构造函数负责了两件事情。1.创建对像和执行初始化init方法，第二是保证只有一个对象。不符合设计模式中的单一职责的概念。

var CreateDiv = (function () {
  var instance;
  var CreateDiv = function (html) {
    if (instance) {
      return instance;
    }
    this.html = html;
    this.init();
    return instance = this;
  };

  CreateDiv.prototype.init = function () {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
  }

  return CreateDiv;

})();

var a = new CreateDiv('seven1');
var b = new CreateDiv('seven2');