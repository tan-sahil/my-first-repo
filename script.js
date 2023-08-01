function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() *3);
    
    switch(randomNumber){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors"
    } 
}
const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = Array.from(document.querySelectorAll('.selected'));


function selected(e){
   return e.target.id;
}
 playerSelection.forEach(key => key.addEventListener('click', selected ));
