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
