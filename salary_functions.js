// get a random value from a list of dictionaries
function getRandomDict(list_dict) {
  return list_dict[Math.floor(Math.random() * list_dict.length)];
}

// get two random values from the list that are not the same
function getTwoRandomDicts(list_dict) {
  var first_value = getRandomDict(list_dict);
  var second_value = getRandomDict(list_dict);
  while (first_value == second_value) {
    second_value = getRandomDict(list_dict);
  }
  return [first_value, second_value];
}
