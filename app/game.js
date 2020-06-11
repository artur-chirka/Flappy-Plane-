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

//? Отступ между холмами
let gap = 200;

//?Управление
document.addEventListener('keydown', moveUp);

function moveUp() {
    positionY -= 25;
}

//Отрисовка холмов
let hill = [];

hill[0] = {
    x: flappyPlane.width,
    y: 0
}



//?Полет 
let positionX = 350;
let positionY = 150;
let flight = 1;


//*Рендер
function render() {
    context.drawImage(background, 0, 0);

    for (let i = 0; i < hill.length; i++) {
        context.drawImage(hillDown, hill[i].x, hill[i].y, 100, 250);
        context.drawImage(hillUp, hill[i].x, hill[i].y + hillUp.height + gap, 100, 250);

        hill[i].x--;

        if (hill[i].x == 550) {
            hill.push({
                x: flappyPlane.width,
                y: Math.floor(Math.random() * hillUp.height) - hillUp.height
            });
        }

        //Отслеживание ударов
        if (positionX + plane.width >= hill[i].x &&
            positionX <= hill[i].x + hillUp.width &&
            (positionY <= hill[i].y + hillUp.height ||
                positionY + plane.height >= hill[i].y + hillUp.height + gap || positionY + plane.height >= flappyPlane.height - foreground.height)) {
            location.reload(); // Перезагружаем игру
        }


    }

    context.drawImage(foreground, 0, flappyPlane.height - foreground.height);

    context.drawImage(plane, positionX, positionY, 45, 35)
    positionY += flight;
    requestAnimationFrame(render);

}

hillDown.onload = render;