const draggable = document.querySelector(".draggable");

document.addEventListener("mousemove", (event) =>{
    draggable.style.left = `${event.clientX}px`
    draggable.style.top = `${event.clientY}px`
})