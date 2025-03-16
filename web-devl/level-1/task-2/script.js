// random color generator
function randomColor() {
  let color;
  do {
    color =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
  } while (color.toUpperCase() === "#FFA500");
  return color;
}

document.querySelector(".clrBtn").addEventListener("click", function () {
  this.style.backgroundColor = randomColor();
});

// greetings generator in alert
function greetingsGenerator() {
  let hour = new Date().getHours();
  let grt;
  if (hour >= 0 && hour < 12) {
    grt = "Good Morning!";
  } else if (hour >= 12 && hour < 17) {
    grt = "Good Afternoon!";
  } else if (hour >= 17 && hour < 20) {
    grt = "Good Evening!";
  } else {
    grt = "Good night!";
  }
  alert(grt);
}

// a simple addition calculator
function add() {
  let a = document.querySelector("#num1").value;
  let b = document.querySelector("#num2").value;
  document.querySelector("#result").textContent = ` Result:- ${
    Number(a) + Number(b)
  }`;
}
