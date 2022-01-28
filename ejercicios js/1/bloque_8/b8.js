'use strict'

/**
    Calculadora:
    -Pida dos numeros por pantalla
    -Si se mete un numero mal  que no vuelvas a pedir en el cueropo de la pagina, en una alerta y por consola el resultado de sumar, restar
    ,multiplicar y dividir esas dos sifras
 */


var a=parseInt(prompt("introduce un numero"));
var b=parseInt(prompt("introduce un numero"));

while(isNaN(a) && isNaN(b))
{
    var a=parseInt(prompt("introduce un numero"));
    var b=parseInt(prompt("introduce un numero"));  
}

var suma = a+'+'+b+'='+(a+b);
var resta= a+'-'+b+'='+(a-b);
var multiplicar= a+'x'+b+'='+(a*b);
var dividir=  a+'/'+b+'='+(a/b);

document.write(suma+'<br>'+resta+'<br>'+multiplicar+'<br>'+dividir);
console.log(suma+'<br>'+resta+'<br>'+multiplicar+'<br>'+dividir);
alert(suma+'<br>'+resta+'<br>'+multiplicar+'<br>'+dividir);