// Function Expression

//Declarar una funcion
const sumar = function () {
    // Todo el codigo aqui
}

//* A diferencia de las funciones declarativas estas no se pueden instanciar antes de ser creadas

const sumar2 = function () {
    console.log(2 + 1)
}

sumar2();

//Tambien pueden instanciarse como resultado de una variable
const sumar3 = function () {
    return 2 + 1
}

const resultado = sumar3();
