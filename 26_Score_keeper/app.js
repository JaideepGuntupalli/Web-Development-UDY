const scores = document.querySelectorAll("#scores span");
const p1Up = document.querySelector("#p1-up");
const p2Up = document.querySelector("#p2-up");
const reset = document.querySelector("#reset");
const gamePt = document.querySelector("#playing");
let p1Score = 0;
let p2Score = 0;
let gamePoint = 5;

function disableBtns(value) {
    p1Up.disabled = value;
    p2Up.disabled = value;
}

function won(sco,idx) {
    if (sco == gamePoint) {
        scores[idx].style.color = "green";
        scores[1-idx].style.color = "red";
        disableBtns(true);   
    }
    scores[idx].innerText = sco;
}

gamePt.addEventListener('change',(e) => {
    gamePoint = e.target.value;
})

p1Up.addEventListener('click',() => {
    p1Score += 1;
    won(p1Score,0);
})

p2Up.addEventListener('click',() => {
    p2Score += 1;
    won(p2Score,1);
})

reset.addEventListener('click', () => {
    disableBtns(false);
    p1Score = 0;
    p2Score = 0;
    gamePoint = 5;
    gamePt.selectedIndex = 0;
    scores.forEach(score => {
        score.innerText = 0;
        score.style.color = "black";
    })
})

