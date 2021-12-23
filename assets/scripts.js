var questionElement = document.getElementById ("questionElement")
var answer0 = document.getElementById ("answer0")
var answer1 = document.getElementById ("answer1")
var answer2 = document.getElementById ("answer2")
var answer3= document.getElementById ("answer3")
var questions = [
    "question number one",
    "question number two",
    "question number three",
    "question number four"
    
]

var answers = [
    [
        "answer number one",
        "answer number two",
        "answer number three",
        "answer number four"
    ],
    [
        "answer number one",
        "answer number two",
        "answer number three",
        "answer number four"
    ],
    [
        "answer number one",
        "answer number two",
        "answer number three",
        "answer number four"
    ],
    [
        "answer number one",
        "answer number two",
        "answer number three",
        "answer number four"
    ]

]

var currentQuestion = 0
function showQuestion () {
    
    questionElement.innerText = questions [currentQuestion];
    

    
        
    answer0.innerText = answers [currentQuestion] [0]
    answer1.innerText = answers [currentQuestion] [1]
    answer2.innerText = answers [currentQuestion] [2]
    answer3.innerText = answers [currentQuestion] [3]

  
    
  
  }
  document.getElementById("startButton").addEventListener("click", showQuestion)