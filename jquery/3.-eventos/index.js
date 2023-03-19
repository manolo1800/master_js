'use strict'

// EVENTOS



$(document).ready(()=>{
    var caja = $("#caja");
    
    // MAUSE over & out

    /*caja.mouseover(()=>{
        caja.css("background-color","red");
    });

    caja.mouseout(()=>{
        caja.css("background-color","green");
    });*/

    //HOUVER

    function changeRed(){
        $(this).css("background-color","red");
    }

    function changeGreen(){
        $(this).css("background-color","green");
    }

    caja.hover(changeRed,changeGreen);

    //CLICK y DOBLE CLICK 

    caja.click(function(){
        $(this).css("background-color","blue")
                .css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background-color","pink")
                .css("color","white");
    });

    //BLUR & FOCUS
    var nombre = $("#nombre");

    nombre.blur(function(){
        $(this).css("border","1px solid #ccc");
        $("#content").text($(this).val()).show();
        
    });
});


