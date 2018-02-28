function startFunction() {
	var player1num = prompt("Player 1 please enter your number.");
	while (player1num < 0) {
		player1num = prompt("Player 1 please enter a positive number.");
	}
	var player2num = prompt("Player 2 please enter what you think player 1's number is.");
	var guess = 1;
	

	while (player2num != player1num) {
		if (player2num > player1num) {
			player2num = prompt("You guessed incorrectly. " + player2num + " is too high. Try again.")
		}
		if (player2num < player1num) {
			player2num = prompt("You guessed incorrectly. " + player2num + " is too low. Try again.")
		}	
		guess++;
	}
	
	if (player2num == player1num) {
		alert("You guessed correctly! " + player2num + " is player 1's number. You guessed " + guess + " times.");
	}
}