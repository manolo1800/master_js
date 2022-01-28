'use strict'

//----------------------------------------------EVENTO LOAD -------------------------------

//ejecuta el codigo que esta dentro del callback despues de que todos los elementos del dom esten cargados
//de esta forma se puede colocar la etiqueta script en el head como debe de ser

window.addEventListener("load",()=>{

    //--------------------------EVENTOS DEL RATON ---------------------------------------------

    function cambiarColor(){
        console.log("me haz dado click");

        var bg = boton.style.backgroundColor;

        console.log(bg);

        if(bg == "green"){
            boton.style.backgroundColor="red";
        }else{
            boton.style.backgroundColor="green";
        }

        return true;
    }

    var boton=document.querySelector("#boton");

    boton.addEventListener('click',function(){
        cambiarColor();
    });

    //MAUSE OVER
    boton.addEventListener('mouseover',function(){
        boton.style.backgroundColor="red";
    });

    //MAUSE OUT
    boton.addEventListener('mouseout',function(){
        boton.style.backgroundColor="blue";
    });

    //----------------------------------------------EVENTO DE TECLADO Y TECLADO-------------------------------
    var input = document.querySelector("#campo_nombre");

    //FOCUS

    input.addEventListener("focus",function(){
        console.log("estas dentro del input");
    });

    //BLUR

    input.addEventListener("blur",function(event){
        console.log("[blur] estas fuera del input",String.fromCharCode(event.keyCode));
    });

    //KEYDOWN 

    input.addEventListener("keydown",function(event){
        console.log("[keydown] estas pulsando esta tecla",String.fromCharCode(event.keyCode));
    });

    //KEYPRESS

    input.addEventListener("keypress",function(event){
        console.log("[keypress] estas pulsando esta tecla",String.fromCharCode(event.keyCode));
    });

    //keyup

    input.addEventListener("keyup",function(event){
        console.log("[keyup] estas pulsando esta tecla",String.fromCharCode(event.keyCode));
    });

    //----------------------------------------------EVENTO TIMER -------------------------------
    var h1=document.querySelector("h1");
    h1.innerHTML="timer";

    function intervalo(){
        var tiempo=setInterval(()=>{
            cambiarColor();
        },3000);

        return tiempo;
    }

    var tiempo=intervalo();

    boton.addEventListener("click",()=>{
        intervalo();
    });

    var boton2=document.querySelector("#boton2");

    boton2.addEventListener("click",()=>{
        clearInterval(tiempo);
    })

    
    

});




