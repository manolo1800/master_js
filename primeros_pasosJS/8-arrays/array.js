'use strict'

//declarar arrays
var lenguajes=new Array('php','js','python','GO');
var lenguajes=['php','js','python','GO'];

//Recorrer arrays

//recorrer arrays con for
/*for(let i=0;i<(array.length);i++)
{
    console.log(array[i]);
}*/

//recorrer arrays con foreach
/*lenguajes.forEach((elemento,indice)=>{
    console.log(elemento);
});*/

//arrays multidimencionales
var peliculas=[
    ['chuki','la ouija','anabelle'],
    ['Pasante de moda','Ladrona de identidades','Space Jam'],
    ['venom','spiderman no way home','rapidos y furioso 8']
];

peliculas[1].push('Mr.bean');//insertar datos en un array

var categorias=['terror','comedia','accion'];

var cine=[categorias,peliculas];

document.write('<table>');
for(let i=0; i<= cine.length;i++)
{   
    document.write('<tr>');
        document.write('<th>'+cine[0][i]+'</th>');
    document.write('</tr>');
    cine[1][i].forEach((elemento)=>{
        document.write('<tr>');
        document.write('<td>'+elemento+'</td>');
        document.write('</tr>');
    });
}
document.write('</table>');

document.write('<br>'+categorias.indexOf('terror'));//buscar indice de un array con el dato que contiene

var texto="texto1,texto2,texto3";
var array=texto.split(",")//convertir texto en array
document.write("<br>"+array[1]);

//recorrer arrays con for in 
for(let lenguaje in lenguajes)
{
    console.log(lenguajes[lenguaje]);
}

var busqueda = lenguajes.find(lenguaje => lenguajes ="php");

console.log(busqueda);