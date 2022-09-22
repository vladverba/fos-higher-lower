// get random player from salary_data list in salary_data.js file
// function getRandomPlayer(exclude_player = null) {
//   if (exclude_player == null) {
//     return salary_data[Math.floor(Math.random() * salary_data.length)];
//   } else {
//     var random_player =
//       salary_data[Math.floor(Math.random() * salary_data.length)];
//     while (
//       random_player.key == exclude_player.key ||
//       random_player.value == exclude_player.value
//     ) {
//       random_player =
//         salary_data[Math.floor(Math.random() * salary_data.length)];
//     }
//   }
//   return random_player;
// }

function getRandomPlayer(exclude_name = null, exclude_salary = null) {
  // get a random player whos name is not in exclude_name and salary is not in exclude_salary

  var random_player =
    salary_data[Math.floor(Math.random() * salary_data.length)];

  if (exclude_name == null && exclude_salary == null) {
    return random_player;
  } else {
    console.log("exclude_name: " + exclude_name);
    console.log("exclude_salary: " + exclude_salary);
    // console.log("excludes are not null");
    while (
      exclude_name.includes(random_player.key) ||
      exclude_salary.includes(random_player.value)
    ) {
      random_player =
        salary_data[Math.floor(Math.random() * salary_data.length)];
    }
    return random_player;
  }
}

//////// on page load ////////
// generate two random players
randomPlayerLeft = getRandomPlayer();
randomPlayerRight = getRandomPlayer(
  (exclude_name = [randomPlayerLeft.key]),
  (exclude_salary = [randomPlayerLeft.value])
);
// set new player to null (does not exist)
newPlayer = null;

console.log(randomPlayerLeft);
console.log(randomPlayerRight);

function incrementScore() {
  // get current score
  var currentScore = document.getElementById("userScore").innerHTML;
  // increment score
  currentScore++;
  // set new score
  document.getElementById("userScore").innerHTML = currentScore;
}

function compareSalaries(higher_lower_flag) {
  // get value from ID leftPlayerSalary
  var leftPlayerSalary = document.getElementById("leftPlayerSalary").innerHTML;

  // leftPlayerSalary to number
  leftPlayerSalary = Number(leftPlayerSalary.replace(/[^0-9.-]+/g, ""));
  console.log("leftPlayerSalary: " + leftPlayerSalary);

  // get value from ID rightPlayerSalary
  var rightPlayerSalary =
    document.getElementById("rightPlayerSalary").innerHTML;

  // rightPlayerSalary to number
  rightPlayerSalary = Number(rightPlayerSalary.replace(/[^0-9.-]+/g, ""));
  console.log("rightPlayerSalary: " + rightPlayerSalary);

  if (higher_lower_flag == "higher") {
    if (leftPlayerSalary < rightPlayerSalary) {
      console.log(
        "correct - " + rightPlayerSalary + " greater than " + leftPlayerSalary
      );
      return true;
    } else if (leftPlayerSalary > rightPlayerSalary) {
      console.log(
        "incorrect - " + leftPlayerSalary + " greater than " + rightPlayerSalary
      );
      return false;
    }
  } else if (higher_lower_flag == "lower") {
    if (leftPlayerSalary > rightPlayerSalary) {
      console.log(
        "correct - " + rightPlayerSalary + " less than " + leftPlayerSalary
      );
      return true;
    } else if (leftPlayerSalary < rightPlayerSalary) {
      console.log(
        "incorrect - " + leftPlayerSalary + " less than " + rightPlayerSalary
      );
      return false;
    }
  }
}

//////// when page loads run this ////////
function onPageLoad() {
  // populate left side with randomPlayerLeft
  document.getElementById("playerImageLeftId").src = randomPlayerLeft.image;
  document.getElementById("leftPlayerName").innerHTML = randomPlayerLeft.key;
  document.getElementById("leftPlayerSalary").innerHTML =
    randomPlayerLeft.value.toLocaleString("en-US");

  // populate right side with randomPlayerRight (do not show salary)
  document.getElementById("playerImageRightId").src = randomPlayerRight.image;
  document.getElementById("rightPlayerName").innerHTML = randomPlayerRight.key;
}

//////// remove buttons ////////
function removeButtons() {
  // remove button with id higherButton
  document.getElementById("higherButton").remove();
  // remove button with id lowerButton
  document.getElementById("lowerButton").remove();
}

//////// create new player-half div with player-info-holder inside ////////
function createNewPlayerHalfDiv() {
  // create a new player-half div (the larger div)
  var newPlayerHalf = document.createElement("div");
  newPlayerHalf.className = "player-half";
  newPlayerHalf.id = "newPlayerHalf";

  //if mobile
  if (window.innerWidth < 768) {
    newPlayerHalf.style.width = "100%";
    newPlayerHalf.style.height = "0%";
  } else {
    newPlayerHalf.style.width = "0%";
    newPlayerHalf.style.height = "100%";
  }

  // newPlayerHalf.style.width = 0;

  // create a new player-info-holder with id newPlayerInfoHolder
  var newPlayerInfoHolder = document.createElement("div");
  newPlayerInfoHolder.className = "player-info-holder";
  newPlayerInfoHolder.id = "newPlayerInfoHolder";
  newPlayerHalf.appendChild(newPlayerInfoHolder);

  return newPlayerHalf;
}

//////// populate newPlayerInfoHolder with player name and empty salary field ////////
function populateNewPlayerInfoHolder() {
  // add img with id newPlayerImage
  var newPlayerImage = document.createElement("img");
  newPlayerImage.id = "newPlayerImage";
  newPlayerImage.src = newPlayer.image;
  newPlayerInfoHolder.appendChild(newPlayerImage);

  // add p with id newPlayerName and innerHTML newPlayer.key
  var newPlayerName = document.createElement("p");
  newPlayerName.id = "newPlayerName";
  newPlayerName.innerHTML = newPlayer.key;
  newPlayerInfoHolder.appendChild(newPlayerName);

  // add empty p with key newPlayerSalary
  var newPlayerSalary = document.createElement("p");
  newPlayerSalary.id = "newPlayerSalary";
  newPlayerInfoHolder.appendChild(newPlayerSalary);
}

function addHighLowButtons() {
  // add higher button
  var higherButton = document.createElement("button");
  higherButton.id = "higherButton";
  higherButton.innerHTML = "Higher";
  higherButton.onclick = function () {
    highLowButtonClick("higher");
  };
  newPlayerInfoHolder.appendChild(higherButton);

  // add lower button
  var lowerButton = document.createElement("button");
  lowerButton.id = "lowerButton";
  lowerButton.innerHTML = "Lower";
  lowerButton.onclick = function () {
    highLowButtonClick("lower");
  };
  newPlayerInfoHolder.appendChild(lowerButton);
}

function runSlideAnimation() {
  // animate let side closing and right side opening

  // if mobile
  if (window.innerWidth < 768) {
    $("#leftHalfId").animate(
      {
        height: "0%",
      },
      { duration: 1000, queue: false }
    );
    $("#newPlayerHalf").animate(
      {
        height: "50%",
      },
      { duration: 1000, queue: false }
    );
  } else {
    $("#leftHalfId").animate(
      {
        width: "0%",
      },
      { duration: 1000, queue: false }
    );
    $("#newPlayerHalf").animate(
      {
        width: "50%",
      },
      { duration: 1000, queue: false }
    );
  }
}

//////// change IDs of new left and new right side ////////
function changeIds() {
  // rightHalfId to leftHalfId
  document.getElementById("rightHalfId").id = "leftHalfId";
  // rightPlayerHolderId -> leftPlayerHolderId
  document.getElementById("rightPlayerHolderId").id = "leftPlayerHolderId";
  // rightPlayerName -> leftPlayerName
  document.getElementById("rightPlayerName").id = "leftPlayerName";
  // rightPlayerSalary -> leftPlayerSalary
  document.getElementById("rightPlayerSalary").id = "leftPlayerSalary";

  // set the new player to the right side
  // #newPlayerHalf to #rightHalfId
  document.getElementById("newPlayerHalf").id = "rightHalfId";
  // #newPlayerInfoHolder to #rightPlayerHolderId
  document.getElementById("newPlayerInfoHolder").id = "rightPlayerHolderId";
  // #newPlayerName to #rightPlayerName
  document.getElementById("newPlayerName").id = "rightPlayerName";
  // #newPlayerSalary to #rightPlayerSalary
  document.getElementById("newPlayerSalary").id = "rightPlayerSalary";
}

function gameOver() {
  numPoints = document.getElementById("userScore").innerHTML;
  // save the score and open game over page
  sessionStorage.setItem("userScore", numPoints);
  // open game over page
  window.location.href = "gameover.html";
}

//////// higher/lower buttons clicked ////////
function highLowButtonClick(higher_lower_flag) {
  // remove buttons
  removeButtons();

  // show #rightPlayerSalary
  document.getElementById("rightPlayerSalary").innerHTML =
    randomPlayerRight.value.toLocaleString("en-US");

  guessedCorrect = compareSalaries(higher_lower_flag);

  if (guessedCorrect == true) {
    incrementScore();
    // get a NEW random player

    // get name value from ID rightPlayerName
    var rightPlayerName = document.getElementById("rightPlayerName").innerHTML;
    // get name value from ID leftPlayerName
    var leftPlayerName = document.getElementById("leftPlayerName").innerHTML;

    // get salary value from ID rightPlayerSalary
    var rightPlayerSalary = document.getElementById("rightPlayerSalary");
    // rightPlayerSalary to number
    rightPlayerSalary = Number(rightPlayerSalary.innerHTML.replace(/,/g, ""));

    // get salary value from ID leftPlayerSalary
    var leftPlayerSalary = document.getElementById("leftPlayerSalary");
    // leftPlayerSalary to number
    leftPlayerSalary = Number(leftPlayerSalary.innerHTML.replace(/,/g, ""));
    newPlayer = getRandomPlayer(
      (exclude_name = [rightPlayerName, leftPlayerName]),
      (exclude_salary = [Number(rightPlayerSalary), Number(leftPlayerSalary)])
    );
    console.log(newPlayer);

    if (newPlayer == null) {
      randomPlayerRight = randomPlayerRight;
    } else {
      randomPlayerRight = newPlayer;
    }

    newPlayerHalf = createNewPlayerHalfDiv();

    // add new player-half div to home-body div
    document.getElementsByClassName("home-body")[0].appendChild(newPlayerHalf);

    // populate newPlayerInfoHolder with player name and empty salary field
    populateNewPlayerInfoHolder();

    // sleep for 2 seconds after showing the salary - then continue
    setTimeout(function () {
      runSlideAnimation();
      // delete leftHalfId
      setTimeout(function () {
        document.getElementById("leftHalfId").remove();

        // add buttons after the slide is done animating
        addHighLowButtons();

        // change IDs of the NEW left side and the NEW right side
        changeIds();
      }, 1000);
    }, 2000);
  } else {
    console.log("game over");
    // wait 2 seconds before opening game over page
    setTimeout(function () {
      gameOver();
    }, 2000);
  }
}
