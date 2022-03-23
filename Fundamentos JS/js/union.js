// Unir correctamente 2 objetos

const obj1 = {
    nombre: "objeto1",
    precio: 110,
    active: true
};

const obj2 = {
    //  nombre: 'objeto2', -- Em caso de que las propiedades se llamen igual, tomara el valor de la ultima propiedad encontrada con ese nombre
    articulo: 'objeto2',
    active: true
}

// * Lo correcto es no modificar las propiedades de los objetos directamente, esto causa perdida de datos

// Spread Operator( ... ): Copia los valores de un objeto y los "inserta" en uno nuevo

const nuevoObjeto = { ...obj1, ...obj2 };

const nuevoObjeto2 = {
    producto: { ...obj1 },
    cliente: { ...obj2 },

}

console.table(nuevoObjeto);
console.table(nuevoObjeto2);
console.table(obj1);
console.table(obj2);