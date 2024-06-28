function head(array) {
  const input = ['foo', 'bar', 'baz'];
  const input2 = [1, 2, 3, 4, 5];
  const input3 = ['false', 'true', 'false', 'true'];
  const input4 = [];

  return array[0];
}

function last(array) {
  const input = ['foo', 'bar', 'baz'];
  const input2 = [1, 2, 3, 4, 5];
  const input3 = ['false', 'true', 'false', 'true'];
  const input4 = [];

  return array[array.length - 1];
}

function tail(array) {
  const input = ['foo', 'bar', 'baz'];
  const input2 = [1, 2, 3, 4, 5];
  const input3 = ['false', 'true', 'false', 'true'];
  const input4 = [];
  const newArr = [];
  for (let index = 1; index < array.length; index++) {
    newArr.push(array[index]);
  }
  return newArr;
}

function initial(array) {
  const input = ['foo', 'bar', 'baz'];
  const input2 = [1, 2, 3, 4, 5];
  const input3 = ['false', 'true', 'false', 'true'];
  const input4 = [];
  const initialArr = [];
  for (let index = 0; index < array.length - 1; index++) {
    initialArr.push(array[index]);
  }
  return initialArr;
}

function reverse(array) {
  const input = ['foo', 'bar', 'baz'];
  const input2 = [1, 2, 3, 4, 5];
  const input3 = ['false', 'true', 'false', 'true'];
  const input4 = [];
  const revArr = [];
  for (let index = array.length - 1; index >= 0; index--) {
    revArr.push(array[index]);
  }
  return revArr;
}

function compact(array) {
  const compArr = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index]) {
      compArr.push(array[index]);
    }
  }

  return compArr;
}
