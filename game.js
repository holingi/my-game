const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
const boxSize = 20;
const speed = 5;

function drawBox() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, boxSize, boxSize);
}

function moveBox(direction) {
    switch(direction) {
        case 'up':
            y -= speed;
            break;
        case 'down':
            y += speed;
            break;
        case 'left':
            x -= speed;
            break;
        case 'right':
            x += speed;
            break;
    }
    drawBox();
}

document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            moveBox('up');
            break;
        case 'ArrowDown':
            moveBox('down');
            break;
        case 'ArrowLeft':
            moveBox('left');
            break;
        case 'ArrowRight':
            moveBox('right');
            break;
    }
});

function handleTouch(event) {
    const direction = event.target.id;
    moveBox(direction);
}

document.getElementById('up').addEventListener('touchstart', handleTouch);
document.getElementById('down').addEventListener('touchstart', handleTouch);
document.getElementById('left').addEventListener('touchstart', handleTouch);
document.getElementById('right').addEventListener('touchstart', handleTouch);

document.getElementById('up').addEventListener('click', handleTouch);
document.getElementById('down').addEventListener('click', handleTouch);
document.getElementById('left').addEventListener('click', handleTouch);
document.getElementById('right').addEventListener('click', handleTouch);

drawBox();
