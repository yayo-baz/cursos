import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [usuario, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [derechohabiente, setDerechohabiente] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.usuario)
            setEmail(paciente.email)
            setDerechohabiente(paciente.derechohabiente)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const handleSubmit = (e) => {
        e.preventDefault();

        //Valida que los campos esten llenos
        if ([usuario, email, derechohabiente, alta, sintomas].includes('')) {

            //Si hay un campo vacio cambia el estado de error a true para mostrar el componente Error
            return setError(true);
        }

        //Si todos los campos estan llenos deja oculto el componente de Error
        setError(false);

        //Asigna un id unico a cada registro para simular una bd
        const generarId = () => {
            const random = Math.random().toString(36).substring(2);
            const date = Date.now().toString(36);

            return random + date;
        }


        const objPacientes = {
            usuario,
            email,
            derechohabiente,
            alta,
            sintomas
        }

        if (paciente.id) {
            //Edita el registro de un paciente ya existente

            objPacientes.id = paciente.id;
            const pacienteActualizado = pacientes.map(

                pacienteNuevo => (pacienteNuevo.id === paciente.id ? objPacientes : pacienteNuevo));

            //Llama al cambio de estado del array de pacientes y asigna el paciente actualizado
            setPacientes(pacienteActualizado);

            //Reinicia el estado del objeto paciente
            setPaciente({});

        } else {
            //Agrega un nuevo registro
            objPacientes.id = generarId();
            setPacientes([...pacientes, objPacientes]);
        }

        //Reinicia el form
        setNombre('');
        setEmail('');
        setDerechohabiente('');
        setAlta('');
        setSintomas('');
    }

    return (
        <div className="md:w-1/2">
            <h2 className="font-black text-center text-3xl">
                Seguimiento de Pacientes
            </h2>
            <p className="text-lg mt-5 text-center">
                Añade pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white p-5 m-10 shadow-md rounded-lg" onSubmit={handleSubmit}>
                <div>
                    <label className="my-2 block font-black uppercase" htmlFor="name">nombre del paciente</label>
                    <input
                        className="w-full border-2 p-2 placeholder-indigo-400 rounded-lg"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Nombre Completo"
                        value={usuario}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <label className="my-2 block font-black uppercase" htmlFor="email">email</label>
                    <input
                        className="w-full border-2 p-2 placeholder-indigo-400 rounded-lg"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="my-2 block font-black uppercase" htmlFor="name">derechohabiente</label>
                    <input
                        className="w-full border-2 p-2 placeholder-indigo-400 rounded-lg"
                        name="derechohabiente"
                        id="derechohabiente"
                        type="text"
                        placeholder="Nombre del derechohabiente"
                        value={derechohabiente}
                        onChange={(e) => setDerechohabiente(e.target.value)}
                    />
                    <label className="my-2 block font-black uppercase" htmlFor="name">alta</label>
                    <input
                        className="w-full border-2 p-2 rounded-lg"
                        name="date"
                        id="date"
                        type="date"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                    <label className="my-2 block font-black uppercase" htmlFor="name">síntomas</label>
                    <textarea
                        className="w-full border-2 p-2 placeholder-indigo-400 rounded-lg"
                        name="síntomas"
                        id="síntomas"
                        type="text"
                        placeholder="Síntomas del paciente"
                        value={sintomas} onChange={(e) => setSintomas(e.target.value)}
                    />
                    {error && <Error><p>* Debes llenar todos los campos</p></Error>}
                </div>
                <button
                    className="w-full uppercase bg-indigo-600 p-2 my-2 hover:bg-indigo-800 rounded-lg text-white cursor-pointer"
                    type="submit"
                >
                    {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                </button>
            </form >
        </div >
    )
}
export default Formulario