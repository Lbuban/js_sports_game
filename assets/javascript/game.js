(function(){

let resetButton = document.querySelector("#reset");
  //console.log(resetButton);

let numberofResets = document.querySelector("#num-resets");
  //console.log(NumberofResets);

let teamOneShoot = document.querySelector("#teamone-shoot");
  //console.log(teamOneShoot);

let teamOneNumShots = document.querySelector("#teamone-numshots");
  //console.log(teamOneNumShots);

let teamTwoShoot = document.querySelector("#teamtwo-shoot");
  //console.log(teamTwoShoot);

let teamOneNumHits = document.querySelector("#teamone-numhits");
  //console.log(teamOneNumHits);

let teamTwoNumShots = document.querySelector("#teamtwo-numshots")
  //console.log(teamTwoNumShots);

let teamTwoNumHits = document.querySelector("#teamtwo-numhits")
  //console.log(teamTwoNumHits);

let sound = document.querySelector("#sound");

//Once Team One's SHOOT button is clicked, will add 1 to the shot counter.
//If the ramdomNumber produced is less than 3, shot will be missed. Everything else should produce a goal.)
teamOneShoot.addEventListener("click", function(){
  //console.log("button clicked");
  let randomNumber = (Math.random() * 5) + 1
  //alert(randomNumber);
  teamOneNumShots.innerHTML = parseInt(teamOneNumShots.innerHTML)+1;
  if (randomNumber < 5) {
    alert("Missed!");
  }
  else {
    alert("GOAAAALLLLLLLLL!!");
    teamOneNumHits.innerHTML = parseInt(teamOneNumHits.innerHTML)+1;
    sound.play()
  }
})

//Once Team Two's SHOOT button is clicked, will add 1 to the shot counter.
//If the ramdomNumber produced is less than 3, shot will be missed. Everything else should produce a goal.)
teamTwoShoot.addEventListener("click", function(){
  //console.log("button clicked");
  let randomNumber = (Math.random() * 5) + 1
  //alert(randomNumber);
  teamTwoNumShots.innerHTML = parseInt(teamTwoNumShots.innerHTML)+1;
  if (randomNumber < 5) {
    alert("Missed!");
  }
  else {
    alert("GOAAAALLLLLLLLL!!");
    teamTwoNumHits.innerHTML = parseInt(teamTwoNumHits.innerHTML)+1;
    sound.play()
  }
})
//Once the RESET button is clicked, add one to the reset counter.
resetButton.addEventListener("click", function(){
  //console.log("reset button clicked");
  numberofResets.innerHTML = parseInt(numberofResets.innerHTML)+1;
//Once the reset button is clicked, reset all goals and shots to zero.
  teamOneNumShots.innerHTML = 0;
  teamOneNumHits.innerHTML = 0;
  teamTwoNumShots.innerHTML = 0;
  teamTwoNumHits.innerHTML = 0;
})

//Once Team One or Team Two makes a goal, play a cheering crowd sound.




})();
