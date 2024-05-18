/*
Complexity (IMPORTENT)

AND

Big O Natation
*/

/*
What is Algorithm

Algorithm is a finite squence of well-defined computer-implementable instruction

-> to solve a class of problem or to perform a computation

-------
ez ver.

step by step procedure
to solve a problem

*/

/*
google map
youtube Know what videos you might want to watch
excel sheet sorts your financial statements in either descending order 
*/

/*

Compare algorithms

*/

//BIG O
// 1 + 2 + 3 + ... + n = sum
function fun1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    //o(n)
    sum += i;
  }
  return sum;
}
console.log(fun1(10));

function fun2(n) {
  return ((1 + n) * n) / 2; //o(1)
}
console.log(fun2(10));

/*Complexity(adj.)  時間複雜度  */

/*
**comparison 比較 (> < >= <= = etc...)
generally, every `+ - * /` ,comparison counts as one operation


complexity means given an input size, "how many operations do we need perform in an algorithm"?

*/
