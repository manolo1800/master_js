//CONDICIONALES

/*
    son instrucciones que permiten romper la secuencialidad de la ejecucion de un programa;esto significa que permiten que se 
    realicen unas instrucciones y omite otras de acuerdo a la evaluacion de una condicion . algunas de estas son if,switch.
*/


//IF
/*
    se utiliza cuando se tiene una codicion que nos arroja dos resultados: true o false. Tambien puede explicarse de la siguiente
    forma SI sucede esto ejecutar bloque de codigo 1, casi siempre va acompañado de un else que es un Y SI NO ejecutar bloque de codigo 2
*/ 

var edad=20;

if(edad<18)
{
    document.write("lo siento no puede pasar ");
}
else
{
    document.write("bienvenido");

    if(edad<21)
    {
        document.write(" pero no puedes tomar");
    }
}