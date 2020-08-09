const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionBox = document.getElementById("question-box")
const quest = document.getElementById("question")
const answerGrid=document.getElementById("option-btn")
startButton.addEventListener("click",startGame)

function startGame()
{
    startButton.classList.add('hide')
    questionBox.classList.remove('hide')
    shuffleQuest = questionss.sort(() => Math.random - 0.5)
    currentQues = 0
    showQuestion(shuffleQuest[currentQues])
}

function showQuestion(question)
{
    resetState()
    questionBox.innerHTML=question.question
    question.answerss.array.forEach(answer => {
        const button =document.createElement("button")
        button.innerHTML=answerss.text
        button.classList.add('btn')
        if(answerss.correct)
        {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerGrid.appendChild(button)
    });

}


function resetState()
{
    nextButton.classList.add('hide')
    while(answerGrid.firstChild)
    {
        answerGrid.removeChild(answerGrid.firstChild)
    }
}

function selectAnswer(e)
{

}

const questionss = 
[
    {
        question: "Capital city of Pakistan??",
    answerss: 
    [
        {text:"Islamabad",correct:true},{text:"Lahore",correct:false},{text:"Karachi",correct:false},{text:"Attock",correct:false}
    ]
    }
    
]