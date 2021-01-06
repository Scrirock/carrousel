let cadre = document.getElementById("container");
let i = 2;

setInterval(()=>{
    cadre.style.backgroundImage = 'url("'+ i +'.jpg")';
    if (i<10) i++;
    else i = 1;
}, 3000);