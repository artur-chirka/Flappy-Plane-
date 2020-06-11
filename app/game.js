let flappyPlane = document.getElementById("planeGame");
let context = flappyPlane.getContext("2d");

let plane = new Image();
    plane.src = "img/planeRed1.png";

let background = new Image();
    background.src = "img/background.png";

let foreground = new Image();
    foreground.src = "img/groundGrass.png";

let hillUp = new Image();
    hillUp.src = "img/rockGrass.png";

let hillDown = new Image();
    hillDown.src = "img/rockGrassDown.png";

function render() {
    context.drawImage(background, 0, 0);
    context.drawImage(hillDown, 100, 0)
}

hillDown.onload = render;