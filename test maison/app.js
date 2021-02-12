let li = document.querySelectorAll("li");
let i = 1;

function moveRight(){
    for (let img of li){
        if (i === 11){
            for (let y = 11; y>0; y--) {
                for (let img of li) {
                    img.style.transitionDuration = "0s";
                    img.style.transform += "translateX(450px)";
                }
            }
            setTimeout(()=>{
                for (let img of li) {
                    img.style.transitionDuration = "1s";
                    img.style.transform += "translateX(-450px)";
                }
            }, 50);
            i = 1;
        }
        img.style.transform += "translateX(-450px)";
    }
    i++;
}

document.getElementById("droite").addEventListener("click", moveRight);
setInterval(moveRight, 5000);

document.getElementById("gauche").addEventListener("click", ()=>{
    for (let img of li){
        if (i === 1){
            for (let y = 11; y>0; y--) {
                for (let img of li) {
                    img.style.transitionDuration = "0s";
                    img.style.transform += "translateX(-450px)";
                }
            }
            setTimeout(()=>{
                for (let img of li) {
                    img.style.transitionDuration = "1s";
                    img.style.transform += "translateX(450px)";
                }
            }, 50);
            i = 11;
        }
        img.style.transform += "translateX(450px)";
    }
    i--;
});