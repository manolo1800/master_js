'use strict'

/*
1 pedir 6 numeros por pantalla y meterlos en un array
2 mostrar el array entero(todos sus elementos) en el cuerpo de la pagina y por consola
3 ordenarlo y mostrarlo
4 invertir su orden y mostrarlo
5 mostrar cuantos elementod tiene el array
6 busqueda de un valor introducida por el usuario que nos diga si lo encuentra y su indice 
*/

var numeros=new Array();

//1

for(let i=0;i<5;i++)
{
    numeros.push(parseInt(prompt("introduce un numero")));
}

//2
document.write("<h2>numeros introducidos</h2>");
numeros.forEach((numero)=>{
    console.log(numero);
    document.write(numero+"<br/>");
});

//3
document.write("<h2>datos ordenados</h2>");
var ordenados=numeros.sort();
document.write(ordenados);

//4 
document.write("<h2>datos invertidos</h2>");
var invertidos=numeros.reverse();
document.write(invertidos);

//5
document.write("<h2>cantidad de numeros</h2>");
var cantidad=numeros.length;
document.write(cantidad);

//6
document.write("<h2>buscar</h2>");
var buscar=parseInt(prompt("buscar"));
var busca=numeros.indexOf(buscar);
document.write(buscar);

