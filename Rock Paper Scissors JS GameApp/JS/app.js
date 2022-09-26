
const computerChoiceDisplay =  document.getElementById("computer-choice");
const userChoiceDisplay =  document.getElementById("user-choice");
const resultDisplay =  document.getElementById("result");
let userChoice;
let computerChoice;
let result;

const possibleChoices = document.querySelectorAll("button")
// for(var i = 0; i < possibleChoices; i++){
//     document.querySelectorAll("button")[i].addEventListener(click,function(e){
//         userChoice = e.target.id;                     //retrieves the id of the button clicked
//         userChoiceDisplay.innerHTML = userChoice;
//     });

possibleChoices.forEach(possibleChoice =>  possibleChoice.addEventListener("click",(e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    generateResult()
}))
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if(randomNumber === 1){
        computerChoice = "rock"
    }
     else if(randomNumber === 2){
        computerChoice = "scissors"
    }
    else
        computerChoice = "paper"
    
      computerChoice = computerChoiceDisplay.innerHTML = computerChoice 
}
function generateResult(){
    if (userChoice ===  computerChoice){
        result = " its a draw!"
    }
    else if(userChoice === "rock" && computerChoice === "scissors"){
        result = "You win"
    }
    else if(userChoice === "rock" && computerChoice === "paper"){
        result = "computer wins"
    }
    else if(userChoice === "paper" && computerChoice === "scissors"){
        result = "computer wins"
    }
    else if (userChoice === "paper" && computerChoice === "rock" ){
    
        result = "you win"
    }
    else if(userChoice === "paper" && computerChoice === "scissors"){
        result = "computer wins"  
}
    else if(userChoice === "scissors" && computerChoice === "paper"){
      result = "you win"
}
else if(userChoice === "scissors" && computerChoice === "rock"){
    result = "computer wins"
}
    resultDisplay.innerHTML = result 
}