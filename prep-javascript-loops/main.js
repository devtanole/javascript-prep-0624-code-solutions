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

const object = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const arrayToReturn = [];
  for (const key in object) {
    arrayToReturn.push(key);
  }
  return arrayToReturn;
}

console.log('forInLoop1Result', forInLoop1(object));

function forInLoop2(object) {
  const arrayToReturn = [];
  for (const key in object) {
    arrayToReturn.push(object[key]);
  }
  return arrayToReturn;
}

console.log('forInLoop2Result', forInLoop2(object));
