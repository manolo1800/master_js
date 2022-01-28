'use strict'


/*------------SELECCIONAR ELEMENTOS POR ID--------------*/
function cambiaColor(color){
    caja.style.background=color;
}
var caja=document.getElementById("miCaja");
caja.innerHTML="TEXTO EN LA CAJA DESDE JS";
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";
caja.style.ClassName="hola hola2";
console.log(caja);

var hr=document.createElement("hr");
var br=document.createElement("br");
var seccion=document.querySelector("#miseccion");


var alldiv=document.querySelectorAll("div");
alldiv[2].innerHTML="texto inneHTML";

for(let i=1;i<(alldiv.length);i++)
{
    alldiv[i].style.color="blue";
    alldiv[i].innerHTML="texto div"+i;
}

var valor;

for(valor in alldiv){
    if(typeof alldiv[valor].textContent == 'string')
    {
        var parrafo=document.createElement("p");
        var texto=document.createTextNode(alldiv[valor].textContent);
        parrafo.appendChild(texto);
        parrafo.append(texto);
        seccion.prepend(parrafo);
        
    }
};

seccion.prepend(hr);


/*-------------SELECCIONAR ELEMENTOS POR SU CLASE--------------*/

var rojos=document.getElementsByClassName("rojo");
var amarillo=document.getElementsByClassName("amarillo");
var azul=document.getElementsByClassName("azul");

amarillo[0].style.background="yellow";
rojos[0].style.background="red";
azul[0].style.background="blue";
azul[0].style.color="white";

console.log(rojos);

