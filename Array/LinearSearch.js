//LinearSearch
//(Sequential Search)

/*its an algorithm that sequentially checks each element of list until a match is found*/

/*array*/

/*index*/
//a b c d ... z
//0 1 2 3
//find  c
//index 2

//we will try to find a num inside an array -> return the index
//else -> return -1

//JAVA C# CPP/C C-Objective
/*
Pseudocode(偽代碼) -> 表達用
-
LINEAR-SEARCH(array, n)   -> array[]  n->number
for i from 0 to array.length - 1     //(0->length-1)
    if(array[i] == n)
        return i
return -1
*/

let numbers = [
  99, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 33,
];

//worst case performance O(n)
//best case performance O(1)
//Average performance O(n/2)
//ES6規範 不能用單字作為變數名稱，第一個單字要小寫
function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      console.log("found number " + n + " at index " + i);
      return i;
    }
  }
  console.log("connot find" + n);
  return -1;
}

linearSearch(numbers, 99);

//陣列有元素跟index
//point

// Server (node.js -> Express)
//  └ sql
//  └ powershell
//  └ RESTFul api
//  └ crud
//  └ api file
//  └ docker --
//  └ k8s --
//  └ aws ec2 or gcp --

// Cilent (node.js -> Vue3)
//  └ routers
//  └ components
//  └ Typescript
//  └ post sqldata
//  └ html css

// CICD
// git

// js -> 弱型別  ts -> 強型別
