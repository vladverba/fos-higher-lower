// list of dictionaries of players and their salary
var salary_data = [
  { player_names: "Stephen Curry", "22_23_salary": 48070014 },
  { player_names: "John Wall", "22_23_salary": 47345760 },
  { player_names: "Russell Westbrook", "22_23_salary": 47063478 },
  { player_names: "LeBron James", "22_23_salary": 44474988 },
  { player_names: "Kevin Durant", "22_23_salary": 44119845 },
  { player_names: "Bradley Beal", "22_23_salary": 43279250 },
  { player_names: "Paul George", "22_23_salary": 42492568 },
  { player_names: "Kawhi Leonard", "22_23_salary": 42492492 },
  { player_names: "Giannis Antetokounmpo", "22_23_salary": 42492492 },
  { player_names: "Damian Lillard", "22_23_salary": 42492492 },
  { player_names: "Klay Thompson", "22_23_salary": 40600080 },
  { player_names: "Rudy Gobert", "22_23_salary": 38172414 },
  { player_names: "Khris Middleton", "22_23_salary": 37984276 },
  { player_names: "Anthony Davis", "22_23_salary": 37980720 },
  { player_names: "Jimmy Butler", "22_23_salary": 37653300 },
  { player_names: "Tobias Harris", "22_23_salary": 37633050 },
  { player_names: "Trae Young", "22_23_salary": 37096500 },
  { player_names: "Zach LaVine", "22_23_salary": 37096500 },
  { player_names: "Luka Doncic", "22_23_salary": 37096500 },
  { player_names: "Kyrie Irving", "22_23_salary": 36934550 },
  { player_names: "Kemba Walker", "22_23_salary": 36596549 },
  { player_names: "Ben Simmons", "22_23_salary": 35448672 },
  { player_names: "Pascal Siakam", "22_23_salary": 35448672 },
  { player_names: "Karl-Anthony Towns", "22_23_salary": 33833400 },
  { player_names: "Devin Booker", "22_23_salary": 33833400 },
  { player_names: "Kristaps Porzingis", "22_23_salary": 33833400 },
  { player_names: "Jrue Holiday", "22_23_salary": 33665040 },
  { player_names: "Joel Embiid", "22_23_salary": 33616770 },
  { player_names: "Andrew Wiggins", "22_23_salary": 33616770 },
  { player_names: "CJ McCollum", "22_23_salary": 33333333 },
  { player_names: "Nikola Jokic", "22_23_salary": 33047803 },
  { player_names: "Jamal Murray", "22_23_salary": 31650600 },
  { player_names: "Brandon Ingram", "22_23_salary": 31650600 },
  { player_names: "D'Angelo Russell", "22_23_salary": 31377750 },
  { player_names: "Michael Porter", "22_23_salary": 30913750 },
  { player_names: "Shai Gilgeous-Alexander", "22_23_salary": 30913750 },
  { player_names: "Deandre Ayton", "22_23_salary": 30913750 },
  { player_names: "Jayson Tatum", "22_23_salary": 30351780 },
  { player_names: "Bam Adebayo", "22_23_salary": 30351780 },
  { player_names: "De'Aaron Fox", "22_23_salary": 30351780 },
  { player_names: "Donovan Mitchell", "22_23_salary": 30351780 },
  { player_names: "Gordon Hayward", "22_23_salary": 30075000 },
  { player_names: "Jaren Jackson Jr", "22_23_salary": 28946605 },
  { player_names: "Kevin Love", "22_23_salary": 28942830 },
  { player_names: "Jaylen Brown", "22_23_salary": 28741071 },
  { player_names: "Chris Paul", "22_23_salary": 28400000 },
  { player_names: "Kyle Lowry", "22_23_salary": 28333334 },
  { player_names: "Jalen Brunson", "22_23_salary": 27733332 },
  { player_names: "DeMar DeRozan", "22_23_salary": 27300000 },
  { player_names: "Al Horford", "22_23_salary": 26500000 },
  { player_names: "Draymond Green", "22_23_salary": 25806468 },
  { player_names: "Julius Randle", "22_23_salary": 23760000 },
  { player_names: "John Collins", "22_23_salary": 23500000 },
  { player_names: "Mike Conley", "22_23_salary": 22680000 },
  { player_names: "Malcolm Brogdon", "22_23_salary": 22600000 },
  { player_names: "Anfernee Simons", "22_23_salary": 22321429 },
  { player_names: "Nikola Vucevic", "22_23_salary": 22000000 },
  { player_names: "Terry Rozier", "22_23_salary": 21486316 },
  { player_names: "Fred VanVleet", "22_23_salary": 21250000 },
  { player_names: "Buddy Hield", "22_23_salary": 21177750 },
  { player_names: "Jerami Grant", "22_23_salary": 20955000 },
  { player_names: "Spencer Dinwiddie", "22_23_salary": 20171427 },
  { player_names: "Mikal Bridges", "22_23_salary": 20100000 },
  { player_names: "Jarrett Allen", "22_23_salary": 20000000 },
];

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
