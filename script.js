// JavaScript logic for the game
const secretNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
let attemptsRemaining = 5;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('user-input').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        document.getElementById('result').innerText = 'Please enter a valid number between 1 and 10.';
    } else if (userGuess === secretNumber) {
        document.getElementById('result').innerText = 'Congratulations! You guessed the correct number! You Win Another $100';
    } else {
        attemptsRemaining--;

        if (attemptsRemaining > 0) {
            document.getElementById('result').innerText = `Sorry, that's not the correct number. ${attemptsRemaining} attempts remaining. Try again!`;
        } else {
            document.getElementById('result').innerText = `Sorry, you've used all your attempts. The correct number was ${secretNumber}.`;
            document.getElementById('user-input').disabled = true;
            document.querySelector('button').disabled = true;
        }
    }
}
