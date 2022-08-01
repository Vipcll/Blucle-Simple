var comida = [];
var pregunta;

do{

pregunta = prompt("Ingrese una comida");
comida.unshift(pregunta);
pregunta =prompt("desea continuar ?? Ingrese 1 para salir ");

}while(pregunta != 1);

console.log(comida);
