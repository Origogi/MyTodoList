import { FareDiceGame } from "./fare-dice-game";
import OddBettingPlayer from "./odd-betting-player";
import EvenBettingPlayer from "./even-betting-player";
import { NBettingPlayer } from "./n-betting-player";

console.log("observer pattern!!");

const diceGame = new FareDiceGame();

const players = [
  new OddBettingPlayer("Alice"),
  new EvenBettingPlayer("Bob"),
  new NBettingPlayer("Charlie", [3, 4, 5]),
];

players.forEach((player) => diceGame.addPlayer(player));

function updateBoard() {
  const domPlayers = document.querySelector(".players");

  if (!domPlayers) {
    return;
  }

  domPlayers.innerHTML = "";
  players.forEach((player) => {
    const domPlayer = document.createElement("div");
    domPlayer.innerText = player.name;

    if (player.winning) {
      domPlayer.classList.add("win");
    }

    domPlayers.append(domPlayer);
  });
}

updateBoard();

document.querySelector("button")?.addEventListener("click", () => {
  const diceNumber = diceGame.play();

  const domDice = document.querySelector(".dice");

  if (!domDice) {
    return;
  }

  domDice.innerHTML = diceNumber.toString();

  updateBoard();
});
