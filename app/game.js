const flappyPlane = document.getElementById("planeGame");
const context = flappyPlane.getContext("2d");

const plane = new Image();
    plane.src = "img/planeRed1.png";

const background = new Image();
    background.src = "img/background.png";

const foreground = new Image();
    foreground.src = "img/groundGrass.png";

const hillUp = new Image();
    hillUp.src = "img/rockGrass.png";

const hillDown = new Image();
    hillDown.src = "img/rockGrassDown.png";

let gap = 90; //? Отступ между холмами

function render() {
    context.drawImage(background, 0, 0);
    context.drawImage(hillDown, 100, 0);
    context.drawImage(hillUp, 100, 0 + hillUp.height + gap);
    context.drawImage(foreground, 0, flappyPlane.height - foreground.height);
    context.drawImage(plane, 10, 150, 45, 35)

}

hillDown.onload = render;