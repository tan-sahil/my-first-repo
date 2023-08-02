function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() *3);
    
    switch(randomNumber){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors"
    } 
}
let  computerSelection ;
let  playerChoice;
let  result;
// documents created;
const display = document.querySelector('.display');
const mainBody = document.querySelector('.choice')
const computerChoiceDisplay = document.createElement('h1');
const playerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const playerSelection = Array.from(document.querySelectorAll('.selected'));

function addingData(playerChoice){
    
    computerSelection = getComputerChoice();
    display.classList.add('text-size');
    display.appendChild(computerChoiceDisplay);
    display.appendChild(playerChoiceDisplay);
    mainBody.append(resultDisplay);
    computerChoiceDisplay.innerHTML =`Player Choice: ${playerChoice}, `;
    playerChoiceDisplay.innerHTML = `Computer Choice: ${computerSelection}, `;



}
const getResult =() =>{
    switch(playerChoice + computerSelection){
        case "rockscissor":
        case "paperrock" :
        case "rockscissor":
            resultDisplay.innerHTML = "you Win"
            break;
        
        case "scissorrock" :
        case "paperscissors":
        case "rockpaper" :
            resultDisplay.innerHTML ="you lose"
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            resultDisplay.innerHTML = "its a Draw "
        
    }
}

function selected(e){
    playerChoice = e.target.id;
    addingData(playerChoice);
    getResult();
}
 playerSelection.forEach(key => key.addEventListener('click', selected ));
