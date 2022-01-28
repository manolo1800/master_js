'use strict'

var numero = parseInt(prompt('introducidir un numero'));

while(isNaN(numero))
{
    numero = parseInt(prompt('valor errado, introduce un numero profavor'));
}

for(let i=1;i<=numero;i++)
{
    let result=i%2;

    if(result==0)
    {
        document.write(i+' par'+'<br>');
    }else if(result==1)
    {
        document.write(i+' inpar'+'<br>');
    }
}

