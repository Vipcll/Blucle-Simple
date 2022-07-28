let num1;
let min;
let max;
let resultado;

do
{
    num1 = prompt("Ingresa un numero positivo para calcular el factorial");
    var validar = isNaN(num1);
}while(validar==true);

resultado = factorial(num1);

alert("el factorial de "+ num1 + " es " + resultado);


function factorial(num1)
{
    let factorial = num1;
        if(factorial<0)
        {
            factorial=(-1);
        }
        else if(factorial==0)
        {
            factorial=1;
        }
        else
        {
            for(let i=factorial-1; i>0; i--)
            {
                factorial=factorial*i;
            }
        }
    return factorial;
}