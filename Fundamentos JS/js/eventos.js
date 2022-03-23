//Eventos del DOM

const heading = document.querySelector('.heading');

heading.addEventListener('click', function () {
    console.log('Diste click en el heading');
});

heading.addEventListener('click', clickFunction);

function clickFunction() {
    console.log('Diste click en el heading');
};


const enlaces = document.querySelectorAll('.navegacion a');

enlaces.forEach(element => {
    element.addEventListener('click', () => {
        console.log('Diste click en: ', element)
    })
})

//Inputs

const inputNombre = document.querySelector('.nombre');

//Los eventos pueden ser input/keydown/keyup, el mejor es input porque captura todos los eventos

inputNombre.addEventListener('input', function (e) {
    console.log(e);
    console.log(e.data);
    console.log(e.target.value);
})

