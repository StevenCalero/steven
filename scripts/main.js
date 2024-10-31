let miImage = document.querySelector("img");
miImage.onclick = function(){
    let miSrc = miImage.getAttribute("src");
    if(miSrc === "images/imagen-01.jpg"){
        miImage.setAttribute("src","images/imagen-02.png");
        
    }else{
        miImage.setAttribute("src","images/imagen-01.jpg");
    }
}

let mi_boton = document.querySelector("button");
let mi_Titulo = document.querySelector("h1");

function establece_nombreUser(){
    let mi_nombre = prompt("Por favor ingrese su Nombre");

    if(!mi_nombre){
        establece_nombreUser();
        
    }else{

        localStorage.setItem("Nombre",mi_nombre);
        mi_Titulo.textContent = "Estas Aprendiendo," + mi_nombre;
    }

    
}

    if(!localStorage.getItem("Nombre")){
        establece_nombreUser();

    }else{
        let nombre_almacenado = localStorage.getItem("Nombre");
        mi_Titulo.textContent = "Estas Aprendiendo Super," + nombre_almacenado;
    }
    mi_boton.onclick = function(){
        establece_nombreUser();
    }