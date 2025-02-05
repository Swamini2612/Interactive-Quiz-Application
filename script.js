const questions = [
    {
        question: "1. What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "2. Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "3. Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "4. What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "5. What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "N2"],
        correctAnswer: "H2O"
    },
    {
        question: "6. Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "7. What is the smallest planet in our solar system?",
        options: ["Earth", "Mars", "Mercury", "Venus"],
        correctAnswer: "Mercury"
    },
    {
        question: "8. Who is known as the father of modern physics?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "9. What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        correctAnswer: "Diamond"
    },
    {
        question: "10. Which country is famous for the maple leaf?",
        options: ["USA", "Canada", "Australia", "UK"],
        correctAnswer: "Canada"
    }

];

let currentQuestionIndex = 0;
let score = 0;

const questionTextElement = document.getElementById('question-text');
const answerOptionsElement = document.getElementById('answer-options');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

// Load a question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    questionTextElement.innerHTML = currentQuestion.question;
    answerOptionsElement.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => handleAnswer(option);
        answerOptionsElement.appendChild(button);
    });
}

// Handle an answer click
function handleAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results after the quiz is finished
function showResults() {
    questionTextElement.innerHTML = "Quiz Completed!";
    answerOptionsElement.innerHTML = '';
    resultContainer.classList.remove('hidden');
    scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
}

// Restart the quiz
restartButton.onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    loadQuestion();
};

// Initialize quiz
loadQuestion();
