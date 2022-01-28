'use strict'

window.addEventListener("load",function(){
   
    //capturar submit
    
    var box_dashed=document.querySelector(".dashed");
    box_dashed.style.display="none";

    

    var form=document.querySelector("#formulario");
    form.addEventListener("submit",function(){
        
        //datos del formulario
        var nombre=document.querySelector("#nombre").value;
        var apellido=document.querySelector("#apellido").value;
        var edad=document.querySelector("#edad").value;

        if(nombre.trim() == null || nombre.trim().length==0 ){
            alert("el nombre esta mal");
            document.querySelector("#error_nombre").innerHTML="el nombre no es valido";
            document.querySelector(".error").style
            return false;
        }else{
            document.querySelector("#error_nombre").style.display="none"    
        }
        if(apellido.trim() == null || apellido.trim().length==0){
            alert("el apellido esta mal");
            return false;
        }
        if(edad.trim() == null || edad.trim().length==0){
            alert("la edad esta mal");
            return false;
        }
        
        //mostrar datos en pantalla
        var box_dashed=document.querySelector(".dashed");
        box_dashed.style.display="block";
        
        var p_nombre=document.querySelector("#p_nombre");
        var p_apellido=document.querySelector("#p_apellido");
        var p_edad=document.querySelector("#p_edad");

        p_nombre.innerHTML=nombre;
        p_apellido.innerHTML=apellido;
        p_edad.innerHTML=edad;
        
    });
    
});