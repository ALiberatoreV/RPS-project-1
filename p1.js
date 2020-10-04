var rounds = prompt("How many rounds");
var compChoice = Math.floor(Math.random() * 3);  //something is not working here
var r = parseInt(rounds);
for(let i = 0;  r; i++);
var player = prompt("Pick one rock / paper / sicssors");


if(compChoice === 0){
    compChoice === "rock";
} else if(compChoice === 1){
    compChoice === "paper";
} else{
    compChoice === "scissors";
}
choice1 = player;
choice2 = compChoice;

function compare( choice1, choice2){
    if(choice1 === choice2){
        alert("Tie");
    }
    if(choice1 === "paper"){
        if(choice2 === "rock"){
             alert("player wins");
            
        }
    }
    if(choice1 === "paper"){
        if(choice2 === "scissors"){
            alert("player loses");
        }
    }
}   if(choice1 === "rock"){
        if(choice2 === "scissors"){
            alert("player wins")
        }
    if(choice1 === "rock"){
        if(choice2 === "paper"){
            alert("player loses");
        }
    }
    if(choice1 === "scissors"){
        if(choice2 === "paper"){
            alert("player wins");
        }
    }
    if(choice1 === "scissors"){
         if(choice2 === "rock"){
            alert("player loses");
        }
    }
}   
console.log(compChoice)