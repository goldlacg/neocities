const draggable = document.querySelector(".draggable");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

draggable.addEventListener("mousedown", (event) => {
    isDragging = true;
    offsetX = event.clientX - draggable.offsetLeft
    offsetY = event.clientY - draggable.offsetTop
})

document.addEventListener("mousemove", (event) =>{
    if (isDragging){
        draggable.style.left = `${event.clientX - offsetX}px`
        draggable.style.top = `${event.clientY - offsetY}px`
    }
    
})

document.addEventListener("mouseup", (event) => {
    isDragging = false;
})