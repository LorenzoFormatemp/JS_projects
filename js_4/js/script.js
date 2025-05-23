// array
const users = [
    'Marco', // 0
    'Luigi', // 1
    'Sara', // 2
    'Luca', // 3,
];
/* console.log(users);
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]); */
console.log('La mia lista contiene : ' + users.length + ' elementi');

/* 
    - 1) chiederò all'utente il suo nome => OK
    - 2) controllare che il suo nome sia presente all'interno degli utenti (array)
    - 3) se l'utente è presente nella lista
            => sei un utente registrato
        altrimenti => non sei registrato
*/

// 1) chiedo all'utente il suo nome
const user_name = prompt('Inserisci il tuo nome');
//2) controllare che il suo nome sia presente all'interno degli utenti (array)
let counter = 2;
let is_registered = false;


if(users.includes(user_name)){
    console.log('Sei registrato');
} else {
    console.log('Non sei registrato');
}


while (counter < users.length) {
    const this_user = users[counter];
    /* se l'utente è presente nella lista
            => sei un utente registrato
        altrimenti => non sei registrato */

    //console.log(user_name);
    if(user_name === this_user){
        is_registered = true;
        //break;
        continue;
    } 
    counter++;
}





