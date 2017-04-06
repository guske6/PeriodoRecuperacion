var arrastra = false;
var posimagenx = document.getElementById("imagen").offsetLeft;
var posimageny = document.getElementById("imagen").offsetTop;
var heightimg = document.getElementById("imagen").offsetHeight;
var widthimg = document.getElementById("imagen").offsetWidth;
var posratx = 0; // posición del ratón menos la posición inicial de la imagen
var posraty = 0;


function arrastrar(e){
    if (arrastra == false){
        arrastra = true;
        console.log(posimagenx);
        console.log(posimageny);
        document.getElementById("imagen").style.top = e.clientY - (heightimg/2) + "px";
        document.getElementById("imagen").style.left =  e.clientX - (widthimg/2) + "px";
    }
    else{
        arrastra = false;
    }
}

function movimiento(e){
    e.preventDefault();
    if (arrastra == true){
        document.getElementById("imagen").style.top = e.clientY - (heightimg/2) + "px";
        document.getElementById("imagen").style.left =  e.clientX - (widthimg/2) + "px";
    }
}
