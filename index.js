console.log("hello ");
let inpt = document.getElementById("inpt");
let secondContainer = document.querySelector(".secondContainer");
let current = document.querySelectorAll(".current");
let next = document.querySelectorAll(".next");

console.log(current, next);

let interval;
let interval2;
let val;
// let btn = document.getElementById("btn");
// btn.addEventListener("click", startCounter);

function startCounter() {
  val = parseInt(inpt.value);
  if (isNaN(val)) {
    window.alert("please enter a number");
    clearInterval(interval);
    inpt.value = "";
    return;
  }
  if (val < 0 && val > 99999) {
    alert("please enter a valid number");
    clearInterval(interval);
    inpt.value = "";
    return;
  }
  inpt.value = "";
  console.log(val);
  interval = animateSec(val);
}

function animateSec(val) {
  console.log("started");
  let count = 0;
  interval2 = setInterval(function () {
    if (count < val) {
      console.log(count);
      count++;
      increaseCount(current, next, 4);
    } else {
      console.log("completed");
      resetCount(current, next, 5);
      clearInterval(interval2);
      return;
    }
  }, 1000);
}

function resetCount(current, next, end) {
  for (let index = 0; index < end; index++) {
    current[index].innerHTML = 0;
    next[index].innerHTML = 1;
  }
}

function increaseCount(current, next, index) {
  let currentI = current[index];
  let nextI = next[index];

  if (currentI.innerHTML == 9) {
    increaseCount(current, next, index - 1);
  }
  nextI.classList.add("animate");
  setTimeout(() => {
    currentI.innerHTML = nextI.innerHTML;
    nextI.classList.remove("animate");
    nextI.innerHTML = parseInt(nextI.innerHTML) + 1;
    if (nextI.innerHTML > 9) {
      nextI.innerHTML = 0;
    }
  }, 500);
}
