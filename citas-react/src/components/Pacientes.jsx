const Pacientes = ({ paciente }) => {
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
        </div>
    )
}

export default Pacientes
