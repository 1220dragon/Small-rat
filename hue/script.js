image = document.querySelector("#image");
let hue = 0;
let speed = false;

function changeColor() {
  image.style.filter = "hue-rotate(" + hue + "deg)";
  hue++;
  setTimeout(changeColor, speed);
}

image.addEventListener("click", function (event) {
  if (!speed) {
    let speed = 10;
    setTimeout(changeColor, speed);
  } else {
    speed /= 2;
  }
});
