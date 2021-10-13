//TIPOS DE DATOS

/* 
    son integer,string,boolean,array y objeto
    
    integer(int):son numeros {1,2,3,4....n}
    
    string:son cadenas de de texto "esto es una cadena de texto" siempre van entre "" o ''
    
    boolean: solo tiene dos valores true(1) y false(0)
    
    array: son colecciones finitas de datos de un mismo tipo que se almacenan de forma consecutiva y reciben 
    un nombre comun

    objeto:son entidades independientes con propiedades y tipos

*/ 

var entero = 1;
var string = "esto es un string";
var boolean = true;
var array= ["amarillo","rojo","azul"];
var objCar=new Object();
objCar.make='ford';
objCar.model='mustang';
objCar.year='1969';

console.log(objCar , entero, string, boolean, array);