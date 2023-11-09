var database = {
    "question1": 
    {
        "question": "What does “www” stand for in a website browser?",
        "choices": 
        {
            "choice1": "World Wide Web",
            "choice2": "Warm Winter Wishes",
            "choice3": "World Wide Waiting",
            "choice4": "World War Wan"
        },
        "answer":"World Wide Web"
    },
    "question2": 
    {
        "question": "How long is an Olympic swimming pool (in meters)?",
        "choices": 
        {
            "choice1": "200",
            "choice2": "50",
            "choice3": "25",
            "choice4": "100"
        },
        "answer":"50"
    },
    "question3": 
    {
        "question": "Which country do cities of Perth, Adelade & Brisbane belong to?",
        "choices": 
        {
            "choice1": "Australia",
            "choice2": "Germany",
            "choice3": "Canada",
            "choice4": "United Kingdom"
        },
        "answer":"Australia"
    },
    "question4": 
    {
        "question": "What geometric shape is generally used for stop signs?",
        "choices": 
        {
            "choice1": "Nanogon",
            "choice2": "Decagon",
            "choice3": "Octagon",
            "choice4": "Hexagon"
        },
        "answer":"Octagon"
    }
   
}

let questionNumber = 1
let inputArray = [], labelArray = [];
const div = document.createElement("div")

let score = 0;
let numOfQuestions = Object.keys(database).length
let question;


function setup(){

        generateProblem(questionNumber);
}

function showScore(){
    if(questionNumber == numOfQuestions){
        alert(`You scored ${score}/${numOfQuestions} or ${score/numOfQuestions*100}%`)
        window.location.reload()
    }  
    else{
        questionNumber++
        console.log(questionNumber)
        
        setProblem()
    }
}
function setProblem(){
    question.innerHTML  = database["question" + questionNumber].question
    let choiceNumber = 1;
    for(let i = 0; i < inputArray.length; i++){
        inputArray[i].checked = false
        inputArray[i].value = database["question" + questionNumber].choices["choice" + choiceNumber]
        labelArray[i].innerHTML = database["question" + questionNumber].choices["choice" + choiceNumber]
        choiceNumber++
    }
}

function generateProblem(questionNumber){
    question = document.createElement("h3")
    question.innerHTML  = database["question" + questionNumber].question
    
    const form = document.createElement("form")
    form.appendChild(question)

    form.setAttribute("onsubmit", "dothis();return false")

    for(let i = 1; i < 5; i++){
        let input = document.createElement("input")
        let label = document.createElement('label')
        const br = document.createElement("br")

        input.setAttribute("type", "radio")
        input.setAttribute("id", "choice" + i)
        input.setAttribute("name", "choices")       
        input.value = database["question" + questionNumber].choices["choice" + i]


        label.setAttribute("for", "choice" + i)
        label.innerHTML = database["question" + questionNumber].choices["choice" + i]

        inputArray.push(input)
        labelArray.push(label)

        form.appendChild(input)
        form.appendChild(label)
        form.appendChild(br)
        
    }

    const submit = document.createElement("input")
    submit.setAttribute("type", "submit")

    form.append(submit)

    div.appendChild(form)

    document.body.appendChild(div)
  
}

function checkAnswer(){

    for(const radio of inputArray)
    {
        if(radio.checked && radio.value == database["question" + questionNumber].answer){
            score++
        }
            
    }

}
function dothis(){
    if(validate())//radio selected
    {
        checkAnswer()
        showScore()
        
    }

}
function validate(){
    for(const radio of inputArray)
        if(radio.checked) return true
       
    alert("Please select an option before submiting")
}