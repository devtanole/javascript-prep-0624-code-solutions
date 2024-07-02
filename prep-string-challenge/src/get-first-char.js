/* exported getFirstChar */
function getFirstChar(string) {
  return string[0];
}

function getLastChar(string) {
  return string[string.length - 1];
}

function capitalize(word) {
  const str = word;
  const bigStr = str[0].toUpperCase();
  const restStr = str.slice(1);
  const littleStr = restStr.toLowerCase();
  const newStr = bigStr + littleStr;
  return newStr;
}

function isUpperCased(word) {
  const str = word.toUpperCase(0);
  if (str === word) {
    return true;
  } else {
    return false;
  }
}

function isLowerCased(word) {
  const str = word.toLowerCase(0);
  if (str === word) {
    return true;
  } else {
    return false;
  }
}

function isVowel(char) {
  switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

function getWords(string) {
  const gotten = string;
  let finish = gotten.split(' ');
  return finish;
}

function reverse(word) {
  if (word === '') {
    return '';
  } else {
    return reverse(word.substr(1)) + word.charAt(0);
  }
}
