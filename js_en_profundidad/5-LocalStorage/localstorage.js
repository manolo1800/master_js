'use strict'

/*if(typeof(localStorage) !== "undefined"){
    console.log("Localstorage es conpatible con este navegador");
}else{
    console.log("Localstorage no es conpatible con este navegador");
}*/


window.addEventListener("load",function(){

    var i=0;
    
    var formulario=document.querySelector("#formulario");
    formulario.addEventListener("submit",function(){

        //captura de datos
        var nombre=document.querySelector("#nombre").value;
        var apellido=document.querySelector("#apellido").value;
        var email=document.querySelector("#email").value;
        var password=document.querySelector("#password").value;

        var usuario={
            nombre:nombre,
            apellido:apellido,
            email:email,
            password:password
        };

        //guardar objetos en el local storage
        localStorage.setItem("usuario",JSON.stringify(usuario));
        
         
        
    });
    
});