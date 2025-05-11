const p1={
    score: 0,
    display: document.querySelector('#p1s'),
    button: document.querySelector('#p1b')
}
const p2={
    score: 0,
    display: document.querySelector('#p2s'),
    button: document.querySelector('#p2b')
}
const re = document.querySelector('#reset');
const slist = document.querySelector('#slist');
const gameList = document.querySelector('#gameList');
const gameImg = document.querySelector('#gameImg');
const gameName = document.querySelector('#gameName');
let isGameOver = false;
let winScr = 3;
const gameImages = {
    "Ping_Pong": "assets/ping_pong.avif",
    "Rock-Paper-Scissors": "assets/rock_paper_scissors.jpg",
    "Tick-Tac-Toe": "assets/tic_tac_toe.jpg",
    "Foosball": "assets/foosball1.jpg",
    "Jenga": "assets/jenga.jpg",
    "Pickleball_(Singles)": "assets/pickleball.jpg",
    "Arm_Wrestling": "assets/Armwrestling.jpg"
  };
  
  gameList.addEventListener('change', () => {
    gameName.innerText = gameList.value;
    gameImg.src = gameImages[gameList.value] || 'assets/default.jpg';
    reset();
  });
  gameImg.onerror = () => {
    alert('⚠️ Image failed to load! Check if the file name and extension are correct.');
  };
  
function updateScores(player, opponent){
    if(! isGameOver){
        player.score++;
        if(player.score === winScr){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}
p1.button.addEventListener('click',() => {
    updateScores(p1,p2);
})
slist.addEventListener('change',function() {
   winScr = parseInt(this.value);
    reset();
})
p2.button.addEventListener('click',() => {
    updateScores(p2,p1);
})
re.addEventListener('click', reset);

function reset (){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }

    
}