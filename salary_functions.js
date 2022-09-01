// get a random value from a list of dictionaries
function getRandomDict(list_dict) {
  return list_dict[Math.floor(Math.random() * list_dict.length)];
}

// get two random dictionaries from a list of dictionaries where the keys are not the same AND the values are not the same
function getRandomDictPair(list_dict) {
  var dict1 = getRandomDict(list_dict);
  var dict2 = getRandomDict(list_dict);
  while (dict1.key == dict2.key || dict1.value == dict2.value) {
    dict2 = getRandomDict(list_dict);
  }
  return [dict1, dict2];
}

function getTwoRandomDicts(list_dict) {
  var first_value = getRandomDict(list_dict);
  var second_value = getRandomDict(list_dict);
  while (first_value == second_value) {
    second_value = getRandomDict(list_dict);
  }
  return [first_value, second_value];
}
