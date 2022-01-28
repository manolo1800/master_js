'use strict'

/*
    hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1=parseInt(prompt("introducir numero"));
var numero2=parseInt(prompt("introducir numero"));

 if(!isNaN(numero1) && !isNaN(numero2) && numero1<numero2)
{ 
    while(numero1<=numero2)
    {
        document.write(numero1+'<br>');
        numero1++;
    }
    
}else if(!isNaN(numero1) && !isNaN(numero2) && numero2<numero1)
{
    while(numero2<=numero1)
    {
        document.write(numero2+'<br>');
        numero2++;
    }   
}else{
    document.write("haz introducido un valor erroneo");
}
  



    
