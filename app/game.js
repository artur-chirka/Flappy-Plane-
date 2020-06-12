const canvas = document.getElementById("planeGame");
const context = canvas.getContext("2d");

let plane = new Image();
let background = new Image();
let foreground = new Image();
let hillUp = new Image();
let hillDown = new Image();
plane.src = "img/planeRed1.png";
background.src = "img/background.png";
foreground.src = "img/groundGrass.png";
hillUp.src = "img/hillUp.png";
hillDown.src = "img/hillDown.png";


let  scoreMusic = new Audio();
scoreMusic.src = 'audio/score.wav';

//счет
let score = 0;

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
    x: canvas.width,
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
        context.drawImage(hillDown, hill[i].x, hill[i].y + hillUp.height + gap, 120, 250);
        context.drawImage(hillUp, hill[i].x, hill[i].y, 120, 250);

        hill[i].x--;

        if (hill[i].x == 550) {
            hill.push({
                x: canvas.width,
                y: Math.floor(Math.random() * hillUp.height) - hillUp.height
            });
        }

        //Отслеживание ударов
        if (positionX + plane.width >= hill[i].x &&
            positionX <= hill[i].x + hillUp.width &&
            (positionY <= hill[i].y + hillUp.height ||
                positionY + plane.height >= hill[i].y + hillUp.height + gap) || positionY + plane.height >= canvas.height - foreground.height) {
            location.reload();
            return false; // Перезагружаем игру
        }

        if (hill[i].x == 350) {
            score++;
            scoreMusic.play();
        } // кол-во набраных очков
    }

    context.drawImage(foreground, 0, canvas.height - foreground.height);

    context.drawImage(plane, positionX, positionY, 45, 35)

    positionY += flight;
    
    context.fillStyle = '#000';
    context.font = '24px kenvector_future';
    context.fillText('Score: ' + score, 30, canvas.height - 430);
    
    requestAnimationFrame(render);
}

//GAME OVER

hillDown.onload = render;