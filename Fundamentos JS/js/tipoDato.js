// Tipos de dato: los tipos de dato en js son dinamicos

let algo; // undefined

let otro = 20 // number

const bool = true; // bool

const n1 = 20.20;
const n2 = 30;
const n3 = -100; // * Todos los valores numericos son tratados como number

const cadena = "30"; // string

const wrande = BigInt(4567897654567); //BigInt; Se debe hacer una cohersion de tipo BigInt a un "number", de lo contrario siempre sera number

// * no se pueden mezclar number con BigNumber

//Cohersion de datos: Cambiar el tipo de dato de origen para hacer operaciones entre valores de distinto tipo de dato 

//Symbol

const simbolo1 = Symbol(30);

const simbolo2 = Symbol(30);

console.log(simbolo1 === simbolo2); //False; Las variables de este tipo de dato siempre seran unicos

console.log(symbol.valueOf());

//Object/Null; Basicamente ambos son objetos.

const object = null;



