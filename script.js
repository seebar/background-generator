var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector(".random");

function bodyBackground(){
    body.style.background = "linear-gradient(to right, " + color1.value  + " ," 
    + color2.value + ")";

    css.textContent = body.style.background + ";";

}

function randomColor() {
    var characters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

function randomGradient() {
    color1.value = randomColor();
    color2.value = randomColor();
    bodyBackground();
}

color1.addEventListener("input", bodyBackground);

color2.addEventListener("input", bodyBackground);

randomBtn.addEventListener("click", randomGradient);
