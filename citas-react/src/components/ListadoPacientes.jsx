import Pacientes from "./Pacientes"

const ListadoPacientes = ({ pacientes }) => {
    return (
        <div className="md:w-1/2 h-screen overflow-y-auto">
            {pacientes && pacientes.length ?
                (<>
                    <h2 className="font-black text-center text-3xl">
                        Listado de Pacientes
                    </h2>
                    <p className="text-lg mt-5 text-center">
                        Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    {pacientes.map(paciente => (<Pacientes key={paciente.id} paciente={paciente}></Pacientes>))}
                </>)
                :
                (<>
                    <h2 className="font-black text-center text-3xl">
                        Listado de Pacientes
                    </h2>
                    <p className="text-lg mt-5 text-center">
                        No se encontraron {''}
                        <span className="text-indigo-600 font-bold">
                            Pacientes
                        </span>
                    </p>
                </>)
            }
        </div >
    )
}

export default ListadoPacientes