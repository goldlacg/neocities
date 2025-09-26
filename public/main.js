const draggable = document.querySelector(".draggable");

let isDragging = false;

draggable.addEventListener("mousedown", (event) => {
    isDragging = true;
})

document.addEventListener("mousemove", (event) =>{
    if (isDragging){
        draggable.style.left = `${event.clientX}px`
        draggable.style.top = `${event.clientY}px`
    }
    
})

document.addEventListener("mouseup", (event) => {
    isDragging = false;
})