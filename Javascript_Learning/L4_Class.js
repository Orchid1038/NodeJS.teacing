//Title - Class
//constructor 初始化物件的特殊方法
/*
constructor --建構子
一個class 只能有一個constructor
*/
class Circle {
  constructor(r) {
    this.aaa = r;
  }
  getArea() {
    return this.aaa * this.aaa * Math.PI;
  }
}

let c1 = new Circle(4);
console.log(c1.aaa);
console.log(c1.getArea());
