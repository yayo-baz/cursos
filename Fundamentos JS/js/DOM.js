// Elementos del DOM

//document.querySelector - Permite acceder a las propiedades de un elemento html por medio del nombre de alguna de sus clases

const heading = document.querySelector('.heading');

console.log(heading);//querySelector trae maximo un objeto

//document.querySelectorAll - Retorna una colleccion/array de uno o mas elementos html por medio del nombre de alguna de sus clases

const enlaces = document.querySelectorAll('.navegacion a');

console.log(enlaces);

//Para acceder a las propiedades individuales de la coleccion debe recorrerse el arreglo uno por uno y asi poder acceder a sus propiedades

enlaces.forEach(element => console.log(element.textContent));


//Manipulacion de elementos del DOM

heading.textContent = 'Nuevo Heading desde JS'

enlaces.forEach(element => element.textContent = 'Link de JS');
