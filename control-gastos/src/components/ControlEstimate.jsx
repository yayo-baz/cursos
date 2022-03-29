import { useState, useEffect } from "react"

const ControlEstimate = ({ presupuesto, gastos }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });

    }

    useEffect(() => {
        //Cada que gastos tenga un cambio, useEffect manejara el cambio hacia el state

        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);

        const totalDisponible = presupuesto - totalGastado;

        setGastado(totalGastado);
        setDisponible(totalDisponible);

    }, [gastos]);

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
                    <span>Disponible: </span> {formatAmount(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatAmount(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlEstimate