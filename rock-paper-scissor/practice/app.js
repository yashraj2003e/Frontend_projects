const computerhand = document.querySelector(".computer-hand");
const userhand = document.querySelector(".user-hand");
const scoreComputer = document.querySelector(".score-computer");
const scoreUser = document.querySelector(".score-user");

const rockbtn = document.querySelector(".rock");
const paperbtn = document.querySelector(".paper");
const scissorbtn = document.querySelector(".scissor");

const allbtns = document.querySelectorAll(".selected-option button");

const options = ["rock","paper","scissors"]

const answer = options[Math.floor(Math.random()*options.length)]

// switch(answer) {
//     case "rock":
//         computerhand.src = "./assets/rock.png";
//         scoreComputer.innerText++;
//         break;
//     case "paper":
//         computerhand.src = "./assets/paper.png";
//         break;
//     case "scissors":
//         computerhand.src = "./assets/scissors.png";
//         break;
    
// }

allbtns.forEach(btn => {
    btn.addEventListener("click",e => {
        console.log(e.target);
    });
})
