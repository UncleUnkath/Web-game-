const carrot = document.getElementById("carrot");// declaring variable of carrot
const spike = document.getElementById("spike"); // declaring variable of spike
var scoreBoard = document.querySelector('.score span')
var score = 0

function jump() {
    if(carrot.classList != jump){
    carrot.classList.add("jump");
     setTimeout(function() {       // defines the jump function
        carrot.classList.remove("jump");
    }, 300);
    }
}

let isAlive = setInterval(function () {
   let carrotTop = parseInt(window.getComputedStyle(carrot).getPropertyValue("top")); // gets the Y cord of carrot
   let spikeLeft = parseInt(window.getComputedStyle(spike).getPropertyValue("left")); //  get X cord of carot

   if(spikeLeft < 50 && spikeLeft > 0 && carrotTop >= 140) {
       alert("GAME OVER");  // this is our collision, if the cords change due to carrot and spike hitting the system will be alerted and output to the user
       score = 0
       window.location.reload();
   }
   
}, 10);


document.addEventListener('keydown', event => {  // when the spacebar is pressed, the function "jump" is called.
    if (event.code === 'Space') {
      jump();
      score = score + 1;
      scoreBoard.innerText = score
    }
  })

