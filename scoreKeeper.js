// player one button and score display
var pl1Score = 0;
var pl1Display = document.getElementById("pl1Display");
var pl1Button = document.querySelector("button");

pl1Button.addEventListener("click", function() {
	pl1Score++;
	pl1Display.textContent = pl1Score;
})
