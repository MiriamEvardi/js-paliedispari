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

const userNumber = Number(prompt("Scegli un numero da 1 a 5"));
const userChoice = prompt("Scegli tra Pari o Dispari");

const computerNumber = randomNumber5()
console.log(computerNumber)

let result = sum(userNumber, computerNumber);

let win = evenOdd(result);

console.log(win)

console.log(result)

if (userChoice === win) {

    console.log("Hai vinto");
} else {
    console.log("Hai perso")
}