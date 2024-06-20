const person = {
  firstName: 'Devin',
  lastName: ' Olesen',
  hobby: 'Training Muay Thai',
  job: 'Cook',
  previousJob: 'eating',
};
console.log(person);

const fullName = person.firstName + '' + person.lastName;
console.log("The person's name is:", fullName);
console.log("The person's current job is:", person.job);
console.log("The person's previous job is:", person['previousJob']);
