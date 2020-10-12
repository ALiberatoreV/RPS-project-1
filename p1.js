var rounds = prompt("How many rounds");

var r = parseInt(rounds);
// for(let i = 0;  r; i++);

var tie = 0;
var wins = 0;
var losses = 0;

for(let i = 0; i < r; i++){
    var player = prompt("Pick one rock / paper / scissors");
    var compChoice = Math.floor(Math.random() * 3);  //something is not working here

if(compChoice === 0){
    compChoice = "rock";
    
    if(player === compChoice){
        tie += 1;
        alert("you tied " + tie + " times");
    }else if(player === "paper"){
        wins += 1;
        alert("you Win " + wins + " times");
    }else if(player === "scissors"){
        losses += 1;
        alert("You lose " + losses + " times");
    }
} else if(compChoice === 1){
    compChoice = "paper";
    
    if(player === compChoice){
        tie += 1;
        alert("you tied " + tie + " times");
    }else if(player === "scissors"){
        wins += 1;
        alert("you Win " + wins + " times");
    }else if(player === "rock"){
        losses += 1;
        alert("You lose " + losses + " times");
    }
} else{
    compChoice = "scissors";
    
    if(player === compChoice){
        tie += 1;
        alert("you tied " + tie + " times");
    }else if(player === "rock"){
        wins += 1;
        alert("you Win " + wins + " times");
    }else if(player === "paper"){
        losses += 1;
        alert("You lose " + losses + " times");
    }
}}
alert("wins " + wins + " losses " + losses + " ties " + tie );
choice1 = player;
choice2 = compChoice;



console.log(compChoice)