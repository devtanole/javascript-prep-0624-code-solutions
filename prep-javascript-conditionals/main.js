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
const didStudentPassResult = didStudentPass(69);
console.log('the student passed:', didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}
const gradeCalculatorResult = gradeCalculator(84);
console.log(gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}
const seasonMessengerResult = seasonMessenger('winter');
console.log(seasonMessengerResult);
