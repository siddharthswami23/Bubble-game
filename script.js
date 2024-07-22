
var timer = 60;
var score = 0;
var hitrn;

function increasescore(){
    score +=10;
    document.getElementById("scoreValue").textContent = score;
}

function decreasescore(){
    score -=10;
    document.getElementById("scoreValue").textContent = score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.getElementById("hitValue").textContent = hitrn;
}

function makeBubble() {

    var clutter = "";

    for (var i = 0; i <= 151; i++) {
        random = Math.floor(Math.random() * 10)
        clutter += ` <div class="bubble">${random}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = clutter
}
function runTimer() {
    var timerint = setInterval(function(){
        if(timer >=0){
            document.getElementById("timerValue").textContent = timer;
            timer--;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over</h1>"
        }
    }, 1000);

    
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.innerHTML);
    if(clickedNum === hitrn){
        increasescore();
        makeBubble();
        runTimer();
        getNewHit();
    }
    else{
        decreasescore();
        makeBubble();
        runTimer();
        getNewHit();
    }
})

makeBubble();
runTimer();
getNewHit();