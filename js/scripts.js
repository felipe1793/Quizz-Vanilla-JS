// Declaração de variaveis

const question = document.querySelector("#question");
const answerBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// Question

const questions = [
    {
      "question": "PHP foi desenvolvido para qual fim?",
      "answers": [
        {
          "answer": "back-end",
          "correct": true
        },
        {
          "answer": "front-end",
          "correct": false
        },
        {
          "answer": "Sistema operacional",
          "correct": false
        },
        {
          "answer": "Banco de dados",
          "correct": false
        },
      ]
    },
    {
      "question": "Uma forma de declarar variável em JavaScript:",
      "answers": [
        {
          "answer": "$var",
          "correct": false
        },
        {
          "answer": "var",
          "correct": true
        },
        {
          "answer": "@var",
          "correct": false
        },
        {
          "answer": "#let",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual o seletor de id no CSS?",
      "answers": [
        {
          "answer": "#",
          "correct": true
        },
        {
          "answer": ".",
          "correct": false
        },
        {
          "answer": "@",
          "correct": false
        },
        {
          "answer": "/",
          "correct": false
        },
      ]
    },
  ]

//   Substituição do quizz para a primeira pergunta

function init() {
    // criar a primeira pergunta
    createQuest(0);
}

// cria uma pergunta
function createQuest(i){
    // limpar a questão anterior
    let oldButtons = answerBox.querySelectorAll("button");

    oldButtons.forEach(function(btn){
        btn.remove();
    })

    // alterar o texto da pergunta
    let questionText = question.querySelector("#question-text");
    let questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    // Insere alternativas
    questions[i].answers.forEach(function(answer, i){
        
        // cria o template do botão do quizz
        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
        
        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer")

        letterBtn.textContent = letters[i]
        answer.textContent = answer["answer"]

        answerTemplate.setAttribute("correct-answer", answer["correct"])

        // Remover hide e templates class

        answerTemplate.classList.remove("hide")
        answerTemplate.classList.remove("answer-template")
        
        // Inserir alternativa na tela
        answerBox.appendChild(answerTemplate)
        
        // Inserir um envento click no botão
        answerTemplate.addEventListener("click", function(){
            console.log(this)
        })

    })

    // Incrementar o numero da questão 
    actualQuestion++
}

// Inicialização do quizz
init();