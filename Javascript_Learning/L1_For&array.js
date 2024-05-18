/* Array 陣列 
JS for loop
*/
let a = ["zoe", "Ron", "Snap"]; //array
//for
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
  console.log(i);
}
//forEach
a.forEach((person, index) => {
  console.log(person);
  console.log(index);
});
