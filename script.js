const box1=document.getElementById("box");
let x=0;
let y=0;
const move=10;


document.addEventListener("keydown", event=>{
    box1.textContent="😘";
    box1.style.backgroundColor="tomato"
    if(event.key.startsWith("Arrow")){
        event.preventDefault()

        switch(event.key){
            case "ArrowUp":
                y-=move;
                break;
            case "ArrowDown":
                y+=move;
                break;
            case "ArrowLeft":
                x-=move;
                break;
            case "ArrowRight":
                x+=move;
                break;
        }
        
        box1.style.top= `${y}px`;
        box1.style.left= `${x}px`;
    }
}
)

document.addEventListener("keyup", event=>{
    box1.textContent="😢";
    box1.style.backgroundColor="aqua"
})
