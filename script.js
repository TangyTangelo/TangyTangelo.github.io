const questions = [
    {
        question: "Name a place that's filled with people who don't want to be there?",
        answers: [
            { answer: "School", count: 36 },
            { answer: "Chapel", count: 18 },
            { answer: "Jail", count: 11 },
            { answer: "Assembly", count: 10 },
            { answer: "Hospital", count: 7 },
            { answer: "Detention", count: 7 },
            { answer: "PE", count: 6 },
            { answer: "Public Venues", count: 5 }
        ]
    },
    {
        question: "What is the most common thing students do when the teacher isn’t looking?",
        answers: [
            { answer: "Gaming", count: 60 },
            { answer: "Talking", count: 21 },
            { answer: "Work", count: 5 },
            { answer: "Get Distracted", count: 4 },
            { answer: "Photography", count: 3 },
            { answer: "Cry", count: 3 },
            { answer: "Sleep", count: 3 },
            { answer: "Vape", count: 1 }
        ]
    },
    {
        question: "What’s something students always forget to bring to class?",
        answers: [
            { answer: "Pens", count: 40 },
            { answer: "Homework", count: 23 },
            { answer: "Other Stationery", count: 15 },
            { answer: "iPad", count: 7 },
            { answer: "Motivation or brain", count: 7 },
            { answer: "Books", count: 4 },
            { answer: "Late slip", count: 3 },
            { answer: "Bag", count: 1 }
        ]
    },
    {
        question: "What’s something a teacher might say that students dread hearing?",
        answers: [
            { answer: "Test related", count: 29 },
            { answer: "Homework related", count: 23 },
            { answer: "DT related", count: 17 },
            { answer: "Incorrect uniform", count: 9 },
            { answer: "Books related", count: 8 },
            { answer: "I am disappointed", count: 6 },
            { answer: "Is that gaming I see", count: 5 },
            { answer: "Shut your devices", count: 3 }
        ]
    },
    {
        question: "What is the most common reason students are late to school?",
        answers: [
            { answer: "Train delays", count: 30 },
            { answer: "Traffic", count: 30 },
            { answer: "Public Transport", count: 12 },
            { answer: "Sleep in", count: 16 },
            { answer: "Forgetting", count: 6 },
            { answer: "Issues", count: 3 },
            { answer: "Blaming something", count: 2 },
            { answer: "No reason", count: 1 }
        ]
    },
    {
        question: "What’s something a student might panic about right before an exam?",
        answers: [
            { answer: "Study issues", count: 31 },
            { answer: "Content related", count: 19 },
            { answer: "Stationery issues", count: 13 },
            { answer: "Bathroom", count: 11 },
            { answer: "Failing", count: 9 },
            { answer: "Forgetting about the exam", count: 8 },
            { answer: "Turning up to the wrong location", count: 5 },
            { answer: "The next exam", count: 3 }
        ]
    },
    {
        question: "What’s something students are always running out of?",
        answers: [
            { answer: "Pens", count: 27 },
            { answer: "Time", count: 23 },
            { answer: "Money", count: 16 },
            { answer: "Battery", count: 14 },
            { answer: "Excuses", count: 8 },
            { answer: "Energy", count: 6 },
            { answer: "Brain cells", count: 4 },
            { answer: "Sleep", count: 2 }
        ]
    },
    {
        question: "What’s something students often forget to do in the morning?",
        answers: [
            { answer: "Brush Teeth", count: 27 },
            { answer: "Sign in", count: 21 },
            { answer: "Eat breakfast", count: 14 },
            { answer: "Charge iPad", count: 9 },
            { answer: "Pack", count: 9 },
            { answer: "Wake up", count: 8 },
            { answer: "Shower", count: 7 },
            { answer: "Sleep", count: 5 }
        ]
    },
    {
        question: "What’s something people buy but don’t always use?",
        answers: [
            { answer: "Specific stationery", count: 28 },
            { answer: "Personal items", count: 17 },
            { answer: "Gaming related", count: 14 },
            { answer: "Leisure related", count: 12 },
            { answer: "Gym access", count: 10 },
            { answer: "Food & Drink", count: 9 },
            { answer: "Insurance", count: 8 },
            { answer: "Umbrellas", count: 5 }
        ]
    },
    {
        question: "What’s something people do when they’re feeling stressed?",
        answers: [
            { answer: "Panic", count: 22 },
            { answer: "Eat/drink", count: 17 },
            { answer: "Gaming/entertainment", count: 14 },
            { answer: "Sleep", count: 13 },
            { answer: "Socialise", count: 10 },
            { answer: "Exercise", count: 9 },
            { answer: "Violence", count: 8 },
            { answer: "Music", count: 7 }
        ]
    },
    {
        question: "What’s something people do first thing in the morning?",
        answers: [
            { answer: "Wake up", count: 22 },
            { answer: "Eat/drink", count: 19 },
            { answer: "Hygiene", count: 18 },
            { answer: "Check phone", count: 13 },
            { answer: "Fall asleep again", count: 9 },
            { answer: "Rot", count: 9 },
            { answer: "Get dressed", count: 7 },
            { answer: "Sign in", count: 3 }
        ]
    },
    {
        question: "What's something people often say they'll start but never do?",
        answers: [
            { answer: "Study", count: 28 },
            { answer: "Exercise", count: 20 },
            { answer: "Improve self", count: 13 },
            { answer: "Procrastinate", count: 11 },
            { answer: "Work", count: 8 },
            { answer: "Eat healthier", count: 7 },
            { answer: "Socialise more", count: 7 },
            { answer: "Sleep", count: 6 }
        ]
    }
];

let currentQuestionIndex = 0;
let incorrectCount = 1;

window.onload = function() {
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const cards = document.querySelectorAll(".card");

    questionElement.textContent = questions[currentQuestionIndex].question;

    cards.forEach((card, index) => {
        if (questions[currentQuestionIndex].answers[index]) {
            card.textContent = `Answer ${index + 1}`;
            card.dataset.answer = `${questions[currentQuestionIndex].answers[index].answer} (${questions[currentQuestionIndex].answers[index].count})`; // Store the actual answer with count
            card.classList.remove("flipped"); 
        } else {
            card.textContent = ''; 
        }
    });
}

function flipCard(card) {
    if (card.classList.contains("flipped")) {
        card.textContent = `Answer ${Array.from(card.parentNode.children).indexOf(card) + 1}`;
    } else {
        card.textContent = card.dataset.answer; 
    }
    card.classList.toggle("flipped");
}

function prevQuestion() {
    currentQuestionIndex = (currentQuestionIndex - 1 + questions.length) % questions.length;
    loadQuestion();
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    loadQuestion();
}

function incorrectAnswer() {
    incorrectCount++;
    showBigX();
    updateIncorrectCountDisplay();
}

function showBigX() {
    if (incorrectCount > 3) {
        incorrectCount = 1;
    };
    const bigXElement = document.getElementById("incorrectCount");
    bigXElement.style.display = "block"; // Show the "X"
    setTimeout(() => {
        bigXElement.style.display = "none"; // Hide after a brief delay
    }, 2000); // Adjust duration as needed
    
}

function resetIncorrectCount() {
    incorrectCount = 1;
    updateIncorrectCountDisplay();
}

function updateIncorrectCountDisplay() {
    const incorrectCountElement = document.getElementById("incorrectCount");
    incorrectCountElement.textContent = `X`.repeat(incorrectCount); // If you want multiple Xs to be shown
}
