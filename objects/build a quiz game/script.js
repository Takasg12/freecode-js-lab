const questions = [
    {
        category: "Science",
        question: "What is the chemical symbol for water?",
        choices: ["H20", "CO2", "NaC1"],
        answer: "H20"
    },
    {
        category: "Geography",
        question: "What is the capital of France?",
        choices: ["Landon", "Barlin", "Paris"],
        answer: "Paris"
    },
    {
        category: "History",
        question: "Who was first president of the United States?",
        choices: ["Thomas Jefferson", "George Washington", "Abraham Lincoln"],
        answer: "George Washington"
    },
    {
        category: "Entertainment",
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        category: "Sports",
        question: "How many players are on a soccer team?",
        choices: ["9", "11", "13"],
        answer: "11"
    }
]

const getRandomQuestion = (questionsArray) => {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex]
}

const getRandomComputerChoice = (choicesArray) => {
    const randomIndex = Math.floor(Math.random() * choicesArray.length)
    return choicesArray[randomIndex]
}


const getResults = (questionObj, computerChoice) => {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!"
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`
    }
}

const randomQuestion = getRandomQuestion(questions);
console.log("Question :", randomQuestion.question)
const computerChoice = getRandomComputerChoice(randomQuestion.choices)
console.log("Computer choice:", computerChoice)

const result = getResults(randomQuestion, computerChoice)
console.log(result)