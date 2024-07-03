function getValue(object, key) {
  return object[key];
}

function setValue(object, key, value) {
  object[key] = value;
}

function getKeys(object) {
  const keyArr = [];
  for (const key in object) {
    keyArr.push(key);
  }
  return keyArr;
}

function getValues(object) {
  const valArr = [];
  for (const key in object) {
    valArr.push(object[key]);
  }
  return valArr;
}

function toObject(keyValuePair) {
  return kvp;
}
