document.addEventListener("DOMContentLoaded", function () {
  var outField = document.getElementById("out");
  var but = document.querySelector("button");
  but.addEventListener("click", onclick)
  var inputs = document.querySelectorAll('input');
});
function onclick(){
    playRound();
}

function won(str){
    var outField = document.getElementById("out");
    console.log(name + " mightve won");
    var name = document.getElementById('player').value;
    switch(str){
        case 't': outField.textContent = "Tie!"; break;
        case 'p': outField.textContent = name + " wins!"; break;
        case 'c': outField.textContent = "Computer wins!"; break;
    }
}
function playRound(playerSelect){
    var compOptions = ['paper','rock','scissors'];
    var perChoice = document.getElementById('selection').value;
    var compChoice = compOptions[Math.floor(Math.random() * compOptions.length)];

    if(perChoice == compChoice){
        won('t');
    } else {
        // determine winner
        switch (perChoice) {
          case "paper":
            compChoice == "rock" ? won("p") : won("c");
            break;
          case "rock":
            compChoice == "scissors" ? won("p") : won("c");
            break;
          case "scissors":
            compChoice == "rock" ? won("c") : won("p");
            break;
          default: document.getElementById("out").textContent = "Invalid Selection!"
        }
    }
}