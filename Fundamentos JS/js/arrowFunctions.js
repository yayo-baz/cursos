//Arrow Functions

const sumar = function () {
    console.log(10 + 20);
}

//Funcionan igual que las funciones solo cambia la sintaxis 

const sumarArrow = () => {
    console.log(10 + 20);
}

// * Solo si se tiene una sola linea de codigo, la arrow function puede reescribirse como

const sumarArrow2 = (a, b) => {
    return a + b
}

const simplificacion = (a, b) => a + b; //Se elimina el return y las llaves


const resultado = simplificacion(20, 20);

console.log(resultado);