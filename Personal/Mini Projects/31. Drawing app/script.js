const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let color = "black";
let x
let y

let isPressed = false;
canvas.addEventListener("mousedown", (e) => {

    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
 })

canvas.addEventListener("mouseup", (e) => {

    isPressed = false;

    x = undefined;
    y = undefined;
 })

 canvas.addEventListener("mousemove", (e) => {

     if (isPressed)
     {
         const x2 = e.offsetX;
         const y2 = e.offsetY;

         drawCircle(x2, y2)
         drawLine(x, y, x2, y2);

         x = x2;
         y = y2;
     }
 })

function drawCircle(x, y) {

    ctx.beginPath();
    ctx.arc(x, y, size,0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}





const inc = document.querySelector(".increase");
const dec = document.querySelector(".decrease");
const brushSize = document.getElementById("size");
inc.addEventListener("click", ()=>{

    size = size + 1;
    brushSize.textContent = size;
})
dec.addEventListener("click", () => {

    size = size - 1;
    brushSize.textContent = size;
})

const colorInput = document.querySelector(".color");


colorInput.addEventListener("input", () => {

    color = colorInput.value
})

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

})
