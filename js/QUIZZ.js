const quizData = [
    {
        question: "What does API stand for?",
        a: "Application Programming Interface",
        b: "Advanced Programming Interface",
        c: "Automated Programming Interface",
        d: "All of the above",
        correct: "a",
    },
    {
        question: "Which of the following is a front-end programming language?",
        a: "Java",
        b: "Python",
        c: "HTML",
        d: "PHP",
        correct: "c",
    },
    {
        question: "What is the purpose of CSS?",
        a: "To create dynamic web content",
        b: "To style the appearance of web pages",
        c: "To handle server-side logic",
        d: "To manage databases",
        correct: "b",
    },
    {
        question: "What is the primary function of JavaScript?",
        a: "To style web pages",
        b: "To provide structure to web content",
        c: "To add interactivity to web pages",
        d: "To design user interfaces",
        correct: "c",
    },
    {
        question: "What does DOM stand for in web development?",
        a: "Document Object Model",
        b: "Data Object Model",
        c: "Digital Object Model",
        d: "Dynamic Object Model",
        correct: "a",
    },
    {
        question: "Which of the following is a version control system?",
        a: "FTP",
        b: "Git",
        c: "SSH",
        d: "HTTP",
        correct: "b",
    },
   
    {
        question: "Which HTML tag is used for creating hyperlinks?",
        a: "<link>",
        b: "<href>",
        c: "<a>",
        d: "<url>",
        correct: "c",
    },
];


const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
 function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
};
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
};
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
};
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})