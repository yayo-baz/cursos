//Scope es el alcance que tienen las variables y metodos

const precio = 0;//Existe de manera global, funciones y metodos pueden acceder a ella

function unaFuncion() {
    const precio = 100; //Esta variable solo existe dentro de la funcion
    console.log(precio);

}

unaFuncion();

console.log('Fuera de la funcion o global', precio);