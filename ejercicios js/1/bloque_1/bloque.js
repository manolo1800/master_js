'use strict'

var a=parseInt(prompt("introduce un numero"));
var b=parseInt(prompt("introduce un numero"));

while(a<=0 || b<=0 || isNaN(a) || isNaN(b))
{
    alert("no haz introducido un numero");
    var a=parseInt(prompt("introduce un numero"));
    var b=parseInt(prompt("introduce un numero")); 
}

if(a==b)
{
    alert("a y b son iguales");
}
else if(a>b)
{
    alert("a es mayor que b");
}
else
{
    alert("b es mayor que a");
}
