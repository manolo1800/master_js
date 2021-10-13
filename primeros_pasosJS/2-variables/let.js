/*
las variables declaradas con let tienen un alcance local
a diferencia de las declaradas con var que tienen un alcance global
por lo tanto las variables let solo tienen valor dentro del 
bloque donde fueron creadas
*/

'use strict'

var numero = 50;
console.log(numero);

if(true)
{
    let numero=40;
    console.log(numero);
}

console.log(numero);

/*
el resultado de este script es 50,40,50 por que el valor de numero
cob 40 solo existe dentro del if
*/