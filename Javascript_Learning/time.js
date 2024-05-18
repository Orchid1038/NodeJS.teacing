function fun1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function fun2(n) {
  return ((1 + n) * n) / 2;
}

let time1 = window.performance.now();
fun1(100000);
let time2 = window.performance.now();
let timeDiff1 = (time2 - time1) / 1000;
console.log(`It takes ${timeDiff1} seconds run fun1`);

let time3 = window.performance.now();
fun2(100000);
let time4 = window.performance.now();
let timeDiff2 = (time4 - time3) / 1000;
console.log(`It takes ${timeDiff2} seconds run fun2`);
