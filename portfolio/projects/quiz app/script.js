const questions = [
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Seoul", correct: false },
      { text: "Bangkok", correct: false }
    ]
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false }
    ]
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    question: "Which is the largest ocean in the world?",
    answers: [
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Gold", correct: false },
      { text: "Osmium", correct: false },
      { text: "Oxide", correct: false }
    ]
  },
  {
    question: "In which year did World War II end?",
    answers: [
      { text: "1945", correct: true },
      { text: "1939", correct: false },
      { text: "1918", correct: false },
      { text: "1965", correct: false }
    ]
  },
  {
    question: "Which organ in the human body purifies blood?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Kidney", correct: true },
      { text: "Lungs", correct: false },
      { text: "Liver", correct: false }
    ]
  },
  {
    question: "Which language has the most native speakers?",
    answers: [
      { text: "English", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Spanish", correct: false },
      { text: "Hindi", correct: false }
    ]
  }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect){
    selectedBtn.classList.add('correct');
    score++;
  } else{
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === 'true'){
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButton.style.display = 'block';
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = 'block';
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  } else {
    showScore(); // ✅ now shows score after last question
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
