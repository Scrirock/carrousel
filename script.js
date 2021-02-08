let li = document.querySelectorAll("li");
let i = 1;

function slideAuto(){
    for (let img of li){
        if (i === 10){
            for (let y = 10; y>0; y--) {
                for (let img of li) {
                    img.style.transform += "translateX(250px)";
                }
            }
            i = 0;
        }
        img.style.transform += "translateX(-250px)";
    }
    i++;
}

document.getElementById("droite").addEventListener("click", slideAuto);
setInterval(slideAuto, 3000);

document.getElementById("gauche").addEventListener("click", ()=>{
    for (let img of li){
        if (i === 1){
            for (let y = 10; y>0; y--) {
                for (let img of li) {
                    img.style.transform += "translateX(-250px)";
                }
            }
            i = 11;
        }
        img.style.transform += "translateX(250px)";
    }
    i--;
});