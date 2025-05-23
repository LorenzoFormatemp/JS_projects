/* 
    - L'utente inserisce due prompt in successione.
      Il nostro programma va a stampare prima la parola più corta, dopo quella più lunga.
*/
// 1. + 2. : salvo i due prompt in due variabili
const divElement = document.getElementById('result');
const prima_parola = prompt('Inserisci una prima parola');
const seconda_parola = prompt('Inserisci una seconda parola');

// 3. Il nostro programma va a stampare prima la parola più corta, dopo quella più lunga
/* 
    1. prima parola: più lunga , seconda parola: più corta => seconda_parola, prima_parola
    2. prima parola: più corta, seconda parola: più lunga => prima_parola, seconda_parola
    3. prima parola e seconda parola della stessa lunghezza
*/
if(prima_parola.length > seconda_parola.length){ // caso  1
    divElement.innerHTML = `${seconda_parola}, ${prima_parola}`;
} else if(seconda_parola.length > prima_parola.length){ // caso 2
    divElement.innerHTML = `${prima_parola}, ${seconda_parola}`;
} else { //caso 3
    divElement.innerHTML = 'Le parole hanno la stessa lunghezza';
} 


// length
function length(str){
    let arr_str = str.split('');
    return arr_str.length;
}