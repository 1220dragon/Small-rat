let spinspeed = 1;
let spinDir = 0;

function spin() {
  document.querySelector("img").style.transform =
    "rotate(" + String(spinDir) + "deg" + ")";
  spinDir += spinspeed;
  setTimeout(spin, 1);
}

spin();

function spinFaster() {
  spinspeed *= 2;
}
