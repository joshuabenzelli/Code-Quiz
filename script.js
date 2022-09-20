var startBtn = document.querySelector("#start");
var header = document.querySelector(".headerClass");
var desc = document.querySelector("#desc");
var timerEl = document.getElementById("countdown");

function start(){
    startBtn.style.display = "none";
    header.style.display = "none";
    desc.style.display = "none";
    var timer = 29;

  var timeInterval = setInterval(function () {
    if (timer > 1) {
      timerEl.textContent = timer + ' seconds remaining';
      timer--;
    } else if (timer === 1) {
      timerEl.textContent = timer + ' second remaining';
      timer--;
    } else {
      timerEl.textContent = '0 seconds remaining!';
      clearInterval(timeInterval);
    };
    
}, 1000)};

startBtn.addEventListener("click", function() {
    start();
});