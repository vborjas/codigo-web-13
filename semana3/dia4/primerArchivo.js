alert ("hola Victor")

const numero1 = 10
const numero2 = 20


console.log ("esto es una prueba de console")

console.error("probando el error")

console.warn("advertencia de aplicacion")

const valor1 = prompt("ingrese un valor1")
const valor2 = prompt("Ingrese un valor2")

const operacion = prompt("Ingrese una operacion ser + - * /")

let resultadoCalculadora

//+ se coloca un simbolo de mas para convertir la variable
if (operacion=== "+") {
resultadoCalculadora = +valor1 + +valor2   
console.log("Resultados: ",resultadoCalculadora) 
}else if(operacion=== "-"){


}


const num1 = prompt("Ingrese un valor")
const num2  = prompt("Ingrese un valor")

if(+num1 > +num2){
    console.log("numero1 es mayor:", num1)
}else{
    console.log ("numero2 es mayor:", num2)
}





const num1 = +prompt("Ingrese un valor")
const num2 = +prompt("Ingrese un valor")
const num3 = +prompt("Ingrese un valor")

let Resultado= "este numero es mayor"

if (num1 > num2  && num1 > num3) {
  Resultado="el numero mayor es el num1"

}else if (num2 > num1 && num2 < num3){
Resultado= "El numero mayor es el Num2"
}
console.log("El numero es mayor es el Num3");
