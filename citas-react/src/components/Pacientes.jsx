const Pacientes = () => {
    return (
        <div className="bg-white p-5 m-10 shadow-md rounded-lg">
            <p className="font-black mb-3 uppercase">
                nombre del paciente: {''}
                <span className="font-normal normal-case">
                    Paciente 1
                </span>
            </p>
            <p className="font-black mb-3 uppercase">
                email: {''}
                <span className="font-normal normal-case">
                    corre@correo.com
                </span>
            </p>
            <p className="font-black mb-3 uppercase">
                derechohabiente: {''}
                <span className="font-normal normal-case">
                    Padre del paciente
                </span>
            </p>
            <p className="font-black mb-3 uppercase">
                fecha de alta: {''}
                <span className="font-normal normal-case">
                    22 de marzo de 2022
                </span>
            </p>
            <p className="font-black mb-3 uppercase">
                síntomas: {''}
                <span className="font-normal normal-case">
                    Occaecat amet officia nulla labore cupidatat nostrud aliqua Lorem.
                </span>
            </p>
        </div>
    )
}

export default Pacientes
