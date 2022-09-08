// get one random dictionary form a list of dictionaries
// used in the getRandomDictPair function
function getRandomDict(list_dict) {
  return list_dict[Math.floor(Math.random() * list_dict.length)];
}

// get two random players on page load
function getRandomDictPair(list_dict) {
  var dict1 = getRandomDict(list_dict);
  var dict2 = getRandomDict(list_dict);
  while (dict1.key == dict2.key || dict1.value == dict2.value) {
    dict2 = getRandomDict(list_dict);
  }
  return [dict1, dict2];
}

// display the players when the page loads
function setPlayersOnLoad() {
  // set the inner HTML of the player names and values
  document.getElementById("playerNameLeftId").innerHTML = players[0].key;
  document.getElementById("playerValueLeftId").innerHTML =
    players[0].value.toLocaleString("en-US");

  document.getElementById("playerNameRightId").innerHTML = players[1].key;
  document.getElementById("playerValueRightId").innerHTML = "";
}

// remove the higher/lower buttons and show the salary
function removeButtonShowSalary() {
  // remove the buttons
  document.getElementById("higherButtonId").remove();
  document.getElementById("lowerButtonId").remove();
  // show the right player salary
  document.getElementById("playerValueRightId").innerHTML =
    "$" + players[1].value.toLocaleString("en-US");
}

// fade element out
function removeFadeOut(elementId, speed) {
  var seconds = speed / 1000;
  elementId.style.transition = "opacity " + seconds + "s ease";

  elementId.style.opacity = 0;
  setTimeout(function () {
    elementId.parentNode.removeChild(elementId);
  }, speed);
}

// save the score and show the game over screen
function showGameOver() {
  // save the score and open game over page
  sessionStorage.setItem("userScore", numPoints);
  // open game over page
  window.location.href = "gameover.html";
}

// actions when one of the buttons is clicked
// use the higherLowerFlag to determine which button was clicked
function higherLowerButtonClick(playerLeft, playerRight, higherLowerFlag) {
  if (higherLowerFlag == "higher") {
    playerLeftCompare = playerLeft.value;
    playerRightCompare = playerRight.value;
  } else {
    playerLeftCompare = playerRight.value;
    playerRightCompare = playerLeft.value;
  }

  removeButtonShowSalary();
  // sleep for 2 seconds
  setTimeout(function () {
    if (playerLeftCompare < playerRightCompare) {
      console.log("Correct!");
      updateScore((numPoints = numPoints));
      $("#leftSideId").animate({ left: "-50%" }, 1000);
      $(".right-side").animate({ left: "-50%" }, 1000);
    } else {
      console.log("Incorrect!");
      showGameOver();
    }
  }, 1500);
}
