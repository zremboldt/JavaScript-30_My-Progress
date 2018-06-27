// https://www.youtube.com/watch?v=8ZGAzJ0drl0&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=8

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 12;
ctx.globalCompositeOperation = 'multiply';
// ctx.filter = 'blur(20px)';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

draw = (e) => {
  if (!isDrawing) return; // Will stop fn from running when mouse clicker isn't down.
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;

  hue ++;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 10) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

//on mouse move, run draw function.
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);