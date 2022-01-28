'use strict'

/*
    Muestre todos lo numeros divisores de un numero introducido 
*/

var numero = parseInt(prompt('introducir numero'));

for(let i=0;i<numero;i++)
{
    let result= numero%i;

    if(result==0)
    {
        document.write(i+'<br>');
    }
}

