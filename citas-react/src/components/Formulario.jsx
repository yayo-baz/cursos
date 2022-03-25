import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes }) => {

    const [usuario, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [derechohabiente, setDerechohabiente] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([usuario, email, derechohabiente, alta, sintomas].includes('')) {
            return setError(true);
        }

        setError(false);

        const generarId = () => {
            const random = Math.random().toString(36).substring(2);
            const date = Date.now().toString(36);

            return random + date;
        }

        const objPacientes = {
            id: generarId(),
            usuario,
            email,
            derechohabiente,
            alta,
            sintomas
        }

        setPacientes([...pacientes, objPacientes]);

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
                <input
                    className="w-full bg-indigo-600 p-2 my-2 hover:bg-indigo-800 rounded-lg text-white cursor-pointer"
                    type="submit"
                    value="Agregar Paciente">
                </input>
            </form >
        </div >
    )
}
export default Formulario