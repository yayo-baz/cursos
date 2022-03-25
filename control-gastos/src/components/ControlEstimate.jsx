const ControlEstimate = ({ presupuesto }) => {

    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });

    }


    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatAmount(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatAmount(presupuesto)}
                </p>
                <p>
                    <span>Presupuesto: </span> {formatAmount(presupuesto)}
                </p>
            </div>
        </div>
    )
}

export default ControlEstimate