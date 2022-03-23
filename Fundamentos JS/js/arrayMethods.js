//Metodos utiles que no mutan el arreglo original

const arr = ['HTML', 'CSS', 'JS'];
const numbers = [10, 26, 33, 14, 56, 96];

//filter - Crea un nuevo arreglo en base a la condicion que se indique dentro de la funcion

const newArr = arr.filter(element => element === 'JS');

//includes - Comprueba si un elemento existe en el array, retorna un bool

const include = arr.includes('JS');

//Some - Devuelve un bool si al menos un valor cumple con alguna condicion

const some = arr.some(element => element === 'JS');

//Find - Devuelve el primer elemento que cumpla con la condicion;

const find = arr.find(element => element === 'JS');

//Every - Retorna un bool si todos cumplen con la condicion

const every = arr.every(element => element === 'JS');

//Reduce - Sirve para acumular el total de valores numericos de un arreglo

const resultado = numbers.reduce((total, numero) => numero + total, 0);