const mole = document.getElementById("mole");
const score = document.getElementById("score");
const time = document.getElementById("time");
const bgMusic = document.getElementById("bg-music");

let num = 0;
score.innerText = "Score: " + num;
let secs = 400;
let gamestate = true;

function timer() {
   if(secs == 0){
      gamestate = false;
      time.innerText = "GAME OVER";
      bgMusic.pause();
   } else {
      secs--;
      time.innerText = secs;
   }
}
setInterval(timer, 1);

function relocate() {
   if(gamestate){
      let x = 5 + Math.random() * 90;
      let y = 15 + Math.random() * 45;
      mole.style.left = x + "%";
      mole.style.top = y + "%";

      let size = 100;
      mole.style.transform = `scale(1)`;

      setTimeout(() => {
         mole.style.transform = `scale(0.5)`;
      }, 100);

      num++;
      score.innerText = "Score: " + num;
      secs = 400;
      playSound();
   }
}

function playSound() {
   const audio = new Audio('crunch.mp3');
   audio.play();
}

mole.addEventListener("click", relocate);
