let counter = 10;
let numbers = [];
for (let index = 0; index < 10; index++) {
  counter += 73;
  numbers.push(counter);
}
console.log(numbers);
if (numbers > 740) {
  console.log('Maximum number exceeded.');
} else {
  console.log('Array values within range.');
}
function getStats(numberList) {
  const stats = {};
  let minValue = Infinity;
  let maxValue = -Infinity;
  for (let item of numberList) {
    if (item < minValue) {
      minValue = item;
    }
    if (item > maxValue) {
      maxValue = item;
    }
    stats.largest = maxValue;
  }
  let sum = 0;
  for (let index = 0; index < numberList.length; index++) {
    sum += numberList[index];
  }
  let total = sum;
  stats.average = total / numberList.length;
  return stats;
}
// console.log(getStats(numbers));
getStats(numbers);
let counterStats = getStats(numbers);
let result1 = counterStats;
console.log(
  'The largest number was',
  result1.largest,
  ' and the average was',
  result1.average
);
