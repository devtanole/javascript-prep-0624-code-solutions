/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) {
    console.log('this person is an adult');
  } else {
    console.log('this person is not an adult');
  }
  return age >= 18;
}
const isAdultResult = isAdult(17);
console.log('this person is an adult:', isAdultResult);
