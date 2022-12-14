const playerList = document.getElementById("player-list");

const firstPlayer = document.getElementById("select-1");
const secondPlayer = document.getElementById("select-2");
const thirdPlayer = document.getElementById("select-3");
const forthPlayer = document.getElementById("select-4");
const fifthPlayer = document.getElementById("select-5");
const sixthPlayer = document.getElementById("select-6");

firstPlayer.addEventListener("click", function (event) {
  addPlayerToPlayerList("player-1");
  event.target.classList.add("disabled");
});

secondPlayer.addEventListener("click", function (event) {
  addPlayerToPlayerList("player-2");
  event.target.classList.add("disabled");
});

thirdPlayer.addEventListener("click", function (event) {
  addPlayerToPlayerList("player-3");
  event.target.classList.add("disabled");
});

forthPlayer.addEventListener("click", function (event) {
  addPlayerToPlayerList("player-4");
  event.target.classList.add("disabled");
});

fifthPlayer.addEventListener("click", function (event) {
  addPlayerToPlayerList("player-5");
  event.target.classList.add("disabled");
});

sixthPlayer.addEventListener("click", function (event) {
  addPlayerToPlayerList("player-6");
  event.target.classList.add("disabled");
});

function addPlayerToPlayerList(playerId) {
  if (playerList.childElementCount >= 5) {
    alert("You can not add more then 5 players in the list");
  } else {
    const playerName = document.getElementById(playerId).innerText;
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(playerName));
    playerList.appendChild(listItem);
  }
}

const calculatePlayerTotal = document.getElementById("calculate-player-total");
const inputPerPlayer = document.getElementById("input-per-player");
const playerTotalExpenses = document.getElementById("player-total-expenses");

calculatePlayerTotal.addEventListener("click", function (event) {
  const perPlayerCost = inputPerPlayer.value;
  if (!perPlayerCost.length) {
    alert("Input player per cost is empty");
  } else if (perPlayerCost.length && isNaN(perPlayerCost)) {
    alert("Input player per cost is not valid");
  } else {
    const numberOfPlayers = playerList.childElementCount;
    const playerTotalCost = perPlayerCost * numberOfPlayers;
    playerTotalExpenses.innerText = `${playerTotalCost}`;
  }
});

const managerInput = document.getElementById("input-manager");
const coachInput = document.getElementById("input-coach");
const calculateTotal = document.getElementById("calculate-total");
const totalExpenses = document.getElementById("total-expenses");

calculateTotal.addEventListener("click", function (event) {
  const managerCost = managerInput.value;
  const coachCost = coachInput.value;

  if (!managerCost.length || !coachCost.length) {
    alert("Manager or Coach Input should not be empty");
  } else if (managerCost.length && isNaN(managerCost)) {
    alert("Input manager cost is not valid");
  } else if (coachCost.length && isNaN(coachCost)) {
    alert("Input coach cost is not valid");
  } else {
    const calculatedTotal =
      Number(playerTotalExpenses.innerText) +
      Number(managerCost) +
      Number(coachCost);
    totalExpenses.innerText = calculatedTotal;
  }
});
