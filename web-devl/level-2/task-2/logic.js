// hamburger menu
let log = "true";
document.querySelector(".hamburger").addEventListener("click", function () {
  if (log === "true") {
    document.querySelector(".menu-cont").style.display = "block";
    document.querySelector(".hamburger").innerHTML =
      '<i class="fas fa-times"></i>';
    log = "false";
  } else {
    document.querySelector(".menu-cont").style.display = "none";
    document.querySelector(".hamburger").innerHTML =
      '<i class="fas fa-bars"></i>';
    log = "true";
  }
});

// update the screen size on resize
function updateSize() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  document.getElementById(
    "sizeInfo"
  ).innerText = `Width: ${width}px, Height: ${height}px`;
}
updateSize();
window.addEventListener("resize", updateSize);
