'use strict'

/*
    utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
    hasta introducir un numero negativo y ahi mostrar el resultado
*/
var suma = 0;
var media = 0;
var contador = 0;
do{
    var numero=parseInt(prompt("introduce un numero",0));
    contador++;
    if(numero<0 || isNaN(numero))
    {
        break;
    }else{
        suma+=numero;
        media=suma/contador;
    }

}while(numero>0)

document.write(suma+' '+media);