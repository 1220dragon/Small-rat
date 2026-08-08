document.querySelector("img").addEventListener("click", increaseScore);
let score = 0;
function increaseScore() {
  score++;
  document.querySelector("h2").innerHTML = score;
}
