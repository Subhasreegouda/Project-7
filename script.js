const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-content');
const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers-container');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;
let questions = [];

// (5 MCQs)
const mockQuizData = [
    {
        question: "What does the acronym 'CPU' stand for?",
        options: ["Central Process Unit", "Central Processing Unit", "Central Program Unit", "Central Print Unit"],
        correctAnswer: "Central Processing Unit"
    },
    {
        question: "Which of the following is the main function of an operating system?",
        options: ["Manage hardware resources", "Play games", "Perform calculations", "Run web browsers"],
        correctAnswer: "Manage hardware resources"
    },
    {
        question: "Which of the following is an example of an input device?",
        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
        correctAnswer: "Keyboard"
    },
    {
        question: "What is the full form of 'HTTP' in the context of the internet?",
        options: ["HyperText Transmission Protocol", "HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transport Protocol"],
        correctAnswer: "HyperText Transfer Protocol"
    },
    {
        question: " Which of the following is NOT an example of software?",
        options: ["Microsoft Word", "Windows OS", "Keyboard", "Photoshop"],
        correctAnswer: "Keyboard"
    }
];

// Start the quiz by fetching data (using mock data for now)
startButton.addEventListener('click', startQuiz);

nextButton.addEventListener('click', loadNextQuestion);

// Start the quiz by showing the first question
function startQuiz() {
    questions = mockQuizData; // Assigning mock data (simulate API call)
    quizContainer.style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    loadNextQuestion();
}

// Load next question
function loadNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answersContainer.innerHTML = '';

    currentQuestion.options.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => checkAnswer(answer));
        answersContainer.appendChild(button);
    });

    nextButton.style.display = 'none';  // Hide next button initially
}

// Check answer and update score
function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (answer === currentQuestion.correctAnswer) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
    }
    
    nextButton.style.display = 'inline-block';  // Show the next button
    currentQuestionIndex++;
}

// End the quiz and show the final score
function endQuiz() {
    alert(`Well done! You have secured marks ${score}`);
    location.reload(); // Restart the quiz
}
