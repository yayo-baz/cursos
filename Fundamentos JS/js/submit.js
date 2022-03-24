//Eventos del DOM - Submit

// const formulario = document.querySelector('#formulario')

// formulario.addEventListener('submit', e => {
//     e.preventDefault(); //Evita el envio del formulario

//     const nombre = document.querySelector('.nombre').value
//     const password = document.querySelector('.password').value

//     if (nombre === '' || password === '') {

//         console.log('Todos los campos son obligatorios')

//     } else {

//         console.log('Todo fine')

//     }
// })

//Crear elementos HTML

// createElement

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', e => {
    e.preventDefault(); //Evita el envio del formulario

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    const alert = document.createElement('DIV'); //Procurar usar mayusculas al crear el nuevo elemento HTML

    const alertaPrevia = doccument.querySelector('.alert');

    if (alertaPrevia) {
        alertaPrevia.remove();
    }

    alert.classList.add('alerta'); //classList agrega una clase al elemento HTML previamente creado o instanciado

    if (nombre === '' || password === '') {

        alert.textContent = 'Todos los campos son obligatorios';
        alert.classList.add('error');
    } else {

        alert.textContent = 'Todo chidori';
        alert.classList.add('exito');

    }

    formulario.appendChild(alert);
})
