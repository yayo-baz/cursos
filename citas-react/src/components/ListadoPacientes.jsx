import Pacientes from "./Pacientes"

const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2 h-screen overflow-y-auto">
            <h2 className="font-black text-center text-3xl">
                Listado de Pacientes
            </h2>
            <p className="text-lg mt-5 text-center">
                Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            <Pacientes></Pacientes>
            <Pacientes></Pacientes>
            <Pacientes></Pacientes>
            <Pacientes></Pacientes>
            <Pacientes></Pacientes>
            <Pacientes></Pacientes>
        </div>
    )
}

export default ListadoPacientes