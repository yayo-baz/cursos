import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Pacientes = ({ paciente, setPaciente, elimina }) => {

    const handleElimina = () => {

        const alerta = withReactContent(Swal);

        alerta.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                alerta.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                elimina(paciente.id)
            }
        })
    }

    return (
        <div className="bg-white p-5 m-10 shadow-md rounded-lg">
            <p className="font-black mb-3 uppercase">
                nombre del paciente: {''}
                <span className="font-normal normal-case">
                    {paciente.usuario}
                </span>
            </p>
            <p className="font-black mb-3 uppercase">
                email: {''}
                <span className="font-normal normal-case">
                    {paciente.email}
                </span>
            </p>
            <p className="font-black mb-3 uppercase">
                derechohabiente: {''}
                <span className="font-normal normal-case">
                    {paciente.derechohabiente}
                </span>
            </p>
            <p className="font-black mb-3 uppercase">
                fecha de alta: {''}
                <span className="font-normal normal-case">
                    {paciente.alta}
                </span>
            </p>
            <p className="font-black mb-3 uppercase">
                síntomas: {''}
                <span className="font-normal normal-case">
                    {paciente.sintomas}
                </span>
            </p>

            <div className="flex justify-between">
                <button className="py-2 px-10 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 font-bold uppercase
                " onClick={() => setPaciente(paciente)}>
                    Editar
                </button>
                <button className="py-2 px-10 bg-red-600 text-white rounded-lg hover:bg-red-800 font-bold uppercase"
                    onClick={handleElimina}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Pacientes
