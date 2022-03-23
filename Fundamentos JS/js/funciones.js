//Function Declaration

// * Pueden instanciarse en funciones en cualquier momento, no importa el orden de instancia o de creacion

//Funcion simple
function suma() {
    //Dentro todo el codigo/operaciones 
}

suma(); //Instancia o llamada al metodo


//Funcion con parametros

function resta(a, b) {
    a - b;
}

resta(2, 1);

//Funcion con parametros por defecto

function resta2(a = 10, b) {
    a - b;
}

resta2(2, 1);

//Asignar resultado de una funcion a una variable

function resta2(a = 10, b) {
    return a - b;
}

const resultado = resta2(2, 1);

