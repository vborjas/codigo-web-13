

// cuantos datos contiene una variable?
// una varuable contiene 1 dato a la vez

// ** Un arreglo es un conjunto de datos
// ** la forma en que declaramos un arreglo es parecida la de una variable
// ** sin embargo debemos colocar [] despues del igual, ejemplo

// !! esto es un arreglo vacio, para poder llenanorlo yo debe colocar los datos separado por comas

//!! :eye: siempre empezar a contar los indices desde el 0
const alumnos = ["Erick", "Karina", "Patricia", "kjaris", "Bruno"];
console.log("alumnos", alumnos);

//** Pueda contener datos de distintos tipos */
const variosTipo = [100, "Juana", true, 100.5];

const productos = ["Table", "Laptop", "Smartphone", "TV", "Radio"];

// ** como acceder a un dato en especifico
console.log(alumnos[2]);
console.log(alumnos[4]);

// ** Se podra alterar un dato del array?
// ! voy a reasignar el valor del indice 0
alumnos[0] = "Pepe";
console.log("alumno reasignado", alumnos);

// ! asi como se puede reasignar un dato en especifico, tambien podemos crear datos
// ** alumnos[4] es el ultimo dato del array

alumnos[5] = "Erick";
console.log("Creando un nuevo elemento", alumnos);


alumnos[6] = "Joel";
console.log("Creando un nuevo elemento", alumnos);

// ** como puede saber cuantos elementos contiene un array?
// ** los array tienen una funcion llamada length la cual nos permite saber cuantos elementos tiene el array
console.log("Cantidad de elementos", alumnos.length);

//! quiero agregar un elemento en la ultima posicion del array

// esto en que posicion añade a juan?
alumnos[alumnos.length] = "Juan";
console.log("Creando un nuevo elemento", alumnos);

//** Y si quiero obtener el ultimo elemento de mi array? */
// .length retorna un number 
console.log("ultimo elemento", alumnos[alumnos.length - 1]);