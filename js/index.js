const playerList = document.getElementById("player-list");

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
