document.getElementById("imagenef").addEventListener("click",moverse);

function moverse(){
   if (parrafo1.style.display === "none"){
    parrafo1.style.display ="block"
   } else{
    parrafo1.style.display = "none"
   }
}







var icono = document.getElementsByClassName("material-icons");
var texto = document.getElementsByClassName("parrafo-oreo");

console.log(icono)
console.log(texto)


var moverse2 = function(i){
    if (texto[i].style.display === "none"){
        texto[i].style.display ="block"
    } else{
        texto[i].style.display ="none"
    }   
}

for (var i=0; i < icono.length; i++){
    icono[i].addEventListener("click",moverse2(i));
}





// pepito.addEventListener("click",moverse2);


// document.getElementById("oreo").addEventListener("click",moverse2);

// document.getElementsByClassName("material-icons").addEventListener("click",moverse2);


// function moverse2(){
//     if (parrafo.style.display === "none"){
//         parrafo.style.display ="block"
//     } else{
//         parrafo.style.display = "none"
//     }
//  }


 