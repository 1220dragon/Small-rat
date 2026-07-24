let spinspeed = 0;
let spinDir = 0;

function spin() {
  document.querySelector("img").style.transform =
    "rotate(" + String(spinDir) + "deg" + ")";
  spinDir += spinspeed;
  spinspeed *= 0.995;
  setTimeout(spin, 1);
}

spin();

function spinFast() {
  spinspeed += 100;
}
