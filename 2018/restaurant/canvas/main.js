// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  var num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

/**
 * 
 * @param {开始x坐标} x 
 * @param {开始y坐标} y 
 * @param {水平速度} velX 
 * @param {竖直速度} velY 
 * @param {球的颜色} color 
 * @param {球的大小(半径)} size 
 */

function Ball(x, y, velX, velY, color, size) {
  this.x     = x;
  this.y     = y;
  this.velX  = velX;
  this.velY  = velY;
  this.color = color;
  this.size  = size;
}

Ball.prototype.draw = function () {
  // 起始一条路径，或重置当前路径，此处为重置路径，声明要开始画图形了
  ctx.beginPath();
  // 设置或返回用于填充绘画的颜色、渐变或模式
  ctx.fillStyle = this.color;
  // 创建弧/曲线(用于创建圆形或部分圆)
  // x 中心x坐标，y 中心y坐标。 r 圆的半径， sAngle起始角，以弧度计算，eAngle结束角
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  // 填充当前绘画（路径）
  ctx.fill();
}

// 碰撞到边缘后反向运动
Ball.prototype.update = function () {
  // 检查小球的x坐标是否大于画布的宽度(小球会从右图廓离开).
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }
  // 检查小球的x坐标是否小于0(小球会从左图廓离开).
  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }
  // 检查小球的y坐标是否大于画布的高度(小球会从下图廓离开).
  if ((this.y - this.size) >= height) {
    this.velY = -(this.velY);
  }
  // 检查小球的y坐标是否小于0(小球会从上图廓离开).
  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

// 碰撞检测
Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    // 判断当前碰撞检测的小球是否是小球本身
    if (!(this === balls[j])) {
      var dx       = this.x - balls[j].x;
      var dy       = this.y - balls[j].y;
      // 求出当前两个小球圆心的距离
      var distance = Math.sqrt(dx * dx + dy * dy);

      // 两个小球距离是否小于两个小球半径之和
      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
      }
    }
  }
}

// 存放小球的数组
var balls = [];

function loop() {
  // 画布变成半透明黑色
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 25) {
    var ball = new Ball(
      random(0, width),
      random(0, height),
      random(-7, 7),
      random(-7, 7),
      'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
      random(10, 20)
    );
    balls.push(ball);
  }
  // 把小球画出来
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }
  // 通过递归完成，得到一个平滑的动画效果
  requestAnimationFrame(loop);
}

// 运行
loop();
