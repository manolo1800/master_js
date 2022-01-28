'use strict'

/*mostrar todos los numeros impares entre dos numero introducidos por el usuario*/

var numero1=parseInt(prompt("introducir un numero"));
var numero2=parseInt(prompt("introducir un numero"));
 
for(var i=numero1;i<numero2;i++)
{
    let result=i%2;
    if(result==1)
    {
        document.write(i+'<br>');
    }
    
}


