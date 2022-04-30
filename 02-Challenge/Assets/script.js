const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const quesitonElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,currentQuesitonIndex;
let quizScore =0;







const questions =[
    {
         question: "Arrays in a JavaScript cand be used to store",
         answers: [
             { text: "numbers and strings", correct: false},
             { text: "other arrays", correct: false},
             { text: " booleans", correct: false},
             { text: "all of the above", correct: true}
         ],   
    },
    {   question: "What can be used for debugging purposes?",
        answers: [
            { text: "console.log", correct: true},
            { text: "Gitbash", correct: false},
            { text: "querySelector", correct: false},
            { text: "local storage", correct: false},
        ],
    },
    {
        question: "In HTML, JavaScript is executed by the",
        answers: [
            { text: "CSS selectors", correct: false},
            { text: "web browser", correct: true},
            { text: "setAttribute", correct: false},
            { text: "sans serif", correct: false},
        ]
    }
]