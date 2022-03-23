// Destructuring con 2 o mas objetos

const obj1 = {
    nombre: "objeto1",
    precio: 110,
    active: true
};

const obj2 = {
    nombre: 'objeto2',
    active: true
}

const { nombre, precio, active } = obj1;

console.log(nombre, precio, active);

// Esta linea marcara error porque ya se han instanciado los nombres de las variables/propiedades previamente
// const { nombre, active } = obj2; 

// Para acceder a los valores de propiedades con el mismo nombre se deben crear "alias"

const { nombre: nameObj2, active: activeObj2 } = obj2;

console.log(nameObj2, activeObj2);