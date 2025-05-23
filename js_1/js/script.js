/* 
    L'utente inserisce due numeri in successione, il nostro programma va a stampare quello maggiore
*/

// 1- permettere all'utente di inserire due numeri
// 2- salvare questi numeri da qualche parte
const primo_numero = Number(prompt('Inserisci il primo numero'));
const secondo_numero = Number(prompt('Inserisci il secondo numero'));

// 3- verificare quale tra i due è maggiore
// 4- stampare il numero maggiore
if(primo_numero > secondo_numero){ 
    console.log(primo_numero);
} else {
    console.log(secondo_numero);
}
