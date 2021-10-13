//OPERADORES LOGICOS

/*
    son operadores que se usan para combinar dos valores booleanos y devolver un resultado verdadero o falso

    mayor:>
    mayor o igual que: >=
    menor:<
    menor o igual que: <=
    distinto que: !=
    igual:==
    or:||
    and:&&
    not:!
*/

var a=40;
var b=60;
var c=10;

if(a==b || a==c)
{
    console.log("x");
}
else if(b>=c && c<a)
{
    console.log("y");
}
else
{
    console.log("z");
}

//SWITCH

/*
    es equivalente a hacer multiples if anidados pero de forma mas organizada 
*/

var edad=25;


switch(edad)
{
    case 18: //en caso de que la variable edad sea igual 18 
        console.log("acabas de cumplir la mayoria de edad");//ejecuta esto 
    break;//y se rompe el condicional
    
    case 25:
        console.log("ya eres un adulto");
    break;    

    case 75:
        console.log("eres viejo");
    break;
    
    default:
        console.log("tu edad es neutra");
    break;    
}