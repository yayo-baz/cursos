import Pacientes from "./Pacientes"

const ListadoPacientes = ({ pacientes, setPaciente, paciente, elimina }) => {

    return (
        <div className="md:w-1/2 h-screen overflow-y-auto">

            <>
                <h2 className="font-black text-center text-3xl">
                    Listado de Pacientes
                </h2>
                <p className="text-lg mt-5 text-center">
                    Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>
                {pacientes && pacientes.length ?
                    pacientes.map(paciente => (<Pacientes key={paciente.id} paciente={paciente} setPaciente={setPaciente} elimina={elimina}></Pacientes>))
                    :
                    <p className="text-lg mt-5 text-center">
                        Aún no se registran {''}
                        <span className="text-indigo-600 font-bold">
                            Pacientes
                        </span>
                    </p>
                }
            </>
        </div >
    )
}

export default ListadoPacientes