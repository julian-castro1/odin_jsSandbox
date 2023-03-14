let rBut, pBut, sBut, goBut, playerName, playScore, compScore, compOut, curButSelect;

document.addEventListener("DOMContentLoaded", function () {
  // statuses
  curButSelect = null;

  // buttons
  rBut = document.getElementById("rock");
  pBut = document.getElementById("paper");
  sBut = document.getElementById("scissors");
  goBut = document.getElementById("go");

  // fields
  playerName = document.getElementById("pName");
  playScore = document.getElementById("playerScore");
  compScore = document.getElementById("compScore");
  compOut = document.getElementById("compRes");

  // event listeners
  rBut.addEventListener("click", selectBut);
  pBut.addEventListener("click", selectBut);
  sBut.addEventListener("click", selectBut);

  goBut.addEventListener("click", go);

  playerName.addEventListener("click", changeName);
});



function onclick(){
    playRound();
}
function selectBut(){
  if(curButSelect != null){ curButSelect.style.backgroundColor = "#b8b8b8";}
  this.style.backgroundColor = "#a2ba9f";
  curButSelect = this;
}
function go(){
  if(curButSelect == null){ alert("no option selected"); return; }
  curButSelect.style.backgroundColor = "#b8b8b8";
  let choice = curButSelect.name;
  curButSelect = null;

  let winner = playRound(choice);
  if(winner == 't'){
    document.getElementById("screenLeft").style.backgroundColor = "#a5dfb1";
    document.getElementById("screenRight").style.backgroundColor = "#a5dfb1";
    setTimeout(function () {
      document.getElementById("screenLeft").style.backgroundColor = "#d9d9d9";
      document.getElementById("screenRight").style.backgroundColor = "#d9d9d9";
    }, 1000);
  } else if(winner == 'c'){
    document.getElementById("screenRight").style.backgroundColor = "#a5dfb1";
    compScore.innerHTML++;
    setTimeout(function () {
      document.getElementById("screenRight").style.backgroundColor = "#d9d9d9";
    }, 1000);
  } else {
    document.getElementById("screenLeft").style.backgroundColor = "#a5dfb1";
    playScore.innerHTML++;
    setTimeout(function () {
      document.getElementById("screenLeft").style.backgroundColor = "#d9d9d9";
    }, 1000);
  }
}
function changeName(){

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
    var perChoice = playerSelect;
    var compChoice = compOptions[Math.floor(Math.random() * compOptions.length)];
    compOut.innerHTML = compChoice;
    setTimeout(function () {
      compOut.innerHTML = "???";
    }, 2000);

    if(perChoice == compChoice){
        return "t";
    } else {
        // determine winner
        switch (perChoice) {
          case "paper":
            return compChoice == "rock" ? "p" : "c";
            break;
          case "rock":
            return compChoice == "scissors" ? "p" : "c";
            break;
          case "scissors":
            return compChoice == "rock" ? "c" : "p";
            break;
          default: alert("Invalid Selection!");
        }
    }
}