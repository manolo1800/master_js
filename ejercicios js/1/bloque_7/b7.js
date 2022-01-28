'use strict'

/*
    tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt("intoducir un numero"));

document.write('<h1> tabla del '+numero+'</h1>')

for(let i = 0;i<=10;i++)
{
    document.write(numero+'x'+i+'='+numero*i+'<br>');
}