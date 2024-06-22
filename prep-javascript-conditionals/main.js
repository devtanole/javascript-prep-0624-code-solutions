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

function didStudentPass(score) {
  if (score >= 70) {
    console.log('true');
  } else {
    console.log('false');
  }
  return score >= 70;
}
const didStudentPassResult = didStudentPass(72);
console.log('the student passed:', didStudentPassResult);
