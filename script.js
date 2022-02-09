const colors = ["red", "orange", "green", "purple", "pink", "grey", "brown", "yellow", "#F1f5f8"];
let body = document.querySelector("body");
let bgtext = document.querySelector(".bgtext");
let btn = document.querySelector("button");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


btn.addEventListener("click", function() {
    let color = colors[getRandomInt(colors.length)];
    body.style.backgroundColor = color;
    bgtext.innerHTML = `Background Color : ${color}`;
})