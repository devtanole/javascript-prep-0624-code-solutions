// create your loops here.
let numArray = [];
let whileLoop1 = 0;
while (whileLoop1 < 10) {
  numArray.push(whileLoop1);
  whileLoop1++;
}
let whileLoop1Result = whileLoop1;
console.log('numArray ', numArray);

let numArray2 = [];
let whileLoop2 = 0;
while (whileLoop2 < 20) {
  numArray2.push(whileLoop2);
  whileLoop2 += 2;
}
let whileLoop2Result = whileLoop2;
console.log('numArray2 ', numArray2);

function forLoop1() {
  let numArray3 = [];
  for (let index = 0; index < 10; index++) {
    numArray3.push(index);
    console.log(numArray3[index]);
  }
}
let forLoop1Result = forLoop1();
console.log('forLoop1Result', forLoop1Result);

function forLoop2() {
  let numArray4 = [];
}
