/* 
    1- Un programma che chiede 5 volte al nostro utente di inserire un numero
    2- il programma stampa la somma di tutti i numeri inseriti
*/

//Soluzione 1: funziona, ma non è ottimale => codice ripetuto
//let number = Number(prompt('Inserisci un numero')); // * 10

/* Soluzione 2: con ciclo for */
/* let sum = 0;
console.log('Sum prima del ciclo: ' + sum);
for(let i = 0; i < 5; i++){
    let number = Number(prompt('Inserisci un numero'));
    sum += number;
    console.log(sum);
}
console.log('Sum dopo il ciclo: ' + sum); */

/* Soluzione 3: con ciclo while */
const max = 10;
let sum = 0;
let counter = 0;

console.log('Sum prima del ciclo: ' + sum);

while (counter < max) {
    //codice da eseguire
    let number = Number(prompt('Inserisci un numero'));
    sum += number;
    console.log(sum);
    counter++;
}
console.log('Sum dopo il ciclo: ' + sum); 
