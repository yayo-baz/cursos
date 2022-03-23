// Arrays

const arr = ['HTML', 'CSS', 'JS'];

// Añadir elementos a un array

arr.push('React'); //Agrega al final del arreglo el nuevo valor

arr.unshift('React'); //Agrega al inicio del arreglo el nuevo valor

// * push y unshift no se deben usar ya que modifican el arreglo original

// La forma correcta de agregar elementos a un array

const newArr = [...arr, 'React']; // Agrega el nuevo elemento al final del arreglo sin modificar el arreglo original

const newArr2 = ['React', ...arr]; // Agrega el nuevo elemento al inicio del arreglo sin modificar el arreglo original

// Eliminar elementos a un array

arr.pop(); //Elimina al final del arreglo el nuevo valor

arr.shift(); //Elimina al inicio del arreglo el nuevo valor

arr.splice(1, 1); //Elimina (x, y), a partir de x y hasta y cantidad de elementos


// * pop, shift y splice no se deben usar ya que modifican el arreglo original

// La forma correcta de eliminar/buscar elementos en un array

const delArr = arr.filter(d => {
    return d !== 'React';
});

// Reemplazar elementos de un array

const array = [
    { id: 12, nombre: "Restaurante3", ventas: 4112, FAlta: " 2004 - 04 - 15T00: 00 " },
    { id: 1, nombre: "Restaurante1", ventas: 150, FAlta: "2004 - 01 - 01T12: 45" },
    { id: 7, nombre: "Bar2", ventas: 3540, FAlta: "2007 - 04 - 15T00: 00" },
    { id: 2, nombre: "Restaurante2", ventas: 200, FAlta: "2004 - 04 - 15T00: 00" },
    { id: 6, nombre: "Bar1", ventas: 1200, FAlta: "2012 - 04 - 15T00: 00 " },
    { id: 3, nombre: "Restaurante3", ventas: 4112, FAlta: "2004 - 04 - 15T16: 15" },
    { id: 4, nombre: "Pasteleria1", ventas: 654, FAlta: "2010 - 04 - 12T00: 00" },
    { id: 5, nombre: "Pasteleria2", ventas: 783, FAlta: "2012 - 04 - 15T00: 00" },
    { id: 10, nombre: "Restaurante2", ventas: 200, FAlta: "2004 - 07 - 15T05: 09" },
    { id: 8, nombre: "Restaurante1", ventas: 150, FAlta: "2004 - 01 - 01T00: 00" },
    { id: 9, nombre: "Bar2", ventas: 3540, FAlta: "2007 - 10 - 15T00: 00" },
    { id: 14, nombre: "Pasteleria2", ventas: 783, FAlta: "2012 - 04 - 15T21: 12 " },
    { id: 11, nombre: "Bar1", ventas: 1200, FAlta: "2012 - 04 - 15T00: 00 " },
    { id: 13, nombre: "Pasteleria1", ventas: 654, FAlta: "2010 - 04 - 15T08: 08" },
];

const arrayGeneral = [...array];

array.forEach(element => {
    arrayGeneral.push(element);
});

let id = 1;

for (const i in arrayGeneral) {
    arrayGeneral[i].id = i;
}

arrayGeneral.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

console.table(arrayGeneral);