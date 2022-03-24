// Fetch API

const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/photos';

const consultarAPI = () => {
    fetch(url)
        .then(response => respuesta.json())
        .then(resultado => {
            console.log(resultado);
        })
}

//Async Await

const consultarAPI2 = async () => {

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    resultado.forEach(element => {
        console.log(element);
    });
}

//Multiples consultas Async Await

const consultarAPI3 = async () => {

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    //Hacer multiples peticiones afecta al performance de nuestra aplicacion ya que los tiempos de carga son indispensables.

    const respuesta2 = await fetch(url2);
    const resultado2 = await respuesta2.json();

    resultado2.forEach(element => {
        console.log(element);
    });
}

// Promesas y mejora de ejecucion de metodos async await

const consultarAPI4 = async () => {

    const [res1, res2] = Promise.all([fetch(url), fetch(url2)]); //AMbos metodos se ejecutan al mismo tiempo

    const response1 = await res1.json();
    const response2 = await res2.json();

    console.table(response1);
    console.table(response2);
}

//Template strings - Es una forma de concatenar texto y variables en JS