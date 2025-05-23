/* main data */
const quizData = [
    {
        question: "Per cosa sta HTML?",
        options: ["Hyper Text Markup Language", "Hot Mail", "How To Make Lasagna"],
        correct: 0
    },
    {
        question: "In che anno è stato creato Javascript?",
        options: ["1995", "2005", "2015"],
        correct: 0
    },
    {
        question: "Chi ha sviluppato Javascript?",
        options: ["Netscape", "Microsoft", "Apple"],
        correct: 0
    }
];

let score = 0;
let current = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');

/* main functions */
function loadQuestion(index){
    const q = quizData[index];
    questionEl.innerText = q.question;

    //svuotare il container delle opzioni

    // opzioni possono essere più di una
    q.options.forEach((opt, i) => {
        // creo l'html
        const btn = document.createElement("button");
        // gli metto come testo il testo dell'opzione che sto ciclando
        btn.innerText = opt;
        // gli aggiungo classi in bootstrap per stilizzarlo
        btn.className = "btn w-100 mb-2 btn-outline-primary";
        // appendo al bottone un evento che mi richiama la funzione di controllo dell'opzione
        btn.onclick = () => checkAnswers(i);

        // appendo l'html al mio contenitore delle opzioni
        optionsEl.appendChild(btn);

    });
}

/* 
    1- check della risposta => mi controlli se è giusta o meno
    2- gestire l'evento click
*/

function checkAnswers(selected){
    const q = quizData[current];
    
    //prendere tutte le opzioni legate alla domanda
    const buttons = optionsEl.querySelectorAll("button");
 
    //ciclo le opzioni:
    buttons.forEach((btn, i) =>{
        btn.disabled = true; // disabilito il bottone
        
        if(i === q.correct){
            btn.classList.replace("btn-outline-primary", "btn-success");
        } else if (i === selected) { 
            btn.classList.replace("btn-outline-primary", "btn-danger");
        }
    });

    // incremento il punteggio se è quella giusta
    if(selected === q.correct){
        score++;
    }
    console.log(score);

}





// al caricamento della pagina caricherò la prima domanda
loadQuestion(current);



