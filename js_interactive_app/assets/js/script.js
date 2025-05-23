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
        /* 
            appendere un evento al bottone per controllare che sia la risposta corretta
        */
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
}





// al caricamento della pagina caricherò la prima domanda
loadQuestion(current);



