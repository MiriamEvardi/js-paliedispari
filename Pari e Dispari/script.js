//L’utente sceglie pari o dispari.
//Inserisce un numero da 1 a 5.
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.


//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber5() {
    const random = Math.floor(Math.random() * 5) + 1;
    return random;
}

function sum(a, b) {

    return a + b;
}

function evenOdd(number) {

    if (number % 2 == 0) {
        return "Pari";

    } else {
        return "Dispari";
    }

}



let userNumber;
let userChoice;
const buttonEvent = document.querySelector("#start");


buttonEvent.addEventListener("click",
    function () {


        do {

            userNumber = Number(prompt("Scegli un numero da 1 a 5"));

            if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
                alert("Numero inserito non valido");
            }

        } while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);


        do {
            userChoice = prompt("Scegli tra Pari o Dispari");

            if (userChoice !== "Pari" && userChoice !== "Dispari") {
                alert("Parola non valida");
            }

        } while (userChoice !== "Pari" && userChoice !== "Dispari");


        const computerNumber = randomNumber5()

        let result = sum(userNumber, computerNumber);

        let win = evenOdd(result);

        document.getElementById("computer-number").innerText = "Il computer ha scelto: " + computerNumber;
        document.getElementById("user-number").innerText = "Hai scelto: " + userNumber;




        if (userChoice === win) {

            document.getElementById("results").innerText = "Hai vinto!";
        } else {
            document.getElementById("results").innerText = "Hai perso!";
        }


        document.getElementById("sum").innerText = "La somma dei due numeri è:  " + result;
    }
)