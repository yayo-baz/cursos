//Condicionales

//Operadores: <, >, <=, >=, ==, ===, &&, ||

// ==: es un signo de comparacion no estricto, compara el valor de las variables sin importar el tipo de dato

// ===: es un signo de comparacion estricto, compara el tipo de dato

// cohersion de datos: es convertir un tipo de dato a otro que se requiera usar para realizar operaciones

//Ternarios

const num = 10;
const num2 = 20;
const num3 = 30;

num < num2 ? console.log('El numero1 es menor al numero2') : console.log('El numero2 es menor al numero1');

//Se pueden anidar los operadores ternarios

num === num2 ? console.log('El numero1 es igual al numero2') : num3 > num2 ? console.log('El numero3 es mayor al numero2') : console.log('El numero3 es menor al numero2');
