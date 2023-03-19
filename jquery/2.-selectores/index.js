'use strict'

$(document).ready(()=>{
    //SELECTOR DE ID #nombre_id
    var rojo = $("#rojo").css("background","red")
                         .css("color","white");
    var amarillo = $("#amarillo").css("background","yellow")
                                 .css("color","white");
    var verde = $("#verde").css("background","green")
                           .css("color","white");
    
    //SELECTOR CLASE
    var zebra = $(".zebra").css("padding","5px");
    
    $(".sin_borde").click(function () { 
            $(this).addClass('zebra');        
    });

    // SELECTOR ETIQUETAS 
    var parrafo = $('p');

    parrafo.click(function() {
        if($(this).hasClass('zebra')){
            $(this).removeClass('zebra');
        }else{
            $(this).addClass('zebra');
        }
    });

    //SELECTOR ATRIBUTOS
    $('[title=google]').css('color','red');

    //FIND & PARENT

    var busqueda= $('#caja .resaltado').eq(0).parent().parent().parent().find("[title=google]");

    console.log(busqueda);
    
    
});
