var winningScore = 5;
var gameOver = false;

// player one button and score display
var pl1Score = 0;
var pl1Display = document.getElementById("pl1Display");
var pl1Button = document.querySelector("button");

pl1Button.addEventListener("click", function() {
	if (pl1Score !== winningScore && !gameOver) {
		pl1Score++;
		pl1Display.textContent = pl1Score;
		if (pl1Score === winningScore) {
			pl1Display.classList.add("winner");
			gameOver = true;
		}
	}
});
// player two button and score display
var pl2Score = 0;
var pl2Display = document.getElementById("pl2Display");
var pl2Button = document.querySelectorAll("button")[1];

pl2Button.addEventListener("click", function() {
	if (pl2Score !== winningScore && !gameOver) {
		pl2Score++;
		pl2Display.textContent = pl2Score;
		if (pl2Score === winningScore) {
			pl2Display.classList.add("winner");
			gameOver = true;
		}
	}
});

// resets the score of the players
var resetButton = document.querySelectorAll("button")[2];
resetButton.addEventListener("click", reset);

// input field changes winning score and resets the game
var goal = document.querySelector("#goal");
var input = document.querySelector("input");
input.addEventListener("change", function() {
	goal.textContent = input.value;
	winningScore = Number(input.value);
	reset();
});

function reset() {
	pl1Score = pl2Score = 0;
	pl1Display.textContent = pl2Display.textContent = "0";
	pl1Display.classList.remove("winner");
	pl2Display.classList.remove("winner");
	gameOver = false;
}