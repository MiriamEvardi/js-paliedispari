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


const userWord = prompt("Inserisci una parola");

if (isPalindrome(userWord)) {

    console.log(userWord + " E' palindroma ")
} else {
    console.log(userWord + " Non è palindroma ")
}