
    let numero;
    let contador = 0;
    let palabra;

        numero = prompt("ingrese el numero hasta el que desea contar del 1 al 10");

        if(numero>10 || numero<1)
        {
            alert("El digito ingresado no cumple con los parametros solicitados refresca la pagina para continuar");
        }
        else
        {
            alert("Aviso se muestran los datos por consola");
            for (let i =0; i < numero; i++) 
            {
                contador++;
                console.log(contador);
            }
        }

        alert("dile hola al bot para salir del ciclo mientras no digas hola el seguira insistiendo")
        do
        {

            palabra = prompt("hola !! :D");
            palabra = palabra.toLowerCase(); 


        }while(palabra != "hola");