// Objetos

const nombre = "Tablet"

const precio = 300

const disponibilidad = true

const producto = {
    nombre: nombre,
    precio: precio,
    disponibilidad: disponibilidad
}

console.log(nombre, precio, disponibilidad);

console.table(producto);

console.log(producto.nombre); //Con la sintaxis de punto podemos acceder a las propiedades del objeto

// Destructuring

const { } = producto; // Esto sirve para extraer valores del objeto.

const { name, price, available } = producto; // Puedes crear nuevas variables al momento de extraer las propiedades de otro objeto

console.log(name, price, available);

// Object Literal Enhacement; Es lo contrario al Destructuring

const auth = true;
const user = "Iaio";

const newObject = {        // const newObject = {
    autenticado: auth,     //   auth,
    usuario: user          //   user
}                          // }

// * Las propiedades del objeto se pueden crear con variables previamente establecidas

console.table(newObject);

// Un const objeto si puede reescribir el valor de sus propiedades
newObject.usuario = "Leonardo";

console.log("Cambiar valor de una propiedad", newObject);

// En caso de no existir la propiedad o el valor, entonces añade la nueva propiedad

newObject.imagen = "imagen.jpg";

console.log("Creacion de nueva propiedad", newObject);

// Delete

delete newObject.usuario

console.log("Eliminacion de una propiedad", newObject);

// Object.freeze(objeto) impide modificar o eliminar los objetos 
// Object.seal(objeto) solo permite modificar propiedades existentes de los objetos, no agregar ni eliminar