pl1 = prompt('What is your first name?')
pl2 = prompt('What is your first name?')
document.querySelector(".pl1 p").textContent = pl1;
document.querySelector(".pl2 p").textContent = pl2;

function rollDice() {
    randomNumber1 = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png")

    randomNumber2 = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png")

    if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = pl2 + " wins!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = pl1 + " wins!";
    } else {
        document.querySelector("h1").textContent = "Draw!";
    }
}