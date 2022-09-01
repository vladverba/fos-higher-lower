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

function setPlayersOnLoad() {
  // set the inner HTML of the player names and values
  document.getElementById("playerNameLeftId").innerHTML = players[0].key;
  document.getElementById("playerValueLeftId").innerHTML =
    players[0].value.toLocaleString("en-US");

  document.getElementById("playerNameRightId").innerHTML = players[1].key;
  document.getElementById("playerValueRightId").innerHTML = "";
}

function onHigherLowerClick() {
  // remove the buttons
  document.getElementById("higherButtonId").remove();
  document.getElementById("lowerButtonId").remove();
  // show the right player salary
  document.getElementById("playerValueRightId").innerHTML =
    "$" + players[1].value.toLocaleString("en-US");
}

function removeFadeOut(elementId, speed) {
  var seconds = speed / 1000;
  elementId.style.transition = "opacity " + seconds + "s ease";

  elementId.style.opacity = 0;
  setTimeout(function () {
    elementId.parentNode.removeChild(elementId);
  }, speed);
}

function higherButtonClick(playerLeft, playerRight) {
  if (playerLeft.value < playerRight.value) {
    console.log("Correct!");
    numPoints++;
    updateScore();
    removeFadeOut(document.getElementById("leftSideId"), 1000);
  } else {
    console.log("Incorrect!");
    // wait 3 seconds
    setTimeout(function () {
      sessionStorage.setItem("userScore", numPoints);
      // open game over page
      window.location.href = "gameover.html";
    }, 1000);
  }
  onHigherLowerClick();
}

function lowerButtonClick(playerLeft, playerRight) {
  if (playerLeft.value > playerRight.value) {
    console.log("Correct!");
    numPoints++;
    updateScore();
    removeFadeOut(document.getElementById("leftSideId"), 1000);
  } else {
    console.log("Incorrect!");
    // wait 3 seconds
    setTimeout(function () {
      sessionStorage.setItem("userScore", numPoints);
      // open game over page
      window.location.href = "gameover.html";
    }, 1000);
  }
  onHigherLowerClick();
}
