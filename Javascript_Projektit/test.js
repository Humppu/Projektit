var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");
var msg3 = document.querySelector("#msg3");
var result = Math.floor(Math.random() * 10) - 1;
var no_of_guesses = 0;
var guesses_num = [];

function kokeile() {
    var user_guess = document.querySelector("#guess").value;
    if (user_guess < 1 || user_guess > 10) {
        alert(" Anna numero 1-10 väliltä.");
    }
    else {
        guesses_num.push(user_guess);
        no_of_guesses = no_of_guesses + 1;

        if (user_guess < result) {
            msg1.textContent = "Arvauksesi On Liian Pieni";
            msg2.textContent = "Arvatut Numerot : " + no_of_guesses;
            msg3.textContent = "Arvatut Numerot Ovat : " + guesses_num;
        }
        else if (user_guess > result) {
            msg1.textContent = "Arvauksesi On Liian Suuri";
            msg2.textContent = "Arvatut Numerot : " + no_of_guesses;
            msg3.textContent = "Arvatut Numerot Ovat : " + guesses_num;
        }
        else if (user_guess == result) {
            msg1.textContent = "Arvauksesi On Oikea!";
            msg2.textContent = "Oikea Numero On : " + no_of_guesses;
            msg3.textContent = "Arvatut Numerot Ovat : " + no_of_guesses + "Arvaukset";
        }
    }
}