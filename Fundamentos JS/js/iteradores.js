// Iterar sobre arreglos

const array = ['HTML', 'CSS', 'JS', 'React'];

//foreach - Solo sirve para listar/acceder cada elemento del arreglo

array.forEach(element => {
    console.log(element);
});

// map - Crea un nuevo arreglo, el cual puede cambiar las propiedades originales del arreglo

const newArray = array.map(element => {
    return element
});