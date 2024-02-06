//Chiedere all’utente di inserire una parola.
//Creare una funzione per capire se la parola inserita è palindroma
//(ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro,
//farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)


function isPalindrome(word) {

    for (let i = 0; i < Math.floor(word.length / 2); i++) {


        //controllo della parola all'inverso
        if (word[i] !== word[word.length - 1 - i]) {
            return false;

        } else {
            return true;
        }
    }
}

const buttonEvent = document.querySelector("#start");

buttonEvent.addEventListener("click",
    function () {

        const userWord = document.getElementById("word").value;

        if (userWord === "") {
            document.getElementById("result").innerText = "Inserire una parola.";

        } else if (!isNaN(userWord)) {
            document.getElementById("result").innerText = "La parola non è valida.";

        } else if (isPalindrome(userWord)) {
            document.getElementById("result").innerText = "La parola " + userWord + " è palindroma.";

        } else {
            document.getElementById("result").innerText = "La parola " + userWord + " non è palindroma.";
        }
    }
)