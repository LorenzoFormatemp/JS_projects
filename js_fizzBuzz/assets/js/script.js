/* 
    Programma che stampa in console una serie di numeri (1 => 25):
        1- per i multipli di 3 => 'Fizz' al posto del numero
        2- per i multipli di 5 => 'Buzz' al posto del numero
        3- per i multipli sia di 3 che di 5 => 'FizzBuzz' al posto del numero
    In tutti gli altri casi => stampo il numero
*/
// range 
const min = 1;
const max = 50;
const fizz = 'Fizz';
const buzz = 'Buzz';
const fizzBuzz = fizz + buzz;

const containerElement = document.querySelector('.container');

for(i = min; i <= max; i++){

    // creo il paragrafo
    let paragraph = document.createElement('p');
    
    // lo appendo al contenitore
    containerElement.append(paragraph);

    if(i % 3 == 0 && i % 5 == 0){// se il numero è divisibile sia per 3 che per 5
        paragraph.classList.add('brown');
        paragraph.append(`${fizzBuzz}`);
        //console.log(fizzBuzz);
    } else if (i % 3 == 0) { // se il numero è divisibile solo per 3
        //console.log(fizz);
        paragraph.classList.add('orange');
        paragraph.append(`${fizz}`);

    } else if (i % 5 == 0){ // se il numero è divisibile solo per 5
        //console.log(buzz);
        paragraph.classList.add('green');
        paragraph.append(`${buzz}`);
    } else { // entrerà qui quando tutte le condizioni sopra sono false / non sono verificate
        //console.log(i);
        paragraph.append(`${i}`);
    }
}


/*  switch (true) {
    case (i % 3 === 0 && i % 5 === 0):
      paragraph.classList.add('brown');
      paragraph.append(fizzBuzz);
      break;

    case (i % 3 === 0):
      paragraph.classList.add('orange');
      paragraph.append(fizz);
      break;

    case (i % 5 === 0):
      paragraph.classList.add('green');
      paragraph.append(buzz);
      break;

    default:
      paragraph.append(i);
} */



