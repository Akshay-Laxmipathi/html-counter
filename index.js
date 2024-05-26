let counter = document.getElementById("counter");
let error = document.getElementById("error");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let clear = document.getElementById("clear");

let count = 0;
counter.innerText = `Your Current Count is: ${count}`;
clear.classList.add("hidden");
error.classList.add("invisible");

increment.addEventListener("click", () => {
  count++;
  counter.innerText = `Your Current Count is: ${count}`;
  clear.classList.remove("hidden");
  error.classList.add("invisible");
});

decrement.addEventListener("click", () => {
  count--;
  if (count == 0) {
    clear.classList.add("hidden");
  }
  if (count < 0) {
    count = 0;
    error.classList.remove("invisible");
  }
  counter.innerText = `Your Current Count is: ${count}`;
});

clear.addEventListener("click", () => {
  count = 0;
  counter.innerText = `Your Current Count is: ${count}`;
  clear.classList.add("hidden");
});
