function whileLoop1() {
  const arrayToReturn = [];
  let index = 0;
  while (index < 10) {
    arrayToReturn.push(index);
    index++;
  }
  return arrayToReturn;
}

console.log('whileLoop1Result', whileLoop1());

function whileLoop2() {
  const arrayToReturn = [];
  let index = 0;
  while (index < 20) {
    arrayToReturn.push(index);
    index += 2;
  }
  return arrayToReturn;
}

console.log('whileLoop2Result', whileLoop2());

function forLoop1() {
  const arrayToReturn = [];
  for (let index = 0; index < 10; index++) {
    arrayToReturn.push(index);
  }
  return arrayToReturn;
}

console.log('forLoop1Result', forLoop1());

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time till explosion ' + index + '!');
  }
}
forLoop2();
