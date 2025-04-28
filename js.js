let button = document.getElementById("navbar");
let sidebar = document.getElementById("sidebar");
let back = document.getElementById("back");
let play = document.getElementById("play");
let pause = document.getElementById("pause");

function sidebarOn(){
    toggle = false;
    button.addEventListener("click", () => {
        sidebar.style.display = "flex";
        toggle = true;
    })
}

function backSide() {
    back.addEventListener("click", () => {
        toggle = false;
        sidebar.style.display = "none";
    })
}

// function isPlaying() {
//     Playing = false;

//     if(!Playing){
//         pause.style.border = "3px solid #FF6846";
//         pause.style.color = "white";
//     }
//     else{
//         play.style.border = "3px solid #FF6846";
//         play.style.color = "white";
//     }
// }

const disc = document.getElementById('disc');
const audio = document.querySelector('audio');

let rotating = false;
let angle = 0;

function rotate() {
  if (rotating) {
    angle += 1;
    disc.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotate);
  }
}

audio.addEventListener('play', () => {
  rotating = true;
  rotate();
});

audio.addEventListener('pause', () => {
  rotating = false;
});

audio.addEventListener('ended', () => {
  rotating = false;
});
